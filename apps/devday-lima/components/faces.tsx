"use client";

import { EASE } from "@talks/deck";
import { motion } from "motion/react";

export type Face = { x: number; y: number; r: number; c: string; f: string };

const C = { blue: "#0066ff", orange: "#f06c00", green: "#00a63e", purple: "#9250f5", ink: "#262626", gray: "#e0e0e0" };

export const COVER: Face[] = [
  { x: 1040, y: 120, r: 110, c: C.orange, f: "‾ ‾" },
  { x: 1250, y: 260, r: 150, c: C.green, f: "+ +" },
  { x: 900, y: 330, r: 120, c: C.blue, f: "> <" },
  { x: 1120, y: 520, r: 170, c: C.purple, f: "o O" },
  { x: 1400, y: 560, r: 90, c: C.blue, f: "> <" },
  { x: 930, y: 640, r: 80, c: C.ink, f: "^ ^" },
  { x: 1460, y: 130, r: 70, c: C.gray, f: "* *" },
];

export const CORNER: Face[] = [
  { x: 1390, y: 110, r: 70, c: C.blue, f: "> <" },
  { x: 1500, y: 210, r: 44, c: C.orange, f: "‾ ‾" },
  { x: 1300, y: 200, r: 34, c: C.green, f: "+ +" },
];

export function Faces({ faces, delay = 0.1 }: { faces: Face[]; delay?: number }) {
  return (
    <>
      {faces.map((f, k) => (
        <motion.div
          key={`${f.x}-${f.y}`}
          className="face"
          style={{ left: f.x - f.r, top: f.y - f.r, width: f.r * 2, height: f.r * 2, background: f.c, fontSize: f.r * 0.62, color: f.c === C.ink ? "#fbfbfa" : "#111" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
          transition={{
            scale: { duration: 0.7, ease: EASE, delay: delay + k * 0.07 },
            opacity: { duration: 0.4, delay: delay + k * 0.07 },
            y: { duration: 4 + (k % 3), repeat: Infinity, ease: "easeInOut", delay: delay + 0.8 },
          }}
        >
          <span style={{ letterSpacing: "0.3em", marginRight: "-0.3em" }}>{f.f}</span>
        </motion.div>
      ))}
    </>
  );
}
