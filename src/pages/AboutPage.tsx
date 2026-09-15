import { ArrowRight, Download, Lightbulb, Rocket, UsersRound, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent, type FunFact } from "../data/siteContent";
import { InteractivePortrait } from "../components/InteractivePortrait";
import { PageTransition } from "../components/PageTransition";
import { SectionHeading } from "../components/SectionHeading";
import { usePageMeta } from "../hooks/usePageMeta";
import { withBasePath } from "../utils/paths";

function ProfilePhoto({ src }: { src: string | null }) {
  return (
    <figure className={`profile-photo-card${src ? " has-profile-photo" : ""}`} aria-label="Profile photo">
      {src ? (
        <img src={src} alt="Pyae Sone Aung portrait" />
      ) : (
        <div className="profile-photo-fallback" aria-hidden="true">
          <span>PSA</span>
        </div>
      )}
    </figure>
  );
}

const factIcons: Record<FunFact["icon"], LucideIcon> = {
  lightbulb: Lightbulb,
  rocket: Rocket,
  users: UsersRound
};

export function AboutPage() {
  const cvPath = withBasePath(siteContent.cv.pdfPath);
  const profilePhotoSrc = withBasePath(siteContent.personal.profilePhoto);

  usePageMeta({
    title: `About | ${siteContent.seo.siteName}`,
    description: siteContent.seo.defaultDescription
  });

  return (
    <PageTransition className="page about-page">
      <section className="signature-section" aria-labelledby="about-title">
        <div className="intro-copy">
          <div className="intro-header">
            <div>
              <p className="eyebrow">Graduate portfolio</p>
              <h1 id="about-title">{siteContent.personal.displayName}</h1>
              <p className="professional-label">{siteContent.personal.professionalLabel}</p>
            </div>
            <ProfilePhoto src={profilePhotoSrc} />
          </div>
          <p>{siteContent.personal.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/portfolio">
              View Portfolio
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            {cvPath ? (
              <a
                className="button button-secondary"
                href={cvPath}
                download={siteContent.cv.downloadFilename}
              >
                <Download size={17} aria-hidden="true" />
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <InteractivePortrait />
      </section>

      <section className="content-band" aria-labelledby="summary-title">
        <SectionHeading eyebrow="Profile" title="Professional Summary">
          {siteContent.personal.professionalSummary}
        </SectionHeading>
      </section>

      <section className="content-band" aria-labelledby="facts-title">
        <SectionHeading eyebrow="A little more human" title="Fun Facts About Me" />
        <div className="fact-grid">
          {siteContent.funFacts.map((fact) => {
            const Icon = factIcons[fact.icon];

            return (
              <article className="fact-card" key={fact.title}>
                <span className="fact-icon" aria-hidden="true">
                  <Icon size={19} />
                </span>
                <p className="eyebrow">{fact.theme}</p>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-band" aria-labelledby="current-title">
        <SectionHeading eyebrow="Currently" title="What I'm Doing Now" />
        <div className="current-list">
          {siteContent.currentFocus.map((item, index) => (
            <article className="current-item" key={item.title}>
              <span className="current-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.status}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
