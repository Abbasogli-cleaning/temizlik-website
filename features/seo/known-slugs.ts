import { posts } from "@/features/blog/posts";
import type { Locale } from "@/i18n/routing";

import { COMBO_LOCALES, locations, sectorCityPages, sectors, serviceLocationPages, services } from "./pages";

/**
 * Generasiya olunan route-ların etibarlı slug-ları.
 * Partial Prerendering naməlum slug üçün shell-i 200 ilə göndərir (soft 404) —
 * proxy bu siyahı ilə yoxlayıb həqiqi 404 statusu qaytarır.
 */
const sets: Record<string, { slugs: Set<string>; locales?: Locale[] }> = {
  erazi: { slugs: new Set(locations.map((l) => l.slug)) },
  services: { slugs: new Set(services.map((s) => s.slug)) },
  "erazi-xidmet": { slugs: new Set(serviceLocationPages.keys()), locales: COMBO_LOCALES },
  sektorlar: { slugs: new Set(sectors.map((s) => s.slug)) },
  sektor: { slugs: new Set(sectorCityPages.keys()), locales: COMBO_LOCALES },
  blog: { slugs: new Set(posts.map((p) => p.slug)) },
};

/** /{locale}/{section}/{slug} formasındakı yol mövcuddursa true; bu formada deyilsə null (yoxlanmır) */
export function isKnownPath(locale: Locale, section: string, slug: string): boolean | null {
  const entry = sets[section];
  if (!entry) return null;
  if (entry.locales && !entry.locales.includes(locale)) return false;
  return entry.slugs.has(decodeURIComponent(slug));
}
