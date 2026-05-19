const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-[var(--color-accent)] text-white hover:opacity-90",
  secondary:
    "bg-[var(--color-ink)] text-white hover:opacity-90",
  outline:
    "border border-[var(--color-line)] text-[var(--color-ink)] bg-transparent hover:bg-[var(--color-surface)]",
  ghost:
    "text-[var(--color-ink)] hover:bg-[var(--color-surface)]",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

export default function Button({
  as: Tag = "a",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
