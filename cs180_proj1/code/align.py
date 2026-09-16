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
    # 5-tap binomial filter, used before each downsample
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
    # full resolution first, coarsest image last
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

    # report x,y even though np.roll uses y,x internally
    return rgb, (dg[1], dg[0]), (dr[1], dr[0])


# Bells and whistles ---------------------------------------------------------

def valid_overlap(shape, dg, dr):
    """Region not contaminated by np.roll wraparound."""
    h, w = shape[:2]
    ys = [0, dg[0], dr[0]]
    xs = [0, dg[1], dr[1]]
    return max(ys), h + min(ys), max(xs), w + min(xs)


def _block_mean(im, k):
    h = (im.shape[0] // k) * k
    w = (im.shape[1] // k) * k
    return im[:h, :w].reshape(h // k, k, w // k, k, 3).mean(axis=(1, 3))


def auto_crop(rgb, dg=(0, 0), dr=(0, 0), band=0.12, dark=0.12):
    """Remove roll wraparound, then trim dark plate borders near the edges."""
    top, bottom, left, right = valid_overlap(rgb.shape, dg, dr)
    im = rgb[top:bottom, left:right]

    # Detect borders on a small thumbnail so this stays cheap on TIFFs.
    k = max(1, int(np.ceil(max(im.shape[:2]) / 800)))
    thumb = _block_mean(im, k)
    border = thumb.min(axis=2) < dark
    h, w = border.shape

    def edge_cut(frac, n):
        limit = int(band * n)
        clean_needed = max(2, int(0.025 * n))
        last_border = 0
        clean = 0
        for i in range(limit):
            if frac[i] > 0.60:
                last_border = i + 1
                clean = 0
            else:
                clean += 1
                if clean >= clean_needed:
                    break
        return last_border

    rows = border.mean(axis=1)
    cols = border.mean(axis=0)
    ct = edge_cut(rows, h)
    cb = edge_cut(rows[::-1], h)
    cl = edge_cut(cols, w)
    cr = edge_cut(cols[::-1], w)

    y0 = top + ct * k
    y1 = top + (h - cb) * k
    x0 = left + cl * k
    x1 = left + (w - cr) * k
    return rgb[y0:y1, x0:x1]


def white_balance(rgb, frac=0.20):
    """Estimate color cast from the lowest-chroma pixels and scale RGB channels."""
    pixels = rgb[::4, ::4].reshape(-1, 3).astype(np.float64)
    brightness = pixels.mean(axis=1)
    mx = pixels.max(axis=1)
    mn = pixels.min(axis=1)
    good = (brightness > 0.10) & (mx < 0.97)
    if good.sum() < 100:
        return rgb

    pixels = pixels[good]
    chroma = (mx[good] - mn[good]) / brightness[good]
    neutral = pixels[chroma <= np.quantile(chroma, frac)]
    means = neutral.mean(axis=0)
    gains = np.clip(means.mean() / np.maximum(means, 1e-6), 0.9, 1.1)
    gains /= gains.max()
    return rgb * gains.astype(np.float32)


def better_color_map(rgb):
    """Conservative 3x3 channel remapping for the historical filter responses.

    The Prokudin-Gorskii filters are not guaranteed to match modern RGB primaries.
    This fixed matrix mixes the three aligned channels slightly instead of treating
    each exposure as a perfect modern primary. Every row sums to 1, so neutral gray
    stays neutral; the small negative off-diagonal terms reduce channel cross-talk.
    The same mapping is used for every image.
    """
    matrix = np.array([
        [1.10, -0.07, -0.03],
        [-0.04, 1.08, -0.04],
        [-0.02, -0.06, 1.08],
    ], dtype=np.float32)
    mapped = rgb.astype(np.float32) @ matrix.T
    return np.clip(mapped, 0, 1)


def auto_contrast(rgb, low=0.5, high=99.5):
    """Shared percentile stretch, so contrast changes without changing color balance."""
    a, b = np.percentile(rgb[::4, ::4], [low, high])
    return np.clip((rgb - a) / max(b - a, 1e-6), 0, 1)
