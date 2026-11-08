import Image from "next/image";

import type { Crumb } from "@/shared/lib/seo";
import { Breadcrumbs } from "./breadcrumbs";

/** Daxili səhifələrin tünd hero bloku (şəffaf navbar altında). Hər səhifədə yeganə <h1>. */
export function PageHero({
  title,
  text,
  image,
  imageAlt = "",
  eyebrow,
  breadcrumbs,
  children,
}: {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-hero pt-28 pb-16 text-white lg:pt-36 lg:pb-24">
      <div className="container-site">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-8" />}
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">{eyebrow}</p>
            )}
            <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
          <p className="animate-fade-up text-base leading-relaxed text-white/70 [animation-delay:120ms] sm:text-lg">
            {text}
          </p>
        </div>
        {image && (
          <div className="relative mt-12 aspect-16/8 overflow-hidden rounded-3xl lg:mt-16">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1240px) 1200px, 100vw" className="object-cover" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
