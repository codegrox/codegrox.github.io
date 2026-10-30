import sys, json, time
from pathlib import Path
import numpy as np
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from homography import computeH
from mosaic import chain_to_reference, build_planar
from cylinder import intrinsics, rotations_from_homographies, fit_rotations, rotation_fit_px, build_surface, straighten, largest_full_box
C = json.load(open(ROOT / 'points/correspondences.json'))
keys = sorted(k for k in C if k.startswith('wide_'))
files = [C[keys[0]]['im1']] + [C[k]['im2'] for k in keys]
ims = [load(ROOT / 'data' / f) for f in files]
ex = Image.open(ROOT / 'data' / files[0]).getexif().get_ifd(0x8769)
f35 = float(ex.get(41989, 24))
K = intrinsics(ims[0].shape, f35)
pair_H = [computeH(C[k]['im1_pts'], C[k]['im2_pts']) for k in keys]
ref = len(ims) // 2
_, svd_R = rotations_from_homographies(pair_H, K, ref)
svd_fit = {k: float(np.median(rotation_fit_px(H, R, K, C[k]['im1_pts']))) for k, H, R in zip(keys, pair_H, svd_R)}
pts = [(np.array(C[k]['im1_pts']), np.array(C[k]['im2_pts'])) for k in keys]
K_exif = K
Rs, pair_R, K = fit_rotations(pts, pair_H, K_exif, ref)
def pix_err(R, p1, p2):
    q = np.c_[p1, np.ones(len(p1))] @ (K @ R @ np.linalg.inv(K)).T
    return np.linalg.norm(q[:, :2] / q[:, 2:3] - p2, axis=1)
fit = {k: float(np.median(pix_err(R, *pp))) for k, R, pp in zip(keys, pair_R, pts)}
print(f'jointly fitted focal {K[0,0]:.1f}px ({K[0,0] / K_exif[0,0]:.3f} x EXIF)')
print('SVD-projection fit, median px per pair:', {k[5:]: round(v, 2) for k, v in svd_fit.items()})
turn = [float(np.degrees(np.arccos(np.clip((np.trace(R) - 1) / 2, -1, 1)))) for R in pair_R]
print(f'focal {f35:g} mm-eq -> {K[0,0]:.1f} px | per-pair turn (deg):', np.round(turn, 1).tolist())
print('rotation-model fit, median px per pair:', {k[5:]: round(v, 2) for k, v in fit.items()})
out = dict(files=files, focal_35mm=f35, focal_exif_px=K_exif[0, 0], focal_fit_px=K[0, 0], pair_turn_deg=turn, rotation_fit_px=fit, svd_rotation_fit_px=svd_fit)
Rs_level, tilt = straighten(Rs)
print(f'straightening: reference camera was tilted {tilt:.1f} deg from level')
out['straighten_tilt_deg'] = tilt
r0 = build_surface(ims, Rs, K, 'cylinder')
save(r0['twolevel'], ROOT / 'media/wide/cylinder_unlevelled.jpg', quality=92)
for kind in ('cylinder', 'sphere'):
    t = time.perf_counter(); r = build_surface(ims, Rs_level, K, kind); dt = time.perf_counter() - t
    for m in ('overwrite', 'feather', 'twolevel'):
        save(r[m], ROOT / f'media/wide/{kind}_{m}.jpg', quality=92)
    y0, y1, x0, x1 = largest_full_box(r['alpha'][::4, ::4] > 0.99)
    crop = r['twolevel'][y0 * 4 + 4:y1 * 4 - 4, x0 * 4 + 4:x1 * 4 - 4]
    save(crop, ROOT / f'media/wide/{kind}_final.jpg', quality=92)
    print(f'  {kind} cropped final {crop.shape[1]}x{crop.shape[0]}')
    print(f"{kind:8s} canvas {r['canvas'][0]}x{r['canvas'][1]}  span {r['span_deg']:.0f} deg  radius {r['radius_px']:.0f}px  {dt:.1f}s  gains {np.round(r['gains'].mean(1), 3).tolist()}")
    out[kind] = dict(canvas=r['canvas'], span_deg=r['span_deg'], radius_px=r['radius_px'], seconds=dt, gains=r['gains'].tolist())
Hs = chain_to_reference(pair_H, ref)
mid = slice(1, 8)
t = time.perf_counter(); r = build_planar(ims[mid], [np.linalg.inv(Hs[1]) @ H for H in Hs[mid]] if False else chain_to_reference(pair_H[1:7], 3)); dt = time.perf_counter() - t
save(r['twolevel'], ROOT / 'media/wide/planar_middle7.jpg', quality=92)
print(f"planar (middle 7) canvas {r['canvas'][0]}x{r['canvas'][1]} at scale {r['canvas_scale']:.3f}  {dt:.1f}s")
out['planar_middle7'] = dict(canvas=r['canvas'], canvas_scale=r['canvas_scale'])
json.dump(out, open(ROOT / 'tests/run/wide.json', 'w'), indent=1)
