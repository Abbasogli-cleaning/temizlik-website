import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ArrowButton } from "@/shared/components/arrow-button";
import { site } from "@/shared/config/site";

/** Səhifə sonu çağırış bloku — WhatsApp + zəng */
export function CtaBand({ title }: { title?: string }) {
  const t = useTranslations("common");
  return (
    <section className="section-spacing">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary/10 p-8 sm:p-12 lg:flex-row lg:items-center">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {title ?? t("footer.cta")}
          </h2>
          <div className="flex flex-wrap gap-3">
            <ArrowButton href={site.whatsapp} ariaLabel={t("a11y.whatsapp")}>
              {t("footer.quote")}
            </ArrowButton>
            <Button asChild variant="outline" className="h-12 px-6">
              <a href={site.phoneHref} aria-label={t("a11y.call", { phone: site.phone })}>
                <Phone className="size-4" aria-hidden />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
