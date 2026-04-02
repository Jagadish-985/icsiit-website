
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-headline font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-24 bg-primary rounded-full",
        centered ? "mx-auto" : "mr-auto"
      )} />
    </div>
  );
}
