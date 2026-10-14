import type { Metadata } from "next";
import "@talks/deck/styles.css";
import content from "@/components/content.json";

export const metadata: Metadata = { title: content.title, description: content.description };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
