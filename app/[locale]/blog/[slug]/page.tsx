import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { postMap, posts } from "@/features/blog/posts";
import { LinkGrid } from "@/features/seo/components/link-grid";
import { paths } from "@/features/seo/links";
import { getSector, getService } from "@/features/seo/pages";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/shared/components/breadcrumbs";
import { CtaBand } from "@/shared/components/cta-band";
import { JsonLd } from "@/shared/components/json-ld";
import { articleJsonLd, pageMeta } from "@/shared/lib/seo";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const post = postMap.get(slug);
  if (!post) return {};
  return {
    ...pageMeta({
      locale,
      path: paths.post(slug),
      title: post.title[locale],
      description: post.excerpt[locale],
      image: post.cover,
      type: "article",
    }),
  };
}

const formatDate = (date: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date));

export default async function PostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const post = postMap.get(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const service = getService(post.service);
  const sector = post.sector ? getSector(post.sector) : undefined;
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const path = paths.post(slug);

  return (
    <>
      <section className="bg-hero pt-28 pb-12 text-white lg:pt-36">
        <div className="container-site max-w-3xl">
          <Breadcrumbs
            items={[
              { name: t("title"), path: paths.blog },
              { name: post.title[locale], path },
            ]}
            className="mb-8"
          />
          <time dateTime={post.date} className="text-sm text-white/60">
            {formatDate(post.date, locale)}
          </time>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
            {post.title[locale]}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{post.excerpt[locale]}</p>
        </div>
      </section>

      <article className="container-site max-w-3xl py-12 lg:py-16">
        <div className="relative mb-10 aspect-16/9 overflow-hidden rounded-3xl bg-secondary">
          <Image src={post.cover} alt={post.title[locale]} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        <div className="space-y-5 text-lg leading-relaxed">
          {post.body[locale].map((block, i) =>
            typeof block === "string" ? (
              <p key={i}>{block}</p>
            ) : "h2" in block ? (
              <h2 key={i} className="pt-6 text-2xl font-semibold tracking-tight">
                {block.h2}
              </h2>
            ) : (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-primary">
                {block.ul.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )
          )}
        </div>

        {(service || sector) && (
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {service && (
              <div>
                <p className="mb-2 text-sm text-muted-foreground">{t("relatedService")}</p>
                <LinkGrid items={[{ href: paths.service(service.slug), title: service.name[locale] }]} className="lg:grid-cols-1 sm:grid-cols-1" />
              </div>
            )}
            {sector && (
              <div>
                <p className="mb-2 text-sm text-muted-foreground">{t("relatedSector")}</p>
                <LinkGrid items={[{ href: paths.sector(sector.slug), title: sector.name[locale] }]} className="lg:grid-cols-1 sm:grid-cols-1" />
              </div>
            )}
          </div>
        )}
      </article>

      <section className="bg-secondary py-14 lg:py-20">
        <div className="container-site">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{t("latest")}</h2>
          <LinkGrid items={others.map((p) => ({ href: paths.post(p.slug), title: p.title[locale], text: p.excerpt[locale] }))} />
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={articleJsonLd({
          locale,
          path,
          title: post.title[locale],
          description: post.excerpt[locale],
          date: post.date,
          image: post.cover,
        })}
      />
    </>
  );
}
