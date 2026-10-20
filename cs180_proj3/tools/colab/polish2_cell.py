# Polish 2 - paste into a NEW cell at the bottom of the live notebook and press Shift+Enter.
# About 2,200 model calls (~20 min on a T4); each image is saved the moment it is made, then everything is re-zipped.

# 1) Campanile removal with LOWER guidance (~400 calls). At w = 7 the new sky came out a vivid cyan strip:
#    guidance pushes it toward an idealized "clear blue sky" and the model sees the real sky only through noisy pixels.
prompt = 'a high quality photo'
c = model.encode(prompt)
m1 = soft(box_mask([(204, 0, 332, 512)]), grow=12, feather=6)
_t0, _c0 = time.perf_counter(), _calls["n"]
for w_ in (2, 3):
    for s in (SEED, SEED + 1):
        cached(f'inpaint_v3_remove_campanile_w{w_}_s{s}', lambda: inpaint(campanile, m1, c, s, w=w_))
        record('polish2_inpaint', _t0, _c0)
metrics['polish']['remove_campanile_lowcfg'] = {'prompt': prompt, 'w': [2, 3], 'mask': 'grow 12 px, feather 6'}
show({f'w={w_}, seed {s}': img(f'inpaint_v3_remove_campanile_w{w_}_s{s}') for w_ in (2, 3) for s in (SEED, SEED + 1)}, columns=4)

# 2) Six-way anagram, take 2 (~1,800 calls). Why the first one was faint: the six guided velocities are AVERAGED,
#    so each prompt's own push toward its subject is diluted to 1/6, and "lithograph" invites thin, pale lines.
#    Fixes: (a) w = 10 instead of 7 to give each view back some of its push; (b) a bold woodcut style with thick
#    black lines and high contrast, shared by all six views; (c) six compact subjects that read from a blob
#    (heads and animals) in place of the ship and castle, which never appeared.
STYLE6 = 'a bold black and white woodcut print of {}, thick black lines, high contrast'
SUBJECTS6 = ['a horse', 'an old man', 'a rabbit', 'an owl', 'a cat', 'a duck']
VIEWS6B = [STYLE6.format(s) for s in SUBJECTS6]
W6 = 10
c6b = [model.encode(p) for p in VIEWS6B]
_t0, _c0 = time.perf_counter(), _calls["n"]
for s in (SEED, SEED + 1, SEED + 2):
    x = cached(f'rot6b_s{s}', lambda: multiview_anagram(s, c6b, rot60, rot60_inv, w=W6))
    for k in range(6):
        save(f'rot6b_s{s}_view{k}', rot60(x, k))
    record('polish2_six_way', _t0, _c0)
    show({f'view {k} ({60 * k} deg): {SUBJECTS6[k]}': rot60(x, k) for k in range(6)}, columns=6, title=f'six-way take 2, seed {s}')
metrics['multiview']['six_way_b'] = {'prompts': VIEWS6B, 'seeds': [SEED, SEED + 1, SEED + 2], 'cfg_w': W6,
                                     'transform': 'ring-permutation 60-degree rotation of the inscribed disc'}
_mp.write_text(json.dumps(metrics, indent=2))

import shutil
_zip = shutil.make_archive(str(OUT.parent / 'cs180_proj3_parta_final'), 'zip', OUT)
print('Re-zipped:', _zip)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(_zip)
