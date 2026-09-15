import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CvViewer } from "../components/CvViewer";
import { ProjectDetail } from "../components/ProjectDetail";
import { siteContent } from "../data/siteContent";

describe("missing optional media", () => {
  it("omits empty project media panels while keeping the CV fallback", () => {
    const projectWithoutMedia = {
      ...siteContent.projects[0],
      media: {
        ...siteContent.projects[0].media,
        poster: null,
        video: null,
        screenshots: []
      }
    };

    render(
      <>
        <ProjectDetail project={projectWithoutMedia} onClose={vi.fn()} />
        <CvViewer pdfPath={null} downloadFilename="Mitch-CV.pdf" />
      </>
    );

    expect(screen.queryByText(/demo video/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/project snapshots/i)).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /cv being added/i })).toBeInTheDocument();
  });
});
