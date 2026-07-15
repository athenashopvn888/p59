import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.planets59.com"),
  title: {
    default: "PLANETS 59 | Brampton Cannabis Dispensary",
    template: "%s | PLANETS 59",
  },
  description:
    "PLANETS 59 is a Brampton cannabis dispensary on Torbram Rd with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open Daily: 10:00 AM - 01:00 AM.",
  keywords: [
    "cannabis dispensary Brampton",
    "weed store Brampton",
    "exotic flower Brampton",
    "premium cannabis",
    "PLANETS 59",
    "cheap weed Brampton",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Brampton",
    "vapes",
    "pre-rolls",
    "native cigarettes Brampton",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.planets59.com",
    siteName: "PLANETS 59",
    title: "PLANETS 59 — Premium Brampton Cannabis Dispensary",
    description:
      "PLANETS 59 is a Brampton cannabis dispensary at 8500 Torbram Rd #59 with flower tiers, menu categories, and shopper resources. Open Daily: 10:00 AM - 01:00 AM.",
    images: [
      {
        url: "https://www.planets59.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "PLANETS 59 — Premium Cannabis Dispensary Brampton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLANETS 59 — Brampton's Uplifting Dispensary",
    description: "Brampton cannabis menu categories, resources, and store info for PLANETS 59 at 8500 Torbram Rd #59. Open Daily: 10:00 AM - 01:00 AM.",
    images: ["https://www.planets59.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.planets59.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://www.planets59.com",
  name: "PLANETS 59",
  description: "Cannabis dispensary at 8500 Torbram Rd #59 in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 01:00 AM.",
  url: "https://www.planets59.com",
  telephone: "+14163007806",
  image: "https://www.planets59.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8500 Torbram Rd #59",
    addressLocality: "Brampton",
    addressRegion: "ON",
    postalCode: "L6T 5C6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7258,
    longitude: -79.6953,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "01:00"
  }
],
  areaServed: {
    "@type": "City",
    name: "Brampton",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Brampton" />
        <meta name="geo.position" content="43.7258;-79.6953" />
        <meta name="ICBM" content="43.7258, -79.6953" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BF78FQ8EC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6BF78FQ8EC');
            `
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
