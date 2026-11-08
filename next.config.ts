import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  // Köhnə Webflow URL-ləri → yeni səhifələr (308, SEO dəyəri ötürülür)
  async redirects() {
    return [
      { source: "/index.html", destination: "/az", permanent: true },
      { source: "/services.html", destination: "/az/services", permanent: true },
      { source: "/about.html", destination: "/az/about", permanent: true },
      { source: "/blogs.html", destination: "/az/blog", permanent: true },
      { source: "/blogs", destination: "/az/blog", permanent: true },
      { source: "/blog/:slug.html", destination: "/az/blog", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
