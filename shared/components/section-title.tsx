import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  className,
  center = false,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
        center && "mx-auto text-center",
        className
      )}
    >
      {children}
    </Tag>
  );
}
