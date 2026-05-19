import Section from "../components/Section";

export default function About({ eyebrow, title, body, image }) {
  return (
    <Section id="about" tone="surface">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          )}
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {Array.isArray(body) ? (
            <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-[var(--color-ink-soft)]">{body}</p>
          )}
        </div>
        {image && (
          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas)]">
            <img src={image.src} alt={image.alt || ""} className="h-full w-full object-cover" loading="lazy" />
          </div>
        )}
      </div>
    </Section>
  );
}
