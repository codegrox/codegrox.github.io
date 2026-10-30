"""Validate the blind relief rectification against the straight-on reference.

1. 8 rough landmark pairs (heads, hands, feet) seed a similarity between the
   blind result and the reference.
2. Strong corners on the reference relief are refined into correspondences by
   local NCC patch matching after that similarity (OpenCV used for measuring only).
3. The best similarity vs. the best homography on those points tells how much
   non-similar distortion (shear, anisotropic scale, perspective) the blind
   rectification left. A perfect rectification leaves only a similarity.
"""
import sys, json
from pathlib import Path
import numpy as np, cv2
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from imutils import load, save
from homography import computeH, apply, residuals
from warp import warpImageBilinear


def fit_similarity(p, q):
    """Least-squares x' = a x - b y + tx, y' = b x + a y + ty (rotation, uniform scale, shift)."""
    A, y = [], []
    for (x, yy), (u, v) in zip(p, q):
        A += [[x, -yy, 1, 0], [yy, x, 0, 1]]; y += [u, v]
    a, b, tx, ty = np.linalg.lstsq(np.array(A), np.array(y), rcond=None)[0]
    return np.array([[a, -b, tx], [b, a, ty], [0, 0, 1]])


def fit_affine(p, q):
    X = np.c_[p, np.ones(len(p))]
    sol = np.linalg.lstsq(X, q, rcond=None)[0]
    return np.vstack([sol.T, [0, 0, 1]])


def main():
    blind = load(ROOT / 'media/rect/relief_blind.jpg'); ref = load(ROOT / 'data/relief_reference.jpg')
    sb, sr, ox = 0.3417, 0.293, 677                  # display scales of the side-by-side used for seeding
    seed_b = np.array([[330, 115], [125, 220], [205, 440], [295, 483], [430, 440], [440, 235], [405, 180], [115, 265]]) / sb
    seed_r = (np.array([[940, 140], [775, 218], [835, 388], [905, 418], [1010, 385], [1020, 230], [995, 185], [765, 252]]) - [ox, 0]) / sr
    S0 = fit_similarity(seed_b, seed_r)
    onref, a, _ = warpImageBilinear(blind, S0, (0, 0, ref.shape[1] - 1, ref.shape[0] - 1))
    g1 = cv2.cvtColor((np.clip(onref, 0, 1) * 255).astype(np.uint8), cv2.COLOR_RGB2GRAY)
    g2 = cv2.cvtColor((ref * 255).astype(np.uint8), cv2.COLOR_RGB2GRAY)
    g1 = cv2.createCLAHE(3.0, (8, 8)).apply(g1); g2 = cv2.createCLAHE(3.0, (8, 8)).apply(g2)   # even out the lighting
    x0, y0 = seed_r.min(0) - 40; x1, y1 = seed_r.max(0) + 40
    m = np.zeros_like(g2); m[int(y0):int(y1), int(x0):int(x1)] = 255
    corners = cv2.goodFeaturesToTrack(g2, 400, 0.01, 12, mask=m, blockSize=7).reshape(-1, 2)
    r, srch = 18, 20
    P_ref, P_on = [], []
    for x, y in corners:
        xi, yi = int(x), int(y)
        if yi - r - srch < 0 or xi - r - srch < 0 or yi + r + srch >= g1.shape[0] or xi + r + srch >= g1.shape[1]:
            continue
        tpl = g2[yi - r:yi + r + 1, xi - r:xi + r + 1]
        win = g1[yi - r - srch:yi + r + srch + 1, xi - r - srch:xi + r + srch + 1]
        if tpl.std() < 6 or (a[yi - r:yi + r + 1, xi - r:xi + r + 1] < 0.99).any():
            continue
        res = cv2.matchTemplate(win, tpl, cv2.TM_CCOEFF_NORMED)
        _, best, _, (bx, by) = cv2.minMaxLoc(res)
        if best < 0.6:
            continue
        P_ref.append([x, y]); P_on.append([xi - srch + bx + (x - xi), yi - srch + by + (y - yi)])
    P_ref, P_on = np.array(P_ref), np.array(P_on)
    P_blind = apply(np.linalg.inv(S0), P_on)          # back into blind-result coordinates
    # robust: drop gross mismatches with one homography pass, then measure
    H1 = computeH(P_blind, P_ref); keep = residuals(H1, P_blind, P_ref) < 8
    Pb, Pr = P_blind[keep], P_ref[keep]
    S = fit_similarity(Pb, Pr); Af = fit_affine(Pb, Pr); Hh = computeH(Pb, Pr)
    res_S, res_A, res_H = residuals(S, Pb, Pr), residuals(Af, Pb, Pr), residuals(Hh, Pb, Pr)
    sv = np.linalg.svd(Af[:2, :2], compute_uv=False)
    U, _, Vt = np.linalg.svd(Af[:2, :2]); Rm = U @ Vt
    scale_ratio = float(sv[0] / sv[1])
    # outputs: blind result aligned to the reference by the similarity, and the reference-guided warp
    blind_on_ref, ba, _ = warpImageBilinear(blind, S, (0, 0, ref.shape[1] - 1, ref.shape[0] - 1))
    save(blind_on_ref, ROOT / 'media/rect/relief_blind_aligned.jpg')
    bj = json.load(open(ROOT / 'tests/run/relief_blind.json'))
    H_blind = np.array(bj['H']); angled = load(ROOT / 'data/relief_angled.jpg')
    T = np.array([[1, 0, -bj['box'][0]], [0, 1, -bj['box'][1]], [0, 0, 1]])   # blind output box origin
    guided, gaa, _ = warpImageBilinear(angled, Hh @ T @ H_blind, (0, 0, ref.shape[1] - 1, ref.shape[0] - 1))
    save(guided, ROOT / 'media/rect/relief_guided.jpg')
    save(ref, ROOT / 'media/rect/relief_reference.jpg')
    xa0, ya0 = int(max(x0 - 60, 0)), int(max(y0 - 60, 0)); xa1, ya1 = int(min(x1 + 60, ref.shape[1])), int(min(y1 + 60, ref.shape[0]))
    for n, im in (('blind_aligned', blind_on_ref), ('reference', ref), ('guided', guided)):
        save(im[ya0:ya1, xa0:xa1], ROOT / f'media/rect/relief_{n}_crop.jpg')
    out = dict(points=int(len(Pb)), seeds=len(seed_b), similarity_resid_median_px=float(np.median(res_S)), similarity_resid_p90_px=float(np.percentile(res_S, 90)),
               affine_resid_median_px=float(np.median(res_A)), homography_resid_median_px=float(np.median(res_H)),
               anisotropy=scale_ratio, rotation_deg=float(np.degrees(np.arctan2(Rm[1, 0], Rm[0, 0]))),
               relief_size_px=[float(x1 - x0 - 80), float(y1 - y0 - 80)], crop=[xa0, ya0, xa1, ya1])
    json.dump(out, open(ROOT / 'tests/run/relief.json', 'w'), indent=1)
    print(json.dumps({k: (round(v, 3) if isinstance(v, float) else v) for k, v in out.items()}, indent=0))


if __name__ == '__main__':
    main()
