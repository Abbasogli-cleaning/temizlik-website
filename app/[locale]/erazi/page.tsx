import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LinkGrid, Section } from "@/features/seo/components/link-grid";
import { paths } from "@/features/seo/links";
import { cities, districts, services } from "@/features/seo/pages";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { PageHero } from "@/shared/components/page-hero";
import { pageMeta } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export async function generateMetadata({ params }: PageProps<"/[locale]/erazi">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "seo.areas" });
  return pageMeta({ locale, path: paths.areas, title: t("title"), description: t("metaDescription") });
}

export default async function AreasPage({ params }: PageProps<"/[locale]/erazi">) {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "seo.areas" });

  return (
    <>
      <PageHero title={t("title")} text={t("text")} breadcrumbs={[{ name: t("title"), path: paths.areas }]} />

      <Section title={t("cities")}>
        <LinkGrid
          items={cities.map((l) => ({ href: paths.location(l.slug), title: l.name[locale], text: l.summary[locale] }))}
        />
      </Section>

      <Section title={t("districts")} muted>
        <LinkGrid
          items={districts.map((l) => ({ href: paths.location(l.slug), title: l.name[locale], text: l.summary[locale] }))}
        />
      </Section>

      <Section title={t("services")}>
        <LinkGrid items={services.map((s) => ({ href: paths.service(s.slug), title: s.name[locale], text: s.short[locale] }))} />
      </Section>

      <CtaBand />
    </>
  );
}
