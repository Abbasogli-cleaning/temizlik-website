import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Analytics } from "@/shared/components/analytics";
import { JsonLd } from "@/shared/components/json-ld";
import { WhatsAppFloat } from "@/shared/components/whatsapp-float";
import { localBusinessJsonLd } from "@/shared/lib/seo";
import { site } from "@/shared/config/site";
import { Footer } from "@/shared/layout/footer";
import { Navbar } from "@/shared/layout/navbar";
import "../globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("common.metadata");
  return {
    metadataBase: new URL(site.url),
    title: { default: t("title"), template: `%s — ${site.name}` },
    description: t("description"),
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("description"),
      images: [site.ogImage],
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description"), images: [site.ogImage] },
  };
}

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await rootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${notoSans.variable} antialiased`}>
      <body className="flex min-h-svh flex-col font-sans">
        <NextIntlClientProvider messages={{ common: messages.common }}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
        <JsonLd data={localBusinessJsonLd(locale)} />
        <Analytics />
      </body>
    </html>
  );
}
