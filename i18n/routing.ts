import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["az", "en", "ru"],
  defaultLocale: "az",
  // URL həmişə dil prefiksi ilə: /az, /en, /ru
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, { short: string; name: string }> = {
  az: { short: "AZ", name: "Azərbaycanca" },
  en: { short: "EN", name: "English" },
  ru: { short: "RU", name: "Русский" },
};
