import './style.css';

import World from './scene/World';
import FlagManager from './scene/FlagManager';
import MicWind from './wind/micWind';
import createPanel from './ui/panel';
import createToaster from './ui/toast';
import { readHash } from './state/urlState';

const stage = document.getElementById('stage');
const panelRoot = document.getElementById('panel');
const toast = createToaster(document.getElementById('toasts'));

const world = new World(stage);
world.obstructionLeft = () =>
    (window.innerWidth > 720 && !panelRoot.classList.contains('collapsed')) ? panelRoot.offsetWidth + 24 : 0;
const manager = new FlagManager(world);
const mic = new MicWind();

// Mic loudness feeds extra wind speed every step.
world.onUpdate(() => { manager.externalGain = mic.extraSpeed; });

manager.on((type, payload) => {
    if (type === 'error') toast(payload.message, 'error', 4500);
});

createPanel(panelRoot, { manager, world, mic, toast });

// Initial scene: from URL hash if present, otherwise a demo row of offline flags.
const fromUrl = readHash();
if (fromUrl && Array.isArray(fromUrl.flags)) {
    manager.fromJSON(fromUrl);
} else {
    for (const id of ['armenia', 'ukraine', 'japan', 'italy', 'sweden']) {
        manager.addFlag({ type: 'simple', value: id });
    }
}
setTimeout(() => world.frame(manager.bounds, false), 60);

// Expose for poking around in devtools
window.flagwaverplus = { world, manager, mic };
