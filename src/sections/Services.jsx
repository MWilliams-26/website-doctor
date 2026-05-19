import Section from "../components/Section";

export default function Services({ eyebrow, title, intro, items = [] }) {
  return (
    <Section id="services" tone="canvas">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-[var(--color-ink-soft)]">{intro}</p>}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <article
            key={i}
            className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-ink)]"
          >
            {s.icon && <div className="mb-4 text-2xl">{s.icon}</div>}
            <h3 className="font-[var(--font-display)] text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{s.description}</p>
            {s.price && (
              <p className="mt-4 text-sm font-medium text-[var(--color-ink)]">{s.price}</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
