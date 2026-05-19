import SiteShell from "./SiteShell";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { serviceBusinessContent as c } from "../data/serviceBusiness";

/**
 * Template: Service Business
 * Composes shared sections in a fixed order. Clients edit data only.
 */
export default function ServiceBusiness() {
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
