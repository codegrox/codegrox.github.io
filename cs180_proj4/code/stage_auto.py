"""B.4: automatic mosaics. Every neighbour homography comes from Harris + ANMS +
descriptors + ratio matching + RANSAC (no hand-placed points); the mosaic itself
reuses the Part A pipeline. The manual homographies are used only to measure."""
import sys, json, time
from pathlib import Path
import numpy as np
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from homography import computeH, apply
from mosaic import chain_to_reference, build_planar
from features import features, auto_homography

C = json.load(open(ROOT / 'points/correspondences.json'))


def corner_gap(Ha, Hm, shape):
    h, w = shape[:2]
    c = np.array([[0, 0], [w - 1, 0], [w - 1, h - 1], [0, h - 1]], float)
    return float(np.linalg.norm(apply(Ha, c) - apply(Hm, c), axis=1).max())


def run(name, keep_figures=True):
    keys = sorted(k for k in C if k.startswith(name + '_'))
    files = [C[keys[0]]['im1']] + [C[k]['im2'] for k in keys]
    ims = [load(ROOT / 'data' / f) for f in files]
    t0 = time.perf_counter(); F = [features(im) for im in ims]; tf = time.perf_counter() - t0
    pair_H, stats = [], []
    for i, k in enumerate(keys):
        R = auto_homography(F[i], F[i + 1])
        c = C[k]; Hm = computeH(c['im1_pts'], c['im2_pts'])
        res = np.linalg.norm(apply(R['H'], c['im1_pts']) - np.array(c['im2_pts']), axis=1)
        pair_H.append(R['H'])
        stats.append(dict(pair=k, harris=len(F[i]['all_xy']), anms=len(F[i]['xy']), matches=int(R['n_matches']),
                          inliers=int(R['inliers'].sum()), manual_pts_resid_median=float(np.median(res)),
                          manual_pts_resid_max=float(res.max()), corner_gap_px=corner_gap(R['H'], Hm, ims[i].shape)))
        if keep_figures:
            np.savez_compressed(ROOT / f'tests/run/auto/{k}.npz', all1=F[i]['all_xy'], anms1=F[i]['xy'], radius1=F[i]['radius'],
                                desc1=F[i]['desc'], p1=R['p1'], p2=R['p2'], inl=R['inliers'], H=R['H'])
    Hs = chain_to_reference(pair_H, len(ims) // 2)
    t1 = time.perf_counter(); r = build_planar(ims, Hs); tm = time.perf_counter() - t1
    save(r['twolevel'], ROOT / f'media/auto/{name}/twolevel.jpg', quality=92)
    save(r['twolevel'], ROOT / f'media/auto/{name}/web_twolevel.jpg', quality=90, max_side=2200)
    for s in stats:
        print(f"{s['pair']:11s} harris {s['harris']} -> anms {s['anms']} | matches {s['matches']:3d} -> inliers {s['inliers']:3d} | "
              f"manual points through auto H: {s['manual_pts_resid_median']:.2f}/{s['manual_pts_resid_max']:.2f}px | corners within {s['corner_gap_px']:.1f}px")
    M = json.load(open(ROOT / 'tests/run/mosaics.json'))[name]
    auto_d, man_d = np.mean(list(r['overlap_diff_after'].values())), np.mean(list(M['overlap_diff_after'].values()))
    print(f"overlap difference after gains: manual {man_d:.4f}, automatic {auto_d:.4f}")
    return dict(files=files, pairs=stats, features_s=tf, mosaic_s=tm, canvas=r['canvas'],
                overlap_diff_auto=float(auto_d), overlap_diff_manual=float(man_d))


if __name__ == '__main__':
    (ROOT / 'tests/run/auto').mkdir(parents=True, exist_ok=True)
    p = ROOT / 'tests/run/auto.json'
    out = json.load(open(p)) if p.exists() else {}
    for n in sys.argv[1:] or ['theatre', 'rooftop', 'lawn', 'street']:
        print('==', n); out[n] = run(n)
        json.dump(out, open(p, 'w'), indent=1)
