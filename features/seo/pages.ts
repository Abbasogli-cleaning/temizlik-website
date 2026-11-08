import type { Locale } from "@/i18n/routing";

import { locationMap, locations } from "./data/locations";
import { sectorMap, sectors } from "./data/sectors";
import { serviceMap, services } from "./data/services";
import type { Location, Sector, Service } from "./types";

/**
 * Bütün generasiya olunan səhifələr bir yerdə — route-lar, sitemap və llms.txt
 * eyni Map-dən oxuyur. Slug-lar tire ilə ayrıldığı üçün heç vaxt split edilmir.
 */

/** Kombinasiya səhifələri yalnız bu dillərdə (en-də thin səhifə yaratmırıq) */
export const COMBO_LOCALES: Locale[] = ["az", "ru"];

export type ServiceLocationPage = { slug: string; service: Service; location: Location };
export type SectorCityPage = { slug: string; sector: Sector; city: Location };

export const serviceLocationPages = new Map<string, ServiceLocationPage>(
  services.flatMap((service) =>
    locations.map((location) => {
      const slug = `${service.slug}-${location.slug}`;
      return [slug, { slug, service, location }] as const;
    })
  )
);

export const sectorCities = locations.filter((l) => l.sectorCity);

export const sectorCityPages = new Map<string, SectorCityPage>(
  sectors.flatMap((sector) =>
    sectorCities.map((city) => {
      const slug = `${sector.slug}-${city.slug}`;
      return [slug, { slug, sector, city }] as const;
    })
  )
);

export const getLocation = (slug: string) => locationMap.get(slug);
export const getService = (slug: string) => serviceMap.get(slug);
export const getSector = (slug: string) => sectorMap.get(slug);

export const comboSlug = (service: string, location: string) => `${service}-${location}`;
export const sectorCitySlug = (sector: string, city: string) => `${sector}-${city}`;

export function nearbyLocations(location: Location) {
  return location.nearby.map((s) => locationMap.get(s)).filter((l): l is Location => Boolean(l));
}

/** Massiv adları — en üçün az adları */
export function areasOf(location: Location, locale: Locale) {
  return locale === "ru" ? location.areas.ru : location.areas.az;
}

export function fill(template: string, location: Location, locale: Locale) {
  const areas = areasOf(location, locale).slice(0, 4).join(", ");
  return template
    .replaceAll("{in}", location.in[locale])
    .replaceAll("{name}", location.name[locale])
    .replaceAll("{areas}", areas);
}

/** Cümlənin əvvəlində böyük hərf (az: "İ" düzgün) */
export function capitalize(text: string, locale: Locale) {
  return text.charAt(0).toLocaleUpperCase(locale) + text.slice(1);
}

/** "Yasamal rayonunda ofis təmizliyi" / "Office cleaning in Yasamal district" */
export function comboTitle(name: string, location: Location, locale: Locale) {
  return locale === "az"
    ? `${location.in.az} ${name.toLocaleLowerCase("az")}`
    : `${name} ${location.in[locale]}`;
}

export const districts = locations.filter((l) => l.kind === "district");
export const cities = locations.filter((l) => l.kind !== "district");
export { locations, sectors, services };
