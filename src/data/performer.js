// Client-editable content for the Performer Portfolio template.
export const performerContent = {
  brand: "Sasha Reyes",
  tagline: "Jazz vocalist · Composer · Performer",
  accent: { base: "#8b5cf6", soft: "#f1ecfe" },
  nav: [
    { label: "About", href: "#about" },
    { label: "Shows", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Booking", href: "#contact" },
  ],
  cta: { label: "Book a show", href: "#contact" },
  socials: [
    { label: "Spotify", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],

  hero: {
    eyebrow: "Now booking — Winter 2026",
    title: "Live jazz with warmth, range, and a story.",
    subtitle:
      "Sasha performs solo, duo, and full-band sets for venues, weddings, and private events across the West Coast.",
    primaryCta: { label: "Check availability", href: "#contact" },
    secondaryCta: { label: "Listen", href: "#gallery" },
  },

  about: {
    eyebrow: "About",
    title: "A voice that fills the room — and the moment.",
    body: [
      "Sasha has performed at over 200 venues, from intimate listening rooms to festival stages. Equally at home in jazz standards and original work.",
      "Each set is shaped to the room and the night. Clients return because it feels easy, professional, and unforgettable.",
    ],
  },

  services: {
    eyebrow: "Performances",
    title: "Available formats",
    intro: "Pricing depends on travel, duration, and ensemble size. All formats include a tailored setlist.",
    items: [
      { title: "Solo Set", description: "Voice + guitar. Perfect for intimate venues and cocktail hours.", price: "from $600" },
      { title: "Duo", description: "Voice + upright bass or piano. Polished and warm.", price: "from $1,200" },
      { title: "Full Band", description: "Quartet for weddings, festivals, and listening rooms.", price: "from $2,800" },
    ],
  },

  gallery: {
    eyebrow: "Gallery",
    title: "On stage",
    images: [
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=70", alt: "Live performance" },
      { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=70", alt: "Studio" },
      { src: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=70", alt: "Venue" },
    ],
  },

  contact: {
    eyebrow: "Booking",
    title: "Let's plan your night.",
    intro: "Send dates, venue, and a little about the event. Replies within 24 hours.",
    email: "booking@sashareyes.com",
    phone: "(555) 010-4411",
    location: "Based in Los Angeles — touring nationally.",
  },
};
