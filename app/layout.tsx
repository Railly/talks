import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La nueva generación de ingenieros",
  description: "Pensar, construir e investigar con IA. Railly Hugo, Semana de Ingeniería Industrial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
