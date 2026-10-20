# CS 180 Project 3 — Fun with Flow Models

Hovhannes (Mo) Antablyan · Fall 2026 · https://codegrox.github.io/cs180_proj3/

Part A: sampling, editing and optical illusions with the pretrained PixNerd-XXL-P16-T2I flow model.
Part B: flow matching from scratch on MNIST. Includes all CS280A bells & whistles (two more anagram
transformations, a course logo, a better time-conditioned UNet) and several own ideas.

## Files

- `index.html`, `media/` — the project page. Every image is a real output at its generated resolution
  (`media/a`: Part A, 512×512; `media/b`: Part B, native 28-px digit grids; `media/inputs`: thumbnails of my source images).
- `code/parta.ipynb` — the Part A notebook exactly as it ran (Colab, Tesla T4), with outputs. All student
  functions, every section, the CS280A bells & whistles and the own-idea cells; the later cells (extra hybrid
  candidates and three refinement passes) were added and run in the same session. The second refinement cell was
  stopped by hand after its first six-way seed (KeyboardInterrupt in its output), because that variant had failed.
- `code/partb.ipynb` — the Part B notebook exactly as it ran (Tesla T4), with outputs, including the CS280A
  30-epoch time-only UNet. `code/partb_train.py` is the trainer the notebook writes and runs (UNet, flow sampling).
- `data/inputs/` — the 13 Part A inputs exactly as the model received them (512×512).
  `data/originals/` — the 21 source images I chose (credits on the page).
- `tools/build_page.py` — builds `index.html` and `media/` from the two result zips; numbers come from the
  runs' `metrics.json` / `loss_history.csv`, code listings are cut from `code/`.
- `tools/make_logo.py` — draws the blue-and-gold CS180 emblem used as a logo input.
  `tools/prepare_inputs.py` — crops/pads source images to 512×512.
  `tools/colab/` — the builders of the two final notebooks and the extra cells that were pasted into them.

## Reproducing

Both notebooks need a GPU (Colab T4 is enough). Runtime → Run all; results go to Google Drive
(`MyDrive/cs180_proj3_parta_final`, `MyDrive/cs180_proj3_partb_final`) and finished work is reused on a rerun.
Part A: ~0.55 s per network evaluation on a T4. Part B: required experiments 41.8 min on a T4, CS280A model ~110 s/epoch.

Rebuild the page from the downloaded result zips (unzipped):

```
python tools/build_page.py <parta_results_dir> <partb_results_dir> <mnist_root>
```

Fixed settings: Part A seed 180, Euler step 0.02, CFG w = 7 (v_c + w(v_c − v_u)). Part B seed 180; denoiser D = 128,
batch 256, Adam 1e-4, 5 epochs, σ = 0.5; flow models D = 64, batch 64, 10 epochs, Adam 1e-2 with ExponentialLR
(γ = 0.1^(1/10)) per epoch, class dropout 0.1, CFG γ = 5 (v_u + γ(v_c − v_u)), 50 Euler steps (time) / 300 (class);
no-scheduler run: constant Adam 2e-3. CS280A time-only UNet: D = 128, 30 epochs, EMA 0.999.
