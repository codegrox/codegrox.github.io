"""Parts 1.2-2.2: Gaussian/DoG filters, gradients, orientation, unsharp masking,
and frequency-domain helpers."""
import numpy as np
import cv2
from scipy.signal import convolve2d, fftconvolve

from conv import DX, DY

# Gain of a Gaussian low-pass is exp(-2 pi^2 sigma^2 f^2) for f in cycles/pixel.
# Oliva et al. define the cutoff as the frequency where the gain is 1/2:
#   f_c = sqrt(ln 2 / 2) / (pi * sigma)  ~= 0.1874 / sigma  cycles/pixel
HALF_GAIN = np.sqrt(np.log(2) / 2) / np.pi


# --------------------------------------------------------------------- kernels

def kernel_size(sigma, radius=3.0):
    """Odd kernel width covering +-radius*sigma."""
    return int(2 * np.ceil(radius * sigma) + 1)


def gaussian_1d(sigma, ksize=None):
    ksize = ksize or kernel_size(sigma)
    return cv2.getGaussianKernel(ksize, sigma)          # (ksize, 1), sums to 1


def gaussian_2d(sigma, ksize=None):
    g = gaussian_1d(sigma, ksize)
    return g @ g.T                                       # outer product


def dog_kernels(sigma, ksize=None):
    """Derivative-of-Gaussian filters: G * Dx and G * Dy (full convolution)."""
    G = gaussian_2d(sigma, ksize)
    return convolve2d(G, DX, mode='full'), convolve2d(G, DY, mode='full')


def unsharp_kernel(sigma, alpha, ksize=None):
    """Single filter for f + alpha * (f - f*G) = f * ((1 + alpha) e - alpha G)."""
    G = gaussian_2d(sigma, ksize)
    e = np.zeros_like(G)
    e[G.shape[0] // 2, G.shape[1] // 2] = 1.0
    return (1 + alpha) * e - alpha * G


# ------------------------------------------------------------------- filtering

def filter2(im, kernel, boundary='symm'):
    """convolve2d on a gray or RGB image, same size, reflected boundary by default."""
    if im.ndim == 3:
        return np.dstack([filter2(im[..., c], kernel, boundary) for c in range(im.shape[2])])
    return convolve2d(im, kernel, mode='same', boundary=boundary)


def gaussian_blur(im, sigma):
    """Separable Gaussian blur (row pass then column pass) with reflected borders.
    Identical to convolving with the 2D outer-product kernel, but O(k) per pixel."""
    if sigma <= 0:
        return im.copy()
    g = gaussian_1d(sigma)
    if im.ndim == 3:
        return np.dstack([gaussian_blur(im[..., c], sigma) for c in range(im.shape[2])])
    r = g.shape[0] // 2
    p = np.pad(im, r, mode='symmetric')
    if g.shape[0] > 31:                                  # long kernels: same math via FFT
        p = fftconvolve(p, g.T, mode='valid')
        return fftconvolve(p, g, mode='valid')
    p = convolve2d(p, g.T, mode='valid')                 # horizontal
    return convolve2d(p, g, mode='valid')                # vertical


def gradients(im, boundary='symm'):
    gx = convolve2d(im, DX, mode='same', boundary=boundary)
    gy = convolve2d(im, DY, mode='same', boundary=boundary)
    return gx, gy, np.hypot(gx, gy)


# ------------------------------------------------------------------ orientation

def atan2_poly(y, x):
    """atan2 without a built-in angle function.

    Octant reduction maps every (x, y) to a ratio z in [0, 1]; atan(z) comes from
    the Abramowitz & Stegun 4.4.49 polynomial (|error| <= 1e-5 rad). The octant is
    then undone with pi/2 - a (|y| > |x|), pi - a (x < 0), and -a (y < 0).
    """
    ax, ay = np.abs(x), np.abs(y)
    swap = ay > ax
    num = np.where(swap, ax, ay)
    den = np.where(swap, ay, ax)
    z = np.divide(num, den, out=np.zeros_like(num, dtype=np.float64), where=den > 0)
    z2 = z * z
    a = z * (0.9998660 + z2 * (-0.3302995 + z2 * (0.1801410 + z2 * (-0.0851330 + z2 * 0.0208351))))
    a = np.where(swap, np.pi / 2 - a, a)
    a = np.where(x < 0, np.pi - a, a)
    return np.where(y < 0, -a, a)


def orientation_hsv(gx, gy, mag, clip_pct=99.0, floor=0.0):
    """Hue = gradient direction, saturation = 1, value = normalized magnitude."""
    from matplotlib.colors import hsv_to_rgb
    theta = atan2_poly(gy, gx)                           # (-pi, pi]
    hue = np.mod(theta, 2 * np.pi) / (2 * np.pi)
    val = np.clip(mag / (np.percentile(mag, clip_pct) + 1e-12), 0, 1)
    val = np.where(mag > floor, val, 0.0)
    hsv = np.dstack([hue, np.ones_like(hue), val])
    return hsv_to_rgb(hsv), theta


def orientation_legend(size=241):
    """Color wheel made with the same pipeline: gradient = (x, y) from center."""
    c = (size - 1) / 2
    yy, xx = np.mgrid[0:size, 0:size] - c
    r = np.hypot(xx, yy)
    rgb, _ = orientation_hsv(xx, yy, np.ones_like(r))
    alpha = (r <= c).astype(np.float64)
    return np.dstack([rgb, alpha])


# --------------------------------------------------------------------- frequency

def cutoff_cpi(sigma, n_pixels):
    """Half-gain cutoff of a Gaussian of std sigma, in cycles/image over n_pixels."""
    return HALF_GAIN / sigma * n_pixels


def sigma_for_cutoff(cpi, n_pixels):
    return HALF_GAIN * n_pixels / cpi


def gaussian_gain(f_cpi, sigma, n_pixels):
    f = np.asarray(f_cpi) / n_pixels                      # cycles/pixel
    return np.exp(-2 * np.pi ** 2 * sigma ** 2 * f ** 2)


def log_spectrum(gray):
    """log |F| with the zero frequency at the center (as in the project spec)."""
    return np.log(np.abs(np.fft.fftshift(np.fft.fft2(gray))) + 1e-8)
