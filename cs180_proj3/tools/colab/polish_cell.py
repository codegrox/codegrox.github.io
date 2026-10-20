# Part A polish pass - paste into a NEW cell at the bottom of the live notebook and press Shift+Enter.
# (If the runtime restarted: Runtime -> Run all first; every finished image is reloaded from Drive, then run this.)
# About 1,700 model calls (~16 min on a T4), most important first; each image is saved the moment it is made.
import torch.nn.functional as F

def soft(mask, grow=12, feather=6):
    """Grow the mask by `grow` px and feather its edge, so new pixels blend into the old ones."""
    m = F.max_pool2d(mask, 2 * grow + 1, stride=1, padding=grow) if grow else mask
    k = 2 * math.ceil(3 * feather) + 1
    return gaussian_blur(m, [k, k], [feather, feather]).clamp(0, 1)

_t0, _c0 = time.perf_counter(), _calls["n"]
metrics.setdefault('polish', {})

# 1) Remove the Campanile again: feathered mask, then a harmonizing pass from t = 0.5 over a wider soft band,
#    so the new sky matches the old sky's color instead of leaving a bright strip.
prompt = 'a photo of a clear blue sky above green trees and red-roofed buildings'
c = model.encode(prompt)
m1 = soft(box_mask([(204, 0, 332, 512)]), grow=12, feather=6)
m2 = soft(box_mask([(204, 0, 332, 512)]), grow=40, feather=16)
save('inpaint_v2_remove_campanile_mask', (m1.repeat(1, 3, 1, 1) * 2 - 1).to(device))
for s in (SEED, SEED + 1):
    first = cached(f'inpaint_v2_remove_campanile_pass1_s{s}', lambda: inpaint(campanile, m1, c, s))
    cached(f'inpaint_v2_remove_campanile_s{s}', lambda: inpaint(first, m2, c, s, t_start=0.5))
    record('polish', _t0, _c0)
metrics['polish']['remove_campanile'] = {'prompt': prompt, 'pass1': 'grow 12 px, feather 6, t 0 -> 1',
                                         'pass2': 'grow 40 px, feather 16, t 0.5 -> 1'}

# 2) Swap again: from t = 0.3 the model "undid" the swap (house back on the hill, animals back on the bank).
#    Starting later keeps the swapped objects and only blends their edges.
prompt = 'an oil painting by John Constable of an English country park with a lake'
c = model.encode(prompt)
ms = soft(box_mask([COWS, HOUSE], pad=6), grow=0, feather=4)
for t0 in (0.5, 0.6):
    for s in (SEED, SEED + 1):
        cached(f'inpaint_v2_swap_t{t0:.2f}_s{s}', lambda: inpaint(swapped(wiv, COWS, HOUSE), ms, c, s, t_start=t0))
        record('polish', _t0, _c0)
metrics['polish']['swap'] = {'prompt': prompt, 't_start': [0.5, 0.6], 'mask': 'boxes + 6 px, feather 4'}

# 3) Logo: t = 0.14 / 0.25 barely changed the inputs, so add the earlier, stronger starts.
LOGO2 = [('sketch_red', 'logo_sketch.png', 'a clean professional minimalist logo, bold red letters CS180 neatly filling a thin black circle, white background, flat vector graphic', (0.02, 0.04)),
         ('sketch', 'logo_sketch.png', STYLE, (0.02, 0.04)),
         ('cs180', 'logo_cs180.png', STYLE, (0.04,)),
         ('cs180_pin', 'logo_cs180.png', 'a glossy navy blue and gold enamel pin badge of a circular CS180 logo, product photo on a white table', (0.04,))]
for name, file, p, starts in LOGO2:
    y, c = load(file), model.encode(p)
    save(f'logo_{name}_original', y)
    for t in starts:
        cached(f'logo_{name}_t_{t:.2f}', lambda: edit(y, noise(SEED), t, c, predict_velocity, w=W, step_size=H))
        record('polish', _t0, _c0)
    metrics['logos'][name] = {'input': file, 'prompt': p,
                              'starts': sorted(set(metrics['logos'].get(name, {}).get('starts', [])) | set(starts))}

# 4) Optional, last: a second seed for the six-way anagram.
x = cached('rot6_s181', lambda: multiview_anagram(SEED + 1, c6, rot60, rot60_inv))
for k in range(6):
    save(f'rot6_s181_view{k}', rot60(x, k))
metrics['multiview']['six_way']['seeds'] = [SEED, SEED + 1]
record('polish', _t0, _c0)
_mp.write_text(json.dumps(metrics, indent=2))

show({'campanile removed, s180': img('inpaint_v2_remove_campanile_s180'), 's181': img('inpaint_v2_remove_campanile_s181'),
      'swap t=0.5': img(f'inpaint_v2_swap_t0.50_s{SEED}'), 'swap t=0.6': img(f'inpaint_v2_swap_t0.60_s{SEED}')}, columns=4)
show({f'{n} t={t:.2f}': img(f'logo_{n}_t_{t:.2f}') for n, _, _, ts in LOGO2 for t in ts}, columns=6)
show({f'six-way s181 view {k}': img(f'rot6_s181_view{k}') for k in range(6)}, columns=6)
import shutil
_zip = shutil.make_archive(str(OUT.parent / 'cs180_proj3_parta_final'), 'zip', OUT)
print('Re-zipped:', _zip)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(_zip)
