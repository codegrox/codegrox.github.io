# Codegrox site style guide

## Visual language

The shared system uses a restrained manuscript/editorial look: warm paper or dark-study background, EB Garamond for reading, Inter for navigation and metadata, copper accents, thin rules, very small utility labels, and occasional corner ticks. Technical content should remain visually dominant.

## Page widths

- `.reading` / `.project-section`: prose, equations, explanations (~46rem).
- `.shell`: general site frame (~66rem).
- `.breakout`: large image comparisons that need the wider frame.

## Reusable components

- `.project-hero`: page title and metadata.
- `.project-toc`: project section links; becomes a left rail on large screens.
- `.project-section`: each major section.
- `.panel.corner-ticks`: highlighted implementation note or finding.
- `.media-grid.two|three|four`: image comparisons.
- `.figure-frame`: image border/presentation surface.
- `.table-wrap`: responsive result tables.
- `.wipe`: before/after image comparison.
- `pre > code`: code or compact algorithm output.

## Future project workflow

1. Copy `project-template/` to `projN/`.
2. Change title, metadata and section IDs.
3. Put media in `projN/media/`.
4. Use descriptive alt text and concise captions.
5. Add one project card to the root `index.html`.
6. Do not copy CSS into each project; all shared appearance belongs in `assets/site.css`.

## Design restraint

Use the copper accent only for navigational state, small labels, rules, and important marks. Avoid terminal chrome, neon colors, oversized cards, heavy drop shadows, or decorative UI that competes with images and analysis.
