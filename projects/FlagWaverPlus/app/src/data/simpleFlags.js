// Procedurally drawn flags (no network needed). Simple geometric designs only.
// Each spec is a list of draw ops on a normalized 1x1 canvas.
//   ['h', [colors]]           horizontal bands, top to bottom
//   ['v', [colors]]           vertical bands, left to right
//   ['rect', color, x, y, w, h]
//   ['disc', color, cx, cy, r]
//   ['cross', color, cx, cy, thickness]        Nordic/Greek style cross
//   ['diag', color, thickness]                 diagonal band
//   ['tri', color, [x1,y1,x2,y2,x3,y3]]        triangle
//   ['star', color, cx, cy, r, points]

export const SIMPLE_FLAGS = {
    armenia:     { name: 'Armenia',      ratio: 2,   ops: [['h', ['#d90012', '#0033a0', '#f2a800']]] },
    austria:     { name: 'Austria',      ratio: 1.5, ops: [['h', ['#ed2939', '#ffffff', '#ed2939']]] },
    bangladesh:  { name: 'Bangladesh',   ratio: 5/3, ops: [['rect', '#006a4e', 0, 0, 1, 1], ['disc', '#f42a41', 0.45, 0.5, 0.3]] },
    belgium:     { name: 'Belgium',      ratio: 15/13, ops: [['v', ['#000000', '#fae042', '#ed2939']]] },
    colombia:    { name: 'Colombia',     ratio: 1.5, ops: [['rect', '#fcd116', 0, 0, 1, 0.5], ['rect', '#003893', 0, 0.5, 1, 0.25], ['rect', '#ce1126', 0, 0.75, 1, 0.25]] },
    czechia:     { name: 'Czechia',      ratio: 1.5, ops: [['h', ['#ffffff', '#d7141a']], ['tri', '#11457e', [0, 0, 0.5, 0.5, 0, 1]]] },
    denmark:     { name: 'Denmark',      ratio: 37/28, ops: [['rect', '#c60c30', 0, 0, 1, 1], ['cross', '#ffffff', 0.38, 0.5, 0.14]] },
    estonia:     { name: 'Estonia',      ratio: 11/7, ops: [['h', ['#0072ce', '#000000', '#ffffff']]] },
    finland:     { name: 'Finland',      ratio: 18/11, ops: [['rect', '#ffffff', 0, 0, 1, 1], ['cross', '#003580', 0.36, 0.5, 0.18]] },
    france:      { name: 'France',       ratio: 1.5, ops: [['v', ['#0055a4', '#ffffff', '#ef4135']]] },
    germany:     { name: 'Germany',      ratio: 5/3, ops: [['h', ['#000000', '#dd0000', '#ffce00']]] },
    greece:      { name: 'Greece',       ratio: 1.5, ops: [['h', ['#0d5eaf', '#ffffff', '#0d5eaf', '#ffffff', '#0d5eaf', '#ffffff', '#0d5eaf', '#ffffff', '#0d5eaf']], ['rect', '#0d5eaf', 0, 0, 10/27, 5/9], ['cross', '#ffffff', 5/27, 5/18, 1/9]] },
    hungary:     { name: 'Hungary',      ratio: 2,   ops: [['h', ['#ce2939', '#ffffff', '#477050']]] },
    indonesia:   { name: 'Indonesia',    ratio: 1.5, ops: [['h', ['#ff0000', '#ffffff']]] },
    ireland:     { name: 'Ireland',      ratio: 2,   ops: [['v', ['#169b62', '#ffffff', '#ff883e']]] },
    italy:       { name: 'Italy',        ratio: 1.5, ops: [['v', ['#009246', '#ffffff', '#ce2b37']]] },
    japan:       { name: 'Japan',        ratio: 1.5, ops: [['rect', '#ffffff', 0, 0, 1, 1], ['disc', '#bc002d', 0.5, 0.5, 0.3]] },
    latvia:      { name: 'Latvia',       ratio: 2,   ops: [['rect', '#9e3039', 0, 0, 1, 1], ['rect', '#ffffff', 0, 0.4, 1, 0.2]] },
    lithuania:   { name: 'Lithuania',    ratio: 5/3, ops: [['h', ['#fdb913', '#006a44', '#c1272d']]] },
    netherlands: { name: 'Netherlands',  ratio: 1.5, ops: [['h', ['#ae1c28', '#ffffff', '#21468b']]] },
    nigeria:     { name: 'Nigeria',      ratio: 2,   ops: [['v', ['#008751', '#ffffff', '#008751']]] },
    norway:      { name: 'Norway',       ratio: 22/16, ops: [['rect', '#ba0c2f', 0, 0, 1, 1], ['cross', '#ffffff', 0.36, 0.5, 0.25], ['cross', '#00205b', 0.36, 0.5, 0.125]] },
    peru:        { name: 'Peru',         ratio: 1.5, ops: [['v', ['#d91023', '#ffffff', '#d91023']]] },
    poland:      { name: 'Poland',       ratio: 1.6, ops: [['h', ['#ffffff', '#dc143c']]] },
    romania:     { name: 'Romania',      ratio: 1.5, ops: [['v', ['#002b7f', '#fcd116', '#ce1126']]] },
    russia:      { name: 'Russia',       ratio: 1.5, ops: [['h', ['#ffffff', '#0039a6', '#d52b1e']]] },
    sweden:      { name: 'Sweden',       ratio: 1.6, ops: [['rect', '#006aa7', 0, 0, 1, 1], ['cross', '#fecc00', 0.375, 0.5, 0.2]] },
    switzerland: { name: 'Switzerland',  ratio: 1,   ops: [['rect', '#da291c', 0, 0, 1, 1], ['rect', '#ffffff', 0.3125, 0.4, 0.375, 0.2], ['rect', '#ffffff', 0.4, 0.3125, 0.2, 0.375]] },
    thailand:    { name: 'Thailand',     ratio: 1.5, ops: [['rect', '#a51931', 0, 0, 1, 1], ['rect', '#ffffff', 0, 1/6, 1, 4/6], ['rect', '#2d2a4a', 0, 2/6, 1, 2/6]] },
    turkey:      { name: 'Turkey',       ratio: 1.5, ops: [['rect', '#e30a17', 0, 0, 1, 1], ['disc', '#ffffff', 0.4, 0.5, 0.25], ['disc', '#e30a17', 0.46, 0.5, 0.2], ['star', '#ffffff', 0.62, 0.5, 0.11, 5]] },
    ukraine:     { name: 'Ukraine',      ratio: 1.5, ops: [['h', ['#0057b7', '#ffd700']]] },
    vietnam:     { name: 'Vietnam',      ratio: 1.5, ops: [['rect', '#da251d', 0, 0, 1, 1], ['star', '#ffff00', 0.5, 0.5, 0.3, 5]] },
    // Fun non-country ones
    checkered:   { name: 'Checkered',    ratio: 1.5, ops: [['check', '#111111', '#ffffff', 6]] },
    rainbow:     { name: 'Rainbow',      ratio: 1.5, ops: [['h', ['#e40303', '#ff8c00', '#ffed00', '#008026', '#24408e', '#732982']]] },
    jollyroger:  { name: 'Jolly Roger',  ratio: 1.5, ops: [['rect', '#000000', 0, 0, 1, 1], ['disc', '#ffffff', 0.5, 0.42, 0.17], ['rect', '#ffffff', 0.4, 0.57, 0.2, 0.08], ['rect', '#000000', 0.44, 0.46, 0.04, 0.04], ['rect', '#000000', 0.52, 0.46, 0.04, 0.04], ['diag', '#ffffff', 0.06], ['diag2', '#ffffff', 0.06]] },
    white:       { name: 'White (blank)', ratio: 1.5, ops: [['rect', '#ffffff', 0, 0, 1, 1]] }
};

export const SIMPLE_FLAG_IDS = Object.keys(SIMPLE_FLAGS);

function drawStar(ctx, cx, cy, r, points) {
    const inner = r * 0.382;
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
        const rad = i % 2 === 0 ? r : inner;
        const a = -Math.PI / 2 + (i * Math.PI) / points;
        const x = cx + Math.cos(a) * rad;
        const y = cy + Math.sin(a) * rad;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
}

/**
 * Render a simple flag spec to an HTMLCanvasElement.
 * @param {string} id key in SIMPLE_FLAGS
 * @param {number} height pixel height of output
 */
export function renderSimpleFlag(id, height = 600) {
    const spec = SIMPLE_FLAGS[id];
    if (!spec) throw new Error(`Unknown simple flag: ${id}`);
    const W = Math.round(height * spec.ratio);
    const H = height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    for (const op of spec.ops) {
        const kind = op[0];
        if (kind === 'h') {
            const cols = op[1];
            const bh = H / cols.length;
            cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, Math.floor(i * bh), W, Math.ceil(bh) + 1); });
        } else if (kind === 'v') {
            const cols = op[1];
            const bw = W / cols.length;
            cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(Math.floor(i * bw), 0, Math.ceil(bw) + 1, H); });
        } else if (kind === 'rect') {
            ctx.fillStyle = op[1];
            ctx.fillRect(op[2] * W, op[3] * H, op[4] * W, op[5] * H);
        } else if (kind === 'disc') {
            ctx.fillStyle = op[1];
            ctx.beginPath();
            ctx.arc(op[2] * W, op[3] * H, op[4] * H, 0, Math.PI * 2);
            ctx.fill();
        } else if (kind === 'cross') {
            const [, color, cx, cy, t] = op;
            ctx.fillStyle = color;
            ctx.fillRect(0, (cy - t / 2) * H, W, t * H);
            ctx.fillRect((cx - (t * H) / (2 * W)) * W, 0, t * H, H);
        } else if (kind === 'tri') {
            const p = op[2];
            ctx.fillStyle = op[1];
            ctx.beginPath();
            ctx.moveTo(p[0] * W, p[1] * H);
            ctx.lineTo(p[2] * W, p[3] * H);
            ctx.lineTo(p[4] * W, p[5] * H);
            ctx.closePath();
            ctx.fill();
        } else if (kind === 'star') {
            ctx.fillStyle = op[1];
            drawStar(ctx, op[2] * W, op[3] * H, op[4] * H, op[5]);
        } else if (kind === 'diag' || kind === 'diag2') {
            ctx.strokeStyle = op[1];
            ctx.lineWidth = op[2] * H;
            ctx.beginPath();
            if (kind === 'diag') { ctx.moveTo(W * 0.3, H * 0.95); ctx.lineTo(W * 0.7, H * 0.65); }
            else { ctx.moveTo(W * 0.7, H * 0.95); ctx.lineTo(W * 0.3, H * 0.65); }
            ctx.stroke();
        } else if (kind === 'check') {
            const [, a, b, n] = op;
            const s = H / n;
            for (let y = 0; y < n; y++) {
                for (let x = 0; x < Math.ceil(W / s); x++) {
                    ctx.fillStyle = (x + y) % 2 === 0 ? a : b;
                    ctx.fillRect(x * s, y * s, s + 1, s + 1);
                }
            }
        }
    }

    return canvas;
}
