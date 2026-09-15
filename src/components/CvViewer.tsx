import { Download, FileText } from "lucide-react";
import { withBasePath } from "../utils/paths";

type CvViewerProps = {
  pdfPath: string | null;
  downloadFilename: string;
};

export function CvViewer({ pdfPath, downloadFilename }: CvViewerProps) {
  const resolvedPdfPath = withBasePath(pdfPath);

  if (!resolvedPdfPath) {
    return (
      <section className="cv-empty" aria-labelledby="cv-empty-title">
        <FileText size={34} aria-hidden="true" />
        <div>
          <p className="eyebrow">CV</p>
          <h2 id="cv-empty-title">CV being added</h2>
          <p>
            A real PDF has not been configured yet. Add the file path in the central content file and
            this page will switch to an inline viewer with a native download link.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="cv-viewer" aria-labelledby="cv-viewer-title">
      <div className="cv-toolbar">
        <div>
          <p className="eyebrow">CV</p>
          <h2 id="cv-viewer-title">Pyae Sone Aung CV</h2>
        </div>
        <a className="button button-primary" href={resolvedPdfPath} download={downloadFilename}>
          <Download size={17} aria-hidden="true" />
          Download CV
        </a>
      </div>
      <object className="cv-object" data={resolvedPdfPath} type="application/pdf" aria-label="Embedded CV PDF">
        <p>
          This browser cannot display the PDF inline.{" "}
          <a href={resolvedPdfPath} download={downloadFilename}>
            Download the CV instead.
          </a>
        </p>
      </object>
    </section>
  );
}
