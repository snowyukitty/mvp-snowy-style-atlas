# Modern web guidance: project trial

Trial owner: the project maintainer. Started 2026-11-11; review by 2026-11-25.
Status: project-local implementation trial, not fleet adoption or a proven
comparison of guided versus unguided agents.

## Intended outcome

Build interfaces with correct semantics, usable interaction, restrained JavaScript,
and preserved visual quality. GoogleChrome's
[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) is
technical evidence for choosing platform mechanisms. Product requirements,
installed framework documentation, and observed behavior decide what ships.
The atlas's visual references and readable-interface lessons remain relevant.

Consult guidance for new or substantial interactive primitives, motion, forms,
theming, or a UI dependency decision. Skip copy, data, minor styling and atlas
content edits. Do not add obligatory credits sections to ordinary user replies.
Record useful guide IDs and decisions in the implementation record, not repetitive
process narration. An unavailable lookup does not justify guessing a new API:
use verified framework/platform documentation and disclose the gap.

## One local entry point

```sh
npm ci
npm run mwg -- search "accessible modal dialog"
npm run mwg -- retrieve "dialog"
```

`scripts/mwg.mjs` launches the installed CLI without a shell, forces
`DISABLE_TELEMETRY=1` even if the parent sets another value, and verifies that the
installed version matches the exact devDependency and integrity-bearing lockfile.
It refuses installer/update commands and never auto-installs a missing package.
Use this entry point instead of raw npx or an upstream auto-updating plugin.
It is not a sandbox or a runtime rehash of installed files; `npm ci` verifies
package acquisition against the lockfile. npm installation still uses the network.

Reviewed package: `modern-web-guidance@1.0.0`, Node >=22 (confirmed in the installed
manifest); local runtime Node 24.18.0. Bundled skill revision:
`2026_11_09-5bcc021b`. Bundled SKILL.md SHA-256:
`37d68a514c25066840299356e5857b750bec3cc27c0cf57dbe88369b051b573e`.
The installed CLI reads its bundled guide index and guidance files.
Source inspection shows `--skill-version` is used for update warnings and
telemetry metadata; it does not select a remote guidance corpus. The npm pin
therefore pins the bundled content as well as the CLI. These observations apply
to this version, not future releases.

Before updating, review the package/skill changes and rerun search, retrieval,
telemetry override and the relevant behavioral pilot. Update the lockfile,
revision and review date together. No automatic update job was installed.

## Implementation decisions

1. Search a single generic capability; omit private names, data and source code.
   Rephrase an irrelevant search once, then use another primary source.
2. Retrieve matching guides in full, including any temporary output file.
3. Preserve the application's browser requirements. The installed Next.js guide
   lists Chrome/Edge 111+, Firefox 111+, Safari 16.4+. Baseline labels do not
   authorize silently raising those minimums. Newer mechanisms need detection,
   a working fallback, or explicitly acceptable degradation.
4. Adapt guidance to React lifecycle, SSR and type definitions. Native-first is
   not library prohibition. Retain a library when it meets the need better.
5. Verify keyboard, accessible name/role, focus return, reduced motion, viewport
   layout and visual appearance. Run lint/build and relevant browser checks.
   A scanner result or a successful lookup is not completion evidence.

For broad legacy triage only:

```sh
npm run mwg -- legacy-scan src --json
npm run mwg -- legacy-scan public/demos --json
```

Use separate targets: the initial two-directory command inspected only the first.
The tested scan covers 33 guides / 35 rules (roughly 20% of the catalog). Initial
results: one dark-mode candidate in `src/app/globals.css`, zero in the demos.
Review keep/drop rubrics; do not erase useful fallbacks to reach zero findings.
The theme candidate remains separate from the dialog trial.

## Independent critique and pilot

An ATD review requested changes to the first proposal: too broad a mandatory
lookup, prose-only telemetry protection, an npm pin without lockfile integrity,
no exit criteria, and no outcome evidence. It recommended a detail-dialog pilot.
The scoped trigger, local wrapper, dependency lock and exit criteria address those
findings. Review details and evidence limitations are recorded in
[the pilot record](modern-web-pilot.md).

The trial modernizes `StyleDetail` using `dialog`, `light-dismiss-a-dialog`, and
`prevent-page-scroll-under-modal-dialog` guidance. Native `showModal()` supplies
semantics, inert background interaction and focus behavior. `closedby` uses a
pointer-boundary fallback when unavailable; both press and release must be outside
so selecting text does not dismiss. React's installed types require lowercase
`closedby`. A queued Strict Mode close event cannot dismiss a reopened modal.

Keep the paper palette, hard borders and shadows. Use a short CSS entrance only
without reduced-motion preference; the old exit animation was inside an unmounted
component and did not run, so close is deliberately immediate. Native scroll
containment is progressive enhancement: older engines may still scroll the page
behind the backdrop. Keyboard and background interaction remain protected; do
not claim a universal scroll lock or feature-detect this behavior by CSS syntax.

Run `npm run test:browser` after `npx playwright install chromium firefox webkit`.
Tests own the registered loopback test service on port 9913 and refuse reuse of
an existing server. Coordinate its lease before execution. Browser binaries are
test-only. WebKit automation is not an actual Safari/iPhone or screen-reader test.

## Keep, stop, and rollback

This pilot compares existing behavior with one guided implementation; it is not
an independent unguided-agent control. It can establish a useful repair and a
workable lookup path, but cannot establish the skill caused the improvement.

Keep it as a limited trial only when the repaired interaction passes its acceptance
checks and screenshots preserve the design. Before fleet rollout, gather another
representative task and fresh-session activation evidence for intended routes;
record time/rework and irrelevant lookups, as well as user-visible quality.
A comparative efficacy claim needs matched independent guided/unguided work.

Stop expanding if guidance causes a regression, conflicts with the browser target,
repeatedly returns irrelevant results, or adds effort without demonstrated value.
Resolve individual contradictory rules with primary sources and behavior tests.
At the review date, explicitly renew, revise, or retire the trial; no automatic
expiry task exists. If not renewed, treat the lookup as optional reference.

Rollback the instruction and tooling independently of a useful application fix:
remove the trial section, npm `mwg` script, wrapper and devDependency; regenerate
the lockfile. Keep documentation/evidence and regression tests. Revert the dialog
separately only if its own behavior regresses, preserving unrelated changes.

## Fleet adoption remains conditional

AAE audits route reach and renders destinations; an explicitly named owner/deployer
must distribute content. Its current ADR 0041 excludes undeclared third-party
skills, so a contract decision is required. Do not infer agent activation from a
file or from another provider's paths. In a fresh natural task, verify discovery,
actual lookup, and useful implementation on each intended route. Pin/update content
through one owner; keep the project wrapper's privacy policy. No global profiles,
account homes, sibling configuration, plugin installation or fleet defaults have
been changed by this trial.
