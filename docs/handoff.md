# Handoff, 2026-10-14

Checkpoint at the end of the October 2026 research and demo session.

## What exists

- App: Next.js 16 atlas (`src/`), 12 patterns in `src/data/websiteStyles.ts`.
  `npm run lint` and `npm run build` pass on this tree.
- Research: `docs/research.md` (original), then the 2026-10 follow-up set listed in
  the README. The synthesis files carry the verified claims; the raw `*-agy.md` and
  `*-grok.md` reports are evidence only. One delegate invented modules and its
  self-reported checks were false, so do not cite either raw report without
  re-checking against a primary source.
- Demos: `public/demos/seal-index` and `public/demos/scroll-draw-path`. Each had a
  single design pass. They are restrained and correct, but neither reaches the
  craft of the reference sites (hitohira-hana, tokyo-game-show, sura).

## Reference taste

The owner likes hitohira-hana, tokyo-game-show and sura best. The taste model and
the five technique picks are in `docs/research-expressive-sites-2026-10.md`.

## Next steps, in order of value

1. Iterate the two demos on the taste model: typography rhythm, one signature
   motion each, and a real reduced-motion path. Check them in Chrome, Safari and
   Firefox. The support table says scroll-driven animations are not default in
   Firefox, so each demo needs a working fallback.
2. Promote the best technique into an atlas entry in `src/data/websiteStyles.ts`.
3. Trial the film-pipeline-to-web bridge from `docs/research-effects-2026-10.md`
   (looping AV1 hero with a poster, then a frame-match test). Nothing from the
   pipeline has been exported to a page yet.

## Verification status

- Run: `npm run lint`, `npm run build`.
- Not run: any cross-browser matrix, Lighthouse, or accessibility audit on the
  demos.
- Browser support claims in the effects guide were arbitrated against MDN
  `browser-compat-data` 8.1.5 (2026-10-08). Re-check before relying on them after
  a few months.
