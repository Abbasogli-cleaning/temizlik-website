import Script from "next/script";

import { site } from "@/shared/config/site";

export function Analytics() {
  const [first, ...rest] = site.gtagIds;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${first}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${[first, ...rest]
          .map((id) => `gtag('config','${id}');`)
          .join("")}`}
      </Script>
    </>
  );
}
