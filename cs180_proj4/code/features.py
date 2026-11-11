"""Part B: automatic correspondences, following Brown et al., "Multi-Image Matching
using Multi-Scale Oriented Patches" (MOPS), with the course's simplifications.

B.1  Harris corners (single scale), then Adaptive Non-Maximal Suppression (ANMS)
B.2  axis-aligned 8x8 descriptors sampled from a blurred 40x40 window, bias/gain-normalized
B.3  matching with Lowe's ratio test (1-NN / 2-NN distance)
B.4  4-point RANSAC, then a least-squares refit on the inliers (computeH from Part A)
"""
import numpy as np
from scipy.ndimage import gaussian_filter
from skimage.feature import corner_harris, peak_local_max
from homography import computeH, apply
from warp import _bilinear


def gray(im):
    return im @ np.array([0.299, 0.587, 0.114], np.float32) if im.ndim == 3 else im


def downsample(g, k):
    """k x k block average (no homography, no interpolation library)."""
    h, w = (g.shape[0] // k) * k, (g.shape[1] // k) * k
    return g[:h, :w].reshape(h // k, k, w // k, k).mean((1, 3))


def harris_corners(g, edge=20, max_corners=5000):
    """Harris response and its local maxima, as in the course's harris.py
    (skimage corner_harris with method='eps', sigma=1; peak_local_max with
    min_distance=1; corners within `edge` px of the border dropped). Only the
    `max_corners` strongest maxima are kept, so ANMS stays affordable."""
    h = corner_harris(g, method='eps', sigma=1)
    rc = peak_local_max(h, min_distance=1, exclude_border=edge)
    f = h[rc[:, 0], rc[:, 1]]
    keep = np.argsort(-f)[:max_corners]
    return h, rc[keep][:, ::-1].astype(np.float64)        # (x, y), strongest first


def anms(xy, strength, n=500, c_robust=0.9, chunk=1024):
    """Adaptive Non-Maximal Suppression (MOPS Section 3). Each corner's radius is
    the distance to the nearest corner that is sufficiently stronger
    (f_i < c_robust * f_j); keep the n corners with the largest radii, which
    spreads them evenly over the image instead of clustering on texture."""
    order = np.argsort(-strength)
    xy, f = xy[order], strength[order]
    r2 = np.full(len(f), np.inf)
    for s in range(0, len(f), chunk):
        e = min(s + chunk, len(f))
        d2 = ((xy[s:e, None, :] - xy[None, :, :]) ** 2).sum(-1)
        stronger = f[s:e, None] < c_robust * f[None, :]
        r2[s:e] = np.where(stronger, d2, np.inf).min(1)
    keep = np.argsort(-r2)[:n]
    return xy[keep], np.sqrt(r2[keep])


def descriptors(g, xy, window=40, size=8, sigma=2.0):
    """8x8 samples spaced window/size = 5 px apart, taken from the image blurred
    first (so the 5x subsampling does not alias): a big, blurred descriptor of a
    40x40 window. Bias/gain normalization (zero mean, unit std) makes it
    insensitive to brightness and contrast changes between photos."""
    b = gaussian_filter(g.astype(np.float32), sigma)[..., None]
    step = window / size
    off = (np.arange(size) - (size - 1) / 2) * step            # -17.5 ... 17.5
    ox, oy = np.meshgrid(off, off)
    sx = xy[:, 0, None, None] + ox[None]; sy = xy[:, 1, None, None] + oy[None]
    p, _ = _bilinear(b, sx, sy)
    p = p[..., 0].reshape(len(xy), -1)
    p = (p - p.mean(1, keepdims=True)) / (p.std(1, keepdims=True) + 1e-8)
    return p.astype(np.float32)


def match(d1, d2, ratio=0.65):
    """Lowe's ratio test (MOPS Section 5, simplified): keep a feature's nearest
    neighbour only if it is clearly closer than the second nearest."""
    D = (d1 ** 2).sum(1)[:, None] + (d2 ** 2).sum(1)[None, :] - 2 * d1 @ d2.T
    D = np.sqrt(np.maximum(D, 0))
    nn = np.argsort(D, 1)[:, :2]
    e1 = D[np.arange(len(d1)), nn[:, 0]]; e2 = D[np.arange(len(d1)), nn[:, 1]]
    r = e1 / (e2 + 1e-12)
    keep = r < ratio
    return np.c_[np.nonzero(keep)[0], nn[keep, 0]], r[keep], r, nn[:, 0]


def ransac(p1, p2, iters=3000, eps=2.0, seed=0):
    """4-point RANSAC: fit an exact homography to 4 random matches, count the
    matches it maps within eps px, keep the best, refit on all its inliers."""
    rng = np.random.default_rng(seed)
    n = len(p1); best = np.zeros(n, bool)
    if n < 4:
        return None, best
    for _ in range(iters):
        s = rng.choice(n, 4, replace=False)
        try:
            H = computeH(p1[s], p2[s])
        except (np.linalg.LinAlgError, ValueError):
            continue
        if not np.all(np.isfinite(H)):
            continue
        with np.errstate(divide='ignore', invalid='ignore'):   # degenerate samples
            inl = np.linalg.norm(apply(H, p1) - p2, axis=1) < eps
        if inl.sum() > best.sum():
            best = inl
    H = computeH(p1[best], p2[best]) if best.sum() >= 4 else None
    if H is not None:                                       # one refit pass on the refined inliers
        best = np.linalg.norm(apply(H, p1) - p2, axis=1) < eps
        H = computeH(p1[best], p2[best])
    return H, best


def features(im, scale=0.5, n=500):
    """Corners, ANMS and descriptors of one photo, computed at `scale` of the
    stored resolution; returned coordinates are in stored-image pixels."""
    k = int(round(1 / scale))
    g = downsample(gray(im), k)
    h, xy = harris_corners(g)
    f = h[xy[:, 1].astype(int), xy[:, 0].astype(int)]
    axy, radius = anms(xy, f, n=n)
    d = descriptors(g, axy)
    return dict(all_xy=xy * k, xy=axy * k, desc=d, radius=radius * k, gray=g, k=k)


def auto_homography(F1, F2, ratio=0.65, eps_px=4.0, iters=3000, seed=0):
    """Full B.3 + B.4 for one pair: matches, RANSAC inliers, homography (stored px)."""
    pairs, r, _, _ = match(F1['desc'], F2['desc'], ratio)
    p1, p2 = F1['xy'][pairs[:, 0]], F2['xy'][pairs[:, 1]]
    H, inl = ransac(p1, p2, iters=iters, eps=eps_px, seed=seed)
    return dict(H=H, p1=p1, p2=p2, inliers=inl, ratios=r, n_matches=len(pairs))
