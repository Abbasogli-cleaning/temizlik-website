import type { Metadata } from "next";

import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/shared/config/site";

export const absUrl = (locale: Locale, path = "") => `${site.url}/${locale}${path}`;

/**
 * Səhifə metadata-sı: canonical + hreflang.
 * `locales` — səhifənin mövcud olduğu dillər (kombinasiya səhifələri yalnız az/ru).
 */
export function pageMeta({
  locale,
  path,
  title,
  description,
  locales = routing.locales,
  image,
  type = "website",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  locales?: readonly Locale[];
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  if (locales.includes(routing.defaultLocale)) languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      type,
      title,
      description,
      url: `/${locale}${path}`,
      locale,
      images: [image ?? site.ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [image ?? site.ogImage] },
  };
}

/* ---------- JSON-LD ---------- */

export function localBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: absUrl(locale),
    image: `${site.url}${site.ogImage}`,
    logo: `${site.url}/icon.png`,
    telephone: "+994554441602",
    priceRange: "$$",
    foundingDate: "2012",
    // Google Business Profile-dakı ünvanla eyni saxlanılır (NAP)
    address: {
      "@type": "PostalAddress",
      streetAddress: "221 Ahmad Rajabli",
      addressLocality: "Baku",
      postalCode: "5075",
      addressCountry: "AZ",
    },
    areaServed: [
      { "@type": "City", name: "Baku" },
      { "@type": "City", name: "Sumgait" },
      { "@type": "City", name: "Khirdalan" },
    ],
    sameAs: [site.socials.facebook, site.socials.instagram],
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
  area,
}: {
  name: string;
  description: string;
  url: string;
  area?: { name: string; type: "City" | "AdministrativeArea" };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${site.url}/#business` },
    areaServed: area
      ? {
          "@type": area.type,
          name: area.name,
          ...(area.type === "AdministrativeArea"
            ? { containedInPlace: { "@type": "City", name: "Baku" } }
            : {}),
        }
      : { "@type": "Country", name: "Azerbaijan" },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(locale: Locale, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    // Search Console-da "Unnamed item" olmasın deyə siyahının özünə ad
    name: crumbs[crumbs.length - 1]?.name,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(locale, c.path),
    })),
  };
}

export function articleJsonLd({
  locale,
  path,
  title,
  description,
  date,
  image,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: locale,
    image: image.startsWith("http") ? image : `${site.url}${image}`,
    mainEntityOfPage: absUrl(locale, path),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#business` },
  };
}
