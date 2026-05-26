"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import type { ImageItem } from "./ImageCard";

interface LightboxProps {
  item: ImageItem | null;
  onClose: () => void;
  onVote?: (id: string) => void;
}

export function Lightbox({ item, onClose, onVote }: LightboxProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(item.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[var(--color-paper)]/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--color-paper-light)] border-hard shadow-[12px_12px_0_0_var(--color-ink)] flex flex-col md:flex-row overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-[var(--color-paper)] border-hard shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-2/3 h-[40vh] md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-ink)] relative bg-[var(--color-paper)] p-4">
            <div className="relative w-full h-full border border-[var(--color-ink-light)] border-dashed flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.display}
                alt={item.title}
                className="object-contain w-full h-full max-h-full"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/3 flex flex-col h-full max-h-[50vh] md:max-h-none overflow-y-auto p-6 md:p-8 gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-light)] mb-2">
                Atlas Entry No. {item.id.split("-")[1] || "000"}
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight mb-1">{item.title}</h2>
              {item.titleEn && (
                <p className="font-mono text-sm text-[var(--color-ink-light)]">{item.titleEn}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-xs font-bold uppercase border-b border-[var(--color-ink)] pb-1">
                Specifications
              </h4>
              <div className="grid grid-cols-2 gap-y-2 font-mono text-xs">
                <span className="text-[var(--color-ink-light)]">Category:</span>
                <span>{item.category}</span>
                <span className="text-[var(--color-ink-light)]">Model:</span>
                <span>{item.model || "Unknown"}</span>
                {item.palette && (
                  <>
                    <span className="text-[var(--color-ink-light)]">Palette:</span>
                    <span>{item.palette}</span>
                  </>
                )}
                {item.mood && (
                  <>
                    <span className="text-[var(--color-ink-light)]">Mood:</span>
                    <span>{item.mood}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-xs font-bold uppercase border-b border-[var(--color-ink)] pb-1 flex justify-between items-end">
                <span>Prompt</span>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-1 text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </h4>
              <p className="font-serif text-sm leading-relaxed bg-[var(--color-paper)] p-3 border border-[var(--color-ink-light)] border-dashed">
                {item.prompt}
              </p>
            </div>

            <div className="mt-auto pt-6 flex gap-4">
              <button 
                onClick={() => onVote?.(item.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-ink)] text-[var(--color-paper)] font-mono text-xs font-bold uppercase py-3 border-hard shadow-[4px_4px_0_0_var(--color-ink-light)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink-light)] transition-all"
              >
                <Heart className="w-4 h-4" />
                <span>Vote ({item.score})</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
