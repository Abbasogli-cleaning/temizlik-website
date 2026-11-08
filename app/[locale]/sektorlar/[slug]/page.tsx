import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { posts } from "@/features/blog/posts";
import { LinkChips, LinkGrid, Section } from "@/features/seo/components/link-grid";
import { SectorIcon } from "@/features/seo/components/sector-icon";
import { TestimonialCard } from "@/features/seo/components/testimonial-card";
import { paths, sectorCityHref } from "@/features/seo/links";
import { getSector, getService, sectorCities, sectors } from "@/features/seo/pages";
import type { Service } from "@/features/seo/types";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { FaqList } from "@/shared/components/faq-list";
import { JsonLd } from "@/shared/components/json-ld";
import { PageHero } from "@/shared/components/page-hero";
import { WorkGallery } from "@/shared/components/work-gallery";
import { absUrl, pageMeta, serviceJsonLd } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/sektorlar/[slug]">): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const s = getSector(slug);
  if (!s) return {};
  return pageMeta({ locale, path: paths.sector(slug), title: s.name[locale], description: s.short[locale] });
}

export default async function SectorPage({ params }: PageProps<"/[locale]/sektorlar/[slug]">) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const s = getSector(slug);
  if (!s) notFound();

  const t = await getTranslations({ locale, namespace: "seo.sector" });
  const ts = await getTranslations({ locale, namespace: "seo" });
  const tSectors = await getTranslations({ locale, namespace: "seo.sectors" });
  const svc = s.services.map(getService).filter((x): x is Service => Boolean(x));
  const related = posts.filter((p) => p.sector === s.slug);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={s.name[locale]}
        text={s.short[locale]}
        image={s.icon === "warehouse" ? "/images/isler/cnc-sexi-doseme-temizliyi.jpg" : undefined}
        imageAlt={s.name[locale]}
        breadcrumbs={[
          { name: tSectors("title"), path: paths.sectors },
          { name: s.name[locale], path: paths.sector(slug) },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <SectorIcon icon={s.icon} className="size-7" />
            </span>
            {s.intro[locale].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">{t("requirementsTitle")}</h2>
            <ul className="space-y-3">
              {s.requirements[locale].map((r) => (
                <li key={r} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={t("scheduleTitle")} muted>
        <p className="max-w-3xl text-lg leading-relaxed">{s.schedule[locale]}</p>
      </Section>

      <Section title={t("servicesTitle")}>
        <LinkGrid items={svc.map((x) => ({ href: paths.service(x.slug), title: x.name[locale], text: x.short[locale] }))} />
      </Section>

      {s.testimonial && (
        <Section title={t("testimonialTitle")} muted>
          <TestimonialCard id={s.testimonial} />
        </Section>
      )}

      <WorkGallery />

      <Section title={ts("faqTitle")} muted>
        <div className="max-w-3xl">
          <FaqList items={s.faqs[locale]} />
        </div>
      </Section>

      <Section title={t("citiesTitle")}>
        <LinkChips
          items={sectorCities.map((c) => ({ href: sectorCityHref(locale, s.slug, c.slug), title: c.name[locale] }))}
        />
      </Section>

      {related.length > 0 && (
        <Section title={ts("service.postsTitle")} muted>
          <LinkGrid items={related.map((p) => ({ href: paths.post(p.slug), title: p.title[locale], text: p.excerpt[locale] }))} />
        </Section>
      )}

      <CtaBand />
      <JsonLd data={serviceJsonLd({ name: s.name[locale], description: s.short[locale], url: absUrl(locale, paths.sector(slug)) })} />
    </>
  );
}
