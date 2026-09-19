type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, description, center = false }: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-zen-accent-dark">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-zen-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
