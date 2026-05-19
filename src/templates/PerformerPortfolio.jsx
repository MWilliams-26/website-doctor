import SiteShell from "./SiteShell";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { performerContent as c } from "../data/performer";

/**
 * Template: Performer Portfolio
 * Same components, different content + accent. Demonstrates the system.
 */
export default function PerformerPortfolio() {
  return (
    <SiteShell site={c}>
      <Hero {...c.hero} />
      <About {...c.about} />
      <Services {...c.services} />
      <Gallery {...c.gallery} />
      <Contact {...c.contact} />
    </SiteShell>
  );
}
