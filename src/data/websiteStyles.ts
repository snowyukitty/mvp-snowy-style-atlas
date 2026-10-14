export type Complexity = "MVP" | "Intermediate" | "Advanced";

export type StyleLink = {
  label: string;
  url: string;
  why: string;
};

export type WebsiteStyle = {
  id: string;
  title: string;
  category: string;
  fit: string;
  summary: string;
  tags: string[];
  tone: string;
  complexity: Complexity;
  score: number;
  referenceLinks: StyleLink[];
  githubLinks: StyleLink[];
  sourceNotes: string[];
  visual: {
    background: string;
    surface: string;
    ink: string;
    accent: string;
    secondary: string;
    layout: string;
    typeScale: string;
    motion: string;
    density: string;
  };
  demo: {
    kind:
      | "agentic-saas"
      | "fintech-grid"
      | "command-launcher"
      | "creative-suite"
      | "workspace"
      | "institutional-ai"
      | "developer-platform"
      | "spatial-product"
      | "marketplace-search"
      | "open-source-kit"
      | "curated-gallery"
      | "saas-patterns";
    kicker: string;
    headline: string;
    subhead: string;
    primaryAction: string;
    secondaryAction: string;
    metrics: Array<{ label: string; value: string }>;
    modules: string[];
  };
  sections: string[];
  techniques: string[];
  buildNotes: string[];
  starterPrompt: string;
};

export const websiteStyles: WebsiteStyle[] = [
  {
    id: "wsa-001",
    title: "Agentic Product OS",
    category: "SaaS Product",
    fit: "AI workflow tools, project platforms, internal operations products",
    summary:
      "A precise product site that sells a system, not a feature list: live UI theater, numbered workflow chapters, proof blocks, and a restrained dark interface.",
    tags: ["AI", "SaaS", "workflow", "dark", "product-led"],
    tone: "Precise",
    complexity: "Advanced",
    score: 98,
    referenceLinks: [
      {
        label: "Linear",
        url: "https://linear.app/",
        why: "Product story is organized around product operations, planning, building, diffs, and monitoring."
      },
      {
        label: "Vercel",
        url: "https://vercel.com/",
        why: "Agentic infrastructure positioning with product families, developer paths, and deployment CTAs."
      },
      {
        label: "GitHub",
        url: "https://github.com/",
        why: "Developer-platform narrative with AI, automation, security, and customer proof."
      }
    ],
    githubLinks: [
      {
        label: "GitHub landing-page topic",
        url: "https://github.com/topics/landing-page",
        why: "Useful for open-source marketing sections and source-readable landing pages."
      }
    ],
    sourceNotes: [
      "Lead with a product screenshot that already contains the core workflow.",
      "Use numbered modules so a complex system feels navigable.",
      "Pair AI claims with operational artifacts: issues, diffs, dashboards, review states."
    ],
    visual: {
      background: "#08090d",
      surface: "#10131a",
      ink: "#f4f7fb",
      accent: "#8da2ff",
      secondary: "#5ee0b5",
      layout: "Product theater over indexed workflow chapters",
      typeScale: "Compressed sans headings with small mono metadata",
      motion: "Soft reveal, active chapter pins, slow UI pulses",
      density: "Dense"
    },
    demo: {
      kind: "agentic-saas",
      kicker: "Product system",
      headline: "Coordinate humans and agents from one operating layer",
      subhead: "Issues, specs, reviews, and automation stay visible in a single product surface.",
      primaryAction: "Start workspace",
      secondaryAction: "View workflow",
      metrics: [
        { label: "Teams", value: "33K+" },
        { label: "Cycle", value: "-28%" },
        { label: "AI tasks", value: "4.8x" }
      ],
      modules: ["Intake", "Plan", "Build", "Review", "Monitor"]
    },
    sections: [
      "Sticky product navigation",
      "Hero with live workflow mockup",
      "Indexed feature chapters",
      "Customer proof strip",
      "Changelog feed",
      "Final action band"
    ],
    techniques: [
      "Represent features as connected states instead of isolated cards.",
      "Use small, real-looking data in mockups to make the product feel operational.",
      "Keep copy short and concrete; let UI artifacts carry detail."
    ],
    buildNotes: [
      "Start with one responsive product-theater component and reuse it across chapters.",
      "Create a chapter data array so sections can be generated from content.",
      "Use CSS variables for dark surface, accent, status, and border tokens."
    ],
    starterPrompt:
      "Build a dark, precise SaaS landing page for an AI workflow product. First viewport: nav, direct headline, two CTAs, and a live product theater with issue list, agent activity, diff review, and metrics. Below it, create numbered workflow chapters and a compact customer proof strip."
  },
  {
    id: "wsa-002",
    title: "Financial Infrastructure Grid",
    category: "Fintech",
    fit: "Payment platforms, billing products, B2B finance, API-first infrastructure",
    summary:
      "A high-trust commercial layout: gradient energy, modular product cards, large metrics, and enterprise proof arranged around business outcomes.",
    tags: ["fintech", "API", "enterprise", "metrics", "gradient"],
    tone: "Confident",
    complexity: "Intermediate",
    score: 95,
    referenceLinks: [
      {
        label: "Stripe",
        url: "https://stripe.com/",
        why: "Strong model for fintech positioning, product modules, proof metrics, and international scale."
      },
      {
        label: "SaaSFrame",
        url: "https://www.saasframe.io/examples/github-landing-page-9",
        why: "Breaks down SaaS landing structure and common section patterns."
      }
    ],
    githubLinks: [
      {
        label: "Cruip open-react-template",
        url: "https://github.com/cruip/open-react-template",
        why: "Open landing template with reusable sections for SaaS products."
      }
    ],
    sourceNotes: [
      "Use data and product breadth as trust signals.",
      "Make the hero feel active with layered gradient rails rather than decorative blobs.",
      "Place enterprise proof after the first product module, not at the very end."
    ],
    visual: {
      background: "#f5f7fb",
      surface: "#ffffff",
      ink: "#151b2b",
      accent: "#635bff",
      secondary: "#00d4b8",
      layout: "Hero gradient rail plus modular product grid",
      typeScale: "Large confident headline, compact body, metric numerals",
      motion: "Subtle gradient drift and card hover lift",
      density: "Balanced"
    },
    demo: {
      kind: "fintech-grid",
      kicker: "Financial stack",
      headline: "Launch revenue infrastructure without rebuilding payments",
      subhead: "Billing, risk, payouts, and reporting share one API-first platform.",
      primaryAction: "Start now",
      secondaryAction: "Talk to sales",
      metrics: [
        { label: "Currencies", value: "135+" },
        { label: "Uptime", value: "99.999%" },
        { label: "Volume", value: "$1.9T" }
      ],
      modules: ["Payments", "Billing", "Risk", "Payouts", "Reports"]
    },
    sections: [
      "Gradient hero with immediate CTA",
      "Product capability grid",
      "Integration code snippet",
      "Global scale metrics",
      "Enterprise case studies",
      "Compliance and support footer"
    ],
    techniques: [
      "Use slanted or layered color planes to imply financial motion.",
      "Keep product cards action-oriented: verb plus business result.",
      "Mix human support proof with API proof to reduce enterprise risk."
    ],
    buildNotes: [
      "Build the hero as CSS layers so it stays crisp without image dependencies.",
      "Use a single ProductModule component with icon, result, and mini UI preview slots.",
      "Reserve bold color for hierarchy; keep form fields and copy calm."
    ],
    starterPrompt:
      "Create a fintech SaaS landing page with a bright infrastructure feel: gradient rail hero, two CTAs, product modules for payments, billing, risk, payouts, and reporting, a code snippet, and a metrics band showing scale and uptime."
  },
  {
    id: "wsa-003",
    title: "Command Launcher Utility",
    category: "Productivity",
    fit: "Keyboard-first utilities, desktop apps, developer tools, power-user workflows",
    summary:
      "A kinetic utility site that uses the product's core interaction as the visual system: keyboard rows, shortcut language, extension marketplace, and speed proof.",
    tags: ["keyboard", "utility", "desktop", "marketplace", "motion"],
    tone: "Fast",
    complexity: "Intermediate",
    score: 93,
    referenceLinks: [
      {
        label: "Raycast",
        url: "https://www.raycast.com/",
        why: "Turns keyboard-first interaction, extensions, and performance claims into the whole page language."
      },
      {
        label: "Lapa Ninja",
        url: "https://www.lapa.ninja/",
        why: "Includes productivity and developer-tool landing pages with category filtering."
      }
    ],
    githubLinks: [
      {
        label: "GitHub nextjs-template topic",
        url: "https://github.com/topics/nextjs-template",
        why: "Good starting point for Next.js template structure and app landing pages."
      }
    ],
    sourceNotes: [
      "Let the interaction metaphor drive the art direction.",
      "Use extension cards to demonstrate ecosystem breadth.",
      "Make performance claims concrete with small, visible numbers."
    ],
    visual: {
      background: "#111116",
      surface: "#1a1b22",
      ink: "#f9fafb",
      accent: "#ff5a66",
      secondary: "#ffd166",
      layout: "Keyboard grid hero plus extension marketplace rows",
      typeScale: "Short punchy headline, mono shortcut labels",
      motion: "Key press shimmer and command palette open state",
      density: "Dense"
    },
    demo: {
      kind: "command-launcher",
      kicker: "Launcher app",
      headline: "Every action one shortcut away",
      subhead: "Search, automate, and switch tools without leaving the keyboard.",
      primaryAction: "Download",
      secondaryAction: "Browse store",
      metrics: [
        { label: "Crash-free", value: "99.8%" },
        { label: "Extensions", value: "1K+" },
        { label: "Launch", value: "ms" }
      ],
      modules: ["Search", "Translate", "Tasks", "Windows", "Snippets"]
    },
    sections: [
      "Command palette hero",
      "Keyboard visual band",
      "Speed and reliability proof",
      "Extension categories",
      "Team workflow upsell",
      "Download platform selector"
    ],
    techniques: [
      "Turn UI affordances into layout elements.",
      "Use short, tactile microcopy: fast, native, reliable.",
      "Show categories before long app lists so the ecosystem scans quickly."
    ],
    buildNotes: [
      "Use CSS grid for keyboard rows with fixed key sizes to avoid layout shift.",
      "Make command-palette search a reusable component for hero and docs.",
      "Use segmented controls for platform downloads."
    ],
    starterPrompt:
      "Design a keyboard-first productivity app landing page. Use a dark hero with a command palette, fixed keyboard grid, extension category rail, performance metrics, and platform download controls."
  },
  {
    id: "wsa-004",
    title: "Collaborative Creation Suite",
    category: "Creative Tool",
    fit: "Design tools, no-code builders, collaborative editors, AI creation suites",
    summary:
      "A bright system-of-tools landing page where the navigation is a product map, the hero is collaborative, and the lower page proves team scale through libraries and templates.",
    tags: ["design", "collaboration", "AI", "templates", "systems"],
    tone: "Playful",
    complexity: "Advanced",
    score: 94,
    referenceLinks: [
      {
        label: "Figma",
        url: "https://www.figma.com/",
        why: "Strong example of product-family navigation, design-system proof, AI creation, and community output."
      },
      {
        label: "Recent Design",
        url: "https://godly.website/",
        why: "Daily design discovery source useful for emerging visual patterns."
      }
    ],
    githubLinks: [
      {
        label: "Awesome Inspiration",
        url: "https://github.com/SHSFWork/awesome-inspiration",
        why: "Curated resource map across landing, SaaS, components, motion, and UI libraries."
      }
    ],
    sourceNotes: [
      "Product families can be navigation, not just footer taxonomy.",
      "Use colorful but disciplined tokens so the page feels creative without losing clarity.",
      "Community examples create proof and future inspiration loops."
    ],
    visual: {
      background: "#fff7ed",
      surface: "#ffffff",
      ink: "#111827",
      accent: "#ff6b35",
      secondary: "#19a974",
      layout: "Colorful tool map, collaborative canvas, proof carousel",
      typeScale: "Bold sans headline with friendly editorial body",
      motion: "Cursor trails, tool chips, slide transitions",
      density: "Balanced"
    },
    demo: {
      kind: "creative-suite",
      kicker: "Creative suite",
      headline: "Design, build, and publish from one shared canvas",
      subhead: "Teams move from ideas to reusable systems without leaving the workspace.",
      primaryAction: "Get started",
      secondaryAction: "Explore gallery",
      metrics: [
        { label: "Modes", value: "8" },
        { label: "Libraries", value: "Shared" },
        { label: "Handoff", value: "Live" }
      ],
      modules: ["Design", "Draw", "Build", "Publish", "Promote"]
    },
    sections: [
      "Mega-nav by product family",
      "Collaborative canvas hero",
      "Trusted-by marquee",
      "Design system proof block",
      "AI-to-code workflow",
      "Community gallery"
    ],
    techniques: [
      "Use product modes as colored chips that also act as section anchors.",
      "Make handoff visible through annotations, cursors, and code panels.",
      "Balance bright accents with generous white surfaces."
    ],
    buildNotes: [
      "Use a mode array to generate nav chips, hero tabs, and section labels.",
      "Create reusable cursor badges and comment pins for collaborative feeling.",
      "Keep all animation optional under prefers-reduced-motion."
    ],
    starterPrompt:
      "Build a collaborative design-tool homepage with a colorful product-mode nav, shared canvas hero, customer logo strip, design-system proof section, AI-to-code section, and community gallery."
  },
  {
    id: "wsa-005",
    title: "Warm Workspace Hub",
    category: "Workspace",
    fit: "Knowledge bases, team docs, productivity suites, async work platforms",
    summary:
      "A calm workspace site: warm editorial type, approachable illustrations, use-case tiles, and trust built through familiar customer logos and simple workflows.",
    tags: ["workspace", "knowledge", "docs", "teams", "warm"],
    tone: "Warm",
    complexity: "MVP",
    score: 90,
    referenceLinks: [
      {
        label: "Notion",
        url: "https://www.notion.com/",
        why: "Clear example of workspace positioning, AI agents, team use cases, and broad trust."
      },
      {
        label: "SaaS Landing Page",
        url: "https://saaslandingpage.com/",
        why: "SaaS examples with common sections such as pricing, features, testimonials, and FAQ."
      }
    ],
    githubLinks: [
      {
        label: "NextJSTemplates startup-nextjs",
        url: "https://github.com/NextJSTemplates/startup-nextjs",
        why: "Open SaaS startup template with reusable business sections."
      }
    ],
    sourceNotes: [
      "Plain language is the design system: keep labels familiar.",
      "Show repeated work becoming lighter, not abstract AI magic.",
      "A logo strip works best when followed by concrete use cases."
    ],
    visual: {
      background: "#fbf4e8",
      surface: "#fffaf2",
      ink: "#20211f",
      accent: "#e14d2a",
      secondary: "#2f6f5e",
      layout: "Centered hero with use-case tile grid",
      typeScale: "Large friendly serif with simple sans labels",
      motion: "Gentle tile swaps and checklist completion",
      density: "Open"
    },
    demo: {
      kind: "workspace",
      kicker: "Team workspace",
      headline: "Keep projects, notes, and agents in one calm place",
      subhead: "Capture decisions, route tasks, and surface knowledge for every team.",
      primaryAction: "Get free",
      secondaryAction: "Request demo",
      metrics: [
        { label: "Cloud 100", value: "98%" },
        { label: "Templates", value: "100+" },
        { label: "Teams", value: "All" }
      ],
      modules: ["Docs", "Projects", "Agents", "Search", "Templates"]
    },
    sections: [
      "Simple top nav",
      "Warm hero",
      "Trusted-by strip",
      "Use-case tiles",
      "Template gallery",
      "Team-size paths"
    ],
    techniques: [
      "Avoid technical density in the first viewport.",
      "Use visible task examples to make AI workflows credible.",
      "Keep CTAs plain and low-friction."
    ],
    buildNotes: [
      "Build use-case cards from team/audience data.",
      "Use a compact template gallery as the first interactive element.",
      "Keep the color system broad enough for teams, docs, and agent states."
    ],
    starterPrompt:
      "Create a warm workspace product site with a centered hero, team logos, use-case tiles for docs, projects, agents, search, and templates, plus simple CTAs for free signup and demo."
  },
  {
    id: "wsa-006",
    title: "AI Research Institution",
    category: "Institutional",
    fit: "AI labs, policy organizations, research institutes, trust-heavy product companies",
    summary:
      "An editorial trust site that makes mission, research, releases, and policy feel organized and serious without becoming corporate.",
    tags: ["AI", "research", "editorial", "trust", "policy"],
    tone: "Measured",
    complexity: "MVP",
    score: 91,
    referenceLinks: [
      {
        label: "Anthropic",
        url: "https://www.anthropic.com/",
        why: "Institutional AI homepage with mission, latest releases, research, policy, and safety framing."
      },
      {
        label: "Awwwards",
        url: "https://www.awwwards.com/websites/",
        why: "Useful for evaluating craft level and editorial presentation trends."
      }
    ],
    githubLinks: [
      {
        label: "design-resources-for-developers",
        url: "https://github.com/bradtraversy/design-resources-for-developers",
        why: "Broad resource index for typography, UI, design systems, and front-end assets."
      }
    ],
    sourceNotes: [
      "Mission sites need update cadence: latest releases make the page feel alive.",
      "Navigation should separate research, product, policy, and company clearly.",
      "Trust is built with restraint: fewer effects, stronger hierarchy."
    ],
    visual: {
      background: "#f2eee6",
      surface: "#fffdf7",
      ink: "#231f20",
      accent: "#b85c38",
      secondary: "#536b5c",
      layout: "Editorial hero with release ledger and resource columns",
      typeScale: "Serif headline, sober body, small caps metadata",
      motion: "Minimal fades only",
      density: "Balanced"
    },
    demo: {
      kind: "institutional-ai",
      kicker: "Research lab",
      headline: "AI research and products with public-interest commitments",
      subhead: "Connect frontier releases, safety work, policy, and learning resources.",
      primaryAction: "Read research",
      secondaryAction: "Try product",
      metrics: [
        { label: "Reports", value: "81K" },
        { label: "Countries", value: "15+" },
        { label: "Releases", value: "Latest" }
      ],
      modules: ["Research", "Policy", "Models", "Academy", "Trust"]
    },
    sections: [
      "Institutional nav",
      "Mission hero",
      "Featured research",
      "Latest releases ledger",
      "Commitments and safety",
      "Resource footer"
    ],
    techniques: [
      "Use release metadata as a design element.",
      "Keep product links present but secondary to mission.",
      "Group resources by reader intent: learn, build, trust, company."
    ],
    buildNotes: [
      "Create a ReleaseLedger component with date, category, and action.",
      "Use stronger line rules than shadows for editorial authority.",
      "Avoid animated decoration; invest in spacing and typography."
    ],
    starterPrompt:
      "Design an AI research institution homepage with editorial serif typography, mission hero, featured research, latest release ledger, policy/safety resource columns, and restrained CTAs."
  },
  {
    id: "wsa-007",
    title: "Developer Platform Universe",
    category: "Developer Platform",
    fit: "Cloud platforms, devtools, API platforms, open-source communities",
    summary:
      "A developer platform site with a big collaboration promise, deep navigation, code/product proof, security reassurance, and ecosystem links.",
    tags: ["developer", "platform", "open-source", "security", "ecosystem"],
    tone: "Assured",
    complexity: "Advanced",
    score: 96,
    referenceLinks: [
      {
        label: "GitHub",
        url: "https://github.com/",
        why: "Reference for mega navigation, developer lifecycle messaging, AI partner sections, and security proof."
      },
      {
        label: "SaaSFrame GitHub breakdown",
        url: "https://www.saasframe.io/examples/github-landing-page-9",
        why: "Useful analysis of GitHub's landing page structure, color, layout, and UX patterns."
      }
    ],
    githubLinks: [
      {
        label: "GitHub Topics",
        url: "https://github.com/topics",
        why: "Useful for discovering project categories, repos, and trends for demo sourcing."
      }
    ],
    sourceNotes: [
      "Developer platforms need multiple entry points without overwhelming the first viewport.",
      "Code snippets and simulated workflows make claims believable.",
      "Security and ecosystem sections should appear before the final CTA."
    ],
    visual: {
      background: "#0d1117",
      surface: "#161b22",
      ink: "#f0f6fc",
      accent: "#58a6ff",
      secondary: "#3fb950",
      layout: "Mega-nav, hero command line, lifecycle feature bands",
      typeScale: "Large sans headline, mono code details",
      motion: "Terminal cursor and path highlights",
      density: "Dense"
    },
    demo: {
      kind: "developer-platform",
      kicker: "Developer platform",
      headline: "Build, secure, and ship software together",
      subhead: "Code, review, automate, and protect releases across one connected platform.",
      primaryAction: "Sign up",
      secondaryAction: "Try AI coding",
      metrics: [
        { label: "Repos", value: "Open" },
        { label: "Actions", value: "CI/CD" },
        { label: "Security", value: "Fixed" }
      ],
      modules: ["Code", "Plan", "Review", "Automate", "Secure"]
    },
    sections: [
      "Mega-nav by platform area",
      "Hero with email capture",
      "Lifecycle feature tabs",
      "AI coding partner proof",
      "Security proof block",
      "Marketplace ecosystem"
    ],
    techniques: [
      "Use the product lifecycle as the page's information architecture.",
      "Let code and automation visuals replace abstract illustration.",
      "Create contrast between dark platform canvas and high-signal accent lines."
    ],
    buildNotes: [
      "Use accessible disclosure menus for mega-nav groups.",
      "Generate feature tabs from a lifecycle array.",
      "Keep code snippets short enough to read on mobile."
    ],
    starterPrompt:
      "Build a developer platform landing page with dark theme, mega-nav, email capture hero, lifecycle tabs for code/plan/review/automate/secure, an AI coding workflow section, security proof, and marketplace ecosystem footer."
  },
  {
    id: "wsa-008",
    title: "Spatial Product Story",
    category: "Product Launch",
    fit: "Premium hardware, spatial apps, high-end product launches, cinematic product pages",
    summary:
      "A premium product narrative built around first-viewport product clarity, cinematic section pacing, close-up detail modules, and experiential copy.",
    tags: ["hardware", "premium", "cinematic", "product", "longform"],
    tone: "Premium",
    complexity: "Advanced",
    score: 92,
    referenceLinks: [
      {
        label: "Apple Vision Pro",
        url: "https://www.apple.com/apple-vision-pro/",
        why: "Reference for premium product hierarchy, local nav, product imagery, detail storytelling, and experiential sections."
      },
      {
        label: "Awwwards winning websites",
        url: "https://www.awwwards.com/websites/",
        why: "Useful for high-craft launch pages and motion-heavy product storytelling."
      }
    ],
    githubLinks: [
      {
        label: "landing-page GitHub topic",
        url: "https://github.com/topics/landing-page",
        why: "Open examples for launch-page structure and responsive sections."
      }
    ],
    sourceNotes: [
      "The product must be visible in the first viewport.",
      "Use local navigation for long product pages.",
      "Longform pages need alternating experiential and specification sections."
    ],
    visual: {
      background: "#f6f7f8",
      surface: "#ffffff",
      ink: "#111111",
      accent: "#0071e3",
      secondary: "#7d8ca3",
      layout: "Local nav, cinematic hero, detail inspection chapters",
      typeScale: "Large product headline, oversized experiential statements",
      motion: "Scroll-tied reveals and product close-up transitions",
      density: "Open"
    },
    demo: {
      kind: "spatial-product",
      kicker: "Product launch",
      headline: "A new way to experience work, media, and presence",
      subhead: "Show the product first, then unfold the technology through close-up chapters.",
      primaryAction: "Book demo",
      secondaryAction: "View specs",
      metrics: [
        { label: "Display", value: "4K/eye" },
        { label: "Audio", value: "Spatial" },
        { label: "Use", value: "3 hr" }
      ],
      modules: ["Overview", "Closer look", "Media", "Work", "Specs"]
    },
    sections: [
      "Local product nav",
      "First-viewport product hero",
      "Closer-look carousel",
      "Experiential copy panels",
      "Technology detail modules",
      "Buy/demo action bar"
    ],
    techniques: [
      "Use precise product imagery or CSS product silhouettes; avoid generic atmosphere.",
      "Separate benefits into immersive scenarios, not feature bullet lists.",
      "Use local nav to make long pages feel controllable."
    ],
    buildNotes: [
      "Create a sticky local nav independent of global nav.",
      "Use aspect-ratio containers for product visuals to prevent layout shifts.",
      "Prefer CSS masks and gradients for demo placeholders until final product media exists."
    ],
    starterPrompt:
      "Create a premium hardware launch page with local nav, first-viewport product visual, short hero copy, close-up detail modules, experiential sections for work/media/connection, and final demo/buy CTA."
  },
  {
    id: "wsa-009",
    title: "Marketplace Search Hub",
    category: "Marketplace",
    fit: "Travel, real estate, local services, job boards, product marketplaces",
    summary:
      "A search-first marketplace pattern: destination/date/person controls, category switching, host/provider upsell, and SEO-friendly destination lists.",
    tags: ["marketplace", "search", "travel", "local", "SEO"],
    tone: "Practical",
    complexity: "Intermediate",
    score: 89,
    referenceLinks: [
      {
        label: "Airbnb",
        url: "https://www.airbnb.com/",
        why: "Strong search-first marketplace structure with where/when/who controls, host CTAs, and destination footer."
      },
      {
        label: "Lapa Ninja marketplace and travel categories",
        url: "https://www.lapa.ninja/",
        why: "Useful for travel, marketplace, real estate, and lifestyle landing examples."
      }
    ],
    githubLinks: [
      {
        label: "GitHub landingpage TypeScript topic",
        url: "https://github.com/topics/landingpage?l=typescript",
        why: "A source for TypeScript landing examples that can be adapted into search-first layouts."
      }
    ],
    sourceNotes: [
      "Search controls are the hero; avoid hiding them behind a marketing headline.",
      "Category tabs help users switch intent before entering a query.",
      "Large footer link matrices can be useful when structured by intent."
    ],
    visual: {
      background: "#ffffff",
      surface: "#f7f7f7",
      ink: "#222222",
      accent: "#ff385c",
      secondary: "#008489",
      layout: "Search capsule hero with category tabs and listing grid",
      typeScale: "Compact sans, large input labels",
      motion: "Filter transitions and listing hover states",
      density: "Balanced"
    },
    demo: {
      kind: "marketplace-search",
      kicker: "Marketplace",
      headline: "Find the right place, service, or provider faster",
      subhead: "Search controls, filters, and local discovery are visible before marketing copy.",
      primaryAction: "Search",
      secondaryAction: "Become a host",
      metrics: [
        { label: "Cities", value: "100+" },
        { label: "Filters", value: "24" },
        { label: "Categories", value: "3" }
      ],
      modules: ["Where", "When", "Who", "Categories", "Footer SEO"]
    },
    sections: [
      "Top category tabs",
      "Search capsule",
      "Listing teaser grid",
      "Provider/host CTA",
      "Destination inspiration tabs",
      "SEO footer"
    ],
    techniques: [
      "Treat inputs as high-value UI, not secondary form controls.",
      "Use location examples to make empty search feel useful.",
      "Keep category navigation sticky on mobile if browsing is the core action."
    ],
    buildNotes: [
      "Use native form semantics for search fields.",
      "Build category and destination lists from structured arrays.",
      "Design mobile filters as a modal or bottom sheet."
    ],
    starterPrompt:
      "Build a marketplace homepage where the first viewport is a category switcher and search capsule with Where, When, and Who fields, followed by listing teasers, provider CTA, destination inspiration tabs, and SEO footer."
  },
  {
    id: "wsa-010",
    title: "Open Source Launch Kit",
    category: "Template",
    fit: "MVPs, OSS projects, SaaS starters, indie product launches",
    summary:
      "A pragmatic open-source landing pattern with reusable sections, clean stack choices, visible repo trust, and copy that can be adapted quickly.",
    tags: ["open-source", "template", "Next.js", "Tailwind", "starter"],
    tone: "Pragmatic",
    complexity: "MVP",
    score: 88,
    referenceLinks: [
      {
        label: "GitHub landing-page topic",
        url: "https://github.com/topics/landing-page",
        why: "Lists open landing templates such as Cruip and ixartz with stars, topics, and source links."
      },
      {
        label: "GitHub nextjs-template topic",
        url: "https://github.com/topics/nextjs-template",
        why: "Useful for finding Next.js starter structures and SaaS templates."
      }
    ],
    githubLinks: [
      {
        label: "Cruip open-react-template",
        url: "https://github.com/cruip/open-react-template",
        why: "Open React/Next landing template for SaaS and startup pages."
      },
      {
        label: "ixartz Next.js Landing Page Starter",
        url: "https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template",
        why: "Developer-experience-focused starter with Next.js, TypeScript, ESLint, Tailwind, and deployment setup."
      }
    ],
    sourceNotes: [
      "For MVP demos, source-readability matters as much as visual polish.",
      "Templates should expose section data and tokens, not hard-coded one-off pages.",
      "Good starters include linting, TypeScript, and deployment assumptions."
    ],
    visual: {
      background: "#f8fafc",
      surface: "#ffffff",
      ink: "#0f172a",
      accent: "#2563eb",
      secondary: "#16a34a",
      layout: "Clean starter hero with section inventory and repo proof",
      typeScale: "Modern sans, compact code labels",
      motion: "Minimal hover states",
      density: "Open"
    },
    demo: {
      kind: "open-source-kit",
      kicker: "Starter kit",
      headline: "Ship a credible MVP site from reusable sections",
      subhead: "Hero, features, pricing, FAQ, and docs are wired as editable data.",
      primaryAction: "Use template",
      secondaryAction: "View repo",
      metrics: [
        { label: "Sections", value: "12" },
        { label: "Stack", value: "Next" },
        { label: "License", value: "MIT" }
      ],
      modules: ["Hero", "Features", "Pricing", "FAQ", "Docs"]
    },
    sections: [
      "Repo-aware hero",
      "Feature grid",
      "Product screenshot slot",
      "Pricing teaser",
      "FAQ",
      "Docs/install block"
    ],
    techniques: [
      "Keep the layout intentionally generic but the copy specific.",
      "Show the stack and license near the CTA for developer trust.",
      "Make each section removable without breaking rhythm."
    ],
    buildNotes: [
      "Use a sections config object and one component per section.",
      "Document which sections are optional for one-day MVPs.",
      "Keep no-image fallback layouts polished."
    ],
    starterPrompt:
      "Create an open-source MVP landing starter with data-driven sections: hero, feature grid, screenshot slot, pricing teaser, FAQ, install/docs block, and repo trust indicators for stack and license."
  },
  {
    id: "wsa-011",
    title: "Curated Inspiration Archive",
    category: "Gallery",
    fit: "Design libraries, internal inspiration boards, pattern archives, portfolio references",
    summary:
      "A curated gallery system with filters, categories, source notes, and review criteria so inspiration becomes reusable design intelligence.",
    tags: ["gallery", "curation", "filters", "taxonomy", "archive"],
    tone: "Curatorial",
    complexity: "Intermediate",
    score: 97,
    referenceLinks: [
      {
        label: "Landbook",
        url: "https://land-book.com/",
        why: "Hand-picked website inspiration with page-type filters such as landing, pricing, case study, and product pages."
      },
      {
        label: "Awwwards",
        url: "https://www.awwwards.com/websites/",
        why: "Award-oriented craft reference with dates, agency credits, and site-of-the-day signals."
      },
      {
        label: "Lapa Ninja",
        url: "https://www.lapa.ninja/",
        why: "Large landing-page screenshot archive with category, color, platform, year, motion, templates, and learning resources."
      }
    ],
    githubLinks: [
      {
        label: "Awesome Inspiration",
        url: "https://github.com/SHSFWork/awesome-inspiration",
        why: "Resource taxonomy across landing pages, SaaS, components, UX patterns, motion, and more."
      }
    ],
    sourceNotes: [
      "Curation needs taxonomy: page type, industry, tone, section pattern, and implementation effort.",
      "Screenshots alone are not enough; each entry needs why it is useful.",
      "Use quality gates so future additions stay coherent."
    ],
    visual: {
      background: "#eef2ef",
      surface: "#fbfaf5",
      ink: "#18211d",
      accent: "#315c48",
      secondary: "#c25a3c",
      layout: "Filterable masonry grid with source and quality metadata",
      typeScale: "Archive serif plus mono catalog labels",
      motion: "Filter sorting and lightbox transitions",
      density: "Dense"
    },
    demo: {
      kind: "curated-gallery",
      kicker: "Design archive",
      headline: "Turn inspiration into reusable website starting points",
      subhead: "Filter by intent, study the pattern, and open a build-ready MVP recipe.",
      primaryAction: "Open atlas",
      secondaryAction: "Add source",
      metrics: [
        { label: "Patterns", value: "12" },
        { label: "Sources", value: "30+" },
        { label: "Filters", value: "5" }
      ],
      modules: ["Category", "Tone", "Complexity", "Source", "Recipe"]
    },
    sections: [
      "Sticky filter toolbar",
      "Pattern cards",
      "Source notes",
      "Detail lightbox",
      "Build recipe",
      "Quality checklist"
    ],
    techniques: [
      "Show the practical use case before visual tags.",
      "Make source links first-class so research remains auditable.",
      "Add complexity to avoid choosing overbuilt patterns for small MVPs."
    ],
    buildNotes: [
      "Use static TypeScript data for easy review and git diffs.",
      "Keep cards scannable and move deeper notes into the detail view.",
      "Add a future capture workflow for screenshots and local thumbnails."
    ],
    starterPrompt:
      "Build a design inspiration archive with a sticky filter toolbar, cards for each website pattern, source links, complexity labels, visual tokens, detail lightbox, and build-ready starter prompts."
  },
  {
    id: "wsa-012",
    title: "SaaS Pattern Directory",
    category: "SaaS Reference",
    fit: "Marketing pages, pricing pages, feature pages, onboarding flows, product UI references",
    summary:
      "A section-level reference system that studies not only homepages, but pricing, FAQ, side panels, dashboards, onboarding, empty states, and product flows.",
    tags: ["SaaS", "patterns", "sections", "dashboard", "pricing"],
    tone: "Analytical",
    complexity: "Advanced",
    score: 96,
    referenceLinks: [
      {
        label: "SaaSFrame",
        url: "https://www.saasframe.io/examples/github-landing-page-9",
        why: "Detailed SaaS screen and section taxonomy, including landing pages, dashboards, pricing, features, and UI patterns."
      },
      {
        label: "SaaS Landing Page",
        url: "https://saaslandingpage.com/",
        why: "Landing examples, section categories, templates, stacks, tags, and popular fonts."
      },
      {
        label: "Lapa Ninja",
        url: "https://www.lapa.ninja/",
        why: "Broad landing-page archive with filters for category, color, platform, and year."
      }
    ],
    githubLinks: [
      {
        label: "GitHub nextjs-saas topic",
        url: "https://github.com/topics/nextjs-saas",
        why: "Useful repo discovery surface for SaaS boilerplates and product starter kits."
      }
    ],
    sourceNotes: [
      "Section-level references are more reusable than full-page cloning.",
      "Track both marketing sections and app UI patterns.",
      "A good atlas should answer: what to copy, what to avoid, and what to build first."
    ],
    visual: {
      background: "#f4f5f7",
      surface: "#ffffff",
      ink: "#101828",
      accent: "#7c3aed",
      secondary: "#0ea5e9",
      layout: "Directory with section taxonomy, screen flows, and comparison panels",
      typeScale: "Neutral sans with strong table labels",
      motion: "Panel slide and comparison hover",
      density: "Dense"
    },
    demo: {
      kind: "saas-patterns",
      kicker: "SaaS patterns",
      headline: "Choose the right section before designing the whole page",
      subhead: "Compare landing, pricing, onboarding, dashboard, and empty-state references.",
      primaryAction: "Compare patterns",
      secondaryAction: "Open checklist",
      metrics: [
        { label: "Screens", value: "100+" },
        { label: "Sections", value: "40+" },
        { label: "Flows", value: "12" }
      ],
      modules: ["Landing", "Pricing", "Dashboard", "Onboarding", "Empty state"]
    },
    sections: [
      "Section taxonomy",
      "Pattern comparison table",
      "Screen-flow preview",
      "Quality checklist",
      "Starter stack notes",
      "Reference links"
    ],
    techniques: [
      "Index by jobs-to-be-done, not only by industry.",
      "Compare patterns side by side when choosing for a new MVP.",
      "Keep implementation notes next to each pattern so design decisions survive handoff."
    ],
    buildNotes: [
      "Add a compare mode for selected entries.",
      "Use simple tables for pricing, onboarding, and dashboard pattern decisions.",
      "Store source metadata now, even before automated screenshot capture exists."
    ],
    starterPrompt:
      "Create a SaaS pattern directory with filters for section type, complexity, and tone. Include comparison cards for landing, pricing, onboarding, dashboards, and empty states, each with source links and implementation notes."
  }
];

export const categories = Array.from(
  new Set(websiteStyles.map((style) => style.category))
).sort();

export const tones = Array.from(new Set(websiteStyles.map((style) => style.tone))).sort();
