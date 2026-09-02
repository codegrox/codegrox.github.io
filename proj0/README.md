# CS180 Project 0 — Becoming Friends with Your Camera

Self-contained project webpage. No build step, no dependencies, no framework:
one HTML file plus a folder of images. Open `index.html` in a browser to check it,
push the folder to GitHub, turn on Pages, done.

```
proj0/
├── index.html          the whole page — styles and scripts are inline
├── README.md           this file
└── media/
    ├── p1-close.jpg            part 1 — arm's-length selfie (as shot)
    ├── p1-far.jpg              part 1 — stepped back + zoom (as shot)
    ├── p1-close-aligned.jpg    part 1 — same frame, registered on the pupils
    ├── p1-far-aligned.jpg      part 1 — same frame, registered on the pupils
    ├── p2-far-zoom.jpg         part 2 — PLACEHOLDER, replace me
    ├── p2-near-wide.jpg        part 2 — PLACEHOLDER, replace me
    ├── p3-raw-1..4.jpg         part 3 — the four originals
    ├── p3-aligned-1..4.jpg     part 3 — the four frames registered on the chair
    ├── p3-baseboard.jpg        part 3 — the skirting-board measurement figure
    ├── dolly-raw.gif           part 3 — loop, straight out of the camera
    └── dolly-aligned.gif       part 3 — loop, after registration
```

---

## 1. Put it on GitHub Pages

If you already have a repo for the class, drop the `proj0/` folder in it and skip to
"enable Pages".

```bash
# from the folder that contains proj0/
git init
git add proj0
git commit -m "CS180 project 0"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/cs180.git
git push -u origin main
```

Create the empty `cs180` repo on github.com first (green **New** button, public, no README).

**Enable Pages:** repo → **Settings** → **Pages** → *Source:* **Deploy from a branch** →
*Branch:* **main**, folder **/ (root)** → **Save**. First build takes a minute or two.

Your URL will be:

```
https://<YOUR-USERNAME>.github.io/cs180/proj0/
```

If you'd rather have it at the top level, name the repo `<YOUR-USERNAME>.github.io`
instead and the URL becomes `https://<YOUR-USERNAME>.github.io/proj0/`.

## 2. Add the Part 2 photos when you shoot them

Two frames of the same facade, seen at an angle (not straight on):

1. stand well back, zoom in until the building fills the frame → save as `media/p2-far-zoom.jpg`
2. walk toward it, shoot wide, stop when the building is about the same size in the
   viewfinder → save as `media/p2-near-wide.jpg`

Keep the same corner of the building in both. Nothing else to change — `index.html`
already points at those two filenames. Then open `index.html` and delete the one
orange "pending" box in the Part 2 section (search for `pending —`), commit, push.

## 3. Submit

1. **Class gallery:** paste the Pages URL into <https://forms.gle/4QnsLsQo3eLwhVKA9>
2. **Gradescope** (entry code **G7EVRZ**): open the live URL in Chrome → **Print** →
   *Destination:* **Save as PDF** → **More settings** → tick **Headers and footers**
   (this is what puts the URL in the header, which the spec asks for) and leave
   **Background graphics** unticked → Save.

The page is styled for that: printing switches it to a white page (colour kept, background graphics off), each part starts
on a fresh page, and figures, tables and code blocks are marked `break-inside: avoid`
so nothing gets sliced across a page boundary. `proj0-preview.pdf` (one folder up) is
what that comes out looking like — 10 pages — but print your own from the live URL so
the header carries the real address.

## Editing notes

- The byline is in two places: the `author` row near the top and the last line of the
  page. Search for `Mo Antablyan`.
- All colours live in the `:root` block at the top of `index.html`; the print rules are
  the `@media print` block at the end of the stylesheet.
- The page has two small interactive bits (the portrait wipe and the frame stepper).
  Both are hidden when printing, and the same information appears as static figures, so
  the PDF loses nothing.
