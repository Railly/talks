"use client";

import { useEffect, useState } from "react";

/* Live state of the credits round, read from crafter.run. Open the deck once with
   ?screen=<CREDITS_SCREEN_TOKEN> on the projector laptop; the key stays in localStorage. */
const API = "https://crafter.run/api/events/devday-lima/credits/screen";
const STORE = "devday-credits-screen";
const POLL_MS = 3000;

type Screen = { state: "idle" | "open" | "closed"; code: string | null; checkedIn: number; present: number; available: number; winners: string[] };

function screenKey() {
  try {
    const fromUrl = new URLSearchParams(location.search).get("screen");
    if (fromUrl) localStorage.setItem(STORE, fromUrl);
    return fromUrl ?? localStorage.getItem(STORE);
  } catch {
    return null;
  }
}

export function useCreditsScreen() {
  const [screen, setScreen] = useState<Screen | null>(null);
  useEffect(() => {
    const key = screenKey();
    if (!key) return;
    let alive = true;
    const load = async () => {
      try {
        const response = await fetch(`${API}?key=${encodeURIComponent(key)}`, { cache: "no-store" });
        if (response.ok && alive) setScreen(await response.json());
      } catch {}
    };
    load();
    const id = setInterval(load, POLL_MS);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);
  return screen;
}

export type CreditsText = { checkIn: string; open: string; closed: string; winners: string; present: string; checkedIn: string; noScreen: string };

export function CreditsLive({ t }: { t: CreditsText }) {
  const screen = useCreditsScreen();
  if (!screen) return <p className="lead">{t.noScreen}</p>;
  if (screen.state === "open" && screen.code) {
    return (
      <div>
        <p className="lead">{t.open}</p>
        <p style={{ font: "500 200px/1 var(--display)", letterSpacing: "0.08em", color: "var(--ink)", margin: "24px 0" }}>{screen.code}</p>
        <p className="lead">{screen.present} / {screen.checkedIn} {t.present}</p>
      </div>
    );
  }
  if (screen.state === "closed") {
    return (
      <div>
        <p className="lead">{t.closed}</p>
        {screen.winners.length ? (
          <>
            <p className="lead" style={{ marginTop: 24 }}>{t.winners}</p>
            <p style={{ font: "400 24px/1.5 var(--text)", color: "var(--ink)", columns: screen.winners.length > 12 ? 2 : 1, maxWidth: 900 }}>
              {screen.winners.join(" · ")}
            </p>
          </>
        ) : null}
      </div>
    );
  }
  return <p className="lead">{t.checkIn} {screen.checkedIn} {t.checkedIn}</p>;
}
