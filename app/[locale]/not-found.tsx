import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section className="bg-hero pt-40 pb-32 text-center text-white">
      <div className="container-site">
        <p className="text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold">{t("title")}</h1>
        <p className="mt-3 text-white/70">{t("text")}</p>
        <Button asChild className="mt-8">
          <Link href="/">{t("back")}</Link>
        </Button>
      </div>
    </section>
  );
}
