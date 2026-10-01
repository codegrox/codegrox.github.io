"""Runs every experiment for Project 2 and writes the webpage figures.

    python code/main.py                     # all stages
    python code/main.py --stage 1.1 2.2     # just these
    python code/main.py --resume            # skip stages already in out/results.json
    python code/main.py --bundle            # zip media/ + results for review
    python code/main.py --out tests/run     # keep results/logs somewhere other than out/

Figures go to media/, measured numbers to out/results.json (written after every
stage, so an interrupted run keeps finished work).
"""
import argparse
import json
import sys
import time
import traceback
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import part1
import part2
from imutils import Results

ROOT = Path(__file__).resolve().parents[1]

STAGES = {
    '1.1': ('convolution from scratch', part1.stage_conv),
    '1.2': ('finite difference edges', part1.stage_finite_difference),
    '1.3': ('derivative of Gaussian', part1.stage_dog),
    '1.bw': ('gradient orientation (B&W)', part1.stage_orientation),
    '2.1': ('unsharp masking', part2.stage_sharpen),
    '2.2': ('hybrid images', part2.stage_hybrid),
    '2.2.bw': ('hybrid color study (B&W)', part2.stage_hybrid_color),
    '2.3': ('Gaussian/Laplacian stacks', part2.stage_stacks),
    '2.4': ('multiresolution blending', part2.stage_blend),
    '2.4.bw': ('blend color/depth study (B&W)', part2.stage_blend_color),
}


def bundle(root, out_dir, side=900, quality=80):
    """One small zip with everything needed to write the webpage. Images are stored
    as reduced JPEG review copies (media/ itself is untouched)."""
    import io
    from PIL import Image
    out = out_dir / 'review_bundle.zip'
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
        for p in sorted((root / 'media').rglob('*')):
            if not p.is_file():
                continue
            im = Image.open(p)
            if im.mode in ('RGBA', 'LA'):                   # flatten transparent figures on gray
                bg = Image.new('RGB', im.size, (128, 128, 128))
                bg.paste(im, mask=im.getchannel('A'))
                im = bg
            im = im.convert('RGB')
            im.thumbnail((side, side), Image.LANCZOS)
            buf = io.BytesIO()
            im.save(buf, 'JPEG', quality=quality)
            z.writestr(str(p.relative_to(root).with_suffix('.jpg')), buf.getvalue())
        for p in [root / 'config.json', out_dir / 'results.json', out_dir / 'run_log.txt',
                  *sorted((root / 'points').glob('*'))]:
            if p.exists():
                z.write(p, p.relative_to(root))
    print(f'wrote {out}  ({out.stat().st_size / 1e6:.1f} MB)  <- upload this file in chat')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--stage', nargs='*', default=None, help=f'any of: {" ".join(STAGES)}')
    ap.add_argument('--resume', action='store_true', help='skip stages already recorded')
    ap.add_argument('--config', default='config.json')
    ap.add_argument('--bundle', action='store_true')
    ap.add_argument('--out', default='out', help='where results.json and run_log.txt go')
    args = ap.parse_args()
    out_dir = ROOT / args.out

    if args.bundle:
        bundle(ROOT, out_dir)
        return

    cfg = json.loads((ROOT / args.config).read_text())
    R = Results(out_dir / 'results.json')
    media = ROOT / 'media'
    todo = args.stage or list(STAGES)
    unknown = [s for s in todo if s not in STAGES]
    if unknown:
        raise SystemExit(f'unknown stage(s) {unknown}; choose from {list(STAGES)}')

    log = open(out_dir / 'run_log.txt', 'a')
    failed = []
    for key in todo:
        title, fn = STAGES[key]
        if args.resume and R.done(key):
            print(f'[{key}] {title}: already done, skipping')
            continue
        print(f'[{key}] {title}')
        t0 = time.perf_counter()
        try:
            fn(cfg, R, ROOT, media)
            msg = f'[{key}] ok in {time.perf_counter() - t0:.1f}s'
        except FileNotFoundError as e:
            msg = f'[{key}] SKIPPED: {e}'
            failed.append(key)
        except Exception:
            msg = f'[{key}] FAILED\n{traceback.format_exc()}'
            failed.append(key)
        print(msg)
        log.write(time.strftime('%Y-%m-%d %H:%M:%S ') + msg + '\n')
        log.flush()
    log.close()
    waiting = [k for k in todo if k in R.data and R.data[k].get('_missing')]
    if failed or waiting:
        if failed:
            print(f'\nnot finished: {" ".join(failed)}')
        if waiting:
            print(f'waiting on your images: {" ".join(waiting)}')
        print('add the files, then rerun: python code/main.py --resume')
    else:
        print('\nall requested stages finished. next: python code/main.py --bundle')


if __name__ == '__main__':
    main()
