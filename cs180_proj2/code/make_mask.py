"""Draw an irregular blending mask for one of the blends in config.json.

    python code/make_mask.py eye_hand

Shows image a (the region you want to keep) with image b ghosted underneath,
on exactly the canvas main.py will use. Left-click to add polygon vertices,
right-click (or Backspace) to undo the last one, Enter to finish. Saves
points/<name>_mask.json plus a preview, and prints the config line to use.
"""
import argparse
import json
from pathlib import Path

import numpy as np
import matplotlib.pyplot as plt

from imutils import save
from stacks import prepare_pair, polygon_mask

ROOT = Path(__file__).resolve().parents[1]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('name', help='blend name from config.json')
    ap.add_argument('--ghost', type=float, default=0.35, help='opacity of image b')
    args = ap.parse_args()

    cfg = json.loads((ROOT / 'config.json').read_text())
    entry = next((e for e in cfg['blends'] if e['name'] == args.name), None)
    if entry is None:
        raise SystemExit(f'no blend named {args.name!r} in config.json')
    a, b, _ = prepare_pair(entry, ROOT, cfg.get('blend_max_side', 800))

    fig, ax = plt.subplots(figsize=(9, 9 * a.shape[0] / a.shape[1]))
    ax.imshow((1 - args.ghost) * a + args.ghost * b)
    ax.set_title('click polygon around the part of image a to keep; Enter to finish')
    ax.axis('off')
    pts = plt.ginput(-1, timeout=0)
    plt.close(fig)
    if len(pts) < 3:
        raise SystemExit('need at least 3 points')

    h, w = a.shape[:2]
    out = ROOT / 'points' / f'{args.name}_mask.json'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({'points': [[x / w, y / h] for x, y in pts]}, indent=2))
    m = polygon_mask(pts, (h, w))[..., None]
    save(m * a + (1 - m) * b, out.with_suffix('.preview.jpg'), max_side=900)
    print(f'saved {out}')
    print(f'config: "mask": {{"type": "polygon", "points": "points/{out.name}"}}')


if __name__ == '__main__':
    main()
