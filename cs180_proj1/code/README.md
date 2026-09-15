# CS180 Project 1 - Images of the Russian Empire

Hovhannes Antablyan

## Files

- `align.py` - alignment code: single-scale search, image pyramid, NCC/L2, gradient features, and post-processing helpers
- `main.py` - runs the experiments and writes the result images/tables

## Setup

Python 3.9+

```text
pip install numpy scikit-image pillow
```

## Data

Provided plates are in:

```text
data/course/
```

My additional Prokudin-Gorskii plates are in:

```text
data/extra/
```

## Run

From the `cs180_proj1` folder:

```text
python code/main.py --data data/course --extra data/extra --out out
```

The script runs:

- single-scale NCC and L2 on the small JPG images
- pyramid NCC on all provided images
- pyramid NCC on the extra images
- pyramid L2 for comparison
- gradient-NCC alignment followed by automatic border cropping, gray-pixel white balance, and a shared contrast stretch
- an Emir pyramid visualization under `out/figs/`

It prints the G and R offsets and writes `results.csv` and `results.md`.
Full-size results go under `out/`, with smaller copies under `out/web/`.
The website uses selected copies stored in `media/`.

For a quick test on Emir only:

```text
python code/main.py --data data/course --extra data/extra --out out_test --only emir --no-l2
```

## Offset convention

Offsets are printed as `(x, y)`. Positive x moves right and positive y moves down.
Green and red are aligned to the blue channel.

## Project webpage
https://codegrox.github.io/cs180_proj1/
