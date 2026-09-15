import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { siteContent } from "./data/siteContent";
import { AppShell } from "./components/AppShell";
import { PageTransition } from "./components/PageTransition";
import { usePageMeta } from "./hooks/usePageMeta";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CvPage } from "./pages/CvPage";
import { FunPage } from "./pages/FunPage";
import { PortfolioPage } from "./pages/PortfolioPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  usePageMeta({
    title: `Page not found | ${siteContent.seo.siteName}`,
    description: "A portfolio route could not be found."
  });

  return (
    <PageTransition className="page page-narrow">
      <section className="not-found" aria-labelledby="not-found-title">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">This page is not in the portfolio.</h1>
        <p>
          The main portfolio sections are available from the navigation, and About is the homepage.
        </p>
        <Link className="button button-primary" to="/">
          Back to About
        </Link>
      </section>
    </PageTransition>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AppShell>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fun" element={<FunPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  );
}
