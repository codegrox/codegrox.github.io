## Files

- `index.html` — redesigned portfolio homepage.
- `assets/site.css` — shared design system for every current and future project.
- `assets/site.js` — theme toggle, sticky header state, back-to-top, and reusable project interactions.
- `proj0/index.html` — redesigned Project 0 page. Keep your existing `proj0/media/` directory next to it.
- `project-template/index.html` — starter for future projects.
- `STYLE_GUIDE.md` — short conventions for extending the site.

## Apply to the repository

From the root of a local clone of `codegrox.github.io`:

1. Back up or commit the current site.
2. Copy `assets/`, `index.html`, `proj0/index.html`, `project-template/`, and `STYLE_GUIDE.md` into the repository.
3. Do **not** delete `proj0/media/`.
4. Preview locally:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`.

5. Publish after checking:

```powershell
git add index.html assets proj0/index.html project-template STYLE_GUIDE.md
git commit -m "Restyle portfolio with editorial project system"
git push origin main
```

## Adding Project 1

Copy `project-template` to `proj1`, edit the page content, and keep using `../assets/site.css` and `../assets/site.js`. The homepage only needs one new `.folio-card` entry.
