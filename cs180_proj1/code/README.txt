CS180 Project 1 - Images of the Russian Empire
Hovhannes Antablyan

Files
-----
align.py   alignment code (single-scale, pyramid, NCC/L2, gradient feature)
main.py    runs the code on the provided and extra images

Setup
-----
Python 3.9+

pip install numpy scikit-image pillow

The image data is not included in the submission. I kept the provided plates in
CS180_fa2026_proj1_data and my downloaded plates in
CS180_fa2026_proj1_data/extra.

Run
---
From the project folder:

python main.py --data CS180_fa2026_proj1_data --extra CS180_fa2026_proj1_data/extra --out out

The script does:
- single-scale NCC and L2 on the small JPG images
- pyramid NCC on all provided images
- pyramid NCC on the extra images
- a pyramid L2 comparison
- a gradient-NCC comparison (mainly useful for Emir)

It prints the G and R offsets and also writes results.csv/results.md.
The aligned images are saved under out/, with smaller website copies under
out/web/.

Offset convention
-----------------
Offsets are printed as (x, y). Positive x moves right and positive y moves down.
G and R are aligned to the blue channel.
