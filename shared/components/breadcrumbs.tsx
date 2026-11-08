import { ChevronRight, Home } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { breadcrumbJsonLd, type Crumb } from "@/shared/lib/seo";
import { JsonLd } from "./json-ld";

/**
 * Görünən breadcrumb + BreadcrumbList JSON-LD.
 * `items` ana səhifəsiz verilir — "Ana Səhifə" avtomatik əlavə olunur; sonuncu = cari səhifə.
 */
export function Breadcrumbs({
  items,
  tone = "dark",
  className,
}: {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const t = useTranslations("common.nav");
  const ta = useTranslations("common.a11y");
  const locale = useLocale() as Locale;
  const crumbs: Crumb[] = [{ name: t("home"), path: "" }, ...items];

  return (
    <>
      <nav aria-label={ta("breadcrumb")} className={cn("text-sm", className)}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={c.path || "home"} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className={cn("size-3.5", tone === "dark" ? "text-white/40" : "text-muted-foreground/60")}
                    aria-hidden
                  />
                )}
                {last ? (
                  <span aria-current="page" className={tone === "dark" ? "text-white" : "text-foreground"}>
                    {c.name}
                  </span>
                ) : (
                  <Link
                    href={c.path || "/"}
                    className={cn(
                      "inline-flex items-center gap-1 transition-colors",
                      tone === "dark" ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {i === 0 && <Home className="size-3.5" aria-hidden />}
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(locale, crumbs)} />
    </>
  );
}
