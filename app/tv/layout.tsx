import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "PLANETS 59 In-Store Flower Display" },
  description: "Operational in-store flower menu display for PLANETS 59.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
