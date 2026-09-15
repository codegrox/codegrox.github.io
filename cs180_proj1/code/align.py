import numpy as np


def to_float(im):
    if np.issubdtype(im.dtype, np.integer):
        im = im.astype(np.float32) / np.iinfo(im.dtype).max
    else:
        im = im.astype(np.float32)
    if im.ndim == 3:
        im = im[..., :3].mean(axis=2)
    return im


def split_bgr(im):
    h = im.shape[0] // 3
    return im[:h], im[h:2 * h], im[2 * h:3 * h]


def shift(im, dy, dx):
    return np.roll(im, (dy, dx), axis=(0, 1))


def ncc(a, b):
    a = a.astype(np.float64)
    b = b.astype(np.float64)
    a = a - a.mean()
    b = b - b.mean()
    denom = np.linalg.norm(a) * np.linalg.norm(b)
    if denom == 0:
        return -np.inf
    return np.sum(a * b) / denom


def l2(a, b):
    return np.sqrt(np.sum((a.astype(np.float64) - b.astype(np.float64)) ** 2))


def score(moving, fixed, dy, dx, metric='ncc', crop=0.10):
    moved = shift(moving, dy, dx)
    h, w = fixed.shape
    cy = int(h * crop)
    cx = int(w * crop)
    a = moved[cy:h-cy, cx:w-cx]
    b = fixed[cy:h-cy, cx:w-cx]
    if metric == 'ncc':
        return ncc(a, b)
    return -l2(a, b)


def search(moving, fixed, center=(0, 0), radius=15, metric='ncc', crop=0.10):
    best_score = -np.inf
    best = center
    cy, cx = center
    for dy in range(cy - radius, cy + radius + 1):
        for dx in range(cx - radius, cx + radius + 1):
            s = score(moving, fixed, dy, dx, metric, crop)
            if s > best_score:
                best_score = s
                best = (dy, dx)
    return best


def blur(im):
    # small gaussian-like blur before shrinking
    k = np.array([1, 4, 6, 4, 1], dtype=np.float32) / 16.0
    r = 2

    p = np.pad(im, ((0, 0), (r, r)), mode='reflect')
    tmp = sum(k[i] * p[:, i:i + im.shape[1]] for i in range(5))

    p = np.pad(tmp, ((r, r), (0, 0)), mode='reflect')
    out = sum(k[i] * p[i:i + im.shape[0], :] for i in range(5))
    return out.astype(np.float32)


def downsample(im):
    return blur(im)[::2, ::2]


def make_pyramid(im, max_size=400):
    pyr = [im]
    while max(pyr[-1].shape) > max_size:
        pyr.append(downsample(pyr[-1]))
    return pyr


def gradient(im):
    gy, gx = np.gradient(im)
    return np.hypot(gx, gy).astype(np.float32)


def align_single(moving, fixed, metric='ncc', feature='raw'):
    if feature == 'grad':
        moving = gradient(moving)
        fixed = gradient(fixed)
    return search(moving, fixed, radius=15, metric=metric)


def align_pyramid(moving, fixed, metric='ncc', feature='raw'):
    mov_pyr = make_pyramid(moving)
    fix_pyr = make_pyramid(fixed)

    offset = (0, 0)
    top = len(fix_pyr) - 1
    for level in range(top, -1, -1):
        m = mov_pyr[level]
        f = fix_pyr[level]
        if feature == 'grad':
            m = gradient(m)
            f = gradient(f)

        if level == top:
            offset = search(m, f, radius=15, metric=metric)
        else:
            offset = (offset[0] * 2, offset[1] * 2)
            offset = search(m, f, center=offset, radius=2, metric=metric)
    return offset


def colorize(plate, method='pyramid', metric='ncc', feature='raw'):
    b, g, r = split_bgr(plate)

    if method == 'single':
        dg = align_single(g, b, metric, feature)
        dr = align_single(r, b, metric, feature)
    else:
        dg = align_pyramid(g, b, metric, feature)
        dr = align_pyramid(r, b, metric, feature)

    ag = shift(g, *dg)
    ar = shift(r, *dr)
    rgb = np.dstack([ar, ag, b])

    # return x,y because that is how the project asks us to report offsets
    return rgb, (dg[1], dg[0]), (dr[1], dr[0])
