import {
    BackSide,
    Color,
    CylinderGeometry,
    DoubleSide,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    RepeatWrapping,
    ShadowMaterial,
    SphereGeometry,
    TextureLoader,
    sRGBEncoding
} from 'three';

// How far (as a fraction of the image size) the photo plane extends beyond the image on each side.
const PHOTO_EXT = { l: 0.3, r: 0.3, t: 0.4, b: 0.9 };

/**
 * Photo / panorama backdrops behind the flags.
 *
 * photo: one plane at a fixed distance, sized by a vertical field of view; orbit is clamped so
 *        the flat image keeps working as a background. The regular ground is swapped for a
 *        transparent shadow-catcher so flags still throw shadows "onto the photo".
 * pano:  a 360° strip on the inside of a cylinder (aspect > 3) or a full equirectangular image on
 *        a sphere (aspect <= 3). Sky-dome and ground colours are sampled from the image edges so
 *        everything above/below the strip blends in.
 *
 * Only one texture lives on the GPU at a time; switching disposes the previous one.
 */
export default class Scenery {
    constructor(world) {
        this.world = world;
        this.active = null;      // { id, def, texture, mesh, image }
        this.loader = new TextureLoader();
        this.loader.setCrossOrigin('anonymous');
        this.height = 0;         // user nudge of the backdrop vertically (m)
        this.scale = 1;          // user nudge of photo size
        this.distance = 140;

        this.shadowCatcher = new Mesh(
            new PlaneGeometry(1, 1),
            new ShadowMaterial({ opacity: 0.35, transparent: true, depthWrite: false })
        );
        this.shadowCatcher.rotation.x = -Math.PI / 2;
        this.shadowCatcher.scale.setScalar(400);
        this.shadowCatcher.receiveShadow = true;
        this.shadowCatcher.visible = false;
        this.shadowCatcher.position.y = -0.005;
        world.scene.add(this.shadowCatcher);

        this._token = 0;
    }

    get kind() { return this.active ? this.active.def.kind : null; }

    /**
     * @param {string|null} id key in SCENERIES, or 'custom'
     * @param {object} def  scenery definition ({ kind, url, horizon, fov, light, ... })
     * @returns {Promise<void>} resolves when the texture is on screen; rejects on load error
     */
    load(id, def) {
        this.clear(false);
        const token = ++this._token;
        return new Promise((resolve, reject) => {
            this.loader.load(def.url, (texture) => {
                if (token !== this._token) { texture.dispose(); return; }
                texture.encoding = sRGBEncoding;
                texture.anisotropy = Math.min(4, this.world.renderer.capabilities.getMaxAnisotropy());
                const img = texture.image;
                const aspect = img.width / img.height;
                let kind = def.kind;
                if (kind === 'auto') kind = aspect >= 3 ? 'pano' : 'photo';
                const resolved = { ...def, kind };
                if (resolved.horizon === undefined) resolved.horizon = kind === 'photo' ? 0.4 : 0.5;
                if (resolved.fov === undefined) resolved.fov = 32;

                this.active = { id, def: resolved, texture, mesh: null, image: img, aspect };
                this._buildMesh();
                this._applyEnvironment();
                resolve();
            }, undefined, () => {
                if (token !== this._token) return;
                reject(new Error('Backdrop image could not be loaded (offline, blocked, or no CORS).'));
            });
        });
    }

    clear(restorePreset = true) {
        this._token++;
        if (this.active) {
            if (this.active.mesh) {
                this.world.scene.remove(this.active.mesh);
                this.active.mesh.geometry.dispose();
                this.active.mesh.material.dispose();
            }
            this.active.texture.dispose();
            this.active = null;
        }
        this.shadowCatcher.visible = false;
        this.world.ground.visible = this.world.groundWanted;
        this.world.sky.mesh.visible = true;
        this.world.scene.fog = this.world.defaultFog;
        const c = this.world.controls;
        c.minAzimuthAngle = -Infinity; c.maxAzimuthAngle = Infinity;
        c.minPolarAngle = 0; c.maxPolarAngle = Math.PI * 0.52;
        c.maxDistance = 160;
        if (restorePreset) this.world.applyPreset(this.world.presetId);
    }

    setHeight(h) { this.height = h; this._layout(); }
    setScale(s) { this.scale = s; this._layout(); }

    _buildMesh() {
        const { def, texture, aspect } = this.active;
        let mesh;
        if (def.kind === 'photo') {
            // Plane extends past the image on every side; UVs outside 0..1 clamp to the edge pixels,
            // so the backdrop never "runs out" when the camera looks up or down.
            const ext = PHOTO_EXT;
            const geo = new PlaneGeometry(1, 1);
            const uv = geo.attributes.uv;
            for (let i = 0; i < uv.count; i++) {
                uv.setXY(i, -ext.l + uv.getX(i) * (1 + ext.l + ext.r), -ext.b + uv.getY(i) * (1 + ext.t + ext.b));
            }
            uv.needsUpdate = true;
            mesh = new Mesh(geo, new MeshBasicMaterial({ map: texture, fog: false, side: DoubleSide }));
        } else if (aspect > 3) {
            // 360° strip: circumference = 2πR, so height = 2πR / aspect
            const R = 220;
            const H = (2 * Math.PI * R) / aspect;
            texture.wrapS = RepeatWrapping;
            texture.repeat.x = -1; // un-mirror when viewed from inside
            mesh = new Mesh(new CylinderGeometry(R, R, H, 96, 1, true), new MeshBasicMaterial({ map: texture, side: BackSide, fog: false }));
            mesh.userData.stripHeight = H;
        } else {
            texture.wrapS = RepeatWrapping;
            texture.repeat.x = -1;
            mesh = new Mesh(new SphereGeometry(220, 64, 32), new MeshBasicMaterial({ map: texture, side: BackSide, fog: false }));
        }
        mesh.renderOrder = -2;
        mesh.frustumCulled = false;
        this.active.mesh = mesh;
        this.world.scene.add(mesh);
        this._layout();
    }

    _layout() {
        if (!this.active || !this.active.mesh) return;
        const { def, mesh, aspect } = this.active;
        const eye = 2.2 + this.height; // where the image horizon should sit (m above the pole bases)
        if (def.kind === 'photo') {
            const fov = (def.fov * this.scale * Math.PI) / 180;
            const H = 2 * this.distance * Math.tan(fov / 2);   // height of the image itself
            const W = H * aspect;
            const ext = PHOTO_EXT;
            mesh.scale.set(W * (1 + ext.l + ext.r), H * (1 + ext.t + ext.b), 1);
            // image horizon row at `eye`; plane centre is offset by the asymmetric extension
            const imageCenterY = eye + (0.5 - def.horizon) * H;
            mesh.position.set(0, imageCenterY + ((ext.t - ext.b) / 2) * H, -this.distance);
            mesh.rotation.set(0, 0, 0);
        } else if (mesh.userData.stripHeight) {
            const H = mesh.userData.stripHeight;
            mesh.position.set(0, eye + (0.5 - def.horizon) * H, 0);
        } else {
            mesh.position.set(0, eye, 0);
        }
    }

    _applyEnvironment() {
        const { def, image } = this.active;
        const world = this.world;

        // Sample edge colours from a tiny copy of the image
        const c = document.createElement('canvas');
        c.width = 32; c.height = 32;
        const ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0, 32, 32);
        const d = ctx.getImageData(0, 0, 32, 32).data;
        const avgRows = (r0, r1) => {
            let r = 0, g = 0, b = 0, n = 0;
            for (let y = r0; y < r1; y++) for (let x = 0; x < 32; x++) { const i = (y * 32 + x) * 4; r += d[i]; g += d[i + 1]; b += d[i + 2]; n++; }
            return new Color(r / n / 255, g / n / 255, b / n / 255).convertSRGBToLinear();
        };
        const top = avgRows(0, 2);
        const bottom = avgRows(30, 32);

        if (def.light) world.applyPreset(def.light, { lightsOnly: true });

        world.scene.fog = null;
        if (def.kind === 'photo') {
            world.sky.mesh.visible = false;
            world.container.style.background = `#${top.clone().convertLinearToSRGB().getHexString()}`;
            world.ground.visible = false;
            this.shadowCatcher.visible = true;
            const ctl = world.controls;
            ctl.minAzimuthAngle = -0.45; ctl.maxAzimuthAngle = 0.45;
            ctl.minPolarAngle = 1.25; ctl.maxPolarAngle = 1.62;
            ctl.maxDistance = 70;
        } else {
            world.sky.mesh.visible = true;
            world.sky.setColors(top.clone().multiplyScalar(0.85), top, top);
            world.ground.visible = true;
            world.ground.material.color.copy(bottom);
            if (def.groundTint) world.ground.material.color.lerp(new Color(def.groundTint), 0.3);
            this.shadowCatcher.visible = false;
            const ctl = world.controls;
            ctl.minAzimuthAngle = -Infinity; ctl.maxAzimuthAngle = Infinity;
            ctl.minPolarAngle = 0.2; ctl.maxPolarAngle = Math.PI * 0.52;
            ctl.maxDistance = 160;
        }
    }
}
