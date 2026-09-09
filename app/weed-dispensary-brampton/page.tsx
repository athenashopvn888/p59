import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "24-Hour Cannabis Dispensary in Brampton | PLANETS 59" },
  description:
    "Visit PLANETS 59 at 8500 Torbram Rd #59 in Brampton, near Steeles Ave E. Store open 24 hours daily. Brampton delivery runs 10 a.m.–10 p.m.",
  alternates: {
    canonical: "https://www.planets59.com/weed-dispensary-brampton",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
