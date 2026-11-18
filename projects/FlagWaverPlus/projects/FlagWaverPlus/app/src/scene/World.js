import {
    Box3,
    CircleGeometry,
    Clock,
    ColorManagement,
    Fog,
    Mesh,
    MeshStandardMaterial,
    NoToneMapping,
    PCFSoftShadowMap,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer,
    sRGBEncoding
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { TIME_STEP } from '../flagwaver';
import { PRESETS } from './presets';
import SkyDome from './SkyDome';
import Scenery from './Scenery';

/**
 * Owns renderer / scene / camera / lights / ground and the fixed-timestep loop.
 * Simulation subjects register an `update(dt)` callback via `onUpdate`.
 */
export default class World {
    constructor(container) {
        ColorManagement.legacyMode = false;

        this.container = container;
        this.scene = new Scene();
        this.scene.fog = new Fog(0xbfdcf7, 30, 260);

        this.camera = new PerspectiveCamera(30, 1, 0.1, 3000);
        this.camera.position.set(0, 6, 18);

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        this.renderer.setPixelRatio(dpr);
        this.renderer.outputEncoding = sRGBEncoding;
        this.renderer.physicallyCorrectLights = true;
        this.renderer.toneMapping = NoToneMapping;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.08;
        this.controls.maxDistance = 160;
        this.controls.minDistance = 2;
        this.controls.maxPolarAngle = Math.PI * 0.52;
        this.controls.target.set(0, 4.5, 0);
        this.controls.update();

        this.lights = [];
        this.sun = null;
        this.ground = new Mesh(
            new CircleGeometry(1, 96),
            new MeshStandardMaterial({ color: 0x5e8c4a, roughness: 1, metalness: 0 })
        );
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.receiveShadow = true;
        this.ground.position.y = -0.01;
        this.scene.add(this.ground);

        this.sky = new SkyDome(280);
        this.scene.add(this.sky.mesh);
        this.defaultFog = this.scene.fog;
        this.groundWanted = true;
        this.scenery = null; // created after construction (needs renderer)

        this.updateCallbacks = [];
        // Pixels on the left of the viewport covered by UI; frame() keeps content clear of it.
        this.obstructionLeft = () => 0;
        this.clock = new Clock();
        this.accumulator = 0;
        this.paused = false;
        this.timeScale = 1;

        this.scenery = new Scenery(this);
        this.applyPreset('day');
        this.resize();
        window.addEventListener('resize', () => this.resize());

        this._loop = this._loop.bind(this);
        requestAnimationFrame(this._loop);
    }

    onUpdate(fn) {
        this.updateCallbacks.push(fn);
    }

    resize() {
        const w = this.container.clientWidth || window.innerWidth;
        const h = this.container.clientHeight || window.innerHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
        if (this.scenery) this.scenery.onResize();
        this.render();
    }

    /**
     * @param {string} id preset key
     * @param {{lightsOnly?: boolean}} [opts] lightsOnly skips sky/ground/background (used while a scenery is active)
     */
    applyPreset(id, opts = {}) {
        const preset = PRESETS[id] || PRESETS.day;
        this.presetId = id;
        const lightsOnly = opts.lightsOnly || (this.scenery && this.scenery.active);

        for (const l of this.lights) this.scene.remove(l);
        this.lights = [];

        const { ambient, sun } = preset.lights();
        for (const l of ambient) { this.scene.add(l); this.lights.push(l); }

        sun.castShadow = true;
        sun.shadow.mapSize.set(2048, 2048);
        sun.shadow.bias = -0.0005;
        sun.shadow.camera.far = 400;
        this.scene.add(sun);
        this.scene.add(sun.target);
        this.lights.push(sun, sun.target);
        this.sun = sun;

        this.defaultFog.color.setHex(preset.fog);
        if (!lightsOnly) {
            this.sky.setColors(...preset.sky);
            this.ground.material.color.setHex(preset.ground);
            this.container.style.background = preset.css;
        }
        this.fitShadowToBounds(this._lastBounds);
    }

    setGroundVisible(v) {
        this.groundWanted = v;
        if (!(this.scenery && this.scenery.active)) this.ground.visible = v;
    }

    /**
     * Resize the directional light's shadow frustum and ground disc to cover the flags.
     * @param {Box3|null} bounds world-space bounds of all flag groups
     */
    fitShadowToBounds(bounds) {
        this._lastBounds = bounds;
        const size = new Vector3(12, 8, 12);
        const center = new Vector3(0, 4, 0);
        if (bounds && !bounds.isEmpty()) {
            bounds.getSize(size);
            bounds.getCenter(center);
        }
        const radius = Math.max(size.x, size.z) * 0.75 + 8;

        // Ground disc large enough to catch shadows, fading into fog
        this.ground.scale.setScalar(Math.max(500, radius * 12));
        this.ground.position.x = center.x;
        this.ground.position.z = center.z;

        if (this.sun) {
            const cam = this.sun.shadow.camera;
            cam.left = -radius; cam.right = radius;
            cam.top = radius; cam.bottom = -radius;
            cam.near = 1;
            cam.updateProjectionMatrix();
            // Keep sun direction, move it to orbit around the scene center
            const dir = this.sun.position.clone().normalize();
            this.sun.position.copy(center).addScaledVector(dir, Math.max(80, radius * 4));
            this.sun.target.position.copy(center);
            this.sun.target.updateMatrixWorld();
            this.sun.shadow.needsUpdate = true;
        }

        // Fog: start just beyond the flags
        this.defaultFog.near = Math.max(30, radius * 3);
        this.defaultFog.far = this.defaultFog.near + 200;
    }

    /** Camera position/target that fits `bounds`, accounting for UI covering the left of the viewport. */
    computeFrame(bounds) {
        if (!bounds || bounds.isEmpty()) return null;
        const size = new Vector3();
        const center = new Vector3();
        bounds.getSize(size);
        bounds.getCenter(center);
        const fov = (this.camera.fov * Math.PI) / 180;
        const viewW = this.renderer.domElement.clientWidth || window.innerWidth;
        const f = Math.min(0.6, Math.max(0, this.obstructionLeft() / viewW)); // fraction hidden by UI
        const fitH = size.y / 2 / Math.tan(fov / 2);
        const fitW = size.x / 2 / Math.tan(fov / 2) / this.camera.aspect / (1 - f);
        const dist = Math.max(fitH, fitW) * 1.15 + size.z * 0.6 + 2;

        const target = center.clone();
        target.y = Math.max(center.y, size.y * 0.55);
        const visibleW = 2 * dist * Math.tan(fov / 2) * this.camera.aspect;
        target.x -= (f / 2) * visibleW;
        const pos = target.clone().add(new Vector3(0, dist * 0.18, dist));
        return { pos, target };
    }

    /** Move the camera so that bounds fits the view. */
    frame(bounds, animate = true) {
        if (this.scenery && this.scenery.active) { this.scenery.frame(); return; }
        const f = this.computeFrame(bounds);
        if (!f) return;
        const { pos, target } = f;

        if (!animate) {
            this.camera.position.copy(pos);
            this.controls.target.copy(target);
            this.controls.update();
            return;
        }
        // Simple eased tween
        const p0 = this.camera.position.clone();
        const t0 = this.controls.target.clone();
        const start = performance.now();
        const dur = 650;
        const step = () => {
            const k = Math.min(1, (performance.now() - start) / dur);
            const e = 1 - Math.pow(1 - k, 3);
            this.camera.position.lerpVectors(p0, pos, e);
            this.controls.target.lerpVectors(t0, target, e);
            this.controls.update();
            if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    setPaused(p) {
        this.paused = p;
        if (!p) this.clock.getDelta();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    _loop() {
        requestAnimationFrame(this._loop);
        const dt = Math.min(this.clock.getDelta(), 0.1);
        if (!this.paused) {
            this.accumulator += dt * this.timeScale;
            let steps = 0;
            while (this.accumulator >= TIME_STEP && steps < 3) {
                for (const fn of this.updateCallbacks) fn(TIME_STEP);
                this.accumulator -= TIME_STEP;
                steps++;
            }
            if (steps === 3) this.accumulator = 0; // drop time if we can't keep up
        }
        this.controls.update();
        this.sky.follow(this.camera);
        this.render();
    }

    /** Composite the current frame over the preset background and return a PNG data URL. */
    screenshot() {
        this.render();
        const gl = this.renderer.domElement;
        const out = document.createElement('canvas');
        out.width = gl.width;
        out.height = gl.height;
        const ctx = out.getContext('2d');
        const bg = this.container.style.background;
        if (bg && bg.startsWith('#')) {
            ctx.fillStyle = bg;
        } else {
            const stops = (PRESETS[this.presetId] || PRESETS.day).stops;
            const grad = ctx.createLinearGradient(0, 0, 0, out.height);
            stops.forEach((c, i) => grad.addColorStop(stops.length === 1 ? 0 : i / (stops.length - 1), c));
            ctx.fillStyle = grad;
        }
        ctx.fillRect(0, 0, out.width, out.height);
        ctx.drawImage(gl, 0, 0);
        return out.toDataURL('image/png');
    }
}

export { Box3 };
