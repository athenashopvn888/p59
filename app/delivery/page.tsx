import type { Metadata } from "next";
import DeliveryCatalog from "./DeliveryCatalog";
import P59WebChat from "./P59WebChat";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery Brampton | PLANETS 59" },
  description: "Browse the PLANETS 59 flower delivery menu in Brampton and connect with the store dispatcher through LIVE ORDER, daily from 10:00 a.m. to 10:00 p.m.",
  alternates: {
    canonical: "https://www.planets59.com/weed-delivery-brampton",
  },
};

export default function DeliveryPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "PLANETS 59 Weed Delivery Menu in Brampton",
      url: "https://www.planets59.com/weed-delivery-brampton",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: menu.products.length,
        itemListElement: menu.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "PLANETS 59 Weed Delivery",
      serviceType: "Weed delivery",
      url: "https://www.planets59.com/weed-delivery-brampton",
      areaServed: { "@type": "City", name: "Brampton" },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
      offers: {
        "@type": "Offer",
        name: "PLANETS 59 delivery fee",
        price: "10.00",
        priceCurrency: "CAD",
        eligibleTransactionVolume: {
          "@type": "PriceSpecification",
          name: "Product minimum",
          minPrice: "60.00",
          priceCurrency: "CAD",
        },
      },
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <DeliveryCatalog />
      <P59WebChat />
    </>
  );
}
