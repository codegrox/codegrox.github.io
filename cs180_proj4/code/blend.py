"""A.4 blending.

Every warped image arrives with an alpha mask. Three ways to combine them:

  overwrite   later images simply cover earlier ones (hard seams; the baseline)
  feather     weighted average; each image's weight is its distance to the edge of
              its own footprint (distance transform, the spec's bwdist), so a
              pixel trusts the image whose center it is closer to
  two-level   a 2-level Laplacian pyramid: split each image into low (blurred) and high (detail) bands; blend
              the low band with the feather weights (smooth color/exposure
              transition) but take the high band from the single image with the
              largest weight (no ghosted double edges)

Gain compensation first scales each image so overlapping regions agree in
brightness (the photos were shot without exposure lock).
"""
import numpy as np
from scipy.ndimage import distance_transform_edt, gaussian_filter


def feather_weight(alpha):
    """Distance of each pixel to the edge of the image's footprint. The mask is padded
    with an empty border first: an unwarped image fills its whole box, and without the
    padding the array edge would not count as an edge, so its weight would not fall
    to zero there and the seam would stay sharp."""
    w = distance_transform_edt(np.pad(alpha > 0.5, 1))[1:-1, 1:-1].astype(np.float32)
    return w / (w.max() + 1e-6)


def masked_blur(img, alpha, sigma):
    """Gaussian blur that ignores pixels outside the footprint (no dark halo at the
    border): blur(img * a) / blur(a)."""
    a = gaussian_filter(alpha, sigma)
    out = np.stack([gaussian_filter(img[..., c] * alpha, sigma) for c in range(img.shape[2])], -1)
    return out / np.maximum(a, 1e-6)[..., None]


def solve_gains(pairs, n, sigma_n=0.04, sigma_g=0.1):
    """Per-image, per-channel gains (Brown & Lowe 2007, eq. 29):
        e = sum_ij N_ij [ (g_i m_ij - g_j m_ji)^2 / sigma_n^2 + (1 - g_i)^2 / sigma_g^2 ]
    The first term makes overlaps agree; the second, weighted by the same overlap
    size N_ij, keeps every gain near 1 (otherwise g = 0 would trivially "agree")."""
    gains = np.ones((n, 3))
    for c in range(3):
        A, b = [], []
        for i, j, cnt, mi, mj in pairs:
            w = np.sqrt(cnt)
            row = np.zeros(n); row[i], row[j] = mi[c] * w / sigma_n, -mj[c] * w / sigma_n
            A.append(row); b.append(0.0)
            for k in (i, j):
                row = np.zeros(n); row[k] = w / sigma_g
                A.append(row); b.append(w / sigma_g)
        if A:
            gains[:, c] = np.linalg.lstsq(np.array(A), np.array(b), rcond=None)[0]
    return gains


def overlap_stats(layers):
    """layers: list of (img, alpha) on a common (small) canvas. Returns the pairs
    list for solve_gains plus each pair's mean absolute difference (alignment check)."""
    pairs, diffs = [], {}
    for i in range(len(layers)):
        for j in range(i + 1, len(layers)):
            m = (layers[i][1] > 0.99) & (layers[j][1] > 0.99)
            if m.sum() < 50:
                continue
            mi, mj = layers[i][0][m].mean(0), layers[j][0][m].mean(0)
            pairs.append((i, j, int(m.sum()), mi, mj))
            diffs[(i, j)] = (m, layers[i][0], layers[j][0])
    return pairs, diffs


class Compositor:
    """Accumulates images (each placed at an (x0, y0) offset inside the canvas) and
    produces all three blends at once."""

    def __init__(self, height, width, sigma):
        self.sigma = sigma
        z3 = lambda: np.zeros((height, width, 3), np.float32)
        z1 = lambda: np.zeros((height, width), np.float32)
        self.over, self.fnum, self.lnum, self.high = z3(), z3(), z3(), z3()
        self.wsum, self.best, self.cover = z1(), z1(), z1()

    def add(self, img, alpha, x0=0, y0=0, gain=None):
        if gain is not None:
            img = img * np.asarray(gain, np.float32)
        h, w = alpha.shape
        sl = (slice(y0, y0 + h), slice(x0, x0 + w))
        a3 = alpha[..., None]
        self.over[sl] = np.where(a3 > 0.5, img, self.over[sl])
        wgt = feather_weight(alpha) * (alpha > 0.5)
        low = masked_blur(img, alpha, self.sigma)
        self.fnum[sl] += img * wgt[..., None]
        self.lnum[sl] += low * wgt[..., None]
        self.wsum[sl] += wgt
        take = wgt > self.best[sl]
        self.high[sl] = np.where(take[..., None], img - low, self.high[sl])
        self.best[sl] = np.where(take, wgt, self.best[sl])
        self.cover[sl] = np.maximum(self.cover[sl], alpha)

    def results(self):
        d = np.maximum(self.wsum, 1e-6)[..., None]
        covered = (self.cover > 0.5)[..., None]
        feather = np.where(covered, self.fnum / d, 0)
        two = np.where(covered, self.lnum / d + self.high, 0)
        return {'overwrite': np.clip(self.over, 0, 1), 'feather': np.clip(feather, 0, 1),
                'twolevel': np.clip(two, 0, 1), 'alpha': self.cover}
