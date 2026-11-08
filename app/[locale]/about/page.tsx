import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/shared/components/page-hero";
import { SectionTitle } from "@/shared/components/section-title";
import { Stats } from "@/shared/components/stats";
import { ABOUT_FEATURES, images, services, TEAM } from "@/shared/config/content";
import { pageMeta } from "@/shared/lib/seo";
import type { Locale } from "@/i18n/routing";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMeta({ locale, path: "/about", title: t("metaTitle"), description: t("hero.text") });
}

const VALUES = ["mission", "story", "vision"] as const;
const POPULAR = ["office", "facade", "renovation"] as const;

export default function AboutPage() {
  const t = useTranslations("about");
  const tc = useTranslations("common");

  return (
    <>
      <PageHero
        title={t("hero.title")}
        text={t("hero.text")}
        image={images.aboutHero}
        imageAlt={t("hero.imageAlt")}
        breadcrumbs={[{ name: tc("nav.about"), path: "/about" }]}
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {VALUES.map((key) => (
            <div key={key} className="border-t border-white/15 pt-6">
              <h2 className="text-xl font-semibold">{t(`values.${key}.title`)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{t(`values.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Müştəri məmnuniyyəti */}
      <section className="section-spacing">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle>{t("split.title")}</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">{t("split.text")}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ABOUT_FEATURES.map((key) => (
                <li key={key} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden />
                  {t(`split.features.${key}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image src={images.aboutSplit} alt={t("split.imageAlt")} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Statistika */}
      <section className="bg-hero py-16">
        <div className="container-site">
          <Stats variant="band" />
        </div>
      </section>

      {/* Ən çox tələb olunan xidmətlər */}
      <section className="section-spacing bg-secondary">
        <div className="container-site">
          <SectionTitle center className="mb-12">
            {t("popular.title")}
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {POPULAR.map((key) => (
              <Card key={key} className="rounded-3xl border-0 shadow-none">
                <CardContent className="p-8">
                  <span className="grid size-16 place-items-center rounded-full bg-primary/10">
                    <Image src={services[key].icon} alt="" width={32} height={32} unoptimized />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{tc(`services.${key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`popular.${key}`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Komanda */}
      <section className="section-spacing">
        <div className="container-site">
          <SectionTitle className="mb-12">{t("team.title")}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <article key={m.key}>
                <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-secondary">
                  <Image
                    src={m.image}
                    alt={t(`team.items.${m.key}.name`)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t(`team.items.${m.key}.name`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`team.items.${m.key}.role`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
