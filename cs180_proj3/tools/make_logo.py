"""CS180 emblem in Berkeley Blue and California Gold: bold condensed geometric letters whose heights follow the circle, inside a double ring.
Drawn at 4x on an ink mask and downsampled, so edges are clean."""
import math
from PIL import Image, ImageDraw

S, K = 1024, 4
N = S * K
c = N / 2
BLUE, GOLD, PAPER = (0, 50, 98), (253, 181, 21), (255, 255, 255)   # Berkeley Blue #003262, California Gold #FDB515
R_OUT = 0.465 * N                 # outer edge of the thick ring
RING = 0.034 * N                  # thick ring width
GAP = 0.016 * N                   # gap between the rings
THIN = 0.007 * N                  # thin inner ring width
R_IN = R_OUT - RING - GAP - THIN  # inner edge of the thin ring
T = 0.034 * N                     # letter stroke
PAD = 0.030 * N                   # clearance between letters and the inner ring


def stadium(d, box, t):
    x0, y0, x1, y1 = box
    d.rounded_rectangle(box, radius=(x1 - x0) / 2, outline=255, width=int(t))


def glyph(d, ch, x0, y0, x1, y1, t):
    w, h = x1 - x0, y1 - y0
    if ch == '0':
        stadium(d, (x0, y0, x1, y1), t)
    elif ch == 'C':
        stadium(d, (x0, y0, x1, y1), t)
        d.rectangle((x1 - t - 2, y0 + 0.30 * h, x1 + 2, y1 - 0.30 * h), fill=0)
    elif ch == '8':
        ym = y0 + 0.47 * h
        stadium(d, (x0 + 0.06 * w, y0, x1 - 0.06 * w, ym + t / 2), t)
        stadium(d, (x0, ym - t / 2, x1, y1), t)
    elif ch == 'S':
        ym = y0 + 0.5 * h
        top = Image.new('L', d.im.size, 0); dt = ImageDraw.Draw(top)
        stadium(dt, (x0, y0, x1, ym + t / 2), t)
        dt.rectangle(((x0 + x1) / 2 + 3, y0 + 0.27 * h, x1 + 2, ym + t / 2 + 2), fill=0)  # drop right side + lower-right bend
        bot = Image.new('L', d.im.size, 0); db = ImageDraw.Draw(bot)
        stadium(db, (x0, ym - t / 2, x1, y1), t)
        db.rectangle((x0 - 2, ym - t / 2 - 2, (x0 + x1) / 2 - 3, y1 - 0.27 * h), fill=0)  # drop left side + upper-left bend
        d.bitmap((0, 0), top, fill=255)
        d.bitmap((0, 0), bot, fill=255)
    elif ch == '1':
        xb = x1 - t
        d.rectangle((xb, y0, x1, y1), fill=255)
        d.polygon([(xb + 1, y0), (xb + 1, y0 + 1.3 * t), (x0 + 0.1 * w, y0 + 0.14 * h + 1.3 * t), (x0 + 0.1 * w, y0 + 0.14 * h)], fill=255)


ink = Image.new('L', (N, N), 0)
d = ImageDraw.Draw(ink)
letters, widths, gap = 'CS180', [1.0, 1.0, 0.6, 1.0, 1.0], 0.26
span = 2 * 0.86 * R_IN
unit = span / (sum(widths) + gap * (len(widths) - 1))
x = c - span / 2
for ch, wu in zip(letters, widths):
    x0, x1 = x, x + wu * unit
    edge = max(abs(x0 - c), abs(x1 - c))
    half = math.sqrt(max((R_IN - PAD) ** 2 - edge ** 2, 0)) - PAD * 0.4
    glyph(d, ch, x0, c - half, x1, c + half, T)
    x = x1 + gap * unit

img = Image.new('RGB', (N, N), PAPER)
dr = ImageDraw.Draw(img)
dr.ellipse((c - R_OUT, c - R_OUT, c + R_OUT, c + R_OUT), fill=BLUE)            # blue disc
r2 = R_OUT - RING - GAP
dr.ellipse((c - r2, c - r2, c + r2, c + r2), outline=GOLD, width=int(THIN))     # thin gold inner ring
img.paste(GOLD, (0, 0), ink)                                                    # gold letters
img = img.resize((S, S), Image.Resampling.LANCZOS)
img.save('cs180_logo_1024.png')
img.resize((512, 512), Image.Resampling.LANCZOS).save('inputs/logo_cs180.png')
print('ok')
