import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Brampton | PLANETS 59" },
  description:
    "PLANETS 59 is open 24 hours at 8500 Torbram Rd Unit 59 in Brampton. Adults 19+ can explore flower, edibles and vape categories.",
  alternates: {
    canonical: "https://www.planets59.com/weed-dispensary-brampton/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
