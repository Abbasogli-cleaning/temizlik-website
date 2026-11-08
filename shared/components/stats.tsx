import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { STATS } from "@/shared/config/content";

type StatKey = (typeof STATS)[number]["key"];

/**
 * Ortaq statistika bloku.
 * - "cards": ana səhifə (başlıq + izah)
 * - "band":  haqqımızda (tünd zolaq, yalnız rəqəm + başlıq)
 */
export function Stats({
  variant = "cards",
  keys,
  className,
}: {
  variant?: "cards" | "band";
  keys?: readonly StatKey[];
  className?: string;
}) {
  const t = useTranslations("common.stats");
  const items = keys ? STATS.filter((s) => keys.includes(s.key)) : STATS;

  if (variant === "band") {
    return (
      <div className={cn("grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4", className)}>
        {items.map((s) => (
          <div key={s.key} className="bg-hero px-6 py-10 text-center text-white">
            <p className="text-4xl font-bold tracking-tight sm:text-5xl">
              {s.value}
              <span className="text-primary">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-white/70 sm:text-base">{t(`${s.key}.title`)}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((s) => (
        <div key={s.key} className="flex flex-col justify-between gap-8 rounded-3xl bg-secondary p-8">
          <p className="text-5xl font-bold tracking-tight lg:text-6xl">
            {s.value}
            <span className="text-primary">{s.suffix}</span>
          </p>
          <div>
            <h3 className="text-lg font-semibold">{t(`${s.key}.title`)}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(`${s.key}.text`)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
