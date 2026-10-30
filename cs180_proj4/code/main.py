"""Project 4A pipeline.

    python code/main.py                 # every stage
    python code/main.py rectify         # A.3 rectification (nearest vs bilinear)
    python code/main.py mosaics         # A.4 planar mosaics (all sets)
    python code/main.py wide            # A.5 cylindrical / spherical mosaic (main sweep)
    python code/main.py pano            # A.5 more panoramas (theatre7, oldA, oldB)
    python code/main.py figures         # web copies and comparison figures for the page

Figures go to media/, measured numbers to tests/run/*.json.
"""
import runpy, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
STAGES = {'rectify': ['stage_rectify.py'],
          'mosaics': ['stage_mosaics.py', 'theatre', 'rooftop', 'lawn', 'street', 'goldengate',
                      'gg_pan', 'tower', 'glass', 'cars', 'yellow', 'theatreB'],
          'pano': ['stage_pano.py', 'theatre7', 'oldA', 'oldB'],
          'wide': ['stage_wide.py'],
          'figures': ['stage_figures.py']}
for name in (sys.argv[1:] or list(STAGES)):
    script, *args = STAGES[name]
    print(f'== {name}')
    sys.argv = [script] + args
    runpy.run_path(str(HERE / script), run_name='__main__')
