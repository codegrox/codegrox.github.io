"""Part 2 experiments. Same contract as part1.py: figures -> media/, numbers ->
out/results.json, one stage per function."""
import numpy as np

import filters as F
import figures
from hybrid import align_pair, load_points, cap_size, hybrid_image, split_bands
from imutils import load, fit_to, save, signed_vis, colormap, montage, psnr, to_gray, as_rgb, resize
from stacks import (gaussian_stack, laplacian_stack, total_sigmas, blend, feather_blend,
                    make_mask, prepare_pair, expand_mask)


def _enabled(items):
    return [e for e in items if e.get('enabled', True)]


def _missing(entry, root, keys=('path', 'low', 'high', 'a', 'b', 'points')):
    """Files an entry needs that do not exist yet (entry is skipped, stage stays pending)."""
    paths = [entry[k] for k in keys if entry.get(k)]
    mask = entry.get('mask', {})
    paths += [mask[k] for k in ('points', 'path') if mask.get(k)]
    gone = [p for p in paths if not (root / p).exists()]
    if gone:
        print(f'  {entry.get("name", "?")}: skipped, missing {", ".join(gone)}')
    return gone


# ---------------------------------------------------------------------- 2.1

def _sharpness(im):
    """Mean gradient magnitude of the luminance: a simple, monotone sharpness proxy."""
    return float(F.gradients(to_gray(im))[2].mean())


def stage_sharpen(cfg, R, root, media):
    c = cfg['sharpen']
    out = media / 'sharpen'
    sigma, alpha = c['sigma'], c['alpha']
    res = {'sigma': sigma, 'alpha': alpha, 'images': {}, '_missing': []}

    for item in _enabled(c['images']):
        name = item['name']
        gone = _missing(item, root)
        if gone:
            res['_missing'] += gone
            continue
        im = load(root / item['path'], max_side=c.get('max_side', 1600))
        s, a = item.get('sigma', sigma), item.get('alpha', alpha)
        blurred = F.gaussian_blur(im, s)
        high = im - blurred
        two_step = np.clip(im + a * high, 0, 1)
        one_filter = np.clip(F.filter2(im, F.unsharp_kernel(s, a)), 0, 1)
        save(im, out / f'{name}_orig.jpg')
        save(blurred, out / f'{name}_blur.jpg')
        save(signed_vis(to_gray(high)), out / f'{name}_high.jpg')
        save(one_filter, out / f'{name}_sharp.jpg')
        sweep = {}
        for aa in c['alpha_sweep']:
            sh = np.clip(F.filter2(im, F.unsharp_kernel(s, aa)), 0, 1)
            save(sh, out / f'{name}_alpha{aa:g}.jpg')
            sweep[f'{aa:g}'] = {'sharpness': _sharpness(sh), 'clipped_fraction': float(((sh <= 0) | (sh >= 1)).mean())}
        res['images'][name] = {
            'shape': im.shape, 'sigma': s, 'alpha': a,
            'max_abs_diff_one_filter_vs_two_step': float(np.abs(one_filter - two_step).max()),
            'sharpness_orig': _sharpness(im),
            'sharpness_sharp': _sharpness(one_filter),
            'sweep': sweep,
        }
        print(f'  {name}: sharpness {_sharpness(im):.4f} -> {_sharpness(one_filter):.4f} (alpha {a})')

    evals = c.get('eval', [])
    evals = [evals] if isinstance(evals, dict) else evals
    res['eval'] = {}
    for ev in evals:
        if not ev.get('enabled', True):
            continue
        name = ev.get('name', 'eval')
        gone = _missing({'name': name, **ev}, root)
        if gone:
            res['_missing'] += gone
            continue
        im = load(root / ev['path'], max_side=c.get('max_side', 1600))
        blurred = F.gaussian_blur(im, ev['blur_sigma'])
        s = ev.get('sharpen_sigma', ev['blur_sigma'])
        save(im, out / f'eval_{name}_orig.jpg')
        save(blurred, out / f'eval_{name}_blurred.jpg')
        rows = {}
        for aa in ev['alphas']:
            sh = np.clip(F.filter2(blurred, F.unsharp_kernel(s, aa)), 0, 1)
            save(sh, out / f'eval_{name}_alpha{aa:g}.jpg')
            rows[f'{aa:g}'] = {'psnr': psnr(sh, im), 'sharpness': _sharpness(sh)}
        best = max(rows, key=lambda k: rows[k]['psnr'])
        err = np.abs(to_gray(np.clip(F.filter2(blurred, F.unsharp_kernel(s, float(best))), 0, 1)) - to_gray(im))
        save(np.clip(err / np.percentile(err, 99.5), 0, 1), out / f'eval_{name}_error.jpg')
        for box_name, box in ev.get('crops', {}).items():          # 1:1 detail crops
            y0, y1, x0, x1 = box
            h, w = im.shape[:2]
            sl = (slice(int(y0 * h), int(y1 * h)), slice(int(x0 * w), int(x1 * w)))
            best_im = np.clip(F.filter2(blurred, F.unsharp_kernel(s, float(best))), 0, 1)
            for tag, src in (('orig', im), ('blurred', blurred), ('best', best_im)):
                save(src[sl], out / f'eval_{name}_{box_name}_{tag}.png')
        res['eval'][name] = {
            'shape': im.shape, 'blur_sigma': ev['blur_sigma'], 'sharpen_sigma': s,
            'psnr_blurred': psnr(blurred, im),
            'sharpness_orig': _sharpness(im), 'sharpness_blurred': _sharpness(blurred),
            'by_alpha': rows, 'best_alpha_by_psnr': float(best),
        }
        a = [float(k) for k in rows]
        figures.line_plot(out / f'eval_{name}_psnr.png', a, [[rows[k]['psnr'] for k in rows]], ['sharpened vs. original'],
                          'sharpening amount α', 'PSNR (dB)',
                          marks=[{'y': res['eval'][name]['psnr_blurred'], 'label': 'blurred input'}])
        print(f'  eval {name}: blurred {res["eval"][name]["psnr_blurred"]:.2f} dB, best alpha {best} -> {rows[best]["psnr"]:.2f} dB')
    R.put('2.1', res)


# ---------------------------------------------------------------------- 2.2

def _prepare_hybrid(entry, root, cfg):
    work = cfg.get('hybrid_work_side', 1200)
    low = load(root / entry['low'], max_side=work)
    high = load(root / entry['high'], max_side=work)
    info = {}
    if entry.get('points'):
        # points file order is (low image, high image); the low image is warped,
        # as Oliva et al. recommend
        low, high, info = align_pair(low, high, *load_points(root / entry['points'], low.shape, high.shape))
    else:
        high = fit_to(high, low.shape[:2])
    side = entry.get('out_side', cfg.get('hybrid_out_side', 900))
    return cap_size(low, side), cap_size(high, side), info


def _sigmas(entry, n):
    """Filters can be given as sigmas (px) or, resolution-independently, as the
    paper's half-gain cutoffs in cycles/image over the shorter side n."""
    if 'cutoff_low' in entry:
        return (round(F.sigma_for_cutoff(entry['cutoff_low'], n), 2),
                round(F.sigma_for_cutoff(entry['cutoff_high'], n), 2))
    return entry['sigma_low'], entry['sigma_high']


def _study_sigmas(entry, pair, n):
    if 'cutoff_low' in entry:
        return (round(F.sigma_for_cutoff(pair[0], n), 2), round(F.sigma_for_cutoff(pair[1], n), 2))
    return pair


def stage_hybrid(cfg, R, root, media):
    res = {'_missing': []}
    for entry in _enabled(cfg['hybrids']):
        name = entry['name']
        gone = _missing(entry, root)
        if gone:
            res['_missing'] += gone
            continue
        out = media / 'hybrid' / name
        low_im, high_im, info = _prepare_hybrid(entry, root, cfg)
        sl, sh = _sigmas(entry, min(low_im.shape[:2]))
        color = entry.get('color', 'both')
        gain = entry.get('gain_high', 1.0)
        hyb, low, high = hybrid_image(low_im, high_im, sl, sh, color, gain)
        n = min(hyb.shape[:2])
        work = cfg.get('hybrid_work_side', 1200)
        save(load(root / entry['low'], max_side=work), out / 'orig_low.jpg', max_side=700)
        save(load(root / entry['high'], max_side=work), out / 'orig_high.jpg', max_side=700)
        save(low_im, out / 'input_low.jpg')
        save(high_im, out / 'input_high.jpg')
        save(hyb, out / 'hybrid.jpg')
        figures.distance_strip(hyb, out / 'distance.webp')
        r = {'shape': hyb.shape, 'sigma_low': sl, 'sigma_high': sh, 'color': color,
             'cutoff_low_cpi': F.cutoff_cpi(sl, n), 'cutoff_high_cpi': F.cutoff_cpi(sh, n),
             'cutoff_low_cpp': F.HALF_GAIN / sl, 'cutoff_high_cpp': F.HALF_GAIN / sh,
             'n_pixels_for_cpi': n, 'alignment': info, 'gain_high': gain}

        if entry.get('favorite'):
            save(np.clip(low, 0, 1), out / 'low_pass.jpg')
            save(np.clip(as_rgb(high) + 0.5, 0, 1), out / 'high_pass.jpg')
            spectra = {
                'fft_input_low': F.log_spectrum(to_gray(low_im)),
                'fft_input_high': F.log_spectrum(to_gray(high_im)),
                'fft_low_pass': F.log_spectrum(to_gray(low)),
                'fft_high_pass': F.log_spectrum(to_gray(high)),
                'fft_hybrid': F.log_spectrum(to_gray(hyb)),
            }
            allv = np.concatenate([v.ravel() for v in spectra.values()])
            lo, hi = np.percentile(allv, 1), np.percentile(allv, 99.95)
            for k, v in spectra.items():
                save(colormap(v, 'magma', lo, hi), out / f'{k}.png')
            figures.filter_response(out / 'filter_response.png', sl, sh, n, F.gaussian_gain)
            # cutoff study: same pair, different (sigma_low, sigma_high)
            study = {}
            for pair in entry.get('cutoff_study', []):
                a, b = _study_sigmas(entry, pair, n)
                h2, _, _ = hybrid_image(low_im, high_im, a, b, color, gain)
                tag = f'sl{a:g}_sh{b:g}'
                save(h2, out / f'study_{tag}.jpg')
                figures.filter_response(out / f'study_{tag}_response.png', a, b, n, F.gaussian_gain)
                study[tag] = {'sigma_low': a, 'sigma_high': b,
                              'cutoff_low_cpi': F.cutoff_cpi(a, n), 'cutoff_high_cpi': F.cutoff_cpi(b, n)}
            r['cutoff_study'] = study
        res[name] = r
        print(f'  {name}: sigma_low {sl} ({r["cutoff_low_cpi"]:.1f} c/i), sigma_high {sh} ({r["cutoff_high_cpi"]:.1f} c/i)')
    R.put('2.2', res)


def stage_hybrid_color(cfg, R, root, media):
    res = {'_missing': []}
    for entry in _enabled(cfg['hybrids']):
        name = entry['name']
        gone = _missing(entry, root)
        if gone:
            res['_missing'] += gone
            continue
        out = media / 'hybrid' / name
        low_im, high_im, _ = _prepare_hybrid(entry, root, cfg)
        tiles = []
        stats = {}
        for mode in ('none', 'low', 'high', 'both'):
            sl, sh = _sigmas(entry, min(low_im.shape[:2]))
            hyb, low, high = hybrid_image(low_im, high_im, sl, sh, mode, entry.get('gain_high', 1.0))
            save(hyb, out / f'color_{mode}.jpg')
            tiles.append(hyb)
            # how much of the result's color (chroma) comes from each band
            ch = lambda x: float(np.mean(np.std(as_rgb(x), axis=2)))
            stats[mode] = {'chroma_result': ch(hyb), 'chroma_low': ch(low), 'chroma_high': ch(high)}
        save(montage(tiles, 4, gap=8), out / 'color_compare.webp', max_side=2400)
        res[name] = stats
    R.put('2.2.bw', res)


# ---------------------------------------------------------------------- 2.3

def _band_vis(bands, scale=None):
    """Signed band images on one shared scale (per row), 0 -> mid gray."""
    s = scale or max(np.percentile(np.abs(b), 99.5) for b in bands) + 1e-12
    return [np.clip(0.5 + 0.5 * b / s, 0, 1) for b in bands]


def _blend_entry(cfg, name):
    return next(e for e in cfg['blends'] if e['name'] == name)


def stage_stacks(cfg, R, root, media):
    c = cfg['stacks']
    out = media / 'stacks'
    entry = _blend_entry(cfg, c['blend'])
    a, b, mask = prepare_pair(entry, root, cfg.get('blend_max_side', 800))
    levels, s0 = entry['levels'], entry['s0']
    show = c.get('show_levels', [0, 2, 4])

    res = {'levels': levels, 's0': s0, 'sigma_total': total_sigmas(levels, s0), 'show_levels': show}
    for tag, im in (('a', a), ('b', b)):
        lap, gst = laplacian_stack(im, levels, s0)
        res[f'recon_err_{tag}'] = float(np.abs(np.sum(lap, axis=0) - im).max())
        # the cascade matches a direct blur of the original with sigma_total
        direct = F.gaussian_blur(im, res['sigma_total'][-1])
        m = int(3 * res['sigma_total'][-1]) + 2
        res[f'cascade_vs_direct_{tag}'] = float(np.abs(direct - gst[-1])[m:-m, m:-m].max()) if 2 * m < min(im.shape[:2]) else None
        lap_vis = _band_vis(lap[:-1]) + [np.clip(lap[-1], 0, 1)]
        save(montage(list(gst), levels, gap=6), out / f'{tag}_gaussian.webp', max_side=2400)
        save(montage(lap_vis, levels, gap=6), out / f'{tag}_laplacian.webp', max_side=2400)
        for k in range(levels):
            save(gst[k], out / f'{tag}_G{k}.jpg')
            save(lap_vis[k], out / f'{tag}_L{k}.jpg')

    result, parts = blend(a, b, mask, levels, s0, entry.get('mask_s0'))
    save(montage(list(parts['mask']), levels, gap=6), out / 'mask_gaussian.webp', max_side=2400)
    tiles = []
    for k in show:
        tiles += _band_vis([parts['a'][k], parts['b'][k], parts['out'][k]])
    tiles += [np.clip(np.sum(parts['a'], axis=0), 0, 1), np.clip(np.sum(parts['b'], axis=0), 0, 1), result]
    save(montage(tiles, 3, gap=8), out / 'fig342.webp', max_side=2400)
    for i, t in enumerate(tiles):
        save(t, out / f'fig342_{"abcdefghijkl"[i]}.jpg')
    print(f'  reconstruction error a {res["recon_err_a"]:.1e}, b {res["recon_err_b"]:.1e}')
    R.put('2.3', res)


# ---------------------------------------------------------------------- 2.4

def stage_blend(cfg, R, root, media):
    res = {'_missing': []}
    for entry in _enabled(cfg['blends']):
        name = entry['name']
        gone = _missing(entry, root)
        if gone:
            res['_missing'] += gone
            continue
        out = media / 'blend' / name
        a, b, mask = prepare_pair(entry, root, cfg.get('blend_max_side', 800))
        levels, s0 = entry['levels'], entry['s0']
        result, full = blend(a, b, mask, levels, s0, entry.get('mask_s0'), keep_bands=False)
        save(a, out / 'input_a.jpg')
        save(b, out / 'input_b.jpg')
        save(mask, out / 'mask.png')
        save(result, out / 'result.jpg')

        # baselines: hard paste and a single feathered alpha blend
        m3 = expand_mask(mask, a)
        save(np.clip(m3 * a + (1 - m3) * b, 0, 1), out / 'baseline_hard.jpg')
        fs = entry.get('feather_sigma', 0.02 * min(a.shape[:2]))
        save(feather_blend(a, b, mask, fs), out / 'baseline_feather.jpg')

        r = {'shape': a.shape, 'levels': levels, 's0': s0, 'sigma_total': total_sigmas(levels, s0),
             'mask': entry['mask'], 'mask_fraction': float(mask.mean()), 'feather_sigma': fs}
        if entry.get('favorite'):
            # Burt & Adelson Fig. 10 style: every band of both masked inputs and the result.
            # Computed on a <= 800 px copy: the figure tiles are that size anyway, and
            # keeping every full-resolution band in memory is not needed.
            f = min(1.0, 800 / max(a.shape[:2]))
            small = lambda x: resize(x, (int(x.shape[0] * f), int(x.shape[1] * f))) if f < 1 else x
            sa, sb, sm = small(a), small(b), small(mask)
            result_s, parts = blend(sa, sb, sm, levels, s0 * f, entry.get('mask_s0') and entry['mask_s0'] * f)
            tiles = []
            for k in range(levels - 1):
                tiles += _band_vis([parts['a'][k], parts['b'][k], parts['out'][k]])
            tiles += [np.clip(parts['a'][-1], 0, 1), np.clip(parts['b'][-1], 0, 1), np.clip(parts['out'][-1], 0, 1)]
            tiles += [np.clip(np.sum(parts['a'], axis=0), 0, 1), np.clip(np.sum(parts['b'], axis=0), 0, 1), result_s]
            save(montage(tiles, 3, gap=8), out / 'bands.webp', max_side=2400)
            save(np.clip(full['sum_a'], 0, 1), out / 'masked_a.jpg')
            save(np.clip(full['sum_b'], 0, 1), out / 'masked_b.jpg')
        res[name] = r
        print(f'  {name}: {levels} levels, s0 {s0}, mask covers {mask.mean():.1%}')
    R.put('2.4', res)


def stage_blend_color(cfg, R, root, media):
    """Bells & whistles: the same blends in grayscale vs. color, and the effect of
    stack depth on the seam."""
    res = {'_missing': []}
    for entry in _enabled(cfg['blends']):
        name = entry['name']
        gone = _missing(entry, root)
        if gone:
            res['_missing'] += gone
            continue
        out = media / 'blend' / name
        a, b, mask = prepare_pair(entry, root, cfg.get('blend_max_side', 800))
        levels, s0 = entry['levels'], entry['s0']
        gray, _ = blend(to_gray(a), to_gray(b), mask, levels, s0, entry.get('mask_s0'), keep_bands=False)
        save(gray, out / 'gray.jpg')
        depth = {}
        tiles = []
        for n in entry.get('depth_study', [2, 4, levels]):
            im, _ = blend(a, b, mask, n, s0, entry.get('mask_s0'), keep_bands=False)
            save(im, out / f'depth_{n}.jpg')
            tiles.append(im)
            # seam visibility proxy: mean |gradient| in a band around the mask edge
            edge = np.abs(F.gradients(mask)[2]) > 0
            band = F.gaussian_blur(edge.astype(float), 4) > 0.01
            depth[str(n)] = {'seam_gradient': float(F.gradients(to_gray(im))[2][band].mean()),
                             'coarsest_sigma': total_sigmas(n, s0)[-1]}
        save(montage(tiles, len(tiles), gap=8), out / 'depth_compare.webp', max_side=2400)
        res[name] = {'depth': depth}
    R.put('2.4.bw', res)
