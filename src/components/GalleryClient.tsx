"use client";

import { useState, useMemo } from "react";
import { Archive, ExternalLink, Layers3 } from "lucide-react";
import { WebsiteStyleCard } from "./ImageCard";
import { AtlasToolbar } from "./Toolbar";
import { StyleDetail } from "./Lightbox";
import type { Complexity, WebsiteStyle } from "@/data/websiteStyles";

interface GalleryClientProps {
  initialStyles: WebsiteStyle[];
}

type SortMode = "score" | "title" | "complexity";
type ViewMode = "grid" | "compact";

const complexityWeight: Record<Complexity, number> = {
  MVP: 0,
  Intermediate: 1,
  Advanced: 2,
};

export function GalleryClient({ initialStyles }: GalleryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tone, setTone] = useState("All");
  const [complexity, setComplexity] = useState<Complexity | "All">("All");
  const [sortMode, setSortMode] = useState<SortMode>("score");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedStyle, setSelectedStyle] = useState<WebsiteStyle | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(initialStyles.map((style) => style.category));
    return Array.from(cats).sort();
  }, [initialStyles]);

  const tones = useMemo(() => {
    const allTones = new Set(initialStyles.map((style) => style.tone));
    return Array.from(allTones).sort();
  }, [initialStyles]);

  const filteredStyles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);

    const filtered = initialStyles.filter((style) => {
      const searchableText = [
        style.title,
        style.category,
        style.fit,
        style.summary,
        style.tone,
        style.complexity,
        style.visual.layout,
        style.starterPrompt,
        ...style.tags,
        ...style.sections,
        ...style.techniques,
        ...style.demo.modules,
        ...style.referenceLinks.map((link) => `${link.label} ${link.why}`),
        ...style.githubLinks.map((link) => `${link.label} ${link.why}`),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchTerms.length === 0 || searchTerms.every((term) => searchableText.includes(term));

      const matchesCategory = category === "All" || style.category === category;
      const matchesTone = tone === "All" || style.tone === tone;
      const matchesComplexity = complexity === "All" || style.complexity === complexity;

      return matchesSearch && matchesCategory && matchesTone && matchesComplexity;
    });

    return filtered.sort((a, b) => {
      if (sortMode === "title") return a.title.localeCompare(b.title);
      if (sortMode === "complexity") {
        return complexityWeight[a.complexity] - complexityWeight[b.complexity];
      }
      return b.score - a.score;
    });
  }, [category, complexity, initialStyles, searchQuery, sortMode, tone]);

  const sourceCount = useMemo(() => {
    const links = new Set<string>();
    initialStyles.forEach((style) => {
      style.referenceLinks.forEach((link) => links.add(link.url));
      style.githubLinks.forEach((link) => links.add(link.url));
    });
    return links.size;
  }, [initialStyles]);

  const activeFilters = [category, tone, complexity].filter((value) => value !== "All").length;

  const clearFilters = () => {
    setSearchQuery("");
    setCategory("All");
    setTone("All");
    setComplexity("All");
    setSortMode("score");
  };

  return (
    <div className="min-h-screen pb-16">
      <AtlasToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        category={category}
        setCategory={setCategory}
        categories={categories}
        tone={tone}
        setTone={setTone}
        tones={tones}
        complexity={complexity}
        setComplexity={setComplexity}
        sortMode={sortMode}
        setSortMode={setSortMode}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onClearFilters={clearFilters}
        activeFilters={activeFilters}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-8">
        <section className="atlas-band overflow-hidden border-hard bg-[var(--color-paper-light)]">
          <div className="grid min-w-0 gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0 p-5 sm:p-7">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase text-[var(--color-ink-light)]">
                <Archive className="h-4 w-4" />
                Website Style Atlas
              </p>
              <h1 className="max-w-4xl break-words font-serif text-3xl font-black leading-[1.02] sm:text-5xl">
                MVP website patterns distilled from high-craft product sites and open-source templates.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-ink-light)]">
                Each entry captures the reference sites, design DNA, reusable sections,
                implementation notes, and a build-ready starter prompt for future websites.
              </p>
            </div>
            <div className="grid min-w-0 border-t-2 border-[var(--color-ink)] sm:grid-cols-3 lg:border-l-2 lg:border-t-0 lg:grid-cols-1">
              <AtlasMetric label="Patterns" value={initialStyles.length.toString().padStart(2, "0")} />
              <AtlasMetric label="Categories" value={categories.length.toString().padStart(2, "0")} />
              <AtlasMetric label="Sources" value={`${sourceCount}+`} />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 border-y-2 border-[var(--color-ink)] py-3">
          <p className="font-mono text-xs uppercase text-[var(--color-ink-light)]">
            Showing <span className="font-bold text-[var(--color-ink)]">{filteredStyles.length}</span>{" "}
            of {initialStyles.length} patterns
          </p>
          <a
            href="https://github.com/topics/landing-page"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
          >
            GitHub template source
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {filteredStyles.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[var(--color-ink-light)] bg-[var(--color-paper-light)] px-4 py-20 text-center text-[var(--color-ink-light)]">
            <Layers3 className="h-8 w-8" />
            <p className="font-mono text-sm font-bold uppercase">No matching patterns</p>
            <button
              onClick={clearFilters}
              className="border-hard bg-[var(--color-paper)] px-4 py-2 font-mono text-xs font-bold uppercase text-[var(--color-ink)] shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                : "grid grid-cols-1 gap-4"
            }
          >
            {filteredStyles.map((style) => (
              <WebsiteStyleCard
                key={style.id}
                item={style}
                compact={viewMode === "compact"}
                onOpen={() => setSelectedStyle(style)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedStyle && (
        <StyleDetail item={selectedStyle} onClose={() => setSelectedStyle(null)} />
      )}
    </div>
  );
}

function AtlasMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b-2 border-[var(--color-ink)] p-5 last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0 lg:border-b-2 lg:border-r-0 lg:last:border-b-0">
      <span className="font-mono text-xs font-bold uppercase text-[var(--color-ink-light)]">
        {label}
      </span>
      <span className="font-mono text-3xl font-black text-[var(--color-ink)]">{value}</span>
    </div>
  );
}
