import type { Metadata } from "next";
import HomePage from "./HomePage";
import { getLiveMenu } from "./lib/liveMenu";
import { JsonLd } from "./lib/jsonLd";
import { STORE_ORIGIN, faqPageJsonLd, HOME_FAQS } from "./lib/gbp-location";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";

export const metadata: Metadata = {
  title: {
    absolute: HOME_DOC_TITLE,
  },
  description:
    "Walk in at PLANETS 59, 8500 Torbram Rd Unit 59 in northeast Brampton on the Torbram / Airport Road corridor. Open 24 hours. Adults 19+. Call +1 (289) 536-7493.",
  alternates: {
    canonical: STORE_ORIGIN,
  },
  openGraph: {
    title: HOME_DOC_TITLE,
    description:
      "Walk-in cannabis at 8500 Torbram Rd Unit 59, Brampton. Torbram / Airport Road corridor. Open 24 hours. Adults 19+.",
    url: STORE_ORIGIN,
  },
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return (
    <>
      <JsonLd data={faqPageJsonLd(HOME_FAQS, `${STORE_ORIGIN}/`)} />
      <HomePage initialFlowers={flowers} contentBanners={contentBanners} />
    </>
  );
}
