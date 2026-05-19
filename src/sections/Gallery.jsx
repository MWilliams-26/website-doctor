import Section from "../components/Section";

export default function Gallery({ eyebrow, title, images = [] }) {
  return (
    <Section id="gallery" tone="surface">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-canvas)]"
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
            {img.caption && (
              <figcaption className="px-4 py-3 text-xs text-[var(--color-muted)]">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}
