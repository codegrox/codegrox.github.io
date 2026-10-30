"""Add the remaining usable photo sets (round 2): copy each photo into data/ at
2048 px (JPEG q95, EXIF kept) and rescale its proposed correspondences to match.
Points were proposed by tests/autocorr.py on the full-resolution originals."""
import json, sys
from pathlib import Path
import numpy as np
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]
RAW = Path(sys.argv[1] if len(sys.argv) > 1 else '/home/claude/p4/raw/Camera')
SCORES = Path(sys.argv[2] if len(sys.argv) > 2 else '/home/claude/p4/corr/extra_scores.json')
SIDE = 2048


def store(src, dst):
    im = Image.open(RAW / src); exif = im.info.get('exif'); W, H = im.size
    im = im.convert('RGB'); im.thumbnail((SIDE, SIDE), Image.LANCZOS)
    im.save(ROOT / 'data' / dst, quality=95, **({'exif': exif} if exif else {}))
    return np.array([im.size[0] / W, im.size[1] / H])


def main():
    S = json.load(open(SCORES))
    C = json.load(open(ROOT / 'points/correspondences.json'))
    for name, v in S.items():
        scale = {}
        for i, f in enumerate(v['files'], 1):
            scale[f] = store(f, f'{name}_{i}.jpg')
        for k, p in enumerate(v['pairs'], 1):
            C[f'{name}_{k}{k + 1}'] = {
                'im1': f'{name}_{k}.jpg', 'im2': f'{name}_{k + 1}.jpg',
                'im1_pts': (np.array(p['im1_pts']) * scale[p['im1']]).round(2).tolist(),
                'im2_pts': (np.array(p['im2_pts']) * scale[p['im2']]).round(2).tolist(),
                'source': p['im1'] + ' | ' + p['im2']}
        print(f"{name:9s} {len(v['files'])} photos, {len(v['pairs'])} pairs")
    json.dump(C, open(ROOT / 'points/correspondences.json', 'w'), indent=1)


if __name__ == '__main__':
    main()
