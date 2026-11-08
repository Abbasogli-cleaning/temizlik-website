import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { Chips, LinkChips, LinkGrid, Section } from "@/features/seo/components/link-grid";
import { comboHref, paths, sectorCityHref } from "@/features/seo/links";
import { areasOf, districts, getLocation, locations, nearbyLocations, sectors, services } from "@/features/seo/pages";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { FaqList } from "@/shared/components/faq-list";
import { PageHero } from "@/shared/components/page-hero";
import { WorkGallery } from "@/shared/components/work-gallery";
import { pageMeta } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/erazi/[slug]">): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const loc = getLocation(slug);
  if (!loc) return {};
  const t = await getTranslations({ locale, namespace: "seo.location" });
  const areas = areasOf(loc, locale).slice(0, 4).join(", ");
  return pageMeta({
    locale,
    path: paths.location(slug),
    title: t("title", { in: loc.in[locale] }),
    description: t("metaDescription", { in: loc.in[locale], areas }),
  });
}

export default async function LocationPage({ params }: PageProps<"/[locale]/erazi/[slug]">) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const t = await getTranslations({ locale, namespace: "seo.location" });
  const ts = await getTranslations({ locale, namespace: "seo" });
  const tAreas = await getTranslations({ locale, namespace: "seo.areas" });
  const areas = areasOf(loc, locale);
  const vars = { in: loc.in[locale], name: loc.name[locale], areas: areas.slice(0, 3).join(", ") };
  const title = t("title", { in: loc.in[locale] });

  const faqs = [
    { q: t("q1", vars), a: t("a1", vars) },
    { q: t("q2", vars), a: t("a2", vars) },
    { q: t("q3", vars), a: t("a3", vars) },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={title}
        text={loc.summary[locale]}
        breadcrumbs={[
          { name: tAreas("title"), path: paths.areas },
          { name: loc.name[locale], path: paths.location(slug) },
        ]}
      />

      <Section title={t("aboutTitle")}>
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed">{loc.profile[locale]}</p>
          <div>
            <h3 className="mb-4 font-semibold">{t("areasTitle")}</h3>
            <Chips items={areas} />
          </div>
        </div>
      </Section>

      <Section title={t("servicesTitle", { in: loc.in[locale] })} muted>
        <LinkGrid
          items={services.map((s) => ({
            href: comboHref(locale, s.slug, loc.slug),
            title: s.name[locale],
            text: s.short[locale],
          }))}
        />
      </Section>

      {loc.sectorCity && (
        <Section title={t("sectorsTitle")}>
          <LinkGrid
            items={sectors.map((s) => ({ href: sectorCityHref(locale, s.slug, loc.slug), title: s.name[locale] }))}
          />
        </Section>
      )}

      {loc.kind === "capital" && (
        <Section title={t("districtsTitle")}>
          <LinkChips items={districts.map((d) => ({ href: paths.location(d.slug), title: d.name[locale] }))} />
        </Section>
      )}

      <WorkGallery />

      <Section title={ts("faqTitle")} muted>
        <div className="max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      <Section title={t("nearbyTitle")}>
        <LinkChips items={nearbyLocations(loc).map((n) => ({ href: paths.location(n.slug), title: n.name[locale] }))} />
      </Section>

      <CtaBand />
    </>
  );
}
