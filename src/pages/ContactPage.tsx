import { siteContent } from "../data/siteContent";
import { PageTransition } from "../components/PageTransition";
import { SectionHeading } from "../components/SectionHeading";
import { SocialLink } from "../components/SocialLink";
import { usePageMeta } from "../hooks/usePageMeta";

export function ContactPage() {
  const availableLinks = siteContent.contact.links.filter((link) => link.href);

  usePageMeta({
    title: `Contact | ${siteContent.seo.siteName}`,
    description:
      "Professional contact links for Pyae Sone Aung (Mitch), graduate software developer."
  });

  return (
    <PageTransition className="page contact-page">
      <section className="page-intro contact-intro" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-title">Let's talk about graduate software roles and practical projects.</h1>
        <p>{siteContent.contact.invitation}</p>
      </section>

      <section className="content-band contact-band" aria-labelledby="contact-links-title">
        <SectionHeading eyebrow="Links" title="Professional contact methods" />
        {availableLinks.length > 0 ? (
          <div className="social-grid">
            {availableLinks.map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </div>
        ) : (
          <p className="placeholder-copy">
            Contact links will appear here once real destinations are configured.
          </p>
        )}
      </section>
    </PageTransition>
  );
}
