"""Figures for the webpage: web-sized sources and mosaics, correspondences in the
dot style, rectification inputs, nearest-vs-bilinear zooms, blend comparisons."""
import json, sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
M = ROOT / 'media'
YELLOW, RING, BADGE = (247, 201, 72), (27, 36, 64), (27, 42, 74)


def font(size):
    try:
        return ImageFont.truetype(FONT, size)
    except OSError:
        return ImageFont.load_default()


def web(src, dst, side=2000, quality=90):
    im = Image.open(src).convert('RGB'); im.thumbnail((side, side), Image.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True); im.save(dst, quality=quality)
    return im


def dots(im, pts, scale, close=False):
    """Numbered yellow dots with navy badges (optionally joined into a polygon)."""
    d = ImageDraw.Draw(im); H = im.height
    f = font(max(14, H // 52)); R = max(7, H // 85)
    P = [(x * scale, y * scale) for x, y in pts]
    if close:
        d.line(P + [P[0]], fill=YELLOW, width=max(3, H // 260))
    for i, (x, y) in enumerate(P, 1):
        d.ellipse((x - R - 2, y - R - 2, x + R + 2, y + R + 2), fill=RING)
        d.ellipse((x - R, y - R, x + R, y + R), fill=YELLOW)
        lab = f'{i:02d}'; tw, th = d.textbbox((0, 0), lab, font=f)[2:]
        bx, by = x + R * 0.6, y - R * 0.6 - th - 8
        d.rounded_rectangle((bx, by, bx + tw + 10, by + th + 8), radius=4, fill=BADGE)
        d.text((bx + 5, by + 3), lab, font=f, fill='white')
    return im


def pair_figure(a, b, pa, pb, dst, height=900, gap=16):
    tiles = []
    for f, p in ((a, pa), (b, pb)):
        im = Image.open(ROOT / 'data' / f).convert('RGB'); s = height / im.height
        tiles.append(dots(im.resize((int(im.width * s), height), Image.LANCZOS), p, s))
    c = Image.new('RGB', (tiles[0].width + tiles[1].width + gap, height), (16, 18, 24))
    c.paste(tiles[0], (0, 0)); c.paste(tiles[1], (tiles[0].width + gap, 0))
    dst.parent.mkdir(parents=True, exist_ok=True); c.save(dst, quality=90)


ROUND2_PLANAR = ('gg_pan', 'tower', 'glass', 'cars', 'yellow', 'theatreB')
ROUND2_PANO = ('theatre7', 'oldA', 'oldB')


def strip(paths, dst, height=320, gap=6):
    """All photos of one set side by side at a common height (one image on the page)."""
    tiles = []
    for p in paths:
        im = Image.open(p).convert('RGB'); s = height / im.height
        tiles.append(im.resize((int(im.width * s), height), Image.LANCZOS))
    c = Image.new('RGB', (sum(t.width for t in tiles) + gap * (len(tiles) - 1), height), (16, 18, 24))
    x = 0
    for t in tiles:
        c.paste(t, (x, 0)); x += t.width + gap
    dst.parent.mkdir(parents=True, exist_ok=True); c.save(dst, quality=88)


def zoom(src, box, dst, up=4):
    """Crop and enlarge with nearest neighbour so individual pixels stay visible."""
    im = Image.open(src).convert('RGB').crop(box)
    im.resize((im.width * up, im.height * up), Image.NEAREST).save(dst, quality=92)


def warped_layers(name, scale=0.35):
    """Each photo of a set warped into the shared canvas, before any blending
    (same homographies and canvas as code/mosaic.py, shown at reduced size)."""
    sys.path.insert(0, str(ROOT / 'code'))
    from imutils import load, save
    from homography import computeH
    from mosaic import chain_to_reference, _canvas
    from warp import warpImageBilinear
    C = json.load(open(ROOT / 'points/correspondences.json'))
    keys = sorted(k for k in C if k.startswith(name + '_'))
    files = [C[keys[0]]['im1']] + [C[k]['im2'] for k in keys]
    ims = [load(ROOT / 'data' / f) for f in files]
    Hs = chain_to_reference([computeH(C[k]['im1_pts'], C[k]['im2_pts']) for k in keys], len(ims) // 2)
    T, W, H, s = _canvas(Hs, [im.shape for im in ims], 12e6)
    S = np.diag([scale, scale, 1.0]) @ T
    Wq, Hq = int(W * scale) + 1, int(H * scale) + 1
    for k, (im, Hk) in enumerate(zip(ims, Hs), 1):
        out, a, _ = warpImageBilinear(im, S @ Hk, (0, 0, Wq - 1, Hq - 1))
        save(out + (1 - a[..., None]) * 0.08, M / 'mosaic' / name / f'warped_{k}.jpg', quality=88)


def busiest_window(a, b, size):
    """Window where two renderings of the same mosaic differ most (ghosting check)."""
    A = np.asarray(Image.open(a).convert('L'), np.float32); B = np.asarray(Image.open(b).convert('L'), np.float32)
    d = np.abs(A - B); s = size
    best, at = -1, (0, 0)
    for y in range(0, d.shape[0] - s, s // 4):
        for x in range(0, d.shape[1] - s, s // 4):
            v = d[y:y + s, x:x + s].mean()
            if v > best: best, at = v, (x, y)
    return (at[0], at[1], at[0] + s, at[1] + s), float(best)


def main():
    C = json.load(open(ROOT / 'points/correspondences.json'))
    Rq = json.load(open(ROOT / 'points/rectification.json'))
    out = {}
    for f in sorted((ROOT / 'data').glob('*.jpg')):                  # A.1 sources
        web(f, M / 'sources' / f.name, side=1100, quality=88)
    for k in ('theatre_12', 'theatre_23', 'rooftop_12', 'rooftop_23', 'lawn_12', 'lawn_23', 'lawn_34', 'wide_45'):
        c = C[k]; pair_figure(c['im1'], c['im2'], c['im1_pts'], c['im2_pts'], M / 'corr' / f'{k}.jpg')
    for name, v in Rq.items():                                        # A.3 inputs + zooms
        im = Image.open(ROOT / 'data' / v['file']).convert('RGB'); s = 1400 / max(im.size)
        im = im.resize((int(im.width * s), int(im.height * s)), Image.LANCZOS)
        dots(im, v['corners'], s, close=True).save(M / 'rect' / f'{name}_input.jpg', quality=90)
        nn, bl = M / 'rect' / f'{name}_nearest.jpg', M / 'rect' / f'{name}_bilinear.jpg'
        w, h = Image.open(nn).size
        box = {'windows': (int(0.30 * w), int(0.28 * h), int(0.30 * w) + 120, int(0.28 * h) + 90),
               'marquee': (int(0.20 * w), int(0.18 * h), int(0.20 * w) + 140, int(0.18 * h) + 90)}.get(
              name, (int(0.55 * w), int(0.20 * h), int(0.55 * w) + 110, int(0.20 * h) + 140))
        zoom(nn, box, M / 'rect' / f'{name}_zoom_nearest.jpg'); zoom(bl, box, M / 'rect' / f'{name}_zoom_bilinear.jpg')
    for name in ('theatre', 'rooftop', 'lawn', 'street', 'goldengate', 'wide') + ROUND2_PLANAR + ROUND2_PANO:   # one strip per set
        strip(sorted((ROOT / 'data').glob(f'{name}_*.jpg'), key=lambda p: int(p.stem.split('_')[-1])), M / 'sources' / f'strip_{name}.jpg')
    for name in ROUND2_PLANAR:
        web(M / 'mosaic' / name / 'twolevel.jpg', M / 'mosaic' / name / 'web_twolevel.jpg', side=2200)
    c = C['oldA_23']; pair_figure(c['im1'], c['im2'], c['im1_pts'], c['im2_pts'], M / 'corr' / 'oldA_23.jpg')
    for name in ('theatre', 'rooftop', 'lawn', 'street', 'goldengate'):  # A.4 web copies
        d = M / 'mosaic' / name
        for m in ('overwrite', 'feather', 'twolevel'):
            if (d / f'{m}.jpg').exists():
                web(d / f'{m}.jpg', d / f'web_{m}.jpg', side=2200)
    warped_layers('theatre')
    box, v = busiest_window(M / 'mosaic/lawn/web_feather.jpg', M / 'mosaic/lawn/web_twolevel.jpg', 220)
    for m in ('overwrite', 'feather', 'twolevel'):
        zoom(M / f'mosaic/lawn/web_{m}.jpg', box, M / f'mosaic/lawn/ghost_{m}.jpg', up=2)
    out['ghost_box_lawn'] = dict(box=box, mean_diff=v)
    W, H = Image.open(M / 'mosaic/theatre/web_overwrite.jpg').size  # seam crops (pavement + mural)
    tb = (int(0.15 * W), int(0.62 * H), int(0.85 * W), int(0.92 * H))
    for m in ('overwrite', 'feather', 'twolevel'):
        Image.open(M / f'mosaic/theatre/web_{m}.jpg').crop(tb).save(M / f'mosaic/theatre/seam_{m}.jpg', quality=90)
    for n in ('cylinder_final', 'sphere_final', 'cylinder_twolevel', 'cylinder_unlevelled', 'planar_middle7'):
        web(M / 'wide' / f'{n}.jpg', M / 'wide' / f'web_{n}.jpg', side=2600)
    json.dump(out, open(ROOT / 'tests/run/figures.json', 'w'), indent=1)
    print('figures done')


if __name__ == '__main__':
    main()
