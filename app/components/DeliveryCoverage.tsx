import Link from "next/link";

const areas = ["Brampton", "Mississauga", "Vaughan", "Caledon", "Etobicoke", "Toronto"];

export function DeliveryCoverage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.planets59.com/weed-dispensary-brampton/#delivery-service",
    name: "PLANETS 59 delivery coverage",
    serviceType: "Cannabis delivery information",
    provider: { "@id": "https://www.planets59.com/#store" },
    url: "https://www.planets59.com/weed-delivery-brampton",
    areaServed: [
      { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.7231, longitude: -79.69274 }, geoRadius: 50000 },
      ...areas.map((name) => ({ "@type": "City", name })),
    ],
  };

  return <section style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 24px 64px" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <h2>Delivery Coverage from PLANETS 59</h2>
    <p>Delivery is coordinated from the Brampton store and confirmed when an order is placed. A practical planning area is approximately 50 km from Torbram Road, including Brampton, Mississauga, Vaughan, Caledon, Etobicoke and Toronto.</p>
    <p>Longer trips toward Barrie, Kitchener or Hamilton may be available when a driver is already positioned in that area. Extended coverage is not guaranteed, so confirm the destination and timing with the dispatcher before relying on delivery.</p>
    <p><Link href="/weed-delivery-brampton">Check current Brampton delivery information</Link></p>
  </section>;
}
