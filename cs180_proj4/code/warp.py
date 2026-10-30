"""A.3: inverse warping with two interpolation methods written from scratch.

Convention: pixel (row i, col j) has its center at (x, y) = (j, i), so (0, 0) is
the center of the first pixel and (0.5, 0) lies halfway to the second one.

For every output pixel we ask where it came from, p = H^-1 p', and sample the
source there. Going backwards means every output pixel gets exactly one value
(no holes, unlike pushing source pixels forward).
"""
import numpy as np


def warped_bbox(H, shape):
    """Integer output box (x0, y0, x1, y1) covering the warped image: the four
    corners piped through H."""
    h, w = shape[:2]
    c = np.array([[0, 0, 1], [w - 1, 0, 1], [w - 1, h - 1, 1], [0, h - 1, 1]], float) @ H.T
    c = c[:, :2] / c[:, 2:3]
    return (int(np.floor(c[:, 0].min())), int(np.floor(c[:, 1].min())),
            int(np.ceil(c[:, 0].max())), int(np.ceil(c[:, 1].max())))


def _source_coords(Hinv, x0, y0, x1, y1, rows):
    """Source (x, y) of output pixels in the given row range (perspective divide)."""
    xs = np.arange(x0, x1 + 1, dtype=np.float64)
    ys = np.arange(y0 + rows.start, y0 + rows.stop, dtype=np.float64)
    X, Y = np.meshgrid(xs, ys)
    d = Hinv[2, 0] * X + Hinv[2, 1] * Y + Hinv[2, 2]
    sx = (Hinv[0, 0] * X + Hinv[0, 1] * Y + Hinv[0, 2]) / d
    sy = (Hinv[1, 0] * X + Hinv[1, 1] * Y + Hinv[1, 2]) / d
    return sx, sy


def _warp(im, H, bbox, sampler, chunk=256):
    im = np.asarray(im, dtype=np.float32)
    if im.ndim == 2:
        im = im[..., None]
    x0, y0, x1, y1 = warped_bbox(H, im.shape) if bbox is None else bbox
    Hinv = np.linalg.inv(H)
    out = np.zeros((y1 - y0 + 1, x1 - x0 + 1, im.shape[2]), np.float32)
    alpha = np.zeros(out.shape[:2], np.float32)
    for r in range(0, out.shape[0], chunk):          # row chunks keep memory small
        rows = slice(r, min(r + chunk, out.shape[0]))
        sx, sy = _source_coords(Hinv, x0, y0, x1, y1, rows)
        out[rows], alpha[rows] = sampler(im, sx, sy)
    return out, alpha, (x0, y0)


def _nearest(im, sx, sy):
    h, w = im.shape[:2]
    xi, yi = np.rint(sx).astype(np.int64), np.rint(sy).astype(np.int64)
    valid = (xi >= 0) & (xi < w) & (yi >= 0) & (yi < h)
    vals = im[np.clip(yi, 0, h - 1), np.clip(xi, 0, w - 1)]
    return vals * valid[..., None], valid.astype(np.float32)


def _bilinear(im, sx, sy):
    h, w = im.shape[:2]
    valid = (sx >= 0) & (sx <= w - 1) & (sy >= 0) & (sy <= h - 1)
    x0 = np.clip(np.floor(sx).astype(np.int64), 0, w - 2)
    y0 = np.clip(np.floor(sy).astype(np.int64), 0, h - 2)
    fx = np.clip(sx - x0, 0, 1)[..., None].astype(np.float32)
    fy = np.clip(sy - y0, 0, 1)[..., None].astype(np.float32)
    top = im[y0, x0] * (1 - fx) + im[y0, x0 + 1] * fx           # blend along x ...
    bot = im[y0 + 1, x0] * (1 - fx) + im[y0 + 1, x0 + 1] * fx
    vals = top * (1 - fy) + bot * fy                              # ... then along y
    return vals * valid[..., None], valid.astype(np.float32)


def warpImageNearestNeighbor(im, H, bbox=None):
    """Inverse warp, rounding each source location to the nearest pixel.
    Returns (warped image, alpha mask, (x0, y0) offset of the output box)."""
    return _warp(im, H, bbox, _nearest)


def warpImageBilinear(im, H, bbox=None):
    """Inverse warp, weighting the 4 surrounding pixels by distance."""
    return _warp(im, H, bbox, _bilinear)
