"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode, SVGProps } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE, delay: 0.08 + i * 0.07 },
  }),
};

export function R({ i = 0, children, className, as = "div" }: { i?: number; children: ReactNode; className?: string; as?: "div" | "span" | "p" | "h1" | "h2" }) {
  const C = motion[as];
  return (
    <C className={className} variants={reveal} custom={i} initial="hidden" animate="show">
      {children}
    </C>
  );
}

export function Words({ text, i = 0, className }: { text: string; i?: number; className?: string }) {
  return (
    <span className={className} style={{ display: "inline" }}>
      {text.split(" ").map((w, k) => (
        <motion.span
          key={`${w}-${k}`}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          variants={reveal}
          custom={i + k * 0.6}
          initial="hidden"
          animate="show"
        >
          {w}
          {k < text.split(" ").length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}

export function Line({ delay = 0.5, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.b
      className={className}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    />
  );
}

type PathProps = SVGProps<SVGPathElement> & { d: string; at?: number; dur?: number };

export function P({ at = 0, dur = 1.1, fill, ...rest }: PathProps) {
  const hasFill = fill && fill !== "none";
  return (
    <motion.path
      {...(rest as object)}
      fill={fill ?? "none"}
      initial={{ pathLength: 0, fillOpacity: hasFill ? 0 : undefined }}
      animate={{ pathLength: 1, fillOpacity: hasFill ? 1 : undefined }}
      transition={{
        pathLength: { duration: dur, ease: EASE, delay: 0.25 + at },
        fillOpacity: { duration: 0.5, ease: "easeOut", delay: 0.25 + at + dur * 0.6 },
      }}
    />
  );
}

export function Pop({ at = 0, children }: { at?: number; children: ReactNode }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.25 + at }}
    >
      {children}
    </motion.g>
  );
}

export function Float({ children, amp = 6, dur = 6 }: { children: ReactNode; amp?: number; dur?: number }) {
  return (
    <motion.g animate={{ y: [0, -amp, 0] }} transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.g>
  );
}
