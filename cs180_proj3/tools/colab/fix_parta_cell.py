# Part A FIX PASS - new cell at the bottom of the Part A notebook. About 3,700 model calls (~35 min on a T4),
# cheapest / most likely first; every image is saved the moment it is made, then everything is re-zipped.
# If the runtime was restarted: click the cell that starts with '# Own idea: "make it real"', press Ctrl+F8
# (Run before: reloads the model, every finished image is reused), then click this cell and press Shift+Enter.
import time, math, json, sys
import torch.nn.functional as F
_need = ('model', 'cfg_velocity', 'edit', 'anagram_T', 'negate', 'multiview_anagram', 'rot60', 'inpaint', 'box_mask',
         'campanile', 'LOGOS', 'STYLE', 'cached', 'record', 'metrics', 'OUT')
_missing = [n for n in _need if n not in globals()]
if _missing:
    raise RuntimeError('The earlier cells have not run in this session. Click the cell starting with '
                       '# Own idea: "make it real", press Ctrl+F8 (Run before), wait until it finishes with no red '
                       f'errors, then run this cell again. Missing: {_missing}')

def soft(mask, grow=12, feather=6):
    m = F.max_pool2d(mask, 2 * grow + 1, stride=1, padding=grow) if grow else mask
    k = 2 * math.ceil(3 * feather) + 1
    return gaussian_blur(m, [k, k], [feather, feather]).clamp(0, 1)

_t0, _c0 = time.perf_counter(), _calls["n"]
metrics.setdefault('fix', {})

# 1) Color-negative anagram, village -> old man: three more seeds (~600 calls).
a, b = 'a charcoal drawing of a snowy village', 'a charcoal drawing of an old man'
ca, cb = model.encode(a), model.encode(b)
for s in (SEED + 2, SEED + 3, SEED + 4):
    x = cached(f'anagram_negate_1_s{s}', lambda: anagram_T(noise(s), ca, cb, negate, negate))
    save(f'anagram_negate_1_s{s}_view', negate(x))
    record('fix', _t0, _c0)
    show({a: x, 'negative: ' + b: negate(x)}, columns=2, title=f'seed {s}')
metrics['fix']['negate_village_oldman_seeds'] = [SEED + 2, SEED + 3, SEED + 4]

# 2) Logo sweet spot (~550 calls): t = 0.06 redesigns but garbles the letters, t = 0.14 changes almost nothing.
for name, file, p in (('cs180_pin', 'logo_cs180.png', LOGOS[2][2]), ('cs180', 'logo_cs180.png', STYLE),
                      ('sketch', 'logo_sketch.png', STYLE)):
    y, c = load(file), model.encode(p)
    for t in (0.08, 0.10):
        cached(f'logo_{name}_t_{t:.2f}', lambda: edit(y, noise(SEED), t, c, predict_velocity, w=W, step_size=H))
        record('fix', _t0, _c0)
    show({f't={t:.2f}': img(f'logo_{name}_t_{t:.2f}') for t in (0.06, 0.08, 0.10, 0.14)}, columns=4, title=name)
metrics['fix']['logo_extra_starts'] = [0.08, 0.10]

# 3) Campanile removal with RePaint-style resampling (~780 calls). Plain "reset the known pixels" inpainting never lets
#    the generated strip adapt to its surroundings: it is decided from mostly-noise context early on and keeps its
#    too-bright color. Here every 5-step segment is run, re-noised back to its start (exactly onto the straight path's
#    noise level: x_t1 = (t1/t2) x_t2 + sqrt((1-t1)^2 - (t1(1-t2)/t2)^2) * fresh noise), and run again, 3 times,
#    so the masked area keeps re-harmonizing with the known pixels. Moderate guidance and a descriptive prompt.
def inpaint_repaint(y, mask, cond, seed, w, h=H, jump=5, resample=3):
    eps = noise(seed)
    m = mask.to(device)
    g = torch.Generator().manual_seed(seed + 999)
    n = round(1 / h)
    x = eps.clone()
    k = 0
    while k < n:
        end = min(k + jump, n)
        passes = 1 if k == 0 or end == n else resample
        for r in range(passes):
            for i in range(k, end):
                t = i * h
                x = x + h * cfg_velocity(x, t, cond, w, predict_velocity, null_condition)
                x = m * x + (1 - m) * interpolate(y, eps, (i + 1) * h)
            if r < passes - 1:
                t1, t2 = k * h, end * h
                sig = math.sqrt(max((1 - t1) ** 2 - (t1 * (1 - t2) / t2) ** 2, 0.0))
                x = (t1 / t2) * x + sig * torch.randn(x.shape, generator=g).to(device)
                x = m * x + (1 - m) * interpolate(y, eps, t1)
        k = end
    return x

prompt = 'a photo of an empty blue sky above green trees and red-roofed buildings, no tower'
c = model.encode(prompt)
mr = soft(box_mask([(204, 0, 332, 512)]), grow=12, feather=6)
for w_, s in ((3, SEED), (3, SEED + 1), (5, SEED)):
    cached(f'inpaint_v4_repaint_w{w_}_s{s}', lambda: inpaint_repaint(campanile, mr, c, s, w=w_))
    record('fix', _t0, _c0)
show({f'RePaint w={w_}, seed {s}': img(f'inpaint_v4_repaint_w{w_}_s{s}')
      for w_, s in ((3, SEED), (3, SEED + 1), (5, SEED))}, columns=3)
metrics['fix']['repaint'] = {'prompt': prompt, 'jump_steps': 5, 'resample': 3, 'runs': [[3, SEED], [3, SEED + 1], [5, SEED]]}

# 4) Six-way, take 3 (~1,800 calls). Take 1 (lithograph) was faint, take 2 (woodcut, w = 10) collapsed into solid black.
#    Oil painting gives mid-tones and full shapes; the six subjects are the compact ones that showed up before.
VIEWS6C = [f'an oil painting of {s}' for s in ('a horse', 'an old man', 'a rabbit', 'an owl', 'a cat', 'a duck')]
c6c = [model.encode(p) for p in VIEWS6C]
for w_, s in ((7, SEED + 2), (7, SEED + 3), (9, SEED + 2)):
    x = cached(f'rot6c_w{w_}_s{s}', lambda: multiview_anagram(s, c6c, rot60, rot60_inv, w=w_))
    for k in range(6):
        save(f'rot6c_w{w_}_s{s}_view{k}', rot60(x, k))
    record('fix', _t0, _c0)
    show({f'{60 * k} deg: {VIEWS6C[k][18:]}': rot60(x, k) for k in range(6)}, columns=6, title=f'six-way take 3, w={w_}, seed {s}')
metrics['multiview']['six_way_c'] = {'prompts': VIEWS6C, 'runs': [[7, SEED + 2], [7, SEED + 3], [9, SEED + 2]]}
_mp.write_text(json.dumps(metrics, indent=2))

import shutil
_zip = shutil.make_archive(str(OUT.parent / 'cs180_proj3_parta_final'), 'zip', OUT)
print('Re-zipped:', _zip)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(_zip)
