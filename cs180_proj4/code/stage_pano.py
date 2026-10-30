"""A.5 for any photo set: cylindrical panorama with rotations fitted to the points,
straightening, inverse sampling from the originals, and a clean rectangular crop.

    python code/stage_pano.py theatre7 oldA oldB
"""
import sys, json, time
from pathlib import Path
import numpy as np
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from homography import computeH
from cylinder import (intrinsics, rotations_from_homographies, fit_rotations, rotation_fit_px,
                      build_surface, straighten, largest_full_box)

C = json.load(open(ROOT / 'points/correspondences.json'))


def run(name):
    keys = sorted(k for k in C if k.startswith(name + '_'))
    files = [C[keys[0]]['im1']] + [C[k]['im2'] for k in keys]
    ims = [load(ROOT / 'data' / f) for f in files]
    f35 = float(Image.open(ROOT / 'data' / files[0]).getexif().get_ifd(0x8769).get(41989, 24))
    K0 = intrinsics(ims[0].shape, f35)
    pair_H = [computeH(C[k]['im1_pts'], C[k]['im2_pts']) for k in keys]
    ref = len(ims) // 2
    _, svd_R = rotations_from_homographies(pair_H, K0, ref)
    svd_fit = [float(np.median(rotation_fit_px(H, R, K0, C[k]['im1_pts']))) for k, H, R in zip(keys, pair_H, svd_R)]
    pts = [(np.array(C[k]['im1_pts']), np.array(C[k]['im2_pts'])) for k in keys]
    Rs, pair_R, K = fit_rotations(pts, pair_H, K0, ref)
    def err(R, p1, p2):
        q = np.c_[p1, np.ones(len(p1))] @ (K @ R @ np.linalg.inv(K)).T
        return float(np.median(np.linalg.norm(q[:, :2] / q[:, 2:3] - p2, axis=1)))
    fit = [err(R, *pp) for R, pp in zip(pair_R, pts)]
    turn = [float(np.degrees(np.arccos(np.clip((np.trace(R) - 1) / 2, -1, 1)))) for R in pair_R]
    Rs, tilt = straighten(Rs)
    t = time.perf_counter(); r = build_surface(ims, Rs, K, 'cylinder'); dt = time.perf_counter() - t
    d = ROOT / 'media/pano' / name
    save(r['twolevel'], d / 'cylinder.jpg', quality=92)
    y0, y1, x0, x1 = largest_full_box(r['alpha'][::4, ::4] > 0.99)
    crop = r['twolevel'][y0 * 4 + 4:y1 * 4 - 4, x0 * 4 + 4:x1 * 4 - 4]
    save(crop, d / 'final.jpg', quality=92)
    save(crop, d / 'web_final.jpg', quality=90, max_side=2600)
    save(r['twolevel'], d / 'web_cylinder.jpg', quality=90, max_side=2600)
    out = dict(files=files, n=len(files), focal_exif_px=float(K0[0, 0]), focal_fit_px=float(K[0, 0]),
               pair_turn_deg=turn, svd_fit_px=svd_fit, fit_px=fit, tilt_deg=tilt, span_deg=r['span_deg'],
               canvas=r['canvas'], final=[crop.shape[1], crop.shape[0]], gains=r['gains'].tolist(), seconds=dt)
    print(f"{name:9s} {len(files)} photos, turn {sum(turn):.0f} deg, span {r['span_deg']:.0f} deg | focal x{K[0,0] / K0[0,0]:.3f} | "
          f"fit {min(fit):.1f}-{max(fit):.1f}px (SVD {min(svd_fit):.1f}-{max(svd_fit):.1f}) | tilt {tilt:.1f} deg | final {crop.shape[1]}x{crop.shape[0]} | {dt:.0f}s")
    return out


if __name__ == '__main__':
    p = ROOT / 'tests/run/pano.json'
    res = json.load(open(p)) if p.exists() else {}
    for n in sys.argv[1:]:
        res[n] = run(n)
        json.dump(res, open(p, 'w'), indent=1)
