"""Irregular blend masks traced by hand (read off grid overlays), written in the
format code/make_mask.py produces: polygon vertices as fractions of (w, h) of the
blend canvas. Saves a mask-overlay preview of every blend to tests/previews/.

    python tests/make_masks.py
"""
import json
import sys
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'code'))

from imutils import save, montage, resize          # noqa: E402
from stacks import prepare_pair                    # noqa: E402

POLYGONS = {
    # keep ground, smoke, launch tower, plume column and rocket; the rest becomes space
    'rocket_space_mask': [
        [0, 1], [0, .54], [.05, .525], [.10, .52], [.15, .515], [.20, .50], [.24, .475],
        [.265, .44], [.275, .36], [.287, .27], [.297, .20], [.300, .13], [.307, .105],
        [.314, .13], [.318, .20], [.326, .27], [.338, .36], [.352, .40], [.358, .35],
        [.368, .35], [.372, .45], [.39, .53], [.44, .55], [.455, .51], [.47, .55],
        [.53, .56], [.56, .50], [.59, .445], [.65, .44], [.72, .455], [.80, .45],
        [.88, .46], [.94, .49], [.98, .54], [1, .56], [1, 1]],
    # the water surface of the puddle (slightly inside the wet edge)
    'puddle_portal_mask': [
        [.535, .725], [.581, .715], [.656, .712], [.731, .719], [.773, .733], [.816, .752],
        [.855, .789], [.874, .835], [.869, .877], [.834, .900], [.763, .896], [.700, .886],
        [.658, .867], [.622, .842], [.596, .806], [.565, .766]],
    # mustache, lips and beard, drawn on the bin Laden photo (warped with it)
    'newsom_beard_mask': [
        [.445, .300], [.462, .298], [.489, .305], [.509, .307], [.529, .305], [.565, .297],
        [.590, .300], [.595, .325], [.588, .360], [.572, .400], [.548, .438], [.517, .458],
        [.490, .446], [.462, .416], [.442, .372], [.436, .330]],
}


def main():
    for name, pts in POLYGONS.items():
        (ROOT / 'points' / f'{name}.json').write_text(json.dumps({'points': pts}) + '\n')
    cfg = json.loads((ROOT / 'config.json').read_text())
    tiles = []
    for e in cfg['blends']:
        a, b, m = prepare_pair(e, ROOT, cfg.get('blend_max_side', 800))
        m3 = m[..., None]
        prev = m3 * a + (1 - m3) * (0.35 * b)            # region from a, dimmed b around it
        save(prev, ROOT / 'tests' / 'previews' / f'mask_{e["name"]}.jpg', max_side=700)
        tiles.append(resize(prev, (300, int(300 * prev.shape[1] / prev.shape[0]))))
        print(f'{e["name"]:16s} canvas {a.shape[1]}x{a.shape[0]}  mask covers {m.mean():.1%}')
    save(montage(tiles, len(tiles), gap=8)[..., :3], ROOT / 'tests' / 'previews' / 'mask_all.jpg')


if __name__ == '__main__':
    main()
