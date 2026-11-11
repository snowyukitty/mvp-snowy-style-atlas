# Modern web guidance pilot: detail dialog

Date: 2026-11-11. Decision: retain a bounded project trial through 2026-11-25;
do not claim fleet activation or general skill efficacy.

## Independent challenge

An ATD fresh, sealed review of the initial Codex-authored policy returned
`REQUEST_CHANGES`. The selected reviewer was Claude Code, requested `opus` with
`medium` effort under the owner's higher-requirement policy. The result confirms
the selector and router binding, not a concrete provider model version. It was
independent of the initial artifact's OpenAI author product. This was one review,
not a multi-provider consensus. The review remains advisory and is not a later
approval of the implementation.

The normalized result and selection receipt remain in ignored local verification
storage. Result SHA-256:
`6218a01c42fef8248dfceb237372f9ce12144896952b963b626ba1c2aabd8a2a`.
The reviewer claimed upstream fetches but performed no CLI or browser tests.
The caller separately inspected the installed package, guide text and source and
ran the checks below. Raw provider output was not retained; ATD reported temporary
packet cleanup complete.

| Finding | Disposition |
| --- | --- |
| Overbroad mandatory lookup and process-based success | Scoped to meaningful capability decisions; expires without renewal; acceptance concerns rendered behavior. |
| Telemetry depends on a remembered shell variable | Wrapper forces child opt-out. A child preload assertion passed with parent telemetry explicitly enabled. |
| npm version lacks lock integrity and skill coupling | Exact devDependency plus lockfile; installed bundled revision/hash recorded; code inspection established bundled guide reads. |
| No trial stop/rollback | Dated review, stop conditions, and separate tooling/application rollback documented. |
| Modal accessibility/motion defects | Implemented native dialog, fallback dismissal, selected-state buttons, reduced motion and responsive corrections. |
| Always-loaded context duplication | Reduced AGENTS.md to the scoped trigger and workflow pointer. |
| Project activation not proven across agents | Remains unproven; do not treat this guided Codex session as a fresh activation test. |
| Fleet rollout before evidence | Deferred pending another representative task and route discovery/activation evidence. |

## Baseline and resulting behavior

Before application changes, five Chromium tests all failed. Three stopped at the
missing named dialog; two reached a failed focus-return assertion. Later assertions
in those tests did not run, so this is not evidence that every underlying behavior
failed. Baseline JSON, screenshots and traces were retained locally.

The resulting dialog has an accessible name, initial focus on Close, native modal
background inertness, Escape dismissal and focus return. Unsupported `closedby`
uses both pointer endpoints outside the dialog; a drag from inside stays open.
The native and forced-fallback paths are tested separately. Preview animations are
disabled under reduced motion; close is immediate by design. Recipe/Sources/Prompt
remain buttons and expose their current selection through `aria-pressed`.

Visual inspection caught overlapping mobile sections even when the first behavior
suite passed. The mobile panel now scrolls as a single column, while desktop keeps
two independently scrollable columns. Isolating the preview stacking context keeps
its internal layers from intercepting the Close button. Paper colors, border and
shadow treatment are preserved. Application dependencies were not indiscriminately
removed; the modal no longer imports Framer Motion.

## Verification

- `npm run lint`: pass.
- `npm run build`: pass, Next.js 16.2.6 production compilation and TypeScript.
- Playwright final run: 18/18 pass (six scenarios across Chromium 158, Firefox 159,
  and WebKit 27.2), 32.5 seconds, no retries. Covered name/focus, inert background
  focus, close/reopen, native and forced-fallback dismissal, reduced motion,
  selected state, and non-overlapping regions at 375/768/1280 widths. A separate
  mobile interaction scenario uses 390px. Tests ran against the development server.
- Viewed Chromium screenshots of the mobile initial view, mobile scrolled Prompt
  view and 1280px desktop view; no remaining overlap in those inspected states.
- Wrapper search/retrieve/version: pass. Child telemetry override assertion: pass.
  Installer command rejected with exit 2 as intended. Installed version and package
  engine verified; the wrapper is not a general network containment mechanism.
- Documentation links, code fences, targeted path/secret scan and diff checks pass;
  evidence is local, with no public deployment.

Intermediate failures were not hidden: the React attribute casing needed
`closedby`, reduced-motion previews needed a scoped rule, and screenshots exposed
mobile overlap and a stacking issue. A test initially assumed Tab could never
leave the document; native dialog traversal can visit browser chrome, represented
by `document.body` as activeElement. The corrected assertion allows that state
while rejecting focus on any inert background control. No custom focus trap was
added to force the browser to satisfy the original incorrect assumption.

## Limits and next decision

The initial five-scenario baseline was expanded and corrected during the trial;
its counts and the final 18 checks are not an A/B score. No independent unguided
implementation, timing comparison or irrelevant-query rate was measured. This
demonstrates a working repair and useful integration checks, not causal uplift
from the skill or superiority of any model.

Not tested: real Safari/iOS hardware, older minimum browser versions, assistive
technology speech output, all thirteen pattern detail views, or complete background
scroll suppression. Non-scrollable-container overscroll containment remains
progressive enhancement and may allow backdrop scrolling on older engines.
These are limits, not passing checks.

Next: apply the bounded workflow to a different UI capability, measure rework and
lookup usefulness, then verify natural activation on each intended agent route.
The initial theme candidate remains untouched. Retain or retire the lookup rule
at the review date using the [trial criteria](modern-web-guidance.md).
