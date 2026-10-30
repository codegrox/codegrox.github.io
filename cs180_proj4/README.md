# CS180 Project 4A - Image Warping and Mosaicing

## Files

- `code/homography.py` - A.2: `computeH(im1_pts, im2_pts)` (normalized least squares), `build_system`, residuals
- `code/warp.py` - A.3: `warpImageNearestNeighbor(im, H)`, `warpImageBilinear(im, H)` (inverse warping, alpha mask, interpolation from scratch)
- `code/rectify.py` - A.3 rectification (target rectangle with the measured aspect ratio)
- `code/blend.py` - A.4 gain compensation, feathering (distance transform), two-level blend
- `code/mosaic.py` - A.4 planar mosaics (chain to the middle photo, one-shot canvas)
- `code/cylinder.py` - A.5 cylindrical / spherical mosaics (rotations fitted in pixels, straightening, inverse sampling)
- `code/stage_*.py`, `code/main.py` - the pipeline (`stage_pano.py`: any sweep as a cylindrical panorama); `code/imutils.py` - I/O
- `data/` - the photos used (Pixel 10 Pro, 2048 px long side, EXIF kept)
- `points/correspondences.json` - 12 point pairs per neighbouring photo pair (x, y in data/ pixels)
- `points/rectification.json` - rectangle corners (TL, TR, BR, BL) and measured aspect ratio
- `tests/` - `autocorr.py` (point-proposal helper), `prepare_extra.py` (round-2 photo sets), `relief_blind.py` + `relief_validate.py` (blind rectification of the relief, checked against a straight-on reference; OpenCV used only for the measurement), `test_core.py` (checks vs. OpenCV), `build_page.py` + `page_template.html` (webpage), `run/*.json` (measured numbers)

No banned function is used in `code/`: no `cv2.findHomography`, `cv2.warpPerspective`, `cv2.getPerspectiveTransform`, `skimage.transform.ProjectiveTransform`/`warp`, or library interpolation. OpenCV appears only in `tests/`: the helper that proposes correspondences and the reference comparison in `test_core.py`.

## Setup

```text
pip install -r requirements.txt
```

## Run

```text
python code/main.py               # all stages
python code/main.py rectify       # A.3
python code/main.py mosaics       # A.4 (theatre, rooftop, lawn, street, goldengate + 6 more sets)
python code/main.py wide          # A.5 main sweep
python code/main.py pano          # A.5 theatre7, oldA, oldB
python code/main.py figures       # web copies and comparison figures
python tests/build_page.py        # rebuild index.html from tests/run/*.json
python tests/test_core.py         # computeH / warp checks
```

## Notes

- Homographies are solved with Hartley normalization; across all 44 pairs the median residual stays at or below 0.7 px.
- Round 2 adds 6 planar mosaics, 3 more panoramas and a third rectification (theatre marquee) from the remaining photos.
- Relief blind test: rectified from wall lines + focal length only; vs. the reference, a similarity leaves 8.7 px, an affine 4.5 px, a homography 4.1 px (47 points) - i.e. about a 5% stretch, no perspective left.
- Rectification aspect ratios come from the corners plus the EXIF focal length: h/w = |K^-1 h2| / |K^-1 h1|.
- Mosaics: middle photo as reference, gains from a quarter-size preview (Brown & Lowe), then feather / two-level blending. Full-resolution two-level results are in `media/mosaic/*/twolevel.jpg`.
- A.5: neighbour rotations and one focal length fitted jointly to the points (robust least squares), panorama straightened, every output pixel sampled once from the original photo.

## Home-page card

Add to the root `index.html` project grid if you want a card:

```html
<article class="folio-card">
  <a href="cs180_proj4/">
    <div class="folio-top">
      <span class="folio-label">CS 180 Project 04</span>
      <span class="folio-status">Completed</span>
    </div>
    <h2>Image Warping and Mosaicing</h2>
    <p>Homographies, inverse warping, rectification, blended photo mosaics and a 200° cylindrical panorama.</p>
  </a>
</article>
```
