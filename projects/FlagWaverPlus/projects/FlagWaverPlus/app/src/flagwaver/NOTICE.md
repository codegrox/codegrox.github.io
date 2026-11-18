# Vendored FlagWaver core

Source: https://github.com/krikienoid/flagwaver (v3.0.0, MIT License — see LICENSE in this folder).
Written by krikienoid; based on previous work by flagtest.nz (http://flagtest.nz/) and Joshua Koo (https://github.com/zz85).

Kept as-is: `physics/`, `subjects/`, `interactions/`, `helpers/`, `utils/`, `webgl/`, `constants.js`.

Changes for FlagWaverPlus:
- Removed `app/` (the module system; FlagWaverPlus has its own loop in `scene/World.js`) and `utils/initStats.js`.
- Removed `helpers/createInteraction.js` and `utils/cartesianProduct.js` (unused here).
- `webgl/ShaderChunk.js` imports the GLSL files with Vite's `?raw` suffix.
- `FlagWaver.js` no longer exports the app modules.
