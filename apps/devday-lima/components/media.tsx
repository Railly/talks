"use client";

import { EASE, R, Words } from "@talks/deck";
import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

function Clip({ name }: { name: string }) {
  return <video src={`/clips/${name}.mp4`} poster={`/clips/${name}.jpg`} autoPlay muted loop playsInline />;
}

export function Full({ clip, title, sub, src }: { clip: string; title?: string; sub?: ReactNode; src: string }) {
  return (
    <>
      <motion.div className="full" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: EASE }}>
        <Clip name={clip} />
      </motion.div>
      <span className="src">{src}</span>
      {(title || sub) && (
        <div className="full-cap">
          {title && <h2><Words text={title} i={2} /></h2>}
          {sub && <R i={5} as="p">{sub}</R>}
        </div>
      )}
    </>
  );
}

export function Side({ clip, src, style }: { clip: string; src: string; style?: CSSProperties }) {
  return (
    <motion.div className="side" style={style} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}>
      <Clip name={clip} />
      <span className="src">{src}</span>
    </motion.div>
  );
}

export function Duo({ items, three }: { items: { clip: string; title: string; text: string }[]; three?: boolean }) {
  return (
    <div className={`duo${three ? " three" : ""}`}>
      {items.map((it, k) => (
        <R key={it.clip} i={2 + k}>
          <figure>
            <div className="frame"><Clip name={it.clip} /></div>
            <figcaption><b>{it.title}.</b> {it.text}</figcaption>
          </figure>
        </R>
      ))}
    </div>
  );
}
