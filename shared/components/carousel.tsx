"use client";

import { Children, useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Sadə, asılılıqsız carousel — "Gördüyümüz işlər" və rəylər slayderi üçün ortaq.
 * perView: desktop-da eyni anda görünən slayd sayı (mobil həmişə 1).
 */
export function Carousel({
  children,
  autoplay = 5000,
  perView = 1,
  className,
}: {
  children: React.ReactNode;
  autoplay?: number | false;
  perView?: 1 | 2 | 3;
  className?: string;
}) {
  const t = useTranslations("common");
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(1);

  // Mobil 1, lg+ perView slayd göstərir
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setVisible(mq.matches ? perView : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [perView]);

  const pages = Math.max(1, slides.length - visible + 1);
  const current = Math.min(index, pages - 1);
  const go = useCallback((i: number) => setIndex(((i % pages) + pages) % pages), [pages]);

  useEffect(() => {
    if (!autoplay || paused || pages < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % pages), autoplay);
    return () => clearInterval(id);
  }, [autoplay, paused, pages]);

  return (
    <div
      role="region"
      aria-roledescription={t("a11y.carousel")}
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${(current * 100) / visible}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 px-2"
              style={{ width: `${100 / visible}%` }}
              aria-hidden={i < current || i >= current + visible}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button size="icon" variant="outline" aria-label={t("prev")} onClick={() => go(current - 1)}>
            <ChevronLeft className="size-5" />
          </Button>
          <div className="flex gap-2">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={t("goToSlide", { index: i + 1 })}
                aria-current={i === current}
                onClick={() => go(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === current ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                )}
              />
            ))}
          </div>
          <Button size="icon" variant="outline" aria-label={t("next")} onClick={() => go(current + 1)}>
            <ChevronRight className="size-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
