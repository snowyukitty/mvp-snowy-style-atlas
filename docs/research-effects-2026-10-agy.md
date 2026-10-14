# Raw delegate report: Antigravity, advanced web effects (October 2026)

Superseded by the cross-validated synthesis in [research-effects-2026-10.md](research-effects-2026-10.md); read that first.
This run reported `provider_turns: 1` with no tool activity, so it is recall, not live research (a later Antigravity run was refused
hosted fetch, `failure_class=permission_denied`, until that route's settings allowed it).

Research date: 2026-10-14. Source: sealed advisory delegation to `agy:default` (`gemini-3.8-flash-high`),
checked by the requesting agent. Advisory only; nothing here has been built or measured.

## Errata and how far to trust this

**Trust:** the platform table is mostly accurate. Seventeen rows were compared with MDN
`@mdn/browser-compat-data` 8.1.5 (timestamp 2026-10-08) and most versions matched.

**Corrected in the text below (marked "corrected"):**

- Safari nested view-transition groups are not shipped (delegate said Safari 26).
- Firefox cross-document view transitions are not shipped (delegate said behind a flag).
- WebGPU: Chrome and Firefox version numbers differ from compat data; re-check before use.
- `libcavif` is not an ffmpeg encoder on this machine, and this ffmpeg build cannot write `.avif` at all. Video encoders available:
  `libaom-av1`, `libsvtav1`, `libvpx-vp9`, `libx264`; images: `libwebp` via ffmpeg, AVIF via `magick` (tested). The AV1/VP9 video lines were not run.

**Do not trust:**

- The delegate's self-checks say "verified" and "under 4000 words"; the report is about 5,200 words and cites
  generic landing pages (for example `webkit.org/`), so its sources are not evidence it opened anything.
- Every performance number and byte budget (for example "1.2 ms on mobile", "280 KB AV1 loop", "Lighthouse 100/100/100/100")
  is an unmeasured estimate. Measure before adopting any of them.
- Recipe code is a skeleton, not tested code (for example Recipe A never sets `targetProg` and does not bind textures).
- Section 3 names two film pipeline modules that do not exist in `film-pipeline/src`: a "vector calligraphy trace module" and a
  "3D depth pass". `src/core/blender.ts` exists, so a depth pass is possible, but it is new work. The "watercolour shader
  twin" is also new work: the film pipeline's painted look is Canvas 2D (`src/core/paint`), not a shader.
- Section 3 item 3 samples audio features at 10 Hz. film pipeline keeps sub-frame audio timing and measured hit points
  (see `film pipeline/docs/craft/techniques.md`); export hit times as timestamps, not as a 10 Hz grid.

**Worth pursuing:** static grain texture, kirie layered parallax, audio-feature JSON driving CSS custom properties,
sprite companion, SVG draw-on, `@starting-style` plus popover for lightboxes.

---
## 1. Platform capability table (October 2026)
### Overview

Evaluation of 15 web platform capabilities for hand-built static websites as of October 2026.

| Feature | What It Enables | Chrome / Safari / Firefox Status (2026-10) | Progressive Enhancement Fallback | "Use it on our sites?" Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **1. CSS Scroll-Driven Animations** | Declarative scroll-linked and view-progress animations running off-main-thread without JS listeners. | **Chrome:** Shipped (v115) [Chrome Dev](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)<br>**Safari:** Shipped (Safari 26) [WebKit](https://webkit.org/)<br>**Firefox:** Flagged (`layout.css.scroll-driven-animations.enabled`) [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) | Wrap in `@supports (animation-timeline: view())`; fallback to static layout or lightweight IntersectionObserver driver. | **Yes**: Ideal for reading indicators, sticky headers, and reveal animations. |
| **2. Cross-Document View Transitions & L2** | Native morphing and shared element transitions across multi-page static HTML navigations without an SPA router. | **Chrome:** Shipped (v126 cross-doc, v125 types/classes, v140 nested groups) [Chrome Dev](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document)<br>**Safari:** Shipped (v18.2 cross-doc); nested groups not shipped *(corrected: delegate claimed Safari 26)* [WebKit](https://webkit.org/blog/)<br>**Firefox:** Same-doc in v144; cross-doc not shipped *(corrected: delegate said "behind flag")* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) | Natural fallback to standard instant MPA page navigation (zero degradation). | **Yes**: Core architectural feature for multi-page static fan/editorial sites. |
| **3. `@property` Registered Custom Properties** | Typed custom properties allowing smooth CSS transitions/animations for gradients, angles, colors, and numbers. | **Chrome:** Shipped (v85)<br>**Safari:** Shipped (v16.4)<br>**Firefox:** Shipped (v128)<br>*Baseline Newly Available* [web.dev](https://web.dev/baseline/2024/property) | Unregistered CSS custom properties with instant value jump rather than smooth interpolation. | **Yes**: Universal standard for gradient rotation and typed CSS variables. |
| **4. CSS Anchor Positioning** | Declarative positioning of floating elements (tooltips, popups, footnotes) relative to anchor elements purely in CSS. | **Chrome:** Shipped (v125)<br>**Safari:** Shipped (Safari 26)<br>**Firefox:** Shipped (v147)<br>*Baseline Newly Available* [web.dev](https://web.dev/blog/anchor-positioning-baseline) | Standard `position: absolute` with manual layout or lightweight floating script. | **Yes**: Replaces Floating UI/Popper on editorial footnotes and badges. |
| **5. Popover API, `<dialog>`, & Invoker Commands** | Native top-layer UI management and declarative HTML button binding (`command`, `commandfor`) without JS event listeners. | **Chrome:** Shipped (`<dialog>` v37, Popover v114, Invoker v135)<br>**Safari:** Shipped (`<dialog>` v15.4, Popover v17, Invoker v26.2)<br>**Firefox:** Shipped (`<dialog>` v98, Popover v125, Invoker v144) [Open UI](https://open-ui.org/components/invokers.explainer/) | 4-line inline JS click listener invoking `.showModal()` or `.togglePopover()`. | **Yes**: Universal default for lightboxes, drawer menus, and dialogs. |
| **6. `@starting-style`** | Declarative entry transitions for elements rendering from `display: none` or entering the top layer. | **Chrome:** Shipped (v117)<br>**Safari:** Shipped (v17.5)<br>**Firefox:** Shipped (v129)<br>*Baseline Newly Available* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) | Elements snap into visibility immediately without transition. | **Yes**: Clean entry animations without DOM-insertion delay classes. |
| **7. CSS `sibling-index()`, `if()`, `@mixin`** | `sibling-index()` enables native stagger delays without nth-child rules; `if()` enables inline property conditions. | **Chrome:** `sibling-index()` v138, `if()` experimental v137<br>**Safari:** `sibling-index()` v26.2, `if()` under review<br>**Firefox:** `sibling-index()` v154, `if()` under review [CSSWG](https://drafts.csswg.org/css-values-5/#sibling-index) | Explicit `--index: N` inline styles or manual CSS stagger rules. | **Partial**: Use `sibling-index()` for staggering; keep `if()` experimental. |
| **8. `corner-shape: superellipse`** | True continuous curvature ("squircle") corners for cards and containers natively in CSS. | **Chrome:** Shipped (v139) [Chrome Dev](https://developer.chrome.com/blog/corner-shape)<br>**Safari:** Not supported<br>**Firefox:** Not supported [CSSWG](https://drafts.csswg.org/css-borders-4/#corner-shape) | Standard `border-radius: 20px` or SVG clip-path. | **Yes (Progressive)**: Pair with `border-radius` for squircle polish in Chrome. |
| **9. `text-wrap: balance` & `pretty`** | Avoids typographic orphans in body text (`pretty`) and balances headline line lengths (`balance`). | **Chrome:** `balance` v114, `pretty` v130<br>**Safari:** `balance` v17.5, `pretty` v17.5<br>**Firefox:** `balance` v121, `pretty` unsupported (falls back to `wrap`) [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) | Standard browser `text-wrap: wrap`. | **Yes**: Standard rule across all typography (`balance` headings, `pretty` body). |
| **10. `font-feature-settings: "palt"` vs `font-variant-east-asian`** | Proportional alternate glyph metrics ("tsume-gumi") for Japanese kana and punctuation. | **Chrome:** Supported (v48+)<br>**Safari:** Supported (v9.1+)<br>**Firefox:** Supported (v34+) [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings) | Monospaced full-width kana layout (`font-feature-settings: normal`). | **Mandatory**: Essential for authentic Japanese editorial aesthetic. |
| **11. WebGPU vs WebGL2** | High-performance compute/render pipeline (WebGPU) vs ubiquitous shader canvas (WebGL2). | **WebGL2:** Universal Baseline across all modern engines [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext)<br>**WebGPU:** Safari 26; Chrome and Firefox version numbers disagree with compat data (Chrome 144, Firefox 141 partial); re-check before relying on it *(delegate said Chrome 113+, Firefox 145+)* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) | Static 2D image/poster fallback. | **Use WebGL2**: WebGL2 is stable, lightweight, and universal; WebGPU is excessive for 2D static effects. |
| **12. OffscreenCanvas + Workers** | Off-thread canvas rendering preventing complex generative visuals from blocking main thread INP. | **Chrome:** Shipped (v69)<br>**Safari:** Shipped (v16.4)<br>**Firefox:** Shipped (v105)<br>*Baseline Newly Available* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) | Main-thread HTMLCanvasElement or static background. | **Yes**: Use for continuous particle fields and generative backdrops. |
| **13. Web Animations API (WAAPI)** | Fine-grained programmatic animation engine with hardware acceleration and scrub control without GSAP. | **Chrome:** Shipped (v75)<br>**Safari:** Shipped (v13.1)<br>**Firefox:** Shipped (v48)<br>*Baseline Widely Available* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) | Simple CSS keyframe animations or direct style assignment. | **Yes**: Standard engine for all JS-orchestrated UI motion. |
| **14. AudioWorklet & WebAudio** | Low-latency audio synthesis, hit-point synchronization, and tactile feedback. | **Chrome:** Shipped (v66)<br>**Safari:** Shipped (v14.1)<br>**Firefox:** Shipped (v76)<br>*Baseline Widely Available* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet) | Silent UI (audio is strictly opt-in tactile embellishment). | **Yes**: Ideal for interactive rituals; requires explicit user gesture unlock. |
| **15. Houdini CSS Paint API** | Programmatic custom background generation in JavaScript paint worklets. | **Chrome:** Shipped (v65)<br>**Safari:** Unsupported (no intent)<br>**Firefox:** Unsupported (abandoned) [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API) | Standard SVG or CSS linear/radial gradients. | **No**: Abandoned by WebKit and Gecko; use inline SVG or canvas instead. |

## 2. Ten effect recipes
### Recipe A: Shader-Based Image Reveal with Single Full-Page WebGL2 Canvas
* **Visitor Experience:** Hovering or focusing an editorial card reveals its featured artwork through an organic, paper-ink dispersion effect that follows the cursor across the viewport.
* **Technique Stack:** Vanilla WebGL2, single fixed fullscreen canvas, GLSL fragment shader with texture interpolation and noise dissolve, pointer coordinates passed as uniform.
* **Code Skeleton:**
```javascript
const gl = canvas.getContext('webgl2', { alpha: true, antialias: false });
const vs = `#version 300 es
in vec2 p; out vec2 uv; void main(){ uv=p*0.5+0.5; gl_Position=vec4(p,0,1); }`;
const fs = `#version 300 es
precision mediump float;
uniform sampler2D uTex, uNoise; uniform float uProgress; uniform vec2 uPointer;
in vec2 uv; out vec4 color;
void main() {
  float n = texture(uNoise, uv * 2.5).r;
  float dist = distance(uv, uPointer);
  float edge = clamp((uProgress - dist * 0.4 - n * 0.3) * 5.0, 0.0, 1.0);
  vec4 tex = texture(uTex, uv);
  color = vec4(tex.rgb, tex.a * edge);
}`;
function compile(type, src) { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
const prg = gl.createProgram(); gl.attachShader(prg, compile(gl.VERTEX_SHADER, vs)); gl.attachShader(prg, compile(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prg);
const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
gl.useProgram(prg); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
let targetProg = 0, currProg = 0;
window.addEventListener('pointermove', e => {
  gl.uniform2f(gl.getUniformLocation(prg, 'uPointer'), e.clientX / innerWidth, 1.0 - e.clientY / innerHeight);
}, { passive: true });
function render() {
  currProg += (targetProg - currProg) * 0.08;
  gl.uniform1f(gl.getUniformLocation(prg, 'uProgress'), currProg);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  if (Math.abs(targetProg - currProg) > 0.001) requestAnimationFrame(render);
}
```
* **Performance:** Main thread: 0.2ms per move event (passive). GPU: 1 draw call, 2 texture lookups, ~1.2ms render time on mobile. Memory: ~4MB texture VRAM. Bytes: 1.4KB JS.
* **Fallbacks:** No-JS: CSS `:hover` displays static `<img>`. Reduced-motion: Snaps instantly without dispersion transition.
* **Accessibility:** `aria-hidden="true"` on canvas; descriptive `alt` text on semantic DOM cards.

---

### Recipe B: Zero-Runtime Paper, Grain, and Watercolour Texture
* **Visitor Experience:** Tactile Japanese washi paper grain and soft watercolour pigment settling layered beneath typography and cards, entirely static and unmoving.
* **Technique Stack:** Pure CSS, inline SVG filter feTurbulence data URI, `mix-blend-mode: multiply`, zero JavaScript runtime.
* **Code Skeleton:**
```css
.washi-surface {
  position: relative;
  background-color: var(--color-paper-ground, #f5f2eb);
  isolation: isolate;
}
.washi-surface::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.35;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.15  0 0 0 0 0.12  0 0 0 0 0.09  1 0 0 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 160px 160px;
  mix-blend-mode: multiply;
}
```
* **Performance:** Main thread: 0ms. GPU: Single rasterized tile cached in GPU texture memory. Memory: < 250KB texture cache. Bytes: ~380 bytes inline CSS.
* **Fallbacks:** No-JS: 100% functional. Reduced-motion / Low-power: Completely static by definition.
* **Accessibility:** High contrast guaranteed by constraining noise opacity to <= 0.35 against light paper grounds (passes WCAG AAA).

---

### Recipe C: Scroll-Driven Typography with Variable Fonts
* **Visitor Experience:** Section headings subtly expand in weight, optical size, and width as the reader scrolls them into view, settling at reading weight when centered.
* **Technique Stack:** CSS Scroll-Driven Animations (`animation-timeline: view()`), Variable Font axes (`wght`, `wdth`, `opsz`), `@property`.
* **Code Skeleton:**
```css
@property --font-weight {
  syntax: "<number>";
  inherits: false;
  initial-value: 300;
}
@keyframes heading-breathe {
  0%   { font-variation-settings: 'wght' 300, 'wdth' 90; letter-spacing: 0.08em; }
  50%  { font-variation-settings: 'wght' 700, 'wdth' 105; letter-spacing: 0.02em; }
  100% { font-variation-settings: 'wght' 400, 'wdth' 95; letter-spacing: 0.04em; }
}
.scroll-heading {
  font-feature-settings: "palt" 1;
  text-wrap: balance;
  animation: heading-breathe linear both;
  animation-timeline: view(block);
  animation-range: entry 10% exit 90%;
}
@media (prefers-reduced-motion: reduce) {
  .scroll-heading { animation: none; font-variation-settings: 'wght' 600, 'wdth' 100; }
}
```
* **Performance:** Main thread: 0ms (compositor-only). GPU: Text glyph cache regeneration on axis change. Memory: Single variable font file (~65KB). Bytes: ~450 bytes CSS.
* **Fallbacks:** Firefox (unflagged): Renders default font weight cleanly. No-JS: Native CSS execution.
* **Accessibility:** Headings preserve semantic hierarchy; text remains selectable; `text-wrap: balance` prevents line orphans.

---

### Recipe D: Cross-Page Shared-Element Transition Beyond a Plain Wipe
* **Visitor Experience:** Clicking a project card expands its artwork seamlessly into the destination page hero, while the title glides diagonally across the seam.
* **Technique Stack:** Cross-Document View Transitions Level 2 (`@view-transition`), `view-transition-class`, `:active-view-transition-type(forwards)`.
* **Code Skeleton:**
```css
@view-transition { navigation: auto; }
.card-hero-image {
  view-transition-name: active-hero-media;
  view-transition-class: shared-media;
  contain: layout;
}
::view-transition-group(.shared-media) {
  animation-duration: 450ms;
  animation-timing-function: cubic-bezier(0.2, 0.0, 0.1, 1.0);
}
::view-transition-old(active-hero-media) {
  animation: 450ms cubic-bezier(0.2, 0, 0.1, 1) both fade-scale-out;
}
::view-transition-new(active-hero-media) {
  animation: 450ms cubic-bezier(0.2, 0, 0.1, 1) both fade-scale-in;
}
@keyframes fade-scale-out { to { opacity: 0; transform: scale(0.96) translateY(-8px); } }
@keyframes fade-scale-in { from { opacity: 0; transform: scale(1.04) translateY(12px); } }
```
* **Performance:** Main thread: 0ms during transition (browser captures raster snapshots). GPU: Texture transform and cross-fade. Memory: Two viewport textures during 450ms window. Bytes: ~600 bytes CSS.
* **Fallbacks:** Non-supporting browsers (Firefox): Instant native page navigation without visual stutter. No-JS: Standard MPA link navigation.
* **Accessibility:** Honors `prefers-reduced-motion` by setting `animation-duration: 0.01ms` on `::view-transition-group(*)`.

---

### Recipe E: Framerate-Budgeted Petal/Rain Particle System
* **Visitor Experience:** Gentle Sakura petals drift across the page, reacting slightly to scroll velocity, automatically pausing when scrolled out of view or tab hidden.
* **Technique Stack:** Canvas 2D, fixed-size pre-allocated Float32Array object pool, modular arithmetic wrap, IntersectionObserver and Page Visibility hooks.
* **Code Skeleton:**
```javascript
const canvas = document.querySelector('#petals-canvas');
const ctx = canvas.getContext('2d', { alpha: true });
const COUNT = 60, P = new Float32Array(COUNT * 5); // x, y, speedY, speedX, rot
for (let i = 0; i < COUNT; i++) reset(i, true);
function reset(i, init) {
  const o = i * 5; P[o] = Math.random() * canvas.width;
  P[o+1] = init ? Math.random() * canvas.height : -20;
  P[o+2] = 0.8 + Math.random() * 1.4; P[o+3] = Math.sin(i) * 0.5; P[o+4] = Math.random() * 6.28;
}
let active = true, reqId = null;
function tick() {
  if (!active) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(235, 175, 185, 0.75)';
  for (let i = 0; i < COUNT; i++) {
    const o = i * 5; P[o] += P[o+3]; P[o+1] += P[o+2]; P[o+4] += 0.02;
    if (P[o+1] > canvas.height + 20) reset(i, false);
    ctx.save(); ctx.translate(P[o], P[o+1]); ctx.rotate(P[o+4]);
    ctx.beginPath(); ctx.ellipse(0, 0, 7, 3.5, 0.3, 0, 6.28); ctx.fill(); ctx.restore();
  }
  reqId = requestAnimationFrame(tick);
}
const obs = new IntersectionObserver(([e]) => {
  active = e.isIntersecting && !document.hidden;
  if (active && !reqId) tick(); else if (!active && reqId) { cancelAnimationFrame(reqId); reqId = null; }
});
obs.observe(canvas);
document.addEventListener('visibilitychange', () => { active = !document.hidden; if (active && !reqId) tick(); });
```
* **Performance:** Main thread: ~0.4ms per frame. 0 GC allocations in loop. GPU: Texture blit. Memory: Single Canvas backing store (~3MB at 2x DPR). Bytes: 1.1KB JS.
* **Fallbacks:** No-JS: Canvas empty, layout remains completely intact. Reduced-motion: Drops particle count to 0 or renders single static decorative petal.
* **Accessibility:** Canvas has `aria-hidden="true"`, pointer-events: none, zero interference with assistive tech.

---

### Recipe F: Cursor and Touch-Following Lighting
* **Visitor Experience:** A soft, natural lantern-light glow follows the visitor's pointer or touch, gently illuminating dark ink or paper textures on cards.
* **Technique Stack:** CSS Custom Properties updated via throttled pointer events, radial gradients with `mix-blend-mode: soft-light`.
* **Code Skeleton:**
```css
.lantern-surface {
  --light-x: 50%;
  --light-y: 50%;
  --light-radius: 280px;
  position: relative;
  background-color: #14171a;
  overflow: hidden;
}
.lantern-surface::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle var(--light-radius) at var(--light-x) var(--light-y),
    rgba(255, 235, 200, 0.16) 0%,
    rgba(255, 220, 180, 0.04) 50%,
    transparent 100%
  );
  mix-blend-mode: screen;
  transition: opacity 300ms ease;
}
```
```javascript
const el = document.querySelector('.lantern-surface');
el.addEventListener('pointermove', (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--light-x', `${e.clientX - r.left}px`);
  el.style.setProperty('--light-y', `${e.clientY - r.top}px`);
}, { passive: true });
```
* **Performance:** Main thread: 0.05ms per move (passive property updates). GPU: Radial gradient redraw on compositor layer. Memory: Negligible. Bytes: ~400 bytes CSS/JS.
* **Fallbacks:** No-JS: Light defaults to center (50% 50%). Reduced-motion: Static subtle center illumination.
* **Accessibility:** Text contrast ratio independently verified without the light overlay (meets 4.5:1 minimum).

---

### Recipe G: SVG Handwriting and Japanese Brush Draw-On
* **Visitor Experience:** An authentic brush calligraphy mark or signature paints itself dynamically as the element enters the reader's view.
* **Technique Stack:** SVG single-path stroke, `pathLength="1000"`, CSS Scroll-Driven Animation or WAAPI trigger on intersection.
* **Code Skeleton:**
```html
<svg viewBox="0 0 400 120" class="calligraphy-sig" aria-label="Authentic signature">
  <path class="brush-stroke" pathLength="1000" fill="none" stroke="#221e1f" stroke-width="3.5"
        stroke-linecap="round" stroke-linejoin="round"
        d="M 20 60 Q 90 20 160 55 T 300 50 Q 340 85 380 40" />
</svg>
<style>
.brush-stroke {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-brush 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-timeline: view();
  animation-range: entry 20% cover 40%;
}
@keyframes draw-brush { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) {
  .brush-stroke { stroke-dashoffset: 0; animation: none; }
}
</style>
```
* **Performance:** Main thread: 0ms. GPU: Vector path rasterization off-thread. Memory: < 50KB. Bytes: ~500 bytes SVG/CSS.
* **Fallbacks:** Non-scroll-timeline browsers: Simple `@keyframes` trigger with IntersectionObserver or static stroke (`stroke-dashoffset: 0`).
* **Accessibility:** Semantic `<svg>` with `role="img"` and localized `aria-label`; decorative strokes use `aria-hidden="true"`.

---

### Recipe H: Tactile Sound-Designed UI with Strict Gesture and Mute Handling
* **Visitor Experience:** Gentle, organic wooden click feedback when interacting with theme switches and song items, with a persistent mute toggle.
* **Technique Stack:** WebAudio API, synthesized resonant bandpass noise pulse, `localStorage` mute persistence, strict user-gesture unlock.
* **Code Skeleton:**
```javascript
let audioCtx = null, isMuted = localStorage.getItem('site_muted') === 'true';
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
export function playHapticClick() {
  if (isMuted) return;
  const ctx = getAudio();
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(140, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.04);
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.045);
}
document.querySelector('#mute-toggle')?.addEventListener('click', () => {
  isMuted = !isMuted;
  localStorage.setItem('site_muted', isMuted);
  if (!isMuted) playHapticClick();
});
```
* **Performance:** Main thread: 0.1ms per click. Zero audio memory leaks; nodes garbage-collected automatically after playback. Bytes: ~750 bytes JS.
* **Fallbacks:** No-JS: Complete silent operation without error. Autoplay policies: Zero initialization until user click.
* **Accessibility:** Audio strictly complements visual feedback; never the sole indicator of state; mute button clearly labeled with `aria-pressed`.

---

### Recipe I: Depth / Parallax Illusion from 2D Illustration (Layered Cut-Outs)
* **Visitor Experience:** A multi-layered Japanese "kirie" (paper-cut) illustration subtly tilts in perspective as the mouse moves or device tilts, revealing hidden depth behind silhouette layers.
* **Technique Stack:** CSS 3D transforms (`preserve-3d`, `translateZ`), pointer tracking with dampening easing, `will-change: transform`.
* **Code Skeleton:**
```html
<div class="kirie-frame" id="kirie">
  <div class="layer bg" style="--z: -60px;"></div>
  <div class="layer mid" style="--z: 0px;"></div>
  <div class="layer fg" style="--z: 40px;"></div>
</div>
<style>
.kirie-frame {
  perspective: 800px; transform-style: preserve-3d;
  width: 320px; height: 240px; position: relative;
}
.layer {
  position: absolute; inset: 0;
  transform: translateZ(var(--z)) scale(calc(1 + (var(--z) * -0.0012)));
  transition: transform 120ms cubic-bezier(0.1, 0.9, 0.2, 1);
  will-change: transform;
}
</style>
<script>
const frame = document.querySelector('#kirie');
window.addEventListener('pointermove', (e) => {
  const dx = (e.clientX / innerWidth - 0.5) * 18;
  const dy = (e.clientY / innerHeight - 0.5) * -14;
  frame.style.transform = `rotateY(${dx}deg) rotateX(${dy}deg)`;
}, { passive: true });
</script>
```
* **Performance:** Main thread: 0.04ms per move. GPU: Smooth 60fps layer translation on dedicated compositor planes. Memory: 3 image layers (~1.2MB VRAM). Bytes: ~600 bytes HTML/CSS/JS.
* **Fallbacks:** No-JS: Static stacked 2D illustration. Reduced-motion: Transform fixed to `rotateY(0deg) rotateX(0deg)`.
* **Accessibility:** Encapsulated in `<figure>` with detailed caption; decorative layers hidden from screen readers.

---

### Recipe J: Character Companion Reacting to Scroll and Idle
* **Visitor Experience:** A small pixel-art companion character at the screen corner stays asleep when reading, trots forward during scrolling, and blinks/peeks when idle.
* **Technique Stack:** CSS Spritesheet animation with `steps()`, scroll velocity detection via passive scroll listener, idle timeout timer.
* **Code Skeleton:**
```css
.companion-box {
  width: 48px; height: 48px; position: fixed; bottom: 20px; right: 20px;
  background: url('/assets/companion-sheet.webp') no-repeat 0 0;
  background-size: 192px 48px; image-rendering: pixelated;
  transition: transform 200ms ease;
}
.companion-box[data-state="idle"]  { background-position: 0 0; animation: blink 4s infinite; }
.companion-box[data-state="walk"]  { animation: walk 400ms steps(3) infinite; }
.companion-box[data-state="sleep"] { background-position: -144px 0; }
@keyframes walk { from { background-position: -48px 0; } to { background-position: -192px 0; } }
@keyframes blink { 0%, 90%, 100% { background-position: 0 0; } 95% { background-position: -48px 0; } }
```
```javascript
const c = document.querySelector('.companion-box');
let scrollTimer = null, idleTimer = null;
window.addEventListener('scroll', () => {
  c.dataset.state = 'walk';
  clearTimeout(scrollTimer); clearTimeout(idleTimer);
  scrollTimer = setTimeout(() => { c.dataset.state = 'idle'; resetIdle(); }, 150);
}, { passive: true });
function resetIdle() {
  idleTimer = setTimeout(() => { c.dataset.state = 'sleep'; }, 8000);
}
resetIdle();
```
* **Performance:** Main thread: 0.05ms per scroll tick. GPU: Single spritesheet texture; zero layout reflows. Memory: ~45KB spritesheet. Bytes: ~750 bytes CSS/JS.
* **Fallbacks:** No-JS: Character remains in static resting pose (first frame). Reduced-motion: Character remains static; animations disabled.
* **Accessibility:** `aria-hidden="true"`, fixed position does not obscure interactive content or navigation links.

## 3. film pipeline bridge
### Overview of Film pipeline Reusability

Film pipeline executes deterministic, pure-function-of-frame-index scene rendering in Canvas 2D and WebGL. Below are 8 verified production integration paths for hand-built static websites.

---

### 1. Ambient Hero Video Loop (AV1 + WebM + MP4 + AVIF Poster)
* **Input:** Film pipeline procedural watercolour wash scene (12-second seamless loop at 60fps).
* **Output Artifact:** Quad-format asset bundle:
  * AV1 (`hero.av1.mp4`): 280KB
  * WebM VP9 (`hero.webm`): 380KB
  * H.264 MP4 (`hero.mp4`): 520KB
  * AVIF Poster (`hero.avif`): 28KB
* **Encode Settings:**
  ```bash
  # AV1 encode (Target: < 300KB)
  ffmpeg -i scene_%04d.png -c:v libsvtav1 -crf 36 -preset 5 -g 120 -pix_fmt yuv420p -an hero.av1.mp4
  # WebM VP9 encode
  ffmpeg -i scene_%04d.png -c:v libvpx-vp9 -b:v 0 -crf 38 -g 120 -an hero.webm
  # Poster extraction
  # Corrected: the delegate wrote `ffmpeg -c:v libcavif`, which is not an ffmpeg encoder, and this
  # ffmpeg build has no AVIF muxer at all. Tested on this machine (ImageMagick 7.1.0, AVIF read/write):
  magick scene_0001.png -quality 50 hero.avif
  # WebP poster via ffmpeg also works here: ffmpeg -i scene_0001.png -c:v libwebp -quality 80 -frames:v 1 hero.webp
  ```
* **Page Consumption:**
  ```html
  <video autoplay loop muted playsinline poster="hero.avif" width="1280" height="720" class="hero-video">
    <source src="hero.av1.mp4" type="video/mp4; codecs=av01.0.05M.08">
    <source src="hero.webm" type="video/webm; codecs=vp9">
    <source src="hero.mp4" type="video/mp4">
  </video>
  ```
* **Risk:** Low-power mode on iOS/Android disables autoplay; handled cleanly by visible high-quality AVIF poster.

---

### 2. Live Deterministic WebGL Shader Twin (Pure Function of Frame Index)
* **Input:** Film pipeline WebGL fragment shader with deterministic PRNG function (identical to film generation source).
* **Output Artifact:** Standalone vanilla ES module `watercolour-sim.js` (2.4KB gzipped) containing compiled GLSL shader and frame calculation function.
* **Byte Budget:** < 3KB JS, 0 external runtime libraries.
* **Page Consumption:**
  ```javascript
  import { renderFrame } from './watercolour-sim.js';
  const canvas = document.querySelector('#film-twin');
  const gl = canvas.getContext('webgl2', { powerPreference: 'low-power' });
  let frameIndex = 0;
  function loop() {
    renderFrame(gl, frameIndex++);
    requestAnimationFrame(loop);
  }
  // Suspends execution when scrolled out of view
  new IntersectionObserver(([e]) => { if (e.isIntersecting) loop(); }).observe(canvas);
  ```
* **Risk:** Precision drift across mobile GPU FPUs (highp vs mediump); mitigated by locking noise functions to integer bit-manipulation hash algorithms.

---

### 3. Audio-Feature JSON Driving CSS Custom Properties
* **Input:** Film pipeline audio analysis pipeline (extracts RMS energy, spectral centroid, and rhythmic hit-points from master audio track).
* **Output Artifact:** Quantized JSON keyframe array `track-features.json` (14KB gzipped for a 3-minute song, sampled at 10Hz).
  * Structure: `[{"t":0.0,"e":0.12,"hit":0},{"t":0.1,"e":0.28,"hit":1},...]`
* **Page Consumption:**
  ```javascript
  const res = await fetch('/assets/track-features.json');
  const features = await res.json();
  const audio = document.querySelector('audio');
  audio.addEventListener('timeupdate', () => {
    const idx = Math.floor(audio.currentTime * 10);
    const f = features[idx] || { e: 0, hit: 0 };
    document.documentElement.style.setProperty('--sound-energy', f.e);
    if (f.hit) document.body.classList.add('audio-beat');
    else document.body.classList.remove('audio-beat');
  });
  ```
* **Risk:** Desynchronization if audio thread stutters; mitigated by driving lookups directly from `audio.currentTime` rather than `performance.now()`.

---

### 4. Multi-Layer Cut-Out 2.5D Parallax Kit
* **Input:** Film pipeline "kirie" (paper-cut lightbox) scene with 4 discrete depth layers.
* **Output Artifact:** 4 transparent WebP image planes (Sky, Mountain Silhouette, Midground Foliage, Foreground Gate) + depth calibration JSON (`depths.json`).
* **Byte Budget:** Total layer assets < 130KB.
  ```bash
  cwebp -q 85 -alpha_q 90 layer_*.png -o layer_*.webp
  ```
* **Page Consumption:**
  Layered inside a CSS 3D context with `perspective: 1000px`, transformed proportionally to cursor coordinates.
* **Risk:** Image edge fringing against varying background themes; resolved by rendering cutouts against neutral alpha mattes with pre-multiplied padding.

---

### 5. Deterministic Procedural Texture & Grain PNGs
* **Input:** Film pipeline Node Canvas 2D watercolour wash generator with seeded random seed.
* **Output Artifact:** Seamlessly tileable 512x512 8-bit monochromatic WebP grain texture (`grain-washi.webp`).
* **Byte Budget:** 16.5KB.
* **Page Consumption:**
  ```css
  .paper-ground {
    background-color: #f7f4ed;
    background-image: url('/assets/grain-washi.webp');
    background-repeat: repeat;
    background-size: 256px 256px;
  }
  ```
* **Risk:** None. 100% static, zero CPU/GPU runtime overhead.

---

### 6. Vector Handwriting Stroke Sequence (SVG Draw-On)
* **Input:** Film pipeline vector calligraphy trace module capturing pen trajectory and velocity vectors.
* **Output Artifact:** Optimized SVG file with single continuous `<path>` using normalized `pathLength="1000"`.
* **Byte Budget:** 3.8KB SVG.
  ```bash
  svgo --precision=1 --multipass calligraphy.svg
  ```
* **Page Consumption:**
  Scrubbed dynamically using CSS `animation-timeline: view()` or WAAPI on scroll.
* **Risk:** High anchor-point density causing SVG path parsing delay; resolved by applying Douglas-Peucker curve simplification during SVGO pass.

---

### 7. Sprite Sheet & Rig for Companion Character
* **Input:** Film pipeline 2D character rig rendered across 4 behavioral loops (Idle 4f, Walk 6f, Alert 2f, Sleep 4f).
* **Output Artifact:** Compact 16-frame horizontal spritesheet (`companion-sheet.webp`, 384x48px).
* **Byte Budget:** 12.2KB.
  ```bash
  montage frame_*.png -tile 16x1 -geometry 48x48+0+0 -background none companion-sheet.png
  cwebp -lossless companion-sheet.png -o companion-sheet.webp
  ```
* **Page Consumption:**
  Bound to CSS `steps()` animations controlled by page scroll and idle state data attributes.
* **Risk:** Blurry interpolation on non-integer device pixel ratios; resolved with `image-rendering: pixelated;`.

---

### 8. Interactive Depth-Map Displacement Hero
* **Input:** Film pipeline 3D render pass outputting an RGB hero illustration and a normalized 8-bit greyscale depth pass.
* **Output Artifact:** Two aligned WebP files:
  * Color pass (`hero-color.webp`): 72KB
  * Depth map (`hero-depth.webp`): 22KB
* **Byte Budget:** Total 94KB.
* **Page Consumption:**
  Consumed by a 1.2KB WebGL fragment shader displacing the color texture UVs along the pointer delta vector scaled by the depth channel.
* **Risk:** WebGL context exhaustion on low-memory mobile devices; fallback instantly renders `hero-color.webp` as a standard `<img>`.

## 4. Performance and accessibility budget
### Target Budgets for Expressive Static Pages

A strict budget designed for high visual expressiveness, instant load times, and flawless mobile interaction.

| Metric / Aspect | Hard Budget Ceiling | Recommended Target | Engineering Rationale |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | 2.0s (Mobile 4G) | **< 1.2s** | Prevents visitor drop-off; hero image or video poster must paint instantly. |
| **INP (Interaction to Next Paint)** | 150ms | **< 60ms** | Keeps tab switches, modal opens, and filters feeling immediate and tactile. |
| **CLS (Cumulative Layout Shift)** | 0.05 | **0.00** | Zero layout shifts during font swap, hero load, or canvas mounting. |
| **Total First-Load JavaScript** | 30KB (gzipped) | **< 15KB** | Keeps main thread parsing cost under 30ms on low-end mobile CPUs. |
| **Total Media Assets (Hero + UI)**| 1.5MB | **< 850KB** | Ensures rapid initial load even on throttled 4G connections. |
| **GPU Texture VRAM Consumption**| 60MB | **< 35MB** | Protects against mobile browser canvas context loss and tab eviction. |
| **Main-Thread Long Tasks (>50ms)**| 0 tasks | **0 tasks** | All intensive physics or audio generation offloaded or chunked under 16ms. |

---

### Local Verification Tooling (Zero Paid Services)

1. **Local Automated Performance Measurement:**
   * Run Lighthouse CLI locally headlessly against production static builds:
     ```bash
     npx lighthouse http://localhost:8080 --only-categories=performance,accessibility --preset=desktop --chrome-flags="--headless"
     ```
   * Measure Core Web Vitals directly in development via vanilla JS logger:
     ```javascript
     import { onLCP, onINP, onCLS } from 'web-vitals';
     onLCP(console.table); onINP(console.table); onCLS(console.table);
     ```

2. **CPU and Network Throttling Profiles:**
   * DevTools Performance tab set to **4x CPU Slowdown** and **Fast 4G**.
   * Mobile emulation locked to **390x844 (iPhone 14 / modern Android)** viewport.

3. **GPU Memory and Layer Inspection:**
   * Open `chrome://gpu` to verify hardware acceleration status.
   * Enable DevTools **Rendering -> Layer Borders** and **Rendering -> Frame Rendering Stats** to verify zero forced synchronous layouts and inspect composited layer bounds.

---

### Comprehensive Compliance Checklist

#### 1. `prefers-reduced-motion: reduce`
* [ ] Background looping video `<video>` elements paused automatically or replaced with static poster.
* [ ] Canvas particle counts dropped to 0 or animated velocity set to 0.
* [ ] CSS View Transitions duration set to `0.01ms` (or instant snap).
* [ ] Parallax transforms and 2.5D tilt listeners detached.

#### 2. `prefers-reduced-data: reduce` & `navigator.connection.saveData`
* [ ] Autoplaying hero videos suppressed completely; static AVIF poster rendered.
* [ ] High-DPI 2x/3x image sources replaced with standard 1x compressed variants.
* [ ] Heavy WebGL canvas simulations disabled in favor of static SVG/CSS grounds.

#### 3. Page Lifecycle & Visibility API (`document.visibilityState`)
* [ ] `requestAnimationFrame` loops canceled immediately when `document.hidden === true`.
* [ ] WebAudio `AudioContext` suspended when tab is backgrounded.
* [ ] Video elements `.pause()` called on tab hide and `.play()` resumed on tab show.

#### 4. Viewport Intersection Throttling (`IntersectionObserver`)
* [ ] All canvas renderers (petals, WebGL reveals, companion character) observe their container and halt RAF when out of viewport.
* [ ] Offscreen canvas elements have dimensions clamped to 1x1 when inactive.

#### 5. No-JS Baseline
* [ ] Semantic HTML is 100% readable, structured, and styled with zero JavaScript enabled.
* [ ] Navigation links function as pure MPA transitions.
* [ ] Japanese typography and palette CSS variables apply immediately from static stylesheet.

## 5. Eight-week learning path
### Overview

An 8-week structured roadmap taking our design studio from vanilla JS, CSS variables, and basic Canvas 2D to confident shader programming, scroll-driven motion, and film pipeline asset pipelines.

---

### Week 1: Modern CSS Foundation & Declarative Architecture
* **What to Build:** A zero-JS editorial footnote tooltip card and palette switcher using native Popover API, CSS Anchor Positioning, and `@starting-style`.
* **Reading & Study:**
  * [MDN: CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning)
  * [web.dev: `@property` Baseline](https://web.dev/baseline/2024/property)
  * [Open UI: Invoker Commands Explainer](https://open-ui.org/components/invokers.explainer/)
* **Pass/Fail Criterion:** Footnote card anchors precisely to clicked text across desktop and mobile; closes on Escape or light dismiss; 0 lines of JavaScript; LCP impact 0ms.

---

### Week 2: Native Scroll-Driven Animations & Variable Typography
* **What to Build:** A scroll-driven Japanese reading experience where variable font weight (`wght`), width (`wdth`), and letter-spacing scrub smoothly with scroll progress using pure CSS `animation-timeline`.
* **Reading & Study:**
  * [Chrome Dev: Scroll-Driven Animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
  * [scroll-driven-animations.style (Bramus demos)](https://scroll-driven-animations.style/)
  * [W3C: CSS Values and Units Module Level 5 (sibling-index)](https://drafts.csswg.org/css-values-5/#sibling-index)
* **Pass/Fail Criterion:** Maintains 60fps on 4x CPU throttle; zero main-thread scroll event listeners; degrades cleanly to static typography in Firefox without CSS errors.

---

### Week 3: Advanced Cross-Document View Transitions
* **What to Build:** A multi-page static editorial website with seamless shared-element card-to-hero expansion across page navigations using `@view-transition` Level 2 classes and types.
* **Reading & Study:**
  * [Chrome Dev: Cross-Document View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document)
  * [W3C: CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/)
* **Pass/Fail Criterion:** Forward and back navigation triggers directional animations without white flash; non-supporting browsers navigate instantly with zero layout shift (CLS < 0.01).

---

### Week 4: Precision 2D Canvas & Lifecycle-Throttled Particle Systems
* **What to Build:** An ambient Sakura petal drift system utilizing pre-allocated typed arrays, wind turbulence math, and strict IntersectionObserver/Page Visibility throttling.
* **Reading & Study:**
  * [MDN: Optimizing Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
  * [MDN: Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
* **Pass/Fail Criterion:** Particle count stays locked at 60fps; 0 garbage collection pauses over a 2-minute trace; RAF drops to exactly 0 calls/second when scrolled past.

---

### Week 5: Raw WebGL2 Fundamentals & Fullscreen Noise Reveal
* **What to Build:** A single fullscreen WebGL2 background canvas rendering an interactive noise-dissolve card image reveal with zero external libraries.
* **Reading & Study:**
  * [WebGL2 Fundamentals](https://webgl2fundamentals.org/)
  * [The Book of Shaders: Algorithmic Drawing](https://thebookofshaders.com/)
* **Pass/Fail Criterion:** Pure vanilla JS and GLSL totaling under 3KB; compiles and renders cleanly on mobile GPU; falls back to static `<img>` if context creation fails.

---

### Week 6: Depth Maps & 2.5D Parallax Illusions
* **What to Build:** An interactive Japanese "kirie" (paper-cut) illustration card with layered depth cutouts and an interactive WebGL depth-map displacement pass driven by pointer motion.
* **Reading & Study:**
  * [Codrops: Fake 3D Image Effect with WebGL](https://tympanus.net/codrops/2019/02/20/how-to-create-a-fake-3d-image-effect-with-webgl/)
  * [WebGL2 2D Matrices & Transforms](https://webgl2fundamentals.org/webgl/lessons/webgl-2d-matrices.html)
* **Pass/Fail Criterion:** GPU memory consumption under 25MB; responds smoothly to touch with dampening; immediately disables tilt under `prefers-reduced-motion`.

---

### Week 7: WebAudio Tactile Sound Design & AudioWorklet Synchronization
* **What to Build:** A sound-designed interactive album preview with procedural resonant UI click synthesis, rhythmic visual pulses driven by audio analysis JSON, and a master mute toggle.
* **Reading & Study:**
  * [MDN: Web Audio API Concepts](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
  * [MDN: AudioWorkletNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode)
* **Pass/Fail Criterion:** Zero AudioContext console warnings on load; audio only initializes on explicit user click; sound halts instantly on tab switch; muted state persists across visits.

---

### Week 8: Film pipeline Bridge Integration & Live Deterministic Module
* **What to Build:** A complete static event page integrating a film pipeline-rendered AV1 looping hero background, an audio-feature-driven CSS pulsating hero, and a live deterministic Canvas/WebGL frame module.
* **Reading & Study:**
  * [FFmpeg AV1 Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/AV1)
  * [MDN: Video Codecs and Web Video Optimization](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs)
* **Pass/Fail Criterion:** Total page JavaScript < 25KB gzipped; total media assets < 1MB; achieves Lighthouse 100/100/100/100 on Mobile 4G profile.

## 6. Uncertainties reported by the delegate
### Unconfirmed Support Details and Technical Risks as of October 2026

1. **Firefox Cross-Document View Transitions Default Shipping Date:**
   * While same-document View Transitions are stable in Firefox 144+, cross-document multi-page transitions remain behind preference flags (`dom.viewTransitions.enabled`) in release builds as of Q4 2026. The progressive enhancement architecture guarantees no degradation, but cross-document morphing remains Chromium/Safari-only out-of-the-box.

2. **CSS `if()` and `@mixin` Cross-Browser Standardization:**
   * Chrome 137 introduced prototype support for CSS inline `if()`, but Safari and Firefox have not published shipping timelines. Production code must not rely on `if()` in production stylesheets; use CSS variable fallbacks and `@supports`.

3. **`corner-shape: superellipse` Engine Adoption:**
   * Chromium 139 supports `corner-shape`, but WebKit and Gecko have not prioritized implementation. Squircles must always be declared alongside standard `border-radius`.

4. **Hardware AV1 Decoding Variance on Low-End Mobile Devices:**
   * Low-tier mobile Android devices lack hardware AV1 decoders, relying on software decoding via dav1d, which increases battery drain by ~15-20%. Providing a secondary VP9 WebM fallback ensures hardware-accelerated playback across budget mobile chipsets.




