"""Alignment points picked by hand (read off zoomed grid overlays), written to
points/*.json in the same format code/pick_points.py produces. Coordinates are
fractions of (width, height). Also saves a 50/50 overlay of every aligned pair
to tests/previews/ for checking.

    python tests/make_points.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'code'))

from imutils import load, save, montage          # noqa: E402
from hybrid import align_pair, load_points         # noqa: E402

M = 'data/mine/'
EYES = {
    'dafoe_calm': [[0.471, 0.229], [0.628, 0.236]],
    'dafoe_manic': [[0.465, 0.360], [0.561, 0.345]],
    'skull_human': [[0.365, 0.405], [0.630, 0.405]],
    'chimp': [[0.428, 0.441], [0.576, 0.441]],
    'skull_chimp': [[0.370, 0.381], [0.620, 0.381]],   # y rescaled for the 0.88 crop
}
# bears: between the eyes -> nose pad, and between the orbits -> nasal opening.
# A bear's orbits sit far out on the sides of the skull, so matching eyes to
# orbits would squash the snout; the vertical axis keeps the proportions.
AXIS = {
    'bear': [[0.500, 0.425], [0.490, 0.550]],
    'skull_bear': [[0.511, 0.346], [0.512, 0.510]],
}
MOUTH = {  # corners, for the mouth transplant blend
    'dafoe_manic_mouth': [[0.472, 0.484], [0.547, 0.468]],
    'dafoe_calm_mouth': [[0.467, 0.335], [0.616, 0.343]],
}
FACE_AXIS = {  # between the eyes -> mouth center, for the beard transplant
    'binladen_axis': [[0.509, 0.257], [0.510, 0.324]],
    'newsom_axis': [[0.531, 0.390], [0.533, 0.545]],
}
THREE = {  # 3-point (affine) sets: two eyes / eye sockets + one point on the mouth line
    'dafoe_calm3': [[0.471, 0.229], [0.628, 0.236], [0.5415, 0.339]],
    'dafoe_manic3': [[0.465, 0.360], [0.561, 0.345], [0.5095, 0.476]],
    'dafoe_snl3': [[0.469, 0.390], [0.594, 0.395], [0.508, 0.556]],
    'skull_human3': [[0.360, 0.390], [0.640, 0.390], [0.500, 0.735]],
    'chimp3': [[0.428, 0.441], [0.576, 0.441], [0.500, 0.745]],
    'skull_chimp3': [[0.375, 0.380], [0.625, 0.380], [0.500, 0.790]],
    # bear: fit the skull to the head, cheek to cheek, nose on the nasal opening
    'bear3': [[0.240, 0.470], [0.780, 0.470], [0.490, 0.555]],
    'skull_bear3': [[0.210, 0.430], [0.820, 0.430], [0.510, 0.505]],
    'binladen3': [[0.4741, 0.2609], [0.5433, 0.2532], [0.5103, 0.324]],
    'newsom3': [[0.4617, 0.3850], [0.5996, 0.3957], [0.533, 0.545]],
}
PTS = {**EYES, **AXIS, **MOUTH, **FACE_AXIS, **THREE}
FILE = {'dafoe_manic_mouth': 'dafoe_manic', 'dafoe_calm_mouth': 'dafoe_calm',
        'binladen_axis': 'binladen', 'newsom_axis': 'newsom'}

PAIRS = {  # name: (image 1 = warped one, image 2 = reference frame)
    'dafoe_skull': ('dafoe_calm3', 'skull_human3'),
    'dafoe_expr': ('dafoe_calm3', 'dafoe_manic3'),
    'dafoe_snl': ('dafoe_calm3', 'dafoe_snl3'),
    'chimp_skull': ('chimp3', 'skull_chimp3'),
    'bear_skull': ('bear3', 'skull_bear3'),
    'dafoe_mouth': ('dafoe_manic3', 'dafoe_calm3'),
    'newsom_beard': ('binladen3', 'newsom3'),
}


def main():
    tiles = []
    for name, (i1, i2) in PAIRS.items():
        out = ROOT / 'points' / f'{name}.json'
        f1, f2 = (FILE.get(k, k[:-1] if k.endswith('3') else k) for k in (i1, i2))
        out.write_text(json.dumps({'files': [M + f1 + '.jpg', M + f2 + '.jpg'],
                                   'im1': PTS[i1], 'im2': PTS[i2]}, indent=2) + '\n')
        a = load(ROOT / M / f'{f1}.jpg', max_side=1600)
        b = load(ROOT / M / f'{f2}.jpg', max_side=1600)
        a, b, info = align_pair(a, b, *load_points(out, a.shape, b.shape), max_upscale=1.5)
        prev = 0.5 * a + 0.5 * b
        save(prev, ROOT / 'tests' / 'previews' / f'align_{name}.jpg', max_side=700)
        tiles.append(load(ROOT / 'tests' / 'previews' / f'align_{name}.jpg', max_side=400))
        print(f'{name:12s} {info["method"][:6]} rot {info["rotation_deg"]:+5.1f}  scale {info["scale"]:.2f}  canvas {a.shape[1]}x{a.shape[0]}')
    h = min(t.shape[0] for t in tiles)
    from imutils import resize
    tiles = [resize(t, (h, int(t.shape[1] * h / t.shape[0]))) for t in tiles]
    save(montage(tiles, len(tiles), gap=8)[..., :3], ROOT / 'tests' / 'previews' / 'align_all.jpg')


if __name__ == '__main__':
    main()
