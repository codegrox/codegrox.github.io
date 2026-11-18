# FlagWaverPlus

Wave many flags at once in one 3D scene — live at https://codegrox.github.io/projects/FlagWaverPlus/

Built on the cloth simulation from [FlagWaver](https://github.com/krikienoid/flagwaver) (MIT) and extended
with multiple flags, layouts (row / arc / circle / grid / V / scatter), per-flag pole and rotation settings,
a travelling gust, microphone-driven wind, landmark/panorama backdrops, autosave + scene files, shareable URLs
and screenshots.

## Credits

- **[FlagWaver](https://github.com/krikienoid/flagwaver)** by [krikienoid](https://github.com/krikienoid) — the
  cloth physics, flag and flagpole code vendored in `app/src/flagwaver/` (MIT, license and NOTICE kept there).
  FlagWaver is itself based on earlier work by [flagtest.nz](http://flagtest.nz/) and
  [Joshua Koo](https://github.com/zz85) (three.js cloth simulation).
- [three.js](https://threejs.org) (MIT) for rendering; [Vite](https://vitejs.dev) for the build.
- Country flag images: [flagcdn.com](https://flagcdn.com), loaded at runtime.
- Scenery photos in `scenery/`, from Wikimedia Commons: the classic FlagWaver sky "Sky over Washington Monument" (Andypham3000, public domain); US Capitol west front (Architect of the Capitol,
  public domain); Taj Mahal, Agra (Yann, edit Jbarta, CC BY-SA 3.0); Yosemite Valley from Tunnel View (Diliff,
  CC BY-SA 3.0).
- Everything else (multi-flag manager, layouts, gust, mic wind, scenery system, persistence, UI): MIT, see `app/LICENSE`.

## Layout

- `index.html`, `assets/` — the built app that GitHub Pages serves. Do not edit by hand.
- `app/` — the source (Vite + three.js). See `app/README.md`.
- `scenery/` — backdrop photos (downloaded once with `app/tools/fetch-scenery.ps1`; credits in `scenery/CREDITS.txt`).

## Rebuild after changing the source

```
cd app
npm install
npm run build
```

`npm run build` writes `index.html` and `assets/` into this folder. Commit both the source and the build.
For live-reload development use `npm run dev` inside `app/`.
