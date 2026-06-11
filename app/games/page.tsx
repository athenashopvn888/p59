import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — PLANETS 59 | Brampton",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at PLANETS 59.",
  alternates: {
    canonical: "https://planets59.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
