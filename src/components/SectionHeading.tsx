interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-volt/90">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/[0.72] md:text-lg">{description}</p>
    </div>
  );
}
