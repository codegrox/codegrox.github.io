import sys, json, time
from pathlib import Path
import numpy as np
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from rectify import rectify_homography
from warp import warpImageNearestNeighbor, warpImageBilinear
from homography import residuals
R = json.load(open(ROOT / 'points/rectification.json')); res = {}
for name, v in R.items():
    im = load(ROOT / 'data' / v['file'])
    H, box, rect = rectify_homography(v['corners'], v['aspect_h_over_w'], margin={'cabinet': 0.35, 'marquee': 0.08}.get(name, 0.12))
    t = time.perf_counter(); nn, a, _ = warpImageNearestNeighbor(im, H, box); t_nn = time.perf_counter() - t
    t = time.perf_counter(); bl, _, _ = warpImageBilinear(im, H, box); t_bl = time.perf_counter() - t
    save(nn, ROOT / f'media/rect/{name}_nearest.jpg'); save(bl, ROOT / f'media/rect/{name}_bilinear.jpg')
    res[name] = dict(out_size=[nn.shape[1], nn.shape[0]], t_nearest_s=round(t_nn, 3), t_bilinear_s=round(t_bl, 3),
                     corner_err_px=round(float(residuals(H, v['corners'], rect).max()), 6), H=np.round(H, 6).tolist())
    print(f'{name:8s} out {nn.shape[1]}x{nn.shape[0]}  nearest {t_nn:.2f}s  bilinear {t_bl:.2f}s  ({t_bl / t_nn:.1f}x slower)')
json.dump(res, open(ROOT / 'tests/run/rectify.json', 'w'), indent=1)
