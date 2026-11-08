"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowButton } from "@/shared/components/arrow-button";
import { NAV } from "@/shared/config/nav";
import { site } from "@/shared/config/site";
import { LanguageSwitcher } from "./language-switcher";

function isActive(path: string, href: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export function Navbar() {
  const t = useTranslations("common");
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-hero/90 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={t("a11y.home")}
          className="shrink-0 text-xl font-extrabold tracking-tight text-white sm:text-2xl"
        >
          {site.name}
        </Link>

        <nav aria-label={t("a11y.mainNav")} className="hidden xl:block">
        <ul className="flex items-center gap-0.5">
          {NAV.map((l) => {
            const active = isActive(path, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-[15px] font-medium transition-colors",
                    active ? "text-primary" : "text-white/80 hover:text-white"
                  )}
                >
                  {t(`nav.${l.key}`)}
                </Link>
              </li>
            );
          })}
        </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ArrowButton href={site.whatsapp} ariaLabel={t("a11y.whatsapp")} className="hidden md:inline-flex">
            {t("contact")}
          </ArrowButton>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t("menu")}
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white xl:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" closeLabel={t("a11y.closeMenu")} className="w-full gap-0 p-0 sm:max-w-sm">
              <SheetHeader className="border-b px-6 py-5">
                <SheetTitle className="text-lg font-bold">{site.name}</SheetTitle>
              </SheetHeader>
              <nav aria-label={t("a11y.mainNav")}>
              <ul className="flex flex-col p-3">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-2xl font-semibold tracking-tight transition-colors",
                        isActive(path, l.href) ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {t(`nav.${l.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-4 p-6">
                <LanguageSwitcher tone="light" className="self-start" />
                <ArrowButton href={site.whatsapp} ariaLabel={t("a11y.whatsapp")} className="w-full justify-between">
                  {t("contact")}
                </ArrowButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
