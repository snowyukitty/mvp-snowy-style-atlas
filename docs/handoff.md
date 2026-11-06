# Handoff

## Documentation checkpoint, 2026-11-06

- Objective: preserve reusable interface-design lessons in the atlas without
  prescribing one layout for every website type.
- Scope: `docs/readable-interface-lessons.md`, `README.md`, and this handoff.
  The new guide records qualitative iteration lessons, decision tradeoffs,
  verification guidance and a self-contained project prompt. The README links
  it and corrects the existing pattern count to 13.
- Evidence boundary: the source feedback is qualitative, not a usability study.
  Examples are generalized; no source-project infrastructure or private data is
  included. Application code, dependencies and deployment are unchanged.
- Verification: all four local Markdown links resolve across the three changed
  documents; code fences are balanced; `git diff --check` passes. A targeted
  privacy scan and manual content review found no private source-project data
  in the new guide. Build and browser checks were not run for this
  documentation-only change; the October checks below remain historical.
- Next: use the guide alongside a visual pattern when reviewing a real project;
  gather that project's own before/after and task evidence. The October demo
  improvements below remain open. The guide is repository documentation, not
  a new page in the running atlas UI.
- Coordination: project lease held during editing; release at checkpoint.

## Application checkpoint, 2026-10-15

Checkpoint after the October 2026 research and demo session, updated 2026-10-15.

## What exists

- App: Next.js 16 atlas (`src/`), 13 patterns in `src/data/websiteStyles.ts`.
  `wsa-013` "Quiet Ritual Diary" (new `diary-index` preview kind) promotes the seal-index
  technique and the taste model into the atlas. `npm run lint` and `npm run build` pass on
  this tree, and the production build was rendered: 13 cards, the new card and its sources
  tab display correctly.
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

1. Iterate the two demos on the taste model: typography rhythm and one signature
   motion each. Known gap: in `scroll-draw-path` the pin follows page progress, not the
   chapter in view, so it can sit on waypoint 三 while chapter 四 is on screen. Fixing that
   needs per-chapter timelines or a small script, which is a design decision. Check them
   in Safari and Firefox (not run).
2. Add a second atlas entry for the scroll-drawn path once it is tuned (done for the seal
   index: `wsa-013`).
3. Decide the dev port. `npm run dev` and `npm run start` use 9913, which this Windows
   machine currently excludes (`netsh int ipv4 show excludedportrange protocol=tcp` lists
   9911-10010), so they fail with `listen EACCES`; `launch-website-style-atlas.ps1` would
   then wait out its 25 s retry loop and open a dead URL. The excluded ranges move, so
   this may not persist after a reboot. Changing a registered port is the owner's call, so
   nothing was changed.
4. Trial the film-pipeline-to-web bridge from `docs/research-effects-2026-10.md`
   (looping AV1 hero with a poster, then a frame-match test). Nothing from the
   pipeline has been exported to a page yet.

## Verification status

- Run: `npm run lint`, `npm run build`, and the built app rendered in Chromium.
- Run (Chromium only, 2026-10-15): both demos at 390px (no horizontal overflow; seal index
  is one column), and under emulated `prefers-reduced-motion: reduce` (scroll-draw-path
  shows the finished route with the pin at the end at both 0% and 50% scroll; seal-index
  list items have a 0s transition).
- Not run: Safari or Firefox, Lighthouse, a screen reader, or a keyboard-only pass.
- Browser support claims in the effects guide were arbitrated against MDN
  `browser-compat-data` 8.1.5 (2026-10-08). Re-check before relying on them after
  a few months.
