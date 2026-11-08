import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Section } from "@/features/seo/components/link-grid";
import { SectorIcon } from "@/features/seo/components/sector-icon";
import { paths } from "@/features/seo/links";
import { sectors } from "@/features/seo/pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { PageHero } from "@/shared/components/page-hero";
import { pageMeta } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export async function generateMetadata({ params }: PageProps<"/[locale]/sektorlar">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "seo.sectors" });
  return pageMeta({ locale, path: paths.sectors, title: t("title"), description: t("metaDescription") });
}

export default async function SectorsPage({ params }: PageProps<"/[locale]/sektorlar">) {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "seo.sectors" });

  return (
    <>
      <PageHero title={t("title")} text={t("text")} breadcrumbs={[{ name: t("title"), path: paths.sectors }]} />

      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <li key={s.slug}>
              <Link
                href={paths.sector(s.slug)}
                className="group flex h-full flex-col gap-4 rounded-3xl border bg-white p-6 transition-colors hover:border-primary"
              >
                <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <SectorIcon icon={s.icon} className="size-6" />
                </span>
                <span className="text-lg font-semibold tracking-tight">{s.name[locale]}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{s.short[locale]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
