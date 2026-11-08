import type { Locale } from "@/i18n/routing";

import { COMBO_LOCALES, comboSlug, sectorCitySlug } from "./pages";

/** URL-lər bir yerdə — route qovluqları dəyişsə yalnız burada dəyişir */
export const paths = {
  areas: "/erazi",
  location: (slug: string) => `/erazi/${slug}`,
  service: (slug: string) => `/services/${slug}`,
  combo: (service: string, location: string) => `/erazi-xidmet/${comboSlug(service, location)}`,
  sectors: "/sektorlar",
  sector: (slug: string) => `/sektorlar/${slug}`,
  sectorCity: (sector: string, city: string) => `/sektor/${sectorCitySlug(sector, city)}`,
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
};

export const hasCombos = (locale: Locale) => COMBO_LOCALES.includes(locale);

/** en-də kombinasiya səhifəsi yoxdur → xidmət səhifəsinə yönəl */
export const comboHref = (locale: Locale, service: string, location: string) =>
  hasCombos(locale) ? paths.combo(service, location) : paths.service(service);

export const sectorCityHref = (locale: Locale, sector: string, city: string) =>
  hasCombos(locale) ? paths.sectorCity(sector, city) : paths.sector(sector);
