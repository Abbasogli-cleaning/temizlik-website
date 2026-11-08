import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Chips, LinkChips, LinkGrid, Section } from "@/features/seo/components/link-grid";
import { paths } from "@/features/seo/links";
import {
  areasOf,
  capitalize,
  COMBO_LOCALES,
  comboTitle,
  fill,
  nearbyLocations,
  serviceLocationPages,
  services,
} from "@/features/seo/pages";
import type { Location, Service } from "@/features/seo/types";
import type { Locale } from "@/i18n/routing";
import { CtaBand } from "@/shared/components/cta-band";
import { FaqList } from "@/shared/components/faq-list";
import { JsonLd } from "@/shared/components/json-ld";
import { PageHero } from "@/shared/components/page-hero";
import { services as serviceImages } from "@/shared/config/content";
import { absUrl, pageMeta, serviceJsonLd } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export function generateStaticParams() {
  return [...serviceLocationPages.keys()].map((slug) => ({ slug }));
}

/** Kombinasiya səhifəsi yalnız az/ru-da var */
function resolve(locale: string, slug: string) {
  if (!COMBO_LOCALES.includes(locale as Locale)) return undefined;
  return serviceLocationPages.get(slug);
}

/** Cümlə içində xidmət adı: az/en kiçik hərflə, ru olduğu kimi (dırnaqda) */
const inline = (s: Service, locale: Locale) => (locale === "ru" ? s.name.ru : s.name[locale].toLocaleLowerCase(locale));

function metaFor(s: Service, loc: Location, locale: Locale, template: (v: Record<string, string>) => string) {
  return template({ in: loc.in[locale], service: locale === "az" ? inline(s, locale) : s.name[locale], short: s.short[locale] });
}

export async function generateMetadata({ params }: PageProps<"/[locale]/erazi-xidmet/[slug]">): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const page = resolve(locale, slug);
  if (!page) return {};
  const { service: s, location: loc } = page;
  const t = await getTranslations({ locale, namespace: "seo.combo" });
  return pageMeta({
    locale,
    path: paths.combo(s.slug, loc.slug),
    locales: COMBO_LOCALES,
    title: comboTitle(s.name[locale], loc, locale),
    description: capitalize(metaFor(s, loc, locale, (v) => t("metaDescription", v)), locale),
    image: serviceImages[s.contentKey].src,
  });
}

export default async function ServiceLocationPage({ params }: PageProps<"/[locale]/erazi-xidmet/[slug]">) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const page = resolve(locale, slug);
  if (!page) notFound();

  const { service: s, location: loc } = page;
  const t = await getTranslations({ locale, namespace: "seo.combo" });
  const ts = await getTranslations({ locale, namespace: "seo" });
  const tsv = await getTranslations({ locale, namespace: "seo.service" });
  const tl = await getTranslations({ locale, namespace: "seo.location" });
  const tAreas = await getTranslations({ locale, namespace: "seo.areas" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const title = comboTitle(s.name[locale], loc, locale);
  const areas = areasOf(loc, locale);
  const vars = {
    in: loc.in[locale],
    name: loc.name[locale],
    areas: areas.slice(0, 3).join(", "),
    service: inline(s, locale),
  };

  // Lokasiya flag-lərinə görə əlavə paraqraflar (unikallıq)
  const flagNotes = loc.flags
    .map((f) => s.flagNotes[f]?.[locale])
    .filter((n): n is string => Boolean(n))
    .map((n) => capitalize(fill(n, loc, locale), locale));

  const faqs = [
    { q: capitalize(t("q1", vars), locale), a: t("a1", vars) },
    { q: t("q2", vars), a: t("a2", vars) },
    ...s.faqs[locale].slice(0, 2),
  ];

  const path = paths.combo(s.slug, loc.slug);

  return (
    <>
      <PageHero
        eyebrow={loc.name[locale]}
        title={capitalize(title, locale)}
        text={capitalize(fill(s.localIntro[locale], loc, locale), locale)}
        image={serviceImages[s.contentKey].src}
        imageAlt={title}
        breadcrumbs={[
          { name: tAreas("title"), path: paths.areas },
          { name: loc.name[locale], path: paths.location(loc.slug) },
          { name: s.name[locale], path },
        ]}
      />

      <Section title={t("contextTitle")}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed">
            <p>{loc.profile[locale]}</p>
            {flagNotes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
          <div>
            <h3 className="mb-4 font-semibold">{tl("areasTitle")}</h3>
            <Chips items={areas} />
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">{tsv("includedTitle")}</h2>
            <ul className="space-y-3">
              {s.included[locale].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">{tsv("processTitle")}</h2>
            <ol className="space-y-4">
              {s.process[locale].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section title={ts("faqTitle")}>
        <div className="max-w-3xl">
          <FaqList items={faqs} className="border" />
        </div>
      </Section>

      <Section title={t("otherServicesTitle", { in: loc.in[locale] })} muted>
        <LinkGrid
          items={services
            .filter((o) => o.slug !== s.slug)
            .map((o) => ({ href: paths.combo(o.slug, loc.slug), title: o.name[locale], text: o.short[locale] }))}
        />
      </Section>

      <Section title={t("nearbyTitle", { service: s.name[locale] })}>
        <LinkChips
          items={nearbyLocations(loc).map((n) => ({ href: paths.combo(s.slug, n.slug), title: n.name[locale] }))}
        />
        <p className="mt-6 text-sm">
          <a
            href={`/${locale}${paths.service(s.slug)}`}
            aria-label={tc("a11y.more", { name: s.name[locale] })}
            className="font-medium text-primary hover:underline"
          >
            {s.name[locale]} — {ts("more")} →
          </a>
        </p>
      </Section>

      <CtaBand />
      <JsonLd
        data={serviceJsonLd({
          name: capitalize(title, locale),
          description: s.short[locale],
          url: absUrl(locale, path),
          area: { name: loc.name.en, type: loc.kind === "district" ? "AdministrativeArea" : "City" },
        })}
      />
    </>
  );
}
