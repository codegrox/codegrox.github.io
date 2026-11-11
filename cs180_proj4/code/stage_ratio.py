"""B.3 threshold study (our version of MOPS Figure 6b): label every 1-NN match as
correct or wrong using the hand-placed Part A homographies as ground truth, and
measure how the 1-NN/2-NN ratio separates the two."""
import sys, json
from pathlib import Path
import numpy as np
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load
from homography import computeH, apply
from features import features, match

PAIRS = ['theatre_12', 'theatre_23', 'rooftop_12', 'rooftop_23', 'lawn_12', 'lawn_23', 'lawn_34', 'street_12', 'street_23']


def main(tol=5.0):
    C = json.load(open(ROOT / 'points/correspondences.json'))
    cache, ok_r, bad_r = {}, [], []
    for k in PAIRS:
        c = C[k]
        for f in (c['im1'], c['im2']):
            if f not in cache:
                cache[f] = features(load(ROOT / 'data' / f))
        F1, F2 = cache[c['im1']], cache[c['im2']]
        Hm = computeH(c['im1_pts'], c['im2_pts'])
        _, _, r_all, nn = match(F1['desc'], F2['desc'], ratio=1.0)
        err = np.linalg.norm(apply(Hm, F1['xy']) - F2['xy'][nn], axis=1)
        ok_r += r_all[err < tol].tolist(); bad_r += r_all[err >= tol].tolist()
    ok_r, bad_r = np.array(ok_r), np.array(bad_r)
    rows = []
    for t in np.arange(0.3, 0.95, 0.05):
        tp, fp = (ok_r < t).sum(), (bad_r < t).sum()
        rows.append(dict(t=round(float(t), 2), correct=int(tp), wrong=int(fp), precision=float(tp / max(tp + fp, 1)), recall=float(tp / len(ok_r))))
    bins = np.linspace(0, 1, 41)
    out = dict(tol_px=tol, n_correct=len(ok_r), n_wrong=len(bad_r), table=rows,
               hist_bins=bins.tolist(), hist_correct=np.histogram(ok_r, bins)[0].tolist(), hist_wrong=np.histogram(bad_r, bins)[0].tolist())
    json.dump(out, open(ROOT / 'tests/run/ratio.json', 'w'), indent=1)
    for r in rows:
        print(f"ratio < {r['t']:.2f}: {r['correct']:4d} correct, {r['wrong']:4d} wrong  precision {r['precision']:.2f}  recall {r['recall']:.2f}")


if __name__ == '__main__':
    main()
