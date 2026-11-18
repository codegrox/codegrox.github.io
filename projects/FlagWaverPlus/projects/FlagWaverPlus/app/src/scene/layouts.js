import { Vector3 } from 'three';

/**
 * Each layout returns an array of { position: Vector3, rotationY: number }
 * for n flagpoles, given a spacing (meters between neighbouring poles).
 * Poles stand on y = 0. Flags fly toward +x of the pole's local space, so
 * rotationY rotates where the fly end points.
 */
export const LAYOUTS = {
    row: {
        label: 'Row',
        place(n, spacing) {
            const out = [];
            const total = (n - 1) * spacing;
            for (let i = 0; i < n; i++) {
                out.push({ position: new Vector3(-total / 2 + i * spacing, 0, 0), rotationY: 0 });
            }
            return out;
        }
    },
    arc: {
        label: 'Arc',
        place(n, spacing) {
            if (n === 1) return [{ position: new Vector3(0, 0, 0), rotationY: 0 }];
            const sweep = Math.PI * 0.8;
            const radius = Math.max(spacing, ((n - 1) * spacing) / sweep);
            const out = [];
            for (let i = 0; i < n; i++) {
                const a = -sweep / 2 + (sweep * i) / (n - 1);
                out.push({
                    position: new Vector3(Math.sin(a) * radius, 0, -Math.cos(a) * radius + radius),
                    rotationY: 0
                });
            }
            return out;
        }
    },
    circle: {
        label: 'Circle',
        place(n, spacing) {
            if (n === 1) return [{ position: new Vector3(0, 0, 0), rotationY: 0 }];
            const radius = Math.max(spacing, (n * spacing) / (2 * Math.PI));
            const out = [];
            for (let i = 0; i < n; i++) {
                const a = (i / n) * Math.PI * 2;
                out.push({ position: new Vector3(Math.sin(a) * radius, 0, Math.cos(a) * radius), rotationY: 0 });
            }
            return out;
        }
    },
    grid: {
        label: 'Grid',
        place(n, spacing) {
            const cols = Math.ceil(Math.sqrt(n));
            const rows = Math.ceil(n / cols);
            const out = [];
            for (let i = 0; i < n; i++) {
                const c = i % cols;
                const r = Math.floor(i / cols);
                out.push({
                    position: new Vector3(
                        (c - (cols - 1) / 2) * spacing,
                        0,
                        (r - (rows - 1) / 2) * spacing * 1.4
                    ),
                    rotationY: 0
                });
            }
            return out;
        }
    },
    vee: {
        label: 'V formation',
        place(n, spacing) {
            const out = [];
            for (let i = 0; i < n; i++) {
                const side = i % 2 === 0 ? -1 : 1;
                const k = Math.ceil(i / 2);
                out.push({
                    position: new Vector3(side * k * spacing * 0.8, 0, k * spacing * 0.9),
                    rotationY: 0
                });
            }
            return out;
        }
    },
    scatter: {
        label: 'Scatter',
        place(n, spacing) {
            // Deterministic pseudo-random so the layout is stable between reloads.
            let seed = 1337;
            const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
            const extent = Math.sqrt(n) * spacing;
            const out = [];
            for (let i = 0; i < n; i++) {
                out.push({
                    position: new Vector3((rnd() - 0.5) * extent * 1.6, 0, (rnd() - 0.5) * extent),
                    rotationY: (rnd() - 0.5) * 0.6
                });
            }
            return out;
        }
    }
};

export const LAYOUT_IDS = Object.keys(LAYOUTS);
