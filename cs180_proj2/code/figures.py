"""Figures for the webpage. Plots use a transparent background and a mid-tone ink
so they read on both the dark and light site themes (and in the printed PDF)."""
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

from imutils import as_rgb, resize, save

INK = '#8f8779'
COPPER = '#c0805c'
TEAL = '#5f9690'
SLATE = '#7d8fb3'


def _style(ax):
    for s in ax.spines.values():
        s.set_color(INK)
        s.set_linewidth(.8)
    ax.spines[['top', 'right']].set_visible(False)
    ax.tick_params(colors=INK, labelsize=8)
    ax.xaxis.label.set_color(INK)
    ax.yaxis.label.set_color(INK)
    ax.title.set_color(INK)
    ax.grid(color=INK, alpha=.18, linewidth=.6)


def _save(fig, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(path, transparent=True, dpi=200, bbox_inches='tight')
    plt.close(fig)


def filter_response(path, sigma_low, sigma_high, n_pixels, gain):
    """Paper Fig. 5 style: low-pass gain of G1 and high-pass gain of 1 - G2."""
    from filters import cutoff_cpi
    f_low, f_high = cutoff_cpi(sigma_low, n_pixels), cutoff_cpi(sigma_high, n_pixels)
    f = np.linspace(0, max(3 * f_high, 2 * f_low), 600)
    fig, ax = plt.subplots(figsize=(6.4, 2.8))
    ax.plot(f, gain(f, sigma_low, n_pixels), color=COPPER, lw=2, label=f'low-pass  G1  (σ = {sigma_low:g} px)')
    ax.plot(f, 1 - gain(f, sigma_high, n_pixels), color=TEAL, lw=2, label=f'high-pass  1 − G2  (σ = {sigma_high:g} px)')
    ax.axhline(.5, color=INK, lw=.8, ls=':')
    for fc, c in ((f_low, COPPER), (f_high, TEAL)):
        ax.axvline(fc, color=c, lw=.9, ls='--')
        ax.annotate(f'{fc:.1f}', (fc, 1.02), color=c, fontsize=8, ha='center', annotation_clip=False)
    if f_high > f_low:
        ax.annotate('', xy=(f_high, .5), xytext=(f_low, .5),
                    arrowprops=dict(arrowstyle='<->', color=INK, lw=.8))
    ax.set_xlabel('spatial frequency (cycles / image)')
    ax.set_ylabel('gain')
    ax.set_ylim(0, 1.08)
    ax.set_xlim(0, f[-1])
    leg = ax.legend(frameon=False, fontsize=8, loc='lower right')
    for t in leg.get_texts():
        t.set_color(INK)
    _style(ax)
    _save(fig, path)
    return f_low, f_high


def line_plot(path, x, ys, labels, xlabel, ylabel, marks=None):
    fig, ax = plt.subplots(figsize=(6.4, 2.8))
    for y, lab, c in zip(ys, labels, (COPPER, TEAL, SLATE)):
        ax.plot(x, y, 'o-', color=c, lw=1.6, ms=4, label=lab)
    for m in marks or []:
        ax.axhline(m['y'], color=INK, lw=.8, ls=':')
        ax.annotate(m['label'], (x[-1], m['y']), color=INK, fontsize=8, ha='right', va='bottom')
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    leg = ax.legend(frameon=False, fontsize=8)
    for t in leg.get_texts():
        t.set_color(INK)
    _style(ax)
    _save(fig, path)


def distance_strip(im, path, scales=(1, .5, .25, .125), gap=10):
    """The same image at shrinking sizes, bottom-aligned: a stand-in for stepping back."""
    im = as_rgb(im)
    h, w = im.shape[:2]
    tiles = [resize(im, (max(1, int(h * s)), max(1, int(w * s)))) for s in scales]
    W = sum(t.shape[1] for t in tiles) + gap * (len(tiles) - 1)
    canvas = np.zeros((h, W, 4))
    x = 0
    for t in tiles:
        th, tw = t.shape[:2]
        canvas[h - th:, x:x + tw, :3] = t
        canvas[h - th:, x:x + tw, 3] = 1
        x += tw + gap
    save(canvas, path)
