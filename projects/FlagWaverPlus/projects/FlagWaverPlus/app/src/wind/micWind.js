/**
 * Blow into the microphone -> wind. Measures RMS loudness of the mic stream
 * and exposes a smoothed 0..1 level. No audio is recorded or sent anywhere.
 */
export default class MicWind {
    constructor() {
        this.ctx = null;
        this.analyser = null;
        this.stream = null;
        this.level = 0;        // smoothed 0..1
        this.gain = 22;        // m/s at full level
        this.active = false;
        this._buf = null;
        this._raf = 0;
    }

    async start() {
        if (this.active) return;
        this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        const src = this.ctx.createMediaStreamSource(this.stream);
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 1024;
        this.analyser.smoothingTimeConstant = 0.6;
        src.connect(this.analyser);
        this._buf = new Float32Array(this.analyser.fftSize);
        this.active = true;
        const tick = () => {
            if (!this.active) return;
            this.analyser.getFloatTimeDomainData(this._buf);
            let sum = 0;
            for (let i = 0; i < this._buf.length; i++) sum += this._buf[i] * this._buf[i];
            const rms = Math.sqrt(sum / this._buf.length);
            // Blowing on a mic is loud and broadband; map ~0.02..0.35 RMS onto 0..1
            const target = Math.min(1, Math.max(0, (rms - 0.02) / 0.33));
            // fast attack, slow release
            this.level += (target - this.level) * (target > this.level ? 0.35 : 0.06);
            this._raf = requestAnimationFrame(tick);
        };
        tick();
    }

    stop() {
        this.active = false;
        cancelAnimationFrame(this._raf);
        if (this.stream) for (const t of this.stream.getTracks()) t.stop();
        if (this.ctx) this.ctx.close();
        this.stream = this.ctx = this.analyser = null;
        this.level = 0;
    }

    /** Extra wind speed in m/s to add to the base wind. */
    get extraSpeed() {
        return this.active ? this.level * this.gain : 0;
    }
}
