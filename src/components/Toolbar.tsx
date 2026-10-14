"use client";

import type { ReactNode } from "react";
import {
  ArrowDownWideNarrow,
  Filter,
  Grid3X3,
  Rows3,
  RotateCcw,
  Search,
  Sparkles,
} from "lucide-react";
import type { Complexity } from "@/data/websiteStyles";

interface ToolbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  category: string;
  setCategory: (c: string) => void;
  categories: string[];
  tone: string;
  setTone: (tone: string) => void;
  tones: string[];
  complexity: Complexity | "All";
  setComplexity: (complexity: Complexity | "All") => void;
  sortMode: "score" | "title" | "complexity";
  setSortMode: (sortMode: "score" | "title" | "complexity") => void;
  viewMode: "grid" | "compact";
  setViewMode: (viewMode: "grid" | "compact") => void;
  onClearFilters: () => void;
  activeFilters: number;
}

export function AtlasToolbar({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
  categories,
  tone,
  setTone,
  tones,
  complexity,
  setComplexity,
  sortMode,
  setSortMode,
  viewMode,
  setViewMode,
  onClearFilters,
  activeFilters,
}: ToolbarProps) {
  return (
    <div className="sticky top-0 z-30 mb-8 w-full border-b-2 border-[var(--color-ink)] bg-[var(--color-paper)]/92 px-4 py-3 shadow-[0_4px_0_0_var(--color-ink)] backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Sparkles className="h-6 w-6 shrink-0 text-[var(--color-accent)]" />
            <h1 className="font-serif text-2xl font-black uppercase leading-none">
              Website Style Atlas
            </h1>
          </div>
        </div>

        <div className="grid gap-2 lg:grid-cols-[minmax(260px,1fr)_repeat(4,minmax(150px,180px))]">
            <div className="relative min-w-0">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-ink-light)]" />
              <input
                type="text"
                aria-label="Search patterns"
                placeholder="Search patterns, sources, sections..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full border-hard bg-[var(--color-paper-light)] py-2 pl-10 pr-4 font-mono text-sm placeholder:text-[var(--color-ink-light)] focus:outline-none focus:shadow-[2px_2px_0_0_var(--color-ink)]"
              />
            </div>

              <IconSelect
                icon={<Filter className="h-4 w-4" />}
                label="Category"
                value={category}
                onChange={setCategory}
                options={["All", ...categories]}
              />
              <IconSelect
                icon={<Sparkles className="h-4 w-4" />}
                label="Tone"
                value={tone}
                onChange={setTone}
                options={["All", ...tones]}
              />
              <IconSelect
                icon={<Rows3 className="h-4 w-4" />}
                label="Complexity"
                value={complexity}
                onChange={(value) => setComplexity(value as Complexity | "All")}
                options={["All", "MVP", "Intermediate", "Advanced"]}
              />
              <IconSelect
                icon={<ArrowDownWideNarrow className="h-4 w-4" />}
                label="Sort"
                value={sortMode}
                onChange={(value) => setSortMode(value as "score" | "title" | "complexity")}
                options={["score", "title", "complexity"]}
              />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-ink)] pt-3">
          <div className="inline-flex border-hard bg-[var(--color-paper-light)]">
            <button
              type="button"
              title="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
              className={`flex h-9 w-10 items-center justify-center border-r-2 border-[var(--color-ink)] ${
                viewMode === "grid" ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : ""
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Compact view"
              aria-pressed={viewMode === "compact"}
              onClick={() => setViewMode("compact")}
              className={`flex h-9 w-10 items-center justify-center ${
                viewMode === "compact" ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : ""
              }`}
            >
              <Rows3 className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center gap-2 border-hard bg-[var(--color-paper-light)] px-3 py-2 font-mono text-xs font-bold uppercase shadow-[2px_2px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
            {activeFilters > 0 && (
              <span className="inline-flex min-w-5 items-center justify-center bg-[var(--color-accent)] px-1 text-[var(--color-paper)]">
                {activeFilters}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function IconSelect({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="relative inline-flex min-w-[150px] flex-1 items-center sm:flex-none">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-light)]">
        {icon}
      </span>
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full appearance-none border-hard bg-[var(--color-paper-light)] py-2 pl-10 pr-8 font-mono text-xs font-bold uppercase focus:outline-none focus:shadow-[2px_2px_0_0_var(--color-ink)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === "All" ? `All ${label}` : option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs">
        v
      </span>
    </label>
  );
}
