import Link from "next/link";

export function DeliveryCoverage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.planets59.com/weed-dispensary-brampton/#delivery-service",
    name: "PLANETS 59 Brampton delivery",
    serviceType: "Cannabis delivery information",
    provider: { "@id": "https://www.planets59.com/#store" },
    url: "https://www.planets59.com/weed-delivery-brampton",
    areaServed: { "@type": "City", name: "Brampton" },
  };

  return (
    <section style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 24px 64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <h2>Brampton delivery from PLANETS 59 Unit 59</h2>
      <p>
        Delivery is a separate PLANETS 59 service dispatched from 8500 Torbram Rd Unit 59. Published
        ordering hours are 10 a.m. to 10 p.m. daily. The dispatcher confirms whether a Brampton
        address is in range when an order is placed.
      </p>
      <p>
        Walk-in at Unit 59 stays open 24 hours and does not follow the delivery window. This page
        does not list a kilometre radius, fee, or minimum beyond what the current delivery menu
        already shows.
      </p>
      <p>
        <Link href="/weed-delivery-brampton">Check current Brampton delivery information</Link>
      </p>
    </section>
  );
}
