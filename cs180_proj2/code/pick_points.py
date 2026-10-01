"""Click two corresponding points on each image and save them for main.py.

    python code/pick_points.py data/mine/me_smile.jpg data/mine/me_serious.jpg points/me.json

Click the same two features, in the same order, on both images (for faces: left
eye then right eye). A preview of the aligned overlay is saved next to the JSON
so you can check it before running the pipeline. Points are stored as fractions
of the image width/height, so they stay valid if the pipeline resizes images.
"""
import argparse
import json
from pathlib import Path

import numpy as np
import matplotlib.pyplot as plt

from imutils import load, save
from hybrid import align_pair, load_points


def click(im, title, n=2):
    fig, ax = plt.subplots(figsize=(9, 9 * im.shape[0] / im.shape[1]))
    ax.imshow(im)
    ax.set_title(title)
    ax.axis('off')
    pts = plt.ginput(n, timeout=0)
    plt.close(fig)
    if len(pts) != n:
        raise SystemExit('cancelled: need exactly %d clicks' % n)
    return pts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('im1')
    ap.add_argument('im2')
    ap.add_argument('out_json')
    ap.add_argument('--max-side', type=int, default=2048)
    ap.add_argument('--n', type=int, default=2, choices=(2, 3), help='3 = affine (e.g. eyes + mouth)')
    args = ap.parse_args()

    im1 = load(args.im1, max_side=args.max_side)
    im2 = load(args.im2, max_side=args.max_side)
    p = click(im1, f'image 1: click {args.n} points (e.g. left eye, right eye' + (', mouth)' if args.n == 3 else ')'), args.n)
    q = click(im2, 'image 2: click the SAME features in the SAME order', args.n)

    def frac(pts, im):
        h, w = im.shape[:2]
        return [[x / w, y / h] for x, y in pts]

    out = Path(args.out_json)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({'files': [args.im1, args.im2],
                               'im1': frac(p, im1), 'im2': frac(q, im2)}, indent=2))
    print(f'saved {out}')

    a, b, info = align_pair(im1, im2, *load_points(out, im1.shape, im2.shape))
    preview = out.with_suffix('.preview.jpg')
    save(0.5 * a + 0.5 * b, preview, max_side=900)
    print(f'overlay preview: {preview}   (rotation {info["rotation_deg"]:.1f} deg)')


if __name__ == '__main__':
    main()
