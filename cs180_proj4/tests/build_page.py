"""Build index.html from tests/page_template.html. Numbers come from tests/run/*.json
(written by code/main.py) and the points files; code snippets are cut from code/*.py.

    python tests/build_page.py
"""
import ast, html, json, re, sys
from pathlib import Path
import numpy as np
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT / 'code'))
from homography import computeH, residuals, build_system, condition_numbers
RUN = ROOT / 'tests/run'
J = lambda n: json.load(open(RUN / n))


def snippet(path, name):
    src = (ROOT / path).read_text(); tree = ast.parse(src)
    node = next(n for n in ast.walk(tree) if isinstance(n, ast.FunctionDef) and n.name == name)
    lines = src.splitlines()[node.lineno - 1:node.end_lineno]
    if ast.get_docstring(node):
        d = node.body[0]; drop = set(range(d.lineno - node.lineno, d.end_lineno - node.lineno + 1))
        lines = [l for i, l in enumerate(lines) if i not in drop]
    return html.escape('\n'.join(lines))


def tex_matrix(M, fmt='{:.4g}'):
    rows = [' & '.join(fmt.format(v) for v in r) for r in np.asarray(M)]
    return r'\begin{bmatrix}' + r' \\ '.join(rows) + r'\end{bmatrix}'


def sci(x):
    m, e = f'{x:.1e}'.split('e'); return f'{m} × 10<sup>{int(e)}</sup>'


def build():
    V = {}
    C = json.load(open(ROOT / 'points/correspondences.json'))
    mos, rect, wide, foc, figs = J('mosaics.json'), J('rectify.json'), J('wide.json'), J('focal_search.json'), J('figures.json')
    Rq = json.load(open(ROOT / 'points/rectification.json'))
    # A.1 / A.2 ------------------------------------------------------------
    rows = []
    for k in ('theatre_12', 'theatre_23', 'rooftop_12', 'rooftop_23', 'lawn_12', 'lawn_23', 'lawn_34', 'street_12', 'street_23'):
        c = C[k]; H = computeH(c['im1_pts'], c['im2_pts']); r = residuals(H, c['im1_pts'], c['im2_pts'])
        rows.append(f"<tr><td>{k.replace('_', ' ', 1)[:-2]} {k[-2]} → {k[-1]}</td><td>{len(r)}</td>"
                    f"<td>{np.median(r):.2f} px</td><td>{r.max():.2f} px</td></tr>")
        V[f'H_{k}'] = tex_matrix(H)
    V['h_rows'] = '\n          '.join(rows)
    meds, maxs = [], []
    for k, c2 in C.items():
        r2 = residuals(computeH(c2['im1_pts'], c2['im2_pts']), c2['im1_pts'], c2['im2_pts'])
        meds.append(np.median(r2)); maxs.append(r2.max())
    V.update(n_pairs=len(C), all_med_lo=f'{min(meds):.2f}', all_med_hi=f'{max(meds):.2f}', all_max=f'{max(maxs):.2f}')
    c = C['theatre_12']
    A, b = build_system(c['im1_pts'][:2], c['im2_pts'][:2])
    V['sys_A'] = tex_matrix(A, '{:.0f}' if False else '{:.4g}'); V['sys_b'] = tex_matrix(b[:, None], '{:.2f}')
    V['n_theatre'] = len(c['im1_pts'])
    raw, norm = condition_numbers(c['im1_pts'], c['im2_pts'])
    V['cond_raw'], V['cond_norm'] = sci(raw), f'{norm:.1f}'
    V['code_computeH'] = snippet('code/homography.py', 'computeH')
    V['code_system'] = snippet('code/homography.py', 'build_system')
    # A.3 ------------------------------------------------------------------
    rr = []
    for n, lab in (('windows', '4 × 2 window block'), ('cabinet', 'fire-cabinet glass'), ('marquee', 'theatre marquee face')):
        v = rect[n]; rr.append(f"<tr><td>{lab}</td><td>{v['out_size'][0]}×{v['out_size'][1]}</td><td>{v['t_nearest_s'] * 1e3:.0f} ms</td>"
                               f"<td>{v['t_bilinear_s'] * 1e3:.0f} ms</td><td>{v['t_bilinear_s'] / v['t_nearest_s']:.1f}×</td></tr>")
        V[f'aspect_{n}'] = f"{Rq[n]['aspect_h_over_w']:.3f}"
        V[f'Hrect_{n}'] = tex_matrix(v['H'])
    V['rect_rows'] = '\n          '.join(rr)
    V['slow_lo'] = f"{min(rect[n]['t_bilinear_s'] / rect[n]['t_nearest_s'] for n in rect):.1f}"
    V['slow_hi'] = f"{max(rect[n]['t_bilinear_s'] / rect[n]['t_nearest_s'] for n in rect):.1f}"
    V['focal_px'] = f"{wide['focal_exif_px']:.0f}"
    rv, rb = J('relief.json'), J('relief_blind.json')
    V.update(rel_pts=rv['points'], rel_sim=f"{rv['similarity_resid_median_px']:.1f}", rel_sim90=f"{rv['similarity_resid_p90_px']:.1f}",
             rel_aff=f"{rv['affine_resid_median_px']:.1f}", rel_hom=f"{rv['homography_resid_median_px']:.1f}",
             rel_aniso=f"{(rv['anisotropy'] - 1) * 100:.1f}", rel_rot=f"{abs(rv['rotation_deg']):.2f}",
             rel_w=f"{rv['relief_size_px'][0]:.0f}", rel_h=f"{rv['relief_size_px'][1]:.0f}",
             rel_pct=f"{100 * rv['homography_resid_median_px'] / max(rv['relief_size_px']):.1f}",
             rel_aspect=f"{rb['aspect_h_over_w']:.3f}", rel_sqx=f"{rb['squeeze_x']:.2f}", rel_sqy=f"{rb['squeeze_y']:.2f}",
             rel_up=f"{1 / rb['squeeze_x']:.1f}")
    V['code_nearest'] = snippet('code/warp.py', '_nearest'); V['code_bilinear'] = snippet('code/warp.py', '_bilinear')
    # A.4 ------------------------------------------------------------------
    mr = []
    lab = {'theatre': 'California Theatre', 'rooftop': 'Rooftop (vertical)', 'lawn': 'Lawn + crane', 'street': 'Street', 'goldengate': 'Golden Gate'}
    for n in ('theatre', 'rooftop', 'lawn', 'street'):
        m = mos[n]; g = np.array(m['gains']).mean(1)
        b0 = np.mean(list(m['overlap_diff_before'].values())); b1 = np.mean(list(m['overlap_diff_after'].values()))
        mr.append(f"<tr><td>{lab[n]}</td><td>{len(m['files'])}</td><td>{m['canvas'][0]}×{m['canvas'][1]}</td>"
                  f"<td>{' / '.join(f'{x:.2f}' for x in g)}</td><td>{b0:.3f} → {b1:.3f}</td><td>{m['seconds']:.1f} s</td></tr>")
    V['mos_rows'] = '\n          '.join(mr)
    V['gain_lo'] = f"{min(np.array(mos[n]['gains']).mean(1).min() for n in ('theatre', 'rooftop', 'lawn')):.2f}"
    V['gain_hi'] = f"{max(np.array(mos[n]['gains']).mean(1).max() for n in ('theatre', 'rooftop', 'lawn')):.2f}"
    V['roof_b0'] = f"{np.mean(list(mos['rooftop']['overlap_diff_before'].values())):.3f}"
    V['roof_b1'] = f"{np.mean(list(mos['rooftop']['overlap_diff_after'].values())):.3f}"
    lab2 = {'gg_pan': 'Golden Gate, no flag frame', 'tower': 'Tower, looking up', 'glass': 'Glass building',
            'cars': 'Trees and parked cars', 'yellow': 'Yellow building', 'theatreB': 'Theatre, second take'}
    r2 = []
    for n, l in lab2.items():
        m = mos[n]; g = np.array(m['gains']).mean(1)
        b0 = np.mean(list(m['overlap_diff_before'].values())); b1 = np.mean(list(m['overlap_diff_after'].values()))
        r2.append(f"<tr><td>{l}</td><td>{len(m['files'])}</td><td>{m['canvas'][0]}×{m['canvas'][1]}</td>"
                  f"<td>{' / '.join(f'{x:.2f}' for x in g)}</td><td>{b0:.3f} → {b1:.3f}</td><td>{m['seconds']:.1f} s</td></tr>")
    V['mos_rows2'] = '\n          '.join(r2)
    pano = J('pano.json')
    labp = {'theatre7': 'Theatre street, all 7 frames', 'oldA': 'Old building, sweep 1', 'oldB': 'Old building, sweep 2'}
    pr = []
    for n, l in labp.items():
        q = pano[n]
        pr.append(f"<tr><td>{l}</td><td>{q['n']}</td><td>{q['span_deg']:.0f}°</td><td>{q['focal_fit_px'] / q['focal_exif_px']:.3f}×</td>"
                  f"<td>{min(q['svd_fit_px']):.1f}–{max(q['svd_fit_px']):.1f} px</td><td>{min(q['fit_px']):.1f}–{max(q['fit_px']):.1f} px</td>"
                  f"<td>{q['tilt_deg']:.1f}°</td><td>{q['final'][0]}×{q['final'][1]}</td></tr>")
    V['pano_rows'] = '\n          '.join(pr)
    V['pano_svd_max'] = f"{max(max(q['svd_fit_px']) for q in pano.values()):.0f}"
    V['pano_fit_max'] = f"{max(max(q['fit_px']) for q in pano.values()):.1f}"
    V['oldA_span'] = f"{pano['oldA']['span_deg']:.0f}"
    V['code_chain'] = snippet('code/mosaic.py', 'chain_to_reference')
    V['code_gains'] = snippet('code/blend.py', 'solve_gains')
    V['code_add'] = snippet('code/blend.py', 'add')
    # A.5 ------------------------------------------------------------------
    w = wide
    V.update(w_n=len(w['files']), w_span=f"{w['cylinder']['span_deg']:.0f}", w_turn=f"{sum(w['pair_turn_deg']):.0f}",
             w_fexif=f"{w['focal_exif_px']:.1f}", w_ffit=f"{w['focal_fit_px']:.1f}", w_fratio=f"{w['focal_fit_px'] / w['focal_exif_px']:.3f}",
             w_tilt=f"{w['straighten_tilt_deg']:.1f}",
             w_cyl=f"{w['cylinder']['canvas'][0]}×{w['cylinder']['canvas'][1]}", w_sph=f"{w['sphere']['canvas'][0]}×{w['sphere']['canvas'][1]}",
             w_radius=f"{w['cylinder']['radius_px']:.0f}")
    svd, fit = w['svd_rotation_fit_px'], w['rotation_fit_px']
    V['w_rows'] = '\n          '.join(
        f"<tr><td>{k[5]} → {k[6]}</td><td>{t:.1f}°</td><td>{svd[k]:.1f} px</td><td>{fit[k]:.1f} px</td></tr>"
        for k, t in zip(sorted(fit), w['pair_turn_deg']))
    V['w_svd_lo'], V['w_svd_hi'] = f"{min(svd.values()):.1f}", f"{max(svd.values()):.1f}"
    good = sorted(fit.values())
    V['w_fit_lo'], V['w_fit_hi7'] = f"{good[0]:.1f}", f"{good[-2]:.1f}"
    V['w_fit_max'] = f"{good[-1]:.1f}"
    V['code_fit'] = snippet('code/cylinder.py', 'fit_rotations')
    V['code_sample'] = snippet('code/cylinder.py', 'sample_surface')
    V['code_straighten'] = snippet('code/cylinder.py', 'straighten')
    # fill ------------------------------------------------------------------
    tpl = (ROOT / 'tests/page_template.html').read_text()
    missing = sorted(set(re.findall(r'\{\{(\w+)\}\}', tpl)) - set(V))
    if missing:
        raise SystemExit(f'template keys without a value: {missing}')
    page = re.sub(r'\{\{(\w+)\}\}', lambda m: str(V[m.group(1)]), tpl)
    page = re.sub(r'<img (?![^>]*loading=)', '<img loading="lazy" decoding="async" ', page)
    from PIL import Image as _Im
    def _size(m):                      # reserve each image's space before it loads (no layout shift)
        tag, src = m.group(0), m.group(1)
        if ' width=' in tag or not (ROOT / src).exists():
            return tag
        w, h = _Im.open(ROOT / src).size
        return tag.replace(f'src="{src}"', f'src="{src}" width="{w}" height="{h}"', 1)
    page = re.sub(r'<img [^>]*src="(media/[^"]+)"[^>]*>', _size, page)
    (ROOT / 'index.html').write_text(page)
    srcs = re.findall(r'src="(media/[^"]+)"', page)
    gone = [p for p in srcs if not (ROOT / p).exists()]
    print(f'wrote index.html: {len(page) // 1024} KB, {len(srcs)} images' + (f', MISSING: {gone}' if gone else ', all paths resolve'))


if __name__ == '__main__':
    build()
