import './style.css';

import World from './scene/World';
import FlagManager from './scene/FlagManager';
import MicWind from './wind/micWind';
import createPanel from './ui/panel';
import createToaster from './ui/toast';
import { readHash } from './state/urlState';
import { saveScene, loadScene, storedKeysIn, consumeSkipFlag } from './state/persist';
import { pruneStored } from './state/imageStore';

const stage = document.getElementById('stage');
const panelRoot = document.getElementById('panel');
const toast = createToaster(document.getElementById('toasts'));

const world = new World(stage);
world.obstructionLeft = () =>
    (window.innerWidth > 720 && !panelRoot.classList.contains('collapsed')) ? panelRoot.offsetWidth + 24 : 0;
const manager = new FlagManager(world);
world.setGround('grass');
const mic = new MicWind();

// Mic loudness feeds extra wind speed every step.
world.onUpdate(() => { manager.externalGain = mic.extraSpeed; });

manager.on((type, payload) => {
    if (type === 'error') toast(payload.message, 'error', 4500);
});

const panel = createPanel(panelRoot, { manager, world, mic, toast });

// Initial scene: URL hash (shared link) > autosaved scene > demo row of offline flags.
const fromUrl = readHash();
const saved = consumeSkipFlag() ? null : loadScene();
const initial = (fromUrl && Array.isArray(fromUrl.flags)) ? fromUrl : (saved && Array.isArray(saved.flags)) ? saved : null;
if (initial) {
    manager.fromJSON(initial);
    panel.applyState(initial);
} else {
    // Japan, Armenia and France are drawn offline; US and Hong Kong come from flagcdn.com.
    for (const src of [
        { type: 'simple', value: 'japan' },
        { type: 'simple', value: 'armenia' },
        { type: 'country', value: 'us' },
        { type: 'simple', value: 'france' },
        { type: 'country', value: 'hk' }
    ]) manager.addFlag(src);
}
setTimeout(() => world.frame(manager.bounds, false), 60);

// Autosave: compare serialized state every 1.5 s and write only when it changed.
let lastSaved = '';
setInterval(() => {
    const st = panel.getState();
    const json = JSON.stringify(st);
    if (json !== lastSaved) { lastSaved = json; saveScene(st); }
}, 1500);
window.addEventListener('beforeunload', () => saveScene(panel.getState()));

// Drop stored images nothing references any more (current scene + recently-used strip).
setTimeout(() => {
    const keep = storedKeysIn(panel.getState());
    try {
        for (const src of JSON.parse(localStorage.getItem('flagwaverplus.history.v1') || '[]')) if (src.type === 'stored') keep.add(src.value);
    } catch { /* ignore */ }
    pruneStored(keep);
}, 8000);

// Expose for poking around in devtools
window.flagwaverplus = { world, manager, mic };
