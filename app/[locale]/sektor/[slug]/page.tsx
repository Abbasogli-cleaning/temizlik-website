import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { LinkChips, LinkGrid, Section } from "@/features/seo/components/link-grid";
import { SectorIcon } from "@/features/seo/components/sector-icon";
import { TestimonialCard } from "@/features/seo/components/testimonial-card";
import { paths } from "@/features/seo/links";
import {
  capitalize,
  COMBO_LOCALES,
  comboTitle,
  fill,
  getService,
  sectorCities,
  sectorCityPages,
  sectors,
} from "@/features/seo/pages";
import type { Service } from "@/features/seo/types";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { FaqList } from "@/shared/components/faq-list";
import { JsonLd } from "@/shared/components/json-ld";
import { PageHero } from "@/shared/components/page-hero";
import { absUrl, pageMeta, serviceJsonLd } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export function generateStaticParams() {
  return [...sectorCityPages.keys()].map((slug) => ({ slug }));
}

function resolve(locale: string, slug: string) {
  if (!COMBO_LOCALES.includes(locale as Locale)) return undefined;
  return sectorCityPages.get(slug);
}

export async function generateMetadata({ params }: PageProps<"/[locale]/sektor/[slug]">): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const page = resolve(locale, slug);
  if (!page) return {};
  const { sector: s, city } = page;
  const t = await getTranslations({ locale, namespace: "seo.sectorCity" });
  const sectorName = locale === "az" ? s.name.az.toLocaleLowerCase("az") : s.name[locale];
  return pageMeta({
    locale,
    path: paths.sectorCity(s.slug, city.slug),
    locales: COMBO_LOCALES,
    title: comboTitle(s.name[locale], city, locale),
    description: capitalize(t("metaDescription", { in: city.in[locale], sector: sectorName, short: s.short[locale] }), locale),
  });
}

export default async function SectorCityPage({ params }: PageProps<"/[locale]/sektor/[slug]">) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const page = resolve(locale, slug);
  if (!page) notFound();

  const { sector: s, city } = page;
  const t = await getTranslations({ locale, namespace: "seo.sectorCity" });
  const tsec = await getTranslations({ locale, namespace: "seo.sector" });
  const ts = await getTranslations({ locale, namespace: "seo" });
  const tSectors = await getTranslations({ locale, namespace: "seo.sectors" });

  const title = capitalize(comboTitle(s.name[locale], city, locale), locale);
  const svc = s.services.map(getService).filter((x): x is Service => Boolean(x));
  const path = paths.sectorCity(s.slug, city.slug);

  const faqs = [{ q: capitalize(t("q1", { in: city.in[locale] }), locale), a: t("a1") }, ...s.faqs[locale]];

  return (
    <>
      <PageHero
        eyebrow={city.name[locale]}
        title={title}
        text={capitalize(fill(s.cityIntro[locale], city, locale), locale)}
        breadcrumbs={[
          { name: tSectors("title"), path: paths.sectors },
          { name: s.name[locale], path: paths.sector(s.slug) },
          { name: city.name[locale], path },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <SectorIcon icon={s.icon} className="size-7" />
            </span>
            <p>{s.intro[locale][0]}</p>
            <h2 className="pt-4 text-2xl font-semibold tracking-tight">{t("cityTitle")}</h2>
            <p>{city.summary[locale]}</p>
            <p>{city.profile[locale]}</p>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">{tsec("requirementsTitle")}</h2>
            <ul className="space-y-3">
              {s.requirements[locale].map((r) => (
                <li key={r} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 mb-3 font-semibold">{tsec("scheduleTitle")}</h3>
            <p className="leading-relaxed text-muted-foreground">{s.schedule[locale]}</p>
          </div>
        </div>
      </Section>

      <Section title={t("servicesTitle", { in: city.in[locale] })} muted>
        <LinkGrid
          items={svc.map((x) => ({
            href: paths.combo(x.slug, city.slug),
            title: capitalize(comboTitle(x.name[locale], city, locale), locale),
            text: x.short[locale],
          }))}
        />
      </Section>

      {s.testimonial && (
        <Section title={tsec("testimonialTitle")}>
          <TestimonialCard id={s.testimonial} />
        </Section>
      )}

      <Section title={ts("faqTitle")} muted>
        <div className="max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      <Section title={t("otherSectorsTitle", { in: city.in[locale] })}>
        <LinkGrid
          items={sectors
            .filter((o) => o.slug !== s.slug)
            .map((o) => ({ href: paths.sectorCity(o.slug, city.slug), title: o.name[locale] }))}
        />
      </Section>

      <Section title={t("otherCitiesTitle")} muted>
        <LinkChips
          items={sectorCities
            .filter((c) => c.slug !== city.slug)
            .map((c) => ({ href: paths.sectorCity(s.slug, c.slug), title: c.name[locale] }))}
        />
      </Section>

      <CtaBand />
      <JsonLd
        data={serviceJsonLd({
          name: title,
          description: s.short[locale],
          url: absUrl(locale, path),
          area: { name: city.name.en, type: "City" },
        })}
      />
    </>
  );
}
