import { MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { hasCombos, paths } from "@/features/seo/links";
import { capitalize, comboTitle, getLocation, getService, locations, sectors } from "@/features/seo/pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ArrowButton } from "@/shared/components/arrow-button";
import { FacebookIcon, InstagramIcon } from "@/shared/components/social-icons";
import { NAV } from "@/shared/config/nav";
import { site } from "@/shared/config/site";

const POPULAR = [
  ["ofis-temizliyi", "baki"],
  ["temir-sonrasi-temizlik", "baki"],
  ["fasad-ve-suse-yuyulmasi", "baki"],
  ["ofis-temizliyi", "nesimi"],
  ["menzil-temizliyi", "yasamal"],
  ["temir-sonrasi-temizlik", "xirdalan"],
  ["dezinfeksiya", "sumqayit"],
  ["restoran-ve-kafe-temizliyi", "sebail"],
] as const;

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">{title}</h2>
      <ul className="flex flex-col gap-2.5 text-sm">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/60 transition-colors hover:text-primary">
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;

  return (
    <footer className="bg-hero text-white">
      <div className="container-site py-16 lg:py-20">
        {/* CTA */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            {t("footer.cta")}
          </h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ArrowButton href={site.whatsapp} ariaLabel={t("a11y.whatsapp")}>
              {t("footer.quote")}
            </ArrowButton>
            <Button asChild variant="glass" className="h-12 px-6">
              <a href={site.phoneHref}>{t("footer.call", { phone: site.phone })}</a>
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" aria-label={t("a11y.home")} className="text-2xl font-extrabold">
              {site.name}
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">{t("footer.tagline")}</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary" aria-hidden />
                <a
                  href={site.phoneHref}
                  aria-label={t("a11y.call", { phone: site.phone })}
                  className="text-white/70 transition-colors hover:text-primary"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                {site.address}
              </li>
            </ul>
          </div>

          <FooterColumn title={t("footer.menu")}>
            {NAV.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {t(`nav.${l.key}`)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t("footer.areas")}>
            {locations.map((l) => (
              <FooterLink key={l.slug} href={paths.location(l.slug)}>
                {l.name[locale]}
              </FooterLink>
            ))}
          </FooterColumn>

          <div className="space-y-10">
            <FooterColumn title={t("footer.sectors")}>
              {sectors.map((s) => (
                <FooterLink key={s.slug} href={paths.sector(s.slug)}>
                  {s.name[locale]}
                </FooterLink>
              ))}
            </FooterColumn>

            {/* Kiçik, seçilmiş "Populyar axtarışlar" bloku — yüzlərlə link yox */}
            {hasCombos(locale) && (
              <FooterColumn title={t("footer.popular")}>
                {POPULAR.map(([service, loc]) => {
                  const s = getService(service);
                  const l = getLocation(loc);
                  if (!s || !l) return null;
                  return (
                    <FooterLink key={`${service}-${loc}`} href={paths.combo(service, loc)}>
                      {capitalize(comboTitle(s.name[locale], l, locale), locale)}
                    </FooterLink>
                  );
                })}
              </FooterColumn>
            )}
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>
            {t("footer.developedBy")}{" "}
            <a
              href={site.developer.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("a11y.developer", { name: site.developer.name })}
              className="underline hover:text-white"
            >
              {site.developer.name}
            </a>
          </p>
          <div className="flex gap-2">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("a11y.facebook")}
              className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("a11y.instagram")}
              className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
