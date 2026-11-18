// Procedural, tileable ground textures drawn on a canvas (no downloads). Each returns
// { canvas, metersPerTile, roughness, bumpScale }. 1024 px tiles, generated once and cached.

const SIZE = 1024;
const cache = new Map();

export const GROUNDS = {
    grass:    { label: 'Grass' },
    lawn:     { label: 'Striped lawn' },
    pavers:   { label: 'Pavers' },
    cobbles:  { label: 'Cobblestone' },
    concrete: { label: 'Concrete' },
    sand:     { label: 'Sand' },
    snow:     { label: 'Snow' },
    gravel:   { label: 'Gravel / rock' },
    plain:    { label: 'Plain colour' }
};
export const GROUND_IDS = Object.keys(GROUNDS);

// Small deterministic PRNG so every visitor gets the same tile
function rng(seed) {
    let s = seed >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

function clamp(v) { return v < 0 ? 0 : v > 255 ? 255 : v; }

/** Tileable value noise in [0,1], `oct` octaves, base frequency `freq` cells per tile. */
function makeNoise(seed, freq, oct = 4) {
    const r = rng(seed);
    const grids = [];
    for (let o = 0; o < oct; o++) {
        const n = freq << o;
        const g = new Float32Array(n * n);
        for (let i = 0; i < g.length; i++) g[i] = r();
        grids.push({ n, g });
    }
    return (x, y) => { // x,y in [0,1)
        let v = 0, amp = 0.5, tot = 0;
        for (const { n, g } of grids) {
            const fx = x * n, fy = y * n;
            const x0 = Math.floor(fx) % n, y0 = Math.floor(fy) % n;
            const x1 = (x0 + 1) % n, y1 = (y0 + 1) % n;
            const tx = fx - Math.floor(fx), ty = fy - Math.floor(fy);
            const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
            const a = g[y0 * n + x0], b = g[y0 * n + x1], c = g[y1 * n + x0], d = g[y1 * n + x1];
            v += amp * ((a + (b - a) * sx) + ((c + (d - c) * sx) - (a + (b - a) * sx)) * sy);
            tot += amp; amp *= 0.5;
        }
        return v / tot;
    };
}

function fillNoise(img, fn) {
    const d = img.data;
    for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
            const [r, g, b] = fn(x / SIZE, y / SIZE, x, y);
            const i = (y * SIZE + x) * 4;
            d[i] = clamp(r); d[i + 1] = clamp(g); d[i + 2] = clamp(b); d[i + 3] = 255;
        }
    }
}

const GENERATORS = {
    grass(ctx) {
        const img = ctx.createImageData(SIZE, SIZE);
        const n1 = makeNoise(11, 8, 5), n2 = makeNoise(12, 64, 2), n3 = makeNoise(13, 3, 2);
        fillNoise(img, (u, v) => {
            const base = n1(u, v), fine = n2(u, v), macro = n3(u, v);
            const t = 0.55 * base + 0.35 * fine + 0.1 * macro;
            // between a yellow-green and a deep green
            return [50 + 70 * t, 95 + 70 * t, 30 + 30 * t];
        });
        ctx.putImageData(img, 0, 0);
        // blades: short strokes
        const r = rng(14);
        for (let i = 0; i < 9000; i++) {
            const x = r() * SIZE, y = r() * SIZE, len = 4 + r() * 10, a = -Math.PI / 2 + (r() - 0.5) * 1.2;
            const k = r();
            ctx.strokeStyle = `rgba(${40 + 90 * k},${110 + 80 * k},${30 + 30 * k},0.55)`;
            ctx.lineWidth = 1 + r();
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); ctx.stroke();
            // wrap copies for tileability near edges
            if (x < 16) { ctx.beginPath(); ctx.moveTo(x + SIZE, y); ctx.lineTo(x + SIZE + Math.cos(a) * len, y + Math.sin(a) * len); ctx.stroke(); }
            if (y < 16) { ctx.beginPath(); ctx.moveTo(x, y + SIZE); ctx.lineTo(x + Math.cos(a) * len, y + SIZE + Math.sin(a) * len); ctx.stroke(); }
        }
        return { metersPerTile: 3, roughness: 0.95, bumpScale: 0.015 };
    },
    lawn(ctx) {
        const g = GENERATORS.grass(ctx);
        // mowing stripes: 4 bands per tile, alternating lighter
        for (let i = 0; i < 4; i++) {
            ctx.fillStyle = i % 2 ? 'rgba(255,255,220,0.10)' : 'rgba(0,30,0,0.10)';
            ctx.fillRect(0, (i * SIZE) / 4, SIZE, SIZE / 4);
        }
        return { ...g, metersPerTile: 4 };
    },
    pavers(ctx) {
        const r = rng(21);
        const cols = 6, rows = 12; // 0.33 x 0.17 m stones on a 2 m tile
        const cw = SIZE / cols, rh = SIZE / rows;
        ctx.fillStyle = '#8d867c'; ctx.fillRect(0, 0, SIZE, SIZE); // mortar
        for (let j = 0; j < rows; j++) {
            const off = (j % 2) * cw / 2;
            for (let i = -1; i < cols; i++) {
                const k = 0.75 + r() * 0.3;
                const warm = r() * 18;
                ctx.fillStyle = `rgb(${clamp(165 * k + warm)},${clamp(150 * k + warm * 0.6)},${clamp(135 * k)})`;
                ctx.fillRect(i * cw + off + 3, j * rh + 3, cw - 6, rh - 6);
            }
        }
        const img = ctx.getImageData(0, 0, SIZE, SIZE);
        const n = makeNoise(22, 48, 3);
        const d = img.data;
        for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) {
            const i = (y * SIZE + x) * 4, t = (n(x / SIZE, y / SIZE) - 0.5) * 40;
            d[i] = clamp(d[i] + t); d[i + 1] = clamp(d[i + 1] + t); d[i + 2] = clamp(d[i + 2] + t);
        }
        ctx.putImageData(img, 0, 0);
        return { metersPerTile: 2, roughness: 0.85, bumpScale: 0.03 };
    },
    cobbles(ctx) {
        const r = rng(31);
        ctx.fillStyle = '#4a4540'; ctx.fillRect(0, 0, SIZE, SIZE);
        const n = 14, s = SIZE / n;
        for (let j = -1; j <= n; j++) for (let i = -1; i <= n; i++) {
            const cx = (i + 0.5 + (j % 2) * 0.5) * s + (r() - 0.5) * s * 0.2;
            const cy = (j + 0.5) * s + (r() - 0.5) * s * 0.2;
            const rad = s * (0.38 + r() * 0.08);
            const k = 0.7 + r() * 0.4;
            const grad = ctx.createRadialGradient(cx - rad * 0.3, cy - rad * 0.3, rad * 0.1, cx, cy, rad);
            grad.addColorStop(0, `rgb(${clamp(150 * k)},${clamp(145 * k)},${clamp(140 * k)})`);
            grad.addColorStop(1, `rgb(${clamp(85 * k)},${clamp(82 * k)},${clamp(80 * k)})`);
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.ellipse(cx, cy, rad, rad * (0.85 + r() * 0.2), r() * 0.6, 0, Math.PI * 2); ctx.fill();
        }
        return { metersPerTile: 2.2, roughness: 0.8, bumpScale: 0.05 };
    },
    concrete(ctx) {
        const img = ctx.createImageData(SIZE, SIZE);
        const n1 = makeNoise(41, 6, 5), n2 = makeNoise(42, 128, 1);
        fillNoise(img, (u, v) => {
            const t = 0.7 * n1(u, v) + 0.3 * n2(u, v);
            const c = 150 + 50 * t;
            return [c, c, c - 4];
        });
        ctx.putImageData(img, 0, 0);
        ctx.strokeStyle = 'rgba(60,60,60,0.55)'; ctx.lineWidth = 3;
        ctx.strokeRect(1.5, 1.5, SIZE - 3, SIZE - 3);
        ctx.beginPath(); ctx.moveTo(SIZE / 2, 0); ctx.lineTo(SIZE / 2, SIZE); ctx.moveTo(0, SIZE / 2); ctx.lineTo(SIZE, SIZE / 2); ctx.stroke();
        return { metersPerTile: 4, roughness: 0.9, bumpScale: 0.01 };
    },
    sand(ctx) {
        const img = ctx.createImageData(SIZE, SIZE);
        const n1 = makeNoise(51, 5, 5), n2 = makeNoise(52, 96, 2);
        fillNoise(img, (u, v) => {
            const t = 0.6 * n1(u, v) + 0.4 * n2(u, v);
            return [200 + 40 * t, 180 + 40 * t, 135 + 40 * t];
        });
        ctx.putImageData(img, 0, 0);
        return { metersPerTile: 4, roughness: 1, bumpScale: 0.02 };
    },
    snow(ctx) {
        const img = ctx.createImageData(SIZE, SIZE);
        const n1 = makeNoise(61, 4, 5), n2 = makeNoise(62, 128, 1);
        fillNoise(img, (u, v) => {
            const t = 0.7 * n1(u, v) + 0.3 * n2(u, v);
            return [225 + 30 * t, 230 + 25 * t, 240 + 15 * t];
        });
        ctx.putImageData(img, 0, 0);
        return { metersPerTile: 4, roughness: 0.7, bumpScale: 0.02 };
    },
    gravel(ctx) {
        const img = ctx.createImageData(SIZE, SIZE);
        const n1 = makeNoise(71, 10, 5), n2 = makeNoise(72, 160, 1);
        fillNoise(img, (u, v) => {
            const t = 0.5 * n1(u, v) + 0.5 * n2(u, v);
            return [95 + 70 * t, 90 + 65 * t, 85 + 60 * t];
        });
        ctx.putImageData(img, 0, 0);
        const r = rng(73);
        for (let i = 0; i < 2500; i++) {
            const k = r();
            ctx.fillStyle = `rgba(${60 + 120 * k},${58 + 110 * k},${55 + 100 * k},0.8)`;
            ctx.beginPath(); ctx.ellipse(r() * SIZE, r() * SIZE, 2 + r() * 7, 2 + r() * 5, r() * 3, 0, Math.PI * 2); ctx.fill();
        }
        return { metersPerTile: 3, roughness: 0.95, bumpScale: 0.04 };
    }
};

/** @returns {{canvas: HTMLCanvasElement, metersPerTile:number, roughness:number, bumpScale:number}|null} null for 'plain' */
export function getGroundTile(id) {
    if (id === 'plain' || !GENERATORS[id]) return null;
    if (cache.has(id)) return cache.get(id);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    const info = GENERATORS[id](ctx);
    const out = { canvas, ...info };
    cache.set(id, out);
    return out;
}
