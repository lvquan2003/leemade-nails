type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
};

export function ImagePlaceholder({
  src,
  alt,
  label = "YOUR IMAGE",
  className = "",
  priority = false,
}: Props) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-zen-soft via-zen-lavender to-zen-peach ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/70 bg-white/55 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zen-accent-dark backdrop-blur">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
