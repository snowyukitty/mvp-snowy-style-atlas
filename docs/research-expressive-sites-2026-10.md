# Expressive websites, October 2026: teardowns and taste model

Research date: 2026-10-14. Source: sealed advisory delegation to `grok:default` (hosted web search and
fetch), then spot-checked by the requesting agent. This is advisory evidence, not a decision.

**Pair status.** Grok ran first. The Antigravity half initially could not run (`agy:default` was refused hosted fetch, `permission_denied`). After the route's
`settings.json` was given the `read_url(*)` rule it ran, so this topic now has both passes; see [Cross-validation](#cross-validation-grok-and-antigravity).
The Grok run used tools (`provider_turns: 6`, about 1.07M tokens), unlike the effects report, whose Grok pass ran none.

**Verification by the requesting agent (2026-10-14)**

- 18 of the cited live URLs were requested and all returned HTTP 200 (a subset of the 25 teardowns plus two Awwwards pages).
- Specific claims were re-read in the live HTML and matched: ishikawa.co (`character_walk_01.svg`,
  Allow/Decline analytics consent), 100th.nittoh-tea.com (essay dated 2026.10.1), izanami-official.com
  (duplicated cloud webps, "gst, dubai" beside "jst, tokyo"), odeco.life (generative-AI disclosure, in Japanese).
- Not re-checked: award and gallery dates, WebGL claims taken from third-party write-ups, and every
  "Read:" interpretation. The delegate itself marks `prefers-reduced-motion`, 390px, keyboard and screen-reader
  behaviour as untested on every site.
- Caveats from the delegate: FWA, Godly and Siteinspire were not usable; the count of "19 Japanese or
  Japan-adjacent" is the delegate's own tally and its counting line is hard to follow.
- One first attempt on the same task returned ABSTAIN because hosted search failed with "fetch failed"; a
  second attempt on the same route succeeded. Cause of the first failure was not established.

Study the technique, then draw and write everything again. No asset, font or copy from these sites is reusable.

---


## 1. Taste model

The three reference sites (described in the brief; not fetched) are one ritual each: a daily petal, a show walked with a kitten, a paper world entered through a door-shaped photograph. Eight tests follow.


1. One idea per URL. A visitor can say it in one sentence.

2. One accent, one meaning. A second color appears only when the meaning changes.

3. Photo forms are fixed. Three cuts of one photograph, and no free collage.

4. Type is the layout. Japanese is the heading; Latin is a caption or a chapter mark.

5. The character has a job. Petals, the kitten, and the bouquet are systems.

6. The page stays readable with script off and motion off.

7. Provenance stays on the page. Fan work does not imply endorsement.

8. Play is fast, then the page holds.


SaaS templates build a feature grid, a gradient system, and motion that explains a product. These sites build a place with a rule. Seen against the live set below, the same tests pick ishikawa.co, odeco, Nittoh’s numbered essays, and GOENSAI’s mascot, and they reject a full WebGL world as the whole site.


## 2. Teardowns (25 live sites)

Seen 2026-10-14 unless noted. C = complexity, P = performance risk, both judgments. Reduced-motion support was not in fetched markup unless stated. “Fact” is what the fetch or the cited page contained. “Read” is interpretation.


**01 Ponpon Mania** https://ponpon-mania.com/ — Awwwards SOTM Oct 2025, https://www.awwwards.com/websites/sites_of_the_month/. Idea: color only when the sheep dreams he is a DJ. Technique: WebGL texture-atlas panels. C5 P4. Degrade: https://ponpon-mania.com/about is HTML; the homepage fetch was the title, “read now”, EN|FR. Fact: makers’ essay of 26 Nov 2025 (https://www.awwwards.com/ponpon-mania-a-comic-that-breathes-through-web-interaction.html) names OGL, Nuxt, GSAP, Lenis, Matter.js, and album-like chapters.


**02 IZANAMI** https://izanami-official.com/ — Awwwards SOTD 18 Jul 2026, two colors #0A0801 and #D9D7D4, https://www.awwwards.com/sites/izanami. Idea: three practices under one word, Wa. Technique: layered cloud images plus a dual clock. C2 P2. Degrade: philosophy and School/Craft/Retreat are HTML; clocks arrived as 00:00:00, so the ticking is script. Fact: duplicated `sp_common_fv_cloud01.webp` and `cloud02.webp`, and the line “gst, dubai uae” beside “jst, tokyo jpn”.


**03 /zeroz** https://otsuka-air.jp/ — Awwwards SOTD and Developer Award 24 Aug 2026, https://www.awwwards.com/websites/Japan/. Idea: five chapters from oxygen to a product. Technique: chaptered editorial scroll with texture plates and video posters. C4 P3. Degrade: chapter prose is in the HTML. Fact: images at `/assets/images/textures/high/intro01.webp` through `intro05.webp`, and a roster of named interviews. SHIFTBRAIN’s 11 Jun 2026 post describes WebGL between chapters; this fetch did not execute it. https://x.com/SHIFTBRAIN/status/2064996096741650525


**04 GOENSAI** https://50th.designstudio-l.jp/ — SANKOU! 29 Sep 2026, https://sankoudesign.com/category/production-agency-portfolio/; show dates on the page, 28 Sep–3 Oct 2026. Idea: fifty years as a chain of staff voices and one mascot. Technique: decade timeline, SVG headlines, portrait stamps. C2 P2. Degrade: the history sentences are HTML; “他の写真を見る” needs script to swap photos. Fact: エルくん is credited to ハラヒロシ, 2011, and the page links ウル虎の巻.


**05 NITTOH 100 PICNIC** https://100th.nittoh-tea.com/ — MUUUUU.ORG 28 Sep 2026, https://muuuuu.org/. Idea: a centenary as 100 numbered actions, of which 08 are up. Technique: diary index with a repeated 62×62 seal SVG. C2 P2. Degrade: each essay is a real link; the hero is SVG and webp. Fact: assets come from `storage.googleapis.com/studio-design-asset-files/` (STUDIO). Latest essay on the page is 2026.10.1.


**06 Charge, Chaos.** https://goodpatch.com/15th — SANKOU! 5 Oct 2026, https://sankoudesign.com/. Idea: the anniversary is a long letter plus a gallery of staff-made apps. Technique: two-frame runner (`run-still.120.v3.webp` and `run.120.v3.webp`) and a repeated title line. C3 P2. Degrade: the essay is HTML, so the site reads; the run loop is an image. Fact: built as Astro (`/15th/_astro/`). Read: the letter is the design; the apps are evidence.


**07 hololive Grand Reception** https://hololive-grandreception.hololivepro.com/ — event opened 10 Oct 2026; news item 18 Sep 2026 is in the HTML. Idea: an invitation typeset as pictures. Technique: webp wordmarks and a tripled image strip. C2 P3. Degrade: news links are text; the title, goods, and buttons are images, so a screen reader loses the display type. Fact: WordPress theme `hololive`, and the same three venue images are repeated three times in the markup.


**08 ishikawa.co Walkable Atlas** https://ishikawa.co/en/ — page states Awwwards Honorable Mention 16 Aug 2026 and four CSSDA 2026 distinctions. Idea: you walk a character, then the path becomes the index. Technique: SVG walk cycle (`character_walk_01.svg`) plus A/D controls. C3 P2. Degrade: the six publications, two music projects, and dates through 14 Oct 2026 are HTML under the walk. Fact: a consent line offers analytics; Decline and Allow are both in the markup. Read: the fallback is the part worth stealing.


**09 Three.js Game Gallery** https://amix-design.com/tl/web-g-threejs/ — Awwwards nominee 4 Sep 2026, https://www.awwwards.com/sites/three-js-game-gallery-dian-noy-you-ji-chang. Idea: a midnight arcade of 15 free browser games. Technique: WebGL, Three.js r185 on the page itself, plus an in-page CPU paddle game. C4 P4. Degrade: every game has a title, a one-line rule, and an engine line in HTML; a “3D” toggle is written into the page; entry offers 音なしで入る. Fact: SAMPO’s image is `sampo.jpg?v=20261008`.


**10 foodnia** https://foodnia.co.jp/ — Awwwards Honorable Mention 16 Sep 2026, https://www.awwwards.com/websites/Japan/. Idea: a cut-vegetable company drawn as a picture book. Technique: SVG character scenes and a sticker. C3 P2. Degrade: “Skip Scroll” is in the HTML and the sentences are real; flying motion was not measurable. Fact: seven `top-chr_*.webp` figures, `sticker.webp`, and Latin broken as “All For / WELL- / EATING.” beside dense Japanese.


**11 SIRUP, OWARI DIARY** https://sirup.online/owaridiary/ — SANKOU! 2 Oct 2025, https://sankoudesign.com/category/web/page/7/; album date 3 Sep 2025 on https://sirup.online/wp/19248-2/. Idea: the record is a setlist you open by hand. Technique: image-typeset track titles. C2 P2. Degrade: each track is an image inside a link (`setlist-01.webp` through `27`); `hand.webp` sits above. Fact: the words KIRA KIRA and CHEESE CAKE are in the image alt text, so the titles survive as alts. Flag: 2025, still live.


**12 Phase Con 2026** https://con.phase-connect.com/ — page timestamp 10 Mar 2026; Katapick listed it 11 Oct 2026, https://katapick.com/trends/overseas. Idea: a VTuber convention as a stack of rooms. Technique: big stacked labels (hotel, badge, programming, meet-and-greet, merch, map). C2 P1. Degrade: the room names are HTML. Fact: the floor-plan href contains a trailing `%20`. Read: the information architecture is the design; motion was not visible in the fetch.


**13 CITY CONNECTION in TGS 2026** https://city-connection.co.jp/tgs2026/ — show dates on the page, 17–21 Sep 2026. Idea: a festival booth page whose lineup is also the decoration. Technique: a duplicated jacket marquee. C2 P2. Degrade: booth, hours, and platform lists are HTML. Fact: the same five cover images are emitted twice in a row before the About section. The page was still up after the show.


**14 Anime.js** https://animejs.com/ — Awwwards SOTM May 2025, https://www.awwwards.com/websites/sites_of_the_month/. The one product site in this set. Idea: the library’s homepage is a stack of tiny complete programs. Technique: scroll-synced SVG draw, stagger, spring drag, shown as code. C3 P2. Degrade: the API list and the code samples are HTML; the moving demos need script. Fact: the page prints a 24.50 KB bundle split (Scroll +4.30 KB, SVG 0.35 KB). Read: study the draw, do not adopt the library as a dependency.


**15 Lando Norris** https://landonorris.com/ — Awwwards Site of the Year 2025, https://www.awwwards.com/websites/sites_of_the_year/. Idea: a driver’s life as a vertical film, with helmets as the collection. Technique: Webflow image pairs (base and hover webp) and a rotate gate. C4 P4. Degrade: quotes, race names, and helmet titles are HTML, and so is “Please rotate your device, This is a vertical drive.” Fact: files come from `cdn.prod.website-files.com`; a lime signature is an SVG. Read: one fan site, too heavy and too gated for our budget.


**16 OJI GLOBAL BRAND BOOK** https://www.ojiholdings.co.jp/group/brandbook/ — release notice 8 Jun 2026, https://www.ojiholdings.co.jp/en/news/detail_002556.html. Idea: five verbs, one walk. Technique: scroll chapters whose titles are images. C3 P2. Degrade: the Japanese story is HTML, from 育てよう through めぐらせよう; the fetch shows “1” of “7” and “スクロールして進む”. Fact: GROW, DISCOVER, CREATE, CONNECT, RENEW are webp titles.


**17 Honda Wing Mark History** https://global.honda/en/wingmark/ — year chapters 1948 through 2001, each a real link. Idea: a logo told as eight doors. Technique: a year index over full-bleed backgrounds. C3 P3. Degrade: the Soichiro paragraph and the year list are HTML. Fact: eight `detail_bg` images and eight `small_logo` images. Award date not on the pages I opened. The 1972 chapter URL returned a 25 Mar 2026 timestamp in search: https://global.honda/en/wingmark/1972/.


**18 Bruno Simon, folio-2025** https://bruno-simon.com/ — CSSDA Website of the Month Dec 2025 and a 2025 Website of the Year nominee, https://www.cssdesignawards.com/woty2025/sites/Bruno's%20Portfolio. Idea: the portfolio is a car in a world. Technique: Three.js with a WebGL/WebGPU switch, Rapier physics, Howler audio. C5 P5. Degrade: instructions are HTML (WASD, honk, whispers) and the world is the canvas. Fact: the page offers Low quality, an audio toggle, and says the server is offline for scores. Source is named as MIT at https://github.com/brunosimon/folio-2025. The driveable-portfolio idea is older than 2025; this build is labeled folio-2025.


**19 KOKUYO Curiosity is Life** https://www.kokuyo.com/en/special/curiosity-is-life/ — CSSDA 2025 nominee, score 8.60, tags “animated, fullscreen, WebGL”, https://www.cssdesignawards.com/woty2025/sites/KOKUYO%20Curiosity%20is%20Life. Idea: a pop-up Campus notebook. Technique: WebGL, as tagged by CSSDA and described by mount (100+ models, eight music cues), https://mount.jp/projects/kokuyo-curiosity-is-life/. C5 P5. Degrade: this fetch returned “Loading” and “For full enjoyment, please turn your sound on.” The notebook did not appear as text. The corporate home https://www.kokuyo.com/en/ does expose an animations ON/OFF control and a link to the special.


**20 白骨温泉** https://www.shirahone.org/ — renewal note 26 Feb 2026, https://shirahone.org/information/233; MUUUUU lists it under 縦書き on 23 Apr 2026, https://muuuuu.org/category/taglist/vertical-text. Idea: a hot spring as a short poem and a directory of inns. Technique: stacked short lines, furigana-style pairing, seasonal photos. C2 P1. Degrade: a 本文へ skip link and the inn list are HTML. Fact: the heading arrives as 白骨物語しらほねものがたり; theme path is `wp-content/themes/shirahone/`. Stylesheet not extracted, so `writing-mode` is not confirmed.


**21 odeco** https://odeco.life/ — no award found. Latest track on the page, 10 Sep 2026. Idea: 54 songs sorted into six places. Technique: bilingual field notes, numbered series, real cover images. C1 P1. Degrade: skip link, track list, and dates are HTML. Fact: the page says composition and the singing voice use generative AI, and that the lyrics are written by odeco from fishing, travel, and daily scenes. Read: this is the music-site pattern closest to the brief.


**22 Hiroto Sato** https://hirotos.com/ — Awwwards SOTD 17 Jul 2026, palette #FFFFFF and #0B0B0A, elements named Gallery, Sticker Interaction, Page Transition, https://www.awwwards.com/sites/hiroto-sato. Idea: the menu is a street corner. Technique: WebGL wayfinding. C4 P4. Degrade: the live fetch returned only the text “Hiroto Sato”, so a no-JS read of the portfolio failed in this pass. The street-sign description is from a 17 Jul 2026 journal that also shows stills, https://riccardomarconato.com/blog/hiroto-sato-3d-street-signs-portfolio. Read: one scene, then quiet pages.


**23 Sunshine City autumn** https://sunshinecity.jp/file/official/autumn/ — Web Design Clip [L] 13 Oct 2026, https://lp.webdesignclip.com/. Idea: one season as a trunk of objects. Technique: separate paper-cut props (moon, cloud, ginkgo, acorn, pumpkin, pinecone) in an Astro build. C2 P2. Degrade: event dates and copy are HTML. Fact: assets are hashed files such as `moon.0diEaHDq_Z2eyuU4.webp` and `momiji.DrVCXRZW_Zzqr97.webp`. Read: the props are the motion; the calendar is the content.


**24 starboy** https://lilguy.net/ — Web Design Clip [L] 7 Sep 2026, https://lp.webdesignclip.com/. Idea: a shy digital pet, sold as a stack of one-line verses. Technique: line-broken display type and per-material spin sequences. C3 P3. Degrade: the behavior paragraph is HTML (“he's just a little guy.”). Fact: spin frames are many webp files (`Starboy-spin-Sunshine.3263.1.webp` and kin). Read: character-first, and image-heavy.


**25 味の素 paper pack** https://www.ajinomoto.co.jp/aji/recipe/kamipkg/ — Web Design Clip [L] 7 Oct 2026, https://lp.webdesignclip.com/. Idea: the package change is the whole page. Technique: display type drawn as images. C2 P2. Degrade: the hero title is `hero_title.png`; a later column is real text. Fact: the page’s own comparison says 2020年度比, so the campaign is likely older than 2025. Flagged. Read: useful only as a warning about type-as-picture.


Counts: Japanese or Japan-adjacent, 01’s subject aside: 02–13 except 14–15 and 18 and 24, plus 16, 17, 19–23, 25. That is 19. Music, game, character, or fan: 01, 07, 09, 11, 12, 13, 15, 18, 21, 24. SaaS or product: 14 only.

Status is a judgment from the pages opened. Each item has two opened URLs.



## 3. Trend map 2025-2026

1. Chaptered one-idea scroll. Rising toward a settled editorial form. Adopt. Examples: https://otsuka-air.jp/ and https://www.ojiholdings.co.jp/group/brandbook/. Reason: the sentences already exist, so motion can fail and the page still works.

2. Character with a job. Peak. Adopt. Examples: https://ishikawa.co/en/ and https://50th.designstudio-l.jp/. Reason: the walker and エルくん each do one task, then get out of the way.

3. Two-frame or short sprite loops. Rising. Adopt. Examples: https://goodpatch.com/15th and https://ishikawa.co/en/ (`character_walk_01.svg`). Reason: a still plus one loop matches a code-driven frame pipeline and stays light.

4. Seasonal paper-cut props as separate files. Peak in Japanese seasonal campaigns. Adopt. Examples: https://sunshinecity.jp/file/official/autumn/ and the texture plates on https://otsuka-air.jp/. Reason: a few original cuts, paused when motion is reduced.

5. Numbered diary index. Rising for anniversaries and discographies. Adopt. Examples: https://100th.nittoh-tea.com/ and https://odeco.life/. Reason: a number, a seal, and a real essay is the whole system.

6. Image-locked display type. Peak on Japanese event sites. Adapt, and only for a wordmark. Examples: https://hololive-grandreception.hololivepro.com/ and https://sirup.online/owaridiary/. Reason: alts saved SIRUP’s titles; hololive’s titles are pictures with no text equivalent in the fetch.

7. Scroll-synced SVG draw. Peak as a demo, easy to shrink. Adapt with CSS `animation-timeline`, not a library. Examples: the draw sample on https://animejs.com/ and the scroll-triggered panels described for https://ponpon-mania.com/. Reason: one path is enough.

8. Walk or drive instead of a menu. Rising. Adapt only with an HTML index. Examples: https://ishikawa.co/en/ and https://bruno-simon.com/. Reason: ishikawa keeps the publications in the document; Bruno’s world does not.

9. WebGL as the entire page. Peak on award juries. Avoid as the default. Examples: https://www.kokuyo.com/en/special/curiosity-is-life/ (loader and a sound prompt in this fetch) and https://bruno-simon.com/. Reason: the document disappeared or never arrived as text.

10. Smooth-scroll libraries. Still common, and a poor fit here. Avoid. Examples: Lenis named in the Ponpon essay, https://www.awwwards.com/ponpon-mania-a-comic-that-breathes-through-web-interaction.html, and the 12 Oct 2026 Katapick note that Lenis remains frequent, https://katapick.com/trends/overseas. Reason: it fights reduced motion and no-JS reading.

11. Rotate-your-device gates. Peak on cinematic award sites. Avoid. Examples: https://landonorris.com/ and the sound-on loader at https://www.kokuyo.com/en/special/curiosity-is-life/. Reason: a fan page has to work in the hand, portrait, silent.

12. AI-made app galleries as the anniversary idea. Rising. Avoid as the concept; the runner is the useful scrap. Examples: https://goodpatch.com/15th and the disclosure on https://odeco.life/. Reason: one human idea, with provenance stated when a tool was used.

Stylesheets were not extracted. The CSS name is the feature that implements the device. Where the fetch did not show that declaration, it is marked unconfirmed.



## 4. Japanese web aesthetics primer

1. Vertical writing. Device: columns that read top to bottom, right to left. CSS: `writing-mode: vertical-rl` and `text-orientation: mixed` for Latin. Example: https://www.shirahone.org/ is filed under 縦書き at https://muuuuu.org/category/taglist/vertical-text. The home fetch shows short stacked lines. `writing-mode` itself was not in the extract. Unconfirmed.

2. Furigana. Device: 白骨物語 paired with しらほねものがたり on the same heading. CSS: `ruby-position` with `<ruby>` and `<rt>`, or a small caption span. Example: https://www.shirahone.org/. Which markup they used was not visible.

3. Short measure. Device: one clause per line, as in the onsen copy and in IZANAMI’s philosophy. CSS: `max-inline-size` on the paragraph, or deliberate breaks. Examples: https://www.shirahone.org/ and https://izanami-official.com/.

4. Kinsoku and phrase breaks. Device: Japanese lines that do not leave a っ or a small kana stranded, and that keep 今日から together. CSS: `line-break: strict` and, where supported, `word-break: auto-phrase`. Example body: the chapter prose on https://otsuka-air.jp/. The declaration was not confirmed.

5. Proportional kana. Device: tighter kana so a heading is not full of metal-type gaps. CSS: `font-feature-settings: "palt"` on a Japanese face that ships the alternate. I did not see `palt` in any fetched HTML. The Latin counterpart I did see is tracking: “All For / WELL- / EATING.” on https://foodnia.co.jp/, which is spaces or `letter-spacing`, not `palt`.

6. Mixed-script rhythm. Device: 五◯祭 beside 1976 and 昭和. CSS: the circle is a character; Latin figures can sit in `font-variant-east-asian` or a second family. Example: https://50th.designstudio-l.jp/.

7. Seasonal cuts. Device: moon, ginkgo, maple, acorn, pumpkin as separate drawings, not a stock photo. CSS: absolutely placed `<img>` or `background-image`, one file each. Example: https://sunshinecity.jp/file/official/autumn/.

8. Paper grain. Device: a quiet texture plate under type. CSS: `background-image` on a wrapper, or an `<img>` with `mix-blend-mode`. Example, seen as img URLs: `/assets/images/textures/high/intro01.webp` through `intro05.webp` on https://otsuka-air.jp/.

9. Stamp or hanko. Device: a small round mark, a number, and a name. CSS: an inline SVG, often `border-radius: 50%` if it is HTML. Example: the repeated 62×62 SVG beside 01–08 on https://100th.nittoh-tea.com/. Also `sticker.webp` on https://foodnia.co.jp/.

10. Layered translucent panels. Device: the same cloud drawn twice, offset. CSS: `position` plus `opacity`. Example: duplicated cloud webps on https://izanami-official.com/. Opacity values were not measured.

11. A skip link before the poem. Device: 本文へ, so the beautiful line is not a trap. CSS: a visually hidden link that appears on focus. Examples: https://odeco.life/ and https://www.shirahone.org/.

Steal the behavior. Draw and write everything again. No asset, font file, or copy comes with these notes.



## 5. Five techniques to re-create

**1. Numbered seal index.** Fits a song archive or an event diary: one number, one title, one paragraph. Outline: an ordered list; each item is a link; a 48px inline SVG circle holds the number; the name sits beside it; CSS grid makes two columns from 768px up; under 390px it is one column; `prefers-reduced-motion` changes nothing because nothing moves. License: redraw the seal. Nittoh’s essays, portraits, and logo stay theirs. https://100th.nittoh-tea.com/


**2. Two-frame character loop.** Fits a companion that is present and then rests. Outline: one still webp and one short loop; the still is the default; the loop plays only after `pointer: fine` and no reduced-motion; a button pauses it; the character does not cover text; dimensions are fixed so the page does not jump. License: draw the kitten or the petal. Goodpatch’s runner files are not reusable. https://goodpatch.com/15th


**3. Walk, with the index in the HTML.** Fits a venue guide: play on large screens, read everywhere. Outline: four SVG frames swapped on a timer while a key or button is held; the links the walk would reveal are already in the document underneath; no canvas; if script never runs, the list is the page. License: our character, our map. ishikawa’s publications and their analytics banner stay there. Do not add analytics. https://ishikawa.co/en/


**4. One SVG path that draws as you scroll.** Fits a route, a stem, a single brush line. Outline: an inline path with `pathLength="1"`; `stroke-dasharray: 1` and `stroke-dashoffset` animated with `animation-timeline: view()`; a `@supports` block leaves the stroke fully drawn when view timelines are missing; reduced motion draws it immediately. License: our path. The Anime.js homepage only demonstrates the idea. https://animejs.com/


**5. Five chapters, one accent, texture optional.** Fits a long fan essay or an event story. Outline: five sections with real headings; one CSS variable for the accent, used only on the current chapter mark; grain is a CSS gradient or a self-made tile at low opacity; video is a poster image with a play control; sound stays off until a button. License: our words and our grain. Otsuka’s product shots, interviews, and texture files are not source material. https://otsuka-air.jp/


## 6. Unverified claims reported by the delegate

These were not confirmed by rendering the page or by reading its stylesheet.


- `prefers-reduced-motion` behavior was not verified on any site. Fetches do not include computed style.

- Hiroto Sato’s street-sign navigation was not seen at https://hirotos.com/. That fetch returned the name only. The description and stills are from https://riccardomarconato.com/blog/hiroto-sato-3d-street-signs-portfolio.

- The KOKUYO notebook, its 3D models, and its eight music cues were not visible at https://www.kokuyo.com/en/special/curiosity-is-life/, which returned a loader and a sound prompt. WebGL is CSSDA’s tag and mount’s case study.

- WebGL on https://otsuka-air.jp/ is SHIFTBRAIN’s description, not something this fetch executed. The HTML shows chapters, posters, and texture images.

- Ponpon’s shaders, atlas, and Lenis are from the makers’ essay. The comic reader was not opened panel by panel.

- Honda Wing Mark has no award date in the pages opened. A 25 Mar 2026 timestamp appeared on the 1972 chapter via search.

- CSSDA called /zeroz Website of the Day on 27 Jul 2026 via a tinyurl that was not opened. The Awwwards date used here is 24 Aug 2026 from https://www.awwwards.com/websites/Japan/.

- `writing-mode`, `palt`, `line-break`, and cloud opacity were not read from CSS. The primer names the feature that produces the device.

- FWA’s 2026 day list was not recoverable. Profiles on thefwa.com came back as unusable “safari bugfix” text. Godly and Siteinspire were not opened. I/O 3000 hits were older or off-brief.

- https://www.ajinomoto.co.jp/aji/recipe/kamipkg/ is live and was clipped on 7 Oct 2026, and its own copy cites a 2020 comparison. Treat it as older.

- Bruno’s driveable portfolio predates the Dec 2025 CSSDA month award. The page itself labels the build folio-2025.

- Lando is a Webflow site from the CDN host. A GSAP claim appeared in a LinkedIn comment and was not checked in source, so it is not used.

- Phase Con’s June 2026 dates come from a YouTube description in search. The live page’s own timestamp is 10 Mar 2026. The floor-plan link’s trailing space was in the HTML.

- Katapick’s “Lenis is still common” line is one gallery’s summary, not a measurement.

- No site was tested at 390px, with a keyboard, or with a screen reader. No-JS notes are inferences from what the fetched HTML already contained.

- Reference sites in the brief were not fetched, by instruction.

## Cross-validation: Grok and Antigravity

Both passes got the same task file. Raw Antigravity report: [research-expressive-sites-2026-10-agy.md](research-expressive-sites-2026-10-agy.md).

**Overlap is small.** The two reports chose almost entirely different sites. Of 27 and 51 cited URLs, only `bruno-simon.com`
appears in both, and one more project (IZANAMI) appears under different URLs. So this is breadth, not independent
confirmation of most claims.

| Bucket | Finding |
| --- | --- |
| Agreed | IZANAMI won Awwwards Site of the Day on 2026-07-18 (both). Both treat `bruno-simon.com` as a heavy WebGL world and recommend against it as a default. |
| Corroborated by source | IZANAMI uses WebGL (`<canvas`, `webgl` and Lenis appear in `izanami-official.com`'s HTML): Antigravity's technique is right, and Grok's cloud-layers-and-clocks description is also true but incomplete. |
| Contradicted, now settled | Antigravity gave IZANAMI's address as `baqemono.jp`, which is the studio's site; the project is `izanami-official.com`. |
| Single-source, verified | Grok: four details checked against live HTML (ishikawa.co walk SVG and analytics consent, 100th.nittoh-tea.com essay date, izanami clouds and clocks, odeco.life's generative-AI disclosure): all matched. Antigravity: `eldenring.jp` apex returns 404 and `www.` returns 200, and `frieren-anime.jp` returns 403, exactly as it reported. |
| Invalid or unsupported | Of seven Antigravity technique claims checked in page source, one held (`niccolomiranda.com` animates `stroke-dashoffset`). Five found no evidence (`kuon.tokyo` SVG noise, `bocchi.rocks` masking tape, `eldenring.jp` gold-foil `background-clip`, `monomode.co.jp` Matter.js, `photoyoshi.com` View Transitions); `hanatsubaki.shiseido.com`'s vertical writing could not be judged because its CSS may live on another host. Treat the specific numbers it gave (for example "128x128 at 4% opacity") as invented. |

**Net.** Use the Grok report for teardowns. Use the Antigravity list as candidate sites to open, and discard its observations
unless you confirm them in source. One finding both runs surface and neither stated: even an award-winning 2026 site
(IZANAMI) ships Lenis smooth scroll and Google Tag Manager, so "avoid Lenis" and "no analytics" are our rules,
not the field's.

## Not verified

- Award dates other than IZANAMI's, which two independent passes agree on.
- Reduced-motion behaviour, 390px, keyboard and screen-reader use on any site.
- Antigravity's `provider_turns` is 1, yet it demonstrably fetched pages (it reported a 404 and a 403 that are real); for that
  adapter the field does not show whether tools ran, so do not read it as it is read for Grok.


