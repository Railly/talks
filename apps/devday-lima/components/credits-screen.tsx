"use client";

import { useCreditsScreen } from "@/components/credits";

/* Full-screen projector view for the credits round: the check-in QR, and the presence code under it while the window is open. */
export function CreditsScreen() {
  const screen = useCreditsScreen();
  const open = screen?.state === "open" && screen.code;
  return (
    <main style={{ minHeight: "100dvh", background: "var(--canvas)", color: "var(--ink)", display: "grid", placeItems: "center", padding: "4vh 4vw", textAlign: "center" }}>
      <div style={{ display: "grid", gap: "3vh", justifyItems: "center" }}>
        <p style={{ font: "500 clamp(28px,3.4vw,56px)/1.1 var(--display)", letterSpacing: "-0.03em" }}>
          {screen?.state === "closed" ? "Créditos repartidos. Recarga tu página." : "Escanea para tus créditos de Codex"}
        </p>
        {/* biome-ignore lint/performance/noImgElement: static QR */}
        <img src="/img/credits-qr.svg" alt="QR check-in crafter.run" style={{ width: open ? "min(42vh,42vw)" : "min(62vh,62vw)", height: "auto", borderRadius: 16 }} />
        <p style={{ font: "400 clamp(18px,1.8vw,30px)/1.3 var(--text)", color: "var(--muted)" }}>crafter.run/es/events/devday-lima/credits</p>
        {open ? (
          <>
            <p style={{ font: "400 clamp(20px,2vw,34px)/1.2 var(--text)" }}>Código para confirmar que estás aquí</p>
            <p style={{ font: "500 clamp(120px,19vh,260px)/1 var(--display)", letterSpacing: "0.12em" }}>{screen.code}</p>
          </>
        ) : null}
        {screen ? (
          <p style={{ font: "400 clamp(18px,1.6vw,28px)/1.3 var(--text)", color: "var(--muted)" }}>
            {screen.checkedIn} con check-in{screen.state !== "idle" ? ` · ${screen.present} confirmaron` : ""}
          </p>
        ) : null}
        {screen?.state === "closed" && screen.winners.length ? (
          <p style={{ font: "400 clamp(16px,1.4vw,24px)/1.5 var(--text)", maxWidth: "80vw" }}>Waitlist con créditos: {screen.winners.join(" · ")}</p>
        ) : null}
      </div>
    </main>
  );
}
