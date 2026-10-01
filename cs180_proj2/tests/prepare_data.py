"""Copy the original photos into data/mine/ under the names config.json expects,
capped at 2048 px on the long side (JPEG q95) so quality stays close to the originals. EXIF rotation
is applied so phone photos come out upright.

    python tests/prepare_data.py /path/to/originals [/more/folders ...]
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
MAX_SIDE = 2048
CROP = {  # (left, top, right, bottom) as fractions, applied before resizing
    'skull_chimp.jpg': (0.0, 0.0, 1.0, 0.88),                          # drop the watermark
}

MAPPING = {
    # part 1.1
    'selfie.jpg': 'img.jpg',
    # part 2.1
    'mind_cage.jpg': 'Chat_en_cage.png',                               # Gottfried Mind scans
    'mind_cats.jpg': '717097an.jpg',
    'mind_room.jpg': '951093il.jpg',
    'sharp.jpg': 'PXL_20260707_000326740.RAW-01.MP.jpg',               # dog, phone photo
    # part 2.2 hybrids
    'dafoe_calm.jpg': 'wd_1.webp',
    'dafoe_manic.jpg': '2hPOUkJFSaGY7YDgaewQ_WILL.jpg',
    'skull_human.jpg': 'IMG_0303_35c7c58d-b8ad-488e-b7af-68c71a9c5832.webp',
    'chimp.jpg': 'istockphoto-965307792-612x612.jpg',
    'skull_chimp.jpg': 'product-454-main-original-1458854267.jpg',
    'bear.jpg': 'Kertina+_+Bear+Portrait+_.webp',
    'skull_bear.jpg': 'H0759-L310335597.JPG',
    # part 2.4 blends
    'manhattan.jpg': '6474362297ff97.48218417.jpeg',
    'earth_clouds.jpg': 'G7CHocPDfEqzHbxVZiVNjA.jpg',
    'rocket.jpg': 'Header-SF-ArtemisII2-NASA.jpg',
    'milky_way.jpg': 'ZAm4S65o8irbqeTouppYmj.jpg',
    'puddle.jpg': 'PXL_20260516_144140125.RAW-01.jpg',                # also a sharpening test
    'doctor.jpg': 'MV5BNjU2ODA1MTAzNF5BMl5BanBnXkFtZTcwNDM2MzMyNw____V1_.jpg',   # Dark City stills
    'train.jpg': 'MV5BYTI0MzA4NWMtNDFiMS00ZTRlLWFjZjYtNDlkMzkwNzk0MmRmXkEyXkFqcGc___V1_FMjpg_UX1920_.jpg',
    'earthrise.jpg': 'art002e009289large.jpg',
    'star_trails.jpg': 'ART002-E-29783.jfif',
    'dafoe_snl.jpg': '220130022901-snl-willem-dafoe-monologue-2.jpg',
    'newsom.jpg': '679927814_1572249684258891_8311573449778932156_n.jpg',
    'binladen.jpg': 'Osama_bin_Laden_full_portrait_(cropped).jpg',
}


def main(*srcs):
    out = ROOT / 'data' / 'mine'
    out.mkdir(parents=True, exist_ok=True)
    for dst, name in MAPPING.items():
        hits = [h for src in srcs for h in Path(src).rglob(name)]
        if not hits:
            print(f'missing {name}')
            continue
        im = ImageOps.exif_transpose(Image.open(hits[0])).convert('RGB')
        if dst in CROP:
            l, t, r, b = CROP[dst]
            w, h = im.size
            im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
        im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
        im.save(out / dst, quality=95)
        print(f'{dst:18s} <- {name}  {im.size}  {(out / dst).stat().st_size // 1024} KB')


if __name__ == '__main__':
    main(*(sys.argv[1:] or ['.']))
