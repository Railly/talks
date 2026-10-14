import { Deck } from "@talks/deck";
import { slides } from "@/components/order";

export default function Page() {
  return <Deck slides={slides} />;
}
