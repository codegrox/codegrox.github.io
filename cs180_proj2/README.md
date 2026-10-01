# CS180 Project 2 - Fun with Filters and Frequencies

## Files

- `code/conv.py` - Part 1.1 convolution from scratch (numpy only): four loops, two loops over pixels, two loops over kernel taps; `full` / `same` / `valid` with zero fill
- `code/filters.py` - Gaussian and DoG filters (`cv2.getGaussianKernel` + outer product), gradients, polynomial `atan2` for orientation, unsharp mask kernel, cutoff frequencies in cycles/image
- `code/hybrid.py` - hybrid images; alignment reuses the starter code with points loaded from `points/*.json`
- `code/stacks.py` - Gaussian/Laplacian stacks (no built-in pyramid functions), multiresolution blending, masks
- `code/part1.py`, `code/part2.py` - the experiments, one function per stage
- `code/main.py` - runs the stages, writes figures to `media/` and measured numbers to `out/results.json`
- `code/pick_points.py` - click alignment points for a hybrid or blend pair
- `code/make_mask.py` - draw an irregular (polygon) blending mask
- `code/align_image_code.py` - provided starter code, unchanged
- `config.json` - every image path and parameter used by the pipeline

## Setup

Python 3.9+

```text
pip install numpy scipy opencv-python matplotlib pillow scikit-image
```

Run everything from the `cs180_proj2` folder. `pick_points.py` and `make_mask.py` open a matplotlib window, so run them from a terminal (not a Jupyter inline cell).

## Data

Course images are already in:

```text
data/course/    cameraman.png  taj.jpg  DerekPicture.jpg  nutmeg.jpg  apple.jpeg  orange.jpeg
```

The Derek + Nutmeg alignment points (eyes) are already in `points/derek_nutmeg.json`.

## Your images

Already prepared in `data/mine/` (long side <= 2048 px, JPEG q95, by `tests/prepare_data.py`, which lists the original file for each):

| File | Used in | Role |
|---|---|---|
| `selfie.jpg` | 1.1 | picture of me |
| `mind_cage.jpg`, `mind_cats.jpg`, `mind_room.jpg` | 2.1 | Gottfried Mind scans, sharpened |
| `sharp.jpg` (dog), `puddle.jpg` (car) | 2.1 | blurred, then re-sharpened and scored with PSNR |
| `dafoe_calm.jpg`, `dafoe_manic.jpg`, `dafoe_snl.jpg`, `skull_human.jpg` | 2.2, 2.4 | hybrids `dafoe_skull`, `dafoe_expr`, `dafoe_snl`; blend `dafoe_mouth` |
| `chimp.jpg`, `skull_chimp.jpg`, `bear.jpg`, `skull_bear.jpg` | 2.2 | x-ray hybrids `chimp_skull`, `bear_skull` (chimp skull watermark cropped) |
| `manhattan.jpg`, `earth_clouds.jpg` | 2.4 | straight seam `manhattan_clouds` |
| `rocket.jpg`, `milky_way.jpg` | 2.4 | irregular mask `rocket_space` |
| `newsom.jpg`, `binladen.jpg` | 2.4 | irregular mask `newsom_beard` |
| `doctor.jpg`, `hubble_deep_field.jpg` | 2.4 | GrabCut mask `doctor_space` (Hubble Deep Field: NASA, public domain, via `skimage.data`) |
| `train.jpg`, `star_trails.jpg` | 2.4 | GrabCut mask `train_space` |
| `earthrise.jpg` | - | prepared, not used in the final set |

Alignment points are in `points/*.json` and masks in `points/*_mask.json` / `*_fg.json`, all picked by hand in `tests/make_points.py` and `tests/make_masks.py` (previews in `tests/previews/`). `code/pick_points.py` (`--n 3` for affine) and `code/make_mask.py` do the same interactively.

## Tests folder

- `tests/prepare_data.py` - original photo -> `data/mine/` name mapping, resize, and the watermark crop
- `tests/make_points.py`, `tests/make_masks.py` - the hand-picked points/masks plus previews in `tests/previews/`
- `tests/run/` - `results.json` (every measured number the webpage quotes) and `run_log.txt` from the reference run
- `tests/build_page.py`, `tests/page_template.html` - generate `index.html` (see Project webpage)

## Run

### 1. (Optional) redo alignment points or masks

```text
python code/pick_points.py data/mine/dafoe_calm.jpg data/mine/skull_human.jpg points/dafoe_skull.json
python code/make_mask.py rocket_space
```

For `pick_points.py`, the image that gets warped comes first (for hybrids: the low-frequency one). Each call saves a preview next to the JSON.

### 2. Run the pipeline

```text
python code/main.py
```

This runs all 10 stages (a few minutes; the four-loop convolution is the slow part by design). Each stage saves as soon as it finishes. If anything stops or an image is missing, fix it and continue with:

```text
python code/main.py --resume
```

Individual stages: `python code/main.py --stage 2.2 2.2.bw`

| Stage | Output folder |
|---|---|
| `1.1` convolution from scratch | `media/conv/` |
| `1.2` finite difference edges | `media/edges/` |
| `1.3` derivative of Gaussian | `media/dog/` |
| `1.bw` gradient orientation | `media/orient/` |
| `2.1` unsharp masking | `media/sharpen/` |
| `2.2` hybrid images | `media/hybrid/<name>/` |
| `2.2.bw` hybrid color study | `media/hybrid/<name>/color_*` |
| `2.3` Gaussian/Laplacian stacks + Fig. 3.42 | `media/stacks/` |
| `2.4` multiresolution blending | `media/blend/<name>/` |
| `2.4.bw` blend color and depth study | `media/blend/<name>/gray.jpg`, `depth_*` |

### 3. Tune (optional)

Open the results in `media/` and adjust `config.json` if needed, then rerun just that stage:

- hybrids: set `cutoff_low` / `cutoff_high` in cycles/image (or `sigma_low` / `sigma_high` in px). Lower `cutoff_low` if the far image shows up close; raise `cutoff_high` if the close-up image still shows from far. Keep `cutoff_low < cutoff_high` so the two filters leave a gap.
- blends: more `levels` or a larger `s0` gives a wider, softer transition for low-frequency color.

### 4. Bundle for review

```text
python code/main.py --bundle
```

This writes `out/review_bundle.zip` (reduced copies of all figures, `results.json`, config, point previews), small enough to share. Use `--out tests/run` to write results somewhere other than `out/`.

## Conventions

- Images are float in [0, 1]. `D_x = [1, 0, -1]`, `D_y = D_x^T`; convolution flips the kernel, so `D_x` responds positively when intensity increases to the right.
- Parts 1.2 onward use `scipy.signal.convolve2d(..., boundary='symm')` (reflected borders). Part 1.1 compares zero fill against reflection.
- The provided `cameraman.png` has a thin white margin (7/1/1/5 px top/bottom/left/right); it is trimmed so the frame does not show up as an edge.
- Hybrid cutoffs follow Oliva et al.: the frequency where the Gaussian gain is 1/2, `f_c = 0.1874 / sigma` cycles/pixel, reported in cycles/image over the shorter image side.
- Stack level `k` has total blur `s0 * 2^(k-1)` (0 at level 0), so each level halves the bandwidth like a pyramid level would. Blending streams through the levels, so memory stays flat at full resolution.
- Alignment: 2 point pairs use the starter code (similarity transform); 3 pairs (e.g. eyes + mouth) solve an affine transform. Either way the image being warped is resized first, so the reference image keeps its native resolution.
- Masks: `step`, `ellipse`, `polygon`, `file`, or `grabcut` (a rough polygon refined to the subject's outline by OpenCV GrabCut). `"space": "a"` / `"b"` draws the mask on that source photo and warps it along with the alignment.

## Project webpage

`index.html` is generated, not hand-edited:

```text
python tests/build_page.py                    # numbers from tests/run/results.json
python tests/build_page.py out/results.json   # or from your own run
```

The prose lives in `tests/page_template.html`; every number is filled in from `results.json` and every code snippet is cut from `code/*.py` at build time, so the page always matches the code and the last run. The builder fails if a placeholder has no value and reports any image path that does not exist.

The page uses two small additions to the shared site files (both additive, nothing existing changed): opt-in side-by-side grid classes (`.media-grid.compare-2` to `compare-5`) plus a highlighted table row style at the end of `assets/site.css`, and a Project 02 card in the root `index.html`.

https://codegrox.github.io/cs180_proj2/
