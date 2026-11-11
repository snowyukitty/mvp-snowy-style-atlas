# Modern web guidance for agents

Verified on 2026-11-11. This project now requires a guidance lookup before web
implementation through its root `AGENTS.md`. Fleet-wide skill installation is
not part of this checkpoint.

## Sources and purpose

[GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance)
ships agent skills and a CLI for focused web-platform guidance. Its
[upstream skill](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/SKILL.md)
defines search, retrieval, compatibility, and modernization workflows.
Implementation source lives in
[modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src).

Use this alongside the atlas's visual references and interface-design lessons.
It helps choose platform mechanisms; it does not supply product direction,
art direction, framework architecture, or proof that a finished interface works.

## Repeatable project workflow

The tested CLI is `modern-web-guidance@1.0.0`, requiring Node >=22; this host ran
Node 24.18.0. Use the explicit version below for this checkpoint. Review upstream
changes and repeat the smoke checks before updating the pin; do not leave this
version frozen indefinitely or silently substitute `@latest` in automation.

In PowerShell, set the variable in the same process that launches the command:

```powershell
$env:DISABLE_TELEMETRY = '1'
npx.cmd -y modern-web-guidance@1.0.0 search 'animate scroll progress'
npx.cmd -y modern-web-guidance@1.0.0 retrieve 'scroll-progress-indicator'
```

1. Search one capability at a time using a short generic action phrase. Do not
   include private project names, customer data, source snippets, or credentials.
2. Read matching guides in full, including any file written by the CLI when its
   output is large. If results are irrelevant, rephrase once; do not invent IDs.
3. Choose native primitives where suitable. Adapt vanilla examples to the
   installed framework, SSR lifecycle, types, and component ownership rules.
4. Check compatibility against the project's target. Default to Baseline Widely
   available. Newer capabilities require feature detection and usable fallback
   or graceful degradation. Recheck dated compatibility claims when they affect
   a shipping decision; guidance and old project notes can become stale.
5. Verify the actual behavior: keyboard and focus, reduced motion, responsive
   layout, relevant browser engines, and established project checks. Report
   untested browsers and behavior explicitly.
6. Record guide IDs, the implementation choice, retained fallback, and evidence.

The upstream README says search uses a local index, but it also documents
telemetry that includes search queries and retrieved guide IDs. Disable it.
Initial npm package acquisition still uses the network. This is development
tooling, not a production dependency or a hosted inference service.

## Modernization triage

Use the scan for a broad modernization audit, not every small component edit:

```powershell
$env:DISABLE_TELEMETRY = '1'
npx.cmd -y modern-web-guidance@1.0.0 legacy-scan src --json
npx.cmd -y modern-web-guidance@1.0.0 legacy-scan public/demos --json
```

Pass one target directory per invocation. A trial with two positional directories
reported only the first; separate invocations were used to verify both targets.
The tested scan covers 33 guides / 35 deterministic rules, approximately 20% of
the guidance corpus. Review each result's `keepWhen` / `dropWhen` rubric. Zero
findings does not establish accessibility, performance, or complete modernization.

Observed candidates, without changing application behavior:

| Area | Evidence | Next decision |
| --- | --- | --- |
| Theme | Scan found one `dark-mode` candidate in `src/app/globals.css`; inspection confirms a dark media query changes tokens without root `color-scheme`. | Review native UI theming and the fixed paper palette together. Do not mechanically replace every media query; some are valid fallbacks. |
| Detail overlay | Manual inspection of `src/components/Lightbox.tsx` shows a `motion.div` overlay and a window Escape handler. | Search dialog guidance before the next change; assess semantic modal behavior, initial/return focus, background inertness, and animation needs. This was not a scanner finding or a browser test. |
| Scroll demo | The demo already uses CSS scroll timelines with feature detection and reduced-motion handling; its directory scan has zero findings. | Preserve the native approach. The handoff's chapter/waypoint mismatch still needs behavior-level verification. |

Retrieved and read `scroll-progress-indicator` and `dark-mode` during the trial.
No application migration was made. Do not remove Framer Motion, React, or Next.js
merely because native alternatives exist; compare the actual feature and costs.

## Proposed rollout to all agents

Use the existing AI Agent Entrypoint (AAE) foundation workflow for route reach,
with an explicit owner/deployer for this third-party skill. AAE audits and renders
destinations; it does not own or deploy skill content. Its current ADR 0041 keeps
undeclared third-party skills outside the foundation inventory, so inclusion
requires an explicit contract decision, not just an installer run.

1. Review and pin one upstream skill/CLI revision, retain licensing, and define
   its update and rollback procedure. Keep telemetry disabled across invocations.
2. Declare the intended provider/profile surfaces. Use the existing managed-route
   deployment mechanism; installing into a default home alone is insufficient.
3. Verify discovery in fresh sessions on each intended route, then prove that a
   natural UI request actually triggers search and retrieval. File presence alone
   is not evidence of activation. Do not infer Antigravity discovery from another
   provider's paths or from upstream plugin support.
4. Use a small behavioral acceptance task: accessible dialog, responsive cards,
   or reduced-motion-safe scroll effects. Check the rendered outcome and fallback.
5. Run the declared-route foundation audit and retain revision/digest evidence.
   Recheck discovery and behavior after updates. Pinning must be paired with upkeep.

No fleet homes, agent settings, foundation inventory, or sibling repositories
were modified here. The reusable workflow is kept in this domain-specific atlas;
fleet adoption remains a separate implementation step.
