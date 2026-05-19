import { useState } from "react";
import Container from "./Container";

export default function Nav({ brand, links = [], cta }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-canvas)]/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-[var(--font-display)] text-lg font-semibold tracking-tight">
            {brand}
          </a>
          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            {cta && (
              <a
                href={cta.href}
                className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                {cta.label}
              </a>
            )}
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden rounded-full p-2 hover:bg-[var(--color-surface)]"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-1 border-t border-[var(--color-line)] pt-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-[var(--color-ink-soft)] hover:bg-[var(--color-surface)]"
                >
                  {l.label}
                </a>
              ))}
              {cta && (
                <a
                  href={cta.href}
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-center text-sm font-medium text-white"
                >
                  {cta.label}
                </a>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
