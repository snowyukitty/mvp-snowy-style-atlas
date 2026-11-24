# Multi-tool visual craft

Practical playbook recorded on 2026-11-24 from one warm technical/editorial site
upgrade and owner feedback. This is qualitative iteration evidence, not a
controlled usability study. The source project's name, local paths and
infrastructure are deliberately omitted so the method transfers cleanly.

## Why this exists

Text-only card walls make guides, product explanations and technical workbenches
feel cold and harder to parse. Pairing one cohesive visual system—where each
graphic has a concrete editorial job—with concise prose made the site warmer,
more scannable and easier to trust. Pictures replace paragraphs; they do not
decorate them.

## Illustrate or stay typographic?

Not every website wants illustrations. Decide from the reader's primary job
before drawing anything. Pattern `wsa-013` (*Quiet Ritual Diary*) is the
deliberate counter-example: its rule is `Images: 0`, and that restraint is a
feature.

| Signal | Lean illustrated (richly visual) | Lean typographic / quiet |
| --- | --- | --- |
| Reader's job | Understand an object, workflow, tradeoff or place; first-visit orientation | Repeat operation, scan, compare, configure, archive |
| Content | Physical things, processes, spaces, decisions, data with a story | Lists, settings, tables, ledgers, diaries where the text *is* the content |
| Surface | Landing pages, guides, explainers, launch pages, onboarding and empty states | Admin tools, dashboards, forms, auth screens, settings, index pages (`wsa-013`) |
| Tone | Warm, crafted, approachable, editorial | Ritual, austere, ultra-dense, or dark developer-led (`wsa-001`, `wsa-003`, `wsa-007`) |
| Asset upkeep | The team or agent can revise or regenerate art later | No maintenance budget → prefer clean typography and simple SVG diagrams only |

**Cut rule:** if an illustration cannot name the sentence or mental model it
replaces, cut it. Utility and admin interfaces need at most an audited brand
mark and restrained empty-state spots.

## Visual jobs → tool matrix

Combine specialized tools instead of forcing one generator to do every visual
job. Each layer stays crisp at its own job and fails gracefully when a single
lane is unavailable.

| Visual job | First choice | Why | Fallback |
| --- | --- | --- | --- |
| Taste, palette and medium direction | Owner's style atlas export (`exports/favorites.json`: `palette_hex`, `medium`, `card`) | Single taste authority with honest per-domain evidence and artist-free rules | None — stop and choose one anchor palette before designing |
| Brand mark, favicon and PWA icons | Audited SVG icon pipeline (`ai-iconflow`, 16 px proof) | Tiny sizes require audited silhouette geometry and real 16 px verification | Plain typographic wordmark; never a hand-rolled ad-hoc favicon |
| Warm characters, cozy portraits, storybook / cut-paper / riso vignettes | Raster illustration brief pipeline (`web-img` + composed favorite style brief) | Matches human-scored character and painterly vignette evidence | Editable canvas object/scene vignette (without a face), or omit the slot |
| Objects, tools, workshop scenes, editorial diagrams in gouache, watercolor or graphite | Editable Canvas2D painting (`codebrush`, local look-and-revise loop) | Revisable in code, zero cloud dependency, controllable geometry and paper margins | Clean inline SVG line drawing |
| Data, comparisons, clearances, blueprints and parametric visuals | Hand-authored data-driven SVG | Numbers must stay exact, selectable and accessible; never paint charts into pixels | Accessible HTML table |
| Live UI theater and product proof | Real components or faithful CSS mockups (`wsa-001` technique) | Shows the real interaction and state language | Annotated static screenshot with descriptive alt text |

### Tie-breakers

1. If the focal subject needs a **readable face or warm character**, start with
   the raster brief pipeline (`web-img`).
2. If the focal subject needs **exact proportions, crisp labels or iterative
   structural edits**, use editable canvas painting (`codebrush`) or inline SVG.
3. If the visual carries **numbers, coordinates or measurements**, use
   data-driven SVG—never rasterize charts or paint labels into a bitmap.
4. If the raster service is unavailable (for example quota or capacity errors),
   editable canvas painting takes over objects and scenes. Never substitute a
   generic stock image, AI gradient blob or glossy 3D render.

## Visual-layer budget per page

Richly illustrated does not mean crowded. Hold a disciplined per-page budget:

- **Plate cap:** one hero plate, plus at most **one illustration per two content
  sections**, plus data diagrams only where real numbers or spatial geometry
  require one.
- **Medium cap:** at most **two** painting/raster media per page (for example,
  cut-paper spots plus gouache object plates). Mixing three or more media breaks
  cohesion.
- **Module rule:** never place a decorative illustration and a data diagram side
  by side inside the same content module.
- **Accent discipline:** assign the accent color one primary meaning (as in
  `wsa-013`)—either primary actions or highlighted data, not competing
  decorations everywhere.
- **Open paper:** float plates on open paper margins with a quiet caption rather
  than full-bleed edge-to-edge walls, preserving matte hand-made texture.
- **Mobile:** stack plates above their text, preserve readable diagram labels,
  and shrink decorative plates cleanly without cropping the focal subject.
- **Motion:** at most one signature motion per page, gated so the finished state
  is the default and animations are removed under `prefers-reduced-motion`.

## One anchor palette

Every visual layer on a site—CSS surfaces, illustrations, brand mark and SVG
diagrams—should derive from **one** anchor style:

1. Pick one favorite style from the style atlas export and record its
   `style_id`, `meta.content_sha256` and source commit.
2. Derive site UI tokens from its 4-hex `palette_hex` (`[base, secondary,
   contrast, accent]`):
   - `background`: start from `base` (may be slightly lightened toward paper).
   - `ink`: start from `contrast`, darkened until body text reaches at least
     **7:1** contrast on `background`.
   - `secondary`: darkened until labels and secondary UI text reach at least
     **4.5:1** on `background`.
   - `accent`: keep the anchor accent hue family, lowering lightness until UI
     text and links reach **4.5:1** on `background` (**3:1** is acceptable only
     for large headings or non-text strokes/marks).
3. Feed each visual tool from the same anchor:
   - **Raster briefs (`web-img`):** compose directly from the anchor style.
   - **Canvas paintings (`codebrush`):** use the four raw `palette_hex` tones
     plus the anchor card's `material`, `light` and `composition` notes (painted
     fills do not need UI text contrast).
   - **Icons (`ai-iconflow`):** use `ink` and the derived `accent` so the 16 px
     mark belongs to the page.
   - **SVG diagrams:** use `ink`, `secondary` and `accent`, assigning one color
     per data meaning.
4. **Worked contrast example:** anchor `#080` has `palette_hex`
   `[#F1DDBD, #A49877, #3F4D46, #B68245]`. The raw ochre accent `#B68245` on
   `#F1DDBD` measures **2.52:1**—too low for body text or links. Darkening the
   same hue to `#7D5024` raises contrast to **5.19:1** for UI text while painted
   plates keep the warmer raw `#B68245`.
5. **Hue-drift rule:** stay inside the anchor hue family. Only introduce an
   outside hue when a distinct semantic status (warning/error/success) requires
   it.

## Fallback ladder

When an asset lane is blocked or misses the taste bar after two revisions, step
down deliberately rather than shipping filler:

```text
raster plate (web-img)
  → editable canvas vignette (codebrush, object/scene without face)
    → inline SVG line art
      → balanced no-image layout (aspect-ratio / paper-tone rhythm preserved)
```

Record which rung shipped. Never fall back to generic CSS gradient blobs, stock
photos or glossy 3D placeholders.

## Verification loop

Visual work is not finished when files are written; verify rendered output:

- **Illustrations:** inspect every plate at both full delivery width and small
  thumbnail size against the anchor style card's `acceptance` criteria and
  `failure_modes`.
- **Icons:** inspect the real 16 px favicon and silhouette proof in a browser
  tab, not only a large vector preview.
- **Diagrams:** verify that plotted coordinates come from a real data array in
  source, that each informative SVG has an accessible name (`role="img"` with
  `<title>`/`<desc>`) or an adjacent data table, and that labels pass contrast.
- **Rendered pages:** capture desktop (e.g. 1280 px) and narrow mobile (390 px)
  screenshots plus a `prefers-reduced-motion: reduce` pass; verify zero
  horizontal overflow, explicit `width`/`height` or `aspect-ratio` on every
  image (preventing layout shift), and accurate `alt` text (`alt=""` for purely
  decorative plates).
- **Honest reporting:** state which checks ran (local browser emulation vs real
  devices) and which were skipped. Agent visual inspection never substitutes for
  owner approval or promotes a style's maturity.
- **Optional feedback loop:** when a project's owner scores or accepts a
  style-guided visual, record the verdict in the style atlas trial ledger under
  its surface and subject-class rules.

## Reusable project prompt

Copy the block below into another website task. It is self-contained and grants
no implementation, deployment or disclosure authority on its own.

```text
Use this multi-tool visual craft method to decide whether and how this website
should be illustrated, then—where already authorized—implement it.

1. Decide first. Name the page's audience and primary task. Illustrate only
   where a visual replaces a sentence of explanation or sets essential warmth.
   Keep utility, admin, form and index views typographic; an audited brand mark
   and quiet empty-state spots are enough there.
2. Anchor taste. Pick one favorite style from the owner's style atlas export
   (palette_hex, medium, direction card) and record its id and content hash.
   Derive background, ink, secondary and accent from that single palette;
   darken UI text colors until body text reaches 4.5:1 and primary ink reaches
   7:1. Painted plates may keep the raw palette tones.
3. Match each visual job to the right tool: brand marks and favicons through
   the audited SVG icon pipeline (verified at 16px); warm characters and cozy
   vignettes through the raster illustration brief pipeline; objects, tools and
   workshop/editorial plates through editable Canvas2D painting; numbers,
   comparisons and spatial geometry through hand-authored data-driven SVG;
   product UI proof through real components. Never paint chart numbers; never
   hand-roll favicons.
4. Keep the page budget disciplined: one hero plate, at most one illustration
   per two sections, at most two painting media per page, open paper around
   every plate, one primary accent meaning, and at most one signature motion
   removed under prefers-reduced-motion.
5. Fall back cleanly. If raster generation is unavailable or misses taste after
   two revisions, step down to editable canvas painting, then inline SVG line
   art, then a balanced no-image layout. Never ship generic gradient blobs,
   glossy 3D or stock filler.
6. Verify rendered craft. Inspect every plate at delivery and thumbnail sizes
   against the anchor card's acceptance list; check icons at 16px; verify SVG
   data accuracy, accessible names and label contrast; capture desktop and
   390px mobile screenshots plus a reduced-motion pass; confirm zero overflow
   and zero layout shift.

Report which visuals shipped, which tool and fallback rung produced each, the
anchor style id and hash, and which checks actually ran. Agent inspection is
not owner acceptance. Deployment and external actions keep their existing
authorization boundaries.
```

## Using this with the atlas

Start with pattern `wsa-014` (*Illustrated Field Workbench*) for a full
multi-tool editorial layout, or combine this playbook with `wsa-005` (*Warm
Workspace Hub*), `wsa-008` (*Spatial Product Story*) or `wsa-010` (*Open Source
Launch Kit*). Pair it with
[readable, compact interfaces](readable-interface-lessons.md) for information
organization, and with the
[expressive-site studies](research-expressive-sites-2026-10.md) and
[effects guide](research-effects-2026-10.md) when planning restrained motion.
