# Raw delegate report: Grok, advanced web effects (October 2026)

Superseded by the cross-validated synthesis in [research-effects-2026-10.md](research-effects-2026-10.md); read that first.

Research date: 2026-10-14. Source: sealed advisory delegation to `grok:default` (`grok-4.7`), the second half of a pair with
[the Antigravity report](research-effects-2026-10-agy.md) on the same task file.

**Do not trust the sources it cites.** The result reports `provider_turns: 1`, about 15k input tokens and no tool activity, while
its checks claim it fetched around eighteen MDN and vendor pages. By ATD's own rule a single-turn result ran no hosted tool, so this
is recall. Against MDN `browser-compat-data` 8.1.5 (2026-10-08) about ten support cells in the table below are wrong, including a
claim that `if()` is Baseline and shipped in Safari and Firefox; it is Chrome-only and experimental. Its "under 4,000 words"
check is also false (about 5,100 words, counting code). The film pipeline bridge and the budgets are the useful parts. Nothing was measured.

---
## 1. Platform capability table
Status is Baseline / vendor-documented as of 2026-10-14. “Use it?” assumes Cloudflare Pages, no-JS reading, and `prefers-reduced-motion`. Sources are listed once per row; older-than-2025 specs are flagged.

| Feature | Enables | Chrome / Safari / Firefox (2026-10) | Fallback | Use it on our sites? |
|---|---|---|---|---|
| Scroll-driven animations (`animation-timeline`, `view()`, `scroll()`) | Scrubbed type, progress bars, reveal-on-scroll without JS scroll listeners | Chrome 115+. Safari 26 (announced Jun 2025, shipping in the 26 train). Firefox 115+ behind a flag only — still not default in late 2025 Firefox 145 notes. Sources: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations ; https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/ ; https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/145 | IntersectionObserver class toggle, or a static end state | Yes for decoration. Do not hide content behind a scroll keyframe. Feature-detect `CSS.supports("animation-timeline: scroll()")`. |
| Cross-document View Transitions | Shared-element page changes (photo continues, type swaps) | Same-document: Baseline. Cross-document (`@view-transition { navigation: auto }`): Chrome 126+, Safari 18.2+, Firefox 144 (2026-03-24, still marked limited on MDN). Types: `types` descriptor + `:active-view-transition-type()` in Chrome 125, Safari 18.2, Firefox 144. Nested groups: `view-transition-name: match-element` Chrome 148, Safari 26.2, Firefox behind a flag. Scoped (`view-transition-scope`): Chrome 148 only, experimental. Sources: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API ; https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using_types ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/view-transition-name ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/view-transition-scope ; https://groups.google.com/a/chromium.org/g/blink-dev/c/qLt0Wwc8DsQ/m/rKq4T9jaAwAJ | Instant navigation. Keep the no-JS page identical | Yes. Extend sura’s slash wipe with one shared photo (`view-transition-name`) and an opt-in type. Skip scoped/nested until Firefox. |
| `@property` | Typed custom props that interpolate (angles, colours, numbers) | Baseline Newly available 2024-07-09: Chrome 85, Safari 16.4, Firefox 128. Source: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property | Set the final custom property; no interpolation | Yes. This is the cheapest “motion system” we already almost have (CSS variables). |
| CSS anchor positioning | Tooltips, captions, and companion bubbles glued to a target | Baseline Newly available 2026-02-18: Chrome 125, Firefox 147, Safari 26. Source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning | Absolute positioning, or no popover | Yes for captions and the companion’s speech bubble. Provide a static fallback position. |
| Popover, `<dialog>`, invoker commands | Lightboxes and “A Petal for Today” without a JS modal library | Popover Baseline 2025-01-27 (Chrome 114, Firefox 125, Safari 17). Dialog showModal Baseline 2022-03-29. Invoker commands (`command`/`commandfor`, `show-popover`): Baseline Newly available 2026-06-09 — Chrome 135, Firefox 135, Safari 26.2. Sources: https://developer.mozilla.org/en-US/docs/Web/API/Popover_API ; https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API ; https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button | `<details>` or a normal link to the full content | Yes. Invokers remove the last JS from simple lightboxes. Keep a real URL for no-JS. |
| `@starting-style` | Entry transitions for popovers, dialogs, and elements added to the DOM | Baseline Newly available 2024-08-08: Chrome 117, Firefox 129, Safari 17.5. Source: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style | Appear immediately | Yes, paired with popover. Respect reduced motion by setting duration to 0.01s. |
| CSS `if()`, `sibling-index()` / `sibling-count()`, `@function`, mixins | Branch styles and staggered children without JS; reusable style functions | `if()` and `sibling-index()`/`sibling-count()`: Baseline Newly available 2026-05-19 (Chrome 137, Firefox 147, Safari 26.2). `@function`: Chrome 139, Safari 26, no Firefox — not Baseline. CSS mixins: spec only (csswg-drafts, Jul 2026), no browser. Sources: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-index ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@function ; https://drafts.csswg.org/css-mixins/ | `:nth-child` stagger; duplicate declarations | Use `if()` and `sibling-index()` now. Do not require `@function` or mixins. |
| `corner-shape` / superellipse | Squircle cards and petal-like corners | Chrome 139+. Safari 26 behind a flag only (WWDC25: “start testing”). Firefox: not shipping; MDN still marks the property limited. Sources: https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/ ; https://developer.chrome.com/blog/new-in-chrome-139 ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape | `border-radius` | No as a requirement. A 8–16px radius is the design; superellipse is a Chrome enhancement. |
| `text-wrap: balance` / `pretty` | Even headings (`balance`); fewer orphans (`pretty`) | `balance`: Baseline 2024-05-14 (Chrome 114, Firefox 121, Safari 17.5). `pretty`: Baseline Newly available 2025-11-11 (Chrome 117, Firefox 145, Safari 26). Sources: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap | Default wrap | Yes. `balance` on h1 only (performance note in MDN: a few lines). `pretty` on deck copy. |
| `font-variant-east-asian: proportional-width` / `font-feature-settings: "palt"` | Tighter Japanese headings without tracking hacks | Long-standing OpenType; shipping wherever the font has `palt`. MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-east-asian . Safari 18.4 fixed `palt` inside variable-font `font-variation-settings` (older bug, flagged): https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ | Full-width glyphs, which is an acceptable Japanese default | Yes, only on fonts whose license and tables include `palt`. Record provenance. Do not synthetic-condense CJK. |
| WebGPU vs WebGL2 | GPU particles, distortion, film-identical shaders | WebGL2: universal on our targets (Chrome, Firefox, Safari 15+). WebGPU: Baseline Newly available 2026-05-19 — Chrome 113 (Windows; Mac announced later), Firefox 147 (Windows), Safari 26 (all). Sources: https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API ; https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/ | WebGL2, then a static poster | Ship WebGL2. Offer WebGPU only as a same-scene upgrade. A hero must still have a poster image. |
| OffscreenCanvas + worker | Particles and film frames off the main thread | Baseline Widely available: Chrome 69, Firefox 105, Safari 16.4 (main + worker). Source: https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas | Main-thread Canvas 2D with a hard particle cap, or no canvas | Yes for the particle field and the film pipeline live module. Feature-detect and skip on failure. |
| Web Animations API | JS-driven playback you can pause, reverse, and cancel | Baseline Widely available (Chrome 84, Firefox 75, Safari 13.1). Scroll-timeline linkage is the same partial story as CSS scroll timelines. Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API | CSS transitions / no motion | Yes to pause particles and the companion on `document.hidden`. Prefer CSS for anything declarative. |
| Web Audio + AudioWorklet | Designed UI sound; optional mic/file-reactive motion | Both Baseline Widely available. AudioWorklet: Chrome 66, Firefox 76, Safari 14.5. Source: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet . Autoplay policy (gesture required): https://developer.chrome.com/blog/autoplay | Silent page. Never autoplay. Persist mute in `localStorage` | Yes for opt-in SFX (tokyo-game-show). No ambient bed on first paint. |
| Houdini Paint API (`CSS.paintWorklet`) | Procedural borders, grain, and paper in CSS | Chrome and Edge only. Not in Firefox or Safari; still not on the W3C standards track (MDN, reviewed 2026-09-02). Source: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API | Pre-rendered PNG/SVG grain from film pipeline | No. Bake the texture. A worklet is an optional Chrome flourish, not the design. |

Practical stack for hitohira-hana / sura / TGS-like sites: `@property` + `text-wrap` + popover/invoker + cross-document view transitions + scroll-driven CSS where supported + one WebGL2 canvas. Everything else is enhancement.

## 2. Effect recipes
Skeletons are original, minimal, and meant to be rewritten. Costs assume a 390px phone and a desktop with an integrated GPU.

### (a) Shader image reveal — one full-page canvas
Visitor sees a photograph settle out of a paper-fibre warp as the page opens, then the canvas stops.
Stack: one `<canvas>` fixed behind the hero, WebGL2 fragment shader, poster `<img>` underneath.
```html
<img id="poster" src="hero.avif" alt="" width="1600" height="900">
<canvas id="reveal" hidden></canvas>
```
```js
const gl = canvas.getContext("webgl2", {antialias:false, alpha:true});
if (!gl) return;
const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, `attribute vec2 a; varying vec2 v; void main(){v=a*0.5+0.5; gl_Position=vec4(a,0,1);}`);
gl.compileShader(vs);
const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, `precision highp float; varying vec2 v; uniform sampler2D u;
uniform float t; void main(){ vec2 d=v-0.5; float n=sin(v.y*40.0+t*6.28318)*0.012*(1.0-t);
vec4 c=texture2D(u, v+d*n); c.a*=smoothstep(0.0,0.15,t); gl_FragColor=c; }`);
gl.compileShader(fs);
const p=gl.createProgram(); gl.attachShader(p,vs); gl.attachShader(p,fs); gl.linkProgram(p); gl.useProgram(p);
const b=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,b);
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
const a=gl.getAttribLocation(p,"a"); gl.enableVertexAttribArray(a);
gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
let t0; function frame(now){ if(!t0)t0=now; const t=Math.min(1,(now-t0)/900);
  gl.uniform1f(gl.getUniformLocation(p,"t"), t); gl.drawArrays(gl.TRIANGLES,0,3);
  if(t<1) requestAnimationFrame(frame); else canvas.remove(); }
requestAnimationFrame(frame);
```
Cost: one RGBA texture (hero pixels × 4), one program, ~1s of GPU, then the canvas is removed. JS ~1KB. Main thread: upload once.
Fallback: poster is the content; reduced-motion and no-JS never start the canvas.
A11y: `alt` lives on the poster. Canvas is `aria-hidden`. Do not put text only inside the shader.

Per-card canvases multiply texture memory. Prefer one shared canvas, or bake the reveal as a short film pipeline loop (recipe bridge 1).

### (b) Paper / grain / watercolour with zero runtime
Visitor sees ink paper that does not animate.
Stack: film pipeline Canvas 2D frame exported as tiled PNG/WebP; CSS only.
```css
body {
  background-color: #f4efe6;
  background-image: url("/grain.webp");
  background-size: 280px 280px;
}
@media (prefers-reduced-data: reduce), (prefers-contrast: more) {
  body { background-image: none; }
}
```
Cost: one 280² tile, target under 20KB. No main thread, no GPU, no JS.
Fallback: flat paper colour, which is the real design.
A11y: grain contrast must leave body text at 4.5:1 on the flat colour alone. Do not animate `background-position`.

### (c) Scroll-driven variable type
Visitor sees a Japanese display face settle from a slightly wide, light drawing to its reading weight as the title enters.
Stack: `@property`, `@font-face` with `font-weight` / `font-stretch` range, `animation-timeline: view()`.
```css
@property --wg { syntax: "<number>"; inherits: false; initial-value: 300; }
@font-face {
  font-family: "Display";
  src: url("/fonts/display.woff2") format("woff2");
  font-weight: 300 700; font-display: swap;
}
h1 {
  font-family: "Display", serif;
  font-weight: var(--wg);
  font-variant-east-asian: proportional-width;
  animation: settle linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 80%;
}
@keyframes settle { from { --wg: 300; letter-spacing: 0.04em; } to { --wg: 560; letter-spacing: 0; } }
@media (prefers-reduced-motion: reduce) { h1 { animation: none; --wg: 560; } }
```
Cost: the font file is the cost (subset; budget 80KB). No JS. Compositor-friendly if only custom props and opacity change. `letter-spacing` can force layout; drop it if it janked.
Fallback: Firefox without the flag shows the final weight. No-JS is the same CSS.
A11y: the readable weight is the end state, not the thin start. Do not scale type so large it overflows at 390px.

### (d) Cross-page shared element, more than a wipe
Visitor sees the index “cut” photograph travel into the article hero while a paper wash covers the rest. Extends sura’s existing slash wipe.
Stack: cross-document view transitions, `view-transition-name`, `view-transition-class`, types.
```css
@view-transition { navigation: auto; }
.cut img { view-transition-name: shot; view-transition-class: photo; }
::view-transition-old(root) { animation: none; opacity: 0; }
::view-transition-new(root) {
  clip-path: inset(0 0 0 0);
  animation: wash 400ms ease both;
}
@keyframes wash { from { clip-path: inset(0 100% 0 0); } }
::view-transition-group(shot) { animation-duration: 500ms; }
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) {
    animation-duration: 0.01s !important;
  }
}
```
```js
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[data-vt]");
  if (!a || !document.startViewTransition) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
});
```
Navigation stays a normal `<a href>`. Script is optional. MPA: the browser runs the transition when both documents opt in (Chrome 126+, Safari 18.2+, Firefox 144+).
Cost: no extra bytes beyond CSS. Main thread during the snapshot; keep pages light so the snapshot is fast.
Fallback: instant load. No-JS still navigates.
A11y: do not transition on every link if the user asked for reduced motion. Respect modifier keys so new-tab still works. Focus must land on the new h1 (`<h1 tabindex="-1">` after load is a separate, small script — skip it for no-JS and the heading is still in the DOM).

### (e) Petals / stars / rain under a frame budget
Visitor sees a few petals drift and then rest. Offscreen, nothing runs.
Stack: one Canvas 2D (or OffscreenCanvas), pooled sprites, `IntersectionObserver`, Page Visibility, instanced draw if WebGL.
```js
const N = 24;
const pool = Array.from({length: N}, () => ({x: Math.random(), y: Math.random(), v: 0.15+Math.random()*0.3}));
let on = false, raf = 0;
const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; on ? loop() : cancelAnimationFrame(raf); });
io.observe(canvas);
document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(raf); else if (on) loop(); });
function loop(){
  const c = canvas.getContext("2d");
  c.clearRect(0,0,canvas.width,canvas.height);
  for (const p of pool){
    p.y = (p.y + p.v/60) % 1;
    c.fillRect(p.x*canvas.width, p.y*canvas.height, 3, 5);
  }
  raf = requestAnimationFrame(loop);
}
```
Budget: ≤48 sprites, one 64×64 atlas, pause when the block is offscreen or the tab is hidden. If a frame time (via `performance.now` delta) exceeds 20ms for 10 frames, halve N permanently for the visit.
Cost: ~0.2ms/frame at N=24 on a low phone if the canvas is small (e.g. 480×640 backing store, not devicePixelRatio 3 on a full page). Cap `devicePixelRatio` at 1.5.
Fallback: reduced-motion → paint 6 static petals in CSS. No-JS → those same petals are in the HTML as inline SVG.
A11y: `aria-hidden="true"`. Pointer-events none. Never convey status only by particle density.

### (f) Cursor and touch lighting
Visitor sees a warm pool of light follow the pointer across paper; on touch, the pool sits where the finger last rested.
Stack: CSS custom props, one listener, `light-dark` not required.
```css
.stage { background:
  radial-gradient(420px circle at var(--lx, 50%) var(--ly, 30%), #fff6, transparent 60%),
  #1c1915; }
@media (hover: none) { .stage { --lx: 50%; --ly: 40%; } }
```
```js
const root = document.querySelector(".stage");
function set(x, y){
  const r = root.getBoundingClientRect();
  root.style.setProperty("--lx", ((x-r.left)/r.width*100).toFixed(1)+"%");
  root.style.setProperty("--ly", ((y-r.top)/r.height*100).toFixed(1)+"%");
}
root.addEventListener("pointermove", (e) => set(e.clientX, e.clientY), {passive:true});
```
Cost: one composited gradient. Avoid `mousemove` plus layout reads every event — the rect can be cached on `ResizeObserver`.
Fallback: a fixed gradient (the CSS initial values). Reduced-motion: keep the light static. No-JS: static.
A11y: the light is decoration. Text contrast is measured against the darkest paper, not the lit spot. `:focus-visible` outlines stay outside the effect.

### (g) SVG handwriting draw-on
Visitor sees a short caption stroke itself once, then stay as real text (the SVG is decorative).
Stack: SVG `pathLength="1"`, CSS `stroke-dashoffset`, triggered by a view timeline or a class.
```html
<p>今日の一枚</p>
<svg viewBox="0 0 200 40" aria-hidden="true">
  <path pathLength="1" d="M5 25 C 40 5, 70 40, 110 20 S 180 10, 195 22"/>
</svg>
```
```css
svg path {
  fill: none; stroke: currentColor; stroke-width: 2;
  stroke-dasharray: 1; stroke-dashoffset: 1;
  animation: ink 1.2s ease forwards;
}
@keyframes ink { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) { svg path { animation: none; stroke-dashoffset: 0; } }
```
The readable caption is the `<p>`, not the path. film pipeline’s handwriting captions can export the path once.
Cost: one path, no JS, no font. GPU/paint is trivial.
A11y: do not put the only copy inside SVG paths. Reduced motion shows the finished stroke.

### (h) Sound-designed UI
Visitor hears a single soft tick when they opt in, then petals can pulse on a precomputed envelope. Nothing plays on load.
Stack: Web Audio, one gesture, persisted mute, no mic.
```js
let ctx, muted = localStorage.getItem("mute") !== "0";
async function arm(){
  if (muted) return;
  ctx = ctx || new AudioContext();
  if (ctx.state === "suspended") await ctx.resume();
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.value = 660; g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime+0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.18);
  o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime+0.2);
}
document.querySelector("#sound").addEventListener("click", async () => {
  muted = !muted; localStorage.setItem("mute", muted ? "1" : "0");
  if (!muted) await arm();
});
```
Drive motion from film pipeline JSON, not a live analyser: `document.documentElement.style.setProperty("--hit", features[i].rms)`.
Cost: silence is 0 bytes. One-shot oscillators are free. Do not ship a music bed.
Fallback: the button’s label is the feature (“Sound off”). No-JS: no audio, page unchanged.
A11y: default muted. Visible pressed state. Never gate content on sound. Honor reduced-motion independently of mute (sound and motion are separate preferences).

### (i) Depth from a 2D cut-out
Visitor moves the pointer slightly and the inked layers shear like a paper theatre (kirie).
Stack: 3–5 PNG layers from film pipeline’s paper-cut toolkit, CSS transforms, optional depth-map displacement in the (a) shader.
```css
.layer { position: absolute; inset: 0; transition: transform 200ms linear; }
.stage { --dx: 0; --dy: 0; }
.l1 { transform: translate3d(calc(var(--dx)*6px), calc(var(--dy)*4px), 0); }
.l2 { transform: translate3d(calc(var(--dx)*-8px), calc(var(--dy)*-5px), 0); }
@media (prefers-reduced-motion: reduce) {
  .layer { transform: none; transition: none; }
}
```
```js
stage.addEventListener("pointermove", (e) => {
  const r = stage.getBoundingClientRect();
  stage.style.setProperty("--dx", ((e.clientX-r.left)/r.width-0.5).toFixed(3));
  stage.style.setProperty("--dy", ((e.clientY-r.top)/r.height-0.5).toFixed(3));
}, {passive:true});
```
Cost: 4 WebP layers, budget 120KB total, `translate3d` only. A depth-map shader is optional and should be one texture, not five canvases.
Fallback: the flattened composite image (the “complete photograph” in sura’s three image forms).
A11y: parallax amplitude stays under ~12px so it does not cause vestibular issues; reduced-motion kills it. Do not bind it to device orientation (permission and motion sickness).

### (j) Scroll-and-idle companion
Visitor sees a small character walk a few frames while the page scrolls and blink when idle.
Stack: sprite sheet (film pipeline rig baked), WAAPI or CSS steps, scroll position sampled sparingly, anchor positioning for an optional bubble.
```css
.cat {
  width: 64px; height: 64px;
  background: url("/cat.webp") 0 0 / 400% 100%;
  animation: idle 1.2s steps(2) infinite;
}
.cat[data-move="1"] { animation: walk 0.6s steps(4) infinite; }
@keyframes idle { to { background-position: -128px 0; } }
@keyframes walk { to { background-position: -256px 0; } }
@media (prefers-reduced-motion: reduce) {
  .cat { animation: none; background-position: 0 0; }
}
```
```js
let last = scrollY, t = 0;
addEventListener("scroll", () => {
  const now = performance.now();
  if (now - t < 100) return;
  cat.dataset.move = Math.abs(scrollY-last) > 2 ? "1" : "0";
  last = scrollY; t = now;
}, {passive:true});
```
Cost: one 256×64 sheet, target under 30KB. Scroll handler is throttled to 10Hz and only flips an attribute.
Fallback: a single still frame in HTML. No-JS shows the still. Reduced-motion shows the still.
A11y: decorative (`alt=""` / `aria-hidden`). If the companion speaks a tip, that tip is real text in the bubble, not implied by the pose. Give the bubble an anchor fallback position.

## 3. film pipeline bridge
film pipeline’s contract (frames are pure functions of frame index; Canvas 2D and WebGL behind one FrameSource; seeded RNG) is what makes these safe to bake. All encodes are local ffmpeg. No paid services. Byte budgets are for one asset on a page that may carry several.

### 1. Hero loop
Input: a 4-second film pipeline scene at 24fps, 960×540, one accent, holds included.
Output: `hero.av1.webm`, `hero.h264.mp4`, `hero-poster.avif`.
Encode:
`ffmpeg -r 24 -i frame_%04d.png -c:v libsvtav1 -crf 40 -pix_fmt yuv420p -an hero.av1.webm`
`ffmpeg -r 24 -i frame_%04d.png -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart -an hero.mp4`
Poster: one held frame as AVIF, q≈40.
Budget: AV1 ≤ 400KB, MP4 ≤ 900KB, poster ≤ 40KB. If the AV1 exceeds 400KB, shorten the shot; do not raise quality.
Page:
```html
<video autoplay muted loop playsinline poster="hero-poster.avif" width="960" height="540">
  <source src="hero.av1.webm" type="video/webm">
  <source src="hero.mp4" type="video/mp4">
</video>
```
```css
@media (prefers-reduced-motion: reduce), (prefers-reduced-data: reduce) {
  video { display: none; }
  video + .poster { display: block; }
}
```
Also treat `navigator.connection.saveData` as reduced-data (JS). Risk: autoplay is allowed only because the video is muted and has no audio track; a “helpful” soundtrack breaks autoplay and the budget. Two files is the compatibility cost — do not add a third codec.

### 2. Painted still / watercolour ground
Input: film pipeline watercolour toolkit, one frame, seed fixed in the filename (`paper-014.webp`).
Output: 280×280 tile, WebP lossless or quality 70.
Encode: `ffmpeg -i paper.png -c:v libwebp -q:v 70 paper.webp` (or `cwebp`).
Budget: ≤ 20KB.
Page: CSS `background-repeat`. Risk: a unique full-viewport paint looks richer and costs 10×; tile it. Record the seed so a later regenerate matches.

### 3. Paper-cut depth layers
Input: kirie / paper-cut lightbox scene, 4 layers plus a flat composite.
Output: `layer-1.webp` … `layer-4.webp`, `flat.avif`, optional `depth.png` (R channel = layer index).
Budget: ≤ 40KB per layer, ≤ 50KB flat, depth PNG ≤ 30KB (8-bit, no alpha).
Page: recipe (i). Risk: mismatched crop between layers breaks the illusion; export them from one frame size. Depth PNG is only worth it if recipe (a) is already on the page.

### 4. Live module whose pixels match the film
Input: the WebGL FrameSource for a scene that is already a pure function `render(frameIndex, seed)`.
Output: a hand-ported ES module, not a Node bundle. Same seed, same frame size, same shader source the film used. Target ≤ 8KB minified gzip of scene code, plus no three.js.
Page:
```js
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fps = 12;
function tick(now){
  if (document.hidden) return;
  const frame = reduce ? 0 : Math.floor(now/1000 * fps) % 48;
  render(frame, 14);
  requestAnimationFrame(tick);
}
```
Verify: render frame 0 and frame 24 in Node and in the browser; compare downscaled pixels (allow ≤ 2/255 per channel for GPU filtering). Risk: this is the one path that can blow the JS budget and diverge silently. Keep it to a single small scene. If the port cannot match, ship path 1 instead. Do not import the Node Canvas renderer into the page.

### 5. Sprite sheet for the companion
Input: film pipeline character rig, 4 walk frames + 2 idle frames, 64×64, transparent.
Output: `cat.webp` 256×64 (or 384×64).
Encode: colour-quantized WebP, `cwebp -q 75 -m 6`. Budget ≤ 30KB.
Page: recipe (j), `background-size: 400% 100%` for 4 frames. Risk: premultiplied alpha halos on paper backgrounds; composite against the paper colour in film pipeline before export.

### 6. Handwriting path
Input: film pipeline handwriting caption for one short phrase.
Output: an SVG `<path d>` with `pathLength="1"`, plus the same phrase as HTML text. Budget ≤ 4KB.
Page: recipe (g). Risk: the path is not the accessible name. Do not convert long body copy to paths.

### 7. Audio-feature JSON → CSS variables
Input: film pipeline audio analysis of a short opt-in sting or a silent “hit track” (RMS, onset booleans, ~12Hz, 8 seconds).
Output: `hits.json`, e.g. `{"fps":12,"rms":[0.1,0.4,...],"on":[0,0,1,0,...]}`. Budget ≤ 8KB.
Page:
```js
const data = await fetch("/hits.json").then(r => r.json());
let i = 0;
function step(){
  if (muted || document.hidden) return;
  document.documentElement.style.setProperty("--rms", data.rms[i]);
  i = (i + 1) % data.rms.length;
  setTimeout(step, 1000/data.fps);
}
```
```css
.petal { transform: scale(calc(1 + var(--rms, 0) * 0.08)); }
```
The picture follows the music without decoding audio on the client. Risk: JSON that is longer than the gesture, or that plays before the click, feels like autoplay. Start `step()` only inside the unmute click. Reduced-motion: ignore `--rms`.

### 8. OG / share card and contact sheet
Input: one film pipeline frame at 1200×630, seed = slug. Also a contact sheet for our own review, not for the page.
Output: `og.png` (PNG or JPEG, because some scrapers still mishandle AVIF). Budget ≤ 200KB.
Page: `<meta property="og:image" content="https://example/og.png">`. Risk: dynamic generation on the request path needs a Pages Function and a font stack; prefer committing the PNG. Fan-site rule: the card must not imply endorsement by the person depicted. No third-party fonts fetched at share time.

Shared discipline: one seed per asset, written into the filename or a one-line manifest. Regenerating the site should not shuffle the hero.

## 4. Performance and accessibility budget
Targets for one expressive static page on a mid-range phone (4× CPU slowdown is the lab proxy). These are design budgets, tighter than the public Core Web Vitals “good” lines where the effect work would otherwise sprawl.

| Metric | Budget | How to measure locally, no paid service |
|---|---|---|
| LCP | ≤ 2.5s on Fast 3G / Slow 4G throttle; poster or HTML text is the LCP element, never a canvas | Chrome DevTools Performance + network throttle. `npx lighthouse <url> --only-categories=performance,accessibility` (local CLI, not a hosted account). |
| INP | ≤ 200ms at the 75th lab interaction (pointer to sound toggle, theme, search) | DevTools Interactions track, or Lighthouse experimental INP. Field INP needs real users; we do not add analytics to get it. |
| CLS | ≤ 0.1, target 0.01. Fonts use `size-adjust` / `ascent-override` and reserved image width/height | Lighthouse CLS, Layout Shift regions in Performance. |
| Total JS | ≤ 30KB gzip for a content page; ≤ 50KB gzip if a WebGL scene is present. Defer it. No framework | `gzip -c app.js | wc -c` or DevTools Network transferred bytes. |
| Image + video | ≤ 800KB for the initial viewport (poster + grain + type). Full-page media ≤ 1.5MB including the hero loop. Sprites and JSON extra, inside that cap | DevTools Network, filter Img/Media. |
| GPU memory | One hero texture ≤ 2048² RGBA (~16MB uncompressed). Cap `devicePixelRatio` at 1.5. Remove the reveal canvas when finished. No per-card WebGL | `chrome://gpu` is a sanity check; in-page, prefer fewer textures over a precise MB counter (no portable GPU-memory API). |
| Long tasks | No task > 50ms during idle. Particle setup < 16ms. Shader compile on first gesture or first frame, not inside the LCP window | Performance panel, “Long task”. |
| Fonts | Local files only, provenance noted. Subset. ≤ 120KB total woff2 | Network panel. `pyftsubset` / `glyphhanger` locally. |

WebGL2 versus a library: raw WebGL2 for recipes (a) and (e) stays inside 50KB. three.js (core build often ~150KB minified gzip before tree-shaking) does not fit this budget. OGL is about 10–15KB gzip and is justified only if we outgrow one fullscreen quad and still tree-shake unused cameras. regl is smaller but less maintained; do not adopt it for a new site in 2026 without a maintainer check. Default is no library.

### Compliance checklist
- `prefers-reduced-motion: reduce`: durations 0.01s, no shader loop, no particle RAF, companion on frame 0, video hidden, poster shown. Content identical.
- `prefers-reduced-data: reduce`: skip video, grain tile, and extra layers; flat colour + flat image.
- `navigator.connection.saveData === true`: same as reduced-data. Feature-detect; the API is absent on Safari, so absence means “do not assume save-data.”
- Page Visibility: cancel RAF and suspend `AudioContext` on `document.hidden`.
- IntersectionObserver: pause particles and the companion when offscreen.
- No-JS: HTML shows text, poster, static petals, and real links. Video has a poster. Popovers that require JS also have an `<a href>` to the same content.
- Keyboard: every control is a `<button>` or link. `:focus-visible` contrast ≥ 3:1. Lightbox is `<dialog>` or popover and closes on Escape (built-in).
- Motion and sound are separate. Mute defaults on. Unmute is a gesture. `AudioContext` is created inside that click.
- 390px: no effect may require hover. Touch lighting uses the last point or a static pool.
- Contrast is measured on the un-lit, un-grained colour. Grain is allowed to fail `prefers-contrast: more` by disappearing.
- Do not autoplay unmuted media. Hero video is `muted` and has no audio track.
- Provenance: font license and texture seed live in the repo README, not in a tracker.

## 5. Eight-week learning path
One shippable static page per week, on Cloudflare Pages or a local folder. Pass/fail is observable in the browser, including Firefox and Safari if we have them; otherwise mark that browser unverified rather than skipping the criterion.

**Week 1 — Typed motion we already almost have.** Build a single page whose accent colour and a heading weight interpolate with `@property` and a 400ms transition. Read https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property and https://web.dev/articles/at-property-css (2024; still the clearest tutorial — flagged older). Pass: Firefox and Chrome both animate the colour; with reduced motion the end state appears immediately. Fail: any JS is required.

**Week 2 — Shared element, sura plus one step.** Two HTML pages. The cut photograph is `view-transition-name: shot`. A paper wash is the root animation. Read https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API and https://developer.chrome.com/docs/web-platform/view-transitions/cross-document . Pass: in Chrome the photo moves continuously; with JS disabled the link still works; reduced motion is ≤ 0.01s. Fail: a fade of the whole page is the only motion.

**Week 3 — Scroll-driven type.** A display heading settles on the view timeline, with a static fallback. Read https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations and https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/ . Pass: Chrome or Safari 26 scrubs the weight; Firefox shows the final weight without a flash of invisible text. Fail: a scroll listener is used for this effect.

**Week 4 — Zero-runtime paper.** Export one film pipeline (or hand-painted) tile. Ship grain, `text-wrap: balance` on the h1, `pretty` on the deck, and `palt` only if the font has the feature. Read https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap and https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-east-asian . Pass: grain ≤ 20KB; turning it off leaves contrast ≥ 4.5:1. Fail: a canvas is used to draw noise.

**Week 5 — Pooled petals.** Canvas 2D, 24 sprites, pause offscreen and when hidden, static SVG fallback. Read https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API and https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API . Pass: DevTools shows no RAF when the block is scrolled away; long task on setup < 16ms. Fail: a library, or uncapped `devicePixelRatio`.

**Week 6 — One shader, then remove it.** Full-page WebGL2 reveal over a real `<img>` poster, canvas deleted at t=1. Read https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext and the WebGL2 difference note at https://webgl2fundamentals.org/webgl/lessons/webgl1-to-webgl2.html (older tutorial site, flagged; use it for the API delta only). Pass: LCP element is the poster; reduced motion never creates a context; page JS ≤ 50KB gzip. Fail: three.js, or text drawn only in the shader.

**Week 7 — Sound and a JSON envelope.** A mute button defaulting to muted, one oscillator tick, `--rms` driven from a local JSON file. Read https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices and https://developer.chrome.com/blog/autoplay . Pass: first visit is silent; unmute survives reload; hidden tab suspends the context. Fail: an `<audio autoplay>` element, or the mic.

**Week 8 — Companion plus a matching frame.** Bake a 6-frame sheet. Idle/walk as in recipe (j). Separately, port one 48-frame film pipeline scene as `render(frameIndex)` and diff two frames against the film export. Read https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas and our own film pipeline craft notes (one idea, holds as punctuation). Pass: reduced motion shows frame 0 of both; the live module matches the film within 2/255 on the two sampled frames, or it is pulled and replaced by the AV1 loop. Fail: a new framework, or a scene that does not match and ships anyway.

After week 8 we are allowed to combine two of these on a real fan page. Not all ten.

## 6. Uncertainties reported by the delegate
Confirmed with a fetched page are marked in the capability table. These items stayed soft:

- Firefox scroll-driven animations: MDN (updated 2026-07-14) and Firefox 145 release notes still show a flag, not a default. I could not open a later 2026 Firefox release note that flips the default. Treat “not in Firefox by default” as the working assumption and re-check `layout.css.scroll-driven-animations.enabled` before relying on it.
- Safari 26 minor versions: WebKit’s WWDC25 post describes the 26 beta train. Exact dot-release for scroll-driven animations versus anchor positioning versus `corner-shape` was not re-verified against a 2026-10 Safari release matrix. Anchor positioning’s MDN baseline date (2026-02-18, Safari 26) was fetched and is the stronger source.
- `corner-shape`: Chrome 139 is documented. Safari remains “flag, please test” in the WWDC25 post. I could not fetch a 2026 page that says Safari shipped it on by default. Do not require it.
- CSS mixins: the csswg draft (updated Jul 2026) is explicit that the spec is not implemented. No contradicting vendor post was found.
- `@function`: MDN baseline status is “not baseline / no Firefox.” I did not fetch a Firefox nightly note from October 2026.
- Scoped view transitions: MDN says Chrome 148 experimental, no Firefox, no Safari. I did not fetch the Chrome 148 release post itself.
- `sibling-index()` baseline date 2026-05-19 is from the fetched MDN page. I did not independently run a browser matrix.
- WebGPU on Linux Firefox and on older macOS Chrome builds is easy to over-claim. MDN’s fetched page says Firefox 147 Windows only, and Chrome’s first ship was Windows. A 2026-10 Linux status was not confirmed.
- Byte budgets (400KB AV1, 20KB grain, 50KB JS) are studio targets, not measured results. ffmpeg CRF values are starting points; the pass criterion is the byte cap, not the CRF.
- GPU memory “16MB for 2048² RGBA” is arithmetic, not a reading from `chrome://gpu`.
- three.js “~150KB gzip” and OGL “~10–15KB” are typical published build sizes, not a measurement of a current install this week. Re-measure before adding either.
- Internal reference sites (hitohira-hana, sura, tokyo-game-show) were not fetched, per the brief.
- Lighthouse and DevTools procedures were not run against a page in this task.

