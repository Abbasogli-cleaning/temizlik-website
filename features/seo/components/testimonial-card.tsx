import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

import { InitialsAvatar } from "@/shared/components/initials-avatar";
import { TESTIMONIALS } from "@/shared/config/content";

/** Ana səhifədəki real rəylərdən biri — sektor səhifələrində sübut kimi */
export function TestimonialCard({ id }: { id: (typeof TESTIMONIALS)[number]["key"] }) {
  const t = useTranslations("home.testimonials");
  const item = TESTIMONIALS.find((x) => x.key === id);
  if (!item) return null;
  return (
    <figure className="max-w-3xl rounded-3xl bg-white p-8 sm:p-10">
      <Quote className="size-8 text-primary" aria-hidden />
      <blockquote className="mt-4 text-xl leading-relaxed font-medium">{t(`items.${id}.text`)}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <InitialsAvatar name={t(`items.${id}.name`)} />
        <span className="font-semibold">{t(`items.${id}.name`)}</span>
      </figcaption>
    </figure>
  );
}
