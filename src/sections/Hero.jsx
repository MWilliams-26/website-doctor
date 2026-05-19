import { motion } from "framer-motion";
import Section from "../components/Section";
import Button from "../components/Button";

export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta }) {
  return (
    <Section id="top" tone="canvas" spacing="loose">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg text-[var(--color-ink-soft)] sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {primaryCta && (
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
