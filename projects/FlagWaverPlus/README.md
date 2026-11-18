# FlagWaverPlus

Wave many flags at once in one 3D scene — live at https://codegrox.github.io/projects/FlagWaverPlus/

Built on the cloth simulation from [FlagWaver](https://github.com/krikienoid/flagwaver) (MIT) and extended
with multiple flags, layouts (row / arc / circle / grid / V / scatter), per-flag pole and rotation settings,
a travelling gust, microphone-driven wind, sky/light presets, shareable URLs and screenshots.

## Layout

- `index.html`, `assets/` — the built app that GitHub Pages serves. Do not edit by hand.
- `app/` — the source (Vite + three.js). See `app/README.md`.

## Rebuild after changing the source

```
cd app
npm install
npm run build
```

`npm run build` writes `index.html` and `assets/` into this folder. Commit both the source and the build.
For live-reload development use `npm run dev` inside `app/`.
