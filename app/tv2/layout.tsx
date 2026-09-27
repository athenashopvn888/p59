import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "PLANETS 59 In-Store Accessories Display" },
  description: "Operational in-store accessories menu display for PLANETS 59.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
