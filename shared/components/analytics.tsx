import Script from "next/script";

import { site } from "@/shared/config/site";

/**
 * gtag + Google Ads "Контакт" konversiyası.
 * Təşəkkür səhifəsi yoxdur, ona görə konversiya hər WhatsApp / tel: / mailto: linkinə klikdə göndərilir
 * (sayt üzrə bir delegated listener — server komponentlərinə JS əlavə etmədən).
 * Təklif formu window.open istifadə etdiyi üçün öz onSubmit-ində ayrıca göndərir.
 */
export function Analytics() {
  const [first, ...rest] = site.gtagIds;
  const config = [first, ...rest].map((id) => `gtag('config','${id}');`).join("");
  const conversion = `document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'';if(/^(tel:|mailto:)|\\/\\/(wa\\.me|wa\\.link|api\\.whatsapp\\.com)\\//i.test(h)){gtag('event','conversion',{send_to:'${site.adsContactConversion}'});}},true);`;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${first}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${config}${conversion}`}
      </Script>
    </>
  );
}
