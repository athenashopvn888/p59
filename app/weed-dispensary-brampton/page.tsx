import { Metadata } from "next";
import Link from "next/link";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";
import { DeliveryCoverage } from "@/app/components/DeliveryCoverage";
import { gbpLocation, resolveDocumentTitle, STORE_ORIGIN } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: resolveDocumentTitle("Weed Dispensary Brampton (city redirect) | PLANETS 59"),
  description:
    "City-level Brampton URL for PLANETS 59 (demoted; noindex). The neighbourhood owner is the Torbram Unit 59 weed dispensary page at 8500 Torbram Rd. Adults 19+.",
  alternates: {
    canonical: `${STORE_ORIGIN}/weed-dispensary-brampton`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Store-specific Brampton city enrichment (FLEET-CITY-UNIQUE-0925). Facts from gbpLocation only. */
function TorbramUnit59Notes() {
  return (
    <section
      aria-labelledby="pl501-city-unit59"
      style={{ maxWidth: 980, margin: "0 auto", padding: "28px 24px 72px", lineHeight: 1.55 }}
    >
      <h2 id="pl501-city-unit59">Unit 59 on Torbram Road, Brampton</h2>
      <p>
        PLANETS 59 is the numbered bay at{" "}
        <strong>{gbpLocation.address}</strong> in northeast Brampton — civic
        8500 Torbram Road, Unit 59 — on the Torbram / Airport Road corridor near
        Steeles Avenue East. Adults 19+. Phone{" "}
        <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a>.
      </p>
      <h3>Hours</h3>
      <p>
        {gbpLocation.hoursLabel}. See <Link href="/hours">/hours</Link> for the
        published weekly schedule that matches the live listing.
      </p>
      <h3>Plaza wayfinding</h3>
      <p>
        {gbpLocation.neighborhoodDescription} {gbpLocation.parkingNote}.{" "}
        {gbpLocation.transitNote}. Street-level notes also live on{" "}
        <Link href="/visit">/visit</Link>.
      </p>
      <h3>Neighbourhoods this bay serves</h3>
      <p>
        Torbram Road, Airport Road approaches, Steeles Avenue East, northeast
        Brampton, and Bramalea-side trips to Unit 59. The corridor owner URL is{" "}
        <Link href="/weed-dispensary-torbram">/weed-dispensary-torbram</Link>;
        this Brampton city path is the same physical door.
      </p>
      <p>
        <Link href="/weed-dispensary-torbram">Torbram Unit 59 dispensary</Link>
        {" · "}
        <Link href="/visit">Visit guide</Link>
        {" · "}
        <Link href="/hours">Hours</Link>
        {" · "}
        <Link href="/">Homepage</Link>
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <WeedOwnerPage />
      <DeliveryCoverage />
      <TorbramUnit59Notes />
    </>
  );
}