import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** "Əlaqə →" tipli düymə — köhnə saytdakı button-primary-1-icon */
export function ArrowButton({
  href,
  children,
  className,
  external = true,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  /** Görünən mətn kontekst vermirsə (məs. "Əlaqə" → WhatsApp, yeni pəncərə) */
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex h-12 items-center gap-3 rounded-full bg-primary py-1.5 pr-1.5 pl-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
        className
      )}
    >
      {children}
      <span className="grid size-9 place-items-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </a>
  );
}
