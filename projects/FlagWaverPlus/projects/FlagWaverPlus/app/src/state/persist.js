// Autosave of the whole scene to localStorage + scene-file export/import (images inlined).
import { getStoredRecord, storeDataUrl } from './imageStore';

const KEY = 'flagwaverplus.scene.v1';

const SKIP = 'flagwaverplus.skipSave';
let suspended = false;

/** Stop autosaving for the rest of this page life (used by Reset so beforeunload can't re-save). */
export function suspendSaving() {
    suspended = true;
    try { sessionStorage.setItem(SKIP, '1'); } catch { /* ignore */ }
}

/** Call once on startup: a reload that followed Reset must not restore the scene. */
export function consumeSkipFlag() {
    try {
        const skip = sessionStorage.getItem(SKIP) === '1';
        sessionStorage.removeItem(SKIP);
        return skip;
    } catch { return false; }
}

export function saveScene(state) {
    if (suspended) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota or private mode */ }
}

export function loadScene() {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

export function clearScene() {
    try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}

/** Keys of stored images referenced by a state object. */
export function storedKeysIn(state) {
    const keys = new Set();
    for (const f of state.flags || []) if (f.source && f.source.type === 'stored') keys.add(f.source.value);
    if (state.sceneryStored) keys.add(state.sceneryStored);
    return keys;
}

/** Build a self-contained scene file: state + every referenced stored image as a data URL. */
export async function exportSceneFile(state) {
    const images = {};
    for (const k of storedKeysIn(state)) {
        const rec = await getStoredRecord(k);
        if (rec) images[k] = { dataUrl: rec.dataUrl, name: rec.name };
    }
    const payload = { app: 'FlagWaverPlus', version: 1, saved: new Date().toISOString(), state, images };
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `flagwaverplus-scene-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

/** Read a scene file, put its images into IndexedDB (same keys), return the state to apply. */
export async function importSceneFile(file) {
    const text = await file.text();
    const payload = JSON.parse(text);
    if (!payload || payload.app !== 'FlagWaverPlus' || !payload.state) throw new Error('Not a FlagWaverPlus scene file.');
    for (const [k, img] of Object.entries(payload.images || {})) {
        if (img && img.dataUrl) await storeDataUrl(img.dataUrl, img.name || 'image', k);
    }
    return payload.state;
}
