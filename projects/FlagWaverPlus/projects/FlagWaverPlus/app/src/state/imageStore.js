// Uploaded images live in IndexedDB as downscaled data URLs so a scene survives a tab close.
// Keys are random ids; sources reference them as { type: 'stored', value: key, name }.

const DB = 'flagwaverplus';
const STORE = 'images';
let dbPromise = null;

function open() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
        if (!('indexedDB' in window)) { reject(new Error('IndexedDB unavailable')); return; }
        const req = indexedDB.open(DB, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(STORE);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
    return dbPromise;
}

function tx(mode, fn) {
    return open().then(db => new Promise((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const req = fn(t.objectStore(STORE));
        t.oncomplete = () => resolve(req && req.result);
        t.onerror = () => reject(t.error);
    }));
}

export const imageStore = {
    get: (key) => tx('readonly', s => s.get(key)),
    put: (key, value) => tx('readwrite', s => s.put(value, key)),
    del: (key) => tx('readwrite', s => s.delete(key)),
    keys: () => tx('readonly', s => s.getAllKeys())
};

const memo = new Map(); // key -> dataUrl, avoids re-reading IDB in one session

export async function getStoredDataUrl(key) {
    if (memo.has(key)) return memo.get(key);
    const rec = await imageStore.get(key);
    if (!rec) throw new Error('Stored image is missing (browser data was cleared).');
    memo.set(key, rec.dataUrl);
    return rec.dataUrl;
}

export async function getStoredRecord(key) {
    return imageStore.get(key);
}

/**
 * Downscale a File/Blob to at most maxWidth px and store it. PNG/GIF/SVG keep alpha; others become JPEG.
 * @returns {Promise<{key:string,name:string,dataUrl:string}>}
 */
export async function storeImageFile(file, maxWidth = 1024) {
    const dataUrl = await downscaleToDataUrl(file, maxWidth);
    const key = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    const name = (file.name || 'image').replace(/\.[^.]+$/, '');
    await imageStore.put(key, { dataUrl, name, added: Date.now() });
    memo.set(key, dataUrl);
    return { key, name, dataUrl };
}

/** Store an already-made data URL under a new key (used by scene-file import). */
export async function storeDataUrl(dataUrl, name, key = null) {
    key = key || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    await imageStore.put(key, { dataUrl, name, added: Date.now() });
    memo.set(key, dataUrl);
    return key;
}

/** Remove stored images not in `keep` (a Set of keys). */
export async function pruneStored(keep) {
    try {
        const keys = await imageStore.keys();
        for (const k of keys) if (!keep.has(k)) { await imageStore.del(k); memo.delete(k); }
    } catch { /* ignore */ }
}

function downscaleToDataUrl(file, maxWidth) {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            URL.revokeObjectURL(url);
            const scale = Math.min(1, maxWidth / img.width);
            const w = Math.max(1, Math.round(img.width * scale));
            const h = Math.max(1, Math.round(img.height * scale));
            const c = document.createElement('canvas');
            c.width = w; c.height = h;
            c.getContext('2d').drawImage(img, 0, 0, w, h);
            const keepAlpha = /png|gif|svg|webp/i.test(file.type);
            resolve(keepAlpha ? c.toDataURL('image/png') : c.toDataURL('image/jpeg', 0.9));
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Not a readable image')); };
        img.src = url;
    });
}
