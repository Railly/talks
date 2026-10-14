import { extra, ORDER } from "./extra";
import { base, type Slide } from "./slides";

const byId = new Map<string, Slide>([...base, ...extra].map((s) => [s.id, s]));

export const slides: Slide[] = ORDER.map((id) => {
  const s = byId.get(id);
  if (!s) throw new Error(`missing slide ${id}`);
  return s;
});
