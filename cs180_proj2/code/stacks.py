"""Parts 2.3-2.4: Gaussian/Laplacian stacks and multiresolution blending
(Burt & Adelson 1983). Implemented from scratch: no cv2.pyrDown, no
skimage.transform.pyramid_*.

A pyramid halves resolution per level, so each level holds half the bandwidth of
the one before. A stack keeps full resolution, so to behave the same way the
*total* blur must double per level:

    sigma_total(k) = 0            for k = 0
                   = s0 * 2^(k-1) for k >= 1

Each level is built from the previous one (cascade) with the incremental blur
sqrt(sigma_total(k)^2 - sigma_total(k-1)^2), since blurring by a then b equals
one blur by sqrt(a^2 + b^2).
"""
import json
from pathlib import Path

import numpy as np

from filters import gaussian_blur
from imutils import load_mask


def total_sigmas(levels, s0):
    return [0.0] + [s0 * 2 ** (k - 1) for k in range(1, levels)]


def gaussian_stack(im, levels, s0=1.0):
    sig = total_sigmas(levels, s0)
    stack = [im]
    for k in range(1, levels):
        inc = np.sqrt(sig[k] ** 2 - sig[k - 1] ** 2)
        stack.append(gaussian_blur(stack[-1], inc))
    return stack


def laplacian_stack(im, levels, s0=1.0):
    """L_k = G_k - G_{k+1}; the last level keeps the residual low-pass G_{N-1}.
    By construction sum(L) == im exactly (telescoping sum)."""
    g = gaussian_stack(im, levels, s0)
    return [g[k] - g[k + 1] for k in range(levels - 1)] + [g[-1]], g


def reconstruct(lap):
    return np.sum(lap, axis=0)


def expand_mask(mask, im):
    return mask[..., None] if im.ndim == 3 and mask.ndim == 2 else mask


def blend(im_a, im_b, mask, levels, s0=1.0, mask_s0=None, keep_bands=True):
    """Multiresolution blend: mask=1 selects im_a.

    Each Laplacian band is combined with the matching level of the mask's Gaussian
    stack, so fine detail switches over a narrow seam and coarse color/shading
    switches over a wide one. Streams through the levels (only the current and
    next Gaussian level are kept), so memory does not grow with depth; set
    keep_bands=False to skip storing the per-level images used for figures.
    """
    mask_s0 = s0 if mask_s0 is None else mask_s0
    sig, msig = total_sigmas(levels, s0), total_sigmas(levels, mask_s0)
    ga, gb, gm = im_a, im_b, mask
    out = np.zeros_like(im_a, dtype=np.float64)
    parts = {'a': [], 'b': [], 'out': [], 'mask': [],
             'sum_a': np.zeros_like(out), 'sum_b': np.zeros_like(out)}   # masked inputs, all levels
    for k in range(levels):
        if k < levels - 1:
            na = gaussian_blur(ga, np.sqrt(sig[k + 1] ** 2 - sig[k] ** 2))
            nb = gaussian_blur(gb, np.sqrt(sig[k + 1] ** 2 - sig[k] ** 2))
            nm = gaussian_blur(gm, np.sqrt(msig[k + 1] ** 2 - msig[k] ** 2))
            la, lb = ga - na, gb - nb
        else:
            la, lb = ga, gb
        m = expand_mask(gm, im_a)
        band_a, band_b = m * la, (1 - m) * lb
        out += band_a + band_b
        parts['sum_a'] += band_a
        parts['sum_b'] += band_b
        if keep_bands:
            parts['a'].append(band_a)
            parts['b'].append(band_b)
            parts['out'].append(band_a + band_b)
            parts['mask'].append(gm)
        if k < levels - 1:
            ga, gb, gm = na, nb, nm
    return np.clip(out, 0, 1), parts


def feather_blend(im_a, im_b, mask, sigma):
    """Single-scale alpha blend with one blurred mask (baseline for comparison)."""
    m = expand_mask(gaussian_blur(mask, sigma), im_a)
    return np.clip(m * im_a + (1 - m) * im_b, 0, 1)


# --------------------------------------------------------------- preprocessing

def color_match(a, b, box_a, box_b, keep_chroma=1.0):
    """Shift a's color cast and brightness to b's, measured on corresponding
    patches (e.g. forehead skin) in Lab. Only the means move, so a keeps its own
    contrast; keep_chroma < 1 then desaturates a (e.g. color noise in an old scan).
    Boxes are (x0, y0, x1, y1) fractions of each photo."""
    from skimage.color import rgb2lab, lab2rgb
    la, lb = rgb2lab(a), rgb2lab(b)
    def patch(lab, box):
        x0, y0, x1, y1 = box
        h, w = lab.shape[:2]
        return lab[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)].reshape(-1, 3)
    out = la - patch(la, box_a).mean(0) + patch(lb, box_b).mean(0)
    out[..., 1:] *= keep_chroma
    return np.clip(lab2rgb(out), 0, 1)


def prepare_pair(entry, root='.', max_side=800):
    """Load a blend pair onto one canvas and build its mask.

    Image b sets the frame; image a is aligned to it with clicked points
    (entry['points']; entry['fit'] = 'affine' or 'similarity' for 3 points) or
    center-cropped/resized. A mask spec with "space": "a" or "b" is drawn on that
    original photo and warped along with it, so a mask placed on a face stays on
    the face after alignment. entry['mask_hole'] is a second mask drawn on b and
    removed from the first (e.g. keep b's own lips). Returns (a, b, mask)."""
    from imutils import load, fit_to
    from hybrid import align_pair, load_points
    root = Path(root)
    side = entry.get('max_side', max_side)
    a = load(root / entry['a'], max_side=side)
    b = load(root / entry['b'], max_side=side)
    if entry.get('crop_b'):                      # [y0, y1, x0, x1] fractions of b
        y0, y1, x0, x1 = entry['crop_b']
        H, W = b.shape[:2]
        b = b[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)]
    if entry.get('pre_blur_a'):                  # e.g. remove film grain from an old scan
        a = gaussian_blur(a, entry['pre_blur_a'])
    if entry.get('color_match'):
        a = color_match(a, b, **entry['color_match'])
    spec = dict(entry['mask'])
    space = spec.pop('space', None)
    hole = entry.get('mask_hole')
    extra_a, extra_b = [], []                    # extra channels warped with each image
    if space == 'a':
        extra_a.append(make_mask(spec, a.shape, root, image=a))
    if space == 'b':
        extra_b.append(make_mask(spec, b.shape, root, image=b))
    if hole:
        extra_b.append(make_mask(hole, b.shape, root, image=b))
    if extra_a:
        a = np.dstack([a] + extra_a)
    if extra_b:
        b = np.dstack([b] + extra_b)
    if entry.get('points'):
        a, b, _ = align_pair(a, b, *load_points(root / entry['points'], a.shape, b.shape),
                             max_upscale=entry.get('max_upscale'), fit=entry.get('fit', 'affine'))
    elif a.shape[:2] != b.shape[:2]:
        a = fit_to(a, b.shape[:2])
    ea, eb = a[..., 3:], b[..., 3:]
    a, b = a[..., :3], b[..., :3]
    if space == 'a':
        mask = ea[..., 0]
    elif space == 'b':
        mask = eb[..., 0]
    else:
        mask = make_mask(spec, a.shape, root, image=b)
    if hole:
        mask = mask * (1 - gaussian_blur(eb[..., -1], entry.get('hole_soften', 1.5)))
    return a, b, np.clip(mask, 0, 1)


# ---------------------------------------------------------------------- masks

def make_mask(spec, shape, root='.', image=None):
    """spec examples:
         {"type": "step", "axis": "vertical", "at": 0.5}      left side = image a
         {"type": "step", "axis": "horizontal", "at": 0.5}    top side  = image a
         {"type": "ellipse", "center": [0.5, 0.4], "radii": [0.2, 0.15]}   fractions of (w, h)
         {"type": "polygon", "points": "points/eye_mask.json"}   from make_mask.py
         {"type": "file", "path": "data/mine/masks/eye.png"}     white = image a
         {"type": "grabcut", "points": "points/x.json", "sure_fg": "points/x_fg.json"}
             rough polygon(s) around the subject, refined to its real outline by
             GrabCut on `image` (outside = background, inside = probably subject)
       Optional: "invert": true
    """
    h, w = shape[:2]
    t = spec['type']
    yy, xx = np.mgrid[0:h, 0:w]
    if t == 'step':
        at = spec.get('at', 0.5)
        m = (xx < at * w) if spec.get('axis', 'vertical') == 'vertical' else (yy < at * h)
    elif t == 'ellipse':
        cx, cy = spec['center']
        rx, ry = spec['radii']
        m = ((xx / w - cx) / rx) ** 2 + ((yy / h - cy) / ry) ** 2 <= 1
    elif t == 'polygon':
        m = _polygons_mask(Path(root) / spec['points'], (h, w))
    elif t == 'grabcut':
        m = grabcut_mask(image, Path(root) / spec['points'],
                         spec.get('sure_fg') and Path(root) / spec['sure_fg'], spec.get('iters', 6),
                         spec.get('dark_bg'))
    elif t == 'file':
        m = load_mask(Path(root) / spec['path'], (h, w)) > 0.5
    else:
        raise ValueError(f'unknown mask type {t!r}')
    m = m.astype(np.float64)
    return 1 - m if spec.get('invert') else m


def _polygons_mask(path, shape):
    """Union of the polygon(s) in a points file: {"points": [...]} or {"polygons": [[...], ...]}."""
    h, w = shape
    d = json.loads(Path(path).read_text())
    polys = d.get('polygons') or [d['points']]
    m = np.zeros((h, w), dtype=bool)
    for pts in polys:
        m |= polygon_mask([(x * w, y * h) for x, y in pts], (h, w))
    return m


def grabcut_mask(image, rough, sure_fg=None, iters=6, dark_bg=None):
    """Refine a hand-drawn outline with GrabCut (graph cut over color models).
    Pixels outside the rough polygon(s) are fixed as background, pixels inside a
    sure_fg polygon are fixed as subject, and GrabCut decides the band between.
    dark_bg: in that band, pixels darker than this are marked probably-background
    (for subjects shot against a black backdrop that also contain dark shadows)."""
    import cv2
    from scipy.ndimage import binary_fill_holes, label
    h, w = image.shape[:2]
    gc = np.where(_polygons_mask(rough, (h, w)), cv2.GC_PR_FGD, cv2.GC_BGD).astype(np.uint8)
    if dark_bg:
        lum = image @ np.array([0.299, 0.587, 0.114])
        gc[(gc == cv2.GC_PR_FGD) & (lum < dark_bg)] = cv2.GC_PR_BGD
    if sure_fg:
        gc[_polygons_mask(sure_fg, (h, w))] = cv2.GC_FGD
    img8 = (np.clip(image[..., ::-1], 0, 1) * 255).astype(np.uint8).copy()   # RGB -> BGR
    bgd, fgd = np.zeros((1, 65)), np.zeros((1, 65))
    cv2.grabCut(img8, gc, None, bgd, fgd, iters, cv2.GC_INIT_WITH_MASK)
    m = (gc == cv2.GC_FGD) | (gc == cv2.GC_PR_FGD)
    lab, n = label(m)                                    # drop specks, fill pinholes
    if n > 1:
        sizes = np.bincount(lab.ravel())[1:]
        m = np.isin(lab, 1 + np.flatnonzero(sizes >= 0.002 * m.size))
    holes = binary_fill_holes(m) & ~m                    # fill pinholes only; real gaps
    lab, n = label(holes)                                # (e.g. between arm and body) stay
    if n:
        sizes = np.bincount(lab.ravel())[1:]
        m |= np.isin(lab, 1 + np.flatnonzero(sizes < 0.0005 * m.size))
    return m


def polygon_mask(points, shape):
    """Even-odd rule point-in-polygon test, vectorized over the pixel grid."""
    h, w = shape
    yy, xx = np.mgrid[0:h, 0:w] + 0.5
    inside = np.zeros((h, w), dtype=bool)
    n = len(points)
    for i in range(n):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % n]
        crosses = (y1 > yy) != (y2 > yy)
        with np.errstate(divide='ignore', invalid='ignore'):
            x_at = (x2 - x1) * (yy - y1) / (y2 - y1) + x1
        inside ^= crosses & (xx < x_at)
    return inside
