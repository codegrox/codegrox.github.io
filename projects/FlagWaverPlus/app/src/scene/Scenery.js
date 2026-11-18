import {
    BackSide,
    Color,
    CylinderGeometry,
    DoubleSide,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    RepeatWrapping,
    SphereGeometry,
    TextureLoader,
    Vector3,
    sRGBEncoding
} from 'three';

/*
 * One backdrop image, FlagWaver-style, placed far enough out to cover where the camera can go:
 *
 *   photo    – a single plane ~300 m away with the photo's horizon row at eye level. Orbit is
 *              limited to the photo's angular span so its edges never come into view.
 *   strip    – a 360° cylindrical panorama wrapped around the scene (free orbit).
 *   equirect – a 2:1 panorama on a sphere (free orbit).
 *
 * The textured ground (World.ground) stays underneath and fog tinted with the image's horizon
 * colour dissolves it into the backdrop; the gradient sky dome takes colours from the image so
 * anything outside the picture matches.
 */

const R = 300;          // backdrop distance (m)
const EYE = 2.4;        // where the image horizon sits (m above the pole bases)
const THUMB = 48;       // analysis thumbnail size
const AZ_MARGIN = 0.08; // radians of free rotation kept inside the photo's edges

export default class Scenery {
    constructor(world) {
        this.world = world;
        this.active = null;            // { id, def, texture, image, aspect, mesh, colors }
        this.loader = new TextureLoader();
        this.loader.setCrossOrigin('anonymous');
        this.height = 0;               // horizon nudge (slider)
        this.scale = 1;                // photo: field-of-view multiplier (slider)
        this.yaw = 0;                  // pano rotation in degrees (slider)
        this._token = 0;
    }

    get kind() { return this.active ? this.active.def.kind : null; }

    load(id, def) {
        this.clear(false);
        const token = ++this._token;
        const urls = [def.url].concat(def.fallback ? [].concat(def.fallback) : []);
        const tryLoad = (i) => new Promise((resolve, reject) => {
            this.loader.load(urls[i], resolve, undefined, () => {
                if (token !== this._token) { reject(new Error('superseded')); return; }
                console.warn('[scenery] could not load', urls[i]);
                if (i + 1 < urls.length) tryLoad(i + 1).then(resolve, reject);
                else reject(new Error('Backdrop image could not be loaded (offline, blocked, or no CORS).'));
            });
        });
        return tryLoad(0).then((texture) => {
            if (token !== this._token) { texture.dispose(); return; }
            texture.encoding = sRGBEncoding;
            texture.anisotropy = Math.min(8, this.world.renderer.capabilities.getMaxAnisotropy());
            const img = texture.image;
            const aspect = img.width / img.height;
            let kind = def.kind;
            if (kind === 'auto') kind = aspect >= 3 ? 'pano' : 'photo';
            const resolved = { ...def, kind };
            if (resolved.horizon === undefined) resolved.horizon = kind === 'photo' ? 0.42 : 0.5;
            if (resolved.hfov === undefined) resolved.hfov = 65;
            this.active = { id, def: resolved, texture, image: img, aspect, mesh: null, colors: null };
            this.height = 0; this.scale = 1; this.yaw = 0;
            this._analyse();
            this._build();
            this._applyEnvironment();
            this._layout();
        });
    }

    clear(restorePreset = true) {
        this._token++;
        const w = this.world;
        if (this.active) {
            if (this.active.mesh) {
                w.scene.remove(this.active.mesh);
                this.active.mesh.geometry.dispose();
                this.active.mesh.material.dispose();
            }
            this.active.texture.dispose();
            this.active = null;
        }
        const c = w.controls;
        c.minAzimuthAngle = -Infinity; c.maxAzimuthAngle = Infinity;
        c.minPolarAngle = 0; c.maxPolarAngle = Math.PI * 0.52;
        c.minDistance = 2; c.maxDistance = 160;
        if (restorePreset) w.applyPreset(w.presetId);
    }

    setHeight(h) { this.height = h; this._layout(); }
    setScale(s) { this.scale = s; this._layout(); }
    setYaw(deg) { this.yaw = deg; this._layout(); }

    /** Called by World.frame after the camera moved: widen the photo if needed, re-derive orbit limits. */
    frame() {
        if (this.kind !== 'photo') return;
        const w = this.world;
        const cam = w.camera;
        const d = w.controls.getDistance();
        const camHalfH = Math.atan(Math.tan((cam.fov * Math.PI) / 360) * cam.aspect);
        const neededHalfW = (R + d) * Math.tan(camHalfH + AZ_MARGIN + 0.02);
        const neededHfov = (2 * Math.atan(neededHalfW / R) * 180) / Math.PI;
        this.active.autoWiden = Math.max(1, neededHfov / (this.active.def.hfov * this.scale));
        this._layout();
    }
    onResize() { if (this.kind === 'photo') this.frame(); }

    // ------------------------------------------------------------------ internals

    /** Average colours from a tiny copy: sky top, sky just above the horizon, ground just below it. */
    _analyse() {
        const { image, def } = this.active;
        const c = document.createElement('canvas');
        c.width = c.height = THUMB;
        const ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0, THUMB, THUMB);
        const d = ctx.getImageData(0, 0, THUMB, THUMB).data;
        const rows = (r0, r1) => {
            r0 = Math.max(0, Math.min(THUMB - 1, Math.round(r0))); r1 = Math.max(r0 + 1, Math.min(THUMB, Math.round(r1)));
            let r = 0, g = 0, b = 0, n = 0;
            for (let y = r0; y < r1; y++) for (let x = THUMB * 0.2; x < THUMB * 0.8; x++) { const i = (y * THUMB + (x | 0)) * 4; r += d[i]; g += d[i + 1]; b += d[i + 2]; n++; }
            return new Color(r / n / 255, g / n / 255, b / n / 255);
        };
        const hRow = (1 - def.horizon) * THUMB;
        this.active.colors = {
            top: rows(0, 3),
            mid: rows(hRow * 0.45, hRow * 0.55),
            skyHorizon: rows(hRow - 4, hRow - 1),
            groundFar: rows(hRow + 1, hRow + 5),
            bottom: rows(THUMB - 3, THUMB)
        };
    }

    _build() {
        const { def, texture, aspect } = this.active;
        let mesh;
        if (def.kind === 'photo') {
            mesh = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: texture, fog: false, side: DoubleSide }));
        } else if (aspect >= 3) {
            const H = (2 * Math.PI * R) / aspect;               // 360° around → height from aspect
            texture.wrapS = RepeatWrapping;
            texture.repeat.x = -1;                               // un-mirror when seen from inside
            mesh = new Mesh(new CylinderGeometry(R, R, H, 128, 1, true), new MeshBasicMaterial({ map: texture, side: BackSide, fog: false }));
            mesh.userData.stripHeight = H;
        } else {
            texture.wrapS = RepeatWrapping;
            texture.repeat.x = -1;
            mesh = new Mesh(new SphereGeometry(R, 96, 48), new MeshBasicMaterial({ map: texture, side: BackSide, fog: false }));
        }
        mesh.renderOrder = -2;
        mesh.frustumCulled = false;
        this.active.mesh = mesh;
        this.world.scene.add(mesh);
    }

    _applyEnvironment() {
        const { def, colors } = this.active;
        const w = this.world;
        if (def.light) w.applyPreset(def.light, { lightsOnly: true });
        // Sky outside the picture + fog that melts the ground into the picture's far ground
        w.sky.setColors(colors.top, colors.mid, colors.skyHorizon);
        w.sky.mesh.visible = true;
        w.setFogColor(colors.groundFar.clone().lerp(colors.skyHorizon, 0.2));
        w.container.style.background = `#${colors.top.getHexString()}`;
        if (def.ground) w.setGround(def.ground, true);
    }

    _layout() {
        if (!this.active || !this.active.mesh) return;
        const { def, mesh, aspect } = this.active;
        const horizon = Math.min(0.95, Math.max(0.05, def.horizon + this.height * 0.02));
        const eye = EYE;

        if (def.kind === 'photo') {
            const hfov = Math.min(150, Math.max(25, def.hfov * this.scale * (this.active.autoWiden || 1)));
            const W = 2 * R * Math.tan((hfov * Math.PI) / 360);
            const H = W / aspect;
            mesh.scale.set(W, H, 1);
            mesh.position.set(0, eye + (0.5 - horizon) * H, -R);
            this.active.hfov = hfov;
            this.active.planeW = W;
            this._limitOrbit();
        } else if (mesh.userData.stripHeight) {
            const H = mesh.userData.stripHeight;
            mesh.position.set(0, eye + (0.5 - horizon) * H, 0);
            mesh.rotation.y = (this.yaw * Math.PI) / 180;
            this._freeOrbit();
        } else {
            mesh.position.set(0, eye + (0.5 - horizon) * 2 * R * 0.5, 0);
            mesh.rotation.y = (this.yaw * Math.PI) / 180;
            this._freeOrbit();
        }
    }

    _freeOrbit() {
        const c = this.world.controls;
        c.minAzimuthAngle = -Infinity; c.maxAzimuthAngle = Infinity;
        c.minPolarAngle = 0.15; c.maxPolarAngle = Math.PI * 0.5 - 0.01;
        c.minDistance = 2; c.maxDistance = 120;
    }

    /** Keep the camera inside the photo: azimuth within the plane's span, not too far back, never below ground. */
    _limitOrbit() {
        if (!this.active || this.active.def.kind !== 'photo') return;
        const w = this.world;
        const cam = w.camera;
        const c = w.controls;
        const halfH = (this.active.hfov * Math.PI) / 360;
        const camHalfV = (cam.fov * Math.PI) / 360;
        const camHalfH = Math.atan(Math.tan(camHalfV) * cam.aspect);
        // farthest the camera may sit so that AZ_MARGIN of rotation still stays inside the picture
        const maxD = Math.max(8, (this.active.planeW / 2) / Math.tan(camHalfH + AZ_MARGIN) - R);
        c.minDistance = 2; c.maxDistance = maxD;
        c.minAzimuthAngle = -AZ_MARGIN; c.maxAzimuthAngle = AZ_MARGIN;
        void halfH;
        c.minPolarAngle = 0.35; c.maxPolarAngle = Math.PI * 0.5 - 0.01;
    }
}
