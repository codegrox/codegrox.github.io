"""B.5: recognize panoramas in the whole photo pile, shuffled, then stitch each one."""
import sys, json, time, hashlib, re
from pathlib import Path
import numpy as np
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from features import features
from recognize import pairwise, components, spanning_tree, bundle_rotations
from cylinder import intrinsics, build_surface, straighten, largest_full_box
M = ROOT / 'media/recog'


def pool():
    """Every stored photo once (some sets share frames, e.g. theatre and theatre7),
    shuffled so the order carries no information. Labels are kept only to score."""
    seen, items = {}, []
    for p in sorted((ROOT / 'data').glob('*.jpg')):
        h = hashlib.md5(p.read_bytes()).hexdigest()
        label = re.sub(r'_\d+$', '', p.stem)
        if h in seen:
            items[seen[h]]['labels'].add(label); items[seen[h]]['aliases'].append(p.name); continue
        seen[h] = len(items); items.append(dict(file=p.name, labels={label}, aliases=[p.name]))
    order = np.random.default_rng(7).permutation(len(items))
    return [items[i] for i in order], len(seen), sum(len(v['aliases']) for v in items)


def thumbs(files, dst, h=150, per_row=12, gap=4):
    ims = []
    for f in files:
        im = Image.open(ROOT / 'data' / f).convert('RGB'); s = h / im.height
        ims.append(im.resize((int(im.width * s), h), Image.LANCZOS))
    rows = [ims[i:i + per_row] for i in range(0, len(ims), per_row)]
    W = max(sum(i.width for i in r) + gap * (len(r) - 1) for r in rows)
    c = Image.new('RGB', (W, len(rows) * (h + gap) - gap), (16, 18, 24))
    for k, r in enumerate(rows):
        x = 0
        for i in r:
            c.paste(i, (x, k * (h + gap))); x += i.width + gap
    c.save(dst, quality=86)


def main():
    M.mkdir(parents=True, exist_ok=True)
    items, n_unique, n_files = pool()
    files = [it['file'] for it in items]
    thumbs(files, M / 'pool.jpg', h=120, per_row=14)
    t = time.perf_counter()
    F = []
    for f in files:                                    # one photo in memory at a time
        Fi = features(load(ROOT / 'data' / f)); Fi.pop('gray'); F.append(Fi)
    t_feat = time.perf_counter() - t
    shape = {i: Image.open(ROOT / 'data' / f).size[::-1] + (3,) for i, f in enumerate(files)}
    Ks = [intrinsics(shape[i], 24.0) for i in range(len(files))]
    t = time.perf_counter(); edges, log = pairwise(F, Ks); t_pair = time.perf_counter() - t
    inlier_ok = [l for l in log if l[4]]
    geo_rejected = [l for l in inlier_ok if l[5] >= 1.5]
    dev_kept = [l[5] for l in inlier_ok if l[5] < 1.5]
    groups = components(len(files), edges)
    pans = [g for g in groups if len(g) >= 2]; singles = [g[0] for g in groups if len(g) == 1]
    # score against the true sets: a pair of photos "belongs together" if they share a set label
    same_true = lambda i, j: bool(items[i]['labels'] & items[j]['labels'])
    comp = {i: k for k, g in enumerate(groups) for i in g}
    tp = fp = fn = 0
    for i in range(len(files)):
        for j in range(i + 1, len(files)):
            pred, true = comp[i] == comp[j], same_true(i, j)
            tp += pred and true; fp += pred and not true; fn += (not pred) and true
    out = dict(n_files=n_files, n_unique=n_unique, n_pairs=len(log), n_accepted=len(edges), t_features=t_feat, t_pairwise=t_pair,
               n_inlier_test=len(inlier_ok), n_geo_rejected=len(geo_rejected), rot_dev_kept_max=float(max(dev_kept)),
               geo_rejected=[dict(a=files[l[0]], b=files[l[1]], inliers=l[3], rot_dev=l[5]) for l in geo_rejected],
               pair_precision=tp / max(tp + fp, 1), pair_recall=tp / max(tp + fn, 1), panoramas=[],
               singles=[dict(file=files[i], labels=sorted(items[i]['labels'])) for i in singles])
    print(f'{n_files} files -> {n_unique} unique photos | {len(log)} pairs, {len(edges)} accepted | features {t_feat:.0f}s, pairs {t_pair:.0f}s')
    print(f'{len(pans)} panoramas, {len(singles)} single photos | pair precision {out["pair_precision"]:.3f}, recall {out["pair_recall"]:.3f}')
    for k, g in enumerate(pans):
        names = [files[i] for i in g]; labels = sorted(set().union(*(items[i]['labels'] for i in g)))
        thumbs(names, M / f'members_{k + 1}.jpg', h=140, per_row=12)
        ref, H_to_ref = spanning_tree(g, edges)
        info = dict(members=names, labels=labels, reference=files[ref], n=len(g))
        shapes = {shape[i] for i in g}
        if len(shapes) == 1:
            K = intrinsics(shape[g[0]], 24.0)
            Rs, Kf, res = bundle_rotations(g, ref, H_to_ref, edges, K)
            Rl = [Rs[i] for i in g]
            z = np.array([R[:, 2] for R in Rl]); yaw = np.degrees(np.arctan2(z[:, 0], z[:, 2])); pitch = np.degrees(np.arcsin(np.clip(z[:, 1], -1, 1)))
            if np.ptp(yaw) > 30 and np.ptp(yaw) > 2 * np.ptp(pitch):
                Rl, tilt = straighten(Rl); info['straightened_deg'] = tilt
            r = build_surface([load(ROOT / 'data' / files[i]) for i in g], Rl, Kf, 'cylinder', max_pixels=8e6)
            y0, y1, x0, x1 = largest_full_box(r['alpha'][::4, ::4] > 0.99)
            crop = r['twolevel'][y0 * 4 + 4:y1 * 4 - 4, x0 * 4 + 4:x1 * 4 - 4]
            use = crop if crop.size and min(crop.shape[:2]) > 0.25 * min(r['twolevel'].shape[:2]) else r['twolevel']
            save(use, M / f'pano_{k + 1}.jpg', quality=90, max_side=2600)
            span, was_cropped = r['span_deg'], use is crop
            del r, crop, use
            info.update(bundle_resid_median_px=res, focal_ratio=float(Kf[0, 0] / K[0, 0]), span_deg=span,
                        yaw_range_deg=float(np.ptp(yaw)), pitch_range_deg=float(np.ptp(pitch)), cropped=was_cropped)
        out['panoramas'].append(info)
        print(f"  #{k + 1}: {len(g)} photos {labels} | bundle {info.get('bundle_resid_median_px', float('nan')):.2f}px | span {info.get('span_deg', 0):.0f} deg")
    print('single photos:', [s['file'] for s in out['singles']])
    json.dump(out, open(ROOT / 'tests/run/recognize.json', 'w'), indent=1)


if __name__ == '__main__':
    main()
