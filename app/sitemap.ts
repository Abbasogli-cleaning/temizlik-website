import type { MetadataRoute } from "next";
import { posts } from "@/features/blog/posts";
import { paths } from "@/features/seo/links";
import { COMBO_LOCALES, locations, sectorCityPages, sectors, serviceLocationPages, services } from "@/features/seo/pages";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/shared/config/site";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
type Entry = { path: string; freq: Freq; priority: number; locales: readonly Locale[]; lastModified?: string };

const ALL = routing.locales;

const entries: Entry[] = [
  { path: "", freq: "weekly", priority: 1, locales: ALL },
  { path: "/services", freq: "monthly", priority: 0.9, locales: ALL },
  { path: "/about", freq: "monthly", priority: 0.6, locales: ALL },
  { path: paths.areas, freq: "monthly", priority: 0.8, locales: ALL },
  { path: paths.sectors, freq: "monthly", priority: 0.8, locales: ALL },
  { path: paths.blog, freq: "weekly", priority: 0.6, locales: ALL, lastModified: posts[0]?.date },
  ...services.map((s) => ({ path: paths.service(s.slug), freq: "monthly" as const, priority: 0.9, locales: ALL })),
  ...sectors.map((s) => ({ path: paths.sector(s.slug), freq: "monthly" as const, priority: 0.8, locales: ALL })),
  ...locations.map((l) => ({
    path: paths.location(l.slug),
    freq: "monthly" as const,
    priority: l.kind === "district" ? 0.7 : 0.8,
    locales: ALL,
  })),
  ...[...serviceLocationPages.values()].map((p) => ({
    path: paths.combo(p.service.slug, p.location.slug),
    freq: "monthly" as const,
    priority: 0.7,
    locales: COMBO_LOCALES,
  })),
  ...[...sectorCityPages.values()].map((p) => ({
    path: paths.sectorCity(p.sector.slug, p.city.slug),
    freq: "monthly" as const,
    priority: 0.7,
    locales: COMBO_LOCALES,
  })),
  ...posts.map((p) => ({ path: paths.post(p.slug), freq: "yearly" as const, priority: 0.6, locales: ALL, lastModified: p.date })),
];

const url = (locale: Locale, path: string) => `${site.url}/${locale}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.flatMap((e) =>
    e.locales.map((locale) => ({
      url: url(locale, e.path),
      lastModified: new Date(e.lastModified ?? site.updatedAt),
      changeFrequency: e.freq,
      priority: e.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(e.locales.map((l) => [l, url(l, e.path)])),
          "x-default": url(routing.defaultLocale, e.path),
        },
      },
    }))
  );
}
