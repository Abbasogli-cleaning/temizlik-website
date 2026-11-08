import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { isKnownPath } from "@/features/seo/known-slugs";
import { routing, type Locale } from "@/i18n/routing";

// Dil prefiksi olmayan URL-ləri yönləndirir: cookie → Accept-Language → az
const intl = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  // /{locale}/{bölmə}/{slug} — naməlum slug üçün həqiqi 404 (soft 404-ün qarşısı)
  const [, locale, section, slug, ...extra] = req.nextUrl.pathname.split("/");
  if (slug && extra.length === 0 && (routing.locales as readonly string[]).includes(locale)) {
    if (isKnownPath(locale as Locale, section, slug) === false) {
      return NextResponse.rewrite(new URL(`/${locale}/__not-found`, req.url), { status: 404 });
    }
  }
  return intl(req);
}

export const config = {
  // _next, api və fayllar (şəkil, font, favicon) istisna
  matcher: ["/((?!_next|_vercel|api|.*\\..*).*)"],
};
