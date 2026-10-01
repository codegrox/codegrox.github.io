"""Part 1.1: 2D convolution from scratch (numpy only).

All three versions compute the same thing:

    out[i, j] = sum_u sum_v  k[u, v] * f[i - u, j - v]

i.e. a true convolution (the kernel is flipped), with zero fill outside the
image. `mode` follows scipy.signal.convolve2d:
    'full'  -> (H + kh - 1, W + kw - 1)
    'same'  -> (H, W), centered the same way scipy centers it
    'valid' -> (H - kh + 1, W - kw + 1), no padding needed
"""
import numpy as np


def _prepare(image, kernel, mode):
    """Zero-pad for 'full' and return where the requested output starts inside it."""
    image = np.asarray(image, dtype=np.float64)
    kernel = np.asarray(kernel, dtype=np.float64)
    H, W = image.shape
    kh, kw = kernel.shape
    padded = np.zeros((H + 2 * (kh - 1), W + 2 * (kw - 1)))
    padded[kh - 1:kh - 1 + H, kw - 1:kw - 1 + W] = image

    if mode == 'full':
        start, shape = (0, 0), (H + kh - 1, W + kw - 1)
    elif mode == 'same':
        start, shape = ((kh - 1) // 2, (kw - 1) // 2), (H, W)
    elif mode == 'valid':
        start, shape = (kh - 1, kw - 1), (H - kh + 1, W - kw + 1)
    else:
        raise ValueError(f'unknown mode {mode!r}')
    flipped = kernel[::-1, ::-1]
    return padded, flipped, start, shape


def conv2d_four_loops(image, kernel, mode='same'):
    """Reference version: loop over every output pixel and every kernel tap."""
    padded, k, (r0, c0), (oh, ow) = _prepare(image, kernel, mode)
    kh, kw = k.shape
    out = np.zeros((oh, ow))
    for i in range(oh):
        for j in range(ow):
            acc = 0.0
            for u in range(kh):
                for v in range(kw):
                    acc += k[u, v] * padded[r0 + i + u, c0 + j + v]
            out[i, j] = acc
    return out


def conv2d_two_loops(image, kernel, mode='same'):
    """Loop over output pixels; the kernel sum is one vectorized dot product."""
    padded, k, (r0, c0), (oh, ow) = _prepare(image, kernel, mode)
    kh, kw = k.shape
    out = np.zeros((oh, ow))
    for i in range(oh):
        for j in range(ow):
            patch = padded[r0 + i:r0 + i + kh, c0 + j:c0 + j + kw]
            out[i, j] = np.sum(patch * k)
    return out


def conv2d_tap_loops(image, kernel, mode='same'):
    """Also two loops, but over the kernel taps instead of the pixels: each tap
    adds one shifted, scaled copy of the whole image (kh*kw vectorized ops)."""
    padded, k, (r0, c0), (oh, ow) = _prepare(image, kernel, mode)
    kh, kw = k.shape
    out = np.zeros((oh, ow))
    for u in range(kh):
        for v in range(kw):
            out += k[u, v] * padded[r0 + u:r0 + u + oh, c0 + v:c0 + v + ow]
    return out


def box_filter(n=9):
    return np.ones((n, n)) / (n * n)


DX = np.array([[1.0, 0.0, -1.0]])
DY = DX.T
