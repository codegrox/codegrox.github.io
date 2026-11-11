"""Part B figures: corners with/without ANMS, descriptors, matches, RANSAC inliers,
the ratio-threshold study, and web copies of the automatic mosaics."""
import sys, json
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from stage_figures import font, YELLOW, RING
M = ROOT / 'media/b'
C = json.load(open(ROOT / 'points/correspondences.json'))


def load_pair(k):
    z = np.load(ROOT / f'tests/run/auto/{k}.npz')
    return {n: z[n] for n in z.files}


def photo(f, height):
    im = Image.open(ROOT / 'data' / f).convert('RGB'); s = height / im.height
    return im.resize((int(im.width * s), height), Image.LANCZOS), s


def corners(k, height=900):
    z = load_pair(k); f = C[k]['im1']
    for name, pts, r in (('harris', z['all1'], 2), ('anms', z['anms1'], 4)):
        im, s = photo(f, height); d = ImageDraw.Draw(im)
        for x, y in pts * s:
            d.ellipse((x - r - 1, y - r - 1, x + r + 1, y + r + 1), fill=RING)
            d.ellipse((x - r, y - r, x + r, y + r), fill=YELLOW)
        im.save(M / f'corners_{name}.jpg', quality=88)


def pair_canvas(k, height=700, gap=16):
    a, sa = photo(C[k]['im1'], height); b, sb = photo(C[k]['im2'], height)
    c = Image.new('RGB', (a.width + b.width + gap, height), (16, 18, 24))
    c.paste(a, (0, 0)); c.paste(b, (a.width + gap, 0))
    return c, sa, sb, a.width + gap


def matches(k):
    z = load_pair(k)
    for name, sel in (('matches', None), ('ransac', z['inl'])):
        c, sa, sb, ox = pair_canvas(k); d = ImageDraw.Draw(c)
        for i, ((x1, y1), (x2, y2)) in enumerate(zip(z['p1'], z['p2'])):
            if sel is None:
                col = (247, 201, 72)
            else:
                col = (90, 200, 120) if sel[i] else (235, 80, 80)
            d.line([(x1 * sa, y1 * sa), (x2 * sb + ox, y2 * sb)], fill=col, width=2)
            for x, y in ((x1 * sa, y1 * sa), (x2 * sb + ox, y2 * sb)):
                d.ellipse((x - 3, y - 3, x + 3, y + 3), fill=col)
        c.save(M / f'{name}_{k}.jpg', quality=88)


def descriptor_grid(k, n=8, tile=140, gap=10):
    """Top: the 40x40 window (at the detection scale) around each feature.
    Bottom: its normalized 8x8 descriptor, enlarged without smoothing."""
    z = load_pair(k); im = Image.open(ROOT / 'data' / C[k]['im1']).convert('RGB')
    order = np.argsort(-z['radius1'])
    idx = order[np.linspace(0, len(order) // 3, n).astype(int)]          # well-separated, strong features
    W = n * tile + (n - 1) * gap
    c = Image.new('RGB', (W, 2 * tile + gap + 28), (16, 18, 24)); d = ImageDraw.Draw(c); f = font(16)
    half = 40                                       # 40 px at half resolution = 80 stored px
    for j, i in enumerate(idx):
        x, y = z['anms1'][i]
        win = im.crop((int(x - half), int(y - half), int(x + half), int(y + half))).resize((tile, tile), Image.LANCZOS)
        p = z['desc1'][i].reshape(8, 8); p = (p - p.min()) / (p.max() - p.min() + 1e-8)
        desc = Image.fromarray((p * 255).astype(np.uint8)).resize((tile, tile), Image.NEAREST).convert('RGB')
        X = j * (tile + gap)
        c.paste(win, (X, 0)); c.paste(desc, (X, tile + gap))
        d.text((X + 4, 2 * tile + gap + 6), f'#{j + 1}', font=f, fill=(220, 220, 220))
    c.save(M / 'descriptors.png', optimize=True)


def ratio_chart():
    import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt
    R = json.load(open(ROOT / 'tests/run/ratio.json'))
    b = np.array(R['hist_bins']); mid = (b[:-1] + b[1:]) / 2; w = b[1] - b[0]
    fig, ax = plt.subplots(figsize=(8, 3.6), dpi=150)
    ax.bar(mid, R['hist_correct'], w * 0.95, color='#5ac878', label='correct match')
    ax.bar(mid, R['hist_wrong'], w * 0.95, bottom=R['hist_correct'], color='#eb5050', label='wrong match')
    ax.axvline(0.65, color='#f7c948', lw=2, ls='--'); ax.text(0.66, ax.get_ylim()[1] * 0.9, 'threshold 0.65', color='#f7c948')
    ax.set_xlabel('1-NN / 2-NN distance ratio'); ax.set_ylabel('features')
    for s in ax.spines.values(): s.set_color('#888')
    ax.tick_params(colors='#888'); ax.xaxis.label.set_color('#888'); ax.yaxis.label.set_color('#888')
    ax.legend(frameon=False, labelcolor='#888'); fig.tight_layout()
    fig.savefig(M / 'ratio_hist.png', transparent=True); plt.close(fig)


def main():
    M.mkdir(parents=True, exist_ok=True)
    corners('theatre_12'); descriptor_grid('theatre_12'); matches('theatre_12'); matches('lawn_23'); ratio_chart()
    print('part B figures done')


if __name__ == '__main__':
    main()
