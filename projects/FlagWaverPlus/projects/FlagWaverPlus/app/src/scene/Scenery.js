import {
    BackSide,
    CircleGeometry,
    Color,
    Matrix4,
    Mesh,
    PerspectiveCamera,
    PlaneGeometry,
    RepeatWrapping,
    ShaderMaterial,
    ShadowMaterial,
    SphereGeometry,
    TextureLoader,
    Vector3,
    sRGBEncoding
} from 'three';

/*
 * Photo / panorama backdrops, done as projected environments rather than billboards.
 *
 * Two meshes — a large horizontal ground disc and a far inside-out dome — share one shader that
 * colours every fragment by looking the image up *by direction from a single viewpoint*:
 *
 *   photo (mode 0): perspective projection from a virtual "projector" standing where the
 *                   photographer stood (height `eye`, tilt derived from the horizon row, the
 *                   photo's vertical FOV). The viewer camera starts at the projector, so the
 *                   result is the photo with the flags composited in; small orbits give
 *                   plausible parallax because ground and backdrop are real geometry.
 *   strip (mode 1): 360° cylindrical panorama — u from azimuth, v from tan(elevation).
 *   equirect (mode 2): u from azimuth, v from elevation.
 *
 * Ground and dome sample the same direction field, so the floor recedes with correct
 * perspective and meets the backdrop at the horizon with no seam. A transparent shadow
 * catcher on top of the ground receives the flags' shadows.
 */

const VERT = /* glsl */`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`;

const FRAG = /* glsl */`
uniform sampler2D map;
uniform int mode;          // 0 photo, 1 cylindrical strip, 2 equirectangular
uniform vec3 center;       // viewpoint for pano modes
uniform mat4 projVP;       // projector view-projection for photo mode
uniform float horizonV;    // image v (0 bottom .. 1 top) of the horizon
uniform float tanRange;    // strip: tan(top) - tan(bottom) over the full image height
uniform float yaw;         // pano rotation (radians)
uniform vec3 edgeTop;      // shown above the image
uniform vec3 edgeBottom;   // shown below / beside the image
varying vec3 vWorld;

void main() {
    vec2 uv;
    float behind = 0.0;
    if (mode == 0) {
        vec4 c = projVP * vec4(vWorld, 1.0);
        if (c.w <= 0.0) { uv = vec2(0.5, 0.0); behind = 1.0; }
        else uv = c.xy / c.w * 0.5 + 0.5;
    } else {
        vec3 d = vWorld - center;
        float az = atan(d.x, -d.z) + yaw;
        float u = fract(0.5 + az / 6.28318530718);
        float v;
        if (mode == 1) {
            float t = d.y / max(length(d.xz), 1e-4);
            v = horizonV + t / tanRange;
        } else {
            float el = asin(clamp(d.y / max(length(d), 1e-4), -1.0, 1.0));
            v = horizonV + el / 3.14159265359;
        }
        uv = vec2(u, v);
    }
    vec2 cl = vec2(mode == 0 ? clamp(uv.x, 0.0, 1.0) : uv.x, clamp(uv.y, 0.0, 1.0));
    float outside = length(uv - vec2(mode == 0 ? clamp(uv.x, 0.0, 1.0) : uv.x, cl.y)) + behind;
    vec3 col = texture2D(map, cl).rgb;
    vec3 ec = uv.y > 1.0 ? edgeTop : edgeBottom;
    col = mix(col, ec, smoothstep(0.0, 0.06, outside));
    gl_FragColor = vec4(col, 1.0);
    #include <encodings_fragment>
}`;

const GROUND_R = 380;
const DOME_R = 400;

export default class Scenery {
    constructor(world) {
        this.world = world;
        this.active = null;      // { id, def, texture, image, aspect }
        this.loader = new TextureLoader();
        this.loader.setCrossOrigin('anonymous');
        this.height = 0;         // user nudge: moves the horizon (m-ish units, see _layout)
        this.scale = 1;          // photo: FOV multiplier (zoom); pano: unused
        this.yaw = 0;            // pano rotation in degrees
        this.eye = 2.2;          // viewpoint height above the pole bases (m)
        this.savedFov = world.camera.fov;
        this._token = 0;

        this.material = new ShaderMaterial({
            uniforms: {
                map: { value: null },
                mode: { value: 0 },
                center: { value: new Vector3() },
                projVP: { value: new Matrix4() },
                horizonV: { value: 0.5 },
                tanRange: { value: 1 },
                yaw: { value: 0 },
                edgeTop: { value: new Color(0.5, 0.6, 0.8) },
                edgeBottom: { value: new Color(0.4, 0.4, 0.4) }
            },
            vertexShader: VERT,
            fragmentShader: FRAG,
            fog: false,
            depthWrite: true
        });
        const domeMat = this.material.clone();
        domeMat.uniforms = this.material.uniforms; // share
        domeMat.side = BackSide;

        this.ground = new Mesh(new CircleGeometry(GROUND_R, 128), this.material);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.02;
        this.ground.renderOrder = -2;
        this.ground.visible = false;
        this.dome = new Mesh(new SphereGeometry(DOME_R, 64, 32), domeMat);
        this.dome.renderOrder = -3;
        this.dome.frustumCulled = false;
        this.dome.visible = false;
        world.scene.add(this.ground, this.dome);

        this.shadowCatcher = new Mesh(
            new PlaneGeometry(1, 1),
            new ShadowMaterial({ opacity: 0.4, transparent: true, depthWrite: false })
        );
        this.shadowCatcher.rotation.x = -Math.PI / 2;
        this.shadowCatcher.scale.setScalar(GROUND_R * 2);
        this.shadowCatcher.receiveShadow = true;
        this.shadowCatcher.visible = false;
        this.shadowCatcher.position.y = 0.0;
        world.scene.add(this.shadowCatcher);

        this.projector = new PerspectiveCamera(45, 1.5, 0.5, 5000);
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
            texture.wrapS = RepeatWrapping;
            texture.anisotropy = Math.min(8, this.world.renderer.capabilities.getMaxAnisotropy());
            const img = texture.image;
            const aspect = img.width / img.height;
            let kind = def.kind;
            if (kind === 'auto') kind = aspect >= 3 ? 'pano' : 'photo';
            const resolved = { ...def, kind };
            if (resolved.horizon === undefined) resolved.horizon = kind === 'photo' ? 0.42 : 0.5;
            if (resolved.fov === undefined) resolved.fov = 48;
            this.active = { id, def: resolved, texture, image: img, aspect };
            this.height = 0; this.scale = 1; this.yaw = 0;
            this._applyEnvironment();
            this._layout(true);
        });
    }

    clear(restorePreset = true) {
        this._token++;
        if (this.active) {
            this.active.texture.dispose();
            this.active = null;
        }
        this.material.uniforms.map.value = null;
        this.ground.visible = this.dome.visible = this.shadowCatcher.visible = false;
        const w = this.world;
        w.ground.visible = w.groundWanted;
        w.sky.mesh.visible = true;
        w.scene.fog = w.defaultFog;
        w.camera.fov = this.savedFov;
        w.camera.clearViewOffset();
        const el = w.renderer.domElement;
        w.camera.aspect = (el.clientWidth || window.innerWidth) / (el.clientHeight || window.innerHeight);
        w.camera.updateProjectionMatrix();
        const c = w.controls;
        c.minAzimuthAngle = -Infinity; c.maxAzimuthAngle = Infinity;
        c.minPolarAngle = 0; c.maxPolarAngle = Math.PI * 0.52;
        c.minDistance = 2; c.maxDistance = 160;
        if (restorePreset) w.applyPreset(w.presetId);
    }

    setHeight(h) { this.height = h; this._layout(false); }
    setScale(s) { this.scale = s; this._layout(this.kind === 'photo'); }
    setYaw(deg) { this.yaw = deg; this._layout(false); }

    /** Called by World.frame while a backdrop is active: re-seat the viewer. */
    frame() { if (this.active) this._layout(true); }

    /** Called by World.resize. */
    onResize() { if (this.active) this._applyViewOffset(); }

    /**
     * Keep the camera where it is but render a frame that is wider on the left by the width of the
     * UI panel, so the flags sit in the middle of the uncovered part of the screen.
     * Returns the aspect ratio of that virtual frame.
     */
    _applyViewOffset() {
        const w = this.world;
        const el = w.renderer.domElement;
        const W = el.clientWidth || window.innerWidth;
        const H = el.clientHeight || window.innerHeight;
        const p = Math.round(w.obstructionLeft());
        w.camera.aspect = (W + p) / H;
        if (p > 0) w.camera.setViewOffset(W + p, H, 0, 0, W, H);
        else w.camera.clearViewOffset();
        w.camera.updateProjectionMatrix();
        this._view = { virtualAspect: (W + p) / H, visibleAspect: (W - p) / H };
        return this._view.virtualAspect;
    }

    // ------------------------------------------------------------------ internals

    _applyEnvironment() {
        const { def, image, texture } = this.active;
        const w = this.world;

        // Edge colours from a tiny copy of the image
        const c = document.createElement('canvas');
        c.width = 32; c.height = 32;
        const ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0, 32, 32);
        const d = ctx.getImageData(0, 0, 32, 32).data;
        const avgRows = (r0, r1) => {
            let r = 0, g = 0, b = 0, n = 0;
            for (let y = r0; y < r1; y++) for (let x = 0; x < 32; x++) { const i = (y * 32 + x) * 4; r += d[i]; g += d[i + 1]; b += d[i + 2]; n++; }
            return new Color(r / n / 255, g / n / 255, b / n / 255);
        };
        const top = avgRows(0, 2);
        const bottom = avgRows(29, 32);
        const u = this.material.uniforms;
        u.map.value = texture;
        u.edgeTop.value.copy(top).convertSRGBToLinear();
        u.edgeBottom.value.copy(bottom).convertSRGBToLinear();

        if (def.light) w.applyPreset(def.light, { lightsOnly: true });
        w.scene.fog = null;
        w.sky.mesh.visible = false;
        w.ground.visible = false;
        w.container.style.background = `#${top.getHexString()}`;
        this.ground.visible = this.dome.visible = this.shadowCatcher.visible = true;
    }

    _layout(reseatCamera) {
        if (!this.active) return;
        const { def, aspect } = this.active;
        const u = this.material.uniforms;
        const w = this.world;
        const cam = w.camera;
        const ctl = w.controls;
        const horizon = Math.min(0.95, Math.max(0.05, def.horizon + this.height * 0.03));

        if (def.kind === 'photo') {
            u.mode.value = 0;
            const vfov = Math.min(100, Math.max(15, def.fov * this.scale));
            const halfTan = Math.tan((vfov * Math.PI) / 360);
            // camera with horizon at image fraction `horizon` (from bottom) is tilted up by this much
            const pitch = Math.atan((0.5 - horizon) * 2 * halfTan);

            // Viewer FOV: narrower than the photo so its edges stay off screen at this viewport shape
            const virtualAspect = reseatCamera ? this._applyViewOffset() : (this._view ? this._view.virtualAspect : cam.aspect);
            const visibleAspect = this._view ? this._view.visibleAspect : cam.aspect;
            const camHalfTan = Math.min(halfTan * 0.9, (halfTan * aspect) / virtualAspect * 0.93);

            // Stand far enough back that all flags fit the uncovered part of the screen, width and height
            const b = w._lastBounds || null;
            const size = new Vector3(12, 7, 4);
            if (b && !b.isEmpty()) b.getSize(size);
            const fitW = (size.x / 2) / (camHalfTan * visibleAspect) * 1.15 + size.z / 2;
            const upTan = Math.tan(Math.min(1.4, Math.atan(camHalfTan) + pitch)) * 0.85;
            const fitH = (size.y + 0.6 - this.eye) / Math.max(0.05, upTan);
            const zoff = Math.max(10, fitW, fitH);

            const p = this.projector;
            p.fov = vfov; p.aspect = aspect; p.near = 0.5; p.far = 5000;
            p.position.set(0, this.eye, zoff);
            p.rotation.set(pitch, 0, 0);
            p.updateMatrixWorld(true);
            p.updateProjectionMatrix();
            u.projVP.value.multiplyMatrices(p.projectionMatrix, p.matrixWorldInverse);

            if (reseatCamera) {
                cam.fov = (Math.atan(camHalfTan) * 360) / Math.PI;
                cam.updateProjectionMatrix();
                cam.position.copy(p.position);
                const fwd = new Vector3(0, 0, -1).applyQuaternion(p.quaternion);
                ctl.target.copy(p.position).addScaledVector(fwd, zoff);
                ctl.minAzimuthAngle = -Infinity; ctl.maxAzimuthAngle = Infinity;
                ctl.minPolarAngle = 0; ctl.maxPolarAngle = Math.PI;
                ctl.minDistance = 0; ctl.maxDistance = Infinity;
                ctl.update();
                const az = ctl.getAzimuthalAngle();
                const po = ctl.getPolarAngle();
                const dist = ctl.getDistance();
                ctl.minAzimuthAngle = az - 0.12; ctl.maxAzimuthAngle = az + 0.12;
                ctl.minPolarAngle = Math.max(0.05, po - 0.06); ctl.maxPolarAngle = Math.min(Math.PI - 0.05, po + 0.05);
                ctl.minDistance = dist * 0.8; ctl.maxDistance = dist * 1.25;
            }
        } else {
            const strip = aspect >= 3;
            u.mode.value = strip ? 1 : 2;
            u.horizonV.value = horizon;
            u.yaw.value = (this.yaw * Math.PI) / 180;
            // cylindrical strip covering 360°: tan(top) - tan(bottom) = 2π · H / W
            u.tanRange.value = strip ? (2 * Math.PI) / aspect : 1;
            if (reseatCamera) {
                // Eye-level viewer far enough back to see every flag; the panorama is projected from
                // this very spot, so the ground reads correctly from the starting view.
                this._applyViewOffset();
                cam.fov = 40;
                cam.updateProjectionMatrix();
                const b = w._lastBounds || null;
                const size = new Vector3(12, 7, 4);
                if (b && !b.isEmpty()) b.getSize(size);
                const hTan = Math.tan((cam.fov * Math.PI) / 360) * this._view.visibleAspect;
                const zoff = Math.max(12, (size.x / 2) / hTan * 1.2 + size.z / 2);
                cam.position.set(0, this.eye + 0.4, zoff);
                ctl.target.set(0, 3.4, 0);
                u.center.value.copy(cam.position);
                ctl.minAzimuthAngle = -Infinity; ctl.maxAzimuthAngle = Infinity;
                ctl.minPolarAngle = 0.2; ctl.maxPolarAngle = Math.PI * 0.5 - 0.02; // never below the ground
                ctl.minDistance = 3; ctl.maxDistance = 120;
                ctl.update();
            }
        }
    }
}
