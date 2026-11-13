"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { site } from "@/shared/config/site";

const FORM_SERVICES = ["office", "facade", "apartment", "restaurant", "renovation"] as const;

/**
 * "Fərdi Təklif Al" forması.
 * Backend hələ yoxdur — göndərəndə məlumatlar WhatsApp mesajı kimi açılır.
 * API hazır olanda onSubmit içində fetch ilə əvəz et.
 */
export function QuoteForm({ className }: { className?: string }) {
  const t = useTranslations("common.form");
  const ts = useTranslations("common.services");
  const [service, setService] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      t("message"),
      `${t("name")}: ${data.get("name") ?? ""}`,
      `${t("email")}: ${data.get("email") ?? ""}`,
      `${t("phone")}: ${data.get("phone") ?? ""}`,
      service && `${t("service")}: ${ts(`${service as (typeof FORM_SERVICES)[number]}.title`)}`,
      `${t("location")}: ${data.get("location") ?? ""}`,
      `${t("date")}: ${data.get("date") ?? ""}`,
    ].filter(Boolean);

    (window as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "conversion", {
      send_to: site.adsContactConversion,
    });
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
    setService("");
  }

  return (
    <div className={cn("rounded-3xl bg-white p-6 text-foreground shadow-2xl sm:p-8", className)}>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">{t("title")}</h2>

      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="qf-name">{t("name")}</Label>
          <Input id="qf-name" name="name" maxLength={256} placeholder={t("namePlaceholder")} className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="qf-email">{t("email")}</Label>
          <Input id="qf-email" name="email" type="email" required maxLength={256} placeholder={t("emailPlaceholder")} className="h-11" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="qf-phone">{t("phone")}</Label>
            <Input id="qf-phone" name="phone" type="tel" maxLength={256} placeholder={t("phonePlaceholder")} className="h-11" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="qf-service">{t("service")}</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger id="qf-service">
                <SelectValue placeholder={t("service")} />
              </SelectTrigger>
              <SelectContent>
                {FORM_SERVICES.map((key) => (
                  <SelectItem key={key} value={key}>
                    {ts(`${key}.title`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="qf-location">{t("location")}</Label>
            <Input id="qf-location" name="location" maxLength={256} placeholder={t("locationPlaceholder")} className="h-11" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="qf-date">{t("date")}</Label>
            <Input id="qf-date" name="date" type="date" className="h-11" />
          </div>
        </div>

        <Button type="submit" size="lg" className="mt-2 w-full">
          {t("submit")}
        </Button>

        {sent && (
          <p role="status" className="flex items-center gap-2 text-sm text-emerald-600">
            <CheckCircle2 className="size-4" aria-hidden />
            {t("success")}
          </p>
        )}
      </form>
    </div>
  );
}
