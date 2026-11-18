// Scene <-> URL hash. Compact JSON, base64url encoded. Uploaded/painted images
// are not shareable (too large); the UI says so.

function b64url(str) {
    return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function unb64url(str) {
    const s = str.replace(/-/g, '+').replace(/_/g, '/');
    return decodeURIComponent(escape(atob(s + '='.repeat((4 - (s.length % 4)) % 4))));
}

export function encodeState(state) {
    return b64url(JSON.stringify(state));
}

export function decodeState(hash) {
    try {
        const h = hash.replace(/^#/, '');
        if (!h) return null;
        return JSON.parse(unb64url(h));
    } catch (e) {
        console.warn('FlagWaverPlus: could not parse URL state', e);
        return null;
    }
}

export function writeHash(state) {
    const encoded = encodeState(state);
    history.replaceState(null, '', `#${encoded}`);
    return `${location.origin}${location.pathname}#${encoded}`;
}

export function readHash() {
    return decodeState(location.hash);
}
