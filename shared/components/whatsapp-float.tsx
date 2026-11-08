import { useTranslations } from "next-intl";

import { site } from "@/shared/config/site";
import { WhatsAppIcon } from "./social-icons";

/**
 * Sağ altda həmişə görünən WhatsApp düyməsi — birbaşa söhbət açır (wa.me + hazır mesaj).
 * Server komponentidir: əlavə JS yoxdur.
 */
export function WhatsAppFloat() {
  const t = useTranslations("common");
  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(t("whatsappFloat.text"))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("a11y.whatsapp")}
      title={t("whatsappFloat.label")}
      className="group fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      {/* Desktop-da hover zamanı görünən etiket */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground opacity-0 shadow-lg transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        {t("whatsappFloat.label")}
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-[#25D366]/40">
        {/* Diqqət çəkən yumşaq dalğa (reduced-motion-da globals.css söndürür) */}
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
