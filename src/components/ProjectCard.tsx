import { ExternalLink, Github, Images, Play, Sparkles } from "lucide-react";
import type { Project } from "../data/siteContent";
import { withBasePath } from "../utils/paths";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasVideo = Boolean(project.media.video);
  const hasScreenshots = project.media.screenshots.length > 0;
  const posterSrc = withBasePath(project.media.poster);

  return (
    <article className={`project-card${project.featured ? " project-card-featured" : ""}`}>
      <button
        className="project-cover project-cover-button"
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.shortTitle} project details`}
      >
        {posterSrc ? (
          <img
            src={posterSrc}
            alt={project.media.posterAlt}
            loading={project.featured ? "eager" : "lazy"}
          />
        ) : (
          <div className="project-cover-fallback" aria-hidden="true">
            <Sparkles size={project.featured ? 34 : 28} />
            <span>{project.shortTitle}</span>
          </div>
        )}
        <span className="project-cover-overlay" aria-hidden="true">
          View details
        </span>
      </button>

      <div className="project-card-body">
        <div>
          <p className="eyebrow">{project.featured ? "Flagship project" : project.status}</p>
          <h2>{project.title}</h2>
          <p>{project.purpose}</p>
        </div>

        <ul className="tag-list" aria-label={`${project.shortTitle} technologies`}>
          {project.technologies.length > 0 ? (
            project.technologies.map((technology) => <li key={technology}>{technology}</li>)
          ) : (
            <li>Stack to be confirmed</li>
          )}
        </ul>

        {hasVideo || hasScreenshots ? (
          <div className="project-evidence" aria-label={`${project.shortTitle} available media`}>
            {hasVideo ? (
              <span data-active="true">
                <Play size={15} aria-hidden="true" />
                Video
              </span>
            ) : null}
            {hasScreenshots ? (
              <span data-active="true">
                <Images size={15} aria-hidden="true" />
                {project.media.screenshots.length} image{project.media.screenshots.length === 1 ? "" : "s"}
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="project-card-actions">
          <button className="button button-primary" type="button" onClick={() => onOpen(project)}>
            View details
          </button>
          {project.githubUrl ? (
            <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" />
              Repository
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
