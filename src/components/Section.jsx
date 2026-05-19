import Container from "./Container";

/**
 * A vertical section block — the unit templates compose with.
 * Standardizes spacing, surface color, and width so templates feel cohesive.
 */
export default function Section({
  id,
  children,
  className = "",
  size = "default",
  tone = "canvas", // canvas | surface | ink | accent
  spacing = "default", // tight | default | loose
}) {
  const tones = {
    canvas: "bg-[var(--color-canvas)] text-[var(--color-ink)]",
    surface: "bg-[var(--color-surface)] text-[var(--color-ink)]",
    ink: "bg-[var(--color-ink)] text-white",
    accent: "bg-[var(--color-accent-soft)] text-[var(--color-ink)]",
  };
  const spacings = {
    tight: "py-12 sm:py-16",
    default: "py-20 sm:py-28",
    loose: "py-28 sm:py-36",
  };
  return (
    <section id={id} className={`${tones[tone]} ${spacings[spacing]} ${className}`}>
      <Container size={size}>{children}</Container>
    </section>
  );
}
