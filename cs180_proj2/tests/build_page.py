"""Build index.html from tests/page_template.html.

Every number on the page comes from a results.json written by code/main.py, and
the code snippets are cut straight out of code/*.py, so the page cannot drift
from what actually ran.

    python tests/build_page.py                    # uses tests/run/results.json
    python tests/build_page.py out/results.json   # after your own run
"""
import ast
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

HYBRID_LABEL = {
    'derek_nutmeg': ('Derek + Nutmeg', 'Derek', 'Nutmeg'),
    'dafoe_skull': ('Dafoe + skull', 'Dafoe, calm', 'human skull'),
    'dafoe_expr': ('Calm + manic Dafoe', 'Dafoe, calm', 'Dafoe, manic'),
    'chimp_skull': ('Chimp + skull', 'chimpanzee', 'chimpanzee skull'),
    'bear_skull': ('Bear + skull', 'brown bear', 'bear skull'),
    'dafoe_snl': ('Calm + wild Dafoe', 'Dafoe, calm', 'Dafoe, SNL grin'),
}
BLEND_LABEL = {
    'oraple': 'Oraple',
    'manhattan_clouds': 'Manhattan above the clouds',
    'rocket_space': 'Launch into the Milky Way',
    'dafoe_mouth': 'Mouth transplant',
    'newsom_beard': 'Beard transplant',
    'doctor_space': 'Dark City: the doctor in deep space',
    'train_space': 'Dark City: the night train under star trails',
}


# ------------------------------------------------------------------ formatting

def sec(t):
    return f'{t:.2f} s' if t >= 1 else f'{t * 1e3:.1f} ms' if t >= 1e-3 else f'{t * 1e3:.2f} ms'


def sci(x):
    if x == 0:
        return '0'
    m, e = f'{x:.1e}'.split('e')
    return f'{m} × 10<sup>{int(e)}</sup>'.replace('-', '−')


def pct(x, d=1):
    return f'{100 * x:.{d}f}%'


def num(x, d=2):
    return f'{x:.{d}f}'


# ---------------------------------------------------------------- code snippets

def snippet(path, name, keep_doc=False):
    """Source of one function, docstring removed unless keep_doc."""
    src = (ROOT / path).read_text()
    tree = ast.parse(src)
    node = next(n for n in ast.walk(tree) if isinstance(n, ast.FunctionDef) and n.name == name)
    lines = src.splitlines()[node.lineno - 1:node.end_lineno]
    if not keep_doc and ast.get_docstring(node):
        d = node.body[0]
        drop = set(range(d.lineno - node.lineno, d.end_lineno - node.lineno + 1))
        lines = [ln for i, ln in enumerate(lines) if i not in drop]
    return html.escape('\n'.join(lines))


# ------------------------------------------------------------------------ build

def build(results_path):
    R = json.loads(Path(results_path).read_text())
    V = {}

    # 1.1 -----------------------------------------------------------------
    c = R['1.1']
    t = c['timing_s']
    V.update(conv_h=c['image_shape'][0], conv_w=c['image_shape'][1], conv_px=f"{c['pixels']:,}",
             conv_cases=c['correctness_cases'], conv_worst=sci(c['correctness_worst_abs_err']),
             disp_h=c.get('display_shape', c['image_shape'])[0], disp_w=c.get('display_shape', c['image_shape'])[1])
    rows = []
    names = {'box9': '9×9 box', 'dx': 'D<sub>x</sub> (1×3)', 'dy': 'D<sub>y</sub> (3×1)'}
    for k in ('box9', 'dx', 'dy'):
        tk = t[k]
        err = max(c['max_abs_err_vs_scipy'][k].values())
        rows.append(f"<tr><td>{names[k]}</td><td>{sec(tk['four_loops'])}</td><td>{sec(tk['two_loops'])}</td>"
                    f"<td>{sec(tk['tap_loops'])}</td><td>{sec(tk['scipy'])}</td><td>{sci(err)}</td></tr>")
    V['conv_rows'] = '\n          '.join(rows)
    V['box_four'] = sec(t['box9']['four_loops'])
    V['box_two'] = sec(t['box9']['two_loops'])
    V['box_tap'] = sec(t['box9']['tap_loops'])
    V['box_scipy'] = sec(t['box9']['scipy'])
    V['box_two_speedup'] = f"{t['box9']['four_loops'] / t['box9']['two_loops']:.1f}×"
    V['box_tap_speedup'] = f"{t['box9']['four_loops'] / t['box9']['tap_loops']:.0f}×"
    V['box_tap_vs_scipy'] = f"{t['box9']['scipy'] / t['box9']['tap_loops']:.1f}×"
    V['dx_two_slowdown'] = f"{t['dx']['two_loops'] / t['dx']['four_loops']:.1f}×"
    b = c['boundary']
    V.update(border_zero=num(b['mean_intensity_border_zero']), border_symm=num(b['mean_intensity_border_symm']),
             border_diff=num(b['mean_abs_diff_zero_vs_symm_border'], 3),
             interior_diff=sci(b['mean_abs_diff_zero_vs_symm_interior']))
    V['code_four'] = snippet('code/conv.py', 'conv2d_four_loops')
    V['code_two'] = snippet('code/conv.py', 'conv2d_two_loops')
    V['code_tap'] = snippet('code/conv.py', 'conv2d_tap_loops')
    V['code_prepare'] = snippet('code/conv.py', '_prepare')

    # 1.2 -----------------------------------------------------------------
    e = R['1.2']
    tb = e['trimmed_border_tblr']
    V.update(cam_size=f"{e['image_shape'][1]}×{e['image_shape'][0]}", cam_trim=' / '.join(map(str, tb)),
             fd_t=e['threshold'], fd_frac=pct(e['edge_fraction']), fd_blobs=e['small_blobs'],
             fd_comps=e['components'], fd_p50=num(e['mag_percentiles']['50'], 3),
             fd_p99=num(e['mag_percentiles']['99'], 2))
    def sweep_rows(sw, chosen):
        out = []
        for k, v in sw.items():
            mark = ' class="chosen"' if float(k) == float(chosen) else ''
            tag = ' (chosen)' if mark else ''
            out.append(f"<tr{mark}><td>{k}{tag}</td><td>{pct(v['edge_fraction'])}</td>"
                       f"<td>{v['components']}</td><td>{v['small_blobs']}</td></tr>")
        return '\n          '.join(out)
    V['fd_sweep_rows'] = sweep_rows(e['sweep'], e['threshold'])
    V['fd_sweep_ts'] = ', '.join(e['sweep'])
    ks = list(e['sweep'])
    V['fd_hi_t'] = ks[-1]
    V['fd_hi_blobs'] = e['sweep'][ks[-1]]['small_blobs']
    V['fd_lo_t'] = ks[0]
    V['fd_lo_blobs'] = e['sweep'][ks[0]]['small_blobs']

    # 1.3 -----------------------------------------------------------------
    d = R['1.3']
    V.update(g_sigma=d['sigma'], g_ksize=d['ksize'], dog_shape=f"{d['dog_shape'][0]}×{d['dog_shape'][1]}",
             dog_sum=sci(max(abs(x) for x in d['dog_sum'])), dog_diff=sci(d['max_abs_diff_all']),
             dog_diff_full=sci(d['max_abs_diff_full_zero_pad']), dog_t=d['threshold'],
             dog_frac=pct(d['edge_fraction']), dog_blobs=d['small_blobs'], dog_comps=d['components'],
             fd_blobs_same=d['fd_small_blobs_at_fd_threshold'],
             blob_ratio=f"{d['fd_small_blobs_at_fd_threshold'] / max(d['small_blobs'], 1):.1f}×",
             dog_p99=num(d['mag_percentiles']['99'], 2))
    V['dog_sweep_rows'] = sweep_rows(d['sweep'], d['threshold'])

    # 1.bw ----------------------------------------------------------------
    o = R['1.bw']
    h = o['hist_weighted']                      # 12 bins of 15 deg over [0, 180)
    V.update(atan_max=sci(o['max_abs_err_rad']), atan_mean=sci(o['mean_abs_err_rad']),
             vert_edges=pct(h[0] + h[1] + h[10] + h[11], 0), horiz_edges=pct(sum(h[4:8]), 0))

    # 2.1 -----------------------------------------------------------------
    s = R['2.1']
    V.update(sh_sigma=s['sigma'], sh_alpha=s['alpha'], sh_ksize=int(2 * -(-3 * s['sigma'] // 1) + 1))
    imgs = s['images']
    for k, v in imgs.items():
        V[f'{k}_s0'], V[f'{k}_s1'] = num(v['sharpness_orig'], 3), num(v['sharpness_sharp'], 3)
        V[f'{k}_gain'] = f"{v['sharpness_sharp'] / v['sharpness_orig']:.1f}×"
        V[f'{k}_clip4'] = pct(v['sweep']['4']['clipped_fraction'], 0)
    V['one_vs_two'] = sci(max(v['max_abs_diff_one_filter_vs_two_step'] for v in imgs.values()))
    mind = [v for k, v in imgs.items() if k.startswith('mind')]
    V['mind_gain_lo'] = f"{min(v['sharpness_sharp'] / v['sharpness_orig'] for v in mind):.1f}×"
    V['mind_gain_hi'] = f"{max(v['sharpness_sharp'] / v['sharpness_orig'] for v in mind):.1f}×"
    chosen = ' class="chosen"'
    E = s['eval']
    for tag, ev in E.items():
        best = f"{ev['best_alpha_by_psnr']:g}"
        alphas = list(ev['by_alpha'])
        V.update({f'{tag}_blur': ev['blur_sigma'], f'{tag}_w': ev['shape'][1], f'{tag}_h': ev['shape'][0],
                  f'{tag}_psnr_blur': num(ev['psnr_blurred']), f'{tag}_best': best,
                  f'{tag}_psnr_best': num(ev['by_alpha'][best]['psnr']),
                  f'{tag}_gain': num(ev['by_alpha'][best]['psnr'] - ev['psnr_blurred']),
                  f'{tag}_sharp0': num(ev['sharpness_orig'], 3), f'{tag}_sharpb': num(ev['sharpness_blurred'], 3),
                  f'{tag}_max_alpha': alphas[-1], f'{tag}_psnr_max': num(ev['by_alpha'][alphas[-1]]['psnr']),
                  f'{tag}_sharp_max': num(ev['by_alpha'][alphas[-1]]['sharpness'], 3)})
    rows = []
    for a in E['dog']['by_alpha']:
        cells = ''
        for tag in ('dog', 'car'):
            v = E[tag]['by_alpha'][a]
            mark = ' class="chosen-cell"' if a == V[f'{tag}_best'] else ''
            cells += f"<td{mark}>{num(v['psnr'])} dB</td><td>{num(v['sharpness'], 3)}</td>"
        rows.append(f"<tr><td>{a}</td>{cells}</tr>")
    V['ev_rows'] = '\n          '.join(rows)
    V['code_unsharp'] = snippet('code/filters.py', 'unsharp_kernel')

    # 2.2 -----------------------------------------------------------------
    H = {k: v for k, v in R['2.2'].items() if k != '_missing'}
    rows = []
    for k, v in H.items():
        lab = HYBRID_LABEL.get(k, (k, 'low', 'high'))
        al = v.get('alignment', {})
        how = 'affine, 3 pts' if al.get('method', '').startswith('affine') else 'starter, 2 pts'
        rows.append(f"<tr><td>{lab[0]}</td><td>{lab[1]}</td><td>{lab[2]}</td><td>{how}</td><td>{v['shape'][1]}×{v['shape'][0]}</td>"
                    f"<td>{v['cutoff_low_cpi']:.0f} / {v['cutoff_high_cpi']:.0f}</td><td>{v.get('gain_high', 1):g}</td></tr>")
    V['hy_rows'] = '\n          '.join(rows)
    fav = H['dafoe_skull']
    V.update(fav_n=fav['n_pixels_for_cpi'], fav_sl=f"{fav['sigma_low']:g}", fav_sh=f"{fav['sigma_high']:g}",
             fav_cl=f"{fav['cutoff_low_cpi']:.0f}", fav_ch=f"{fav['cutoff_high_cpi']:.0f}",
             fav_rot=f"{fav['alignment'].get('rotation_deg', 0):.1f}", fav_scale=f"{fav['alignment'].get('scale', 1):.2f}",
             fav_shear=f"{fav['alignment'].get('shear_deg', 0):.1f}")
    widths = [v['shape'][1] for v in H.values()]
    V.update(hy_min_w=min(widths), hy_max_w=max(widths))
    xr = H['chimp_skull']
    V.update(xr_cl=f"{xr['cutoff_low_cpi']:.0f}", xr_ch=f"{xr['cutoff_high_cpi']:.0f}", xr_gain=f"{xr.get('gain_high', 1):g}")
    study = sorted(fav['cutoff_study'].items(), key=lambda kv: kv[1]['cutoff_high_cpi'])
    notes = {0: 'Filters overlap: the cutoffs cross, so both faces share the same band and the image looks like a double exposure at every distance.',
             1: 'Small gap: works up close, but the skull\u2019s teeth and orbits still read from far away.',
             2: 'Chosen: a 4× gap between the cutoffs; the skull vanishes with distance and Dafoe never shows up close.'}
    figs = []
    for i, (tag, v) in enumerate(study):
        figs.append(
            f'<figure><div class="figure-frame"><img src="media/hybrid/dafoe_skull/study_{tag}.jpg" '
            f'alt="Hybrid with low cutoff {v["cutoff_low_cpi"]:.0f} and high cutoff {v["cutoff_high_cpi"]:.0f} cycles per image"></div>'
            f'<div class="figure-frame plain"><img src="media/hybrid/dafoe_skull/study_{tag}_response.png" alt="Filter gains for this setting"></div>'
            f'<figcaption><strong>{v["cutoff_low_cpi"]:.0f} / {v["cutoff_high_cpi"]:.0f} c/i.</strong> {notes.get(i, "")}</figcaption></figure>')
    V['study_figs'] = '\n        '.join(figs)
    ch = {k: v for k, v in R['2.2.bw'].items() if k != '_missing'}
    V['n_hybrids'] = len(ch)
    ratios = [ch[k]['both']['chroma_low'] / max(ch[k]['both']['chroma_high'], 1e-9) for k in ch]
    V.update(chroma_min=f"{min(ratios):.0f}×", chroma_max=f"{max(ratios):.0f}×",
             chroma_low_fav=num(ch['dafoe_skull']['low']['chroma_result'], 3),
             chroma_high_fav=num(ch['dafoe_skull']['high']['chroma_result'], 4),
             chroma_low_dn=num(ch['derek_nutmeg']['low']['chroma_result'], 3),
             chroma_high_dn=num(ch['derek_nutmeg']['high']['chroma_result'], 4))
    V['code_hybrid'] = snippet('code/hybrid.py', 'hybrid_image')

    # 2.3 -----------------------------------------------------------------
    st = R['2.3']
    V.update(st_levels=st['levels'], st_s0=f"{st['s0']:g}",
             st_sigmas=', '.join(f'{x:g}' for x in st['sigma_total']),
             st_err=sci(max(st['recon_err_a'], st['recon_err_b'])),
             st_show=', '.join(map(str, st['show_levels'])))
    V['code_lap'] = snippet('code/stacks.py', 'laplacian_stack')
    V['code_gauss'] = snippet('code/stacks.py', 'gaussian_stack')

    # 2.4 -----------------------------------------------------------------
    B = {k: v for k, v in R['2.4'].items() if k != '_missing'}
    rows = []
    for k, v in B.items():
        m = v['mask']
        kind = {'step': f"step ({m.get('axis', '')})", 'polygon': 'hand-traced polygon',
                'ellipse': 'ellipse', 'file': 'image', 'grabcut': 'rough outline + GrabCut'}.get(m['type'], m['type'])
        if m.get('space'):
            kind += ', warped with its photo'
        rows.append(f"<tr><td>{BLEND_LABEL.get(k, k)}</td><td>{v['shape'][1]}×{v['shape'][0]}</td><td>{kind}</td>"
                    f"<td>{pct(v['mask_fraction'], 0)}</td><td>{v['levels']}</td><td>{v['sigma_total'][-1]:g} px</td></tr>")
    V['bl_rows'] = '\n          '.join(rows)
    D = {k: v['depth'] for k, v in R['2.4.bw'].items() if k != '_missing'}
    drows, drops = [], []
    for k, dep in D.items():
        ks = list(dep)
        first, last = dep[ks[0]]['seam_gradient'], dep[ks[-1]]['seam_gradient']
        drops.append(1 - last / first)
        drows.append(f"<tr><td>{BLEND_LABEL.get(k, k)}</td>" + ''.join(
            f"<td>{dep[x]['seam_gradient']:.4f} ({x})</td>" for x in ks[:3]) +
            (''.join('<td></td>' for _ in range(3 - len(ks[:3])))) + f"<td>−{pct(1 - last / first, 0)}</td></tr>")
    V['depth_rows'] = '\n          '.join(drows)
    V['depth_min'] = pct(min(drops), 0)
    V['depth_max'] = pct(max(drops), 0)
    ranked = sorted(zip(drops, D), reverse=True)
    lab = lambda k: BLEND_LABEL.get(k, k).split(': ')[-1].lower()
    V['depth_top'] = f"{lab(ranked[0][1])} ({pct(ranked[0][0], 0)}) and {lab(ranked[1][1])} ({pct(ranked[1][0], 0)})"
    V['depth_bottom'] = f"{lab(ranked[-1][1])} ({pct(ranked[-1][0], 0)}) and {lab(ranked[-2][1])} ({pct(ranked[-2][0], 0)})"
    V['max_sigma'] = f"{max(v['sigma_total'][-1] for v in B.values()):g}"
    V['code_blend'] = snippet('code/stacks.py', 'blend')

    # fill ------------------------------------------------------------------
    tpl = (ROOT / 'tests' / 'page_template.html').read_text()
    missing = sorted(set(re.findall(r'\{\{(\w+)\}\}', tpl)) - set(V))
    if missing:
        raise SystemExit(f'template keys without a value: {missing}')
    page = re.sub(r'\{\{(\w+)\}\}', lambda m: str(V[m.group(1)]), tpl)
    page = re.sub(r'<img (?![^>]*loading=)', '<img loading="lazy" decoding="async" ', page)
    (ROOT / 'index.html').write_text(page)
    srcs = re.findall(r'src="(media/[^"]+)"', page)
    gone = [p for p in srcs if not (ROOT / p).exists()]
    print(f'wrote index.html: {len(page) // 1024} KB, {len(srcs)} images'
          + (f', MISSING: {gone}' if gone else ', all image paths resolve'))


if __name__ == '__main__':
    build(sys.argv[1] if len(sys.argv) > 1 else ROOT / 'tests' / 'run' / 'results.json')
