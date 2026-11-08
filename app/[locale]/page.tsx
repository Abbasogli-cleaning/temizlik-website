import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { pageMeta } from "@/shared/lib/seo";
import { ArrowUpRight, Star, StarHalf } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services as seoServices } from "@/features/seo/data/services";
import { Link } from "@/i18n/navigation";
import { Carousel } from "@/shared/components/carousel";
import { QuoteForm } from "@/shared/components/quote-form";
import { SectionTitle } from "@/shared/components/section-title";
import { InitialsAvatar } from "@/shared/components/initials-avatar";
import { Stats } from "@/shared/components/stats";
import {
  ADVANTAGES,
  images,
  SERVICE_KEYS,
  services,
  TESTIMONIALS,
  WORK_IMAGES,
} from "@/shared/config/content";

// Bütün URL-lər generateStaticParams ilə prerender olunur; naməlum slug üçün düzgün 404 statusu
// almaq üçün params Suspense-dən kənarda oxunur (instant validation yalnız dev-də işləyir).
export const instant = false;

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "common.metadata" });
  // Ana səhifədə layout-dakı title.default işləsin deyə absolute
  return { ...pageMeta({ locale, path: "", title: t("title"), description: t("description") }), title: { absolute: t("title") } };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Work />
      <Advantages />
    </>
  );
}

function Hero() {
  const t = useTranslations("home.hero");
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 size-full object-cover"
      >
        <source src={images.heroVideo.mp4} type="video/mp4" />
        <source src={images.heroVideo.webm} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative container-site grid min-h-svh items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.2fr_1fr] lg:pt-36">
        <div className="animate-fade-up">
          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{t("text")}</p>
        </div>
        <QuoteForm className="animate-fade-up [animation-delay:150ms]" />
      </div>
    </section>
  );
}

function About() {
  const t = useTranslations("home.about");
  return (
    <section className="section-spacing">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <SectionTitle as="h2" className="lg:text-4xl">
            {t("title")}
          </SectionTitle>
          <p className="self-end leading-relaxed text-muted-foreground">{t("text")}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          <div className="relative min-h-72 overflow-hidden rounded-3xl">
            <Image src={images.homeAbout} alt={t("imageAlt")} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
          </div>
          <Stats keys={["projects", "years", "clients"]} className="lg:col-span-3" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale() as Locale;
  return (
    <section className="section-spacing bg-secondary">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle>{t("servicesTitle")}</SectionTitle>
          <Button asChild>
            <Link href="/services">{tc("allServices")}</Link>
          </Button>
        </div>

        <ul className="mt-12 divide-y border-y">
          {SERVICE_KEYS.map((key) => (
            <li key={key}>
              <Link
                href={`/services/${seoServices.find((x) => x.contentKey === key)?.slug ?? ""}`}
                className="group grid items-center gap-4 py-6 transition-colors md:grid-cols-[1.2fr_auto_1fr_auto] md:gap-8"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white transition-colors group-hover:bg-primary">
                    <Image
                      src={services[key].icon}
                      alt=""
                      width={28}
                      height={28}
                      unoptimized
                      className="transition group-hover:brightness-0 group-hover:invert"
                    />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                    {tc(`services.${key}.title`)}
                  </h3>
                </div>
                <div className="relative hidden h-24 w-40 -rotate-6 overflow-hidden rounded-2xl opacity-0 transition duration-500 group-hover:rotate-0 group-hover:opacity-100 md:block">
                  <Image src={services[key].src} alt={services[key].alt[locale]} fill sizes="160px" className="object-cover" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{tc(`services.${key}.text`)}</p>
                <ArrowUpRight
                  className="hidden size-6 text-muted-foreground transition group-hover:rotate-45 group-hover:text-primary md:block"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Rating({ value }: { value: number }) {
  const t = useTranslations("common.a11y");
  return (
    <div role="img" className="flex gap-0.5 text-amber-400" aria-label={t("rating", { value })}>
      {Array.from({ length: 5 }, (_, i) =>
        i + 1 <= value ? (
          <Star key={i} className="size-4 fill-current" aria-hidden />
        ) : i < value ? (
          <StarHalf key={i} className="size-4 fill-current" aria-hidden />
        ) : (
          <Star key={i} className="size-4 opacity-30" aria-hidden />
        )
      )}
    </div>
  );
}

function Testimonials() {
  const t = useTranslations("home.testimonials");
  return (
    <section className="section-spacing">
      <div className="container-site">
        <SectionTitle center className="mb-12">
          {t("title")}
        </SectionTitle>
        <Carousel perView={3} autoplay={6000}>
          {TESTIMONIALS.map((item, i) => (
            <Card key={item.key} className="h-full rounded-3xl border bg-secondary/60 shadow-none">
              <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
                <div className="space-y-4">
                  <Rating value={item.rating} />
                  <p className="text-lg leading-relaxed font-medium">{t(`items.${item.key}.text`)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <InitialsAvatar name={t(`items.${item.key}.name`)} />
                  <div>
                    <p className="font-semibold">{t(`items.${item.key}.name`)}</p>
                    <p className="text-sm text-muted-foreground">{i < 3 ? t("partner") : t("client")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function Work() {
  const t = useTranslations("home.work");
  const locale = useLocale() as Locale;
  return (
    <section className="section-spacing bg-secondary">
      <div className="container-site">
        <SectionTitle center className="mb-12">
          {t("title")}
        </SectionTitle>
        <Carousel autoplay={5000} className="mx-auto max-w-5xl">
          {WORK_IMAGES.map((img) => (
            <div key={img.src} className="relative aspect-16/10 overflow-hidden rounded-3xl">
              <Image
                src={img.src}
                alt={img.alt[locale]}
                fill
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function Advantages() {
  const t = useTranslations("home.advantages");
  const tc = useTranslations("common");
  return (
    <section className="section-spacing">
      <div className="container-site">
        <SectionTitle className="mb-12">{t("title")}</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {ADVANTAGES.map((item) => (
            <article key={item.key} className="group">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={t(`items.${item.key}.title`)}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  {t(`items.${item.key}.category`)}
                </span>
                {tc("guaranteed")}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{t(`items.${item.key}.title`)}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
