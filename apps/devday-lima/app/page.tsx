import { Deck } from "@talks/deck";
import { slides } from "@/components/slides";

export default function Page() {
  return <Deck slides={slides} />;
}
