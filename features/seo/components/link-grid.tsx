import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type LinkItem = { href: string; title: string; text?: string };

/** Daxili link kartları — xidmətlər, ərazilər, sektorlar */
export function LinkGrid({ items, className }: { items: LinkItem[]; className?: string }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex h-full items-start justify-between gap-4 rounded-2xl border bg-white p-5 transition-colors hover:border-primary"
          >
            <span>
              <span className="block font-semibold tracking-tight transition-colors group-hover:text-primary">
                {item.title}
              </span>
              {item.text && <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{item.text}</span>}
            </span>
            <ArrowUpRight
              className="mt-0.5 size-5 shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-primary"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Kiçik link çipləri — yaxın ərazilər, şəhərlər */
export function LinkChips({ items, className }: { items: LinkItem[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Mətn çipləri (link olmayan) — massiv adları */
export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((name) => (
        <li key={name} className="rounded-full bg-secondary px-4 py-2 text-sm">
          {name}
        </li>
      ))}
    </ul>
  );
}

export function Section({
  title,
  children,
  muted = false,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("py-14 lg:py-20", muted && "bg-secondary", className)}>
      <div className="container-site">
        {title && <h2 className="mb-8 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
