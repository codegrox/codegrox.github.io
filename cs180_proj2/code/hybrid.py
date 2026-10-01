"""Part 2.2: hybrid images (Oliva, Torralba, Schyns 2006).

    H = I_low * G_1  +  (I_high - I_high * G_2)

Alignment reuses the provided starter code (align_image_code.py). The only change
is that the two clicked point pairs are read from points/<name>.json instead of
calling plt.ginput every run, so results are reproducible.
"""
import json
from pathlib import Path

import numpy as np

import align_image_code as starter
from skimage.transform import AffineTransform, warp
from filters import gaussian_blur
from imutils import to_gray, as_rgb, resize


# ------------------------------------------------------------------ alignment

def load_points(path, shape1, shape2):
    """Points are stored as fractions of (width, height) so they survive resizing.
    Returns two (n, 2) arrays of (x, y) pixels; n = 2 (similarity) or 3 (affine)."""
    d = json.loads(Path(path).read_text())
    def px(pts, shape):
        h, w = shape[:2]
        return np.array([[x * w, y * h] for x, y in pts], dtype=np.float64)
    return px(d['im1'], shape1), px(d['im2'], shape2)


def _with_validity(im, n):
    """RGB (+ extra channels) padded to n channels, plus a validity channel of ones."""
    c = as_rgb(im)
    if c.shape[2] < n:
        c = np.dstack([c, np.zeros(c.shape[:2] + (n - c.shape[2],))])
    return np.dstack([c, np.ones(im.shape[:2])])


def _affine(P1, P2):
    """Affine map taking points P1 -> P2 (exact for 3 pairs), solved with numpy so it
    does not depend on the skimage version: [x', y'] = M @ [x, y, 1]."""
    X = np.hstack([P1, np.ones((len(P1), 1))])
    sol, *_ = np.linalg.lstsq(X, P2, rcond=None)
    M = np.eye(3)
    M[:2] = sol.T
    return AffineTransform(matrix=M)


def _resize_pts(im, P, f):
    h, w = im.shape[:2]
    nh, nw = max(1, int(round(h * f))), max(1, int(round(w * f)))
    return resize(im, (nh, nw)), P * np.array([nw / w, nh / h])


def align_pair(im1, im2, P1, P2, max_upscale=None):
    """Warp im1 onto im2's frame and crop both to the region valid in both.

    2 point pairs: the provided starter code (recenter -> rescale -> rotate).
      im1 is resized first so its point distance equals im2's; the starter's own
      rescale always shrinks the larger face, which would throw away resolution.
    3 point pairs: an affine warp (rotation, scale, shear) solved from the three
      correspondences, which can also match a head turned differently.

    im2 keeps its native resolution unless im1 would have to be upsampled by more
    than max_upscale, in which case im2 is reduced so the two stay comparable.
    Extra channels (e.g. a mask) are transformed together with their image."""
    P1, P2 = np.asarray(P1, float), np.asarray(P2, float)
    n1, n2 = as_rgb(im1).shape[2], as_rgb(im2).shape[2]
    if len(P1) == 3:
        t = _affine(P1, P2)
        scale = np.sqrt(abs(np.linalg.det(t.params[:2, :2])))
        if max_upscale and scale > max_upscale:
            im2, P2 = _resize_pts(im2, P2, max_upscale / scale)
            t = _affine(P1, P2)
        n = max(n1, n2)
        a1 = warp(_with_validity(im1, n), t.inverse, output_shape=im2.shape[:2], order=3,
                  mode='constant', cval=0, preserve_range=True)
        a2 = _with_validity(im2, n)
        info = {'method': 'affine (3 points)', 'rotation_deg': float(np.degrees(t.rotation)),
                'scale': float(np.sqrt(abs(np.linalg.det(t.params[:2, :2])))),
                'shear_deg': float(np.degrees(t.shear))}
    else:
        f = np.linalg.norm(P2[1] - P2[0]) / np.linalg.norm(P1[1] - P1[0])
        if max_upscale and f > max_upscale:
            im2, P2 = _resize_pts(im2, P2, max_upscale / f)
            f = max_upscale
        if abs(f - 1) > 1e-3:
            im1, P1 = _resize_pts(im1, P1, f)
        pts = (tuple(P1[0]), tuple(P1[1]), tuple(P2[0]), tuple(P2[1]))
        n = max(n1, n2)                      # starter asserts equal shapes, channels included
        a1, a2 = _with_validity(im1, n), _with_validity(im2, n)
        a1, a2 = starter.align_image_centers(a1, a2, pts)
        a1, a2 = starter.rescale_images(a1, a2, pts)
        a1, angle = starter.rotate_im1(a1, pts)
        a1, a2 = starter.match_img_size(a1, a2)
        info = {'method': 'similarity (2 points, starter code)', 'rotation_deg': float(np.degrees(angle)),
                'scale': float(f)}
    valid = (a1[..., -1] > 0.999) & (a2[..., -1] > 0.999)
    y0, y1, x0, x1 = largest_valid_box(valid)
    out1 = a1[y0:y1, x0:x1, :n1]          # original channels only; an extra mask
    out2 = a2[y0:y1, x0:x1, :n2]          # channel is warped along with its image
    info['crop'] = [int(y0), int(y1), int(x0), int(x1)]
    return np.clip(out1, 0, 1), np.clip(out2, 0, 1), info


def largest_valid_box(valid):
    """Largest axis-aligned rectangle containing only valid pixels.

    Classic row-by-row histogram method: heights[j] counts consecutive valid pixels
    ending at the current row, and a monotonic stack finds the widest span that
    fits each height. O(H * W)."""
    H, W = valid.shape
    heights = np.zeros(W, dtype=np.int64)
    best, box = 0, (0, H, 0, W)
    for i in range(H):
        heights = np.where(valid[i], heights + 1, 0)
        row = heights.tolist() + [0]
        stack = []                                   # (start column, height)
        for j, h in enumerate(row):
            start = j
            while stack and stack[-1][1] >= h:
                s, hh = stack.pop()
                if hh * (j - s) > best:
                    best, box = hh * (j - s), (i - hh + 1, i + 1, s, j)
                start = s
            stack.append((start, h))
    return box


def cap_size(im, max_side):
    h, w = im.shape[:2]
    s = max_side / max(h, w)
    return resize(im, (int(round(h * s)), int(round(w * s)))) if s < 1 else im


# --------------------------------------------------------------------- hybrid

def split_bands(im_low, im_high, sigma_low, sigma_high):
    low = gaussian_blur(im_low, sigma_low)
    high = im_high - gaussian_blur(im_high, sigma_high)
    return low, high


def hybrid_image(im_low, im_high, sigma_low, sigma_high, color='both', gain_high=1.0):
    """color: 'both' | 'low' | 'high' | 'none' -> which component keeps its color."""
    low_src = im_low if color in ('both', 'low') else to_gray(im_low)
    high_src = im_high if color in ('both', 'high') else to_gray(im_high)
    low, high = split_bands(low_src, high_src, sigma_low, sigma_high)
    if low.ndim != high.ndim:
        low, high = as_rgb(low), as_rgb(high)
    hyb = low + gain_high * high
    return np.clip(hyb, 0, 1), low, high
