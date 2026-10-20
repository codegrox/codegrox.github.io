"""Build parta_final.ipynb: the whole of Part A (required sections, CS280A bells & whistles, own ideas) in one
resumable notebook. Reuses the tested cells of parta_finish.ipynb; required-section code follows the run that was
reviewed (same prompts, seeds and inputs), with the fixes found in review built in."""
import base64, io, json, re, zipfile
from pathlib import Path

HERE = Path(__file__).parent
fin = json.loads(Path('/home/claude/fin/parta_finish.ipynb').read_text())
F = [''.join(c['source']) for c in fin['cells']]
get = lambda key: next(s for s in F if key in s)

setup = get('#@title Setup')
functions = get('STUDENT IMPLEMENTATION')
diag = get('def velocity_diagnostics')
stage_vel = get('# STAGE 1 - Section 1.4')
stage_280_anagrams = get('# STAGE 3 (CS280A)')
stage_logo = get('# STAGE 4 (CS280A)')
stage_steps = get('# STAGE 6 (own idea)')
stage_inpaint = get('# STAGE 7 (own idea)')
stage_multi = get('# STAGES 8-9 (own idea)')

buf = io.BytesIO()
with zipfile.ZipFile(buf, 'w') as z:
    for p in sorted((HERE / 'inputs').glob('*.png')):
        z.write(p, 'my_inputs/' + p.name)
b64 = base64.b64encode(buf.getvalue()).decode()

code = lambda s: {'cell_type': 'code', 'metadata': {}, 'execution_count': None, 'outputs': [], 'source': s.strip() + '\n'}
md = lambda s: {'cell_type': 'markdown', 'metadata': {}, 'source': s.strip() + '\n'}

imports = get('import json, time, math').replace("Path('finish_inputs')", "Path('my_inputs')") + '''


def show(images, columns=4, title=None):
    """Small inline preview only; the website uses the lossless PNGs in OUT/img."""
    items = list(images.items())
    rows = math.ceil(len(items) / columns)
    fig, axs = plt.subplots(rows, columns, figsize=(2.6 * columns, 2.75 * rows), squeeze=False)
    for ax in axs.flat:
        ax.axis('off')
    for ax, (label, x) in zip(axs.flat, items):
        ax.imshow(to_pil(x) if torch.is_tensor(x) else x)
        ax.set_title(label, fontsize=7, wrap=True)
    if title:
        fig.suptitle(title, fontsize=9)
    fig.tight_layout()
    plt.show()
    plt.close(fig)


def img(name):
    return preprocess(OUT / 'img' / (name + '.png')).to(device)


def guided(x, t, c=None, w=None):
    return cfg_velocity(x, t, condition if c is None else c, W if w is None else w, predict_velocity, null_condition)
'''

inputs_cell = get('#@title Inputs (embedded)')
inputs_cell = re.sub(r"b64decode\('[^']+'\)", "b64decode('" + b64 + "')", inputs_cell)
inputs_cell = inputs_cell.replace("'cs180_proj3_finish'", "'cs180_proj3_parta_final'").replace('finish_inputs', 'my_inputs')

sec11 = '''# 1.1-1.3: noisy training inputs, Gaussian-blur baseline, one-step denoising (my image: Constable, Wivenhoe Park).
_t0, _c0 = time.perf_counter(), _calls["n"]
image, epsilon = load('wivenhoe_park.png'), noise(SEED)
noisy = {t: interpolate(image, epsilon, t) for t in (0.25, 0.50, 0.75)}
assert torch.equal(interpolate(image, epsilon, 0), epsilon) and torch.equal(interpolate(image, epsilon, 1), image)
save('sec1_original', image)
metrics['sec1'] = {'blur': {}, 'one_step_mse': {}}
SIGMAS = [0.5, 1., 1.5, 2., 3., 4., 6., 8., 12., 16.]
blurred, one_step = {}, {}
for t, x in noisy.items():
    save(f'sec1_noisy_{t:.2f}', x)
    cands = {sg: gaussian_blur(x / t, [2 * math.ceil(3 * sg) + 1] * 2, [sg, sg]) for sg in SIGMAS}
    mse = {sg: float(((v - image) ** 2).mean()) for sg, v in cands.items()}
    best = min(mse, key=mse.get)
    blurred[t] = cands[best]
    save(f'sec1_blur_{t:.2f}', blurred[t])
    metrics['sec1']['blur'][f'{t:.2f}'] = {'best_sigma': best, 'mse': mse}
    one_step[t] = cached(f'sec1_onestep_{t:.2f}', lambda: one_step_denoise(x, t, condition, predict_velocity))
    metrics['sec1']['one_step_mse'][f'{t:.2f}'] = float(((one_step[t] - image) ** 2).mean())
show({'original': image, **{f'noisy t={t}': x for t, x in noisy.items()},
      **{f'blur t={t}': blurred[t] for t in noisy}, **{f'one step t={t}': one_step[t] for t in noisy}}, columns=4)
record('1.1-1.3', _t0, _c0)'''

sec14 = stage_vel.replace("# STAGE 1 - Section 1.4 with readable scales. Same image and noise as the main run (checked: identical tensors).",
                          "# 1.4: predicted vs. ground-truth update, and the per-pixel RGB RMS error, on shared readable scales.")
sec14 = sec14.replace("image, epsilon = load('wivenhoe_park.png'), noise(SEED)\n", "")
sec14 = sec14.replace("record('1_velocity'", "record('1.4'")

sec15 = '''# 1.5: Euler sampling. Checked against a constant velocity field first, then run from t = 0.5.
calls = []
def constant_v(x, t):
    calls.append(t)
    return torch.ones_like(x)
toy = torch.zeros(1, 3, 4, 4, device=device)
for start, step, expected in [(0, .02, 50), (.5, .02, 25), (.93, .02, 4)]:
    calls.clear()
    end, states = euler_sample(toy, start, step, constant_v)
    assert len(calls) == expected and states[-1][0] == 1
    assert torch.allclose(end, torch.full_like(toy, 1 - start), atol=1e-6)
metrics['euler_checks'] = '50 full steps, 25 half steps, shortened final step: passed'
_t0, _c0 = time.perf_counter(), _calls["n"]
if not (OUT / 'img' / 'sec1_traj_1.00.png').is_file():
    final, states = euler_sample(noisy[0.50], 0.50, H, lambda x, t: predict_velocity(x, t, condition))
    for t, x in states:
        save(f'sec1_traj_{t:.2f}', x)
final = img('sec1_traj_1.00')
metrics['sec1']['euler_mse'] = float(((final - image) ** 2).mean())
metrics['sec1']['blur_mse_0.50'] = float(((blurred[0.50] - image) ** 2).mean())
show({f't={t:.2f}': img(f'sec1_traj_{t:.2f}') for t in (0.5, 0.6, 0.7, 0.8, 0.9, 1.0)}, columns=6)
show({'original': image, 'blur': blurred[0.50], 'one step': one_step[0.50], 'Euler (25 steps)': final})
record('1.5', _t0, _c0)'''

sec16 = '''# 1.6: sampling from pure noise, conditional, no guidance. 2.1: the same five noises with CFG (w = 7).
xc = noise(SEED)
assert torch.equal(cfg_velocity(xc, .5, condition, 0, predict_velocity, null_condition), predict_velocity(xc, .5, condition))
metrics['cfg_zero_check'] = True
_t0, _c0 = time.perf_counter(), _calls["n"]
for i in range(5):
    cached(f'conditional_{i}', lambda: euler_sample(noise(SEED + i), 0, H, lambda x, t: predict_velocity(x, t, condition))[0])
    cached(f'cfg_{i}', lambda: euler_sample(noise(SEED + i), 0, H, guided)[0])
    record('1.6+2.1', _t0, _c0)
show({**{f'seed {SEED + i}, w=0': img(f'conditional_{i}') for i in range(5)},
      **{f'seed {SEED + i}, w=7': img(f'cfg_{i}') for i in range(5)}}, columns=5)'''

sec31 = '''# 3.1: SDEdit-style editing, prompt "a high quality photo", seven start times. Campanile + my two images,
# a web image and my two drawings (drawings composited on white).
STARTS = [0.02, 0.04, 0.06, 0.10, 0.14, 0.25, 0.50]
campanile = preprocess(ROOT / 'assets/campanile.jpg').to(device)
EDIT_INPUTS = {'campanile': campanile, 'my_image_1': load('wivenhoe_park.png'), 'my_image_2': load('pixel_fuji.png'),
               'web_image': load('fantasy_architecture.png'), 'drawing_1': load('pig_drawing.png'),
               'drawing_2': load('kart_drawing.png')}
_t0, _c0 = time.perf_counter(), _calls["n"]
for name, y in EDIT_INPUTS.items():
    save(f'edit_{name}_original', y)
    for t in STARTS:
        cached(f'edit_{name}_t_{t:.2f}', lambda: edit(y, noise(SEED), t, condition, predict_velocity, w=W, step_size=H))
        record('3.1', _t0, _c0)
    show({'original': y, **{f't={t:.2f}': img(f'edit_{name}_t_{t:.2f}') for t in STARTS}}, columns=8, title=name)'''

sec32 = '''# 3.2: text-guided editing, same seven start times.
EDIT_PROMPTS = {
    'campanile': 'a photograph of a rocket standing on a launch pad against a clear blue sky',
    'my_image_1': 'a high quality photograph of an English country park in winter, with a frozen lake and snow-covered trees',
    'my_image_2': 'a high quality landscape photograph of Mount Fuji covered in snow at sunset, with trees in the foreground',
}
metrics['text_edit_prompts'] = EDIT_PROMPTS
_t0, _c0 = time.perf_counter(), _calls["n"]
for name, prompt in EDIT_PROMPTS.items():
    y, c = EDIT_INPUTS[name], model.encode(prompt)
    for t in STARTS:
        cached(f'text_edit_{name}_t_{t:.2f}', lambda: edit(y, noise(SEED), t, c, predict_velocity, w=W, step_size=H))
        record('3.2', _t0, _c0)
    show({'original': y, **{f't={t:.2f}': img(f'text_edit_{name}_t_{t:.2f}') for t in STARTS}}, columns=8, title=prompt)'''

sec33 = '''# 3.3: visual anagrams (upright prompt a, upside-down prompt b).
ANAGRAMS = [('an oil painting of an old man', 'an oil painting of people around a campfire'),
            ('a lithograph of a snowy mountain village', 'a lithograph of a horse')]
assert torch.equal(rotate180(rotate180(image)), image)
metrics['anagram_prompts'] = ANAGRAMS
_t0, _c0 = time.perf_counter(), _calls["n"]
for i, (a, b) in enumerate(ANAGRAMS):
    ca, cb = model.encode(a), model.encode(b)
    x = cached(f'anagram_{i}', lambda: visual_anagrams(noise(SEED + i), ca, cb, predict_velocity, w=W, step_size=H))
    save(f'anagram_{i}_rotated', rotate180(x))
    record('3.3', _t0, _c0)
    show({a: x, 'rotated: ' + b: rotate180(x)}, columns=2)'''

sec34 = '''# 3.4: hybrid images (low frequencies from the "far" prompt, high from the "near" prompt). The first is the
# skull/waterfall that worked in review; the rest are candidates for the second hybrid. All are saved and shown.
HYBRIDS = [('skull_waterfall', 921, 'a front-facing human skull, recognizable eye sockets and jaw, fine sepia etching',
            'a spectacular waterfall pouring over a rocky ledge into a river, detailed sepia etching'),
           ('cat_forest', 923, 'a front-facing portrait of a tabby cat with pointed ears and large eyes, monochrome wood engraving',
            'a deep old-growth forest of closely spaced tall fir trees and intricate branches, monochrome wood engraving'),
           ('owl_cathedral_180', 180, 'a lithograph of an owl', 'a lithograph of a gothic cathedral'),
           ('owl_cathedral_181', 181, 'a lithograph of an owl', 'a lithograph of a gothic cathedral'),
           ('oldman_mountains_180', 180, 'a lithograph of the face of an old man', 'a lithograph of a snowy mountain range'),
           ('oldman_mountains_181', 181, 'a lithograph of the face of an old man', 'a lithograph of a snowy mountain range')]
metrics['hybrids'] = {}
_t0, _c0 = time.perf_counter(), _calls["n"]
for name, s, far, near in HYBRIDS:
    x = cached('hybrid_' + name, lambda: make_hybrids(noise(s), model.encode(far), model.encode(near),
                                                      predict_velocity, w=W, step_size=H))
    small = to_pil(x).resize((64, 64), Image.Resampling.LANCZOS)
    small.save(OUT / 'img' / f'hybrid_{name}_small.png')
    metrics['hybrids'][name] = {'seed': s, 'far': far, 'near': near, 'lowpass_sigma': 16}
    record('3.4', _t0, _c0)
    show({'near: ' + near: x, 'far (64 px): ' + far: small}, columns=2)'''

extras = '''# Own idea: "make it real" on paintings, astronomical prints and pixel art (Section 3.1's edit, generic prompt).
EXTRA = ['vouet_portrait', 'saturn_1874', 'comet_1881', 'seascape_rain', 'chalk_cliffs', 'pixel_statue']
EXTRA_STARTS = [0.10, 0.25]
_t0, _c0 = time.perf_counter(), _calls["n"]
for name in EXTRA:
    y = load(name + '.png')
    save(f'extra_{name}_original', y)
    for t in EXTRA_STARTS:
        cached(f'extra_{name}_t_{t:.2f}', lambda: edit(y, noise(SEED), t, condition, predict_velocity, w=W, step_size=H))
        record('own_make_it_real', _t0, _c0)
    show({'original': y, **{f't={t:.2f}': img(f'extra_{name}_t_{t:.2f}') for t in EXTRA_STARTS}}, columns=3, title=name)'''

final = '''metrics['peak_memory_gib'] = torch.cuda.max_memory_allocated() / 2 ** 30
_mp.write_text(json.dumps(metrics, indent=2))
print(json.dumps(metrics['timing'], indent=1))
import shutil
_zip = shutil.make_archive(str(OUT.parent / 'cs180_proj3_parta_final'), 'zip', OUT)
print('Download:', _zip)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(_zip)'''

rename = lambda s, a, b: s.replace(a, b)
st280a = stage_280_anagrams.replace("# STAGE 3 (CS280A) - ", "# CS280A bells & whistles: ").replace("record('3_anagrams_280'", "record('B&W_anagrams'")
st280l = stage_logo.replace("# STAGE 4 (CS280A) - ", "# CS280A bells & whistles: ").replace("record('4_logo'", "record('B&W_logo'")
own_steps = stage_steps.replace("# STAGE 6 (own idea) - ", "# Own idea: ").replace("record('6_step_sweep'", "record('own_step_sweep'")
own_inp = stage_inpaint.replace("# STAGE 7 (own idea) - ", "# Own idea: ").replace("record('7_inpainting'", "record('own_inpainting'")
own_inp = own_inp.replace("campanile = preprocess(ROOT / 'assets/campanile.jpg').to(device) if (ROOT / 'assets/campanile.jpg').is_file() else None\n", "")
own_inp = own_inp.replace("wiv = load('wivenhoe_park.png')", "wiv = image")
own_multi = stage_multi.replace("# STAGES 8-9 (own idea) - ", "# Own idea: ").replace("record('8_four_way'", "record('own_four_way'").replace("record('9_six_way'", "record('own_six_way'")

cells = [
    md('''# CS180 Project 3, Part A: Exploring the Power of Flow Models — final notebook
Hovhannes (Mo) Antablyan · CS 180 Fall 2026 · https://codegrox.github.io/cs180_proj3/

**Run:** Colab GPU runtime (A100 or L4; T4 works too) → **Runtime → Run all** → allow Google Drive.
Nothing to upload: the course setup and my input images are embedded. Every result is written to
`MyDrive/cs180_proj3_parta_final/img` as a lossless 512×512 PNG the moment it is made; if the runtime disconnects,
**Run all** again and finished images are reloaded instead of recomputed. Inline figures are small previews only.

Order: required Sections 1.1–3.4 → CS280A bells & whistles (two more anagram transforms, course logo) →
own ideas (step-count sweep, inpainting and object swapping, 4- and 6-way rotation anagrams, "make it real").
Fixed settings: seed 180, Euler step h = 0.02, CFG w = 7 (Part A convention v_c + w(v_c − v_u)).'''),
    code(setup), code(inputs_cell), code(imports), code(functions), code(diag),
    md('## 1. Visualizing Training and Sampling'), code(sec11), code(sec14), code(sec15),
    md('## 1.6 Generating from Noise and 2.1 Classifier-Free Guidance'), code(sec16),
    md('## 3.1 Image-to-Image Editing'), code(sec31),
    md('## 3.2 Text-Guided Image Editing'), code(sec32),
    md('## 3.3 Visual Anagrams'), code(sec33),
    md('## 3.4 Hybrid Images'), code(sec34),
    md('## Bells & Whistles (required for CS280A)'), code(st280a), code(st280l),
    md('## Own ideas (optional for all students)'), code(own_steps), code(own_inp), code(own_multi), code(extras),
    md('## Save'), code(final),
]
nb = {'cells': cells, 'metadata': fin['metadata'], 'nbformat': 4, 'nbformat_minor': fin.get('nbformat_minor', 5)}
out = HERE / 'parta_final.ipynb'
out.write_text(json.dumps(nb, indent=1))
print('wrote', out, out.stat().st_size // 1024, 'KiB')
