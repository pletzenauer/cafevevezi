import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["cs", "en", "de"];
const defaultLocale = "cs";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale prefix
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (hasLocale) return;

  // Default: rewrite to /cs (no redirect, keeps clean URL)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
