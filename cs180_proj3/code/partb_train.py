"""CS180 Fall 2026 Project 3 Part B — MNIST denoising / flow matching.

Reproducible local/Colab/Kaggle trainer. Outputs are *actual* figures only after
training. Epoch checkpoint writes are atomic, and --resume restarts a run.

No network is used except torchvision's initial MNIST download. Not part of Part A.
"""
from __future__ import annotations

import argparse
import csv
import json
import math
import os
import random
import time
from pathlib import Path

import numpy as np
import torch
from torch import Tensor, nn
import torch.nn.functional as F
import torchvision
from torchvision import transforms
from torchvision.utils import make_grid, save_image

# Torch defaults can oversubscribe CPUs in container smoke checks.


class Conv(nn.Sequential):
    def __init__(self, c_in: int, c_out: int):
        super().__init__(nn.Conv2d(c_in, c_out, 3, 1, 1), nn.BatchNorm2d(c_out), nn.GELU())


class ConvBlock(nn.Sequential):
    def __init__(self, c_in: int, c_out: int):
        super().__init__(Conv(c_in, c_out), Conv(c_out, c_out))


class DownBlock(nn.Sequential):
    def __init__(self, c_in: int, c_out: int):
        super().__init__(nn.Conv2d(c_in, c_out, 3, 2, 1),
                         nn.BatchNorm2d(c_out), nn.GELU(), ConvBlock(c_out, c_out))


class UpBlock(nn.Sequential):
    def __init__(self, c_in: int, c_out: int):
        super().__init__(nn.ConvTranspose2d(c_in, c_out, 4, 2, 1),
                         nn.BatchNorm2d(c_out), nn.GELU(), ConvBlock(c_out, c_out))


class FCBlock(nn.Sequential):
    def __init__(self, c_in: int, c_out: int):
        super().__init__(nn.Linear(c_in, c_out), nn.GELU(), nn.Linear(c_out, c_out))


class UNet(nn.Module):
    """Follows the supplied 28→14→7→1→7→14→28 UNet schematic.

    mode: 'denoise' (unconditional), 'time', or 'class'.
    class mode uses 10-way one-hot class vectors and zero vector for unconditional.
    """
    def __init__(self, D: int = 64, mode: str = 'denoise'):
        super().__init__()
        if mode not in ('denoise', 'time', 'class'):
            raise ValueError(mode)
        self.D = D
        self.mode = mode
        self.conv0 = ConvBlock(1, D)
        self.down1 = DownBlock(D, D)
        self.down2 = DownBlock(D, 2 * D)
        self.flatten = nn.Sequential(nn.AvgPool2d(7), nn.GELU())
        self.unflatten = nn.Sequential(nn.ConvTranspose2d(2*D, 2*D, 7, 7),
                                       nn.BatchNorm2d(2*D), nn.GELU())
        self.up1 = UpBlock(4*D, D)
        self.up2 = UpBlock(2*D, D)
        self.conv_out = ConvBlock(2*D, D)
        self.last = nn.Conv2d(D, 1, 3, 1, 1)
        if mode != 'denoise':
            self.fc1_t = FCBlock(1, 2*D)
            self.fc2_t = FCBlock(1, D)
        if mode == 'class':
            self.fc1_c = FCBlock(10, 2*D)
            self.fc2_c = FCBlock(10, D)

    def forward(self, x: Tensor, t: Tensor | None = None, c: Tensor | None = None):
        if x.ndim != 4 or x.shape[1:] != (1,28,28):
            raise ValueError(f'Expected (B,1,28,28); got {tuple(x.shape)}')
        b = x.shape[0]
        x0 = self.conv0(x)                 # (B,D,28,28)
        x1 = self.down1(x0)                # (B,D,14,14)
        x2 = self.down2(x1)                # (B,2D,7,7)
        z = self.unflatten(self.flatten(x2))  # (B,2D,7,7)
        if self.mode != 'denoise':
            if t is None:
                raise ValueError('Time required by time/class modes')
            t = t.reshape(b,1).to(x.device, x.dtype)
            emb1 = self.fc1_t(t).reshape(b, 2*self.D,1,1)
            emb2 = self.fc2_t(t).reshape(b, self.D,1,1)
            if self.mode == 'class':
                if c is None:
                    raise ValueError('One-hot class conditioning required; zero for unconditional')
                c = c.reshape(b,10).to(x.device, x.dtype)
                z = self.fc1_c(c).reshape(b,2*self.D,1,1) * z + emb1
            else:
                z = z * emb1
        z = self.up1(torch.cat([z,x2],dim=1))  # (B,D,14,14)
        if self.mode != 'denoise':
            if self.mode == 'class':
                z = self.fc2_c(c).reshape(b,self.D,1,1) * z + emb2
            else:
                z = z * emb2
        z = self.up2(torch.cat([z,x1],dim=1))
        z = self.conv_out(torch.cat([z,x0],dim=1))
        return self.last(z)


def one_hot(labels: Tensor) -> Tensor:
    return F.one_hot(labels.long(), num_classes=10).float()


@torch.no_grad()
def flow_sample(model: UNet, n: int, device: torch.device,
                labels: Tensor | None = None, steps: int = 100, gamma: float = 5.0,
                seed: int = 180) -> Tensor:
    """Euler integrate 0→1. For class mode, CFG=u_uncond+gamma*(u_cond-u_uncond)."""
    model.eval()
    generator = torch.Generator(device=device).manual_seed(seed)
    x = torch.randn((n,1,28,28),device=device,generator=generator)
    if model.mode == 'class':
        if labels is None or len(labels) != n:
            raise ValueError('Class sampling needs one label for each image')
        c = one_hot(labels.to(device))
        c_null = torch.zeros_like(c)
    for i in range(steps):
        t = torch.full((n,1),i/steps,device=device)
        if model.mode == 'class':
            u_u = model(x,t,c_null)
            u_c = model(x,t,c)
            v = u_u + gamma*(u_c-u_u)
        else:
            v = model(x,t)
        x = x + (1.0/steps)*v
    return x.clamp(0,1)


def figure_grid(images: Tensor, path: Path, nrow: int, title: str = ''):
    path.parent.mkdir(parents=True,exist_ok=True)
    save_image(images.detach().float().cpu().clamp(0,1),path, nrow=nrow,
               padding=2, pad_value=0)


def plot_loss(history: list[dict], path: Path, title: str):
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    fig,ax=plt.subplots(figsize=(9,4))
    steps=np.array([v['step'] for v in history]); losses=np.array([v['loss'] for v in history])
    ax.plot(steps,losses,alpha=.55,label='minibatch MSE')
    if len(losses)>1:
        k=min(len(losses),max(5,len(losses)//60))
        # use valid convolution to avoid zero-padding bias
        if len(losses)>=k:
            ax.plot(steps[k-1:],np.convolve(losses,np.ones(k)/k,'valid'),label=f'{k}-batch average',linewidth=1.7)
    ax.set(xlabel='Optimizer step',ylabel='Mean squared error',title=title)
    ax.legend();ax.grid(alpha=.2);fig.tight_layout();fig.savefig(path,dpi=150);plt.close(fig)


def atomic_save(payload: dict, path: Path):
    path.parent.mkdir(parents=True, exist_ok=True)
    temp=path.with_suffix('.tmp')
    torch.save(payload,temp)
    os.replace(temp,path)


def snapshot_figure(stage: str, model: UNet, output: Path, epoch: int,
                    test_images: Tensor, device: torch.device, steps: int):
    was_training=model.training
    model.eval()
    with torch.no_grad():
        if stage in ('denoise','pure'):
            gen=torch.Generator(device=device).manual_seed(991)
            noise=torch.randn(test_images.shape,device=device,generator=gen)
            if stage=='denoise':
                noisy=test_images + .5*noise
                denoised=model(noisy).clamp(0,1)
                tiles=torch.cat([test_images.cpu(),noisy.clamp(0,1).cpu(),denoised.cpu()])
                figure_grid(tiles, output/f'{stage}_epoch{epoch}.png', nrow=len(test_images))
            else:
                denoised=model(noise).clamp(0,1)
                tiles=torch.cat([noise.clamp(0,1).cpu(),denoised.cpu()])
                figure_grid(tiles, output/f'{stage}_epoch{epoch}.png', nrow=len(test_images))
        else:
            labels=torch.arange(10,device=device).repeat(4) if stage != 'time' else None
            sample=flow_sample(model,40,device,labels=labels,steps=steps,seed=180)
            figure_grid(sample,output/f'{stage}_epoch{epoch}.png',nrow=10)
    model.train(was_training)


@torch.no_grad()
def out_of_distribution(model: UNet, x: Tensor, device: torch.device, output: Path):
    """Compare same input digit + identical epsilon across noise scales (test set)."""
    model.eval()
    gen=torch.Generator(device=device).manual_seed(991)
    epsilon=torch.randn(x.shape,device=device,generator=gen)
    sigmas=[0.0,.2,.4,.5,.6,.8,1.0]
    samples=[]
    for sigma in sigmas:
        noisy=x+sigma*epsilon
        pred=model(noisy)
        samples += [noisy.clamp(0,1).cpu(),pred.clamp(0,1).cpu()]
    figure_grid(torch.cat(samples),output/'denoise_ood.png',nrow=x.shape[0])
    (output/'denoise_ood_labels.json').write_text(json.dumps({'rows':['input_sigma_'+str(s) if i%2==0 else 'denoised_sigma_'+str(s) for s in sigmas for i in range(2)],'sigma':sigmas},indent=2))


def seed_all(seed: int):
    random.seed(seed); np.random.seed(seed);torch.manual_seed(seed)
    if torch.cuda.is_available():torch.cuda.manual_seed_all(seed)


def load_mnist(data_dir: Path, batch_size: int, workers: int):
    train = torchvision.datasets.MNIST(root=str(data_dir), train=True,
                                        transform=transforms.ToTensor(), download=True)
    test = torchvision.datasets.MNIST(root=str(data_dir), train=False,
                                       transform=transforms.ToTensor(), download=True)
    generator=torch.Generator().manual_seed(180)
    indices=torch.randperm(len(train),generator=generator).tolist()
    train=torch.utils.data.Subset(train,indices)
    loader=torch.utils.data.DataLoader(train,batch_size=batch_size,shuffle=True,
                                       num_workers=workers,pin_memory=torch.cuda.is_available(),
                                       drop_last=True,persistent_workers=workers>0)
    fixed=torch.stack([test[i][0] for i in (0,1,2,3,4,5,6,7)]).float()
    return loader,fixed


def experiment(stage: str, args, device: torch.device, output: Path):
    seed_all(args.seed)
    name=stage
    dest=output/name
    dest.mkdir(parents=True,exist_ok=True)
    flow=stage in ('time','class','class_nosched')
    is_denoise=stage in ('denoise','pure')
    is_class=stage.startswith('class')
    epochs=args.flow_epochs if flow else args.denoise_epochs
    D=args.denoise_D if is_denoise else args.flow_D
    batch_size=args.denoise_batch if is_denoise else args.flow_batch
    learning_rate=(args.no_scheduler_lr if stage=='class_nosched' else
                   (args.denoise_lr if is_denoise else args.flow_lr))
    model=UNet(D, 'class' if is_class else ('time' if stage=='time' else 'denoise')).to(device)
    opt=torch.optim.Adam(model.parameters(),lr=learning_rate)
    sched=(torch.optim.lr_scheduler.ExponentialLR(opt, gamma=.1**(1/epochs))
           if flow and stage != 'class_nosched' else None)
    loader, fixed = load_mnist(args.data_dir, batch_size, args.workers)
    fixed=fixed.to(device)
    print(f'[{stage}] device={device}, width={D}, examples={len(loader.dataset)}, '
          f'batches={len(loader)}, lr={learning_rate}, epochs={epochs}',flush=True)
    start_epoch=1; global_step=0; history=[]
    checkpoint=dest/'checkpoint_latest.pt'
    if args.resume and checkpoint.exists():
        # Own checkpoints only; weights_only=False required for optimizer RNG states.
        ckpt=torch.load(checkpoint,map_location=device,weights_only=False)
        assert ckpt['stage']==stage and ckpt['D']==D
        model.load_state_dict(ckpt['model']);opt.load_state_dict(ckpt['optimizer'])
        if sched is not None and ckpt['scheduler'] is not None:sched.load_state_dict(ckpt['scheduler'])
        start_epoch=ckpt['epoch']+1;global_step=ckpt['global_step'];history=ckpt['history']
        torch.set_rng_state(ckpt['torch_rng'].cpu())
        if device.type=='cuda' and ckpt['cuda_rng'] is not None:
            torch.cuda.set_rng_state_all(ckpt['cuda_rng'])
        print(f'[{stage}] Resuming at epoch {start_epoch}',flush=True)
    (dest/'config.json').write_text(json.dumps({
        'stage':stage,'width_D':D,'epochs':epochs,'batch_size':batch_size,
        'optimizer':'Adam','learning_rate':learning_rate,'scheduler':(f'ExponentialLR gamma={.1**(1/epochs)}' if sched else 'none'),
        'fixed_lr_compensation': ('constant Adam lr=%.5g'%learning_rate if stage=='class_nosched' else None),
        'steps':args.steps,'seed':args.seed,'training_dataset':'torchvision MNIST train',
        'training_examples':len(loader.dataset)},indent=2))
    if start_epoch==1 and stage=='denoise':
        epsilon=torch.randn_like(fixed[:1])
        examples=torch.cat([(fixed[:1]+s*epsilon).clamp(0,1) for s in [0,.2,.4,.5,.6,.8,1]])
        figure_grid(examples,dest/'noise_levels.png',nrow=7)
    selected={1,5,10}
    if not flow:selected={1,epochs}
    t0=time.time()
    for epoch in range(start_epoch,epochs+1):
        model.train()
        for batch,(clean,labels) in enumerate(loader):
            clean=clean.to(device,non_blocking=True);labels=labels.to(device,non_blocking=True)
            eps=torch.randn_like(clean)
            if is_denoise:
                input_t = clean + .5*eps if stage=='denoise' else eps
                prediction=model(input_t)
                target=clean
            else:
                t=torch.rand((len(clean),1,1,1),device=device)
                x_t=(1-t)*eps + t*clean
                target=clean-eps
                if is_class:
                    c=one_hot(labels)
                    drop=(torch.rand((len(clean),1),device=device)<.1)
                    c=c.masked_fill(drop,0)
                    prediction=model(x_t,t.reshape(-1,1),c)
                else:prediction=model(x_t,t.reshape(-1,1))
            loss=F.mse_loss(prediction,target)
            opt.zero_grad(set_to_none=True);loss.backward();opt.step()
            global_step+=1
            history.append({'step':global_step,'epoch':epoch,'loss':float(loss.detach().item()),
                            'lr':opt.param_groups[0]['lr']})
            if args.max_batches and batch+1 >= args.max_batches: break  # smoke/diagnostic only
            if global_step % args.log_every==0:
                print(f'[{stage}] epoch={epoch}/{epochs} batch={batch+1}/{len(loader)} '
                      f'loss={history[-1]["loss"]:.5f}',flush=True)
        if sched is not None:sched.step()
        if epoch in selected:
            snapshot_figure(stage,model,dest,epoch,fixed,device,args.steps)
            if stage=='denoise' and epoch==epochs:
                out_of_distribution(model,fixed,device,dest)
        plot_loss(history,dest/'training_loss.png',title=f'{stage} · MNIST training loss')
        (dest/'loss_history.csv').write_text('step,epoch,loss,lr\n'+''.join(
            f'{v["step"]},{v["epoch"]},{v["loss"]:.8g},{v["lr"]:.8g}\n' for v in history))
        atomic_save({'stage':stage,'D':D,'epoch':epoch,'global_step':global_step,
                     'model':model.state_dict(),'optimizer':opt.state_dict(),
                     'scheduler':sched.state_dict() if sched is not None else None,
                     'history':history,'torch_rng':torch.get_rng_state(),
                     'cuda_rng':torch.cuda.get_rng_state_all() if device.type=='cuda' else None},checkpoint)
        print(f'[{stage}] epoch {epoch} done | checkpoint saved | elapsed={time.time()-t0:.0f}s',flush=True)
    if start_epoch > epochs:
        print(f'[{stage}] Completed previously; no retraining needed.',flush=True)


def smoke_test():
    print('Running CPU smoke test (random synthetic tensors, not MNIST results)...')
    torch.set_num_threads(2)
    for mode in ('denoise','time','class'):
        net=UNet(4,mode)
        x=torch.randn(2,1,28,28)
        t=torch.rand(2,1); c=one_hot(torch.tensor([0,9]))
        out=net(x,t if mode!='denoise' else None,c if mode=='class' else None)
        assert out.shape==x.shape and torch.isfinite(out).all()
        out.square().mean().backward()
        assert all(p.grad is not None for p in net.parameters())
        if mode!='denoise':
            sampled=flow_sample(net,2,torch.device('cpu'),labels=torch.tensor([0,9])
                                if mode=='class' else None, steps=2)
            assert sampled.shape==x.shape
        print(f' PASS {mode}: output/backward/sampler shapes',flush=True)
    print('All synthetic checks passed. This does not count as training.')


def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--experiments',default='denoise,pure,time,class,class_nosched',
                    help='Comma-separated names, in execution order')
    ap.add_argument('--data-dir',type=Path,default=Path('data/mnist'))
    ap.add_argument('--output-dir',type=Path,default=Path('out/partb'))
    ap.add_argument('--device',choices=['auto','cuda','cpu'],default='auto')
    ap.add_argument('--resume',action='store_true',help='Continue from latest epoch checkpoints')
    ap.add_argument('--smoke',action='store_true',help='Only validate CPU architecture with synthetic tensors')
    ap.add_argument('--seed',type=int,default=180)
    ap.add_argument('--denoise-D',type=int,default=128)
    ap.add_argument('--flow-D',type=int,default=64)
    ap.add_argument('--denoise-batch',type=int,default=256)
    ap.add_argument('--flow-batch',type=int,default=64)
    ap.add_argument('--denoise-epochs',type=int,default=5)
    ap.add_argument('--flow-epochs',type=int,default=10)
    ap.add_argument('--denoise-lr',type=float,default=1e-4)
    ap.add_argument('--flow-lr',type=float,default=1e-2)
    ap.add_argument('--no-scheduler-lr',type=float,default=0.002,
                    help='Constant LR for scheduler ablation (run all 10 epochs)')
    ap.add_argument('--steps',type=int,default=100)
    ap.add_argument('--workers',type=int,default=2)
    ap.add_argument('--log-every',type=int,default=30)
    ap.add_argument('--max-batches',type=int,default=0,help='Diagnostic only, invalidates full assignment results')
    args=ap.parse_args()
    if args.smoke:return smoke_test()
    if args.device=='cuda' and not torch.cuda.is_available():
        raise RuntimeError('CUDA was requested but no GPU is allocated. Enable GPU in Colab/Kaggle.')
    device=torch.device(('cuda' if torch.cuda.is_available() else 'cpu') if args.device=='auto' else args.device)
    if device.type=='cpu':
        print('WARNING: CPU mode can take hours; GPU strongly recommended.',flush=True)
    for stage in args.experiments.split(','):
        if stage not in ('denoise','pure','time','class','class_nosched'):raise ValueError(stage)
        experiment(stage,args,device,args.output_dir)
    print('All requested experiments finished. Figures in',args.output_dir,flush=True)

if __name__=='__main__':main()
