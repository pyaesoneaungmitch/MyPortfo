import { Github } from "lucide-react";
import { siteContent } from "../data/siteContent";
import { Navbar } from "./Navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  const availableContactLinks = siteContent.contact.links.filter((link) => link.href);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div>
          <strong>{siteContent.personal.displayName}</strong>
          <span>Graduate Software Developer</span>
        </div>
        <div className="footer-meta">
          <span>{year}</span>
          {availableContactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href ?? undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.id === "github" ? <Github size={16} aria-hidden="true" /> : null}
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
