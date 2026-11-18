# FlagWaverPlus

Wave as many flags as you like in one 3D scene. Built on the cloth simulation from
[FlagWaver](https://github.com/krikienoid/flagwaver) (MIT), extended to many flags, layouts,
a travelling gust, and microphone-driven wind.

## Features

- **Many flags** – add any number; each has its own image, size, hoisting side, orientation and pole type
  (vertical, horizontal, outrigger, crossbar, gallery, Australian).
- **Flag sources** – 250 country flags via [flagcdn.com](https://flagcdn.com), 35 offline flags drawn procedurally
  (searchable alongside countries, tagged "offline"), image upload (multi-select), or image URL.
  A "recently used" strip keeps every flag you've added for one-click re-use (countries/URLs persist in localStorage).
- **Arrangements** – row, arc, circle, grid, V formation, scatter; spacing and six fixed flag sizes; drag rows to reorder;
  camera auto-frames. Selected flag is marked with a ring at its pole.
- **Wind** – natural (FlagWaver's wandering direction + varying speed), gusty (fixed direction, turbulent), steady.
- **Travelling gust** – a pulse of wind sweeps along the line so flags ripple one after another.
- **Lung power** – blow into your microphone; loudness becomes extra wind (nothing is recorded or sent).
- **Sky & light presets** – day, sunset, overcast, night, studio, green screen. Soft shadows on a ground plane.
- **Share** – scene (flags, layout, wind) encoded in the URL. Uploaded images stay local.
- **Screenshot** – PNG export of the current frame.
- Space pauses, Tab hides the panel. Drag to orbit, scroll to zoom, right-drag to pan.

## Run locally

```
npm install
npm run dev
```

Open the printed URL (default http://localhost:5173). `npm run build` writes the static site to the parent folder.

## Deploy

This folder lives inside the codegrox.github.io portfolio repo. `npm run build` writes the site into the
parent folder (`projects/FlagWaverPlus/`), which GitHub Pages serves directly — commit the build output
along with the source. Fixed asset names (`assets/app.js`, `assets/style.css`) keep rebuilds clean.

## Project layout

```
index.html              shell: #stage (WebGL canvas), #panel (UI), #toasts
src/main.js             wires World + FlagManager + panel, restores URL state
src/scene/World.js      renderer, camera, OrbitControls, lights, ground, sky dome, fixed-step loop
src/scene/SkyDome.js    gradient sky sphere that follows the camera
src/scene/FlagManager.js  flag entries, loading, per-flag rebuild, layouts, wind + gust, simulation step
src/scene/layouts.js    row / arc / circle / grid / vee / scatter placement
src/scene/presets.js    sky colors, fog, ground color and lights per preset
src/wind/micWind.js     getUserMedia + AnalyserNode -> smoothed loudness
src/ui/panel.js         the whole side panel (tabs: Flags, Wind, Scene, Share)
src/data/countries.js   ISO codes -> names, flagcdn URL helper, search
src/data/simpleFlags.js procedural offline flags
src/state/urlState.js   scene <-> URL hash
src/flagwaver/          vendored FlagWaver core (physics, Flag, flagpoles, wind, helpers) – MIT
```

## How the multi-flag part works

FlagWaver simulates one `Flag` (a Verlet cloth pinned to a `Flagpole`) driven by one `Wind`.
`FlagManager` keeps a list of entries, each with its own `FlagGroup` inside an `Object3D` holder that a
layout positions. Every fixed step (1/60 s, max 3 steps per frame) it updates the shared `Wind`, then for
each flag applies gravity and wind force in the flag's local space (`localizeForce` handles the holder's
rotation), optionally scaled by the travelling-gust factor for that flag's world x, and runs the cloth solver.
Images are loaded once per entry and the flag mesh is rebuilt only when a per-flag setting changes.

## Credits & licenses

- Cloth/flag/flagpole simulation: [FlagWaver](https://github.com/krikienoid/flagwaver) by krikienoid,
  MIT License (copy in `src/flagwaver/LICENSE`). Based on prior work by flagtest.nz and Joshua Koo.
- Country flag images: [flagcdn.com](https://flagcdn.com) (loaded at runtime, not redistributed here).
- Everything else in this folder: MIT, see `LICENSE`.
