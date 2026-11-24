"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight, Gauge, Layers3, Link2, Sparkles, Tags } from "lucide-react";
import type { WebsiteStyle } from "@/data/websiteStyles";

interface WebsiteStyleCardProps {
  item: WebsiteStyle;
  compact?: boolean;
  onOpen: () => void;
}

export function WebsiteStyleCard({ item, compact = false, onOpen }: WebsiteStyleCardProps) {
  const tokenStyle = {
    "--demo-bg": item.visual.background,
    "--demo-surface": item.visual.surface,
    "--demo-ink": item.visual.ink,
    "--demo-accent": item.visual.accent,
    "--demo-secondary": item.visual.secondary,
  } as CSSProperties;

  return (
    <button
      type="button"
      onClick={onOpen}
      style={tokenStyle}
      className={`group relative grid w-full cursor-pointer border-hard bg-[var(--color-paper-light)] text-left shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)] ${
        compact ? "lg:grid-cols-[360px_1fr]" : ""
      }`}
    >
      <div className={`border-b-2 border-[var(--color-ink)] ${compact ? "lg:border-b-0 lg:border-r-2" : ""}`}>
        <StylePreview item={item} compact={compact} />
      </div>

      <div className="flex min-h-[260px] flex-col gap-4 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] font-bold uppercase text-[var(--color-ink-light)]">
              <Layers3 className="h-3.5 w-3.5" />
              {item.id} / {item.category}
            </p>
            <h2 className="font-serif text-2xl font-black leading-tight">{item.title}</h2>
          </div>
          <span className="inline-flex items-center gap-1 border border-[var(--color-ink)] bg-[var(--color-paper)] px-2 py-1 font-mono text-[11px] font-bold uppercase">
            <Gauge className="h-3.5 w-3.5" />
            {item.score}
          </span>
        </div>

        <p className="text-sm leading-6 text-[var(--color-ink-light)]">{item.summary}</p>

        <div className="grid gap-3 border-y border-[var(--color-ink)] py-3 font-mono text-xs sm:grid-cols-2">
          <MetaLine label="Tone" value={item.tone} />
          <MetaLine label="Complexity" value={item.complexity} />
          <MetaLine label="Layout" value={item.visual.layout} wide />
          <MetaLine label="Fit" value={item.fit} wide />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 border border-[var(--color-ink)] bg-[var(--color-paper)] px-2 py-1 font-mono text-[10px] font-bold uppercase"
            >
              <Tags className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase text-[var(--color-ink-light)]">
            <Link2 className="h-3.5 w-3.5" />
            {item.referenceLinks.length + item.githubLinks.length} sources
          </p>
          <span className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-[var(--color-ink)]">
            Open study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

export function StylePreview({
  item,
  compact = false,
}: {
  item: WebsiteStyle;
  compact?: boolean;
}) {
  const previewClass = compact ? "min-h-[260px]" : "min-h-[300px]";
  const tokenStyle = {
    "--demo-bg": item.visual.background,
    "--demo-surface": item.visual.surface,
    "--demo-ink": item.visual.ink,
    "--demo-accent": item.visual.accent,
    "--demo-secondary": item.visual.secondary,
  } as CSSProperties;

  return (
    <div
      style={tokenStyle}
      className={`relative overflow-hidden bg-[var(--demo-bg)] p-4 text-[var(--demo-ink)] ${previewClass}`}
    >
      <div className="absolute inset-0 opacity-[0.08] atlas-grid" />
      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex items-center justify-between border-b border-[var(--demo-ink)]/20 pb-3 font-mono text-[10px] font-bold uppercase">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[var(--demo-accent)]" />
            {item.demo.kicker}
          </span>
          <span>{item.complexity}</span>
        </div>

        <PreviewBody item={item} />
      </div>
    </div>
  );
}

function PreviewBody({ item }: { item: WebsiteStyle }) {
  if (item.demo.kind === "marketplace-search") {
    return (
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <p className="mb-2 max-w-xs text-2xl font-black leading-none">{item.demo.headline}</p>
          <div className="grid gap-2 rounded-full border border-[var(--demo-ink)]/20 bg-[var(--demo-surface)] p-2 text-[var(--demo-ink)] shadow-xl sm:grid-cols-3">
            {item.demo.modules.slice(0, 3).map((module) => (
              <div key={module} className="rounded-full bg-white px-3 py-2 font-mono text-[10px] font-bold uppercase text-[#222]">
                {module}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["City", "Stay", "Host"].map((label) => (
            <div key={label} className="aspect-[4/3] rounded-md bg-[var(--demo-surface)]/90 p-2 text-[10px] text-[var(--demo-ink)]">
              <div className="mb-2 h-10 rounded bg-[var(--demo-accent)]/70" />
              <span className="font-mono font-bold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.demo.kind === "spatial-product") {
    return (
      <div className="flex flex-1 flex-col items-center justify-between gap-4 text-center">
        <div>
          <p className="font-serif text-3xl font-black leading-none">{item.demo.headline}</p>
          <p className="mt-2 text-xs opacity-75">{item.demo.subhead}</p>
        </div>
        <div className="relative h-28 w-44 rounded-[999px] border border-[var(--demo-ink)]/20 bg-[linear-gradient(135deg,var(--demo-surface),var(--demo-secondary))] shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
          <div className="absolute left-8 top-8 h-10 w-10 rounded-full border border-white/50 bg-white/70" />
          <div className="absolute right-8 top-8 h-10 w-10 rounded-full border border-white/50 bg-white/70" />
        </div>
        <div className="flex gap-2 font-mono text-[10px] font-bold uppercase">
          {item.demo.modules.slice(0, 3).map((module) => (
            <span key={module} className="border border-[var(--demo-ink)]/20 px-2 py-1">
              {module}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (item.demo.kind === "command-launcher") {
    return (
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div className="rounded-xl border border-white/10 bg-[var(--demo-surface)] p-3 shadow-2xl">
          <div className="mb-3 h-9 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs">
            {">"} Search actions
          </div>
          <div className="grid gap-2">
            {item.demo.modules.slice(0, 4).map((module) => (
              <div key={module} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 font-mono text-[10px]">
                <span>{module}</span>
                <span className="text-[var(--demo-accent)]">cmd</span>
              </div>
            ))}
          </div>
        </div>
        <KeyboardRows />
      </div>
    );
  }

  if (item.demo.kind === "diary-index") {
    return (
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <p className="font-serif text-2xl font-black leading-tight">{item.demo.headline}</p>
          <p className="mt-2 max-w-xs text-xs leading-5 opacity-75">{item.demo.subhead}</p>
        </div>
        <ol className="grid grid-cols-2 gap-x-4 border-t border-[var(--demo-ink)]/20">
          {item.demo.modules.slice(0, 6).map((module) => (
            <li key={module} className="flex items-center gap-3 border-b border-[var(--demo-ink)]/20 py-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--demo-accent)] font-serif text-sm font-bold text-[var(--demo-bg)]"
              >
                {module}
              </span>
              <span className="h-1.5 flex-1 rounded-full bg-[var(--demo-ink)]/15" />
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (item.demo.kind === "illustrated-craft") {
    return (
      <div className="grid flex-1 grid-cols-[1.15fr_0.85fr] gap-4">
        <figure className="flex flex-col gap-2">
          <div
            aria-hidden="true"
            className="relative aspect-[4/3] overflow-hidden border border-[var(--demo-ink)]/20 bg-[var(--demo-surface)]"
          >
            <svg viewBox="0 0 240 180" className="h-full w-full">
              {/* Matte cut-paper/gouache spot vignette floating on open warm paper */}
              <ellipse cx="122" cy="144" rx="64" ry="8" fill="var(--demo-ink)" fillOpacity="0.12" />
              <path
                d="M66 132 C58 96, 72 52, 110 46 C142 42, 162 68, 156 108 C152 128, 134 138, 104 138 C84 138, 70 136, 66 132 Z"
                fill="var(--demo-secondary)"
                fillOpacity="0.86"
              />
              <path
                d="M110 136 C106 104, 124 72, 154 68 C178 65, 192 86, 186 116 C181 134, 164 140, 138 140 C122 140, 112 139, 110 136 Z"
                fill="var(--demo-accent)"
                fillOpacity="0.9"
              />
              <circle cx="96" cy="86" r="14" fill="var(--demo-surface)" fillOpacity="0.92" />
              {/* Measured callout rule symbolizing data-driven diagram companion */}
              <line x1="24" y1="158" x2="216" y2="158" stroke="var(--demo-ink)" strokeOpacity="0.35" strokeWidth="1" />
              <line x1="24" y1="154" x2="24" y2="162" stroke="var(--demo-ink)" strokeOpacity="0.45" strokeWidth="1" />
              <line x1="120" y1="155" x2="120" y2="161" stroke="var(--demo-ink)" strokeOpacity="0.35" strokeWidth="1" />
              <line x1="216" y1="154" x2="216" y2="162" stroke="var(--demo-ink)" strokeOpacity="0.45" strokeWidth="1" />
            </svg>
          </div>
          <figcaption className="font-mono text-[10px] uppercase opacity-75">
            Fig. 1 / {item.demo.headline}
          </figcaption>
        </figure>
        <ul className="grid content-start gap-1.5 border-t border-[var(--demo-ink)]/20 pt-2">
          {item.demo.modules.slice(0, 5).map((module, index) => (
            <li
              key={module}
              className="flex items-center gap-2 border-b border-[var(--demo-ink)]/15 pb-1.5 font-mono text-[10px] font-bold uppercase"
            >
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 ${
                  index === 4
                    ? "border border-[var(--demo-secondary)]"
                    : index % 2
                      ? "bg-[var(--demo-secondary)]"
                      : "bg-[var(--demo-accent)]"
                }`}
              />
              {module}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (item.demo.kind === "curated-gallery" || item.demo.kind === "saas-patterns") {
    return (
      <div className="grid flex-1 grid-cols-3 gap-2">
        {item.demo.modules.slice(0, 6).map((module, index) => (
          <div
            key={module}
            className={`${index === 0 ? "col-span-2 row-span-2" : ""} border border-[var(--demo-ink)]/20 bg-[var(--demo-surface)] p-2 text-[var(--demo-ink)]`}
          >
            <div className="mb-2 h-10 bg-[var(--demo-accent)]/80" />
            <p className="font-mono text-[10px] font-bold uppercase">{module}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid flex-1 gap-4 md:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <p className="mb-3 max-w-sm font-serif text-3xl font-black leading-none">
            {item.demo.headline}
          </p>
          <p className="text-xs leading-5 opacity-75">{item.demo.subhead}</p>
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase">
          <span className="bg-[var(--demo-accent)] px-3 py-2 text-[var(--demo-bg)]">
            {item.demo.primaryAction}
          </span>
          <span className="border border-[var(--demo-ink)]/30 px-3 py-2">
            {item.demo.secondaryAction}
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="border border-[var(--demo-ink)]/20 bg-[var(--demo-surface)] p-3 text-[var(--demo-ink)]">
          <div className="mb-3 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[var(--demo-accent)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--demo-secondary)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--demo-ink)]/30" />
          </div>
          <div className="space-y-2">
            {item.demo.modules.slice(0, 4).map((module) => (
              <div key={module} className="flex items-center justify-between border-b border-[var(--demo-ink)]/15 pb-2 font-mono text-[10px]">
                <span>{module}</span>
                <span className="text-[var(--demo-accent)]">active</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {item.demo.metrics.map((metric) => (
            <div key={metric.label} className="bg-[var(--demo-surface)] p-2 text-[var(--demo-ink)]">
              <p className="font-mono text-[10px] uppercase opacity-60">{metric.label}</p>
              <p className="font-mono text-sm font-black">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KeyboardRows() {
  const keys = ["esc", "F1", "F2", "F3", "cmd", "K", "shift", "return"];
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {keys.map((key) => (
        <span
          key={key}
          className="rounded border border-white/10 bg-white/5 px-2 py-1 text-center font-mono text-[10px] uppercase text-white/70"
        >
          {key}
        </span>
      ))}
    </div>
  );
}

function MetaLine({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <span className="block text-[10px] font-bold uppercase text-[var(--color-ink-light)]">
        {label}
      </span>
      <span className="block leading-5 text-[var(--color-ink)]">{value}</span>
    </div>
  );
}
