"use client";

import { Check, Copy, ExternalLink, GitBranch, ListChecks, Palette, X } from "lucide-react";
import type { ReactNode } from "react";
import { useState, useEffect, useId, useRef } from "react";
import { StylePreview } from "./ImageCard";
import type { WebsiteStyle } from "@/data/websiteStyles";

interface LightboxProps {
  item: WebsiteStyle | null;
  onClose: () => void;
}

type DetailTab = "recipe" | "sources" | "prompt";

export function StyleDetail({ item, onClose }: LightboxProps) {
  const [copyStatus, setCopyStatus] = useState("");
  const copySequence = useRef(0);
  const promptRef = useRef<HTMLParagraphElement>(null);
  const [tab, setTab] = useState<DetailTab>("recipe");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const needsLightDismiss = !("closedBy" in HTMLDialogElement.prototype);
    const outside = (event: PointerEvent) => {
      const rect = dialog.getBoundingClientRect();
      return event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom;
    };
    let pressedOutside = false;
    const pointerDown = (event: PointerEvent) => { pressedOutside = outside(event); };
    const pointerUp = (event: PointerEvent) => {
      if (pressedOutside && outside(event)) dialog.close();
      pressedOutside = false;
    };
    const pointerCancel = () => { pressedOutside = false; };
    if (needsLightDismiss) {
      dialog.addEventListener("pointerdown", pointerDown);
      dialog.addEventListener("pointerup", pointerUp);
      dialog.addEventListener("pointercancel", pointerCancel);
    }
    dialog.showModal();
    return () => {
      dialog.removeEventListener("pointerdown", pointerDown);
      dialog.removeEventListener("pointerup", pointerUp);
      dialog.removeEventListener("pointercancel", pointerCancel);
      dialog.close();
    };
  }, []);

  if (!item) return null;

  const handleCopyPrompt = async () => {
    const sequence = ++copySequence.current;
    setCopyStatus("");
    try {
      await navigator.clipboard.writeText(item.starterPrompt);
      if (sequence === copySequence.current) setCopyStatus(`Prompt copied.${sequence % 2 ? "" : "\u00a0"}`);
    } catch {
      if (sequence === copySequence.current) setCopyStatus("Copy unavailable. Select the prompt below and copy it manually.");
    }
  };

  const selectPrompt = () => {
    const prompt = promptRef.current;
    if (!prompt) return;
    prompt.focus();
    const range = document.createRange();
    range.selectNodeContents(prompt);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby={titleId}
      className="style-detail m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-7xl overflow-hidden border-0 bg-transparent p-0 text-[var(--color-ink)] shadow-[10px_10px_0_0_var(--color-ink)] sm:w-[calc(100%-4rem)]"
      onClose={() => {
        // Strict Mode may queue a close event during its setup/cleanup probe.
        if (!dialogRef.current?.open) onClose();
      }}
    >
      <button
        type="button"
        autoFocus
        onClick={() => dialogRef.current?.close()}
        className="absolute right-4 top-4 z-10 border-hard bg-[var(--color-paper)] p-2 shadow-[2px_2px_0_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative isolate flex max-h-[92dvh] w-full flex-col overflow-y-auto border-hard bg-[var(--color-paper-light)] xl:flex-row xl:overflow-hidden"
      >
        <div className="flex shrink-0 flex-col border-b-2 border-[var(--color-ink)] xl:min-h-0 xl:w-[58%] xl:shrink xl:overflow-y-auto xl:border-b-0 xl:border-r-2">
          <StylePreview item={item} compact />

          <div className="grid gap-0 border-t-2 border-[var(--color-ink)] sm:grid-cols-3">
            {item.demo.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b-2 border-[var(--color-ink)] p-4 last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0"
              >
                <p className="font-mono text-[10px] font-bold uppercase text-[var(--color-ink-light)]">
                  {metric.label}
                </p>
                <p className="font-mono text-2xl font-black">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-0 border-t-2 border-[var(--color-ink)] md:grid-cols-2">
            <DetailList title="MVP sections" items={item.sections} />
            <DetailList title="Design techniques" items={item.techniques} />
          </div>
        </div>

        <div className="flex shrink-0 flex-col p-5 sm:p-7 xl:min-h-0 xl:flex-1 xl:shrink xl:overflow-y-auto">
          <div>
            <p className="mb-2 font-mono text-xs font-bold uppercase text-[var(--color-ink-light)]">
              {item.id} / {item.category} / {item.complexity}
            </p>
            <h2 id={titleId} className="pr-12 font-serif text-4xl font-black leading-none">{item.title}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--color-ink-light)]">{item.summary}</p>
          </div>

          <div className="my-6 grid gap-0 border-y-2 border-[var(--color-ink)] font-mono text-xs sm:grid-cols-2">
            <Spec label="Tone" value={item.tone} />
            <Spec label="Fit" value={item.fit} />
            <Spec label="Layout" value={item.visual.layout} />
            <Spec label="Motion" value={item.visual.motion} />
          </div>

          <div className="mb-5 inline-flex border-hard bg-[var(--color-paper)]">
            <TabButton active={tab === "recipe"} onClick={() => setTab("recipe")} label="Recipe" />
            <TabButton active={tab === "sources"} onClick={() => setTab("sources")} label="Sources" />
            <TabButton active={tab === "prompt"} onClick={() => setTab("prompt")} label="Prompt" last />
          </div>

          {tab === "recipe" && (
            <div className="grid gap-5">
              <div>
                <h3 className="mb-3 flex items-center gap-2 border-b border-[var(--color-ink)] pb-2 font-mono text-xs font-black uppercase">
                  <ListChecks className="h-4 w-4" />
                  Build notes
                </h3>
                <ul className="grid gap-2 text-sm leading-6 text-[var(--color-ink-light)]">
                  {item.buildNotes.map((note) => (
                    <li key={note} className="border-l-4 border-[var(--color-accent)] pl-3">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 flex items-center gap-2 border-b border-[var(--color-ink)] pb-2 font-mono text-xs font-black uppercase">
                  <Palette className="h-4 w-4" />
                  Visual tokens
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Token label="Background" value={item.visual.background} />
                  <Token label="Surface" value={item.visual.surface} />
                  <Token label="Ink" value={item.visual.ink} />
                  <Token label="Accent" value={item.visual.accent} />
                  <Token label="Secondary" value={item.visual.secondary} />
                  <Token label="Density" value={item.visual.density} />
                </div>
              </div>
            </div>
          )}

          {tab === "sources" && (
            <div className="grid gap-5">
              <LinkGroup icon={<ExternalLink className="h-4 w-4" />} title="Reference sites" links={item.referenceLinks} />
              {item.githubLinks.length > 0 && (
                <LinkGroup icon={<GitBranch className="h-4 w-4" />} title="GitHub and template sources" links={item.githubLinks} />
              )}
              <div>
                <h3 className="mb-3 border-b border-[var(--color-ink)] pb-2 font-mono text-xs font-black uppercase">
                  Research notes
                </h3>
                <ul className="grid gap-2 text-sm leading-6 text-[var(--color-ink-light)]">
                  {item.sourceNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "prompt" && (
            <div>
              <div className="mb-3 flex items-center justify-between border-b border-[var(--color-ink)] pb-2">
                <h3 className="font-mono text-xs font-black uppercase">Starter prompt</h3>
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="inline-flex min-h-8 items-center gap-1 font-mono text-xs font-bold uppercase text-[var(--color-ink-light)] transition-colors hover:text-[var(--color-ink)]"
                >
                  {copyStatus.startsWith("Prompt copied") ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  Copy prompt
                </button>
              </div>
              <p role="status" aria-live="polite" className="mb-2 min-h-6 text-sm">{copyStatus}</p>
              {copyStatus.startsWith("Copy unavailable") && (
                <button type="button" onClick={selectPrompt} className="mb-3 min-h-8 underline underline-offset-4">
                  Select prompt text
                </button>
              )}
              <p ref={promptRef} tabIndex={-1} className="border border-dashed border-[var(--color-ink-light)] bg-[var(--color-paper)] p-4 font-mono text-sm leading-7">
                {item.starterPrompt}
              </p>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-b-2 border-[var(--color-ink)] p-4 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0">
      <h3 className="mb-3 font-mono text-[11px] font-black uppercase text-[var(--color-ink-light)]">
        {title}
      </h3>
      <ul className="grid gap-2 font-mono text-xs">
        {items.slice(0, 6).map((item) => (
          <li key={item} className="leading-5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--color-ink)] p-3 last:border-b-0 sm:border-b-0 sm:border-r sm:even:border-r-0">
      <span className="block text-[10px] font-bold uppercase text-[var(--color-ink-light)]">
        {label}
      </span>
      <span className="block leading-5">{value}</span>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  label,
  last = false,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 font-mono text-xs font-black uppercase ${
        !last ? "border-r-2 border-[var(--color-ink)]" : ""
      } ${active ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : ""}`}
    >
      {label}
    </button>
  );
}

function Token({ label, value }: { label: string; value: string }) {
  const isColor = value.startsWith("#");
  return (
    <div className="flex items-center gap-3 border border-[var(--color-ink)] bg-[var(--color-paper)] p-2">
      {isColor && (
        <span
          className="h-8 w-8 shrink-0 border border-[var(--color-ink)]"
          style={{ backgroundColor: value }}
        />
      )}
      <span className="min-w-0">
        <span className="block font-mono text-[10px] font-bold uppercase text-[var(--color-ink-light)]">
          {label}
        </span>
        <span className="block break-words font-mono text-xs">{value}</span>
      </span>
    </div>
  );
}

function LinkGroup({
  icon,
  title,
  links,
}: {
  icon: ReactNode;
  title: string;
  links: Array<{ label: string; url: string; why: string }>;
}) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 border-b border-[var(--color-ink)] pb-2 font-mono text-xs font-black uppercase">
        {icon}
        {title}
      </h3>
      <div className="grid gap-3">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group border border-[var(--color-ink)] bg-[var(--color-paper)] p-3 transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          >
            <span className="flex items-center justify-between gap-3 font-mono text-xs font-black uppercase">
              {link.label}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </span>
            <span className="mt-2 block text-sm leading-6 opacity-80">{link.why}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
