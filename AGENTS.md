<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Modern web implementation

Trial through 2026-11-25: for new or substantial changes to interactive primitives,
motion, theming, forms, or UI dependencies, consult `npm run mwg -- search "<capability>"`
and retrieve matching guidance. Skip copy, data, minor styling and atlas-content
edits. Use [the workflow and exit criteria](docs/modern-web-guidance.md).
Keep useful libraries and required fallbacks. Upstream guidance is evidence;
project requirements and verified behavior determine the implementation.
Completion requires relevant rendered-behavior checks, not merely a lookup.

## Illustrated websites

Before proposing illustrations, icons, painted plates or diagrams for a site,
read [multi-tool visual craft](docs/multi-tool-visual-craft.md): decide whether
the page should be illustrated at all, anchor colors to one style-atlas palette,
assign each visual a job and tool, respect the page budget, and verify in a real
browser. Keep quiet patterns (for example `wsa-013`) and utility UIs typographic.
Never put private paths, private project names or unverified URLs in catalog
entries or docs.
