# Part B FIX PASS - CS280A better time-only UNet, take 2: train it longer. New cell at the bottom of the Part B
# notebook. Runtime -> Run all is safe: every finished stage is skipped, then this cell runs (~30 min on a T4).
# The D=128 model was still improving at epoch 15 (loss 0.0890 -> 0.0884 over the last two epochs) when its
# learning rate had already decayed to 5e-4. Continue the SAME model and EMA for 15 more epochs (30 in total),
# with the rate decaying again from 5e-4 to 5e-5, checkpointing every epoch, then score it exactly like the others.
EXTRA_EPOCHS = int(os.environ.get('CS180_EXTRA_EPOCHS', 15))
OUT2 = OUTPUT_DIR / 'time_plus30'
OUT2.mkdir(exist_ok=True)
ck2 = OUT2 / 'checkpoint_latest.pt'
base_ck = torch.load(OUT / 'checkpoint_latest.pt', map_location=device, weights_only=False)
model2 = UNet(D, 'time').to(device)
ema2 = torch.optim.swa_utils.AveragedModel(model2, multi_avg_fn=torch.optim.swa_utils.get_ema_multi_avg_fn(EMA_DECAY),
                                           use_buffers=True)
opt2 = torch.optim.Adam(model2.parameters(), lr=5e-4)
sched2 = torch.optim.lr_scheduler.ExponentialLR(opt2, gamma=0.1 ** (1 / EXTRA_EPOCHS))
if ck2.is_file():
    ck = torch.load(ck2, map_location=device, weights_only=False)
    model2.load_state_dict(ck['model']); opt2.load_state_dict(ck['optimizer']); sched2.load_state_dict(ck['scheduler'])
    ema2.load_state_dict(ck['ema']); torch.set_rng_state(ck['torch_rng'].cpu())
    if ck['cuda_rng'] is not None: torch.cuda.set_rng_state_all([r.cpu() for r in ck['cuda_rng']])
    start2, step2, hist2, secs2 = ck['epoch'] + 1, ck['step'], ck['history'], ck['epoch_seconds']
    print('resuming at epoch', start2)
else:                                   # start from the finished 15-epoch model and its EMA
    model2.load_state_dict(base_ck['model']); ema2.load_state_dict(base_ck['ema'])
    start2, step2, hist2, secs2 = base_ck['epoch'] + 1, base_ck['step'], list(base_ck['history']), []
last = base_ck['epoch'] + EXTRA_EPOCHS
for epoch in range(start2, last + 1):
    model2.train(); t0 = time.time()
    for b, (clean, _) in enumerate(loader):
        clean = clean.to(device, non_blocking=True)
        eps = torch.randn_like(clean)
        t = torch.rand((len(clean), 1, 1, 1), device=device)
        loss = F.mse_loss(model2((1 - t) * eps + t * clean, t.reshape(-1, 1)), clean - eps)
        opt2.zero_grad(set_to_none=True); loss.backward(); opt2.step(); ema2.update_parameters(model2)
        step2 += 1
        hist2.append({'step': step2, 'epoch': epoch, 'loss': float(loss.detach()), 'lr': opt2.param_groups[0]['lr']})
        if MAX_BATCHES and b + 1 >= MAX_BATCHES: break
    sched2.step()
    secs2.append(time.time() - t0)
    if epoch in (20, 25, last):
        x = flow_sample(ema2.module, 40, device, steps=STEPS, seed=180)
        torch.save(x.cpu(), OUT2 / f'time_plus_epoch{epoch}.pt')
        figure_grid(x, OUT2 / f'time_plus_epoch{epoch}.png', nrow=10)
    plot_loss(hist2, OUT2 / 'training_loss.png', f'time-conditioned UNet, D=128, {last} epochs')
    (OUT2 / 'loss_history.csv').write_text('step,epoch,loss,lr\n' + ''.join(
        f"{h['step']},{h['epoch']},{h['loss']:.8g},{h['lr']:.8g}\n" for h in hist2))
    atomic_save({'epoch': epoch, 'step': step2, 'model': model2.state_dict(), 'optimizer': opt2.state_dict(),
                 'scheduler': sched2.state_dict(), 'ema': ema2.state_dict(), 'history': hist2, 'epoch_seconds': secs2,
                 'torch_rng': torch.get_rng_state(),
                 'cuda_rng': torch.cuda.get_rng_state_all() if device.type == 'cuda' else None}, ck2)
    n_ep = sum(h['epoch'] == epoch for h in hist2)
    print(f'epoch {epoch}/{last}: mean loss {sum(h["loss"] for h in hist2 if h["epoch"] == epoch) / max(1, n_ep):.4f}, '
          f'{secs2[-1]:.0f}s, checkpoint saved', flush=True)
results['improved_30'] = score(ema2.module)
results['improved_30']['epochs'] = last
(OUT / 'metrics.json').write_text(json.dumps(results, indent=2))
for k in ('baseline', 'improved', 'improved_30'):
    if k in results:
        r = results[k]
        print(f'{k:12s} confident >0.9: {100 * r["frac_confident_0.9"]:.1f}% | mean confidence {r["mean_confidence"]:.3f} '
              f'| digit-balance entropy {r["normalized_entropy"]:.3f}')
import shutil, tempfile
tmp = Path(tempfile.mkdtemp()) / 'partb_final'
shutil.copytree(OUTPUT_DIR, tmp, ignore=shutil.ignore_patterns('checkpoint_latest.pt', '*.tmp', 'MNIST'))
z = shutil.make_archive(str(OUTPUT_DIR.parent / 'cs180_proj3_partb_final'), 'zip', tmp)
print('Re-zipped:', z)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(z)
