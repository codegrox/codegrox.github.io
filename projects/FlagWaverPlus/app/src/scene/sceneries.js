// Backdrop presets. Each image is fetched only when selected and the GPU texture is disposed when
// you switch away, so the page itself stays light.
//
//   kind: 'photo'  — one photo spread on a plane behind the flags; orbit stays inside the picture.
//   kind: 'pano'   — a 360° strip (or full equirectangular image) wrapped around the scene; free orbit.
//   horizon        — fraction of image height (from the bottom) where the horizon is.
//   hfov           — photo only: horizontal degrees the photo spans (lens field of view).
//   light          — lighting preset from presets.js to pair with it.
//   ground         — ground texture from groundTextures.js to switch to.
//
// Images are self-hosted in ../../scenery/ (run app/tools/fetch-scenery.ps1 once to download them);
// `fallback` lists Wikimedia URLs tried in order if the local file is missing.

const WM = 'https://upload.wikimedia.org/wikipedia/commons/thumb';
const WP = 'https://commons.wikimedia.org/wiki/File:';
// Special:FilePath redirects to the right thumbnail for any filename.
const FP = (file, width) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

export const SCENERIES = {
    capitol: {
        label: 'US Capitol',
        kind: 'photo',
        url: `./scenery/capitol.jpg`,
        fallback: [`${WM}/a/a3/United_States_Capitol_west_front_edit2.jpg/2048px-United_States_Capitol_west_front_edit2.jpg`, FP('United_States_Capitol_west_front_edit2.jpg', 2048)],
        page: `${WP}United_States_Capitol_west_front_edit2.jpg`,
        credit: 'Architect of the Capitol', license: 'Public domain',
        horizon: 0.42, hfov: 70, light: 'day', ground: 'lawn'
    },
    taj: {
        label: 'Taj Mahal',
        kind: 'photo',
        url: `./scenery/taj.jpg`,
        fallback: [`${WM}/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/2048px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg`, FP('Taj_Mahal,_Agra,_India_edit3.jpg', 2048)],
        page: `${WP}Taj_Mahal,_Agra,_India_edit3.jpg`,
        credit: 'Yann (edit: Jbarta)', license: 'CC BY-SA 3.0',
        horizon: 0.38, hfov: 60, light: 'day', ground: 'pavers'
    },
    sthelens: {
        label: 'Mount St Helens summit',
        kind: 'pano',
        url: `./scenery/sthelens.jpg`,
        fallback: [`${WM}/b/b5/Mount_St_Helens_Summit_Pano.jpg/4096px-Mount_St_Helens_Summit_Pano.jpg`, FP('Mount_St_Helens_Summit_Pano.jpg', 4096)],
        page: `${WP}Mount_St_Helens_Summit_Pano.jpg`,
        credit: 'Gregg M. Erickson', license: 'CC BY 3.0',
        horizon: 0.55, light: 'day', ground: 'gravel'
    }
};

export const SCENERY_IDS = Object.keys(SCENERIES);
