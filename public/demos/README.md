# Demos

Two small, dependency-free static pages built from the 2026-10 research (`docs/research-expressive-sites-2026-10.md`
and `docs/research-effects-2026-10.md`). Plain HTML and CSS, no JavaScript, no images, no fonts fetched, no third-party
assets. All copy is fictional.

## seal-index

A numbered index: an ordered list where every row is a real link, each with an inline-SVG round seal drawn from scratch
(a shared `feTurbulence` + `feDisplacementMap` filter roughens the edge like an inked stamp).

- One accent, one meaning: vermilion marks what you can open (seals, focus ring, the opened note).
- Japanese headings first, a small Latin caption second; `palt` on Japanese headings only; `text-wrap: balance` on headings.
- Paper grain is an SVG noise tile in a CSS data URI.
- Entrance uses `@starting-style` and is removed under `prefers-reduced-motion`.
- Two columns from 48rem, one column below. Links go to notes lower on the same page.

## scroll-draw-path

One SVG path (`pathLength="1"`) that draws as you scroll, with an accent pin travelling along it (`offset-path`,
`offset-distance`), both driven by `animation-timeline: scroll(root block)`.

- Default state is the finished drawing. The animation exists only inside
  `@media (prefers-reduced-motion: no-preference)` and `@supports (animation-timeline: scroll())`, so reduced motion and
  unsupported browsers show the complete route and the pin at the end.
- Dim dotted track underneath, so the unfinished part is visible before the stroke reaches it.
- The route is a fixed 120 by 600 box, scaled by half under 40rem.

## Checked so far

Chromium only, 2026-10-15: both pages at 390px have no horizontal overflow and `seal-index` is one column;
under emulated `prefers-reduced-motion: reduce`, `scroll-draw-path` shows the finished route with the pin at the
end and `seal-index` has no transitions. Safari, Firefox, keyboard-only and screen-reader passes have not been run.

## Browser support

From MDN `browser-compat-data` 8.1.5 (2026-10-08), as recorded in `docs/research-effects-2026-10.md`.

| Feature | Chrome | Safari | Firefox |
| --- | --- | --- | --- |
| Scroll-driven animations (`animation-timeline`) | 115 | 26 | Nightly only |
| `@starting-style` | 117 | 17.5 | 129 |
| `text-wrap: balance` | 114 | 17.4 | 121 |
| `text-wrap-style: pretty` | 130 | 26 | no |

Firefox has no scroll-driven animations by default, so it shows the finished drawing. Unsupported
enhancements (`pretty`, `word-break: auto-phrase`, `@starting-style`) fall back to ordinary wrapping and an instant render.
`offset-path`, `word-break: auto-phrase` and `font-feature-settings: "palt"` were not checked against compat data.

## Preview

```powershell
cd public/demos
python -m http.server 0 --bind 127.0.0.1
```

The server prints the OS-assigned port; open `/seal-index/` and `/scroll-draw-path/` on it. Do not hard-code a port.
