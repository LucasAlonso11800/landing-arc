import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

export const locales = ["en-US", "es-ES", "es", 'en'];

function getLocale(request: NextRequest) {
  const cookie = request.cookies.get('x-pathname');
  const referer = cookie?.value;
  if (referer) {
    const locale = referer.split("/")[1];
    if (locales.includes(locale)) {
      return locale;
    }
  }

  const headers = { "accept-language": request.headers.get("accept-language") as string };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en-US";
  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request: NextRequest) {

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) {
    const response = NextResponse.next({
      request: {
        // Apply new request headers
        headers: requestHeaders,
      },
    })
    response.cookies.set('x-pathname', pathname)
    return response;
  }

  // Redirect if there is no locale

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  const response = NextResponse.redirect(new URL(request.nextUrl));
  response.cookies.set('x-pathname', request.nextUrl.pathname)
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|static|_next/static|_next/image|icon.ico|arc-image.jpg).*)",
  ],
};
