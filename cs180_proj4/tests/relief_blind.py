"""Blind rectification of the angled relief photo (no reference used).

The relief has no rectangular border, but its wall does: the building's corner
edge and the doorway's left edge are vertical, the floor line and the doorway's
top edge are horizontal, all on the same plane. Three corners are physical points
(corner at the floor, doorway top-left, doorway bottom-left); the fourth is where
the corner edge meets the doorway's top edge extended. Aspect ratio from the EXIF
focal length, homography and warp from code/."""
import sys, json
from pathlib import Path
import numpy as np
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from homography import computeH, apply
from warp import warpImageBilinear, _bilinear

RAW = Path(sys.argv[1] if len(sys.argv) > 1 else '/home/claude/p4/raw/Camera')
SRC, REF = 'PXL_20261028_184314071.RAW-01.MP.jpg', 'PXL_20261028_184328876.RAW-01.jpg'
LINES = {  # full-resolution (3072 x 4080) points, read at 2x zoom
    'corner_edge': [[984, 859], [920, 3683]], 'doorway_top': [[2147, 2122], [2450, 2184]],
    'doorway_bottom_left': [2163, 3084]}


def store(src, dst, side=2048):
    im = Image.open(RAW / src); exif = im.info.get('exif'); W, H = im.size
    im = im.convert('RGB'); im.thumbnail((side, side), Image.LANCZOS)
    im.save(ROOT / 'data' / dst, quality=95, **({'exif': exif} if exif else {}))
    return im.size[0] / W


def intersect(p1, p2, p3, p4):
    d1, d2 = p2 - p1, p4 - p3
    t = np.linalg.solve(np.c_[d1, -d2], p3 - p1)
    return p1 + t[0] * d1


def aspect(q, f, cx, cy):
    """h/w of a planar rectangle from its corners and the focal length."""
    src = np.array([[0, 0], [1, 0], [1, 1], [0, 1]], float); M = []
    for (x, y), (u, v) in zip(src, q):
        M += [[x, y, 1, 0, 0, 0, -u * x, -u * y, -u], [0, 0, 0, x, y, 1, -v * x, -v * y, -v]]
    Hm = np.linalg.svd(np.array(M))[2][-1].reshape(3, 3)
    N = np.linalg.inv(np.array([[f, 0, cx], [0, f, cy], [0, 0, 1]])) @ Hm
    return np.linalg.norm(N[:, 1]) / np.linalg.norm(N[:, 0])


def main():
    s = store(SRC, 'relief_angled.jpg'); store(REF, 'relief_reference.jpg')
    A, B = map(np.array, LINES['corner_edge']); D1, D2 = map(np.array, LINES['doorway_top'])
    DBL = np.array(LINES['doorway_bottom_left'], float)
    q = np.array([intersect(A, B, D1, D2), D1, DBL, B], float) * s          # TL, TR, BR, BL
    im = load(ROOT / 'data/relief_angled.jpg'); h, w = im.shape[:2]
    f = 24 / 43.27 * np.hypot(w, h); a = aspect(q, f, w / 2, h / 2)
    Wout = 1500.0
    rect = np.array([[0, 0], [Wout, 0], [Wout, Wout * a], [0, Wout * a]])
    H = computeH(q, rect)
    box = (-int(0.06 * Wout), -int(0.9 * Wout * a), int(Wout * 1.24), int(Wout * a + 0.06 * Wout))
    out, al, _ = warpImageBilinear(im, H, box)
    save(out, ROOT / 'media/rect/relief_blind.jpg')
    # how much the angled photo squeezed the wall: source pixels per output pixel at the relief
    Hi = np.linalg.inv(H); c = np.array([0.30 * Wout, 0.25 * Wout * a])
    eps = 1.0
    J = np.stack([(apply(Hi, [c + [eps, 0]]) - apply(Hi, [c - [eps, 0]]))[0] / (2 * eps),
                  (apply(Hi, [c + [0, eps]]) - apply(Hi, [c - [0, eps]]))[0] / (2 * eps)], 1)
    sx, sy = np.linalg.norm(J[:, 0]), np.linalg.norm(J[:, 1])
    json.dump({'source': SRC, 'reference': REF, 'lines_full_res': LINES, 'corners_TL_TR_BR_BL': q.round(2).tolist(),
               'aspect_h_over_w': float(a)}, open(ROOT / 'points/relief.json', 'w'), indent=1)
    json.dump({'H': H.tolist(), 'box': box, 'aspect_h_over_w': float(a), 'out_size': [out.shape[1], out.shape[0]],
               'squeeze_x': float(sx), 'squeeze_y': float(sy)}, open(ROOT / 'tests/run/relief_blind.json', 'w'), indent=1)
    print(f'wall rectangle h/w = {a:.3f}; output {out.shape[1]}x{out.shape[0]}; source px per output px at the relief: x {sx:.2f}, y {sy:.2f}')


if __name__ == '__main__':
    main()
