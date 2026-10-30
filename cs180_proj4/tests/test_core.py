"""Sanity checks for computeH and the two warps. OpenCV appears ONLY here, as a
reference to compare against; the project code never calls it."""
import sys, time, json
from pathlib import Path
import numpy as np
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from homography import computeH, residuals, condition_numbers
from warp import warpImageNearestNeighbor, warpImageBilinear, warped_bbox
rng = np.random.default_rng(4)
# 1) recover a known homography from noisy points
Ht = np.array([[0.9, 0.12, 40], [-0.08, 1.05, -25], [2e-4, -1e-4, 1]])
p1 = rng.uniform(0, 2000, (12, 2)); q = np.c_[p1, np.ones(12)] @ Ht.T; p2 = q[:, :2] / q[:, 2:]
H = computeH(p1, p2 + rng.normal(0, 0.5, p2.shape))
print('known-H recovery: max entry error', f'{np.abs(H - Ht).max():.2e}', '| exact points:', f'{np.abs(computeH(p1, p2) - Ht).max():.1e}')
# 2) warps vs OpenCV on a real photo
import cv2
from PIL import Image
im = np.asarray(Image.open(ROOT / 'data/theatre_1.jpg').convert('RGB'), np.float32) / 255
im = im[::2, ::2]
bb = warped_bbox(Ht, im.shape)
for name, fn, flag in (('nearest', warpImageNearestNeighbor, cv2.INTER_NEAREST), ('bilinear', warpImageBilinear, cv2.INTER_LINEAR)):
    t = time.perf_counter(); out, a, (x0, y0) = fn(im, Ht); dt = time.perf_counter() - t
    T = np.array([[1, 0, -x0], [0, 1, -y0], [0, 0, 1]])
    ref = cv2.warpPerspective(im, T @ Ht, (out.shape[1], out.shape[0]), flags=flag | cv2.WARP_FILL_OUTLIERS)
    inner = cv2.erode(a, np.ones((5, 5))) > 0
    print(f'{name:9s} {dt:.2f}s  mean |ours - OpenCV| inside = {np.abs(out - ref)[inner].mean():.4f}  (out {out.shape[1]}x{out.shape[0]})')
