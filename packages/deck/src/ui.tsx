"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { EASE, Line, R } from "./motion";

export type Slide = { id: string; dark?: boolean; notes: string; render: (n: string) => ReactNode };

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <R className="eyebrow">
      <i />
      {children}
    </R>
  );
}

export function Foot({ left, right }: { left: ReactNode; right?: ReactNode }) {
  return (
    <R className="foot" i={6}>
      <span>{left}</span>
      <span>{right}</span>
    </R>
  );
}

export function Mark({ children, delay = 0.7 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="mark">
      <span>{children}</span>
      <Line delay={delay} />
    </span>
  );
}

export function Card({ i, tone, num, title, text, art }: { i: number; tone?: string; num?: string; title: string; text: string; art?: ReactNode }) {
  return (
    <R i={i} className={`card ${tone ?? ""}`}>
      {art}
      {num && <span className="num">{num}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </R>
  );
}

export function Contours() {
  return (
    <svg className="art" viewBox="0 0 1600 900" style={{ inset: 0, width: "100%", height: "100%" }} fill="none" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, k) => (
        <motion.ellipse
          key={k}
          cx="800"
          cy="250"
          rx={260 + k * 120}
          ry={110 + k * 70}
          stroke="#f8e9a4"
          strokeOpacity={0.12 - k * 0.01}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: EASE, delay: 0.1 + k * 0.08 }}
        />
      ))}
    </svg>
  );
}

export const tone = { green: "c-green", blue: "c-blue", lilac: "c-lilac", sand: "c-sand" };

export function PhotoSlot({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <motion.div
      className="photo-slot"
      style={style}
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
    >
      <span>{label}</span>
    </motion.div>
  );
}

export function Shot({ src, alt, caption, style, rotate = -1.2, delay = 0.45 }: { src: string; alt: string; caption?: string; style?: CSSProperties; rotate?: number; delay?: number }) {
  return (
    <motion.div
      className="shot"
      style={style}
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {/* biome-ignore lint/performance/noImgElement: static screenshot */}
      <img src={src} alt={alt} />
      {caption && <span className="caption">{caption}</span>}
    </motion.div>
  );
}

