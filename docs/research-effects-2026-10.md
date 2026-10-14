# Advanced web effects and the film pipeline bridge, October 2026 (cross-validated)

Research date: 2026-10-14. Advisory material; nothing here has been built or measured on a real page.

## How this was produced, and how far to trust it

The same sealed task went to both members of the fast-tier pair, as two isolated first passes:
`grok:default` (`grok-4.7`) and `agy:default` (`gemini-3.8-flash-high`). Raw reports:
[Antigravity](research-effects-2026-10-agy.md), [Grok](research-effects-2026-10-grok.md).

- **Both results are recall, not live research.** Each ran a single provider turn with no tool activity. Grok's checks claim
  it fetched about eighteen pages, which its own run record contradicts. A later Antigravity run, before its route allowed hosted fetch, was refused it
  outright (`permission_denied`), so this effects run (made before that rule existed) cannot have opened pages. Treat every "verified", "fetched" and
  "Baseline Newly available <date>" in the raw reports as an unverified claim.
- **The arbiter is a primary source.** Browser support below comes from MDN `browser-compat-data` 8.1.5 (published
  2026-10-08), not from either report. Where the two reports disagree with it, the table follows the data.
- **Self-checks were false on both sides.** Each report says it is under 4,000 words; each is about 5,100 to 5,200 words
  (counting code). Do not read any delegate's pass/fail as evidence.
- **Local checks run on this machine** (2026-10-14): the AV1 `.webm`, H.264 `.mp4`, WebP, and ImageMagick AVIF commands
  below executed successfully on a synthetic test clip. File sizes from that clip are not budgets.

## 1. Verified platform table

Versions are the first release supporting the feature without a flag. "Nightly" is a preview build only.

| Feature | Chrome | Safari | Firefox | Use it? |
| --- | --- | --- | --- | --- |
| Scroll-driven animations (`animation-timeline`) | 115 | 26 | Nightly only | Yes, as enhancement behind `@supports`; never hide content behind a scroll keyframe |
| Cross-document view transitions (`@view-transition`) | 126 | 18.2 | **not shipped** | Yes; instant navigation is the fallback |
| Same-document `startViewTransition` | 111 | 18 | 144 | Yes |
| `view-transition-name: match-element` | 137 | 18.4 | 144 | Yes |
| Nested groups (`view-transition-group`) | 140, experimental | no | no | No, until a second engine ships |
| `view-transition-scope` | 147, experimental | no | no | No |
| `@property` | 85 | 16.4 | 128 | Yes |
| CSS anchor positioning | 125 | 26 | 147 | Yes, with a static fallback position |
| Popover | 114 | 17 | 125 | Yes |
| Invoker commands (`command`, `commandfor`) | 135 | 26.2 | 144 | Yes, with a real link for no-JS |
| `@starting-style` | 117 | 17.5 | 129 | Yes |
| `sibling-index()`, `sibling-count()` | 138 | 26.2 | 154 | Not yet; a Firefox 154 requirement is too new. Keep `:nth-child` stagger |
| **`if()`** | 137, experimental | no | no | **No.** Chrome-only |
| `@function` | 139, experimental | preview | no | No |
| CSS mixins | not in compat data | | | No; spec only |
| `corner-shape` | 139, experimental | preview | preview | Chrome enhancement only; keep `border-radius` |
| `text-wrap: balance` (shorthand) | 114 | 17.4 | 121 | Yes, on headings |
| `text-wrap-style: pretty` | 130 | 26 | no | Yes as enhancement |
| `font-variant-east-asian` | 63 | 9.1 | 34 | Yes. `palt` is an OpenType feature; it works only if the font has it |
| WebGPU | 144 (113 partial on Windows, macOS, ChromeOS) | 26 | 141 partial, Windows only | No. Ship WebGL2 |
| OffscreenCanvas | 69 | 16.4 | 105 | Yes, feature-detected |
| Web Animations (`Animation`) | 75 | 13.1 | 48 | Yes |
| AudioWorklet | 66 | 14.1 | 76 | Yes, after a user gesture |
| CSS Paint API (`CSS.paintWorklet`) | 65, experimental | no | no | No; bake the texture instead |
| `prefers-reduced-motion` | 74 | 10.1 | 63 | Yes, always |
| `prefers-reduced-data` | flag only | no | no | Do not rely on it |
| `navigator.connection.saveData` | 65 | no | no | Chrome-only hint at best |

Where each report was wrong against this data, so that neither is reused from memory:

- **Antigravity (about four cells):** said Safari 26 ships nested view-transition groups (no); said Firefox has
  cross-document transitions behind a flag (not shipped); put `text-wrap: pretty` in Safari 17.5 (26); put WebGPU in
  Firefox 145 (141, partial, Windows only).
- **Grok (about ten cells):** said `if()` is Baseline and ships in Safari 26.2 and Firefox 147 (Chrome-only and experimental);
  said Firefox 144 ships cross-document transitions (144 is same-document); mislabelled `match-element` as Chrome 148;
  gave `sibling-index()` as Chrome 137 and Firefox 147 (138 and 154); invoker commands in Firefox 135 (144);
  `@function` in Safari 26 (preview); `text-wrap: pretty` in Chrome 117 and Firefox 145 (130, none); WebGPU in Firefox 147;
  the Animation interface in Chrome 84 and Firefox 75 (75 and 48); AudioWorklet in Safari 14.5 (14.1).

## 2. What the pair agreed on

Independent agreement is corroboration, not proof. These are consistent with each other and with known practice; test them
on a real page before treating them as settled.

- **One fullscreen WebGL2 canvas, not one context per card.** Mobile Safari loses contexts under memory pressure. Delete or
  hide the canvas when the effect finishes, and keep a real `<img>` poster underneath so the poster is the LCP element.
- **Bake, do not paint at runtime**, wherever the result is static: grain, paper, watercolour ground, sprite sheets.
- **Sound only after a gesture, muted by default, mute persisted, suspended when the tab is hidden.**
- **Everything degrades to the same content:** reduced motion shows the end state or frame 0, no-JS shows text, a poster
  and real links.
- **Avoid:** Houdini Paint, WebGPU as a requirement, `if()`, mixins, `@function`, and per-card WebGL.
- **The film pipeline bridge has the same shape in both:** looping hero with poster, static grain tile, kirie layers, sprite
  sheet, SVG handwriting path, audio-feature JSON driving CSS custom properties, depth-map displacement, share card.

## 3. Single-source ideas worth keeping as leads

- *Grok:* verify a ported live module against the film by rendering the same frame in Node and in the browser and comparing
  downscaled pixels within 2/255 per channel, and ship the video loop instead if it cannot match. This fits the film pipeline's
  "a frame is a pure function of its index" rule and is the strongest idea in either report.
- *Grok:* commit the share-card PNG rather than generating it per request; use PNG or JPEG because some scrapers mishandle AVIF.
- *Grok:* one seed per asset, recorded in the filename or a manifest, so regenerating the site does not reshuffle the hero.
- *Antigravity:* extending sura's slash wipe with a shared photo (`view-transition-name`) rather than adding a new mechanism.

## 4. Where the delegates were wrong about film pipeline

- Antigravity named a "vector calligraphy trace module" and a "3D depth pass". Neither exists in `film-pipeline/src`. A Blender runner
  does exist (`src/core/blender.ts`), so a depth pass is possible but new work, and the film pipeline's painted look is Canvas 2D
  (`src/core/paint`), not a shader.
- Both exported audio features as a 10 to 12 Hz grid. film pipeline keeps sub-frame audio timing and measured hit points; export
  hit times as timestamps and start playback only inside the unmute gesture.
- Grok used only capabilities that do exist (kirie, watercolour, character rig, handwriting captions, contact sheet, seeded
  frames). Prefer its bridge as the starting point.

## 5. Commands that ran on this machine

```text
ffmpeg -r 24 -i frame_%04d.png -c:v libsvtav1 -crf 40 -pix_fmt yuv420p -an hero.av1.webm      ok
ffmpeg -r 24 -i frame_%04d.png -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart -an hero.mp4   ok
ffmpeg -i frame_0001.png -c:v libwebp -q:v 70 paper.webp                                      ok
magick frame_0001.png -quality 40 hero-poster.avif                                            ok
```

- This ffmpeg has no AVIF muxer and no `libcavif`; make AVIF posters with `magick`. `cwebp` is not installed; use ffmpeg's `libwebp`.
- The SVT-AV1 build here is old (v1.0.0-rc1) and ran at preset 13, a speed-first preset. Check visual quality on a real film pipeline
  scene before adopting any CRF or byte budget.

## 6. Budgets to start from

From the Grok report, which are design targets, not measurements: total JS at most 30 KB gzip (50 KB with a WebGL scene);
initial viewport media at most 800 KB; hero texture at most 2048 squared; cap `devicePixelRatio` at 1.5; no task over 50 ms
while idle; local fonts only, at most 120 KB of woff2. Measure with DevTools and a local Lighthouse run; no hosted service.
Drop the Antigravity target of Lighthouse 100 on all four categories; it is not a useful gate.

## 7. Learning path

Use the [Grok eight-week plan](research-effects-2026-10-grok.md#5-eight-week-learning-path) as the base. Its pass and fail
criteria are observable in a browser, it flags older tutorials, and it ends with a film pipeline frame-match test. Apply the table
above while following it: Firefox has no scroll-driven animations by default, so Week 3 must show the final state there, and
skip any step that would need `if()` or `sibling-index()`.

## 8. Not done

- No demo has been built, and no browser matrix was run. Every support row is data, not a test.
- Antigravity could not be re-run with live fetch, so the table was arbitrated from compat data, not a second search.
- Nothing from film pipeline has been exported to a web page yet.

