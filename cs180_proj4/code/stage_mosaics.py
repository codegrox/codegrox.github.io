import sys, json, time
from pathlib import Path
import numpy as np
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from homography import computeH, residuals
from mosaic import chain_to_reference, build_planar
C = json.load(open(ROOT / 'points/correspondences.json'))
def run(name, max_pixels=12e6):
    keys = sorted(k for k in C if k.startswith(name + '_'))
    files = [C[keys[0]]['im1']] + [C[k]['im2'] for k in keys]
    ims = [load(ROOT / 'data' / f) for f in files]
    pair_H = [computeH(C[k]['im1_pts'], C[k]['im2_pts']) for k in keys]
    res_px = {k: float(np.median(residuals(H, C[k]['im1_pts'], C[k]['im2_pts']))) for k, H in zip(keys, pair_H)}
    Hs = chain_to_reference(pair_H, len(ims) // 2)
    t = time.perf_counter(); r = build_planar(ims, Hs, max_pixels=max_pixels); dt = time.perf_counter() - t
    for m in ('overwrite', 'feather', 'twolevel'):
        save(r[m], ROOT / f'media/mosaic/{name}/{m}.jpg', quality=92)
    print(f"{name:10s} canvas {r['canvas'][0]}x{r['canvas'][1]} (scale {r['canvas_scale']:.2f}) {dt:.1f}s | gains {np.round(r['gains'].mean(1), 3).tolist()} | "
          f"overlap diff before/after {np.mean(list(r['overlap_diff_before'].values())):.4f}/{np.mean(list(r['overlap_diff_after'].values())):.4f}")
    return dict(files=files, canvas=r['canvas'], canvas_scale=r['canvas_scale'], seconds=dt, gains=r['gains'].tolist(),
                overlap_diff_before=r['overlap_diff_before'], overlap_diff_after=r['overlap_diff_after'],
                pair_residual_median_px=res_px, H_to_ref=[np.round(H, 6).tolist() for H in Hs])
if __name__ == '__main__':
    out = {}
    for n in sys.argv[1:]:
        out[n] = run(n)
    p = ROOT / 'tests/run/mosaics.json'
    old = json.load(open(p)) if p.exists() else {}
    old.update(out); json.dump(old, open(p, 'w'), indent=1)
