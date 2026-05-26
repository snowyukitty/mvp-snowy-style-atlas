"use client";

import { useState, useMemo } from "react";
import { ImageCard, ImageItem } from "./ImageCard";
import { Toolbar } from "./Toolbar";
import { Lightbox } from "./Lightbox";

interface GalleryClientProps {
  initialImages: ImageItem[];
}

export function GalleryClient({ initialImages }: GalleryClientProps) {
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(images.map((img) => img.category));
    return Array.from(cats).sort();
  }, [images]);

  const filteredImages = useMemo(() => {
    return images.filter((img) => {
      const matchesSearch =
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = category === "All" || img.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [images, searchQuery, category]);

  const handleVote = async (id: string) => {
    // Optimistic update
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, score: img.score + 1 } : img
      )
    );
    if (selectedImage?.id === id) {
      setSelectedImage((prev) => (prev ? { ...prev, score: prev.score + 1 } : prev));
    }

    try {
      await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    } catch (error) {
      console.error("Failed to vote:", error);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Toolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-8">
        {filteredImages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-[var(--color-ink-light)] border-2 border-dashed border-[var(--color-ink-light)]">
            <p className="font-mono uppercase tracking-widest text-sm">No entries found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((img) => (
              <ImageCard
                key={img.id}
                item={img}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedImage && (
        <Lightbox
          item={selectedImage}
          onClose={() => setSelectedImage(null)}
          onVote={handleVote}
        />
      )}
    </div>
  );
}
