import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../data/siteContent";
import { withBasePath } from "../utils/paths";

type ProjectDetailProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const activeScreenshot = project.media.screenshots[activeScreenshotIndex] ?? project.media.screenshots[0] ?? null;
  const hasMedia = Boolean(project.media.video || activeScreenshot);
  const posterSrc = withBasePath(project.media.poster);
  const videoSrc = withBasePath(project.media.video?.src);
  const captionsSrc = withBasePath(project.media.video?.captionsSrc);
  const activeScreenshotSrc = withBasePath(activeScreenshot?.src);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose]);

  useEffect(() => {
    setActiveScreenshotIndex(0);
  }, [project.id]);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <section
        aria-labelledby={`${project.id}-detail-title`}
        aria-modal="true"
        className="project-detail"
        role="dialog"
      >
        <button
          aria-label="Close project details"
          className="icon-button modal-close"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <X size={20} />
        </button>

        <div className="project-detail-header">
          <p className="eyebrow">{project.featured ? "Flagship project" : "Project detail"}</p>
          <h2 id={`${project.id}-detail-title`}>{project.title}</h2>
          <p>{project.problemSolution}</p>
        </div>

        <div className="project-detail-grid">
          <div className="project-detail-copy">
            <section aria-labelledby={`${project.id}-role-title`}>
              <h3 id={`${project.id}-role-title`}>Role</h3>
              <p>{project.role}</p>
            </section>

            <section aria-labelledby={`${project.id}-highlights-title`}>
              <h3 id={`${project.id}-highlights-title`}>Evidence-based highlights</h3>
              <ul className="check-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby={`${project.id}-status-title`}>
              <h3 id={`${project.id}-status-title`}>Current status</h3>
              <p>{project.status}</p>
            </section>

            {project.futureImprovements ? (
              <section aria-labelledby={`${project.id}-future-title`}>
                <h3 id={`${project.id}-future-title`}>Future improvements</h3>
                <p>{project.futureImprovements}</p>
              </section>
            ) : null}

            <ul className="tag-list" aria-label={`${project.shortTitle} technology tags`}>
              {project.technologies.length > 0 ? (
                project.technologies.map((technology) => <li key={technology}>{technology}</li>)
              ) : (
                <li>Stack to be confirmed</li>
              )}
            </ul>

            <div className="project-detail-actions">
              {project.githubUrl ? (
                <a className="button button-primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={17} aria-hidden="true" />
                  View repository
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
              {project.demoUrl ? (
                <a className="button button-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live demo
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          {hasMedia ? (
            <div className="project-media-stack">
              {project.media.video ? (
                <figure className="media-panel media-video-panel">
                  <video
                    controls
                    poster={posterSrc ?? undefined}
                    preload="metadata"
                    aria-label={`${project.shortTitle} demo video`}
                  >
                    {videoSrc ? <source src={videoSrc} type={project.media.video.type} /> : null}
                    {captionsSrc ? (
                      <track
                        kind="captions"
                        src={captionsSrc}
                        srcLang="en"
                        label="English captions"
                      />
                    ) : null}
                    Your browser does not support embedded video.
                  </video>
                  <figcaption>{project.shortTitle} walkthrough video</figcaption>
                </figure>
              ) : null}

              {activeScreenshot && activeScreenshotSrc ? (
                <section className="media-panel media-gallery" aria-labelledby={`${project.id}-gallery-title`}>
                  <div className="media-panel-heading">
                    <h3 id={`${project.id}-gallery-title`}>Project snapshots</h3>
                    <span>
                      {activeScreenshotIndex + 1}/{project.media.screenshots.length}
                    </span>
                  </div>
                  <img
                    className="media-showcase-image"
                    src={activeScreenshotSrc}
                    alt={activeScreenshot.alt}
                    loading="lazy"
                  />
                  {project.media.screenshots.length > 1 ? (
                    <div className="screenshot-strip" aria-label={`${project.shortTitle} screenshot choices`}>
                      {project.media.screenshots.map((screenshot, index) => (
                        <button
                          aria-label={`Show ${screenshot.alt}`}
                          className="screenshot-thumb"
                          data-active={index === activeScreenshotIndex}
                          key={screenshot.src}
                          onClick={() => setActiveScreenshotIndex(index)}
                          type="button"
                        >
                          <img src={withBasePath(screenshot.src) ?? undefined} alt="" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </section>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
