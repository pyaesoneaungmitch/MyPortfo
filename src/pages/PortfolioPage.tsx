import { useCallback, useState } from "react";
import { siteContent, type Project } from "../data/siteContent";
import { PageTransition } from "../components/PageTransition";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetail } from "../components/ProjectDetail";
import { SectionHeading } from "../components/SectionHeading";
import { usePageMeta } from "../hooks/usePageMeta";

export function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setActiveProject(null), []);
  const featuredProject = siteContent.projects.find((project) => project.featured);
  const supportingProjects = siteContent.projects.filter((project) => !project.featured);

  usePageMeta({
    title: `Portfolio | ${siteContent.seo.siteName}`,
    description:
      "Selected full-stack, web and applied-AI projects by Pyae Sone Aung (Mitch), with verified technologies and clear project evidence."
  });

  return (
    <PageTransition className="page portfolio-page">
      <section className="page-intro" aria-labelledby="portfolio-title">
        <p className="eyebrow">Portfolio</p>
        <h1 id="portfolio-title">Projects built around practical workflows.</h1>
      </section>

      {featuredProject ? (
        <section className="portfolio-feature" aria-labelledby="featured-project-title">
          <SectionHeading eyebrow="Featured" title="Flagship project" />
          <ProjectCard project={featuredProject} onOpen={setActiveProject} />
        </section>
      ) : null}

      <section className="portfolio-grid-section" aria-labelledby="supporting-projects-title">
        <SectionHeading eyebrow="More work" title="Supporting projects" />
        <div className="project-grid">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </section>

      {activeProject ? <ProjectDetail project={activeProject} onClose={closeProject} /> : null}
    </PageTransition>
  );
}
