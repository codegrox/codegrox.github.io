"""Build cs180_proj3/index.html from the two final result folders.

    python tools/build_page.py PARTA_DIR PARTB_DIR [MNIST_ROOT]

PARTA_DIR = unzipped cs180_proj3_parta_final.zip (img/, metrics.json); PARTB_DIR = unzipped cs180_proj3_partb_final.zip
(denoise/, pure/, time/, class/, class_nosched/, time_plus/, time_plus30/). Every image is copied at its generated
resolution into media/; numbers come from metrics.json / loss_history.csv; code listings are cut from code/.
"""
import ast, csv, html, json, shutil, sys
from collections import defaultdict
from pathlib import Path

import torch
from PIL import Image
from torchvision.transforms.functional import gaussian_blur, to_tensor, to_pil_image
from torchvision.utils import make_grid

ROOT = Path(__file__).resolve().parents[1]
A, B = Path(sys.argv[1]), Path(sys.argv[2])
MNIST_ROOT = Path(sys.argv[3]) if len(sys.argv) > 3 else None
MA, MB, MI = ROOT / 'media' / 'a', ROOT / 'media' / 'b', ROOT / 'media' / 'inputs'
for d in (MA, MB, MI):
    if d.exists():
        shutil.rmtree(d)
    d.mkdir(parents=True)
RA = json.loads((A / 'metrics.json').read_text())
RT = json.loads((B / 'time_plus' / 'metrics.json').read_text())
esc = html.escape
missing = []


# ------------------------------------------------------------------ media helpers
def a(name):
    src = A / 'img' / f'{name}.png'
    if not src.is_file():
        missing.append(str(src))
    else:
        shutil.copy2(src, MA / src.name)
    return f'media/a/{name}.png'


def b(rel):
    src = B / rel
    dst = MB / rel.replace('/', '_')
    if not src.is_file():
        missing.append(str(src))
    else:
        shutil.copy2(src, dst)
    return f'media/b/{dst.name}'


def b_grid(rel, nrow=10):
    """Saved sample tensor -> native-resolution grid PNG (shown with pixelated scaling, never resampled)."""
    x = torch.load(B / rel, map_location='cpu').float().clamp(0, 1)
    g = make_grid(x, nrow=nrow, padding=2, pad_value=0.25)[0]
    name = rel.replace('/', '_').replace('.pt', '_grid.png')
    Image.fromarray((g * 255).round().byte().numpy()).save(MB / name)
    return f'media/b/{name}'


def lowpass_view(name):
    """What a distant viewer sees: the same sigma-16 Gaussian low-pass the hybrid method uses."""
    x = to_tensor(Image.open(A / 'img' / f'{name}.png').convert('RGB'))[None]
    lp = gaussian_blur(x, [265, 265], [16, 16])[0].clamp(0, 1)
    to_pil_image(lp).save(MA / f'{name}_lowpass.png')
    return f'media/a/{name}_lowpass.png'


def fig(src, alt, cap, cls=''):
    c = f' class="{cls}"' if cls else ''
    return (f'<figure><div class="figure-frame"><img loading="lazy" decoding="async"{c} src="{src}" alt="{esc(alt)}">'
            f'</div><figcaption>{cap}</figcaption></figure>')


def grid(n, figs):
    return f'<div class="breakout"><div class="media-grid compare-{n}">' + ''.join(figs) + '</div></div>'


def table(head, rows):
    h = ''.join(f'<th>{x}</th>' for x in head)
    r = ''.join('<tr>' + ''.join(f'<td>{x}</td>' for x in row) + '</tr>' for row in rows)
    return f'<div class="table-wrap"><table><thead><tr>{h}</tr></thead><tbody>{r}</tbody></table></div>'


# ------------------------------------------------------------------ code listings from the code that ran
def listing(src_file, *names):
    p = ROOT / 'code' / src_file
    if p.suffix == '.py':
        sources = [p.read_text()]
    else:
        sources = [''.join(c['source']) for c in json.loads(p.read_text())['cells'] if c['cell_type'] == 'code']
    out = {}
    for src in sources:
        try:
            tree = ast.parse(src)
        except SyntaxError:
            continue
        lines = src.splitlines()
        for node in tree.body:
            if isinstance(node, (ast.FunctionDef, ast.ClassDef)) and node.name in names and node.name not in out:
                start = (node.decorator_list[0].lineno if node.decorator_list else node.lineno) - 1
                seg = lines[start:node.end_lineno]
                drop = set()
                for sub in ast.walk(node):
                    if isinstance(sub, (ast.FunctionDef, ast.ClassDef)) and ast.get_docstring(sub):
                        d = sub.body[0]
                        drop |= set(range(d.lineno - 1 - start, d.end_lineno - start))
                out[node.name] = '\n'.join(l for i, l in enumerate(seg) if i not in drop)
    miss = [n for n in names if n not in out]
    assert not miss, f'{src_file}: missing {miss}'
    return '<pre><code>' + esc('\n\n'.join(out[n] for n in names)) + '</code></pre>'


def epoch_means(rel):
    ep = defaultdict(list)
    for r in csv.DictReader(open(B / rel)):
        ep[int(r['epoch'])].append(float(r['loss']))
    return {k: sum(v) / len(v) for k, v in sorted(ep.items())}, sum(len(v) for v in ep.values())


# Hybrid prompts of the extra candidate cells (their metrics entries were not persisted): read the lists straight
# from those cells in the notebook that ran.
for _c in json.loads((ROOT / 'code' / 'parta.ipynb').read_text())['cells']:
    _src = ''.join(_c['source'])
    for _name in ('FRESH', 'ROUND2'):
        if _src.lstrip().startswith('# 3.4') and f'{_name} = [' in _src:
            for _node in ast.parse(_src).body:
                if isinstance(_node, ast.Assign) and getattr(_node.targets[0], 'id', '') == _name:
                    for _n, _s, _far, _near in ast.literal_eval(_node.value):
                        RA['hybrids'].setdefault(f'{_n}_{_s}', {'seed': _s, 'far': _far, 'near': _near})
T = RA['timing']
f3 = lambda x: f'{x:.3f}'
f4 = lambda x: f'{x:.4f}'
STARTS = ['0.02', '0.04', '0.06', '0.10', '0.14', '0.25', '0.50']
TS = ['0.25', '0.50', '0.75']
S1 = RA['sec1']
V = RA['velocity']


def sweep(prefix, name, label, starts=STARTS, crisp=False):
    figs = [fig(a(f'edit_{name}_original'), f'{label} input', '<strong>Input</strong>', 'crisp' if crisp else '')]
    figs += [fig(a(f'{prefix}_{name}_t_{t}'), f'{label} from t={t}', f'\\(t_0 = {t}\\)') for t in starts]
    return grid(4, figs)


# ================================================================== PART A
P = []
P.append(f'''
  <header class="part-heading reading" id="part-a">
    <div class="eyebrow">Part A</div>
    <h2>Exploring the Power of Flow Models</h2>
    <p>Everything in Part A uses one pretrained text-to-image model, PixNerd-XXL-P16-T2I, which works directly on 512×512 pixels.
    Fixed settings throughout: seed {RA["seed"]}, Euler step \\(h = {RA["step_size"]}\\) (50 steps from pure noise),
    classifier-free guidance \\(w = {RA["cfg_w"]}\\), {esc(RA["gpu"])} in float32 (peak memory {RA["peak_memory_gib"]:.1f} GiB). No training:
    every result below is a different way of <em>integrating the same learned velocity field</em>.</p>
  </header>

  <section id="a-conv" class="project-section">
    <h2>The Flow-Matching Convention</h2>
    <p>Time runs from noise at \\(t = 0\\) to data at \\(t = 1\\). A training input is a straight-line mix of a clean image and Gaussian noise, and the network predicts the velocity of that line:</p>
    <div class="math">\\[x_t = (1-t)\\,\\epsilon + t\\,x_1, \\qquad \\frac{{dx_t}}{{dt}} = x_1 - \\epsilon \\approx v_\\theta(x_t, t, c).\\]</div>
    <p>Each training path is straight, but the model only sees \\(x_t\\), not which clean image it came from, so it learns the <em>average</em> direction over every image consistent with \\(x_t\\). Following that averaged field traces a curved path. That one fact explains most of Section 1: why a single jump is blurry, why many small steps are sharp, and why the update looks the way it does.</p>
    <p>My inputs: John Constable's <em>Wivenhoe Park</em> (1816) for Sections 1.1–1.5; a pixel-art Mount Fuji, a pen-and-ink fantasy tower and two of my own drawings for Section 3.1; and more of my chosen images for the extras. All are center-cropped to 512×512. <a href="#inputs">All my images</a> and <a href="#credits">credits</a> are at the end.</p>
  </section>

  <section id="a11" class="project-section">
    <h2>1.1 Noisy Training Inputs</h2>
    <p>One noise tensor (seed {RA["seed"]}) is drawn once and reused at every \\(t\\), so only the mix changes across the row. The image is also <em>scaled down</em> by \\(t\\), not just noised, which is why \\(t = 0.25\\) is grayer as well as noisier. The notebook asserts both endpoints exactly: \\(t = 0\\) returns the noise and \\(t = 1\\) returns the image.</p>
    {listing("parta.ipynb", "interpolate")}
    {grid(4, [fig(a("sec1_original"), "original", "<strong>Original</strong> \\(x_1\\)")] + [fig(a(f"sec1_noisy_{t}"), f"t={t}", f"\\(x_t\\), \\(t = {t}\\)") for t in TS])}
  </section>

  <section id="a12" class="project-section">
    <h2>1.2 Classical Denoising</h2>
    <p>Dividing by \\(t\\) restores the image's amplitude but scales the noise by the same factor: its standard deviation becomes \\((1-t)/t\\), which is <strong>3</strong> at \\(t = 0.25\\), wider than the image's whole \\([-1, 1]\\) range. I swept σ over {{0.5, 1, 1.5, 2, 3, 4, 6, 8, 12, 16}} and kept the σ with the lowest MSE to the known original.</p>
    {table(["t", "noise std after ÷t", "best σ", "MSE"], [[t, f'{(1 - float(t)) / float(t):.2f}', f'{S1["blur"][t]["best_sigma"]:g}', f4(min(S1["blur"][t]["mse"].values()))] for t in TS])}
    {grid(3, [fig(a(f"sec1_blur_{t}"), f"blur t={t}", f"Blurred, \\(t = {t}\\), σ = {S1['blur'][t]['best_sigma']:g}") for t in TS])}
    <p>The best σ grows quickly as the noise grows (2 → 6 → 12). At \\(t = 0.25\\) the only way to beat the noise is to erase almost all structure, leaving colored blobs where the trees and sky were. A blur cannot tell noise from detail: both are high frequencies, so it removes both.</p>
  </section>

  <section id="a13" class="project-section">
    <h2>1.3 One-Step Denoising</h2>
    <p>One velocity evaluation extrapolates straight to the end: \\(\\hat x_1 = x_t + (1-t)\\,v_\\theta(x_t, t, c)\\) with \\(c\\) = "a high quality photo". The prediction is a velocity, so it is added for the remaining time \\(1 - t\\), not subtracted like a noise estimate.</p>
    {listing("parta.ipynb", "one_step_denoise")}
    {grid(3, [fig(a(f"sec1_onestep_{t}"), f"one step t={t}", f"One step from \\(t = {t}\\) · MSE {f4(S1['one_step_mse'][t])}") for t in TS])}
    <p>Already far better than blurring (MSE {f4(S1["one_step_mse"]["0.50"])} vs {f4(S1["blur_mse_0.50"])} at \\(t = 0.5\\)), because the model knows what images look like. From \\(t = 0.25\\), though, the result is a soft, painterly guess: the house, cows and fence are gone, and the trees are smooth shapes. That is the averaging from the convention above made visible. When many clean images are consistent with the input, one step lands on their average, and an average of sharp images is blurry.</p>
  </section>

  <section id="a14" class="project-section">
    <h2>1.4 Visualizing Velocity</h2>
    <p>I know the exact update that should be added, \\(x_1 - x_t = (1-t)(x_1 - \\epsilon)\\), so I can compare it with what the model adds, \\((1-t)\\hat v_t\\), and map the per-pixel error \\(E_t = \\sqrt{{\\text{{mean}}_{{\\text{{RGB}}}}[(1-t)(\\hat v_t - v_{{\\text{{gt}}}})]^2}}\\). All six updates share one symmetric scale, ±{V["signed_limit_p99"]:.2f} with zero at middle gray. The three error maps share one scale from 0 to {V["error_vmax_p99"]:.3f}. Both limits are the 99th percentile over all three times: the true maxima ({V["signed_limit_max"]:.2f} and {V["error_max"]:.2f}) come from a handful of noise outliers and would flatten everything else to gray or black.</p>
    {listing("parta.ipynb", "velocity_diagnostics")}
    {grid(4, sum([[fig(a(f"sec1_noisy_{t}"), f"noisy {t}", f"\\(x_t\\), \\(t = {t}\\)"), fig(a(f"vel_pred_{t}"), f"pred {t}", "Predicted \\((1-t)\\hat v\\)"), fig(a(f"vel_gt_{t}"), f"gt {t}", "Ground truth \\(x_1 - x_t\\)"), fig(a(f"vel_err_{t}"), f"err {t}", f"Error, mean {f3(V['mean_rms'][t])}")] for t in TS], []))}
    <div class="reading">{fig(a("vel_colorbar"), "error colorbar", "Error scale, shared by all three maps.")}</div>
    {table(["t", "mean |ground-truth update|", "mean RMS error", "error / update"], [[t, f3(V["mean_abs_gt"][t]), f3(V["mean_rms"][t]), f'{V["mean_rms"][t] / V["mean_abs_gt"][t]:.2f}'] for t in TS])}
    <p>The ground-truth update contains the exact noise to remove, so it is grainy. The prediction is smooth, because the model cannot know the particular noise sample and predicts its expected value. The error is therefore largest exactly where the image has fine structure the model cannot recover: the tree line, the fence and the cows light up at \\(t = 0.25\\), while the smooth sky stays dark. As \\(t\\) grows, both the update and the error shrink. The error relative to the update rises from {V["mean_rms"]["0.25"] / V["mean_abs_gt"]["0.25"]:.2f} to {V["mean_rms"]["0.75"] / V["mean_abs_gt"]["0.75"]:.2f}, because late in the path what remains to be added is mostly fine detail, the hardest part to predict.</p>
  </section>

  <section id="a15" class="project-section">
    <h2>1.5 Euler Sampling</h2>
    <p>Euler integration takes a small step along the current velocity and asks again: \\(x_{{t+h}} = x_t + h\\,v_\\theta(x_t, t, c)\\). My sampler fixes the number of steps up front, \\(\\lceil (1 - t_0)/h \\rceil\\), and computes each time as \\(t_0 + kh\\) instead of accumulating \\(t \\mathrel{{+}}= h\\), so float round-off can never add an extra sliver of a step; the last step is shortened to land exactly on \\(t = 1\\). Before using it, the notebook checks it against a constant velocity field: {esc(RA["euler_checks"])}.</p>
    {listing("parta.ipynb", "euler_sample")}
    {grid(3, [fig(a(f"sec1_traj_{t}"), f"t={t}", f"\\(t = {t}\\)") for t in ["0.50", "0.60", "0.70", "0.80", "0.90", "1.00"]])}
    {grid(4, [fig(a("sec1_original"), "original", "<strong>Original</strong>"), fig(a("sec1_blur_0.50"), "blur", f"Blur · MSE {f4(S1['blur_mse_0.50'])}"), fig(a("sec1_onestep_0.50"), "one step", f"One step · MSE {f4(S1['one_step_mse']['0.50'])}"), fig(a("sec1_traj_1.00"), "Euler", f"Euler, 25 steps · MSE {f4(S1['euler_mse'])}")])}
    <p>Euler is the sharpest by far: real cows, a fence, cloud texture. Yet its MSE ({f4(S1["euler_mse"])}) is slightly <em>worse</em> than the one-step result ({f4(S1["one_step_mse"]["0.50"])}). This is not a contradiction. Many steps let the model commit to one specific, sharp image instead of the blurry average, and wherever that image's details differ from Constable's, MSE punishes them more than it punishes blur. MSE rewards the average, while a sampler should produce a <em>plausible</em> image.</p>
  </section>

  <section id="a16" class="project-section">
    <h2>1.6 Sampling from Pure Noise</h2>
    <p>The same sampler from \\(t = 0\\): 50 steps, prompt "a high quality photo", no guidance, seeds {RA["seed"]}–{RA["seed"] + 4}.</p>
    {grid(5, [fig(a(f"conditional_{i}"), f"sample {i}", f"Seed {RA['seed'] + i}") for i in range(5)])}
    <p>All five are people, which shows what the model associates with "a high quality photo". But the faces are often broken: seed 180 has no face at all, and seed 183 is a melted figure. Without guidance the sampler follows the plain conditional velocity, which still carries a lot of the model's generic "any image" behavior, so the prompt pulls only weakly.</p>
  </section>

  <section id="a21" class="project-section">
    <h2>2.1 Classifier-Free Guidance</h2>
    <p>CFG evaluates the same \\(x_t\\) twice, with the prompt and with the empty prompt, and extrapolates past the conditional prediction: \\(v = v_c + w\\,(v_c - v_u)\\). The difference \\(v_c - v_u\\) is the part of the motion that exists <em>because of</em> the prompt; scaling it by \\(w = {RA["cfg_w"]}\\) pushes samples toward images much more typical of it. The notebook checks that \\(w = 0\\) reproduces the plain prediction exactly. Same five noises as 1.6:</p>
    {listing("parta.ipynb", "cfg_velocity")}
    {grid(5, [fig(a(f"cfg_{i}"), f"cfg {i}", f"Seed {RA['seed'] + i}, \\(w = 7\\)") for i in range(5)])}
    <p>Every sample becomes a clean, well-lit studio portrait. The cost is variety: five centered faces with the same framing, lighting and expression. The seeds still decide hair, background and pose (seed 182 keeps its hand at the cheek), so guidance changes how strongly the sampler commits, not where it starts.</p>
  </section>

  <section id="a31" class="project-section">
    <h2>3.1 Image-to-Image Editing</h2>
    <p>Noise a real image to \\(t_0\\) with the interpolation from 1.1, then run guided Euler sampling back to 1 (prompt "a high quality photo", \\(w = 7\\)). The starting time is the edit strength: at \\(t_0 = 0.02\\) only 2% of the image survives and the model mostly invents; at 0.5 half the signal remains and the model only retouches texture. Same noise (seed {RA["seed"]}) for every edit.</p>
    {listing("parta.ipynb", "edit")}
    <h3>Campanile</h3>{sweep("edit", "campanile", "Campanile")}
    <p>The tower's tall white column survives from the very first step: at 0.02 to 0.06 it is a white vase, a cone and a lamp post; from 0.10 on it is the Campanile with its clock face and trees. A tall, bright, centered shape is about all that 2% of the signal can carry.</p>
    <h3>Wivenhoe Park (Constable, 1816)</h3>{sweep("edit", "my_image_1", "Wivenhoe Park")}
    <p>At 0.02 the "high quality photo" prior wins outright (a man at a laptop). From 0.04 to 0.14 only the horizontal banding survives, and it becomes a product shot and then a train in a field. From 0.25 on the painting returns, now looking like a photograph of the park. The scene's layout is the first thing to survive and the brushwork the last.</p>
    <h3>Mount Fuji, pixel art</h3>{sweep("edit", "my_image_2", "Pixel-art Fuji", crisp=True)}
    <p>The bright triangle is lost at 0.02 to 0.06 (soft gray product shots), becomes a photographic snow-capped Fuji at 0.10 to 0.14, and turns back into pixels by 0.50. Between 0.10 and 0.25 the model "un-pixelates" the image, because "a high quality photo" has no room for hard square edges.</p>
    <h3>Web image: a pen-and-ink fantasy tower</h3>{sweep("edit", "web_image", "Fantasy tower")}
    <p>The sheet of paper survives everything: even at 0.02 there is a bright card, held in a hand. From 0.10 the tower is back, first as a 3-D paper sculpture and then as the ink drawing itself. The model reads "photo of a drawing" as the most likely photo.</p>
    <h3>My drawing: a confused pig</h3>{sweep("edit", "drawing_1", "Pig drawing")}
    <h3>My drawing: a kart hitting a wall</h3>{sweep("edit", "drawing_2", "Kart drawing")}
    <p>Flat-color drawings show the sharpest transition. At 0.02 to 0.04 the colors survive but not the content (a red tray, a pink ball, an orange roll, red letters). At 0.06 to 0.10 the drawings come back as cleaner, slightly 3-D cartoons (the pig gets lipstick at 0.10), and from 0.14 on they are left almost untouched. My first run composited these transparent PNGs onto black, which made the model invent dark computer screens around them; the final run puts them on white, as drawn.</p>
  </section>

  <section id="a32" class="project-section">
    <h2>3.2 Text-Guided Editing</h2>
    <p>The same procedure with the generic prompt replaced by a description of the edit. Low starting times give the prompt room to win; high ones keep the layout and change only the surface.</p>
''')
OBS32 = {'campanile': 'From 0.02 to 0.06 it is a genuine rocket on a launch pad, with gantry towers to the right where the Campanile had trees. By 0.10 to 0.14 it is a hybrid: the tower has turned into a white rocket body with a blue band, still with the clock-face window. From 0.25 the Campanile wins again.',
         'my_image_1': 'The cleanest edit of the three: winter arrives by 0.02 and stays through 0.14, with bare trees, snow on the banks and a frozen lake in the same composition. At 0.25 only a pale, wintry cast remains, and at 0.50 the summer painting is back.',
         'my_image_2': 'Sunset is easy because the input already has a pink sky: pink-orange skies and snow fields through 0.06, then a photographic white Fuji with dark pines from 0.10 to 0.25, and pixel art again at 0.50.'}
for name, label in [('campanile', 'Campanile'), ('my_image_1', 'Wivenhoe Park'), ('my_image_2', 'Pixel-art Fuji')]:
    P.append(f'<h3>{label}</h3><p class="prompt">“{esc(RA["text_edit_prompts"][name])}”</p>{sweep("text_edit", name, label)}<p>{OBS32[name]}</p>')
P.append('</section>')

P.append(f'''
  <section id="a33" class="project-section">
    <h2>3.3 Visual Anagrams</h2>
    <p>One image, two prompts. At every Euler step the velocity is the average of the guided velocity for prompt \\(a\\) on the image and the guided velocity for prompt \\(b\\) on the image rotated 180°, rotated back. Rotation by 180° flips both axes (it is not a mirror) and is its own inverse, which the notebook checks.</p>
    {listing("parta.ipynb", "visual_anagrams")}
    {grid(2, [fig(a("anagram_0"), "old man", "“an oil painting of an old man”"), fig(a("anagram_0_rotated"), "campfire", "Rotated 180°: “an oil painting of people around a campfire”")])}
    <p>The stronger of the two. The old man's lit forehead and beard become, upside down, the firelight and the huddled figures. Both prompts want a dark background with one warm, bright center, so they can share almost every pixel.</p>
    {grid(2, [fig(a("anagram_1"), "village", "“a lithograph of a snowy mountain village”"), fig(a("anagram_1_rotated"), "horse", "Rotated 180°: “a lithograph of a horse”")])}
    <p>Readable both ways but weaker: the village's mountain becomes the horse's neck and the houses become its legs. Both views stay faint, because pencil lithographs are mostly white paper and give the two prompts few dark pixels to share.</p>
  </section>
''')

HY = [('skull_waterfall', 'Hybrid 1: skull / waterfall'), ('panda_bamboo_182', 'Hybrid 2: panda / bamboo'), ('owlface_forest_182', 'Bonus: owl / pine forest')]
fig_h = []
for name, title in HY:
    meta = RA['hybrids'][name]
    src = a(f'hybrid_{name}')
    a(f'hybrid_{name}_small')
    lp = lowpass_view(f'hybrid_{name}')
    fig_h.append(f'<h3>{title}</h3>' + grid(2, [
        f'''<figure data-distance><div class="figure-frame"><div class="distance-view"><img src="{src}" alt="hybrid {esc(name)}"></div></div>
<div class="distance-control"><span class="small-ui">Near</span><input type="range" min="0" max="100" value="0" aria-label="Simulated viewing distance"><span class="small-ui">Far</span></div>
<figcaption><strong>Near</strong>: “{esc(meta["near"])}”. Drag the slider to step back.</figcaption></figure>''',
        fig(lp, 'low-pass view', f'<strong>Far</strong> (the σ = 16 low-pass the method takes from the far prompt): “{esc(meta["far"])}” · seed {meta["seed"]}')]))
FAILS = ['cat_forest', 'owl_cathedral_180', 'oldman_mountains_180', 'lion_waves_180', 'face_cliffs_180', 'woman_flowers_180']
fail_figs = []
for n in FAILS:
    meta = RA['hybrids'][n]
    a(f'hybrid_{n}')
    fail_figs.append(fig(lowpass_view(f'hybrid_{n}'), n, f'Far view of “{esc(meta["far"].split(",")[0])}” + “{esc(meta["near"].split(",")[0])}”'))
P.append(f'''
  <section id="a34" class="project-section">
    <h2>3.4 Hybrid Images</h2>
    <p>Factorized diffusion, the same idea as Project 2's hybrids but applied to velocities instead of finished images: \\(v = f_{{\\text{{low}}}}(v_a) + v_b - f_{{\\text{{low}}}}(v_b)\\), with \\(f_{{\\text{{low}}}}\\) the provided Gaussian blur (kernel 265, σ = 16). The far prompt \\(a\\) decides the coarse layout seen from across the room; the near prompt \\(b\\) fills in the detail seen up close.</p>
    {listing("parta.ipynb", "make_hybrids")}
    {''.join(fig_h)}
    <p>The skull reuses the course's example pair, so I wanted a second, distinct one. Finding it took 20 candidates, and the failures explain why. A σ = 16 blur at 512 px keeps only features larger than about 50 px, so the far subject has to be recognizable from a few big dark shapes on a light field. The skull's eye sockets and the panda's eye patches and ears pass that test. A cat's or a man's eyes are too small, and tall cathedrals and tree trunks put strong vertical detail everywhere, which drowns out the far subject. Some of the failures, seen from far away:</p>
    {grid(3, fail_figs)}
    <p>Evaluating candidates with this low-pass view was a lesson in itself. My first previews shrank each image to 64 px and enlarged it with blocky pixels, which made the owl look like a failure when it actually reads.</p>
  </section>
''')

AN = [('rot90', 0, 181, 'Turned 90°', 'rabbit / duck'), ('rot90', 1, 180, 'Turned 90°', 'sailing ship / horse'),
      ('negate', 0, 181, 'Color negative', 'owl / lighthouse'), ('negate', 1, 183, 'Color negative', 'snowy village / old man')]
an_figs = []
for tr, i, s, lab, title in AN:
    meta = RA['anagrams_280'].get(f'anagram_{tr}_{i}_s{s}') or {'identity_prompt': 'a charcoal drawing of a snowy village', 'transformed_prompt': 'a charcoal drawing of an old man'}
    an_figs.append(f'<h3>{title}</h3>' + grid(2, [fig(a(f'anagram_{tr}_{i}_s{s}'), title, f'“{esc(meta["identity_prompt"])}” · seed {s}'),
                                                  fig(a(f'anagram_{tr}_{i}_s{s}_view'), title + ' transformed', f'{lab}: “{esc(meta["transformed_prompt"])}”')]))
P.append(f'''
  <header class="part-heading reading" id="b-w-a">
    <div class="eyebrow">Part A · Bells &amp; Whistles (required for CS280A)</div>
    <h2>More Visual Anagrams, and a Course Logo</h2>
  </header>

  <section id="a-bw-anagrams" class="project-section">
    <h2>Two More Anagram Transformations</h2>
    <p>The Visual Anagrams paper shows that the 180° trick works for any transformation that is an <em>orthogonal</em> map on pixels: it moves or flips pixels without blending them, so Gaussian noise stays Gaussian noise and both views can be denoised at once. PixNerd works on pixels directly, with no latent decoder in the way, so these apply exactly. I chose a <strong>90° rotation</strong> (inverse: a −90° turn) and the <strong>color negative</strong> \\(x \\mapsto -x\\) in \\([-1, 1]\\) pixel space, which is its own inverse. The velocity rule is unchanged: \\(v = \\tfrac12\\big(v_a(x) + T^{{-1}} v_b(Tx)\\big)\\). Each pair ran with several seeds; the best is shown.</p>
    {listing("parta.ipynb", "anagram_T")}
    {''.join(an_figs)}
    <p>The 90° rotation works best when both subjects are animals or objects in profile, which can share a silhouette at right angles: the rabbit's back becomes the duck's head, and the ship's black sails become the horse's neck. The color negative is harder, because the two views have to share <em>edges</em> while swapping light and dark. Charcoal and ink help: a snowy village is mostly white, so its negative is mostly black, which is where a dark portrait lives, and seed 183's white roofs become an old man in a hat. That pair needed five seeds; seeds 180 and 184 stayed faint.</p>
  </section>

  <section id="a-bw-logo" class="project-section">
    <h2>A Course Logo</h2>
    <p>Text-guided image-to-image editing (Section 3.2's procedure) starting from my own drawings: my hand sketch of red "CS180" letters filling a circle, and a cleaned-up version I drew in code, with condensed letters whose heights follow the circle, in Berkeley Blue and California Gold (<code>tools/make_logo.py</code>). Emblem prompt: “{esc(RA["logos"]["cs180"]["prompt"])}”. Pin prompt: “{esc(RA["logos"]["cs180_pin"]["prompt"])}”.</p>
    {grid(4, [fig(a("logo_sketch_original"), "my sketch", "<strong>My sketch</strong>"), fig(a("logo_cs180_original"), "emblem", "<strong>Cleaned-up emblem</strong> (drawn in code)"), fig(a("logo_cs180_pin_t_0.10"), "pin 0.10", "<strong>Final logo</strong>: enamel pin, \\(t_0 = 0.10\\)"), fig(a("logo_cs180_pin_t_0.08"), "pin 0.08", "Enamel pin, \\(t_0 = 0.08\\)")])}
    <h3>The enamel pin across starting times</h3>
    {grid(4, [fig(a(f"logo_cs180_pin_t_{t}"), f"pin {t}", f"\\(t_0 = {t}\\)") for t in ["0.04", "0.06", "0.08", "0.10", "0.14", "0.25"]] + [fig(a(f"logo_cs180_t_{t}"), f"flat {t}", f"Flat emblem, \\(t_0 = {t}\\)") for t in ["0.04", "0.10"]])}
    <h3>Starting from the hand sketch</h3>
    {grid(4, [fig(a(f"logo_sketch_t_{t}"), f"sketch {t}", f"\\(t_0 = {t}\\)") for t in ["0.02", "0.04", "0.06", "0.08", "0.10", "0.14", "0.25"]] + [fig(a("logo_sketch_red_t_0.04"), "red prompt", "Red-letter prompt, \\(t_0 = 0.04\\)")])}
    <p>The model cannot spell. At \\(t_0 \\le 0.06\\) it redesigns the logo freely and the letters become inventions ("CBCO", "4524", scrambled glyphs). From 0.14 on the input is already a clean logo, so the edit changes almost nothing. The useful window is narrow, \\(t_0 \\approx 0.08\\)–\\(0.10\\): late enough that the letter shapes are fixed, early enough that the model can still add gloss, an embossed rim and a shadow. My hand sketch never becomes a readable logo, because its thin, wobbly strokes carry too little signal at the early starts and are simply kept at the late ones. That is why I drew the clean emblem first: the model is a good finisher but a bad letterer.</p>
  </section>

  <header class="part-heading reading" id="own-a">
    <div class="eyebrow">Part A · Own ideas (optional)</div>
    <h2>Step Counts, Inpainting, Multi-View Anagrams, and "Make It Real"</h2>
  </header>

  <section id="a-steps" class="project-section">
    <h2>How Few Euler Steps Are Enough?</h2>
    <p>Same seed, prompt and guidance (\\(w = 7\\)) as Section 2.1, with \\(h = 1/n\\):</p>
    {grid(4, [fig(a(f"steps_{n}"), f"{n} steps", f"{n} steps") for n in (5, 10, 25, 50)])}
    <p>With 5 or 10 steps the image is an orange-and-black blur: each step jumps a fifth or a tenth of the way along a velocity that is only valid locally, and a curved path cut into five straight pieces misses badly. At 25 steps it is a sharp, plausible face, but a <em>different</em> person from the 50-step result, because small early errors send it toward a different image. The learned flow is far from straight.</p>
  </section>

  <section id="a-inpaint" class="project-section">
    <h2>Inpainting: Remove, Replace, Swap</h2>
    <p>Generate only inside a mask. After every Euler step the known pixels are reset to exactly where they would be on their own straight path, \\((1-t)\\epsilon + t\\,y\\), so the masked region is generated to fit a known context.</p>
    {listing("parta.ipynb", "inpaint")}
    <h3>Replace: Constable's cows become horses</h3>
    {grid(3, [fig(a("inpaint_replace_cows_input"), "input", "Input"), fig(a("inpaint_replace_cows_s181"), "horses 181", "“…two brown horses grazing…”, seed 181"), fig(a("inpaint_replace_cows_s180"), "horses 180", "Seed 180")])}
    <p>Seed 181 is the result I hoped for: small brown horses at the water's edge, painted in Constable's style. Seed 180 paints one giant horse, because the mask is a box and nothing tells the model the right scale.</p>
    <h3>Swap: the cows and the house trade places</h3>
    {grid(4, [fig(a("inpaint_swap_cows_house_input"), "swap input", "Cut-and-paste swap (input)"), fig(a("inpaint_swap_cows_house_s181"), "t0.3", "Regenerated from \\(t_0 = 0.3\\)"), fig(a("inpaint_v2_swap_t0.50_s180"), "t0.5", "From \\(t_0 = 0.5\\)"), fig(a("inpaint_v2_swap_t0.60_s180"), "t0.6", "From \\(t_0 = 0.6\\)")])}
    <p>I cut out the cows and the red house, swapped them (each resized to the other's box) and regenerated both boxes plus a feathered border. From \\(t_0 = 0.3\\) the model <em>undoes</em> the swap: it puts a house back on the hill and animals back on the bank, because that is the more probable painting. From 0.5 or 0.6 there is too little freedom left to reverse it, so the swap stays and only its edges are blended: cows on the far hill, a red house on the near bank.</p>
    <h3>Remove: the Campanile, four ways</h3>
    {grid(4, [fig(a("inpaint_remove_campanile_input"), "input", "Input"), fig(a("inpaint_v2_remove_campanile_s181"), "plain", "Plain inpainting, \\(w = 7\\), feathered mask"), fig(a("inpaint_v3_remove_campanile_w2_s181"), "low w", "Neutral prompt, \\(w = 2\\)"), fig(a("inpaint_v4_repaint_w3_s181"), "repaint", "<strong>RePaint resampling</strong>, \\(w = 3\\)")])}
    <p>The hardest of the three, and the most instructive. Plain inpainting removes the tower but leaves a vivid cyan strip, for two reasons that add up. Guidance at \\(w = 7\\) pushes the new sky toward an idealized "clear blue sky", and the strip's color is decided in the first steps, when the surrounding sky is still mostly noise, and is never revisited. With low guidance and a neutral prompt the colors match, but the model fills the tall, tower-shaped hole with a tall object, a stretched face (or a brick chimney in seed 180): the mask's shape is itself a hint. The fix is RePaint-style resampling. Every 5-step stretch is run, re-noised back to where it started (exactly onto the straight path's noise level) and run again, three times, so the filled strip keeps re-adjusting to the real pixels around it. With \\(w = 3\\) and a "no tower" prompt, seed 181 is seamless. At \\(w = 5\\) the bright strip comes back, which confirms that guidance strength, not the mask, caused the color shift.</p>
    {listing("parta.ipynb", "inpaint_repaint")}
  </section>

  <section id="a-multi" class="project-section">
    <h2>Four- and Six-Way Rotation Anagrams</h2>
    <p>The Section 3.3 rule extended to \\(N\\) views, \\(v = \\tfrac1N \\sum_k T_k^{{-1}} v_k(T_k x)\\), each view with its own prompt. Four views use exact 90° turns. For six, a 60° turn cannot be done exactly on a square grid, so I rotate only the inscribed disc, ring by ring: each one-pixel ring's pixels are sorted by angle and shifted cyclically by one sixth, with the few leftover pixels held fixed. That is an exact permutation, so it is orthogonal, and six turns are exactly the identity, which the notebook checks.</p>
    {listing("parta.ipynb", "ring_rotation", "multiview_anagram")}
    <h3>Four views: horse, ship, old man, rabbit</h3>
    {grid(4, [fig(a(f"rot4_s181_view{k}"), f"view {k}", f"{90 * k}°: {['horse', 'sailing ship', 'old man', 'rabbit'][k]}") for k in range(4)])}
    <p>Each subject is readable in its own orientation, though as faint pencil drawings that share a lot of strokes: each prompt now gets only a quarter of the velocity's pull.</p>
    <h3>Six views: three attempts, three different failures</h3>
    {grid(3, [fig(a(f"rot6_s180_view{k}"), f"take 1 view {k}", f"Take 1 (lithograph, \\(w = 7\\)), {60 * k}°: {['horse', 'ship', 'old man', 'rabbit', 'owl', 'castle'][k]}") for k in range(6)])}
    {grid(3, [fig(a(f"rot6b_s180_view{k}"), f"take 2 view {k}", f"Take 2 (bold woodcut, \\(w = 10\\)), {60 * k}°") for k in (0, 2, 4)] + [fig(a(f"rot6c_w7_s183_view{k}"), f"take 3 view {k}", f"Take 3 (oil painting, \\(w = 7\\)), {60 * k}°") for k in (0, 2, 4)])}
    <p>A genuine limitation of the method, not a bug. With six prompts averaged, each keeps only a sixth of its pull. Take 1's thin lithograph lines faded, and only the horse and the open-mouthed old man read. A bold woodcut style with stronger guidance (take 2) overshot into solid black blobs. An oil-painting style (take 3) found the easiest way to satisfy all six views at once: one furry animal face, half cat and half owl, that looks almost the same at every rotation. The Visual Anagrams paper also reports quality dropping as views are added; six prompts sharing one picture is too much to ask.</p>
  </section>

  <section id="a-real" class="project-section">
    <h2>"Make It Real" on Paintings, Prints and Pixel Art</h2>
    <p>Section 3.1's edit on six more of my chosen images, at the two starting times where the earlier sweeps changed the most.</p>
''')
EXTRA = [('vouet_portrait', 'Simon Vouet, self-portrait'), ('saturn_1874', 'Trouvelot, The Planet Saturn (1874)'),
         ('comet_1881', 'Trouvelot, The Great Comet of 1881'), ('seascape_rain', 'Constable, Seascape Study with Rain Cloud'),
         ('chalk_cliffs', 'Friedrich, Chalk Cliffs on Rügen'), ('pixel_statue', 'Pixel-art statue')]
P.append(grid(3, sum([[fig(a(f'extra_{n}_original'), lab, f'<strong>{esc(lab)}</strong>', 'crisp' if 'pixel' in n else ''),
                       fig(a(f'extra_{n}_t_0.10'), lab + ' 0.10', '\\(t_0 = 0.10\\)'), fig(a(f'extra_{n}_t_0.25'), lab + ' 0.25', '\\(t_0 = 0.25\\)')] for n, lab in EXTRA], [])))
P.append('''<p>At \\(t_0 = 0.25\\) all six become photographs of what they show: Vouet a real man in a ruffled collar, the rain cloud a real storm, the pixel statue a bronze one. At 0.10 the subject is usually lost to the "photo" prior: Saturn becomes a pair of hands, the comet a building, the chalk cliffs a hand holding a phone, and Vouet a different person, with only the white collar and the pose surviving. Identity survives only above a certain starting time, and that time depends on how much of the identity lives in coarse shapes.</p></section>''')

rows = [[esc(k), f'{v["seconds"] / 60:.1f} min', f'{v["network_evals"]:,}', f'{v["seconds_per_eval"]:.3f} s'] for k, v in T.items()]
P.append(f'''
  <section id="a-cost" class="project-section">
    <h2>Part A Compute</h2>
    <p>Measured in the notebook on {esc(RA["gpu"])}. One network evaluation is one forward pass of the 512×512 model, and each guided step costs two. Sections re-run after a runtime restart count only the new work.</p>
    {table(["Section", "Wall time", "Network evaluations", "Per evaluation"], rows)}
  </section>
''')

# ================================================================== PART B
dm, dn = epoch_means('denoise/loss_history.csv')
pm, _ = epoch_means('pure/loss_history.csv')
tm, tn = epoch_means('time/loss_history.csv')
cm, _ = epoch_means('class/loss_history.csv')
nm, _ = epoch_means('class_nosched/loss_history.csv')
pm30, _ = epoch_means('time_plus30/loss_history.csv')
mn, floor = None, None
if MNIST_ROOT:
    import torchvision
    ds = torchvision.datasets.MNIST(str(MNIST_ROOT), train=True, download=False)
    x_tr = ds.data.float().div(255)
    mean_img = x_tr.mean(0)
    floor = float(((x_tr - mean_img) ** 2).mean())
    Image.fromarray((mean_img * 255).round().byte().numpy()).save(MB / 'mnist_mean.png')
    mn = 'media/b/mnist_mean.png'
assert floor is not None, 'pass the MNIST root as the third argument (needed for the measured pure-noise floor)'
base, imp, imp30 = RT['baseline'], RT['improved'], RT['improved_30']
SW = RT['step_sweep']
CR = 'crisp'
P.append(f'''
  <header class="part-heading reading" id="part-b">
    <div class="eyebrow">Part B</div>
    <h2>Flow Matching from Scratch</h2>
    <p>A UNet built from the assignment's blocks, trained on the 60,000 MNIST training digits: first as a one-step denoiser, then as time-conditioned and class-conditioned flow-matching models. Trained on a Tesla T4 (all required experiments together: 41.8 min), seed 180, pixels in \\([0, 1]\\). Digit grids are shown at their native 28-pixel resolution, enlarged with pixel-exact scaling.</p>
  </header>

  <section id="b11" class="project-section">
    <h2>1.1 The UNet</h2>
    <p>Two downsampling blocks take 28×28 to 7×7, an average pool collapses 7×7 to a single vector (the bottleneck that sees the whole digit at once), and a 7×7 transposed convolution expands it back. Every decoder stage concatenates the encoder features of the same resolution, so stroke positions never have to squeeze through the bottleneck. One class covers all three modes: no conditioning, time, and time plus class.</p>
    {listing("partb_train.py", "UNet")}
  </section>

  <section id="b12" class="project-section">
    <h2>1.2 The Noising Process</h2>
    <p>\\(z = x + \\sigma\\epsilon\\) on the first ten test digits with one fixed noise draw; rows are σ = 0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0.</p>
    <div class="reading">{fig(b("denoise/noise_levels_10.png"), "noise levels", "Noise levels by row.", CR)}</div>
  </section>

  <section id="b121" class="project-section">
    <h2>1.2.1 Training the Denoiser (σ = 0.5)</h2>
    <p>\\(D = 128\\), batch 256, Adam at 1e-4, 5 epochs = {dn:,} steps, MSE to the clean digit. A fresh \\(\\epsilon\\) is drawn for every batch as it leaves the loader, so the network never sees the same noisy image twice. Mean training loss per epoch: {", ".join(f4(v) for v in dm.values())}.</p>
    {grid(2, [fig(b("denoise/denoise_epoch1.png"), "epoch 1", "<strong>Epoch 1.</strong> Rows: clean, noisy (σ = 0.5), denoised.", CR), fig(b("denoise/denoise_epoch5.png"), "epoch 5", "<strong>Epoch 5.</strong>", CR)])}
    <div class="reading">{fig(b("denoise/training_loss.png"), "loss", "Training loss, every step.")}</div>
    <p>After one epoch the digits are recovered but soft, with a gray haze where the noise was; after five the strokes are crisp and the background black. The loss halves in the first epoch, and most of what follows is sharpening.</p>
  </section>

  <section id="b122" class="project-section">
    <h2>1.2.2 Out-of-Distribution Noise Levels</h2>
    <p>The σ = 0.5 model on the same digits and noise at every σ; rows alternate noisy input and output, σ = 0 to 1.</p>
    <div class="reading">{fig(b("denoise/denoise_ood.png"), "ood", "Pairs of rows: input, then denoised, for σ = 0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0.", CR)}</div>
    <p>Below the training level (σ ≤ 0.4) it is nearly perfect: removing less noise than it expects costs nothing. Above it, it degrades gracefully: at σ = 0.6 the digits are still clean, at 0.8 strokes start to break, and at 1.0 spurious blobs appear and the 2 and 4 grow extra strokes. The network has learned "remove about this much noise", and when there is more, the leftover noise gets drawn as structure.</p>
  </section>

  <section id="b123" class="project-section">
    <h2>1.2.3 Denoising Pure Noise</h2>
    <p>Same network and schedule, but the input is \\(\\epsilon\\) alone, which carries no information about which digit is the target. Mean training loss per epoch: {", ".join(f4(v) for v in pm.values())}.</p>
    {grid(2, [fig(b("pure/pure_epoch1.png"), "pure 1", "<strong>Epoch 1.</strong> Top: noise inputs; bottom: outputs.", CR), fig(b("pure/pure_epoch5.png"), "pure 5", "<strong>Epoch 5.</strong>", CR)])}
    {grid(2, [fig(b("pure/training_loss.png"), "pure loss", "Training loss."), fig(mn, "mean digit", "The pixel-wise mean of all 60,000 training digits.", CR)])}
    <div class="panel corner-ticks reading"><div class="panel-title">Why every output is the same blur</div>
    <p>With an MSE loss, the best possible prediction is the conditional mean \\(\\mathbb{{E}}[x \\mid z]\\). When \\(z\\) is independent of \\(x\\), that is just \\(\\mathbb{{E}}[x]\\), the centroid of the training set: one fixed image whatever the input. The loss proves it. It flattens at {f4(pm[5])}, and I measured the lowest loss any constant output can reach (the pixel variance of the training digits around their mean) at <strong>{floor:.4f}</strong>. The network has hit that floor: it ignores its input and outputs the average digit, a superimposed 0/3/8-like smudge. This is why generation needs many small steps from noise rather than one.</p></div>
  </section>

  <section id="b21" class="project-section">
    <h2>2.1–2.3 Time-Conditioned Flow Matching</h2>
    <p>Train on \\(x_t = (1-t)x_0 + t x_1\\) with random \\(t\\) and regress the velocity \\(x_1 - x_0\\). The same \\(x_t\\) needs very different velocities early (mostly noise) and late (almost a digit), so \\(t\\), already in \\([0, 1]\\), enters through two small fully connected blocks that scale the bottleneck and the first decoder stage channel by channel. \\(D = 64\\), batch 64, 10 epochs = {tn:,} steps, Adam from 1e-2 with ExponentialLR (γ = 0.1<sup>1/10</sup>) stepped once per epoch. Sampling: 50 Euler steps of 1/50.</p>
    {listing("partb_train.py", "flow_sample")}
    {grid(3, [fig(b(f"time/time_epoch{e}.png"), f"time {e}", f"<strong>Epoch {e}</strong> · mean loss {f4(tm[e])}", CR) for e in (1, 5, 10)])}
    <div class="reading">{fig(b("time/training_loss.png"), "time loss", "Training loss.")}</div>
    <p>Epoch 1 is scribbles with digit-like strokes. By epoch 5 most samples are legible, and epoch 10 mainly cleans up their strokes. The same 40 starting noises give the same digits at epochs 5 and 10, so the model is refining a fixed mapping rather than changing its mind. Several samples still hesitate between two digits (an 8 that is half 3, a 4 that is half 9), because a time-only model has to pick a class on its own.</p>
  </section>

  <section id="b24" class="project-section">
    <h2>2.4–2.6 Class Conditioning with Classifier-Free Guidance</h2>
    <p>Two more blocks take a one-hot digit label and scale the same two feature maps, while \\(t\\) now shifts them (\\(c_1 \\cdot h + t_1\\)). For 10% of training images the label is zeroed, so the same network also learns the unconditional velocity. Sampling uses 300 Euler steps and \\(v = v_u + \\gamma(v_c - v_u)\\) with γ = 5, the Part B guidance convention. Each row is the digits 0–9, with the same starting noise at every epoch.</p>
    {grid(3, [fig(b(f"class/class_epoch{e}.png"), f"class {e}", f"<strong>Epoch {e}</strong> · mean loss {f4(cm[e])}", CR) for e in (1, 5, 10)])}
    {grid(2, [fig(b("class/training_loss.png"), "class loss", "Training loss."), fig(b("class/class_sampling.gif"), "sampling gif", "Epoch-10 sampler: noise to digits over the 300 steps.", CR)])}
    <p>Class conditioning converges much faster than time-only training: every digit is already the requested class after one epoch, and by epoch 5 they are clean. Knowing the class removes the hardest decision, so the network only has to learn how to draw. The final loss ({f4(cm[10])}) is also lower than the time-only model's ({f4(tm[10])}), because the label removes uncertainty about the target velocity.</p>
    <h3>Removing the learning-rate scheduler</h3>
    <p>The exponential schedule does two jobs: big steps early, while the loss falls fast, and small steps late, so the weights stop bouncing around the minimum. One constant rate cannot do both, so I compensated with a smaller constant rate: 2e-3 instead of starting at 1e-2. That keeps the early phase stable and gives up some of the late settling. Everything else, including the seed, is identical.</p>
    {grid(3, [fig(b(f"class_nosched/class_nosched_epoch{e}.png"), f"nosched {e}", f"<strong>No scheduler, epoch {e}</strong> · mean loss {f4(nm[e])}", CR) for e in (1, 5, 10)])}
    {table(["Mean loss, epoch", "1", "5", "8", "9", "10"], [["ExponentialLR from 1e-2"] + [f4(cm[e]) for e in (1, 5, 8, 9, 10)], ["Constant 2e-3"] + [f4(nm[e]) for e in (1, 5, 8, 9, 10)]])}
    <div class="reading">{fig(b("class_nosched/training_loss.png"), "nosched loss", "Training loss without the scheduler.")}</div>
    <p>The constant rate is actually <em>ahead</em> early (epoch 1: {f4(nm[1])} vs {f4(cm[1])}), because 1e-2 is too aggressive at the start. The scheduler wins only at the end ({f4(cm[10])} vs {f4(nm[10])}), and without decay the loss flattens over epochs 9–10 ({f4(nm[9])} → {f4(nm[10])}) instead of still falling. The samples are indistinguishable by eye; the gap is about 3% of the loss.</p>
  </section>

  <header class="part-heading reading" id="b-w-b">
    <div class="eyebrow">Part B · Bells &amp; Whistles (required for CS280A)</div>
    <h2>A Better Time-Conditioned UNet</h2>
  </header>

  <section id="b-better" class="project-section">
    <h2>Wider, Longer, Averaged</h2>
    <p>The same UNet code with three changes. It is <strong>wider</strong>: D = 128, {RT["config"]["params"]:,} parameters, about 4× the baseline. It trains <strong>longer</strong>: 15 epochs with the learning rate decaying from 5e-3 to 5e-4, then 15 more decaying from 5e-4 to 5e-5, 30 in total. And it is sampled from an <strong>exponential moving average</strong> of its weights (decay 0.999). Same 50 Euler steps and the same 40 starting noises as the baseline grid; each epoch took about 110 s on the T4.</p>
    {grid(3, [fig(b_grid("time_plus/time_baseline_epoch10.pt"), "baseline", "<strong>Baseline</strong>: D = 64, 10 epochs", CR), fig(b_grid("time_plus/time_plus_epoch15.pt"), "15 epochs", "D = 128, 15 epochs", CR), fig(b_grid("time_plus30/time_plus_epoch30.pt"), "30 epochs", "<strong>D = 128, 30 epochs</strong>", CR)])}
    <p>To measure "better" instead of eyeballing it, I trained a small separate CNN classifier on real MNIST ({100 * RT["judge_test_accuracy"]:.1f}% test accuracy) and scored 1,000 fresh samples from each model on two things: how often it reads a digit with over 90% confidence (legibility), and how evenly the samples spread across the ten digits (normalized entropy, where 1 is perfectly even).</p>
    {table(["Model", "Read with >90% confidence", "Mean confidence", "Digit balance", "Final-epoch training loss"], [["Baseline (D = 64, 10 epochs)", f'{100 * base["frac_confident_0.9"]:.1f}%', f3(base["mean_confidence"]), f3(base["normalized_entropy"]), f4(tm[10])], ["D = 128, 15 epochs", f'{100 * imp["frac_confident_0.9"]:.1f}%', f3(imp["mean_confidence"]), f3(imp["normalized_entropy"]), f4(pm30[15])], ["<strong>D = 128, 30 epochs</strong>", f'<strong>{100 * imp30["frac_confident_0.9"]:.1f}%</strong>', f3(imp30["mean_confidence"]), f3(imp30["normalized_entropy"]), f4(pm30[30])]])}
    <div class="reading">{fig(b("time_plus30/training_loss.png"), "loss 30", "Training loss of the improved model over all 30 epochs.")}</div>
    <p>Legibility rises from {100 * base["frac_confident_0.9"]:.1f}% to {100 * imp30["frac_confident_0.9"]:.1f}%, about three times the sampling noise of a 1,000-sample estimate. In the grids, broken strokes join up: the baseline's broken 8 and messy 4 become a clean 3 and 4, and its stray "1." becomes a clean 1. The baseline also under-produced 0s and 6s (5% and 7% of its samples instead of 10%), while the improved model's digit balance is nearly perfect. Most of the gain came from the second 15 epochs: at epoch 15 the learning rate had already decayed while the loss was still falling, and the extra epochs kept improving it until about epoch 25, where it levels off. What remains, a few samples that hesitate between two digits, is the inherent ambiguity of a model that has to choose its own class.</p>
  </section>

  <header class="part-heading reading" id="own-b">
    <div class="eyebrow">Part B · Own idea (optional)</div>
    <h2>How Straight Are the Learned Flows?</h2>
  </header>
  <section id="b-steps" class="project-section">
    <p>Each model sampled again with 1 to 300 Euler steps from the same noise. If the learned paths were straight, one step would suffice.</p>
    {grid(4, [fig(b_grid(f"time_plus/steps_class_{n}.pt"), f"class {n}", f"Class model, {n} step{'s' if n > 1 else ''}", CR) for n in (1, 5, 50, 300)])}
    {grid(4, [fig(b_grid(f"time_plus/steps_time_plus_{n}.pt"), f"time {n}", f"Time-only model, {n} step{'s' if n > 1 else ''}", CR) for n in (2, 5, 10, 50)])}
    {table(["Euler steps"] + [str(n) for n in SW["steps"]], [["Class model: read as the requested digit"] + [f'{100 * SW["class_accuracy"][str(n)]:.0f}%' for n in SW["steps"]], ["Time-only model (15 epochs): read with >90% confidence"] + [f'{100 * SW["time_plus_confidence"][str(n)]["frac_0.9"]:.0f}%' for n in SW["steps"]]])}
    <p>The two models behave completely differently. The class-conditioned model is 100% correct even with <em>one</em> step: a single jump from noise lands on the guided <em>average</em> of that class, a thick blurry digit (Section 1.2.3's mean-digit result, now per class), which is still perfectly recognizable. The time-only model has no class to average within, so one step gives an unreadable blob (0% confident), two steps give ghostly overlaps of several digits (32%), and quality keeps improving out to 300 steps. Its paths curve because the model decides which digit to become along the way. Knowing the class straightens the flow.</p>
  </section>
''')

ORIG = ROOT / 'data' / 'originals'
ATLAS = [("John_Constable_-_Wivenhoe_Park,_Essex_-_Google_Art_Project.jpg", "Constable, Wivenhoe Park (1816)", "1.1–1.5, 3.1, 3.2, inpainting"),
         ("fuji_demo.webp", "Mount Fuji, photo and pixel art (Pixless camera)", "3.1, 3.2 (pixel half)"),
         ("Tiny Worlds and Fantasy Architecture.jfif", "Tiny Worlds and Fantasy Architecture (pen drawing)", "3.1 web image"),
         ("pig.png", "My drawing: confused pig", "3.1"), ("bang.png", "My drawing: kart into a wall", "3.1"),
         ("Vouet-autoportrait-lyon.jpg", "Simon Vouet, self-portrait", "make it real"),
         ("Trouvelot_-_The_planet_Saturn_-_1874.jpg", "Trouvelot, The Planet Saturn (1874)", "make it real"),
         ("p16003coll4_4858_full_1.avif", "Trouvelot, The Great Comet of 1881", "make it real"),
         ("Constable_-_Seascape_Study_with_Rain_Cloud.jpg", "Constable, Seascape Study with Rain Cloud", "make it real"),
         ("Caspar_David_Friedrich's_Chalk_Cliffs_on_R#U00fcgen.jpg", "Friedrich, Chalk Cliffs on Rügen", "make it real"),
         ("pixless_camera_5.webp", "Pixel-art statue (Pixless camera)", "make it real"),
         ("Caspar_David_Friedrich_-_Das_Kreuz_im_Gebirge.jpg", "Friedrich, The Cross in the Mountains", "not used"),
         ("Rocky_Landscape_in_the_Elbe_Sandstone_Mountains_-_Caspar_David_Friedrich_-_Google_Cultural_Institute.jpg", "Friedrich, Rocky Landscape in the Elbe Sandstone Mountains", "not used"),
         ("(Treviso)_Blessing_of_Pius_IX_from_the_Quirinale_at_Night_by_Ippolito_Caffi_-_Museo_Bailo.jpg", "Caffi, Blessing of Pius IX at Night", "not used"),
         ("Ippolito_Caffi,_Eclisse_di_sole_alle_Fondamenta_Nove_(1842).jpg", "Caffi, Solar Eclipse in Venice (1842)", "not used"),
         ("Mount_Saint_Gothard_-_Vanderbilt_Fine_Arts_Gallery_-_1957-040.tif.jpg", "Mount Saint Gothard (print)", "not used"),
         ("PortraitInigoJones.jpg", "Van Dyck, Portrait of Inigo Jones", "not used"),
         ("images.jfif", "Windmill tower (pen drawing)", "not used"),
         ("pixless_camera_1.webp", "Pixless camera sample 1", "not used"), ("pixless_camera_3.webp", "Pixless camera sample 3", "not used"),
         ("pixless_camera_7.webp", "Pixless camera sample 7", "not used")]
atlas_figs = []
for i, (fn, lab, use) in enumerate(ATLAS):
    im = Image.open(ORIG / fn)
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA')
        bg = Image.new('RGBA', im.size, 'white')
        bg.alpha_composite(im)
        im = bg
    im = im.convert('RGB')
    im.thumbnail((520, 520), Image.Resampling.LANCZOS)
    im.save(MI / f'src_{i:02d}.jpg', quality=90)
    atlas_figs.append(fig(f'media/inputs/src_{i:02d}.jpg', lab, f'<strong>{esc(lab)}</strong> · {use}'))
P.append(f'''
  <section id="inputs" class="project-section">
    <h2>My Image Choices</h2>
    <p>The 21 images I collected for this project, shown small. Eleven are used above; the rest stay here as a record of what I considered. Every used image was center-cropped, or for the drawings padded on white, to 512×512 by <code>tools/prepare_inputs.py</code>.</p>
    {grid(5, atlas_figs)}
  </section>

  <section id="learned" class="project-section">
    <h2>What I Learned</h2>
    <p>The idea underneath both parts is that a model trained with squared error predicts an <em>average</em>. In Part B the pure-noise denoiser hits exactly the mean-digit floor, and one-step class sampling lands on the per-class mean. In Part A one-step denoising is blurry, and Euler sampling is sharper but has the worse MSE. Iterative sampling is how a specific sample comes out of a model of averages, and guidance is how that sample is pushed toward what a prompt describes. Most of the creative tools are then just different velocity combinations: averaging views for anagrams, splitting frequencies for hybrids, resetting known pixels for inpainting. The failures taught as much as the successes. Six views dilute each prompt until the model picks a rotation-symmetric compromise; a σ = 16 low-pass decides which subjects can be hybrids; and guidance strength, not the mask, caused the inpainting color seam.</p>
  </section>

  <section id="credits" class="project-section">
    <h2>Credits</h2>
    <p class="small-print">Paintings and prints (public domain, via Wikimedia Commons and museum collections): John Constable, <em>Wivenhoe Park, Essex</em> (1816) and <em>Seascape Study with Rain Cloud</em>; Caspar David Friedrich, <em>Chalk Cliffs on Rügen</em>, <em>The Cross in the Mountains</em> and <em>Rocky Landscape in the Elbe Sandstone Mountains</em>; Simon Vouet, self-portrait (Musée des Beaux-Arts de Lyon); Étienne Léopold Trouvelot, <em>The Planet Saturn</em> (1874) and <em>The Great Comet of 1881</em>; Ippolito Caffi, two night scenes; Anthony van Dyck, <em>Portrait of Inigo Jones</em>; <em>Mount Saint Gothard</em> (Vanderbilt Fine Arts Gallery). Pixel-art images: sample photos from the Pixless pixel-art camera project. Pen drawings: "Tiny Worlds and Fantasy Architecture" and a windmill-tower drawing found online. The Campanile photo and the PixNerd adapter are supplied by the course. The pig, kart and logo sketch are my drawings; the blue-and-gold emblem is drawn by my code. Model: PixNerd-XXL-P16-T2I (MCG-NJU), revision {esc(RA["revision"][:10])}. Methods: Visual Anagrams and Factorized Diffusion (Geng et al.), SDEdit (Meng et al.), RePaint (Lugmayr et al.).</p>
  </section>
''')

TOC = [('part-a', 'A', 'Part A'), ('a11', '1.1', 'Noisy inputs'), ('a12', '1.2', 'Blur'), ('a13', '1.3', 'One step'),
       ('a14', '1.4', 'Velocity'), ('a15', '1.5', 'Euler'), ('a16', '1.6', 'From noise'), ('a21', '2.1', 'CFG'),
       ('a31', '3.1', 'Editing'), ('a32', '3.2', 'Text edits'), ('a33', '3.3', 'Anagrams'), ('a34', '3.4', 'Hybrids'),
       ('b-w-a', '280', 'Anagrams · logo'), ('own-a', 'A+', 'Own ideas'), ('part-b', 'B', 'Part B'), ('b11', '1.1', 'UNet'),
       ('b121', '1.2', 'Denoiser'), ('b122', '1.2.2', 'OOD'), ('b123', '1.2.3', 'Pure noise'), ('b21', '2.3', 'Time FM'),
       ('b24', '2.6', 'Class FM'), ('b-w-b', '280', 'Better time UNet'), ('own-b', 'B+', 'Step counts'),
       ('inputs', '—', 'My images'), ('learned', '—', 'Learned')]
toc = '\n    '.join(f'<a href="#{i}" data-num="{n}">{l}</a>' for i, n, l in TOC)
page = f'''<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="CS180 Project 3: sampling, editing and illusions with a pretrained flow model, and flow matching from scratch on MNIST.">
  <title>Project 3 — Fun with Flow Models · Codegrox</title>
  <script>try{{document.documentElement.dataset.theme=localStorage.getItem('codegrox-theme')||'dark'}}catch(e){{}}</script>
  <link rel="stylesheet" href="../assets/site.css">
  <style>
    .project-page .prompt {{ font-style: italic; opacity: .85; }}
    .project-page .small-print {{ font-size: .92em; opacity: .85; }}
    .project-page .figure-frame img.crisp {{ image-rendering: pixelated; }}
    .project-page pre {{ overflow-x: auto; }}
  </style>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body class="project-page">
<a class="skip-link" href="#content">Skip to content</a>
<header class="site-header">
  <div class="header-inner">
    <a class="wordmark" href="../">CODEGRO<span class="mark">X</span></a>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="../#projects">Projects</a>
      <a class="optional" href="https://github.com/codegrox">GitHub</a>
      <button class="theme-toggle" type="button" data-theme-toggle>Light</button>
    </nav>
  </div>
</header>
<main id="content" class="shell project-layout">
  <header class="project-hero reading">
    <div class="eyebrow">CS 180 · Project 03 · Fall 2026</div>
    <h1 class="project-title">Fun with Flow Models</h1>
    <p class="project-subtitle">Denoising, sampling, editing and optical illusions with a pretrained text-to-image flow model, then a UNet trained from scratch to turn noise into MNIST digits, with all CS280A bells &amp; whistles.</p>
  </header>
  <nav class="project-toc reading" aria-label="Project sections">
    {toc}
  </nav>
  <div class="reading panel corner-ticks project-summary">
    <div class="panel-title">Result snapshot</div>
    <p>Part A: every required section on Constable's <em>Wivenhoe Park</em>, my pixel art and my drawings; two working hybrids (skull / waterfall, panda / bamboo); CS280A anagrams with a 90° rotation and color negation, and a course logo. Part B: the pure-noise denoiser hits the measured mean-digit floor ({floor:.4f}); class-conditioned samples are clean after one epoch; the improved time-only UNet raises confidently legible samples from {100 * base["frac_confident_0.9"]:.1f}% to {100 * imp30["frac_confident_0.9"]:.1f}%. Extras: inpainting with RePaint, step-count studies in both parts, 4- and 6-way anagrams, and "make it real".</p>
  </div>
{''.join(P)}
</main>
<footer class="site-footer"><div class="footer-inner shell"><span>© CS 180 • 2026 • Hovhannes Antablyan. All rights reserved.</span><a href="../">All projects</a></div></footer>
<button class="back-top" type="button" aria-label="Back to top">Top</button>
<script>
  document.querySelectorAll('[data-distance]').forEach((fig) => {{
    const img = fig.querySelector('.distance-view img');
    const range = fig.querySelector('input[type="range"]');
    if (!img || !range) return;
    const update = () => {{ img.style.width = `${{100 - 0.9 * Number(range.value)}}%`; }};
    range.addEventListener('input', update);
    update();
  }});
</script>
<script src="../assets/site.js"></script>
</body>
</html>
'''
(ROOT / 'index.html').write_text(page)
size = sum(p.stat().st_size for p in (ROOT / 'media').rglob('*') if p.is_file())
print('wrote index.html', len(page) // 1024, 'KiB | media', round(size / 2 ** 20, 1), 'MiB')
if missing:
    print('MISSING:', *missing, sep='\n  ')
    sys.exit(1)
