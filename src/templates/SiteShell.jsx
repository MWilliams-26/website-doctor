import Nav from "../components/Nav";
import Footer from "../components/Footer";

/**
 * SiteShell — wraps any template with consistent nav/footer and an
 * accent color that propagates via CSS custom properties. Templates pass
 * their content config; the shell handles layout chrome.
 */
export default function SiteShell({ site, children }) {
  const accentStyle = site.accent
    ? {
        "--color-accent": site.accent.base,
        "--color-accent-soft": site.accent.soft,
      }
    : undefined;

  return (
    <div style={accentStyle} className="min-h-screen flex flex-col">
      <Nav brand={site.brand} links={site.nav} cta={site.cta} />
      <main className="flex-1">{children}</main>
      <Footer
        brand={site.brand}
        tagline={site.tagline}
        links={site.footerLinks || site.nav}
        socials={site.socials}
      />
    </div>
  );
}
