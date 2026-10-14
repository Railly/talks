"use client";

import { Card, Conversation, Cube, Eyebrow, Foot, Hub, Notebook, Orbit, R, Shot, type Slide, Stack, tone, Words } from "@talks/deck";
import type { ReactNode } from "react";
import content from "./content.json";

type Item = { label: string; body?: string };
type Source = { section: string; layout: string; title: string; subtitle?: string; items?: Item[]; quote?: string; footer?: string; qr?: { url: string; label: string } };

const tones = [tone.green, tone.blue, tone.lilac, tone.sand];
const isUrl = (s?: string) => !!s && /^https:\/\/\S+$/.test(s);
const pretty = (s: string) => s.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
const dark = new Set(["cover", "question", "definition", "closing"]);
const art: Record<string, (c: string) => ReactNode> = {
  cover: (c) => <Orbit size={480} className="art" style={{ right: 80, top: 260, color: c }} />,
  definition: (c) => <Notebook size={360} className="art" style={{ right: 80, top: 60, color: c }} />,
  ownership: (c) => <Cube size={280} className="art" style={{ right: 90, top: 60, color: c }} />,
  workflow: (c) => <Hub size={260} className="art" style={{ right: 90, top: 50, color: c }} />,
  retrieve: (c) => <Stack size={260} className="art" style={{ right: 90, top: 50, color: c }} />,
  question: (c) => <Conversation size={380} className="art" style={{ right: 100, top: 280, color: c }} />,
};

function render(s: Source, n: string) {
  const isDark = dark.has(s.layout);
  const ink = isDark ? "#f8e9a4" : "var(--muted)";
  const items = s.items ?? [];
  const big = s.layout === "cover" || s.layout === "question";
  return (
    <>
      <Eyebrow>{s.section}</Eyebrow>
      <div className="body">
        {big ? (
          <h1 style={{ maxWidth: 1000 }}><Words text={s.title} /></h1>
        ) : (
          <h2><Words text={s.title} /></h2>
        )}
        {s.subtitle && <R i={4} as="p" className="lead">{s.subtitle}</R>}
        {s.quote && (
          <R i={5} as="p" className="lead" >
            <span className="hl">{isUrl(s.quote) ? pretty(s.quote) : s.quote}</span>
          </R>
        )}
        {items.length > 0 && !s.qr && (
          <div className="cards" style={{ ["--n" as string]: Math.min(items.length, 4) }}>
            {items.map((it, k) => (
              <Card
                key={it.label}
                i={5 + k}
                tone={isDark ? undefined : tones[k % tones.length]}
                num={String(k + 1).padStart(2, "0")}
                title={it.label}
                text={it.body ? (isUrl(it.body) ? pretty(it.body) : it.body) : ""}
              />
            ))}
          </div>
        )}
        {s.qr && (
          <R i={5} className="links" >
            {items.map((it) => (
              <div key={it.label}><small>{it.label}</small><span style={{ fontSize: 34 }}>{it.body ? pretty(it.body) : ""}</span></div>
            ))}
          </R>
        )}
      </div>
      <Foot left={s.footer ?? ""} right={n} />
      {s.qr ? (
        <Shot src="/img/qr.png" alt={`QR para ${s.qr.url}`} caption={pretty(s.qr.url)} style={{ right: 110, top: 90, width: 300, background: "#fff" }} rotate={0} />
      ) : (
        art[s.layout]?.(ink)
      )}
    </>
  );
}

export const slides: Slide[] = (content.slides as Source[]).map((s, i) => ({
  id: `s${i + 1}`,
  dark: dark.has(s.layout),
  notes: "",
  render: (n) => render(s, n),
}));
