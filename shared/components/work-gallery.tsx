
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n/routing";

import { cn } from "@/lib/utils";
import { WORK_IMAGES } from "@/shared/config/content";

/**
 * Real iş şəkilləri (public/images/isler). Lokasiyaya aid olduğunu iddia etmirik —
 * başlıq ümumi "Gördüyümüz işlər"dir.
 */
export function WorkGallery({ className, limit = 5 }: { className?: string; limit?: number }) {
  const t = useTranslations("home.work");
  const locale = useLocale() as Locale;
  const images = WORK_IMAGES.slice(0, limit);
  return (
    <section className={cn("section-spacing", className)}>
      <div className="container-site">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">{t("title")}</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={cn(
                "relative overflow-hidden rounded-2xl",
                i === 0 ? "col-span-2 aspect-4/3 md:row-span-2 md:aspect-auto" : "aspect-4/3"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt[locale]}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
