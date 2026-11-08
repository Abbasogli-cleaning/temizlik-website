import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { LinkGrid, Section } from "@/features/seo/components/link-grid";
import { paths } from "@/features/seo/links";
import { sectors, services } from "@/features/seo/pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { FaqList } from "@/shared/components/faq-list";
import { PageHero } from "@/shared/components/page-hero";
import { SectionTitle } from "@/shared/components/section-title";
import { FAQ_KEYS, images, services as serviceImages } from "@/shared/config/content";
import { pageMeta } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "services" });
  return pageMeta({ locale, path: "/services", title: t("metaTitle"), description: t("hero.text") });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "services" });
  const ts = await getTranslations({ locale, namespace: "seo" });
  const tn = await getTranslations({ locale, namespace: "common.nav" });

  return (
    <>
      <PageHero
        title={t("hero.title")}
        text={t("hero.text")}
        image={images.servicesHero}
        imageAlt={t("hero.imageAlt")}
        breadcrumbs={[{ name: tn("services"), path: "/services" }]}
      />

      <section className="section-spacing">
        <ul className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={paths.service(s.slug)} className="block h-full">
                <Card className="group h-full gap-0 overflow-hidden rounded-3xl py-0 shadow-none transition-colors hover:border-primary">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={serviceImages[s.contentKey].src}
                      alt={serviceImages[s.contentKey].alt[locale]}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="flex items-start justify-between gap-3 text-xl font-semibold tracking-tight group-hover:text-primary">
                      {s.name[locale]}
                      <ArrowUpRight className="size-5 shrink-0 transition group-hover:rotate-45" aria-hidden />
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short[locale]}</p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Section title={tn("sectors")} muted>
        <LinkGrid items={sectors.map((s) => ({ href: paths.sector(s.slug), title: s.name[locale], text: s.short[locale] }))} />
      </Section>

      <section className="section-spacing">
        <div className="container-site max-w-3xl">
          <SectionTitle center className="mb-10">
            {t("faq.title")}
          </SectionTitle>
          <FaqList
            className="border"
            items={FAQ_KEYS.map((key) => ({ q: t(`faq.items.${key}.q`), a: t(`faq.items.${key}.a`) }))}
          />
          <p className="mt-8 text-center text-sm">
            <Link href={paths.areas} className="font-medium text-primary hover:underline">
              {ts("areas.title")} →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
