import type { Metadata } from "next";
import "@talks/deck/styles.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "DevDay Exchange Community: Lima",
  description: "Recap de OpenAI DevDay 2026 y build session con Codex. FISI, UNMSM, 21 de octubre de 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
