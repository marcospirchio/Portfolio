interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  titleClassName = "text-3xl md:text-5xl",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <div
        className={`flex items-center gap-2 text-sm font-medium text-accent mb-4 ${align === "center" ? "justify-center" : ""
          }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <h2 className={`font-display font-medium leading-tight tracking-tight text-fg ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
