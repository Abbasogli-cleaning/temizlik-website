import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqJsonLd } from "@/shared/lib/seo";
import { JsonLd } from "./json-ld";

/** Görünən FAQ + FAQPage JSON-LD (yalnız görünən suallar schema-ya düşür) */
export function FaqList({ items, className }: { items: { q: string; a: string }[]; className?: string }) {
  return (
    <>
      <Accordion type="single" collapsible defaultValue="0" className={cn("rounded-3xl bg-white px-6", className)}>
        {items.map((item, i) => (
          <AccordionItem key={i} value={String(i)}>
            <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">{item.q}</AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <JsonLd data={faqJsonLd(items)} />
    </>
  );
}
