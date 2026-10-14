# Website Style Atlas

A Next.js atlas of website MVP patterns distilled from high-craft product sites,
curated design galleries, and source-readable GitHub templates.

The project is intended as a practical starting point for future website builds:
each entry includes reference links, visual tokens, section recipes,
implementation notes, and a starter prompt.

## Current Scope

- 12 researched website patterns across SaaS, fintech, developer platforms,
  marketplaces, product launches, galleries, and open-source templates.
- Filterable atlas UI with category, tone, complexity, sorting, grid/compact views,
  live CSS previews, and detail studies.
- Research notes in `docs/research.md`, plus the October 2026 follow-up:
  expressive Japanese and international site teardowns
  (`docs/research-expressive-sites-2026-10.md`) and an advanced web effects
  guide with a verified browser support table
  (`docs/research-effects-2026-10.md`). The `*-agy.md` and `*-grok.md` files are
  the raw delegate reports, kept as evidence and marked untrusted.
- Two static effect demos in `public/demos/` (`seal-index`, `scroll-draw-path`),
  served as plain files with no build step. See `public/demos/README.md`.
- Where to pick up next: `docs/handoff.md`.

## Development

```bash
npm run dev
```

The configured local URL is:

```text
http://localhost:9913
```

## Verification

```bash
npm run lint
npm run build
```

## Adding A Pattern

Add a new object to `src/data/websiteStyles.ts` with:

- reference sites and GitHub/template sources
- fit, tone, complexity, tags, and score
- visual tokens
- MVP sections, techniques, build notes, and starter prompt

Keep entries practical: the goal is not to clone a site, but to capture the
design and implementation decisions that make a strong MVP easier to build.
