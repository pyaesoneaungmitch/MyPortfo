import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteContent, type NavItem } from "../data/siteContent";
import { ThemeToggle } from "./ThemeToggle";

function isNavItemActive(item: NavItem, pathname: string) {
  if (item.activePaths) {
    return item.activePaths.includes(pathname);
  }

  return pathname === item.path;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand-mark" to="/" aria-label="Pyae Sone Aung portfolio home">
          {siteContent.personal.preferredName}
        </Link>

        <div className="desktop-nav">
          {siteContent.navigation.map((item) => {
            const active = isNavItemActive(item, location.pathname);

            return (
              <Link
                className="nav-link"
                data-active={active}
                aria-current={active ? "page" : undefined}
                key={item.path}
                to={item.path}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="mobile-menu-button"
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className="mobile-nav-shell" data-open={isOpen}>
        <div className="mobile-nav-panel" id="mobile-navigation">
          {siteContent.navigation.map((item, index) => {
            const active = isNavItemActive(item, location.pathname);

            return (
              <Link
                ref={index === 0 ? firstMobileLinkRef : undefined}
                className="mobile-nav-link"
                data-active={active}
                aria-current={active ? "page" : undefined}
                key={item.path}
                to={item.path}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
