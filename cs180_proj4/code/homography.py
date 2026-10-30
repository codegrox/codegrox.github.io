"""A.2: recover homographies from point correspondences (numpy only).

A homography p' ~ H p has 8 degrees of freedom once H[2, 2] = 1. Each pair
(x, y) -> (u, v) gives two linear equations in the 8 unknowns h = (h11..h32):

    u = (h11 x + h12 y + h13) / (h31 x + h32 y + 1)
 => h11 x + h12 y + h13 - h31 x u - h32 y u = u
    h21 x + h22 y + h23 - h31 x v - h32 y v = v

n >= 4 pairs stack into A h = b (2n x 8), solved by least squares.
"""
import numpy as np


def build_system(im1_pts, im2_pts):
    """The 2n x 8 system A h = b exactly as written above (pixel coordinates)."""
    A, b = [], []
    for (x, y), (u, v) in zip(np.asarray(im1_pts, float), np.asarray(im2_pts, float)):
        A.append([x, y, 1, 0, 0, 0, -x * u, -y * u]); b.append(u)
        A.append([0, 0, 0, x, y, 1, -x * v, -y * v]); b.append(v)
    return np.array(A), np.array(b)


def _normalizer(pts):
    """Similarity T moving the points' centroid to 0 and their mean distance to sqrt(2).
    Pixel coordinates in the thousands make A badly conditioned (entries ~1e6 next
    to 1s); normalizing first is Hartley's standard fix."""
    c = pts.mean(0)
    s = np.sqrt(2) / np.mean(np.linalg.norm(pts - c, axis=1))
    return np.array([[s, 0, -s * c[0]], [0, s, -s * c[1]], [0, 0, 1]])


def computeH(im1_pts, im2_pts):
    """3 x 3 homography H with im2 ~ H @ im1, from n >= 4 (x, y) correspondences."""
    p1, p2 = np.asarray(im1_pts, float), np.asarray(im2_pts, float)
    if len(p1) < 4 or p1.shape != p2.shape:
        raise ValueError('need n >= 4 matching (x, y) points in each image')
    T1, T2 = _normalizer(p1), _normalizer(p2)
    n1 = apply(T1, p1)
    n2 = apply(T2, p2)
    A, b = build_system(n1, n2)
    h = np.linalg.lstsq(A, b, rcond=None)[0]
    Hn = np.append(h, 1).reshape(3, 3)
    H = np.linalg.inv(T2) @ Hn @ T1                # undo the normalization
    return H / H[2, 2]


def apply(H, pts):
    """Map (x, y) points through H (with the perspective divide)."""
    p = np.c_[np.asarray(pts, float), np.ones(len(pts))] @ H.T
    return p[:, :2] / p[:, 2:3]


def residuals(H, im1_pts, im2_pts):
    return np.linalg.norm(apply(H, im1_pts) - np.asarray(im2_pts, float), axis=1)


def condition_numbers(im1_pts, im2_pts):
    """cond(A) for raw pixel coordinates vs. normalized ones (shown on the page)."""
    p1, p2 = np.asarray(im1_pts, float), np.asarray(im2_pts, float)
    raw = np.linalg.cond(build_system(p1, p2)[0])
    T1, T2 = _normalizer(p1), _normalizer(p2)
    norm = np.linalg.cond(build_system(apply(T1, p1), apply(T2, p2))[0])
    return raw, norm
