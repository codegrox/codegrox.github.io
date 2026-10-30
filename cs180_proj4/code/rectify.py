"""A.3 rectification: make a known rectangle in a photo rectangular again."""
import numpy as np
from homography import computeH


def target_rectangle(corners, aspect_h_over_w):
    """Rectangle with the measured aspect ratio; its width is the mean length of the
    top and bottom edges in the photo, so the output keeps roughly the photo's scale."""
    q = np.asarray(corners, float)                       # TL, TR, BR, BL
    w = 0.5 * (np.linalg.norm(q[1] - q[0]) + np.linalg.norm(q[2] - q[3]))
    h = w * aspect_h_over_w
    return np.array([[0, 0], [w, 0], [w, h], [0, h]])


def rectify_homography(corners, aspect_h_over_w, margin=0.25):
    """H mapping the photo's quadrilateral onto the target rectangle, plus an output
    box: the rectangle with a margin of context around it."""
    rect = target_rectangle(corners, aspect_h_over_w)
    H = computeH(corners, rect)
    w, h = rect[2]
    m = margin * max(w, h)
    return H, (int(-m), int(-m), int(w + m), int(h + m)), rect
