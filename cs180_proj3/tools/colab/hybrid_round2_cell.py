# 3.4 round 2 - paste into a NEW cell at the bottom of parta_final_light.ipynb.
# If the runtime was restarted: run the cells from the top through "STUDENT IMPLEMENTATION" and "velocity_diagnostics"
# first (model load), then this cell. ~1,200 model calls, about 11 min on a T4; finished images are reused.
# Lesson from round 1: the sigma-16 low-pass keeps only features ~50 px and larger, so only the skull's huge dark eye
# sockets survived. These far subjects have equally big dark shapes on a light field.
ROUND2 = [('panda_bamboo', 180, "a lithograph of a giant panda's face, front view, big black eye patches", 'a lithograph of a dense bamboo forest'),
          ('panda_bamboo', 181, "a lithograph of a giant panda's face, front view, big black eye patches", 'a lithograph of a dense bamboo forest'),
          ('panda_bamboo', 182, "a lithograph of a giant panda's face, front view, big black eye patches", 'a lithograph of a dense bamboo forest'),
          ('owlface_forest', 182, 'a lithograph of an owl face with two huge round eyes, front view', 'a lithograph of a dense pine forest'),
          ('skull_cathedral', 180, 'a lithograph of a human skull, front view', 'a lithograph of a gothic cathedral'),
          ('skull_village', 181, 'a lithograph of a human skull, front view', 'a lithograph of a snowy mountain village')]
_t0, _c0 = time.perf_counter(), _calls["n"]
metrics.setdefault('hybrids', {})
for name, s, far, near in ROUND2:
    key = f'{name}_{s}'
    x = cached('hybrid_' + key, lambda: make_hybrids(noise(s), model.encode(far), model.encode(near),
                                                     predict_velocity, w=W, step_size=H))
    to_pil(x).resize((64, 64), Image.Resampling.LANCZOS).save(OUT / 'img' / f'hybrid_{key}_small.png')
    metrics['hybrids'][key] = {'seed': s, 'far': far, 'near': near, 'lowpass_sigma': 16}
    record('3.4_round2', _t0, _c0)
    # "far" preview = what survives the low-pass, i.e. what a distant viewer sees
    show({'near: ' + near: x, 'far (low-pass, sigma 16): ' + far: lowpass(x)}, columns=2)
import shutil
_zip = shutil.make_archive(str(OUT.parent / 'cs180_proj3_parta_final'), 'zip', OUT)
print('Re-zipped:', _zip)
if 'google.colab' in sys.modules:
    from google.colab import files
    files.download(_zip)
