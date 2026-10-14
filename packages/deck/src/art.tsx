"use client";

import { Float, P, Pop } from "./motion";

const ell = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${rx * 2} 0a${rx} ${ry} 0 1 0 ${-rx * 2} 0Z`;

type ArtProps = { size?: number; className?: string; style?: import("react").CSSProperties };

export function Orbit({ size = 280, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 280 180" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1.3}>
        <g transform="rotate(-27 140 90)">
          <P d={ell(140, 90, 34, 21)} />
          <P d={ell(140, 90, 57, 35)} at={0.15} />
          <P d={ell(140, 90, 80, 50)} at={0.3} />
        </g>
        <P d="M36 90h208M140 20v140" strokeDasharray="2 5" opacity={0.4} at={0.4} />
        <Pop at={0.7}><circle cx="140" cy="90" r="11" fill="currentColor" /></Pop>
        <Pop at={0.9}><circle cx="199" cy="52" r="7" fill="var(--canvas)" /></Pop>
        <P d="M46 44h14m-7-7v14M218 139h14m-7-7v14" at={0.8} dur={0.5} />
      </g>
    </svg>
  );
}

export function Stack({ size = 280, className, style }: ArtProps) {
  const layer = (y: number, at: number, code = false) => (
    <g transform={`translate(0 ${y})`} key={y}>
      <P d="m67 105 73-38 73 38-73 39Z" fill="var(--canvas)" at={at} />
      <P d="M67 105v12l73 39 73-39v-12M140 144v12" at={at + 0.1} />
      {code && <P d="m119 96-17 9 17 9m42-18 17 9-17 9m-15-18-12 18" strokeWidth={2.5} at={at + 0.4} dur={0.6} />}
    </g>
  );
  return (
    <svg viewBox="0 0 280 180" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1.3}>
        {layer(0, 0)}
        {layer(-28, 0.2)}
        {layer(-56, 0.4, true)}
        <P d="M39 120h16m-8-8v16M229 39h14m-7-7v14" opacity={0.6} at={0.8} dur={0.5} />
      </g>
    </svg>
  );
}

export function Cube({ size = 280, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 280 180" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1.3}>
        <P d="m83 55 62-24 60 25-62 25Z" fill="currentColor" fillOpacity={0.16} />
        <P d="m83 55 62-24 60 25-62 25Zm0 0v68l60 29 62-28V56M143 81v71" at={0.15} />
        <P d="m96 88 33 15m-17-23v31" strokeWidth={6} strokeLinecap="square" at={0.6} dur={0.5} />
        <Pop at={0.9}>
          <ellipse cx="164" cy="105" rx="5" ry="7" fill="currentColor" />
          <ellipse cx="184" cy="95" rx="5" ry="7" fill="currentColor" />
        </Pop>
        <P d="M53 43h16m-8-8v16M220 133h16m-8-8v16" at={0.8} dur={0.5} />
      </g>
    </svg>
  );
}

export function Hub({ size = 280, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 280 180" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1.3}>
        <P d={ell(140, 90, 54, 54)} strokeDasharray="2 6" opacity={0.45} />
        <P d="M68 90h144M140 23v134M92 42l96 96M92 138l96-96" opacity={0.5} at={0.2} />
        {[
          [68, 90],
          [140, 23],
          [212, 90],
          [140, 157],
        ].map(([x, y], k) => (
          <Pop key={k} at={0.5 + k * 0.08}>
            <circle cx={x} cy={y} r="8" fill="var(--canvas)" stroke="currentColor" />
          </Pop>
        ))}
        <Pop at={0.8}><circle cx="140" cy="90" r="31" fill="var(--canvas)" stroke="currentColor" /></Pop>
      </g>
    </svg>
  );
}

export function Coffee({ size = 380, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 430 310" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={3} strokeLinecap="round">
        <Float amp={5} dur={4}>
          <P d="M167 101c-58-47 66-45 16-96M220 98c55-49-66-49-13-93M258 107c-35-30 47-36 23-69" at={0.6} dur={1.4} />
        </Float>
      </g>
      <P d={ell(212, 271, 142, 22)} stroke="currentColor" strokeWidth={2} />
      <P d="M307 137h34c64 0 52 89-21 85" stroke="currentColor" strokeWidth={22} at={0.2} />
      <P d="M102 129h213l-18 106c-5 53-166 53-178 0Z" fill="currentColor" stroke="currentColor" at={0.1} />
      <P d={ell(208, 130, 107, 26)} fill="var(--canvas)" stroke="currentColor" strokeWidth={3} at={0.3} />
      <P d={ell(208, 134, 86, 16)} fill="currentColor" at={0.4} />
      <P d="m178 172-22 22 22 22m58-44 22 22-22 22m-19-54-15 67" stroke="var(--canvas)" strokeWidth={6} at={0.8} dur={0.7} />
    </svg>
  );
}

export function Boat({ size = 460, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 460 310" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <Float amp={7} dur={5}>
        <g stroke="#f8e9a4" strokeWidth={1.5} strokeLinejoin="round">
          <P d="m49 199 190-84 176 84-164 86Z" fill="#25291f" />
          <P d="m49 199 142 9 48-93Z" fill="#f8e9a4" at={0.15} />
          <P d="m191 208 48-174 49 174Z" fill="#f8e9a4" at={0.3} />
          <P d="m239 34 49 174 127-9Z" fill="#b4a56c" at={0.4} />
          <P d="m49 199 202 86 164-86-164 30Z" fill="#f8e9a4" at={0.5} />
          <P d="m49 199 202 30 164-30M239 34v195" stroke="#25291f" at={0.8} />
        </g>
      </Float>
      <g stroke="#f8e9a4" opacity={0.4}>
        <P d="M0 272q58-20 115 0t115 0 115 0 115 0M0 292q58-20 115 0t115 0 115 0 115 0" at={0.3} dur={1.6} />
      </g>
    </svg>
  );
}

export function Notebook({ size = 440, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 440 240" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round">
        <P d="m44 114 160-29 172 34-142 86Z" fill="#c3b6d4" />
        <P d="m48 103 159-37 170 38-143 89Z" fill="#f5f0e8" at={0.15} />
        <P d="m207 66 27 127M48 103l4 11 180 93 145-89v-14" at={0.3} />
        <P d="m81 104 94-22m-76 35 82-20m-63 34 64-16m-39 32 41-11M241 86l91 21m-86-7 67 16m-61-3 44 11" opacity={0.4} at={0.5} />
        <P d="M209 47c-54-70-115 20-53 34 38 9 47-40 9-30-20 6-11 36 33 41" at={0.7} dur={1.3} />
        <P d="m174 81 24 11-20 15" at={1.2} dur={0.4} />
        <P d="m294 17-11 30m-17-29 26 27m-34-8 37-9m-30 28 28-35" strokeWidth={3} at={1} dur={0.6} />
        <Pop at={1.3}><path d="m369 54 5 15 15 5-15 5-5 15-5-15-15-5 15-5Z" fill="currentColor" /></Pop>
      </g>
    </svg>
  );
}

export function Conversation({ size = 350, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 350 230" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <P d="M44 51c-30 51-18 96 29 108l-13 41 55-34c66 6 107-12 115-59 9-49-61-88-129-78" dur={1.4} />
        <P d="M133 120c21 49 73 65 113 53l44 22-5-40c32-29 27-81-4-108-30-28-76-30-109-15" at={0.3} dur={1.4} />
        <P d="m106 83-21 21 21 18m54-40 22 17-20 23m-24-54-15 72" strokeWidth={4} at={0.9} dur={0.6} />
        <P d="m228 67-3 44m-20-24 44 4m-38-17 31 29m-4-33-29 34" at={1.1} dur={0.6} />
        <P d="M36 22 20 7m30 1-3 16m-22 9-18-1M315 152l20 5m-24 11 7 19" at={1.3} dur={0.4} />
      </g>
    </svg>
  );
}

export function Megaphone({ size = 420, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 420 300" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round">
        <P d="M70 128v54l40 6 150 66V58L110 122Z" fill="var(--surface)" />
        <P d="M260 58c22 0 34 44 34 98s-12 98-34 98" at={0.3} />
        <P d="M80 186l18 68h30l-10-63" at={0.5} />
        <P d="M70 128c-18 0-26 12-26 27s8 27 26 27" at={0.4} />
        <P d="M150 106v100" opacity={0.4} at={0.6} />
        <P d="M326 120l46-22M332 156h52M326 192l46 22" strokeWidth={4} at={0.9} dur={0.5} />
        <Pop at={1.2}><path d="m360 40 5 15 15 5-15 5-5 15-5-15-15-5 15-5Z" fill="currentColor" /></Pop>
      </g>
    </svg>
  );
}

export function Diploma({ size = 380, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 380 260" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round">
        <P d="m40 120 160-70 140 64-160 72Z" fill="var(--surface)" />
        <P d="M40 120v24l140 64 160-72v-22" at={0.2} />
        <P d="m82 118 92-40m-66 52 90-40m-64 52 66-29" opacity={0.4} at={0.4} />
        <P d={ell(268, 150, 26, 26)} fill="var(--soft)" at={0.6} />
        <P d="m254 172-10 52 24-14 22 16-6-54" at={0.8} />
        <P d="M60 50h16m-8-8v16M318 40h14m-7-7v14" at={1} dur={0.4} />
      </g>
    </svg>
  );
}

export function Spark({ size = 40, className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} fill="none" className={className} style={style} aria-hidden="true">
      <P d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" stroke="currentColor" strokeWidth={1.5} dur={0.8} />
      <Pop at={0.5}><circle cx="12" cy="12" r="3" fill="currentColor" /></Pop>
    </svg>
  );
}
