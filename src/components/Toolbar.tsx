"use client";

import { Search, Filter, Sparkles } from "lucide-react";

interface ToolbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  category: string;
  setCategory: (c: string) => void;
  categories: string[];
}

export function Toolbar({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
  categories,
}: ToolbarProps) {
  return (
    <div className="sticky top-0 z-30 w-full bg-[var(--color-paper)]/90 backdrop-blur-md border-b-2 border-hard py-4 px-4 sm:px-8 mb-8 shadow-[0_4px_0_0_var(--color-ink)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Title Logo Area */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Sparkles className="w-6 h-6 text-[var(--color-ink)]" />
          <h1 className="font-serif text-2xl font-black uppercase tracking-widest whitespace-nowrap">
            Style Atlas
          </h1>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto md:flex-1 justify-end">
          
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-ink-light)]" />
            <input
              type="text"
              placeholder="Search subjects, prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--color-paper-light)] border-hard py-2 pl-10 pr-4 font-mono text-sm placeholder:text-[var(--color-ink-light)] focus:outline-none focus:shadow-[2px_2px_0_0_var(--color-ink)] transition-shadow"
            />
          </div>

          {/* Categories */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-ink-light)] pointer-events-none" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none bg-[var(--color-paper-light)] border-hard py-2 pl-10 pr-10 font-mono text-sm focus:outline-none focus:shadow-[2px_2px_0_0_var(--color-ink)] transition-shadow cursor-pointer min-w-[140px]"
            >
              <option value="All">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none font-mono text-xs">
              ▼
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
