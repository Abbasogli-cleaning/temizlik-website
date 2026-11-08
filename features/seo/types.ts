import type { Locale } from "@/i18n/routing";

/** Hər dil üçün bir mətn */
export type L = Record<Locale, string>;
/** Hər dil üçün siyahı */
export type LL = Record<Locale, string[]>;
export type LFaq = Record<Locale, { q: string; a: string }[]>;
export type LSteps = Record<Locale, { title: string; text: string }[]>;

/**
 * Lokasiya flag-ləri — xidmət × lokasiya səhifələrində ayrıca paraqraf açır
 * (doorway riskinə qarşı: eyni şablon, fərqli məzmun).
 */
export type Flag = "business" | "oldStock" | "newBuild" | "suburban" | "coastal" | "industrial";

export type Location = {
  slug: string;
  kind: "capital" | "district" | "city";
  name: L;
  /** Cümlə içində: "Yasamal rayonunda" / "in Yasamal district" / "в Ясамальском районе" */
  in: L;
  /** Massiv / qəsəbə adları (en üçün az adları işlənir) */
  areas: { az: string[]; ru: string[] };
  flags: Flag[];
  summary: L;
  profile: L;
  nearby: string[];
  /** Sektor × şəhər səhifəsi yaradılırmı (Bakı, Sumqayıt, Xırdalan) */
  sectorCity?: boolean;
};

export type Service = {
  slug: string;
  /** shared/config/content.ts → services açarı (şəkil/ikon) */
  contentKey: "office" | "facade" | "renovation" | "disinfection" | "fire" | "apartment" | "restaurant";
  name: L;
  short: L;
  intro: LL;
  included: LL;
  process: LSteps;
  factors: LL;
  faqs: LFaq;
  /** Lokasiya flag-inə görə əlavə paraqraf ({in}, {name} yer tutucuları) */
  flagNotes: Partial<Record<Flag, L>>;
  /** Xidmət × lokasiya girişi ({in}, {name}, {areas}) */
  localIntro: L;
};

export type Sector = {
  slug: string;
  icon: "hotel" | "clinic" | "school" | "mall" | "gym" | "residential" | "warehouse" | "admin";
  name: L;
  short: L;
  intro: LL;
  requirements: LL;
  schedule: L;
  services: string[];
  testimonial?: "suIdman" | "sgc" | "azpulmat" | "mixek" | "nelbeki";
  faqs: LFaq;
  /** Sektor × şəhər girişi ({in}, {name}) */
  cityIntro: L;
};

export type BlogBlock = string | { h2: string } | { ul: string[] };

export type Post = {
  slug: string;
  date: string;
  service: string;
  sector?: string;
  cover: string;
  title: L;
  excerpt: L;
  body: Record<Locale, BlogBlock[]>;
};
