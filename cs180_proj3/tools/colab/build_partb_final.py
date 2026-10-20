"""Build partb_final.ipynb: the reviewed Part B trainer (all five required experiments) + the CS280A improved
time-only UNet + own ideas (step-count sweep, sampling animation, a 10-digit noising figure), in one notebook."""
import json
from pathlib import Path

HERE = Path(__file__).parent
trainer = Path('/tmp/partb_train.py').read_text()
p280 = [''.join(c['source']) for c in json.loads(Path('/home/claude/fin/partb_280.ipynb').read_text())['cells']]
get = lambda key: next(s for s in p280 if key in s)
code = lambda s: {'cell_type': 'code', 'metadata': {}, 'execution_count': None, 'outputs': [], 'source': s.strip() + '\n'}
md = lambda s: {'cell_type': 'markdown', 'metadata': {}, 'source': s.strip() + '\n'}

setup = '''import os, sys, json, time, subprocess
from pathlib import Path
import torch, torchvision
print('PyTorch', torch.__version__, '| torchvision', torchvision.__version__)
if not torch.cuda.is_available() and not os.environ.get('CS180_ALLOW_CPU'):
    raise RuntimeError('Enable a GPU: Runtime -> Change runtime type.')
print('Device:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'cpu')
if 'google.colab' in sys.modules:
    from google.colab import drive
    drive.mount('/content/drive')
    ROOT = Path('/content/drive/MyDrive'); DATA_DIR = Path('/content/mnist_data')
elif Path('/kaggle/working').is_dir():
    ROOT = Path('/kaggle/working'); DATA_DIR = ROOT / 'mnist_data'
else:
    ROOT = Path.cwd(); DATA_DIR = Path(os.environ.get('CS180_MNIST', 'mnist_data'))
OUTPUT_DIR = Path(os.environ.get('CS180_RESULTS', ROOT / 'cs180_proj3_partb_final'))
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
print('Results:', OUTPUT_DIR)'''

write_trainer = 'trainer_source = ' + repr(trainer) + '''
Path('partb_train.py').write_text(trainer_source)
if '' not in sys.path:
    sys.path.insert(0, '')
import importlib, partb_train
importlib.reload(partb_train)
from partb_train import UNet, flow_sample, load_mnist, figure_grid, plot_loss, seed_all, atomic_save
subprocess.run([sys.executable, 'partb_train.py', '--smoke'], check=True)'''

run_main = '''# Required experiments (Sections 1.2.1-2.6). Each epoch is checkpointed; rerunning resumes.
# Euler steps follow the starter notebook: 50 for the time-conditioned model, 300 for class-conditioned (CFG gamma = 5).
# Stages whose final checkpoint already exists are skipped, and the trainer's own log is shown here, errors included.
EXTRA_ARGS = os.environ.get('CS180_TRAIN_ARGS', '').split()          # empty for the real run (CPU tests only)
TARGET_EPOCHS = {'denoise': 5, 'pure': 5, 'time': 10, 'class': 10, 'class_nosched': 10}
if '--flow-epochs' in EXTRA_ARGS:                                   # CPU tests only
    TARGET_EPOCHS.update({k: int(EXTRA_ARGS[EXTRA_ARGS.index('--flow-epochs') + 1]) for k in ('time', 'class', 'class_nosched')})
if '--denoise-epochs' in EXTRA_ARGS:
    TARGET_EPOCHS.update({k: int(EXTRA_ARGS[EXTRA_ARGS.index('--denoise-epochs') + 1]) for k in ('denoise', 'pure')})

def finished(stage):
    ck = OUTPUT_DIR / stage / 'checkpoint_latest.pt'
    if not ck.is_file():
        return False
    try:
        return torch.load(ck, map_location='cpu', weights_only=False)['epoch'] >= TARGET_EPOCHS[stage]
    except Exception as e:
        print(f'[{stage}] checkpoint unreadable ({e}); it will be retrained from its last good state')
        return False

def stages(names, steps):
    todo = [n for n in names.split(',') if not finished(n)]
    for n in names.split(','):
        if n not in todo:
            print(f'[{n}] already finished: skipped')
    if not todo:
        return
    cmd = [sys.executable, '-u', 'partb_train.py', '--experiments', ','.join(todo), '--resume', '--steps', str(steps),
           '--output-dir', str(OUTPUT_DIR), '--data-dir', str(DATA_DIR), '--log-every', '200'] + EXTRA_ARGS
    print('Running:', ' '.join(cmd), flush=True)
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
    for line in proc.stdout:                                        # stream the trainer's log into this cell
        print(line, end='', flush=True)
    if proc.wait() != 0:
        raise RuntimeError(f'trainer exited with code {proc.returncode}; see the log above')

t0 = time.time()
stages('denoise,pure,time', 50)
stages('class,class_nosched', 300)
print(f'required experiments done ({(time.time() - t0) / 60:.1f} min in this session)')'''

noise_fig = '''# Section 1.2 figure with ten test digits (the trainer's own figure shows one digit): rows sigma = 0 ... 1.
import torchvision.transforms as T
test = torchvision.datasets.MNIST(str(DATA_DIR), train=False, transform=T.ToTensor(), download=True)
x10 = torch.stack([test[i][0] for i in range(10)])
e10 = torch.randn(x10.shape, generator=torch.Generator().manual_seed(180))
figure_grid(torch.cat([(x10 + s * e10).clamp(0, 1) for s in (0, .2, .4, .5, .6, .8, 1.)]),
            OUTPUT_DIR / 'denoise' / 'noise_levels_10.png', nrow=10)
print('saved noise_levels_10.png')'''

train280 = get('import torch.nn as nn, torch.nn.functional as F')
train280 = train280.replace("ema.load_state_dict(ck['ema']); torch.set_rng_state(ck['torch_rng'])",
                            "ema.load_state_dict(ck['ema']); torch.set_rng_state(ck['torch_rng'].cpu())   # RNG states must be CPU tensors")
train280 = train280.replace("if ck['cuda_rng'] is not None: torch.cuda.set_rng_state_all(ck['cuda_rng'])",
                            "if ck['cuda_rng'] is not None: torch.cuda.set_rng_state_all([r.cpu() for r in ck['cuda_rng']])")
train280 = train280.replace("D, EPOCHS, LR, FINAL_LR_FACTOR, EMA_DECAY, BATCH, STEPS = 128, 15, 5e-3, 0.1, 0.999, 64, 100",
                            "D, EPOCHS, LR, FINAL_LR_FACTOR, EMA_DECAY, BATCH, STEPS = 128, 15, 5e-3, 0.1, 0.999, 64, 50")
train280 = ("# CS280A bells & whistles: a better time-conditioned UNet. Wider (D = 128), longer (15 epochs, LR 5e-3 -> 5e-4),\n"
            "# sampled from an EMA of the weights (0.999). Same 40 starting noises and 50 Euler steps as the baseline time grid.\n"
            "OUT = OUTPUT_DIR / 'time_plus'\nOUT.mkdir(exist_ok=True)\nBASELINE = OUTPUT_DIR / 'time' / 'checkpoint_latest.pt'\n" + train280)
judge = get('# Legibility / diversity of 1,000 samples per model')
judge = judge.replace("if BASELINE is not None and BASELINE.is_file():", "if BASELINE.is_file():")
sweep = get('# Own idea: Euler step-count sweep.')
sweep = sweep.replace("CLASS_CKPT = (ROOT / 'cs180_proj3_partb' / 'class' / 'checkpoint_latest.pt')",
                      "CLASS_CKPT = OUTPUT_DIR / 'class' / 'checkpoint_latest.pt'")
gif = '''# Own idea: animation of the epoch-10 class-conditioned sampler, noise -> digits (300 Euler steps, gamma = 5).
from PIL import Image as _PIL
from torchvision.utils import make_grid
labels = torch.arange(10, device=device).repeat(4)
c = F.one_hot(labels, 10).float(); c0 = torch.zeros_like(c)
x = torch.randn((40, 1, 28, 28), device=device, generator=torch.Generator(device=device).manual_seed(180))
frames, n = [], 300
with torch.no_grad():
    cnet.eval()
    for i in range(n):
        t = torch.full((40, 1), i / n, device=device)
        u0, u1 = cnet(x, t, c0), cnet(x, t, c)
        x = x + (u0 + 5.0 * (u1 - u0)) / n
        if i % 10 == 9 or i == 0:
            g = make_grid(x.clamp(0, 1).cpu(), nrow=10, padding=2)[0]
            frames.append(_PIL.fromarray((g * 255).byte().numpy()).resize((g.shape[1] * 3, g.shape[0] * 3), _PIL.NEAREST))
frames[0].save(OUTPUT_DIR / 'class' / 'class_sampling.gif', save_all=True, append_images=frames[1:] + [frames[-1]] * 12,
               duration=70, loop=0)
print('saved class_sampling.gif with', len(frames), 'frames')'''
zipc = '''import shutil, tempfile
tmp = Path(tempfile.mkdtemp()) / 'partb_final'
shutil.copytree(OUTPUT_DIR, tmp, ignore=shutil.ignore_patterns('checkpoint_latest.pt', '*.tmp', 'MNIST'))
z = shutil.make_archive(str(OUTPUT_DIR.parent / 'cs180_proj3_partb_final'), 'zip', tmp)
print('Download:', z)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(z)'''

cells = [
    md('''# CS180 Project 3, Part B: Flow Matching from Scratch — final notebook
Hovhannes (Mo) Antablyan · CS 180 Fall 2026 · https://codegrox.github.io/cs180_proj3/

**Run:** Colab GPU runtime → **Runtime → Run all** → allow Google Drive. Results and per-epoch checkpoints go to
`MyDrive/cs180_proj3_partb_final/`; if the runtime disconnects, **Run all** again and training resumes.

1. Required: single-step denoiser (σ = 0.5), out-of-distribution σ, pure-noise denoiser, time-conditioned flow matching,
   class-conditioned flow matching with CFG (γ = 5), and the no-scheduler comparison (constant Adam LR 2e-3).
2. CS280A bells & whistles: a better time-only UNet (wider, longer, EMA), scored by a small MNIST classifier.
3. Own ideas: Euler step-count sweep (1–300 steps) and a noise-to-digits sampling animation.'''),
    code(setup), code(write_trainer),
    md('## Required experiments'), code(run_main), code(noise_fig),
    md('## Bells & Whistles: a better time-conditioned UNet (required for CS280A)'), code(train280), code(judge),
    md('## Own ideas'), code(sweep), code(gif),
    md('## Save'), code(zipc),
]
nb = {'cells': cells, 'metadata': {'accelerator': 'GPU', 'kernelspec': {'name': 'python3', 'display_name': 'Python 3'}},
      'nbformat': 4, 'nbformat_minor': 5}
out = HERE / 'partb_final.ipynb'
out.write_text(json.dumps(nb, indent=1))
print('wrote', out, out.stat().st_size // 1024, 'KiB')
