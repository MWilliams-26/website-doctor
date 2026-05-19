import Container from "./Container";

export default function Footer({ brand, tagline, links = [], socials = [] }) {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-canvas)] py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-[var(--font-display)] text-lg font-semibold">{brand}</div>
            {tagline && (
              <p className="mt-1 text-sm text-[var(--color-muted)]">{tagline}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-line)] pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a key={s.href} href={s.href} className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
