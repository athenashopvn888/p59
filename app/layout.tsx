import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import MobileBottomBar from "./components/MobileBottomBar";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import { SHOW_CIGARETTES } from "./lib/siteConfig";
import type { Nap } from "./lib/fleet/types";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { cannabisStoreJsonLd, gbpLocation, jsonLdScript } from "./lib/gbp-location";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";

// Sheet content refreshes about every minute even when the revalidate secret is unset.
export const revalidate = 60;

const ROOT_METADATA: Metadata = {
  metadataBase: new URL("https://www.planets59.com"),
  title: {
    default: HOME_DOC_TITLE,
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
    title: HOME_DOC_TITLE,
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
    title: HOME_DOC_TITLE,
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

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

function withFleetNap(data: ReturnType<typeof cannabisStoreJsonLd>, nap: Nap) {
  return {
    ...data,
    "@graph": data["@graph"].map((node) => {
      if (node["@type"] !== "CannabisStore") return node;
      return {
        ...node,
        name: nap.schemaName,
        alternateName: nap.name,
        telephone: nap.phoneTel,
        hasMap: nap.mapsSearchUrl,
        address: {
          ...node.address,
          streetAddress: nap.street,
          addressLocality: nap.city,
          addressRegion: nap.province,
          postalCode: nap.postalCode,
        },
        geo: {
          ...node.geo,
          latitude: Number(nap.lat),
          longitude: Number(nap.lng),
        },
      };
    }),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cigaretteSnapshot, fleet] = await Promise.all([getCigaretteSnapshot(), getFleetContent()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const jsonLd = fleet.active ? withFleetNap(cannabisStoreJsonLd(), fleet.nap) : cannabisStoreJsonLd();
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
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
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
            <MobileBottomBar />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
