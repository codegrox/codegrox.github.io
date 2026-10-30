"""A.5 bells & whistles: cylindrical and spherical mosaics.

A plane cannot hold a wide sweep: at 90 degrees from the reference the planar
projection goes to infinity. A cylinder (or sphere) around the camera can.

For a camera that only rotates, image k and the reference are related by
H = K R K^-1. So each neighbour homography gives a rotation R = K^-1 H K
(projected to the nearest true rotation), and the rotations chain to the
middle frame exactly like the homographies do.

Rendering is pure inverse sampling from the ORIGINAL photos: for every output
pixel, compute its viewing ray on the surface, rotate it into camera k, project
with K, and sample with bilinear interpolation. No image is warped twice, so the
mosaic keeps the full resolution of the sources.
"""
import numpy as np
from warp import _bilinear
from blend import Compositor, overlap_stats, solve_gains


def intrinsics(shape, focal_35mm=24.0):
    """K from the EXIF 35 mm-equivalent focal length (defined on the 43.27 mm
    full-frame diagonal), principal point at the image center."""
    h, w = shape[:2]
    f = focal_35mm / 43.27 * np.hypot(w, h)
    return np.array([[f, 0, (w - 1) / 2], [0, f, (h - 1) / 2], [0, 0, 1]])


def nearest_rotation(M):
    U, _, Vt = np.linalg.svd(M)
    R = U @ Vt
    return R if np.linalg.det(R) > 0 else -R


def rotations_from_homographies(pair_H, K, ref):
    """pair_H[k] maps image k into k+1. Returns R_k (camera k rays -> reference rays)."""
    pair_R = [nearest_rotation(np.linalg.inv(K) @ H @ K) for H in pair_H]
    n = len(pair_R) + 1
    Rs = [None] * n
    Rs[ref] = np.eye(3)
    for k in range(ref - 1, -1, -1):
        Rs[k] = Rs[k + 1] @ pair_R[k]
    for k in range(ref + 1, n):
        Rs[k] = Rs[k - 1] @ pair_R[k - 1].T
    return Rs, pair_R


def fit_rotations(pair_pts, pair_H, K, ref):
    """Jointly fit one shared focal length and every neighbour rotation directly to
    the clicked points (robust least squares in pixels). Projecting K^-1 H K onto the
    nearest rotation only minimizes an algebraic error and was 4-25 px off on these
    photos; fitting in pixel space brings every pair to about 1-2 px."""
    from scipy.optimize import least_squares
    from scipy.spatial.transform import Rotation
    init = [Rotation.from_matrix(nearest_rotation(np.linalg.inv(K) @ H @ K)).as_rotvec() for H in pair_H]
    def resid(x):
        f = K[0, 0] * x[-1]
        Kf = np.array([[f, 0, K[0, 2]], [0, f, K[1, 2]], [0, 0, 1]]); Kfi = np.linalg.inv(Kf)
        out = []
        for k, (p1, p2) in enumerate(pair_pts):
            M = Kf @ Rotation.from_rotvec(x[3 * k:3 * k + 3]).as_matrix() @ Kfi
            q = np.c_[p1, np.ones(len(p1))] @ M.T
            out.append((q[:, :2] / q[:, 2:3] - p2).ravel())
        return np.concatenate(out)
    sol = least_squares(resid, np.r_[np.concatenate(init), 1.0], loss='soft_l1', f_scale=3.0)
    f = K[0, 0] * sol.x[-1]
    Kf = np.array([[f, 0, K[0, 2]], [0, f, K[1, 2]], [0, 0, 1]])
    pair_R = [Rotation.from_rotvec(sol.x[3 * k:3 * k + 3]).as_matrix() for k in range(len(pair_pts))]
    n = len(pair_R) + 1
    Rs = [None] * n
    Rs[ref] = np.eye(3)
    for k in range(ref - 1, -1, -1):
        Rs[k] = Rs[k + 1] @ pair_R[k]
    for k in range(ref + 1, n):
        Rs[k] = Rs[k - 1] @ pair_R[k - 1].T
    return Rs, pair_R, Kf


def rotation_fit_px(H, R, K, pts):
    """How well the pure-rotation model K R K^-1 reproduces H on the clicked points."""
    def proj(M, p):
        q = np.c_[p, np.ones(len(p))] @ M.T
        return q[:, :2] / q[:, 2:3]
    p = np.asarray(pts, float)
    return np.linalg.norm(proj(H, p) - proj(K @ R @ np.linalg.inv(K), p), axis=1)


def straighten(Rs):
    """Level the panorama (Brown & Lowe's automatic straightening). When the camera
    turns about a vertical axis, every camera's x-axis lies in the horizontal plane,
    so 'up' is the direction most perpendicular to all of them: the eigenvector of
    sum(x x^T) with the smallest eigenvalue. Returns new Rs in a frame whose y-axis
    is that up direction (and whose z still points roughly at the middle photo)."""
    X = np.array([R[:, 0] for R in Rs])
    w, V = np.linalg.eigh(X.T @ X)
    up = V[:, 0] * np.sign(V[1, 0] or 1.0)          # keep image-down convention (+y)
    z = np.array([0.0, 0.0, 1.0]); z = z - z.dot(up) * up; z /= np.linalg.norm(z)
    G = np.stack([np.cross(up, z), up, z])          # rows: new x, y, z in old coords
    tilt = float(np.degrees(np.arccos(np.clip(abs(up[1]), -1, 1))))
    return [G @ R for R in Rs], tilt


def largest_full_box(valid):
    """Largest axis-aligned rectangle of valid pixels (row histograms + a stack)."""
    H, W = valid.shape
    heights = np.zeros(W, int); best, box = 0, (0, H, 0, W)
    for i in range(H):
        heights = np.where(valid[i], heights + 1, 0)
        stack = []
        for j, h in enumerate(heights.tolist() + [0]):
            start = j
            while stack and stack[-1][1] >= h:
                s0, hh = stack.pop()
                if hh * (j - s0) > best:
                    best, box = hh * (j - s0), (i - hh + 1, i + 1, s0, j)
                start = s0
            stack.append((start, h))
    return box


def _rays(u, v, f, kind):
    """Viewing rays (reference camera frame) for surface coordinates u, v in pixels."""
    th = u / f
    if kind == 'cylinder':
        y = v / f
        return np.stack([np.sin(th), y, np.cos(th)], -1)
    ph = v / f                                       # sphere: latitude
    return np.stack([np.cos(ph) * np.sin(th), np.sin(ph), np.cos(ph) * np.cos(th)], -1)


def _to_surface(R, K, shape, f, kind, n=60):
    """Surface (u, v) of points along the image border: gives each image's extent."""
    h, w = shape[:2]
    t = np.linspace(0, 1, n)
    border = np.concatenate([np.c_[t * (w - 1), np.zeros(n)], np.c_[t * (w - 1), np.full(n, h - 1)],
                             np.c_[np.zeros(n), t * (h - 1)], np.c_[np.full(n, w - 1), t * (h - 1)]])
    d = (np.c_[border, np.ones(len(border))] @ np.linalg.inv(K).T) @ R.T
    th = np.arctan2(d[:, 0], d[:, 2])
    r = np.hypot(d[:, 0], d[:, 2])
    v = d[:, 1] / r if kind == 'cylinder' else np.arctan2(d[:, 1], r)
    return f * th, f * v


def sample_surface(im, R, K, u0, v0, W, H, f, kind, box, chunk=256):
    """Inverse-sample image (camera rotation R) onto the surface canvas inside box."""
    x0, y0, x1, y1 = box
    out = np.zeros((y1 - y0 + 1, x1 - x0 + 1, 3), np.float32)
    alpha = np.zeros(out.shape[:2], np.float32)
    M = K @ R.T                                      # reference ray -> camera k pixel
    us = np.arange(x0, x1 + 1) + u0
    for r in range(0, out.shape[0], chunk):
        vs = np.arange(y0 + r, min(y0 + r + chunk, y1 + 1)) + v0
        U, V = np.meshgrid(us, vs)
        d = _rays(U, V, f, kind)
        p = d @ M.T
        front = p[..., 2] > 1e-6
        z = np.where(front, p[..., 2], 1.0)
        vals, a = _bilinear(im, p[..., 0] / z, p[..., 1] / z)
        a = a * front
        out[r:r + len(vs)] = vals * a[..., None]
        alpha[r:r + len(vs)] = a
    return out, alpha


def build_surface(images, Rs, K, kind='cylinder', f=None, sigma=4.0, max_pixels=12e6):
    f = K[0, 0] if f is None else f
    ext = [_to_surface(R, K, im.shape, f, kind) for R, im in zip(Rs, images)]
    umin = min(e[0].min() for e in ext); umax = max(e[0].max() for e in ext)
    vmin = min(e[1].min() for e in ext); vmax = max(e[1].max() for e in ext)
    s = min(1.0, np.sqrt(max_pixels / ((umax - umin) * (vmax - vmin))))
    fs = f * s                                       # output radius in pixels
    u0, v0 = umin * s, vmin * s
    W, H = int(np.ceil((umax - umin) * s)) + 1, int(np.ceil((vmax - vmin) * s)) + 1
    boxes = []
    for e in ext:
        bx0 = max(int(np.floor(e[0].min() * s - u0)), 0); bx1 = min(int(np.ceil(e[0].max() * s - u0)), W - 1)
        by0 = max(int(np.floor(e[1].min() * s - v0)), 0); by1 = min(int(np.ceil(e[1].max() * s - v0)), H - 1)
        boxes.append((bx0, by0, bx1, by1))
    # gains from a quarter-size preview
    q = 0.25; Wq, Hq = int(W * q) + 1, int(H * q) + 1
    layers = [sample_surface(im, R, K, u0 * q, v0 * q, Wq, Hq, fs * q, kind, (0, 0, Wq - 1, Hq - 1))
              for im, R in zip(images, Rs)]
    pairs, diffs = overlap_stats(layers)
    gains = solve_gains(pairs, len(images))
    comp = Compositor(H, W, sigma)
    for k, (im, R) in enumerate(zip(images, Rs)):
        out, a = sample_surface(im, R, K, u0, v0, W, H, fs, kind, boxes[k])
        comp.add(out, a, boxes[k][0], boxes[k][1], gains[k])
    res = comp.results()
    res.update(gains=gains, canvas=(W, H), radius_px=fs, span_deg=float(np.degrees((umax - umin) / f)))
    return res
