import { FlagpoleType, Hoisting, Side, VerticalHoisting } from '../flagwaver';
import { COUNTRY_CODES, countryName, searchCountries } from '../data/countries';
import { SIMPLE_FLAGS, SIMPLE_FLAG_IDS, renderSimpleFlag } from '../data/simpleFlags';
import { LAYOUTS, LAYOUT_IDS } from '../scene/layouts';
import { PRESETS, PRESET_IDS } from '../scene/presets';
import { DEFAULT_FLAG_SETTINGS, sourceLabel } from '../scene/FlagManager';
import { writeHash } from '../state/urlState';

const h = (tag, attrs = {}, ...children) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'class') el.className = v;
        else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v !== undefined && v !== null && v !== false) el.setAttribute(k, v);
    }
    for (const c of children.flat()) {
        if (c === null || c === undefined || c === false) continue;
        el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
};

const option = (value, label, selected) => {
    const o = h('option', { value }, label);
    if (selected) o.selected = true;
    return o;
};

const sourceKey = (src) => `${src.type}:${src.value}`;
const HISTORY_KEY = 'flagwaverplus.history.v1';

export default function createPanel(root, { manager, world, mic, toast }) {
    let selectedId = null;
    let fitOnChange = true;

    // ---------------------------------------------------------------- tabs
    const TABS = [['flags', 'Flags'], ['wind', 'Wind'], ['scene', 'Scene'], ['share', 'Share']];
    const tabBar = h('nav', { class: 'tabs' });
    const pages = {};
    for (const [id, label] of TABS) {
        tabBar.appendChild(h('button', { class: 'tab', 'data-tab': id, onClick: () => showTab(id) }, label));
        pages[id] = h('section', { class: 'page hidden', 'data-page': id });
    }
    function showTab(id) {
        tabBar.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
        Object.values(pages).forEach(p => p.classList.toggle('hidden', p.dataset.page !== id));
    }

    root.append(
        h('header', { class: 'panel-head' },
            h('h1', {}, 'FlagWaverPlus'),
            h('button', { class: 'collapse', title: 'Hide panel (Tab)', onClick: () => root.classList.toggle('collapsed') }, '⇤')
        ),
        tabBar,
        ...Object.values(pages)
    );
    showTab('flags');

    function afterAdd() {
        if (fitOnChange) setTimeout(() => world.frame(manager.bounds), 50);
    }

    // ---------------------------------------------------------------- FLAGS: add
    const flagsPage = pages.flags;

    const searchInput = h('input', { type: 'search', placeholder: 'Search a country… (Enter adds first match)', class: 'search' });
    const results = h('div', { class: 'results hidden' });

    function searchAll(q, limit = 12) {
        const out = searchCountries(q, limit).map(code => ({ type: 'country', value: code }));
        const ql = q.trim().toLowerCase();
        if (ql) {
            for (const id of SIMPLE_FLAG_IDS) {
                if (SIMPLE_FLAGS[id].name.toLowerCase().includes(ql)) out.push({ type: 'simple', value: id });
            }
        }
        return out.slice(0, limit + 4);
    }

    function renderResults() {
        results.innerHTML = '';
        const found = searchAll(searchInput.value);
        for (const src of found) {
            results.appendChild(h('button', { class: 'result', onClick: () => addSource(src) },
                thumbForSource(src, 32, 22),
                sourceLabel(src),
                src.type === 'simple' ? h('span', { class: 'tag' }, 'offline') : null));
        }
        results.classList.toggle('hidden', found.length === 0);
    }
    searchInput.addEventListener('input', renderResults);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const first = searchAll(searchInput.value, 1)[0];
            if (first) addSource(first);
        }
        if (e.key === 'Escape') { searchInput.value = ''; renderResults(); }
    });
    function addSource(src) {
        manager.addFlag({ ...src });
        searchInput.value = '';
        renderResults();
        afterAdd();
    }

    const fileInput = h('input', { type: 'file', accept: 'image/*', multiple: '', class: 'hidden' });
    fileInput.addEventListener('change', () => {
        for (const f of fileInput.files) {
            manager.addFlag({ type: 'upload', value: URL.createObjectURL(f), name: f.name.replace(/\.[^.]+$/, '') });
        }
        fileInput.value = '';
        afterAdd();
    });

    const urlInput = h('input', { type: 'url', placeholder: 'https://… image URL (must allow CORS)', class: 'search' });
    urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && urlInput.value.trim()) {
            manager.addFlag({ type: 'url', value: urlInput.value.trim() });
            urlInput.value = '';
            afterAdd();
        }
    });

    function randomCountries(n) {
        const pool = [...COUNTRY_CODES];
        for (let i = 0; i < n && pool.length; i++) {
            manager.addFlag({ type: 'country', value: pool.splice(Math.floor(Math.random() * pool.length), 1)[0] });
        }
        afterAdd();
    }

    // ---------------------------------------------------------------- FLAGS: history strip
    // Every source used this session (plus persisted country/offline/url ones). Click to add again.
    const history = new Map(); // key -> { source, image|null }
    try {
        for (const src of JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]')) history.set(sourceKey(src), { source: src, image: null });
    } catch { /* ignore */ }

    function persistHistory() {
        try {
            const keep = [...history.values()].map(x => x.source).filter(s => s.type === 'country' || s.type === 'simple' || s.type === 'url').slice(-60);
            localStorage.setItem(HISTORY_KEY, JSON.stringify(keep));
        } catch { /* ignore */ }
    }

    function thumbForSource(src, w = 40, hh = 26, image = null) {
        if (src.type === 'country') return h('img', { src: `https://flagcdn.com/w80/${src.value}.png`, alt: '', loading: 'lazy', width: w, height: hh });
        const c = document.createElement('canvas');
        c.width = w; c.height = hh;
        const ctx = c.getContext('2d');
        let img = image;
        if (src.type === 'simple') img = renderSimpleFlag(src.value, 40);
        if (img) {
            const iw = img.width, ih = img.height;
            const s = Math.min(w / iw, hh / ih);
            ctx.drawImage(img, (w - iw * s) / 2, (hh - ih * s) / 2, iw * s, ih * s);
        } else {
            ctx.fillStyle = '#666'; ctx.fillRect(0, 0, w, hh);
        }
        return c;
    }

    const chips = h('div', { class: 'chips' });
    function renderHistory() {
        chips.innerHTML = '';
        if (history.size === 0) {
            chips.appendChild(h('span', { class: 'muted small' }, 'Flags you add show up here for quick re-use.'));
            return;
        }
        for (const [key, item] of [...history.entries()].reverse()) {
            const chip = h('button', { class: 'chip', title: `${sourceLabel(item.source)} — click to add again`, onClick: () => { manager.addFlag({ ...item.source }); afterAdd(); } },
                thumbForSource(item.source, 40, 26, item.image));
            chip.addEventListener('contextmenu', (e) => { e.preventDefault(); history.delete(key); persistHistory(); renderHistory(); });
            chips.appendChild(chip);
        }
    }
    function rememberSource(entry) {
        const key = sourceKey(entry.source);
        const existing = history.get(key);
        if (existing) { if (entry.image && !existing.image) existing.image = entry.image; return; }
        history.set(key, { source: { ...entry.source }, image: entry.image });
        persistHistory();
        renderHistory();
    }

    // ---------------------------------------------------------------- FLAGS: arrangement
    const layoutSelect = h('select', { class: 'select', onChange: () => { manager.setLayout(layoutSelect.value); afterAdd(); } },
        ...LAYOUT_IDS.map(id => option(id, LAYOUTS[id].label, id === manager.layoutId)));
    const spacing = h('input', { type: 'range', min: 1.2, max: 8, step: 0.1, value: manager.spacing });
    spacing.addEventListener('input', () => manager.setSpacing(+spacing.value));
    spacing.addEventListener('change', afterAdd);
    // Flag size: fixed steps (rebuilding every flag per slider pixel was too slow)
    const SIZES = [['XS', 0.6], ['S', 0.9], ['M', 1.2], ['L', 1.6], ['XL', 2.2], ['XXL', 3.0]];
    const sizeGroup = h('div', { class: 'seg' });
    function renderSizes() {
        sizeGroup.innerHTML = '';
        for (const [label, val] of SIZES) {
            sizeGroup.appendChild(h('button', {
                class: `seg-btn ${Math.abs(DEFAULT_FLAG_SETTINGS.height - val) < 1e-6 ? 'active' : ''}`,
                title: `${val} m tall`,
                onClick: () => { manager.setFlagHeight(val); renderSizes(); afterAdd(); }
            }, label));
        }
    }
    renderSizes();
    const fitToggle = h('input', { type: 'checkbox', checked: '' });
    fitToggle.addEventListener('change', () => { fitOnChange = fitToggle.checked; });

    // ---------------------------------------------------------------- FLAGS: list (drag to reorder)
    const list = h('div', { class: 'flag-list' });
    const detail = h('div', { class: 'detail hidden' });
    let dragId = null;

    function thumbFor(entry) {
        const c = document.createElement('canvas');
        c.width = 48; c.height = 32;
        const ctx = c.getContext('2d');
        if (entry.image) {
            const img = entry.image;
            const iw = img.width, ih = img.height;
            const s = Math.min(48 / iw, 32 / ih);
            ctx.drawImage(img, (48 - iw * s) / 2, (32 - ih * s) / 2, iw * s, ih * s);
        } else {
            ctx.fillStyle = entry.status === 'error' ? '#b33' : '#555';
            ctx.fillRect(0, 0, 48, 32);
        }
        return c;
    }

    function renderList() {
        list.innerHTML = '';
        if (manager.count === 0) {
            list.appendChild(h('p', { class: 'muted' }, 'No flags yet. Search a country or upload an image.'));
        }
        manager.entries.forEach((e, i) => {
            const row = h('div', {
                class: `flag-row ${e.id === selectedId ? 'selected' : ''} ${e.status}`,
                draggable: 'true',
                'data-id': e.id,
                onClick: () => select(e.id === selectedId ? null : e.id)
            },
                h('span', { class: 'grip', title: 'Drag to reorder' }, '⋮⋮'),
                h('span', { class: 'idx' }, i + 1),
                thumbFor(e),
                h('span', { class: 'name' }, sourceLabel(e.source), e.status === 'loading' ? ' …' : e.status === 'error' ? ' ⚠' : ''),
                h('span', { class: 'row-actions' },
                    h('button', { title: 'Duplicate', onClick: (ev) => { ev.stopPropagation(); manager.duplicateFlag(e.id); afterAdd(); } }, '⧉'),
                    h('button', { title: 'Remove', class: 'danger', onClick: (ev) => { ev.stopPropagation(); manager.removeFlag(e.id); if (selectedId === e.id) select(null); afterAdd(); } }, '✕')
                )
            );
            if (e.error) row.title = e.error;

            row.addEventListener('dragstart', (ev) => {
                dragId = e.id;
                row.classList.add('dragging');
                ev.dataTransfer.effectAllowed = 'move';
                ev.dataTransfer.setData('text/plain', String(e.id));
            });
            row.addEventListener('dragend', () => { dragId = null; list.querySelectorAll('.flag-row').forEach(r => r.classList.remove('dragging', 'drop-above', 'drop-below')); });
            row.addEventListener('dragover', (ev) => {
                if (dragId === null || dragId === e.id) return;
                ev.preventDefault();
                ev.dataTransfer.dropEffect = 'move';
                const r = row.getBoundingClientRect();
                const below = ev.clientY > r.top + r.height / 2;
                row.classList.toggle('drop-above', !below);
                row.classList.toggle('drop-below', below);
            });
            row.addEventListener('dragleave', () => row.classList.remove('drop-above', 'drop-below'));
            row.addEventListener('drop', (ev) => {
                ev.preventDefault();
                if (dragId === null || dragId === e.id) return;
                const r = row.getBoundingClientRect();
                const below = ev.clientY > r.top + r.height / 2;
                const from = manager.entries.findIndex(x => x.id === dragId);
                let to = manager.entries.findIndex(x => x.id === e.id) + (below ? 1 : 0);
                if (from < to) to--;
                manager.moveTo(dragId, to);
            });
            list.appendChild(row);
        });
    }

    function select(id) {
        selectedId = id;
        manager.setSelected(id);
        renderList();
        buildDetail();
    }

    // Built once per selection; settings changes don't rebuild it (keeps slider/select focus).
    let detailHeader = null;
    let detailError = null;
    let hangWrap = null;

    function buildDetail() {
        const e = manager.getEntry(selectedId);
        detail.classList.toggle('hidden', !e);
        detail.innerHTML = '';
        if (!e) return;
        const s = e.settings;
        const upd = (patch) => manager.updateSettings(e.id, patch);

        const hoist = h('select', { class: 'select', onChange: () => upd({ hoisting: hoist.value }) },
            option(Hoisting.DEXTER, 'Pole on left (normal)', s.hoisting === Hoisting.DEXTER),
            option(Hoisting.SINISTER, 'Pole on right (mirrored)', s.hoisting === Hoisting.SINISTER));
        const orient = h('select', { class: 'select', onChange: () => upd({ orientation: orient.value }) },
            option(Side.TOP, 'Normal', s.orientation === Side.TOP),
            option(Side.LEFT, 'Rotated 90° right', s.orientation === Side.LEFT),
            option(Side.RIGHT, 'Rotated 90° left', s.orientation === Side.RIGHT),
            option(Side.BOTTOM, 'Rotated 180°', s.orientation === Side.BOTTOM));
        const pole = h('select', { class: 'select', onChange: () => { upd({ flagpoleType: pole.value }); hangWrap.classList.toggle('hidden', pole.value !== FlagpoleType.CROSSBAR); } },
            option(FlagpoleType.VERTICAL, 'Vertical pole', s.flagpoleType === FlagpoleType.VERTICAL),
            option(FlagpoleType.HORIZONTAL, 'Horizontal pole', s.flagpoleType === FlagpoleType.HORIZONTAL),
            option(FlagpoleType.OUTRIGGER, 'Outrigger (angled from wall)', s.flagpoleType === FlagpoleType.OUTRIGGER),
            option(FlagpoleType.CROSSBAR, 'Crossbar (hangs from a bar)', s.flagpoleType === FlagpoleType.CROSSBAR),
            option(FlagpoleType.GALLERY, 'Gallery (banner on a bar)', s.flagpoleType === FlagpoleType.GALLERY));
        const vh = h('select', { class: 'select', onChange: () => upd({ verticalHoisting: vh.value }) },
            option(VerticalHoisting.TOP_RIGHT, 'Turn flag 90° right', s.verticalHoisting === VerticalHoisting.TOP_RIGHT),
            option(VerticalHoisting.TOP_LEFT, 'Turn flag 90° left', s.verticalHoisting === VerticalHoisting.TOP_LEFT),
            option(VerticalHoisting.NONE, 'Keep upright (hang by top edge)', s.verticalHoisting === VerticalHoisting.NONE));
        hangWrap = h('div', { class: `hang ${s.flagpoleType === FlagpoleType.CROSSBAR ? '' : 'hidden'}` },
            h('p', { class: 'muted small' }, 'Crossbar hanging: a flag hung from a horizontal bar is normally turned on its side so the hoist edge is at the top (vexillological convention). Pick which way to turn it, or keep it upright.'),
            vh);

        detailHeader = h('h3', {});
        detailError = h('p', { class: 'error hidden' });
        detail.append(
            detailHeader, detailError,
            h('label', { class: 'field' }, 'Pole side', hoist),
            h('label', { class: 'field' }, 'Rotation', orient),
            h('label', { class: 'field' }, 'Pole type', pole),
            hangWrap,
            h('div', { class: 'tool-row' },
                h('button', { onClick: () => { manager.updateAllSettings({ hoisting: s.hoisting, orientation: s.orientation, flagpoleType: s.flagpoleType, verticalHoisting: s.verticalHoisting }); toast('Applied to all flags'); } }, 'Apply to all'),
                h('button', { onClick: () => { manager.duplicateFlag(e.id); afterAdd(); } }, 'Duplicate'),
                h('span', { class: 'spacer' }),
                h('button', { class: 'danger', onClick: () => { manager.removeFlag(e.id); select(null); afterAdd(); } }, 'Remove')
            )
        );
        refreshDetailHeader();
    }

    function refreshDetailHeader() {
        const e = manager.getEntry(selectedId);
        if (!e || !detailHeader) return;
        detailHeader.textContent = `Editing flag ${manager.entries.indexOf(e) + 1}: ${sourceLabel(e.source)}`;
        detailError.textContent = e.error || '';
        detailError.classList.toggle('hidden', !e.error);
    }

    manager.on((type, payload) => {
        if (type === 'add') rememberSource(payload);
        if (type === 'update' && payload) rememberSource(payload);
        if (['add', 'remove', 'update', 'reorder', 'update-all'].includes(type)) {
            if (selectedId !== null && !manager.getEntry(selectedId)) { selectedId = null; manager.setSelected(null); detail.classList.add('hidden'); }
            renderList();
            refreshDetailHeader();
        }
        if (type === 'settings' && payload && payload.id !== selectedId) { /* nothing */ }
    });

    flagsPage.append(
        h('div', { class: 'block' },
            h('h2', {}, 'Add flags'),
            searchInput, results,
            h('div', { class: 'tool-row' },
                h('button', { onClick: () => fileInput.click() }, 'Upload image(s)'),
                h('button', { onClick: () => randomCountries(5) }, '🎲 5 random'),
                fileInput),
            urlInput,
            h('p', { class: 'muted small' }, 'Recently used (click to add again, right-click to forget):'),
            chips
        ),
        h('div', { class: 'block' },
            h('h2', {}, 'Arrangement'),
            h('label', { class: 'field' }, 'Layout', layoutSelect),
            h('label', {}, 'Spacing ', spacing),
            h('label', { class: 'field' }, 'Flag size', sizeGroup),
            h('div', { class: 'tool-row' },
                h('button', { onClick: () => world.frame(manager.bounds) }, 'Frame all'),
                h('label', { class: 'row' }, fitToggle, ' auto-frame'),
                h('span', { class: 'spacer' }),
                h('button', { class: 'danger', onClick: () => { manager.clear(); select(null); } }, 'Clear all'))
        ),
        h('div', { class: 'block' },
            h('h2', {}, 'Your flags'),
            h('p', { class: 'muted small' }, 'Click a flag to edit it. Drag rows to reorder.'),
            list, detail)
    );
    renderList();
    renderHistory();

    // ---------------------------------------------------------------- WIND
    const windPage = pages.wind;
    const speed = h('input', { type: 'range', min: 0, max: 30, step: 0.5, value: manager.windSpeed });
    const speedVal = h('span', { class: 'val' }, `${manager.windSpeed} m/s`);
    speed.addEventListener('input', () => { manager.setWind({ speed: +speed.value }); speedVal.textContent = `${speed.value} m/s`; });
    const angle = h('input', { type: 'range', min: -180, max: 180, step: 5, value: manager.windAngle });
    const angleVal = h('span', { class: 'val' }, `${manager.windAngle}°`);
    angle.addEventListener('input', () => { manager.setWind({ angle: +angle.value }); angleVal.textContent = `${angle.value}°`; });
    const angleLabel = h('label', {}, 'Direction ', angle, angleVal);
    const mode = h('select', { class: 'select', onChange: () => { manager.setWind({ mode: mode.value }); angleLabel.classList.toggle('disabled', mode.value === 'natural'); } },
        option('natural', 'Natural — wandering direction, varying speed (FlagWaver default)', manager.windMode === 'natural'),
        option('gusty', 'Gusty — fixed direction, turbulent', manager.windMode === 'gusty'),
        option('steady', 'Steady — fixed direction, constant', manager.windMode === 'steady'));
    angleLabel.classList.toggle('disabled', manager.windMode === 'natural');

    const gustOn = h('input', { type: 'checkbox' });
    const gustStrength = h('input', { type: 'range', min: 0.5, max: 5, step: 0.1, value: manager.gust.strength });
    const gustPeriod = h('input', { type: 'range', min: 1.5, max: 12, step: 0.5, value: manager.gust.period });
    const gustWidth = h('input', { type: 'range', min: 0.8, max: 8, step: 0.2, value: manager.gust.width });
    gustOn.addEventListener('change', () => manager.setGust({ enabled: gustOn.checked }));
    gustStrength.addEventListener('input', () => manager.setGust({ strength: +gustStrength.value }));
    gustPeriod.addEventListener('input', () => manager.setGust({ period: +gustPeriod.value }));
    gustWidth.addEventListener('input', () => manager.setGust({ width: +gustWidth.value }));

    const micBtn = h('button', { class: 'btn-primary' }, '🎤 Blow into mic');
    const micMeter = h('div', { class: 'meter' }, h('div', { class: 'meter-fill' }));
    const micGain = h('input', { type: 'range', min: 5, max: 40, step: 1, value: mic.gain });
    micGain.addEventListener('input', () => { mic.gain = +micGain.value; });
    micBtn.addEventListener('click', async () => {
        if (mic.active) { mic.stop(); micBtn.textContent = '🎤 Blow into mic'; micBtn.classList.remove('live'); return; }
        try {
            await mic.start();
            micBtn.textContent = '■ Stop mic';
            micBtn.classList.add('live');
            toast('Mic on — blow or shout to make wind');
        } catch {
            toast('Microphone access denied or unavailable', 'error');
        }
    });
    (function meterLoop() {
        micMeter.firstChild.style.width = `${Math.round(mic.level * 100)}%`;
        requestAnimationFrame(meterLoop);
    })();

    windPage.append(
        h('div', { class: 'block' },
            h('h2', {}, 'Wind'),
            h('label', { class: 'field' }, 'Mode', mode),
            h('label', {}, 'Speed ', speed, speedVal),
            angleLabel
        ),
        h('div', { class: 'block' },
            h('h2', {}, 'Travelling gust'),
            h('p', { class: 'muted small' }, 'A pulse of wind sweeps along the line of flags so they ripple one after another.'),
            h('label', { class: 'row' }, gustOn, ' Enable gust sweep'),
            h('label', {}, 'Strength ', gustStrength),
            h('label', {}, 'Period (s) ', gustPeriod),
            h('label', {}, 'Width (m) ', gustWidth)
        ),
        h('div', { class: 'block' },
            h('h2', {}, 'Lung power'),
            h('p', { class: 'muted small' }, 'Uses your microphone loudness as wind. Nothing is recorded.'),
            micBtn, micMeter,
            h('label', {}, 'Mic gain ', micGain)
        )
    );

    // ---------------------------------------------------------------- SCENE
    const scenePage = pages.scene;
    const presetRow = h('div', { class: 'presets' });
    for (const id of PRESET_IDS) {
        presetRow.appendChild(h('button', {
            class: `preset-btn ${id === world.presetId ? 'active' : ''}`, 'data-id': id,
            onClick: () => {
                world.applyPreset(id);
                presetRow.querySelectorAll('.preset-btn').forEach(x => x.classList.toggle('active', x.dataset.id === id));
            }
        }, h('span', { class: 'swatch-bg', style: `background:${PRESETS[id].css}` }), PRESETS[id].label));
    }
    const groundToggle = h('input', { type: 'checkbox', checked: '' });
    groundToggle.addEventListener('change', () => world.setGroundVisible(groundToggle.checked));
    const pauseBtn = h('button', { onClick: () => togglePause() }, '⏸ Pause');
    function togglePause() {
        world.setPaused(!world.paused);
        pauseBtn.textContent = world.paused ? '▶ Play' : '⏸ Pause';
    }
    const timeScale = h('input', { type: 'range', min: 0.1, max: 2, step: 0.05, value: 1 });
    timeScale.addEventListener('input', () => { world.timeScale = +timeScale.value; });
    const shotBtn = h('button', { onClick: () => {
        const a = h('a', { href: world.screenshot(), download: `flagwaverplus-${Date.now()}.png` });
        document.body.appendChild(a); a.click(); a.remove();
    } }, '📷 Screenshot');

    scenePage.append(
        h('div', { class: 'block' }, h('h2', {}, 'Sky & light'), presetRow, h('label', { class: 'row' }, groundToggle, ' Show ground')),
        h('div', { class: 'block' },
            h('h2', {}, 'Time'),
            h('div', { class: 'tool-row' }, pauseBtn, h('button', { onClick: () => manager.resetCloth() }, 'Reset cloth')),
            h('label', {}, 'Speed ', timeScale)
        ),
        h('div', { class: 'block' }, h('h2', {}, 'Export'), shotBtn,
            h('p', { class: 'muted small' }, 'Drag to orbit, scroll to zoom, right-drag to pan. Space pauses, Tab hides this panel.'))
    );

    // ---------------------------------------------------------------- SHARE
    const linkOut = h('input', { type: 'text', readonly: '', class: 'search' });
    const shareBtn = h('button', { class: 'btn-primary', onClick: async () => {
        const url = writeHash(manager.toJSON());
        linkOut.value = url;
        try { await navigator.clipboard.writeText(url); toast('Link copied'); } catch { toast('Link ready — copy it from the box'); }
        const skipped = manager.entries.filter(e => e.source.type === 'upload').length;
        if (skipped) toast(`${skipped} uploaded flag(s) can't be shared by link`, 'warn', 4500);
    } }, '🔗 Copy share link');
    pages.share.append(
        h('div', { class: 'block' },
            h('h2', {}, 'Share this scene'),
            h('p', { class: 'muted small' }, 'Encodes countries, offline flags, image URLs, layout and wind into the URL. Uploaded images stay on your machine.'),
            shareBtn, linkOut
        ),
        h('div', { class: 'block about' },
            h('h2', {}, 'About'),
            h('p', {}, 'Cloth simulation from ', h('a', { href: 'https://github.com/krikienoid/flagwaver', target: '_blank', rel: 'noopener' }, 'FlagWaver'), ' by krikienoid (MIT). Country images from ', h('a', { href: 'https://flagcdn.com', target: '_blank', rel: 'noopener' }, 'flagcdn.com'), '.'),
            h('p', {}, h('a', { href: '../../' }, '← codegrox.github.io'), ' · ', h('a', { href: 'https://github.com/codegrox/codegrox.github.io/tree/main/projects/FlagWaverPlus', target: '_blank', rel: 'noopener' }, 'source'))
        )
    );

    // ---------------------------------------------------------------- keys
    window.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, select')) return;
        if (e.code === 'Space') { e.preventDefault(); togglePause(); }
        if (e.code === 'Tab') { e.preventDefault(); root.classList.toggle('collapsed'); }
        if (e.code === 'Escape') select(null);
    });

    return { showTab, select, renderList };
}
