"""Prepare the Part A input images as 512x512 RGB PNGs.

Run from the project folder:  python tools/prepare_inputs.py <folder with the original downloads>
The notebook's own preprocess() would center-crop anyway; doing it here makes the crop explicit
and lets the webpage show exactly the pixels the model received.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageOps

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else 'data/originals')
OUT = Path('data/inputs')
OUT.mkdir(parents=True, exist_ok=True)
R = 512


def flatten(im):
    """RGBA -> RGB on white."""
    im = im.convert('RGBA')
    bg = Image.new('RGBA', im.size, 'white')
    bg.alpha_composite(im)
    return bg.convert('RGB')


def square_crop(im, cx=0.5, cy=0.5, zoom=1.0):
    """Square crop (side = min(w, h) / zoom) centered at fractional (cx, cy), clamped to the image."""
    w, h = im.size
    s = int(min(w, h) / zoom)
    x0 = int(round(min(max(cx * w - s / 2, 0), w - s)))
    y0 = int(round(min(max(cy * h - s / 2, 0), h - s)))
    return im.crop((x0, y0, x0 + s, y0 + s)).resize((R, R), Image.Resampling.LANCZOS)


def pad_drawing(im, margin=0.08):
    """Trim white space around a drawing, then pad it back to a centered square."""
    im = flatten(im)
    a = np.asarray(im.convert('L'))
    ys, xs = np.nonzero(a < 245)
    im = im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
    w, h = im.size
    s = int(max(w, h) * (1 + 2 * margin))
    canvas = Image.new('RGB', (s, s), 'white')
    canvas.paste(im, ((s - w) // 2, (s - h) // 2))
    return canvas.resize((R, R), Image.Resampling.LANCZOS)


def left_or_right(im, side):
    """Some Pixless images are side-by-side photo|pixel-art; keep one half (transparent gutter removed)."""
    im = im.convert('RGBA')
    w, h = im.size
    half = im.crop((w // 2, 0, w, h)) if side == 'right' else im.crop((0, 0, w // 2, h))
    alpha = np.asarray(half)[..., 3]
    cols = np.nonzero(alpha.min(0) > 0)[0]
    return half.crop((cols.min(), 0, cols.max() + 1, h)).convert('RGB')


jobs = {
    # Sections 1.1-1.5 and 3.1/3.2 ("my_image_1")
    'wivenhoe_park.png': lambda: square_crop(Image.open(SRC / 'John_Constable_-_Wivenhoe_Park,_Essex_-_Google_Art_Project.jpg').convert('RGB'), cx=0.5),
    # Sections 3.1/3.2 ("my_image_2"): pixel-art half of the Pixless Fuji demo
    'pixel_fuji.png': lambda: square_crop(left_or_right(Image.open(SRC / 'fuji_demo.webp'), 'right')),
    # Section 3.1 web image
    'fantasy_architecture.png': lambda: square_crop(Image.open(SRC / 'Tiny Worlds and Fantasy Architecture.jfif').convert('RGB'), cx=0.46, cy=0.48, zoom=1.14),
    # Section 3.1 hand drawings
    'pig_drawing.png': lambda: pad_drawing(Image.open(SRC / 'pig.png')),
    'kart_drawing.png': lambda: pad_drawing(Image.open(SRC / 'bang.png')),
    # Own-ideas extras ("make it real" on non-photographs)
    'saturn_1874.png': lambda: square_crop(Image.open(SRC / 'Trouvelot_-_The_planet_Saturn_-_1874.jpg').convert('RGB'), cy=0.42),
    'comet_1881.png': lambda: square_crop(Image.open(SRC / 'p16003coll4_4858_full_1.avif').convert('RGB'), cy=0.47, zoom=1.15),
    'pixel_portrait.png': lambda: square_crop(left_or_right(Image.open(SRC / 'pixless_camera_7.webp'), 'left'), cy=0.4),
}

for name, make in jobs.items():
    im = make()
    assert im.size == (R, R) and im.mode == 'RGB'
    im.save(OUT / name)
    print('wrote', OUT / name)
