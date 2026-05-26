"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Tag, Image as ImageIcon } from "lucide-react";

export type ImageItem = {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  tags: string[];
  prompt: string;
  model?: string;
  palette?: string;
  mood?: string;
  thumb: string;
  display: string;
  original?: string;
  score: number;
};

interface ImageCardProps {
  item: ImageItem;
  onClick: () => void;
}

export function ImageCard({ item, onClick }: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col bg-[var(--color-paper-light)] border-hard cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_var(--color-ink)] shadow-[4px_4px_0_0_var(--color-ink)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] w-full border-b-2 border-[var(--color-ink)] overflow-hidden bg-[var(--color-paper)] p-2">
        <div className="relative w-full h-full border border-[var(--color-ink-light)] border-dashed">
          {/* Using img for external unsplash URLs to avoid next/image host config issues in MVP */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.thumb}
            alt={item.title}
            className="object-cover w-full h-full grayscale-[20%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
        
        {/* Score badge */}
        <div className="absolute top-4 right-4 bg-[var(--color-paper)] border-hard px-2 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_var(--color-ink)]">
          <Heart className="w-3 h-3" />
          <span className="font-mono text-xs font-bold">{item.score}</span>
        </div>
      </div>

      {/* Metadata container */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-light)] mb-1 flex items-center gap-1">
            <ImageIcon className="w-3 h-3" />
            No. {item.id.split("-")[1] || "000"} — {item.category}
          </p>
          <h3 className="font-serif text-xl font-bold leading-tight">{item.title}</h3>
          {item.titleEn && (
            <p className="font-mono text-xs text-[var(--color-ink-light)] mt-1">{item.titleEn}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mt-auto">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-1.5 py-0.5 border border-[var(--color-ink)] bg-[var(--color-paper)]"
            >
              #{tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="font-mono text-[10px] px-1.5 py-0.5 text-[var(--color-ink-light)]">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
