import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";
import { DeliveryCoverage } from "@/app/components/DeliveryCoverage";
import { resolveDocumentTitle, STORE_ORIGIN } from "@/app/lib/gbp-location";

const CORRIDOR_OWNER = `${STORE_ORIGIN}/weed-dispensary-torbram`;

export const metadata: Metadata = {
  title: resolveDocumentTitle("Weed Dispensary Brampton (city redirect) | PLANETS 59"),
  description:
    "City-level Brampton URL for PLANETS 59 (demoted; noindex). The neighbourhood owner is the Torbram Unit 59 weed dispensary page at 8500 Torbram Rd. Adults 19+.",
  alternates: {
    canonical: CORRIDOR_OWNER,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <><WeedOwnerPage /><DeliveryCoverage /></>;
}
