import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  lineClassName?: string;
}

export default function SectionHeading({ title, subtitle, centered = false, className, lineClassName }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      centered ? "text-center" : "text-left",
      className
    )}>
      <div className="inline-block relative">
        <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">
          {title}
        </h2>
        <div className={cn(
          "h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 w-full",
          centered ? "mx-auto" : "mr-auto",
          lineClassName
        )} />
      </div>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground text-lg md:text-xl",
          centered ? "max-w-3xl mx-auto" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
