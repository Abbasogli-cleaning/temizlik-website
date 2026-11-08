import { posts } from "@/features/blog/posts";
import { paths } from "@/features/seo/links";
import { locations, sectors, services } from "@/features/seo/pages";
import { site } from "@/shared/config/site";

/** /llms.txt — AI modelləri üçün saytın qısa Markdown xəritəsi (data-dan generasiya) */
export function GET() {
  const u = (path: string) => `${site.url}/az${path}`;
  const lines = [
    `# ${site.name}`,
    "",
    "> Bakı, Sumqayıt və Xırdalanda peşəkar təmizlik şirkəti (2012-ci ildən). Ofis, mənzil, fasad və şüşə, təmir sonrası, dezinfeksiya, yanğından sonra, restoran təmizliyi.",
    "",
    `- Telefon: ${site.phone}`,
    `- Ünvan: ${site.address}`,
    `- WhatsApp: ${site.whatsapp}`,
    "- Dillər: az (əsas), ru, en — URL prefiksi /az, /ru, /en",
    "",
    "## Xidmətlər",
    ...services.map((s) => `- [${s.name.az}](${u(paths.service(s.slug))}): ${s.short.az}`),
    "",
    "## Sektorlar",
    ...sectors.map((s) => `- [${s.name.az}](${u(paths.sector(s.slug))}): ${s.short.az}`),
    "",
    "## Xidmət əraziləri",
    ...locations.map((l) => `- [${l.name.az}](${u(paths.location(l.slug))}): ${l.summary.az}`),
    "",
    "## URL nümunələri",
    `- Xidmət × ərazi: ${u("/erazi-xidmet/{xidmet}-{erazi}")} (məs. ${u(paths.combo("ofis-temizliyi", "yasamal"))})`,
    `- Sektor × şəhər: ${u("/sektor/{sektor}-{seher}")} (məs. ${u(paths.sectorCity("otel-temizliyi", "baki"))})`,
    "",
    "## Bloq",
    ...posts.map((p) => `- [${p.title.az}](${u(paths.post(p.slug))}): ${p.excerpt.az}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
