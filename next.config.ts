import type { NextConfig } from "next";
import { hiddenCigaretteRedirects } from "./app/lib/cigaretteRedirects";

// Same rule as app/lib/siteConfig.ts. Default off until the env var is "true".
const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES === "true";

type ConfigRedirect =
  | { source: string; destination: string; permanent: true }
  | { source: string; destination: string; statusCode: 302 };

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "planets59.com" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
      { protocol: "https", hostname: "milestone-1-demo.vercel.app" },
      { protocol: "https", hostname: "athena-cannabis-images.vercel.app", pathname: "/products/delivery/v1/**" },
      { protocol: "https", hostname: "pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev", pathname: "/products/**" },
    ],
  },
  async redirects() {
    const routes: ConfigRedirect[] = [
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:path*", destination: "/resources", permanent: true },
      { source: "/games", destination: "/resources", permanent: true },
      { source: "/games/:path*", destination: "/resources", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      { source: "/vape-disposables", destination: "/items/vape-disposables", permanent: true },
      { source: "/concentrates", destination: "/items/concentrates", permanent: true },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
      { source: "/exotic", destination: "/exotic-weed", permanent: true },
      { source: "/premium", destination: "/premium-weed", permanent: true },
      { source: "/aaa", destination: "/aaa-weed", permanent: true },
      { source: "/aa", destination: "/aa-weed", permanent: true },
      { source: "/budget", destination: "/budget-weed", permanent: true },
      { source: "/delivery", destination: "/weed-delivery-brampton", permanent: true },
      { source: "/resources/flower-guide", destination: "/resources/weed-flower-guide", permanent: true },
      { source: "/resources/value-guide", destination: "/resources/weed-value-guide", permanent: true },
      { source: "/info/brampton-weed-dispensary", destination: "/weed-dispensary-brampton", permanent: true },
      { source: "/info/york-weed-dispensary", destination: "/weed-dispensary-brampton", permanent: true },
      { source: "/info/cheap-weed-york", destination: "/info/cheap-weed-brampton", permanent: true },
      { source: "/info/dispensary-near-me-brampton", destination: "/weed-dispensary-brampton", permanent: true },
      { source: "/info/dispensary-near-me-york", destination: "/weed-dispensary-brampton", permanent: true },
    ];
    if (SHOW_CIGARETTES) {
      routes.push(
        { source: "/cigarettes", destination: "/items/cigarettes", permanent: true },
        { source: "/info/native-cigarettes-york", destination: "/info/native-cigarettes-brampton", permanent: true },
      );
    } else {
      routes.push(...hiddenCigaretteRedirects());
    }
    return routes;
  },
};

export default nextConfig;
