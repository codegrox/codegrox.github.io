"""Image I/O helpers (float images in [0, 1])."""
from pathlib import Path
import numpy as np
from PIL import Image


def load(path):
    return np.asarray(Image.open(path).convert('RGB'), np.float32) / 255.0


def save(im, path, quality=95, max_side=None):
    path = Path(path); path.parent.mkdir(parents=True, exist_ok=True)
    arr = (np.clip(im, 0, 1) * 255 + 0.5).astype(np.uint8)
    out = Image.fromarray(arr.squeeze() if arr.ndim == 3 and arr.shape[2] == 1 else arr)
    if max_side and max(out.size) > max_side:
        out.thumbnail((max_side, max_side), Image.LANCZOS)
    if path.suffix.lower() in ('.jpg', '.jpeg'):
        out.convert('RGB').save(path, quality=quality)
    else:
        out.save(path, optimize=True)
    return path
