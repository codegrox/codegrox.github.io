"""A.4 planar mosaics: keep the middle photo unwarped and warp the others into its
projection (one-shot: canvas size first, then every image into that canvas)."""
import numpy as np
from homography import computeH
from warp import warped_bbox, warpImageBilinear
from blend import Compositor, overlap_stats, solve_gains


def pair_homographies(pairs):
    """pairs: list of (im1_pts, im2_pts) for neighbours k -> k+1."""
    return [computeH(a, b) for a, b in pairs]


def chain_to_reference(pair_H, ref):
    """pair_H[k] maps image k into image k+1. Returns H_k mapping image k into the
    reference image, by composing neighbour homographies outward from ref."""
    n = len(pair_H) + 1
    Hs = [None] * n
    Hs[ref] = np.eye(3)
    for k in range(ref - 1, -1, -1):                 # k -> k+1 -> ... -> ref
        Hs[k] = Hs[k + 1] @ pair_H[k]
    for k in range(ref + 1, n):                      # k -> k-1 -> ... -> ref
        Hs[k] = Hs[k - 1] @ np.linalg.inv(pair_H[k - 1])
    return [H / H[2, 2] for H in Hs]


def _canvas(Hs, shapes, max_pixels):
    boxes = np.array([warped_bbox(H, s) for H, s in zip(Hs, shapes)])
    x0, y0 = boxes[:, 0].min(), boxes[:, 1].min()
    x1, y1 = boxes[:, 2].max(), boxes[:, 3].max()
    s = min(1.0, np.sqrt(max_pixels / ((x1 - x0 + 1) * (y1 - y0 + 1))))
    T = np.array([[s, 0, -s * x0], [0, s, -s * y0], [0, 0, 1]])   # reference coords -> canvas
    W, H = int(np.ceil((x1 - x0) * s)) + 1, int(np.ceil((y1 - y0) * s)) + 1
    return T, W, H, s


def _clip(box, W, H):
    x0, y0, x1, y1 = box
    return max(x0, 0), max(y0, 0), min(x1, W - 1), min(y1, H - 1)


def build_planar(images, Hs, sigma=4.0, max_pixels=12e6, gain=True):
    shapes = [im.shape for im in images]
    T, W, H, s = _canvas(Hs, shapes, max_pixels)
    # 1) gains from a quarter-size preview of every image on the canvas
    q = 0.25
    Q = np.diag([q, q, 1.0]) @ T
    Wq, Hq = int(W * q) + 1, int(H * q) + 1
    layers = []
    for im, Hk in zip(images, Hs):
        out, a, _ = warpImageBilinear(im, Q @ Hk, (0, 0, Wq - 1, Hq - 1))
        layers.append((out, a))
    pairs, diffs = overlap_stats(layers)
    gains = solve_gains(pairs, len(images)) if gain else np.ones((len(images), 3))
    before = {f'{i}-{j}': float(np.abs(li - lj)[m].mean()) for (i, j), (m, li, lj) in diffs.items()}
    after = {f'{i}-{j}': float(np.abs(li * gains[i] - lj * gains[j])[m].mean()) for (i, j), (m, li, lj) in diffs.items()}
    # 2) full resolution: each image warped only inside its own box, then composited
    comp = Compositor(H, W, sigma)
    for k, (im, Hk) in enumerate(zip(images, Hs)):
        Hc = T @ Hk
        box = _clip(warped_bbox(Hc, im.shape), W, H)
        out, a, (bx, by) = warpImageBilinear(im, Hc, box)
        comp.add(out, a, bx, by, gains[k])
    res = comp.results()
    res.update(gains=gains, canvas=(W, H), canvas_scale=s,
               overlap_diff_before=before, overlap_diff_after=after)
    return res
