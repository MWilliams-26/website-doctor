import ServiceBusiness from "./ServiceBusiness";
import PerformerPortfolio from "./PerformerPortfolio";

/**
 * Template registry — single source of truth.
 * Add a new template by adding one entry here.
 */
export const templates = [
  {
    slug: "service-business",
    name: "Service Business",
    description: "For studios, consultants, and service professionals who sell expertise.",
    audience: "Service-Based Businesses · Coaches · Studios",
    component: ServiceBusiness,
  },
  {
    slug: "performer-portfolio",
    name: "Performer Portfolio",
    description: "For musicians, performers, and creatives who book gigs and showcase work.",
    audience: "Performers · Creatives · Personal Brands",
    component: PerformerPortfolio,
  },
];

export const getTemplate = (slug) => templates.find((t) => t.slug === slug);
