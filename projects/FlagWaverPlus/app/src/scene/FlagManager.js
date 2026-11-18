import { Box3, Mesh, MeshBasicMaterial, Object3D, RingGeometry, Vector3 } from 'three';

import {
    Flag,
    FlagGroup,
    FlagpoleType,
    Hoisting,
    Side,
    VerticalHoisting,
    Wind,
    WindModifiers,
    applyGravityToCloth,
    applyWindForceToCloth,
    buildFlagpole,
    computeFlagOptionsFromImage,
    loadImage
} from '../flagwaver';
import { LAYOUTS } from './layouts';
import { flagUrl, countryName } from '../data/countries';
import { renderSimpleFlag, SIMPLE_FLAGS } from '../data/simpleFlags';
import { getStoredDataUrl } from '../state/imageStore';

let nextId = 1;

export const DEFAULT_FLAG_SETTINGS = {
    height: 1.2,               // meters (cross width); width follows image aspect
    hoisting: Hoisting.DEXTER,
    orientation: Side.TOP,
    flagpoleType: FlagpoleType.VERTICAL,
    verticalHoisting: VerticalHoisting.TOP_RIGHT,
    mass: 0.11
};

/** Resolve a flag source to a drawable (HTMLImageElement | HTMLCanvasElement). */
export function loadSource(source) {
    return new Promise((resolve, reject) => {
        switch (source.type) {
            case 'simple':
                try { resolve(renderSimpleFlag(source.value)); } catch (e) { reject(e); }
                break;
            case 'country':
                loadImage(flagUrl(source.value), resolve, () => reject(new Error(`Could not load flag for ${countryName(source.value)} (network/CORS).`)));
                break;
            case 'url':
            case 'upload':
                loadImage(source.value, resolve, () => reject(new Error('Image could not be loaded.')));
                break;
            case 'stored':
                getStoredDataUrl(source.value)
                    .then((dataUrl) => loadImage(dataUrl, resolve, () => reject(new Error('Stored image could not be decoded.'))))
                    .catch(reject);
                break;
            default:
                reject(new Error(`Unknown source type ${source.type}`));
        }
    });
}

export function sourceLabel(source) {
    switch (source.type) {
        case 'simple': return SIMPLE_FLAGS[source.value]?.name || source.value;
        case 'country': return countryName(source.value);
        case 'upload':
        case 'stored': return source.name || 'Uploaded image';
        case 'url': return source.value.replace(/^https?:\/\//, '').slice(0, 32);
        default: return 'Flag';
    }
}

/**
 * Manages N flag groups in one scene: sources, per-flag settings, layout,
 * shared wind with a travelling gust, and the per-step simulation.
 */
export default class FlagManager {
    constructor(world) {
        this.world = world;
        this.entries = [];
        this.root = new Object3D();
        world.scene.add(this.root);

        this.layoutId = 'row';
        this.spacing = 3.2;

        this.wind = new Wind({ speed: 10 });
        this.windAngle = 0;        // degrees; 0 = blowing toward +x (flags fly right)
        this.windSpeed = 10;       // m/s base
        this.windMode = 'natural'; // natural (FlagWaver default: drifting direction, varying speed) | steady | gusty
        this.externalGain = 0;     // extra m/s from mic etc.

        this.gust = { enabled: false, strength: 2.2, period: 4.5, width: 2.5 };
        this.ripple = false;

        this.listeners = new Set();
        this._tmpPressure = new Vector3();
        this._gustWind = { pressure: this._tmpPressure };
        this._bounds = new Box3();

        this.selectedId = null;
        this.ring = new Mesh(
            new RingGeometry(0.22, 0.42, 48),
            new MeshBasicMaterial({ color: 0xff5a3c, transparent: true, opacity: 0.9, depthWrite: false })
        );
        this.ring.rotation.x = -Math.PI / 2;
        this.ring.position.y = 0.02;
        this.ring.visible = false;

        this._applyWindSettings();
        world.onUpdate((dt) => this.step(dt));
    }

    /** Highlight one flag in the scene (accent ring at the pole base). */
    setSelected(id) {
        this.selectedId = id;
        const e = this.getEntry(id);
        if (this.ring.parent) this.ring.parent.remove(this.ring);
        if (e) { e.holder.add(this.ring); this.ring.visible = true; }
        else this.ring.visible = false;
    }

    /** Global flag size (height in m) applied to every flag; new flags inherit it. */
    setFlagHeight(h) {
        DEFAULT_FLAG_SETTINGS.height = h;
        this.updateAllSettings({ height: h });
    }

    // ---- events -------------------------------------------------------------

    on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    emit(type, payload) { for (const fn of this.listeners) fn(type, payload); }

    // ---- flags --------------------------------------------------------------

    get count() { return this.entries.length; }

    getEntry(id) { return this.entries.find(e => e.id === id); }

    /**
     * Add a flag. Returns the entry immediately; the mesh appears once the image loads.
     * @param {{type:string,value:string,name?:string}} source
     * @param {Object} [settings]
     */
    addFlag(source, settings = {}) {
        const entry = {
            id: nextId++,
            source,
            settings: { ...DEFAULT_FLAG_SETTINGS, ...settings },
            image: null,
            group: null,
            holder: new Object3D(),
            status: 'loading',
            error: null
        };
        this.root.add(entry.holder);
        this.entries.push(entry);
        this.relayout();
        this.emit('add', entry);
        this._loadAndBuild(entry);
        return entry;
    }

    removeFlag(id) {
        const i = this.entries.findIndex(e => e.id === id);
        if (i === -1) return;
        const [entry] = this.entries.splice(i, 1);
        this._destroyGroup(entry);
        if (this.selectedId === id) this.setSelected(null);
        this.root.remove(entry.holder);
        this.relayout();
        this.emit('remove', entry);
    }

    clear() {
        for (const e of [...this.entries]) this.removeFlag(e.id);
    }

    duplicateFlag(id) {
        const e = this.getEntry(id);
        if (!e) return null;
        return this.addFlag({ ...e.source }, { ...e.settings });
    }

    /** Move a flag to an absolute index (drag-and-drop). */
    moveTo(id, index) {
        const i = this.entries.findIndex(e => e.id === id);
        if (i === -1) return;
        const [e] = this.entries.splice(i, 1);
        const j = Math.max(0, Math.min(this.entries.length, index));
        this.entries.splice(j, 0, e);
        this.relayout();
        this.emit('reorder');
    }

    moveFlag(id, dir) {
        const i = this.entries.findIndex(e => e.id === id);
        const j = i + dir;
        if (i === -1 || j < 0 || j >= this.entries.length) return;
        const tmp = this.entries[i];
        this.entries[i] = this.entries[j];
        this.entries[j] = tmp;
        this.relayout();
        this.emit('reorder');
    }

    setSource(id, source) {
        const e = this.getEntry(id);
        if (!e) return;
        e.source = source;
        e.status = 'loading';
        this.emit('update', e);
        this._loadAndBuild(e);
    }

    updateSettings(id, patch) {
        const e = this.getEntry(id);
        if (!e) return;
        Object.assign(e.settings, patch);
        if (e.image) this._build(e);
        this.emit('settings', e);
    }

    /** Apply a settings patch to every flag. */
    updateAllSettings(patch) {
        for (const e of this.entries) {
            Object.assign(e.settings, patch);
            if (e.image) this._build(e);
        }
        this.emit('update-all');
    }

    resetCloth() {
        for (const e of this.entries) if (e.group) { e.group.reset(); e.group.render(); }
    }

    _loadAndBuild(entry) {
        const token = Symbol('load');
        entry._loadToken = token;
        loadSource(entry.source)
            .then((image) => {
                if (entry._loadToken !== token) return; // superseded
                entry.image = image;
                entry.error = null;
                entry.status = 'ready';
                this._build(entry);
                this.emit('update', entry);
            })
            .catch((err) => {
                if (entry._loadToken !== token) return;
                entry.image = null;
                entry.status = 'error';
                entry.error = err.message || String(err);
                this._build(entry); // blank white flag as fallback
                this.emit('update', entry);
                this.emit('error', { entry, message: entry.error });
            });
    }

    _destroyGroup(entry) {
        if (entry.group) {
            entry.holder.remove(entry.group.object);
            entry.group.destroy();
            entry.group = null;
        }
    }

    _build(entry) {
        this._destroyGroup(entry);
        const s = entry.settings;

        const flagOptions = { mass: s.mass };
        if (entry.image) {
            Object.assign(flagOptions, computeFlagOptionsFromImage({
                image: entry.image,
                width: 'auto',
                height: s.height,
                hoisting: s.hoisting,
                orientation: s.orientation,
                resolution: 320
            }));
        } else {
            flagOptions.width = s.height * 1.5;
            flagOptions.height = s.height;
        }

        const flag = new Flag(flagOptions);
        const flagpole = buildFlagpole({ flagpoleType: s.flagpoleType, verticalHoisting: s.verticalHoisting }, flag);
        const group = new FlagGroup({ flagpole, flag });

        if (s.flagpoleType === FlagpoleType.HORIZONTAL || s.flagpoleType === FlagpoleType.OUTRIGGER) {
            const poleLength = flagpole.constructor.defaults.poleLength;
            group.object.position.set(0, poleLength, 0).sub(flagpole.top);
        }

        entry.group = group;
        entry.holder.add(group.object);
        group.reset();
        group.render();
        this._updateBounds();
    }

    // ---- layout -------------------------------------------------------------

    setLayout(id) {
        if (LAYOUTS[id]) { this.layoutId = id; this.relayout(); }
    }

    setSpacing(v) {
        this.spacing = Math.max(0.5, v);
        this.relayout();
    }

    relayout() {
        const n = this.entries.length;
        if (n === 0) { this._updateBounds(); return; }
        const places = LAYOUTS[this.layoutId].place(n, this.spacing);
        this.entries.forEach((e, i) => {
            e.holder.position.copy(places[i].position);
            e.holder.rotation.y = places[i].rotationY;
            e.holder.updateMatrixWorld(true);
        });
        this._updateBounds();
        this.emit('layout');
    }

    _updateBounds() {
        const b = this._bounds.makeEmpty();
        for (const e of this.entries) {
            const p = e.holder.position;
            const h = e.settings.height;
            const w = e.group ? e.group.flag.cloth.width : h * 1.5;
            b.expandByPoint(new Vector3(p.x - w, 0, p.z - w));
            b.expandByPoint(new Vector3(p.x + w, 6.3, p.z + w));
        }
        this.world.fitShadowToBounds(b.isEmpty() ? null : b);
    }

    get bounds() { return this._bounds; }

    // ---- wind ---------------------------------------------------------------

    setWind({ speed, angle, mode }) {
        if (speed !== undefined) this.windSpeed = speed;
        if (angle !== undefined) this.windAngle = angle;
        if (mode !== undefined) this.windMode = mode;
        this._applyWindSettings();
    }

    _applyWindSettings() {
        const a = (this.windAngle * Math.PI) / 180;
        // tiny y/z offsets: perfectly axis-aligned wind makes the solver misbehave
        const dir = new Vector3(Math.cos(a), 0.002, Math.sin(a) + 0.003);
        switch (this.windMode) {
            case 'natural':
                // Same modifiers FlagWaver uses when wind is not "controlled".
                this.wind.directionFn = WindModifiers.rotatingDirection;
                this.wind.speedFn = WindModifiers.variableSpeed;
                break;
            case 'gusty':
                this.wind.directionFn = (d, t) => d.copy(dir).add(new Vector3(0.15 * Math.sin(t / 2300), 0.1 * Math.sin(t / 1300), 0.3 * Math.sin(t / 1700)));
                this.wind.speedFn = (sp, t) => sp * (1 + 0.25 * Math.cos(t / 7000) + 0.18 * Math.sin(t / 1100) + 0.1 * Math.sin(t / 530));
                break;
            default:
                this.wind.directionFn = (d) => d.copy(dir);
                this.wind.speedFn = WindModifiers.constantSpeed;
        }
    }

    setGust(patch) { Object.assign(this.gust, patch); }

    /** Multiplier for the travelling gust at world-x position. */
    _gustFactor(x, t) {
        if (!this.gust.enabled || this.entries.length === 0) return 1;
        const b = this._bounds;
        const minX = b.min.x - 4;
        const maxX = b.max.x + 4;
        const span = Math.max(1, maxX - minX);
        const phase = (t / this.gust.period) % 1;
        const c = minX + phase * span;
        const d = x - c;
        const w = this.gust.width;
        return 1 + this.gust.strength * Math.exp(-(d * d) / (2 * w * w));
    }

    // ---- simulation ---------------------------------------------------------

    step(dt) {
        this.wind.speed = Math.max(0, this.windSpeed + this.externalGain);
        this.wind.update();

        const t = performance.now() / 1000;
        for (const e of this.entries) {
            const g = e.group;
            if (!g) continue;
            const flag = g.flag;
            applyGravityToCloth(flag.cloth, flag.object);

            const f = this._gustFactor(e.holder.position.x, t);
            if (f !== 1) {
                this._tmpPressure.copy(this.wind.pressure).multiplyScalar(f);
                applyWindForceToCloth(flag.cloth, this._gustWind, flag.object);
            } else {
                applyWindForceToCloth(flag.cloth, this.wind, flag.object);
            }
            g.simulate(dt);
            g.render();
        }
    }

    // ---- serialization --------------------------------------------------------

    /**
     * @param {{forShare?: boolean}} [opts] forShare drops stored/uploaded images (too big for a URL)
     */
    toJSON(opts = {}) {
        const shareable = (t) => t === 'simple' || t === 'country' || t === 'url';
        return {
            layout: this.layoutId,
            height: DEFAULT_FLAG_SETTINGS.height,
            spacing: this.spacing,
            wind: { speed: this.windSpeed, angle: this.windAngle, mode: this.windMode },
            gust: { ...this.gust },
            flags: this.entries
                .filter(e => shareable(e.source.type) || (!opts.forShare && e.source.type === 'stored'))
                .map(e => ({ source: e.source, settings: e.settings }))
        };
    }

    fromJSON(data) {
        this.clear();
        if (data.layout) this.layoutId = data.layout;
        if (data.spacing) this.spacing = data.spacing;
        if (data.height) DEFAULT_FLAG_SETTINGS.height = data.height;
        if (data.wind) this.setWind(data.wind);
        if (data.gust) this.setGust(data.gust);
        for (const f of data.flags || []) this.addFlag(f.source, f.settings);
        this.relayout();
    }
}
