"""Propose point correspondences for a photo pair, then draw them in a clean style.

1. SIFT + RANSAC gives a rough homography H0 (only to know where to look).
2. Strong corners (Shi-Tomasi) in image A inside the overlap = 'obvious' points.
3. Each corner's partner in B: normalized cross-correlation of a patch around the
   corner, searched near H0's prediction (rejects anything ambiguous).
4. Keep ~12, one per grid cell (spread over the overlap), best corner x NCC score.
5. Sub-pixel refinement at full resolution in both images.
Outputs points as (x, y) full-resolution pixels: im1_pts, im2_pts (n x 2).
"""
import json, sys
from pathlib import Path
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFont

HALF = 2                                   # detection at 1/2 resolution
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'


def gray(path):
    g = cv2.imread(str(path), cv2.IMREAD_GRAYSCALE)
    return g, cv2.resize(g, (g.shape[1] // HALF, g.shape[0] // HALF), interpolation=cv2.INTER_AREA)


def rough_h(a, b):
    sift = cv2.SIFT_create(8000)
    ka, da = sift.detectAndCompute(a, None)
    kb, db = sift.detectAndCompute(b, None)
    m = [x for x, y in cv2.BFMatcher().knnMatch(da, db, k=2) if x.distance < 0.7 * y.distance]
    pa = np.float32([ka[x.queryIdx].pt for x in m]); pb = np.float32([kb[x.trainIdx].pt for x in m])
    H, inl = cv2.findHomography(pa, pb, cv2.RANSAC, 2.0)
    return H


def _peak(res):
    """Integer peak plus a parabola fit in x and y for sub-pixel precision."""
    _, best, _, (x, y) = cv2.minMaxLoc(res)
    dx = dy = 0.0
    if 0 < x < res.shape[1] - 1:
        l, c, r = res[y, x - 1], res[y, x], res[y, x + 1]; den = l - 2 * c + r
        dx = 0.5 * (l - r) / den if den else 0.0
    if 0 < y < res.shape[0] - 1:
        u, c, d = res[y - 1, x], res[y, x], res[y + 1, x]; den = u - 2 * c + d
        dy = 0.5 * (u - d) / den if den else 0.0
    return best, (x, y), x + dx, y + dy


def propose(path_a, path_b, n=12, grid=(4, 3), r=20, search=12, strict=True):
    A, a = gray(path_a); B, b = gray(path_b)
    S = np.diag([HALF, HALF, 1.0])
    H = S @ rough_h(a, b) @ np.linalg.inv(S)            # rough homography at full resolution
    q_lvl, min_std, min_ncc, min_gap = (0.02, 12, 0.93, 0.08) if strict else (0.005, 5, 0.85, 0.05)
    corners = cv2.goodFeaturesToTrack(a, maxCorners=2500, qualityLevel=q_lvl, minDistance=20, blockSize=7).reshape(-1, 2) * HALF
    crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 40, 0.01)
    corners = cv2.cornerSubPix(A, corners.astype(np.float32).reshape(-1, 1, 2), (5, 5), (-1, -1), crit).reshape(-1, 2)
    score = cv2.cornerMinEigenVal(A, 7)
    h, w = A.shape
    R = r + search
    off = np.arange(-R, R + 1, dtype=np.float32)
    cands = []
    for x, y in corners:
        if not (R + 2 < x < w - R - 2 and R + 2 < y < h - R - 2):
            continue
        tpl = cv2.getRectSubPix(A, (2 * r + 1, 2 * r + 1), (float(x), float(y)))
        if tpl.std() < min_std:                          # flat patch (sky, wall): not obvious
            continue
        # B's neighbourhood, warped into A's frame by the rough homography
        gx, gy = np.meshgrid(x + off, y + off)
        pts = np.stack([gx.ravel(), gy.ravel(), np.ones(gx.size)], 1) @ H.T
        mx = (pts[:, 0] / pts[:, 2]).reshape(gx.shape).astype(np.float32)
        my = (pts[:, 1] / pts[:, 2]).reshape(gx.shape).astype(np.float32)
        if mx.min() < 0 or my.min() < 0 or mx.max() > B.shape[1] - 1 or my.max() > B.shape[0] - 1:
            continue
        win = cv2.remap(B, mx, my, cv2.INTER_LINEAR)
        res = cv2.matchTemplate(win, tpl, cv2.TM_CCOEFF_NORMED)
        best, loc, sx, sy = _peak(res)
        res2 = res.copy(); cv2.circle(res2, loc, 5, -1, -1)
        if best < min_ncc or best - res2.max() < min_gap:
            continue
        dx, dy = sx - search, sy - search                # residual offset, in A's frame
        if np.hypot(dx, dy) > search - 2:
            continue
        q = H @ np.array([x + dx, y + dy, 1.0]); q = q[:2] / q[2]
        cands.append((x, y, q[0], q[1], score[int(y), int(x)] * best))
    cands = np.array(cands).reshape(-1, 5)
    if len(cands) < 8 and strict:
        return propose(path_a, path_b, n, grid, r, search, strict=False)
    # keep only candidates that agree with one homography fit to all of them (trimmed twice)
    keep = np.ones(len(cands), bool)
    for tol in (4.0, 2.0):
        Hc = dlt(cands[keep, :2], cands[keep, 2:4])
        keep = residuals(Hc, cands[:, :2], cands[:, 2:4]) < tol
    if keep.sum() >= 8:
        cands = cands[keep]
    x_lo, x_hi = np.percentile(cands[:, 0], [2, 98]); y_lo, y_hi = np.percentile(cands[:, 1], [2, 98])
    gxn, gyn = grid
    picked = []
    for cy in range(gyn):
        for cx in range(gxn):
            m = ((cands[:, 0] >= x_lo + (x_hi - x_lo) * cx / gxn) & (cands[:, 0] < x_lo + (x_hi - x_lo) * (cx + 1) / gxn) &
                 (cands[:, 1] >= y_lo + (y_hi - y_lo) * cy / gyn) & (cands[:, 1] < y_lo + (y_hi - y_lo) * (cy + 1) / gyn))
            if m.any():
                sel = cands[m]; picked.append(sel[sel[:, 4].argmax()])
    if len(picked) < n:                                  # top up with the best remaining, kept apart
        rest = sorted(cands.tolist(), key=lambda c: -c[4])
        for c in rest:
            if len(picked) >= n: break
            if all(np.hypot(c[0] - p[0], c[1] - p[1]) > 0.08 * w for p in picked):
                picked.append(np.array(c))
    picked = np.array(sorted(picked, key=lambda p: (p[1], p[0])))[:n]
    return picked[:, :2], picked[:, 2:4], len(cands)


def dlt(p1, p2):
    """Least-squares homography with h33 = 1 (same as A.2's computeH), for checking."""
    A, bb = [], []
    for (x, y), (u, v) in zip(p1, p2):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); bb.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); bb.append(v)
    h = np.linalg.lstsq(np.array(A), np.array(bb), rcond=None)[0]
    return np.append(h, 1).reshape(3, 3)


def residuals(H, p1, p2):
    q = np.c_[p1, np.ones(len(p1))] @ H.T
    return np.linalg.norm(q[:, :2] / q[:, 2:] - p2, axis=1)


def draw(path, pts, height=900):
    im = Image.open(path).convert('RGB')
    s = height / im.height
    im = im.resize((int(im.width * s), height), Image.LANCZOS)
    d = ImageDraw.Draw(im)
    font = ImageFont.truetype(FONT, max(13, height // 55))
    R = max(7, height // 85)
    for i, (x, y) in enumerate(pts, 1):
        x, y = x * s, y * s
        d.ellipse((x - R - 2, y - R - 2, x + R + 2, y + R + 2), fill=(27, 36, 64))         # dark ring
        d.ellipse((x - R, y - R, x + R, y + R), fill=(247, 201, 72))                         # yellow dot
        label = f'{i:02d}'
        tw, th = d.textbbox((0, 0), label, font=font)[2:]
        bx, by = x + R * 0.6, y - R * 0.6 - th - 8
        d.rounded_rectangle((bx, by, bx + tw + 10, by + th + 8), radius=4, fill=(27, 42, 74))
        d.text((bx + 5, by + 3), label, font=font, fill=(255, 255, 255))
    return im


def pair_figure(path_a, path_b, pa, pb, out, height=900, gap=16):
    ia, ib = draw(path_a, pa, height), draw(path_b, pb, height)
    canvas = Image.new('RGB', (ia.width + ib.width + gap, height), (16, 18, 24))
    canvas.paste(ia, (0, 0)); canvas.paste(ib, (ia.width + gap, 0))
    canvas.save(out, quality=92)
