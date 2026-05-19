import { Link } from "react-router-dom";
import Container from "../components/Container";
import { templates } from "../templates/registry";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--color-line)]">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="font-[var(--font-display)] text-lg font-semibold">Website Doctor</div>
            <a href="#templates" className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
              Templates
            </a>
          </div>
        </Container>
      </header>

      <section className="py-24 sm:py-32">
        <Container>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Premium websites · simple to maintain
          </p>
          <h1 className="max-w-3xl font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Modern, template-driven websites for small businesses and creatives.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            A small library of polished templates built on one shared design system. Fast to launch.
            Safe to maintain. Designed to grow with you.
          </p>
        </Container>
      </section>

      <section id="templates" className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-20">
        <Container>
          <h2 className="font-[var(--font-display)] text-2xl font-semibold sm:text-3xl">Templates</h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">Preview a live template below.</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {templates.map((t) => (
              <Link
                key={t.slug}
                to={`/t/${t.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas)] p-6 transition-colors hover:border-[var(--color-ink)]"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">{t.audience}</p>
                <h3 className="mt-2 font-[var(--font-display)] text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{t.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:gap-2 transition-all">
                  View live preview →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <footer className="border-t border-[var(--color-line)] py-10">
        <Container>
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} Website Doctor.
          </p>
        </Container>
      </footer>
    </div>
  );
}
