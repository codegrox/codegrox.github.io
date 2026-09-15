import argparse
import csv
import time
from pathlib import Path

import numpy as np
import skimage.io as skio
from PIL import Image

import align


EXTS = {'.jpg', '.jpeg', '.tif', '.tiff', '.png'}


def image_files(folder):
    folder = Path(folder)
    if not folder.exists():
        return []
    return sorted([p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in EXTS])


def save_result(rgb, out_dir, stage, name):
    arr = (np.clip(rgb, 0, 1) * 255).astype(np.uint8)
    im = Image.fromarray(arr)

    full_dir = Path(out_dir) / stage
    full_dir.mkdir(parents=True, exist_ok=True)
    im.save(full_dir / f'{name}.jpg', quality=95)

    web_dir = Path(out_dir) / 'web' / stage
    web_dir.mkdir(parents=True, exist_ok=True)
    web = im.copy()
    web.thumbnail((1600, 1600), Image.LANCZOS)
    web.save(web_dir / f'{name}.jpg', quality=88)


def run_one(path, stage, out_dir, method='pyramid', metric='ncc', feature='raw'):
    plate = align.to_float(skio.imread(path))
    start = time.perf_counter()
    rgb, g_off, r_off = align.colorize(plate, method, metric, feature)
    elapsed = time.perf_counter() - start
    save_result(rgb, out_dir, stage, Path(path).stem)
    print(f'{Path(path).name:28s}  G {g_off!s:12s}  R {r_off!s:12s}  {elapsed:.2f}s')
    return {
        'stage': stage,
        'image': Path(path).stem,
        'g': g_off,
        'r': r_off,
        'time': elapsed,
    }


def write_results(rows, out_dir):
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    with open(out_dir / 'results.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['stage', 'image', 'g_x', 'g_y', 'r_x', 'r_y', 'seconds'])
        for row in rows:
            w.writerow([
                row['stage'], row['image'],
                row['g'][0], row['g'][1],
                row['r'][0], row['r'][1],
                f"{row['time']:.3f}",
            ])

    groups = {}
    for row in rows:
        groups.setdefault(row['stage'], []).append(row)

    lines = []
    for stage, stage_rows in groups.items():
        lines.append(f'## {stage}')
        lines.append('')
        lines.append('| image | G (x, y) | R (x, y) | time |')
        lines.append('|---|---|---|---|')
        for row in stage_rows:
            lines.append(
                f"| {row['image']} | {row['g']} | {row['r']} | {row['time']:.2f}s |"
            )
        lines.append('')

    (out_dir / 'results.md').write_text('\n'.join(lines), encoding='utf-8')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--data', required=True, help='folder containing the provided plates')
    parser.add_argument('--extra', help='folder containing my extra Prokudin-Gorskii plates')
    parser.add_argument('--out', default='out')
    parser.add_argument('--no-l2', action='store_true', help='skip full pyramid L2 comparison')
    parser.add_argument('--no-gradient', action='store_true', help='skip gradient-feature comparison')
    args = parser.parse_args()

    course = image_files(args.data)
    extra = image_files(args.extra) if args.extra else []
    small = [p for p in course if p.suffix.lower() in {'.jpg', '.jpeg'}]

    print(f'{len(course)} course plates, {len(extra)} extra plates')
    rows = []

    print('\nSingle-scale NCC')
    for p in small:
        rows.append(run_one(p, 'single_ncc', args.out, method='single', metric='ncc'))

    print('\nSingle-scale L2')
    for p in small:
        rows.append(run_one(p, 'single_l2', args.out, method='single', metric='l2'))

    print('\nPyramid NCC')
    for p in course:
        rows.append(run_one(p, 'ncc', args.out, metric='ncc'))

    if extra:
        print('\nExtra images')
        for p in extra:
            rows.append(run_one(p, 'extra', args.out, metric='ncc'))

    if not args.no_l2:
        print('\nPyramid L2')
        for p in course + extra:
            rows.append(run_one(p, 'l2', args.out, metric='l2'))

    if not args.no_gradient:
        print('\nGradient NCC')
        for p in course + extra:
            rows.append(run_one(p, 'bells_grad', args.out, metric='ncc', feature='grad'))

    write_results(rows, args.out)
    print(f'\nDone. Results are in {args.out}')


if __name__ == '__main__':
    main()
