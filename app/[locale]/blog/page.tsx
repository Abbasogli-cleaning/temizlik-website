import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { posts } from "@/features/blog/posts";
import { Section } from "@/features/seo/components/link-grid";
import { paths } from "@/features/seo/links";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/shared/components/page-hero";
import { pageMeta } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export async function generateMetadata({ params }: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "blog" });
  return pageMeta({ locale, path: paths.blog, title: t("title"), description: t("metaDescription") });
}

const formatDate = (date: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date));

export default async function BlogPage({ params }: PageProps<"/[locale]/blog">) {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <>
      <PageHero title={t("title")} text={t("text")} breadcrumbs={[{ name: t("title"), path: paths.blog }]} />

      <Section>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={paths.post(p.slug)} className="group block">
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-secondary">
                  <Image
                    src={p.cover}
                    alt={p.title[locale]}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <time dateTime={p.date} className="mt-5 block text-sm text-muted-foreground">
                  {formatDate(p.date, locale)}
                </time>
                <h2 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {p.title[locale]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt[locale]}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary">{t("readMore")} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
