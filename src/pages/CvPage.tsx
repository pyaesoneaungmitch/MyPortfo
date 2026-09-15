import { siteContent } from "../data/siteContent";
import { CvViewer } from "../components/CvViewer";
import { PageTransition } from "../components/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

export function CvPage() {
  usePageMeta({
    title: `CV | ${siteContent.seo.siteName}`,
    description:
      "Current CV for Pyae Sone Aung (Mitch), covering software development, applied AI and internship experience."
  });

  return (
    <PageTransition className="page cv-page">
      <section className="page-intro" aria-labelledby="cv-title">
        <p className="eyebrow">CV</p>
        <h1 id="cv-title">Current CV for software development roles.</h1>
        <p>
          View the latest resume inline or download the PDF for applications, interviews and quick
          recruiter review.
        </p>
      </section>
      <CvViewer pdfPath={siteContent.cv.pdfPath} downloadFilename={siteContent.cv.downloadFilename} />
    </PageTransition>
  );
}
