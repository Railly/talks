import type { Metadata } from "next";
import { CreditsScreen } from "@/components/credits-screen";

export const metadata: Metadata = { title: "Créditos · DevDay Lima", robots: { index: false } };

export default function Page() {
  return <CreditsScreen />;
}
