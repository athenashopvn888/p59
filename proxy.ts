import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isCigaretteRedirectPath } from "./app/lib/cigaretteRedirects";
import { VAPE_PAGE_PATH } from "./app/lib/siteConfig";

export function proxy(request: NextRequest) {
  if (!isCigaretteRedirectPath(request.nextUrl.pathname)) return NextResponse.next();
  return NextResponse.redirect(new URL(VAPE_PAGE_PATH, request.url), 302);
}

export const config = {
  matcher: [
    "/cigarettes",
    "/cigarettes/:path*",
    "/items/cigarettes",
    "/items/cigarettes/:path*",
    "/native-cigarettes-torbram",
    "/info/native-cigarettes-brampton",
    "/info/native-cigarettes-york",
    "/resources/native-smokes",
    "/resources/native-smokes/:path*",
    "/guides/:slug",
    "/item/:slug",
  ],
};
