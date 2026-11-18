// Backdrop presets. Each image is fetched only when selected (0.3–0.9 MB) and the GPU texture is
// disposed when you switch away, so the page itself stays light.
//
//   kind: 'photo'  — a single photo on a big plane behind the flags; camera orbit is limited so
//                    the flat image keeps reading as a background.
//   kind: 'pano'   — a 360° strip (or full equirectangular image) wrapped around the scene; free orbit.
//   horizon        — photo: fraction of image height (from the bottom) where the ground meets the sky;
//                    pano: fraction of strip height that sits below eye level.
//   fov            — photo only: vertical degrees the image should span from the default camera.
//   light          — lighting preset from presets.js to pair with it.
//
// Images are self-hosted in ../../scenery/ (run app/tools/fetch-scenery.ps1 once to download them);
// `fallback` lists Wikimedia URLs tried in order if the local file is missing.

const WM = 'https://upload.wikimedia.org/wikipedia/commons/thumb';
const WP = 'https://commons.wikimedia.org/wiki/File:';
// Special:FilePath redirects to the right thumbnail for any filename, so it is tried first;
// the hashed upload.wikimedia.org URL is the fallback.
const FP = (file, width) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

export const SCENERIES = {
    capitol: {
        label: 'US Capitol',
        kind: 'photo',
        url: `./scenery/capitol.jpg`,
        fallback: [`${WM}/a/a3/United_States_Capitol_west_front_edit2.jpg/2048px-United_States_Capitol_west_front_edit2.jpg`, FP('United_States_Capitol_west_front_edit2.jpg', 2048)],
        page: `${WP}United_States_Capitol_west_front_edit2.jpg`,
        credit: 'Architect of the Capitol', license: 'Public domain',
        horizon: 0.42, fov: 32, light: 'day', groundTint: 0x6f8a5a
    },
    bourbon: {
        label: 'Palais Bourbon, Paris',
        kind: 'photo',
        url: `./scenery/bourbon.jpg`,
        fallback: [`${WM}/8/8d/Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg/2048px-Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`, FP('Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg', 2048)],
        page: `${WP}Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,
        credit: 'Jebulon', license: 'CC0',
        horizon: 0.38, fov: 34, light: 'day', groundTint: 0x8a8a84
    },
    unhq: {
        label: 'UN Headquarters, NYC',
        kind: 'photo',
        url: `./scenery/unhq.jpg`,
        fallback: [`${WM}/f/fe/UN_Members_Flags.JPG/1600px-UN_Members_Flags.JPG`, FP('UN_Members_Flags.JPG', 1600)],
        page: `${WP}UN_Members_Flags.JPG`,
        credit: 'Aotearoa', license: 'CC BY-SA 3.0',
        horizon: 0.30, fov: 36, light: 'overcast', groundTint: 0x7c7f82
    },
    sthelens: {
        label: 'Mount St Helens summit',
        kind: 'pano',
        url: `./scenery/sthelens.jpg`,
        fallback: [`${WM}/b/b5/Mount_St_Helens_Summit_Pano.jpg/4096px-Mount_St_Helens_Summit_Pano.jpg`, FP('Mount_St_Helens_Summit_Pano.jpg', 4096)],
        page: `${WP}Mount_St_Helens_Summit_Pano.jpg`,
        credit: 'Gregg M. Erickson', license: 'CC BY 3.0',
        horizon: 0.55, light: 'day', groundTint: 0xd9dde2
    },
    kosciuszko: {
        label: 'Mount Kosciuszko summit',
        kind: 'pano',
        url: `./scenery/kosciuszko.jpg`,
        fallback: [`${WM}/c/c2/Mount_Kosciuszko_Summit_360_panorama.jpg/4096px-Mount_Kosciuszko_Summit_360_panorama.jpg`, FP('Mount_Kosciuszko_Summit_360_panorama.jpg', 4096)],
        page: `${WP}Mount_Kosciuszko_Summit_360_panorama.jpg`,
        credit: 'Toby Hudson', license: 'CC BY-SA 3.0',
        horizon: 0.5, light: 'day', groundTint: 0x8a9a6a
    }
};

export const SCENERY_IDS = Object.keys(SCENERIES);
