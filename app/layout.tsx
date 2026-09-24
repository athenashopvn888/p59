import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import { cannabisStoreJsonLd, gbpLocation, jsonLdScript } from "./lib/gbp-location";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.planets59.com"),
  title: {
    default: "PLANETS 59 | Torbram Unit 59 Dispensary, Brampton",
    // Child titles that already include PLANETS 59 must use resolveDocumentTitle()
    // so this template does not append the brand a second time.
    template: "%s | PLANETS 59",
  },
  description: gbpLocation.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.planets59.com",
    siteName: "PLANETS 59",
    title: "PLANETS 59 | Torbram Unit 59 Dispensary, Brampton",
    description: gbpLocation.metaDescription,
    images: [
      {
        url: "https://www.planets59.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "PLANETS 59 — Torbram Unit 59 dispensary at 8500 Torbram Rd, Brampton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLANETS 59 | Torbram Unit 59 Dispensary, Brampton",
    description: gbpLocation.metaDescription,
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

const jsonLd = cannabisStoreJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Torbram / Airport Road, Brampton" />
        <meta name="geo.position" content="43.7231;-79.69274" />
        <meta name="ICBM" content="43.7231, -79.69274" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(jsonLd),
          }}
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
        <Link className="deliveryAnnouncement" href="/weed-delivery-brampton">
          PLANETS 59 WEED DELIVERY — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
