"""Part 1 experiments. Each function is one stage: it writes figures to media/
and its measured numbers to out/results.json."""
import numpy as np
from scipy.ndimage import label
from scipy.signal import convolve2d

import conv
import filters as F
from imutils import (load, to_gray, trim_uniform_border, save, signed_vis, colormap,
                     upsample_nearest, montage, best_time, resize)


def _small_components(edges, max_px=4):
    """Noise proxy: number of 8-connected edge blobs with <= max_px pixels."""
    lab, n = label(edges, structure=np.ones((3, 3)))
    sizes = np.bincount(lab.ravel())[1:]
    return int((sizes <= max_px).sum()), int(n)


# ---------------------------------------------------------------------- 1.1

def stage_conv(cfg, R, root, media):
    c = cfg['part1']
    out = media / 'conv'
    im = load(root / c['selfie'], gray=True, max_side=c.get('selfie_max_side', 480))
    kernels = {'box9': conv.box_filter(9), 'dx': conv.DX, 'dy': conv.DY}

    # correctness sweep against scipy on random data: all modes, odd and even kernels
    rng = np.random.default_rng(180)
    worst = 0.0
    cases = 0
    for shape in [(11, 13), (16, 9)]:
        x = rng.random(shape)
        for ks in [(1, 3), (3, 1), (3, 3), (2, 2), (4, 3), (5, 5), (2, 6)]:
            k = rng.standard_normal(ks)
            for mode in ('full', 'same', 'valid'):
                ref = convolve2d(x, k, mode=mode, boundary='fill', fillvalue=0)
                for fn in (conv.conv2d_four_loops, conv.conv2d_two_loops, conv.conv2d_tap_loops):
                    got = fn(x, k, mode)
                    assert got.shape == ref.shape, (fn.__name__, ks, mode)
                    worst = max(worst, float(np.abs(got - ref).max()))
                    cases += 1

    impls = {
        'four_loops': (conv.conv2d_four_loops, 1),
        'two_loops': (conv.conv2d_two_loops, 1),
        'tap_loops': (conv.conv2d_tap_loops, 3),
    }
    timing, error, outputs = {}, {}, {}
    for kname, k in kernels.items():
        ref, t_scipy = best_time(lambda: convolve2d(im, k, mode='same', boundary='fill', fillvalue=0), 5)
        timing[kname] = {'scipy': t_scipy}
        error[kname] = {}
        for iname, (fn, reps) in impls.items():
            got, t = best_time(lambda: fn(im, k, 'same'), reps)
            timing[kname][iname] = t
            error[kname][iname] = float(np.abs(got - ref).max())
            print(f'  {kname:5s} {iname:10s} {t:8.3f}s   max|ours - scipy| = {error[kname][iname]:.2e}')
        print(f'  {kname:5s} {"scipy":10s} {t_scipy:8.4f}s')
        outputs[kname] = ref

    # timings use the small copy above; the figures are computed at display size
    # with the (identical) tap-loop version so they keep the photo's resolution
    big = load(root / c['selfie'], gray=True, max_side=c.get('selfie_display_side', 1600))
    save(big, out / 'selfie_gray.jpg')
    shown = {k: conv.conv2d_tap_loops(big, kern, 'same') for k, kern in kernels.items()}
    save(shown['box9'], out / 'selfie_box9.jpg')
    s = max(np.percentile(np.abs(shown['dx']), 99.5), np.percentile(np.abs(shown['dy']), 99.5))
    save(signed_vis(shown['dx'], s), out / 'selfie_dx.jpg')
    save(signed_vis(shown['dy'], s), out / 'selfie_dy.jpg')

    # boundary handling: zero fill (ours, scipy default) vs symmetric reflection
    zero = conv.conv2d_tap_loops(im, kernels['box9'], 'same')
    symm = convolve2d(im, kernels['box9'], mode='same', boundary='symm')
    wrap = convolve2d(im, kernels['box9'], mode='same', boundary='wrap')
    r = 4
    border = np.ones_like(im, dtype=bool)
    border[r:-r, r:-r] = False
    corner = lambda a: upsample_nearest(a[:48, :48], 6)
    save(corner(zero), out / 'corner_zero.png')
    save(corner(symm), out / 'corner_symm.png')
    save(corner(wrap), out / 'corner_wrap.png')

    R.put('1.1', {
        'image_shape': im.shape,
        'pixels': int(im.size),
        'display_shape': big.shape,
        'correctness_cases': cases,
        'correctness_worst_abs_err': worst,
        'timing_s': timing,
        'max_abs_err_vs_scipy': error,
        'speedup_vs_four_loops': {k: {i: timing[k]['four_loops'] / timing[k][i] for i in timing[k]} for k in timing},
        'boundary': {
            'mean_abs_diff_zero_vs_symm_border': float(np.abs(zero - symm)[border].mean()),
            'mean_abs_diff_zero_vs_symm_interior': float(np.abs(zero - symm)[~border].mean()),
            'mean_intensity_border_zero': float(zero[border].mean()),
            'mean_intensity_border_symm': float(symm[border].mean()),
        },
    })


# ---------------------------------------------------------------------- 1.2

def _camera(cfg, root):
    im = load(root / cfg['part1']['cameraman'], gray=True)
    im, trimmed = trim_uniform_border(im)
    return im, trimmed


def stage_finite_difference(cfg, R, root, media):
    c = cfg['part1']
    out = media / 'edges'
    im, trimmed = _camera(cfg, root)
    save(im, out / 'cameraman.png')
    gx, gy, mag = F.gradients(im)
    s = np.percentile(np.abs(np.r_[gx.ravel(), gy.ravel()]), 99.5)
    save(signed_vis(gx, s), out / 'fd_dx.png')
    save(signed_vis(gy, s), out / 'fd_dy.png')
    save(np.clip(mag / np.percentile(mag, 99.5), 0, 1), out / 'fd_mag.png')

    sweep = {}
    tiles = []
    for t in c['fd_sweep']:
        e = mag > t
        noise, comps = _small_components(e)
        sweep[str(t)] = {'edge_fraction': float(e.mean()), 'small_blobs': noise, 'components': comps}
        tiles.append(e.astype(float))
    save(montage(tiles, len(tiles), gap=8), out / 'fd_sweep.png')
    edges = mag > c['fd_threshold']
    save(edges.astype(float), out / 'fd_edges.png')
    noise, comps = _small_components(edges)
    print(f'  threshold {c["fd_threshold"]}: {edges.mean():.2%} edge pixels, {noise} blobs <= 4 px')

    R.put('1.2', {
        'image_shape': im.shape,
        'trimmed_border_tblr': trimmed,
        'boundary': 'symm',
        'threshold': c['fd_threshold'],
        'edge_fraction': float(edges.mean()),
        'small_blobs': noise,
        'components': comps,
        'mag_percentiles': {p: float(np.percentile(mag, p)) for p in (50, 90, 99, 99.9)},
        'sweep': sweep,
    })


# ---------------------------------------------------------------------- 1.3

def stage_dog(cfg, R, root, media):
    c = cfg['part1']
    out = media / 'dog'
    im, _ = _camera(cfg, root)
    sigma = c['gauss_sigma']
    ksize = F.kernel_size(sigma)
    G = F.gaussian_2d(sigma, ksize)

    # route 1: blur, then finite differences
    blurred = convolve2d(im, G, mode='same', boundary='symm')
    bx, by, bmag = F.gradients(blurred)
    # route 2: one convolution with each derivative-of-Gaussian filter
    dogx, dogy = F.dog_kernels(sigma, ksize)
    dx = convolve2d(im, dogx, mode='same', boundary='symm')
    dy = convolve2d(im, dogy, mode='same', boundary='symm')
    dmag = np.hypot(dx, dy)

    m = ksize // 2 + 2
    inner = (slice(m, -m), slice(m, -m))
    diff = np.abs(dmag - bmag)
    # with zero padding and 'full' output the two routes are identical everywhere
    full_a = convolve2d(convolve2d(im, G, 'full'), conv.DX, 'full')
    full_b = convolve2d(im, dogx, 'full')

    save(blurred, out / 'blurred.png')
    s = np.percentile(np.abs(np.r_[bx.ravel(), by.ravel()]), 99.5)
    save(signed_vis(bx, s), out / 'blur_dx.png')
    save(signed_vis(by, s), out / 'blur_dy.png')
    save(signed_vis(dx, s), out / 'dog_dx.png')
    save(signed_vis(dy, s), out / 'dog_dy.png')
    top = np.percentile(bmag, 99.5)
    save(np.clip(bmag / top, 0, 1), out / 'blur_mag.png')
    save(np.clip(dmag / top, 0, 1), out / 'dog_mag.png')

    t = c['dog_threshold']
    e_blur, e_dog = bmag > t, dmag > t
    save(e_blur.astype(float), out / 'blur_edges.png')
    save(e_dog.astype(float), out / 'dog_edges.png')
    sweep, tiles = {}, []
    for tt in c['dog_sweep']:
        e = dmag > tt
        noise, comps = _small_components(e)
        sweep[str(tt)] = {'edge_fraction': float(e.mean()), 'small_blobs': noise, 'components': comps}
        tiles.append(e.astype(float))
    save(montage(tiles, len(tiles), gap=8), out / 'dog_sweep.png')

    # filter visualization: G, DoG_x, DoG_y on a shared diverging scale
    side = max(dogx.shape)                      # center every kernel on one square canvas

    def pad(k):
        dy, dx = side - k.shape[0], side - k.shape[1]
        return np.pad(k, ((dy // 2, dy - dy // 2), (dx // 2, dx - dx // 2)))
    up = max(1, 240 // side)
    vis_g = colormap(pad(G), 'RdBu_r', -G.max(), G.max())
    lim = np.abs(dogx).max()
    vis_x = colormap(pad(dogx), 'RdBu_r', -lim, lim)
    vis_y = colormap(pad(dogy), 'RdBu_r', -lim, lim)
    for name, v in (('kernel_gauss', vis_g), ('kernel_dogx', vis_x), ('kernel_dogy', vis_y)):
        save(upsample_nearest(v, up), out / f'{name}.png')

    fd_noise, _ = _small_components(F.gradients(im)[2] > c['fd_threshold'])
    dog_noise, dog_comps = _small_components(e_dog)
    print(f'  sigma {sigma}, ksize {ksize}: max|DoG - blur-then-diff| interior = {diff[inner].max():.2e}')
    print(f'  threshold {t}: {e_dog.mean():.2%} edge pixels, {dog_noise} blobs <= 4 px (finite diff: {fd_noise})')

    R.put('1.3', {
        'sigma': sigma,
        'ksize': ksize,
        'gaussian_sum': float(G.sum()),
        'dog_shape': dogx.shape,
        'dog_sum': [float(dogx.sum()), float(dogy.sum())],
        'max_abs_diff_interior': float(diff[inner].max()),
        'max_abs_diff_all': float(diff.max()),
        'max_abs_diff_full_zero_pad': float(np.abs(full_a - full_b).max()),
        'border_margin_px': m,
        'threshold': t,
        'edge_fraction': float(e_dog.mean()),
        'small_blobs': dog_noise,
        'components': dog_comps,
        'fd_small_blobs_at_fd_threshold': fd_noise,
        'mag_percentiles': {p: float(np.percentile(dmag, p)) for p in (50, 90, 99, 99.9)},
        'sweep': sweep,
    })


# ------------------------------------------------------------ bells: orientation

def stage_orientation(cfg, R, root, media):
    c = cfg['part1']
    out = media / 'orient'
    im, _ = _camera(cfg, root)
    dogx, dogy = F.dog_kernels(c['gauss_sigma'])
    gx = convolve2d(im, dogx, mode='same', boundary='symm')
    gy = convolve2d(im, dogy, mode='same', boundary='symm')
    mag = np.hypot(gx, gy)

    rgb, theta = F.orientation_hsv(gx, gy, mag)
    save(rgb, out / 'orientation.png')
    edges = mag > c['dog_threshold']
    rgb_e, _ = F.orientation_hsv(gx, gy, edges.astype(float), clip_pct=100, floor=0.5)
    save(rgb_e, out / 'orientation_edges.png')
    save(F.orientation_legend(), out / 'legend.png')

    # check the polynomial atan2 against numpy's (used only for this check)
    ref = np.arctan2(gy, gx)
    err = np.abs(np.mod(theta - ref + np.pi, 2 * np.pi) - np.pi)     # wrap-aware
    # magnitude-weighted histogram of edge orientation (direction mod 180 deg)
    ori = np.degrees(np.mod(theta, np.pi))
    hist, bins = np.histogram(ori[edges], bins=12, range=(0, 180), weights=mag[edges])
    hist = hist / hist.sum()
    print(f'  atan2_poly max error {err.max():.2e} rad over {err.size} pixels')

    R.put('1.bw', {
        'max_abs_err_rad': float(err.max()),
        'mean_abs_err_rad': float(err.mean()),
        'hist_bins_deg': bins.tolist(),
        'hist_weighted': hist.tolist(),
    })
