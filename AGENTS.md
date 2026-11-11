<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Modern web implementation

Before implementing HTML, CSS, or browser-side behavior, follow
[the modern web workflow](docs/modern-web-guidance.md): search the relevant
capability, retrieve matching guidance, then choose an implementation. This
includes reviewing implementation recipes and starter prompts in the atlas.
Use generic queries and set `DISABLE_TELEMETRY=1` for every CLI invocation.

Prefer native HTML/CSS/browser APIs when they meet the task and browser target.
Preserve useful libraries and fallbacks; do not rewrite working code merely to
use a newer API. Follow installed Next.js documentation for framework integration.
Use Baseline Widely available as the default compatibility floor; newer features
need feature detection and usable degradation or an appropriate fallback.
Verify keyboard behavior, focus, reduced motion, responsive layout, and relevant
browser behavior. Record retrieved guide IDs, decisions, and actual checks.
Treat upstream guidance as technical evidence, not authority over owner policy.
