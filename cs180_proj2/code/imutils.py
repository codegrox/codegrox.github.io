"""Image I/O, display helpers, and the results store shared by every part."""
import json
import time
from pathlib import Path

import numpy as np
from PIL import Image, ImageOps

LUMA = np.array([0.299, 0.587, 0.114])


# ----------------------------------------------------------------------------- io

def load(path, gray=False, max_side=None):
    """Read an image as float64 in [0, 1]. Phone EXIF rotation is applied."""
    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(f'missing image: {path}  (see README, section "Your images")')
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    if max_side and max(im.size) > max_side:
        im.thumbnail((max_side, max_side), Image.LANCZOS)
    arr = np.asarray(im, dtype=np.float64) / 255.0
    return to_gray(arr) if gray else arr


def load_mask(path, shape):
    """Read a black/white mask and resize it to (h, w). Returns float in [0, 1]."""
    im = Image.open(path).convert('L').resize((shape[1], shape[0]), Image.BILINEAR)
    return np.asarray(im, dtype=np.float64) / 255.0


def to_gray(im):
    return im @ LUMA if im.ndim == 3 else im


def as_rgb(im):
    return np.dstack([im] * 3) if im.ndim == 2 else im


def resize(im, shape):
    """Resize a float image to (h, w) with Lanczos (display/fit only, never for pyramids)."""
    h, w = shape
    if im.ndim == 2:
        out = Image.fromarray(im.astype(np.float32)).resize((w, h), Image.LANCZOS)
        return np.clip(np.asarray(out, dtype=np.float64), 0, 1)
    return np.dstack([resize(im[..., c], shape) for c in range(im.shape[2])])


def fit_to(im, shape):
    """Center-crop im to the aspect ratio of shape, then resize to exactly shape."""
    h, w = im.shape[:2]
    th, tw = shape
    target = tw / th
    if w / h > target:
        nw = int(round(h * target))
        x0 = (w - nw) // 2
        im = im[:, x0:x0 + nw]
    else:
        nh = int(round(w / target))
        y0 = (h - nh) // 2
        im = im[y0:y0 + nh]
    return resize(im, shape)


def trim_uniform_border(im, tol=0.98, frac=0.9):
    """Drop outer rows/cols that are almost entirely white (e.g. screenshot margins)."""
    g = to_gray(im)
    white = g >= tol
    top, bot, left, right = 0, g.shape[0], 0, g.shape[1]
    while top < bot and white[top, left:right].mean() > frac:
        top += 1
    while bot > top and white[bot - 1, left:right].mean() > frac:
        bot -= 1
    while left < right and white[top:bot, left].mean() > frac:
        left += 1
    while right > left and white[top:bot, right - 1].mean() > frac:
        right -= 1
    return im[top:bot, left:right], (top, g.shape[0] - bot, left, g.shape[1] - right)


def save(im, path, max_side=None, quality=95):
    """Save a float image (clipped to [0, 1]). PNG keeps binary maps and figures crisp."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    arr = (np.clip(im, 0, 1) * 255 + 0.5).astype(np.uint8)
    out = Image.fromarray(arr)
    if max_side and max(out.size) > max_side:
        out.thumbnail((max_side, max_side), Image.LANCZOS)
    if path.suffix.lower() in ('.jpg', '.jpeg'):
        out.convert('RGB').save(path, quality=quality)
    elif path.suffix.lower() == '.webp':             # photo montages: keeps alpha, ~10x smaller than PNG
        out.save(path, quality=92, method=6)
    else:
        out.save(path, optimize=True)
    return path


# ------------------------------------------------------------------------ display

def signed_vis(x, scale=None, pct=99.5):
    """Map a signed image to [0, 1] with 0 -> mid gray. Shared scale if given."""
    if scale is None:
        scale = np.percentile(np.abs(x), pct) + 1e-12
    return np.clip(0.5 + 0.5 * x / scale, 0, 1)


def normalize(x):
    lo, hi = x.min(), x.max()
    return (x - lo) / (hi - lo + 1e-12)


def colormap(x, cmap='magma', lo=None, hi=None):
    """Apply a matplotlib colormap to a 2D array; returns RGB in [0, 1]."""
    import matplotlib
    lo = x.min() if lo is None else lo
    hi = x.max() if hi is None else hi
    t = np.clip((x - lo) / (hi - lo + 1e-12), 0, 1)
    return matplotlib.colormaps[cmap](t)[..., :3]


def upsample_nearest(x, factor):
    return np.kron(x, np.ones((factor, factor))) if x.ndim == 2 else \
        np.dstack([upsample_nearest(x[..., c], factor) for c in range(x.shape[2])])


def montage(images, cols, gap=6, pad_to=None):
    """Tile same-height RGB images into a grid with transparent gaps (RGBA output)."""
    images = [as_rgb(im) for im in images]
    h = max(im.shape[0] for im in images)
    w = max(im.shape[1] for im in images)
    rows = int(np.ceil(len(images) / cols))
    canvas = np.zeros((rows * h + (rows - 1) * gap, cols * w + (cols - 1) * gap, 4))
    for k, im in enumerate(images):
        r, c = divmod(k, cols)
        y, x = r * (h + gap), c * (w + gap)
        canvas[y:y + im.shape[0], x:x + im.shape[1], :3] = im
        canvas[y:y + im.shape[0], x:x + im.shape[1], 3] = 1
    return canvas


def psnr(a, b):
    mse = np.mean((np.clip(a, 0, 1) - np.clip(b, 0, 1)) ** 2)
    return float(10 * np.log10(1.0 / mse)) if mse > 0 else float('inf')


# ------------------------------------------------------------------------ timing

def best_time(fn, repeats=3):
    """Run fn `repeats` times; return (result, best wall-clock seconds)."""
    best, out = float('inf'), None
    for _ in range(repeats):
        t0 = time.perf_counter()
        out = fn()
        best = min(best, time.perf_counter() - t0)
    return out, best


# ----------------------------------------------------------------------- results

class Results:
    """Tiny JSON store. Every stage writes its numbers as soon as it finishes,
    so an interrupted run keeps everything that already completed."""

    def __init__(self, path):
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.data = json.loads(self.path.read_text()) if self.path.exists() else {}

    def done(self, stage):
        """Finished and nothing was skipped for missing inputs."""
        return stage in self.data and not self.data[stage].get('_missing')

    def put(self, stage, values):
        self.data[stage] = _jsonable(values)
        self.data.setdefault('_meta', {})[stage] = time.strftime('%Y-%m-%d %H:%M:%S')
        self.path.write_text(json.dumps(self.data, indent=2))


def _jsonable(v):
    if isinstance(v, dict):
        return {str(k): _jsonable(x) for k, x in v.items()}
    if isinstance(v, (list, tuple)):
        return [_jsonable(x) for x in v]
    if isinstance(v, np.generic):
        return v.item()
    if isinstance(v, np.ndarray):
        return v.tolist()
    if isinstance(v, float):
        return float(f'{v:.6g}')          # keep tiny errors like 2e-16 visible
    return v
