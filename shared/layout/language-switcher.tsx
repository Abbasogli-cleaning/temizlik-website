"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { localeNames, routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Qlobus + cari dil (AZ ▾) → açılan menyuda dillər */
export function LanguageSwitcher({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const t = useTranslations("common");
  const current = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={t("language")}
        className={cn(
          "group inline-flex h-11 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/40",
          tone === "dark"
            ? "border-white/20 bg-white/5 text-white hover:border-white/40"
            : "border-border bg-white text-foreground hover:border-foreground/30",
          className
        )}
      >
        <Globe className="size-4" aria-hidden />
        {localeNames[current].short}
        <ChevronDown
          className="size-3.5 opacity-60 transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={8} className="min-w-44 rounded-2xl p-1.5">
        {routing.locales.map((l) => (
          <DropdownMenuItem key={l} asChild className="rounded-xl px-3 py-2.5 focus:bg-secondary">
            <Link
              href={pathname}
              locale={l}
              lang={l}
              hrefLang={l}
              aria-current={l === current ? "true" : undefined}
              className="flex w-full items-center justify-between gap-3"
            >
              <span className="flex items-center gap-3 hover:text-gray-800">
                <span className="w-6 text-xs font-medium text-muted-foreground">{localeNames[l].short}</span>
                <span className="text-sm">{localeNames[l].name}</span>
              </span>
              {l === current && <Check className="size-4 text-primary" aria-hidden />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
