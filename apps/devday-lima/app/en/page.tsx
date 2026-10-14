import { Deck } from "@talks/deck";
import type { Metadata } from "next";
import { slides } from "@/components/slides-en";

export const metadata: Metadata = {
  title: "DevDay Exchange Community: Lima (EN)",
  description: "OpenAI DevDay 2026 recap and Codex build session. FISI, UNMSM, Lima, October 21, 2026.",
};

export default function Page() {
  return <Deck slides={slides} />;
}
