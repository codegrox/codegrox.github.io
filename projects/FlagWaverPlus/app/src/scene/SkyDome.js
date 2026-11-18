import { BackSide, Color, Mesh, ShaderMaterial, SphereGeometry } from 'three';

const vert = /* glsl */`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`;

const frag = /* glsl */`
uniform vec3 topColor;
uniform vec3 midColor;
uniform vec3 horizonColor;
uniform vec3 center;
varying vec3 vWorld;
void main() {
    float h = normalize(vWorld - center).y;          // -1..1, 0 = horizon
    float t = clamp(h, 0.0, 1.0);
    vec3 c = t < 0.22
        ? mix(horizonColor, midColor, smoothstep(0.0, 0.22, t))
        : mix(midColor, topColor, smoothstep(0.22, 1.0, t));
    gl_FragColor = vec4(c, 1.0);
}`;

/** Big inside-out sphere with a 3-stop vertical gradient. Follows the camera on x/z. */
export default class SkyDome {
    constructor(radius = 280) {
        this.uniforms = {
            topColor: { value: new Color(0x4a90d9) },
            midColor: { value: new Color(0x8fc3f2) },
            horizonColor: { value: new Color(0xdcefff) },
            center: { value: new (Color)(0, 0, 0) } // reused as vec3
        };
        const mat = new ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vert,
            fragmentShader: frag,
            side: BackSide,
            depthWrite: false,
            fog: false
        });
        this.mesh = new Mesh(new SphereGeometry(radius, 48, 24), mat);
        this.mesh.frustumCulled = false;
        this.mesh.renderOrder = -1;
    }

    setColors(top, mid, horizon) {
        this.uniforms.topColor.value.set(top);
        this.uniforms.midColor.value.set(mid);
        this.uniforms.horizonColor.value.set(horizon);
    }

    follow(camera) {
        this.mesh.position.set(camera.position.x, 0, camera.position.z);
        const c = this.uniforms.center.value;
        c.r = camera.position.x; c.g = 0; c.b = camera.position.z;
    }
}
