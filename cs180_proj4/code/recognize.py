"""B.5 bells & whistles: panorama recognition from an unordered set of photos
(Brown & Lowe, "Recognising Panoramas", ICCV 2003, simplified).

1. features (B.1-B.2) for every photo
2. every pair: ratio-test matches (B.3), then RANSAC (B.4), vectorized so ~1600
   pairs stay fast
3. a pair is accepted if inliers > 8 + 0.3 * matches (Brown & Lowe's test)
4. connected components of accepted pairs = panoramas; leftover photos = no panorama
5. each panorama: reference = best-connected photo, homographies along a maximum
   spanning tree, then camera rotations + one focal length refined jointly over
   ALL accepted pairs (a small bundle adjustment), rendered on a cylinder
"""
import numpy as np
from homography import computeH, apply
from features import match
from cylinder import nearest_rotation


def ransac_batch(p1, p2, iters=1000, eps=4.0, seed=0):
    """4-point RANSAC with all hypotheses solved at once (batched 8x8 solves)."""
    n = len(p1)
    if n < 6:
        return None, np.zeros(n, bool)
    rng = np.random.default_rng(seed)
    S = np.array([rng.choice(n, 4, replace=False) for _ in range(iters)])
    x, y, u, v = p1[S, 0], p1[S, 1], p2[S, 0], p2[S, 1]           # (iters, 4)
    z, o = np.zeros_like(x), np.ones_like(x)
    A = np.concatenate([np.stack([x, y, o, z, z, z, -x * u, -y * u], -1),
                        np.stack([z, z, z, x, y, o, -x * v, -y * v], -1)], 1)
    b = np.concatenate([u, v], 1)
    ok = np.abs(np.linalg.det(A)) > 1e-9
    h = np.zeros((iters, 8)); h[ok] = np.linalg.solve(A[ok], b[ok][..., None])[..., 0]
    H = np.concatenate([h, np.ones((iters, 1))], 1).reshape(iters, 3, 3)
    q = np.einsum('kij,nj->kni', H, np.c_[p1, np.ones(n)])
    with np.errstate(divide='ignore', invalid='ignore'):
        err = np.linalg.norm(q[..., :2] / q[..., 2:3] - p2[None], axis=-1)
    inl = (err < eps) & ok[:, None]
    best = inl[inl.sum(1).argmax()]
    if len(np.unique(p1[best].round(1), axis=0)) < 4:            # too few distinct points: degenerate
        return None, np.zeros(n, bool)
    try:
        with np.errstate(all='ignore'):
            Hb = computeH(p1[best], p2[best])
            best = np.linalg.norm(apply(Hb, p1) - p2, axis=1) < eps
            if len(np.unique(p1[best].round(1), axis=0)) < 4:
                return None, np.zeros(n, bool)
            Hb = computeH(p1[best], p2[best])
    except (np.linalg.LinAlgError, ValueError):
        return None, np.zeros(n, bool)
    if not np.all(np.isfinite(Hb)):
        return None, np.zeros(n, bool)
    return Hb, best


def pairwise(F, Ks, ratio=0.65, alpha=8, beta=0.3, min_inliers=15, max_rot_dev=1.5):
    """Match every pair; return accepted edges {(i, j): (H_ij, p_i, p_j)} with H mapping i -> j.
    Besides Brown & Lowe's inlier test, a pair must fit the camera model: photos
    taken from one spot are related by H = K_j R K_i^-1, so K_j^-1 H K_i must be
    close to a rotation (ratio of its singular values below max_rot_dev). This
    rejects degenerate homographies that a handful of coincidental matches can produce."""
    edges, log = {}, []
    for i in range(len(F)):
        for j in range(i + 1, len(F)):
            pairs, _, _, _ = match(F[i]['desc'], F[j]['desc'], ratio)
            if len(pairs) < min_inliers:
                log.append((i, j, len(pairs), 0, False, float('inf'))); continue
            p1, p2 = F[i]['xy'][pairs[:, 0]], F[j]['xy'][pairs[:, 1]]
            H, inl = ransac_batch(p1, p2)
            ni = int(inl.sum()); ok = H is not None and ni >= min_inliers and ni > alpha + beta * len(pairs)
            dev = float('inf')
            if H is not None:
                sv = np.linalg.svd(np.linalg.inv(Ks[j]) @ H @ Ks[i], compute_uv=False); dev = float(sv[0] / sv[2])
            log.append((i, j, len(pairs), ni, ok, dev))
            ok = ok and dev < max_rot_dev
            if ok:
                edges[(i, j)] = (H, p1[inl], p2[inl])
    return edges, log


def components(n, edges):
    parent = list(range(n))
    def find(a):
        while parent[a] != a:
            parent[a] = parent[parent[a]]; a = parent[a]
        return a
    for i, j in edges:
        parent[find(i)] = find(j)
    groups = {}
    for i in range(n):
        groups.setdefault(find(i), []).append(i)
    return sorted(groups.values(), key=len, reverse=True)


def spanning_tree(group, edges):
    """Reference = photo with the most inliers over its accepted pairs; maximum
    spanning tree (Prim) on inlier counts; returns H_k -> reference for the group."""
    w = {}
    for (i, j), (H, a, b) in edges.items():
        if i in group and j in group:
            w[(i, j)] = len(a)
    score = {k: sum(v for e, v in w.items() if k in e) for k in group}
    ref = max(group, key=score.get)
    H_to_ref = {ref: np.eye(3)}
    while len(H_to_ref) < len(group):
        best = None
        for (i, j), v in w.items():
            if (i in H_to_ref) != (j in H_to_ref) and (best is None or v > best[0]):
                best = (v, i, j)
        _, i, j = best
        Hij = edges[(i, j)][0]
        if i in H_to_ref:                              # new node j: j -> i -> ref
            H_to_ref[j] = H_to_ref[i] @ np.linalg.inv(Hij)
        else:                                          # new node i: i -> j -> ref
            H_to_ref[i] = H_to_ref[j] @ Hij
    return ref, {k: H / H[2, 2] for k, H in H_to_ref.items()}


def bundle_rotations(group, ref, H_to_ref, edges, K, per_edge=40):
    """Rotations R_k (camera k rays -> reference rays) and one shared focal
    length, fitted to the inlier matches of every accepted pair in the group."""
    from scipy.optimize import least_squares
    from scipy.spatial.transform import Rotation
    others = [k for k in group if k != ref]
    init = [Rotation.from_matrix(nearest_rotation(np.linalg.inv(K) @ H_to_ref[k] @ K)).as_rotvec() for k in others]
    E = []
    for (i, j), (H, a, b) in edges.items():
        if i in group and j in group:
            s = np.linspace(0, len(a) - 1, min(per_edge, len(a))).astype(int)
            E.append((i, j, a[s], b[s]))
    def rot(x, k):
        if k == ref:
            return np.eye(3)
        t = others.index(k); return Rotation.from_rotvec(x[3 * t:3 * t + 3]).as_matrix()
    def resid(x):
        f = K[0, 0] * x[-1]; Kf = np.array([[f, 0, K[0, 2]], [0, f, K[1, 2]], [0, 0, 1]]); Ki = np.linalg.inv(Kf)
        out = []
        for i, j, a, b in E:
            M = Kf @ rot(x, j).T @ rot(x, i) @ Ki          # pixel in i -> ray -> reference -> camera j -> pixel
            q = np.c_[a, np.ones(len(a))] @ M.T
            out.append((q[:, :2] / q[:, 2:3] - b).ravel())
        return np.concatenate(out)
    x0 = np.r_[np.concatenate(init) if init else np.zeros(0), 1.0]
    sol = least_squares(resid, x0, loss='soft_l1', f_scale=3.0)
    r = np.abs(resid(sol.x)).reshape(-1, 2); r = np.linalg.norm(r, axis=1)
    f = K[0, 0] * sol.x[-1]; Kf = np.array([[f, 0, K[0, 2]], [0, f, K[1, 2]], [0, 0, 1]])
    return {k: rot(sol.x, k) for k in group}, Kf, float(np.median(r))
