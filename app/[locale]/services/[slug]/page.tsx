import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { posts } from "@/features/blog/posts";
import { LinkChips, LinkGrid, Section } from "@/features/seo/components/link-grid";
import { comboHref, paths } from "@/features/seo/links";
import { cities, districts, getService, sectors, services } from "@/features/seo/pages";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { FaqList } from "@/shared/components/faq-list";
import { JsonLd } from "@/shared/components/json-ld";
import { PageHero } from "@/shared/components/page-hero";
import { WorkGallery } from "@/shared/components/work-gallery";
import { services as serviceImages } from "@/shared/config/content";
import { absUrl, pageMeta, serviceJsonLd } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    locale,
    path: paths.service(slug),
    title: s.name[locale],
    description: s.short[locale],
    image: serviceImages[s.contentKey].src,
  });
}

export default async function ServicePage({ params }: PageProps<"/[locale]/services/[slug]">) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const s = getService(slug);
  if (!s) notFound();

  const t = await getTranslations({ locale, namespace: "seo.service" });
  const ts = await getTranslations({ locale, namespace: "seo" });
  const tn = await getTranslations({ locale, namespace: "common.nav" });
  const related = posts.filter((p) => p.service === s.slug);
  const relatedSectors = sectors.filter((sec) => sec.services.includes(s.slug));

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={s.name[locale]}
        text={s.short[locale]}
        image={serviceImages[s.contentKey].src}
        imageAlt={serviceImages[s.contentKey].alt[locale]}
        breadcrumbs={[
          { name: tn("services"), path: "/services" },
          { name: s.name[locale], path: paths.service(slug) },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed">
            {s.intro[locale].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">{t("includedTitle")}</h2>
            <ul className="space-y-3">
              {s.included[locale].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={t("processTitle")} muted>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.process[locale].map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-white p-6">
              <span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={t("factorsTitle")}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {s.factors[locale].map((f) => (
            <li key={f} className="rounded-2xl border p-5 font-medium">
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <WorkGallery className="bg-secondary" />

      <Section title={ts("faqTitle")}>
        <div className="max-w-3xl">
          <FaqList items={s.faqs[locale]} className="border" />
        </div>
      </Section>

      <Section title={t("areasTitle")} muted>
        <LinkChips
          items={[...cities, ...districts].map((loc) => ({
            href: comboHref(locale, s.slug, loc.slug),
            title: loc.name[locale],
          }))}
        />
      </Section>

      {relatedSectors.length > 0 && (
        <Section title={t("sectorsTitle")}>
          <LinkGrid items={relatedSectors.map((sec) => ({ href: paths.sector(sec.slug), title: sec.name[locale], text: sec.short[locale] }))} />
        </Section>
      )}

      {related.length > 0 && (
        <Section title={t("postsTitle")} muted>
          <LinkGrid items={related.map((p) => ({ href: paths.post(p.slug), title: p.title[locale], text: p.excerpt[locale] }))} />
        </Section>
      )}

      <Section title={t("otherTitle")}>
        <LinkChips
          items={services.filter((o) => o.slug !== s.slug).map((o) => ({ href: paths.service(o.slug), title: o.name[locale] }))}
        />
      </Section>

      <CtaBand />
      <JsonLd
        data={serviceJsonLd({ name: s.name[locale], description: s.short[locale], url: absUrl(locale, paths.service(slug)) })}
      />
    </>
  );
}
