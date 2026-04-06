
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  fullWidthLine?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false, className, fullWidthLine = false }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      centered ? "text-center" : "text-left",
      className
    )}>
      <div className={cn(fullWidthLine ? "inline-block" : "block")}>
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          {title}
        </h2>
        <div className={cn(
          "h-1.5 bg-primary rounded-full mt-2",
          fullWidthLine ? "w-full" : "w-24",
          centered ? "mx-auto" : "mr-auto"
        )} />
      </div>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground text-lg",
          centered ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
