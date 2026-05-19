import Section from "../components/Section";
import Button from "../components/Button";

export default function Contact({ eyebrow, title, intro, email, phone, location }) {
  return (
    <Section id="contact" tone="ink">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          )}
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-white/70">{intro}</p>}
          {email && (
            <Button href={`mailto:${email}`} className="mt-8" size="lg">
              {email}
            </Button>
          )}
        </div>
        <dl className="grid grid-cols-1 gap-6 self-end text-sm text-white/80 sm:grid-cols-2">
          {phone && (
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-white/50">Phone</dt>
              <dd className="mt-1"><a href={`tel:${phone}`} className="hover:text-white">{phone}</a></dd>
            </div>
          )}
          {email && (
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-white/50">Email</dt>
              <dd className="mt-1"><a href={`mailto:${email}`} className="hover:text-white">{email}</a></dd>
            </div>
          )}
          {location && (
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.15em] text-white/50">Location</dt>
              <dd className="mt-1">{location}</dd>
            </div>
          )}
        </dl>
      </div>
    </Section>
  );
}
