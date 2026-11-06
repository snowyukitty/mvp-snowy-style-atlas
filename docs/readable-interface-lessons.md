# Readable, compact interfaces

Practical lessons recorded on 2026-11-06 for use alongside the atlas's visual
patterns. Apply them to the receiving project's audience, tasks, content and
design system; they are review heuristics, not a universal dashboard layout.

## What the iteration taught us

An information-heavy interface became harder to read when compactness was
pursued through dense tables, many columns and small text. Subsequent revisions
used clearer modules, task-oriented ordering and mobile rearrangement. The owner
preferred that direction. This is qualitative feedback from an iterative design
session, not a controlled usability study or evidence of measured task gains.

The transferable lesson is to reduce the effort of understanding and acting on
information. Content per screen is only one consideration. Useful whitespace,
readable typography and clear relationships can make a page feel more coherent
even when it occupies more vertical space.

## Decisions to reuse

| When you notice | Try | Check the tradeoff |
| --- | --- | --- |
| Small text and crowded columns | Remove repetition; group information by task; keep comparison fields aligned | Can readers still compare the items they need without opening each one? |
| A large header or summary delaying the real task | Shorten repeated framing and move the main task earlier | Does the page still explain its purpose and relevant context? |
| One giant table, or a separate card for every detail | Give each module a clear topic; keep related information and actions together | Do modules clarify relationships, or merely add borders and padding? |
| Mobile feels like a squeezed desktop | Reorder the task flow, stack appropriate fields and adapt navigation | Are important warnings and capabilities still available? |
| A highlighted selection appears to mean an active setting | Name the viewed, configured, applied and observed states precisely | Can the user tell what has actually taken effect? |
| Old success indicators appear current | Show freshness and unknown or expired states where relevant | Is the timestamp tied to the actual observation? |
| Advanced detail overwhelms the primary task | Reveal secondary detail on demand | Are decision-critical restrictions still visible before the action? |
| Copying, filtering or saving gives ambiguous feedback | Synchronize labels and results; provide readable feedback and recovery | Does the feedback reflect the operation's actual outcome? |
| Individually polished components feel inconsistent together | Align naming, typography, spacing and interaction conventions | Are meaningful differences still easy to recognize? |

Tables are useful when comparison matters. Cards are useful when items need
independent explanation or actions. Choose by the task, not by a blanket rule
that either format is more modern. Likewise, compactness need not be a goal for
an editorial reading experience or a deliberately paced product story.

## Adaptation and verification

- **Reading and navigation:** keep visual, DOM and keyboard focus order
  coherent. CSS rearrangement should not make focus jump unpredictably. Give
  controls meaningful names, visible focus and understandable states.
- **Mobile:** inspect narrow layouts, long labels and touch targets. A collapsed
  desktop region must not silently remove necessary warnings. Avoid forcing
  every table into cards when two-dimensional comparison remains essential.
- **Interaction:** cover loading, empty results, errors, disabled controls and
  stale data where applicable. Success feedback needs enough reading time;
  consequential results should remain discoverable after a toast disappears.
- **Typography and dependencies:** check language coverage, fallback, font
  licensing and payload when changing fonts. Add effects or packages only when
  their benefit justifies performance and maintenance costs.
- **Evidence:** inspect representative desktop and mobile views and perform the
  main task, including keyboard and failure paths. For supported themes or
  locales, sample the cases likely to expose layout problems. Distinguish local
  emulation, deployed environments and actual-device checks. A screenshot alone
  does not establish that an interaction works.
- **Private content, when applicable:** verify access controls on data, APIs,
  downloads and static resources. Hidden elements or a password screen do not
  establish protection. Bot verification and user authorization serve different
  purposes; neither a polished login nor a challenge proves every resource is
  protected.

These are checks for the next implementation, not claims that this atlas or
every source interface has already passed them. Match verification to the
change and report missing evidence honestly.

## Reusable project prompt

Copy the following block into another project's task. It is self-contained and
does not grant implementation, deployment or disclosure authority on its own.

```text
Use these interface-design lessons to assess and, where already authorized,
improve this project's readability, information organization and interactions.

First understand the project's audience, primary tasks, content, existing
design system and constraints. Preserve what works. Treat these principles as
adaptable heuristics: a content site, marketing page, commerce flow and admin
tool need different priorities. Challenge any suggestion that does not fit.

1. Improve density through organization. Remove duplication and unnecessary
   visual travel while preserving readable type, useful whitespace and usable
   controls. Do not optimize solely for content per screen.
2. Order content around the primary task. Make the page's purpose, available
   actions and next step easy to understand. Give context enough space to help
   without letting repeated framing displace the task.
3. Give modules clear topics and relationships. Keep related information and
   actions together. Use tables for comparison and grouped sections or cards
   where independent explanation helps; avoid both giant tables and fragmented
   collections of tiny cards.
4. Keep visual, DOM and focus order coherent. Provide meaningful control names,
   visible focus and understandable states for keyboard and assistive use.
5. Adapt mobile layouts to the task. Reconsider columns, navigation and action
   placement. Check long text, readable forms and touch targets; preserve
   essential information when collapsing desktop regions.
6. Label states accurately. Distinguish what is viewed, configured, applied and
   observed. Show freshness and unknown states when needed; historical success
   must not imply current health.
7. Reveal secondary detail on demand. Keep results, critical limitations and
   next actions easy to find. Do not hide information needed for a decision.
8. Complete interaction feedback. Cover relevant loading, empty, error, expired
   and disabled states. Keep headings and results synchronized with selections;
   provide truthful success feedback and useful recovery paths.
9. Maintain consistent language, typography, spacing and controls. Check font
   coverage, fallback, licensing and payload when applicable. Weigh new effects
   and dependencies against their concrete benefit and maintenance cost.
10. Verify representative screens and real actions, including narrow layouts,
    long content, keyboard use and failure paths. Sample supported themes and
    languages where relevant. Check comprehension and task completion, not
    merely the absence of overflow.

If private content is involved, verify access protection for the underlying
data and resources. Frontend hiding, a password screen or bot verification
alone is not evidence of complete access control.

Identify the 3-5 most valuable improvements, or fewer if that is all the evidence
supports. For each, name the page, component or flow, the observed problem,
the proposed change, expected benefit and verification method. Briefly explain
which principles need adaptation or do not apply. Propose one focused iteration
rather than an automatic full redesign.

Separate observations from hypotheses. If you cannot inspect the interface or
exercise a flow, say so. Follow the current task's authorization and project
rules: an assessment-only task ends with recommendations; an implementation task
continues through the authorized changes and relevant checks without redundant
permission requests. Deployment, disclosure and external actions retain their
existing authorization boundaries.

For implementation work, report what changed and why, provide available before
and after views, and state which checks actually ran. Distinguish local
emulation, deployed checks and real-device testing; list blocked or unrun checks.
```

## Using this with the atlas

Use [the research notes](research.md) and a pattern's starter prompt to choose a
visual direction, then use this guide to assess how that direction supports the
actual task. The [expressive-site studies](research-expressive-sites-2026-10.md)
and [effects guide](research-effects-2026-10.md) remain complementary references
for visual character and motion. Readability does not require every project to
look like the same utilitarian application.
