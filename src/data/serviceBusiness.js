// Client-editable content for the Service Business template.
// Clients edit values here only — never structure, layout, or styling.
export const serviceBusinessContent = {
  brand: "Northwind Studio",
  tagline: "Brand & web design for thoughtful businesses.",
  accent: { base: "#2f6f5e", soft: "#e8f1ee" },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Start a project", href: "#contact" },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],

  hero: {
    eyebrow: "Independent design studio",
    title: "Calm, considered design for businesses that care.",
    subtitle:
      "We help small teams launch brands and websites that feel premium, age well, and actually convert.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "See our work", href: "#gallery" },
  },

  about: {
    eyebrow: "About",
    title: "A small studio with a steady hand.",
    body: [
      "Northwind is a two-person design studio working with founders, makers, and service businesses. We treat every project as a long-term partnership.",
      "No bloated decks. No mystery process. Just careful work, clear communication, and websites that hold up over time.",
    ],
  },

  services: {
    eyebrow: "Services",
    title: "What we do",
    intro: "Focused offerings. Honest pricing. No upsells you don't need.",
    items: [
      {
        title: "Brand Identity",
        description: "Logo, typography, color, and a small system you can actually use.",
        price: "from $3,500",
      },
      {
        title: "Website Design",
        description: "Modern, fast, accessible sites built on a template system you own.",
        price: "from $4,800",
      },
      {
        title: "Care Plan",
        description: "Monthly maintenance, content updates, analytics, and SEO health.",
        price: "from $250/mo",
      },
    ],
  },

  gallery: {
    eyebrow: "Selected work",
    title: "Recent projects",
    images: [
      { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=70", alt: "Project one" },
      { src: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=70", alt: "Project two" },
      { src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=70", alt: "Project three" },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    title: "Tell us about your project.",
    intro: "We reply within one business day. Most projects start within 2–3 weeks.",
    email: "hello@northwind.studio",
    phone: "(555) 010-2200",
    location: "Portland, OR — working with clients everywhere.",
  },
};
