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
- **Scenery** – one picture behind the flags, FlagWaver-style: photo backdrops (US Capitol, Taj Mahal) and
  a 360° summit panorama (Mount St Helens), or your own photo / panorama (upload or
  URL). A photo is spread on a plane ~300 m out with its horizon at eye level and the orbit is limited to the
  picture's span (auto-widened when a long row of flags needs more room); a wide strip wraps a full cylinder.
  The sky gradient and fog take their colours from the image so the ground dissolves into it.
- **Ground** – procedural, tileable surfaces generated on a canvas (grass, striped lawn, pavers, cobblestone,
  concrete, sand, snow, gravel, plain) with bump relief and shadows; a low-frequency sample of the same tile
  breaks up visible repetition. Scenery presets suggest a matching surface.
- **Sky & light presets** – day, sunset, overcast, night, studio, green screen. Soft shadows on a ground plane.
- **Remembers your scene** – autosaves to localStorage every 1.5 s (and on tab close); uploaded flag images and
  backdrops are downscaled and kept in IndexedDB, so everything is back when you reopen the page. "Reset" in the
  Share tab returns to the default flags.
- **Scene file** – "Save scene file" writes one `.json` with the full state plus every uploaded image inlined;
  "Load scene file" restores it anywhere. Typical size: tens of KB plus ~100–300 KB per uploaded image.
- **Share link** – flags, layout, wind, sky and backdrop preset encoded in the URL. Uploaded images can't fit in a
  link; use a scene file for those.
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
src/scene/sceneries.js  backdrop presets (Wikimedia URLs, credits, horizon/fov hints)
src/scene/Scenery.js    photo plane / panorama cylinder-sphere, colour sampling, orbit limits
src/scene/groundTextures.js procedural tileable ground textures
src/wind/micWind.js     getUserMedia + AnalyserNode -> smoothed loudness
src/ui/panel.js         the whole side panel (tabs: Flags, Wind, Scene, Share)
src/data/countries.js   ISO codes -> names, flagcdn URL helper, search
src/data/simpleFlags.js procedural offline flags
src/state/urlState.js   scene <-> URL hash
src/state/persist.js    autosave (localStorage), scene-file export/import
src/state/imageStore.js IndexedDB store for uploaded images (downscaled data URLs)
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

- Cloth/flag/flagpole simulation: [FlagWaver](https://github.com/krikienoid/flagwaver) by
  [krikienoid](https://github.com/krikienoid), MIT License (copy in `src/flagwaver/LICENSE`, changes listed in
  `src/flagwaver/NOTICE.md`). FlagWaver is based on prior work by [flagtest.nz](http://flagtest.nz/) and
  [Joshua Koo](https://github.com/zz85).
- Rendering: [three.js](https://threejs.org) (MIT).
- Country flag images: [flagcdn.com](https://flagcdn.com) (loaded at runtime, not redistributed here).
- Scenery photos (in `../scenery/`, downloaded with `tools/fetch-scenery.ps1`), from Wikimedia Commons —
  US Capitol west front (Architect of the Capitol, public domain), Taj Mahal, Agra (Yann, edit Jbarta,
  CC BY-SA 3.0), Mount St Helens Summit Pano (Gregg M. Erickson, CC BY 3.0).
- Everything else in this folder: MIT, see `LICENSE`.
