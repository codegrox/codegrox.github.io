# 3.4 (fresh candidates) - paste into a NEW cell at the bottom of parta_final_light.ipynb and press Shift+Enter.
# It waits in Colab's queue until the running cells finish, then makes 8 more hybrids (about 1,600 model calls,
# ~15 min on a T4) and re-zips the results so the download includes them. Same make_hybrids(), w = 7, h = 0.02.
# Far subjects are front-facing heads: a big, high-contrast blob with dark eyes survives the sigma-16 low-pass,
# which is why the skull worked. Near prompts use the same medium so the two prompts can share one picture.
FRESH = [('face_cliffs', 180, "a lithograph of an old man's face, front view, deep shadows", 'a lithograph of rocky cliffs and mountains'),
         ('face_cliffs', 181, "a lithograph of an old man's face, front view, deep shadows", 'a lithograph of rocky cliffs and mountains'),
         ('lion_waves', 180, "a lithograph of a lion's face, front view", 'a lithograph of ocean waves crashing on rocks'),
         ('lion_waves', 181, "a lithograph of a lion's face, front view", 'a lithograph of ocean waves crashing on rocks'),
         ('owlface_forest', 180, 'a lithograph of an owl face with two huge round eyes, front view', 'a lithograph of a dense pine forest'),
         ('owlface_forest', 181, 'a lithograph of an owl face with two huge round eyes, front view', 'a lithograph of a dense pine forest'),
         ('skull_city', 180, 'a lithograph of a human skull, front view', 'a lithograph of a medieval city with towers and bridges'),
         ('woman_flowers', 180, "a charcoal portrait of a woman's face, front view", 'a charcoal drawing of a meadow full of wildflowers')]
_t0, _c0 = time.perf_counter(), _calls["n"]
metrics.setdefault('hybrids', {})
for name, s, far, near in FRESH:
    key = f'{name}_{s}'
    x = cached('hybrid_' + key, lambda: make_hybrids(noise(s), model.encode(far), model.encode(near),
                                                     predict_velocity, w=W, step_size=H))
    small = to_pil(x).resize((64, 64), Image.Resampling.LANCZOS)
    small.save(OUT / 'img' / f'hybrid_{key}_small.png')
    metrics['hybrids'][key] = {'seed': s, 'far': far, 'near': near, 'lowpass_sigma': 16}
    record('3.4_fresh', _t0, _c0)
    # far view shown at its real 64 px size (no blocky enlargement), next to the full image
    show({'near: ' + near: x, 'far (64 px, real size): ' + far: to_pil(x).resize((64, 64), Image.Resampling.LANCZOS).resize((512, 512), Image.Resampling.BICUBIC)}, columns=2)
import shutil
_zip = shutil.make_archive(str(OUT.parent / 'cs180_proj3_parta_final'), 'zip', OUT)
print('Re-zipped with the new hybrids:', _zip)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(_zip)
