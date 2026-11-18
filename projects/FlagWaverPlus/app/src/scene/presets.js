import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

// Background (CSS gradient behind a transparent canvas) + matching lights + ground color.
export const PRESETS = {
    day: {
        sky: ['#4a90d9', '#8fc3f2', '#dcefff'],
        label: 'Day',
        css: 'linear-gradient(180deg, #4a90d9 0%, #8fc3f2 16%, #dcefff 30%, #dcefff 100%)',
        stops: ['#5a9fe0', '#a6d2f7', '#dcefff'],
        fog: 0xdcefff,
        ground: 0x5e8c4a,
        lights: () => {
            const a = new AmbientLight(0xffffff, 0.55);
            const h = new HemisphereLight(0xcfe6ff, 0x7a9a5a, 0.35);
            const d = new DirectionalLight(0xfff4e0, 6.0);
            d.position.set(20, 70, 40);
            return { ambient: [a, h], sun: d };
        }
    },
    sunset: {
        sky: ['#2b2d6b', '#d9706e', '#ffd79a'],
        label: 'Sunset',
        css: 'linear-gradient(180deg, #2b2d6b 0%, #c75a6b 14%, #f6a35a 23%, #ffd79a 30%, #ffd79a 100%)',
        stops: ['#2b2d6b', '#c75a6b', '#f6a35a', '#ffd79a'],
        fog: 0xffd79a,
        ground: 0x4a4335,
        lights: () => {
            const a = new AmbientLight(0xffd0a0, 0.35);
            const h = new HemisphereLight(0xffb080, 0x3a2a3a, 0.4);
            const d = new DirectionalLight(0xffa060, 5.5);
            d.position.set(-60, 18, 30);
            return { ambient: [a, h], sun: d };
        }
    },
    overcast: {
        sky: ['#8d99a6', '#b8c2cc', '#d7dde3'],
        label: 'Overcast',
        css: 'linear-gradient(180deg, #8d99a6 0%, #b8c2cc 18%, #d7dde3 30%, #d7dde3 100%)',
        stops: ['#8d99a6', '#b8c2cc', '#d7dde3'],
        fog: 0xd7dde3,
        ground: 0x56664a,
        lights: () => {
            const a = new AmbientLight(0xffffff, 0.9);
            const h = new HemisphereLight(0xe0e6ee, 0x60705a, 0.5);
            const d = new DirectionalLight(0xf0f4ff, 2.5);
            d.position.set(10, 70, 20);
            return { ambient: [a, h], sun: d };
        }
    },
    night: {
        sky: ['#050816', '#0c1733', '#1a2a4f'],
        label: 'Night',
        css: 'linear-gradient(180deg, #050816 0%, #0c1733 16%, #1a2a4f 30%, #1a2a4f 100%)',
        stops: ['#050816', '#0c1733', '#1a2a4f'],
        fog: 0x1a2a4f,
        ground: 0x1a2416,
        lights: () => {
            const a = new AmbientLight(0x8090c0, 0.35);
            const h = new HemisphereLight(0x4a6ac0, 0x101418, 0.6);
            // moon from behind-left plus a cool floodlight from the front so flags stay readable
            const d = new DirectionalLight(0xc8d4ff, 4.0);
            d.position.set(-40, 50, 60);
            return { ambient: [a, h], sun: d };
        }
    },
    studio: {
        sky: ['#1c1c1f', '#232327', '#2a2a2f'],
        label: 'Studio',
        css: 'linear-gradient(180deg, #1c1c1f 0%, #2a2a2f 30%, #2a2a2f 100%)',
        stops: ['#1c1c1f', '#2a2a2f'],
        fog: 0x2a2a2f,
        ground: 0x2c2c30,
        lights: () => {
            const a = new AmbientLight(0xffffff, 0.5);
            const h = new HemisphereLight(0xffffff, 0x404040, 0.4);
            const d = new DirectionalLight(0xffffff, 5.0);
            d.position.set(25, 60, 50);
            return { ambient: [a, h], sun: d };
        }
    },
    green: {
        sky: ['#00b140', '#00b140', '#00b140'],
        label: 'Green screen',
        css: '#00b140',
        stops: ['#00b140', '#00b140'],
        fog: 0x00b140,
        ground: 0x00b140,
        lights: () => {
            const a = new AmbientLight(0xffffff, 0.7);
            const d = new DirectionalLight(0xffffff, 5.0);
            d.position.set(25, 60, 50);
            return { ambient: [a], sun: d };
        }
    }
};

export const PRESET_IDS = Object.keys(PRESETS);
