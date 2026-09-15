import { ExternalLink, Github, Linkedin, Mail, Phone, Plus } from "lucide-react";
import type { ContactLink } from "../data/siteContent";

function ContactIcon({ id }: { id: ContactLink["id"] }) {
  if (id === "github") {
    return <Github size={20} aria-hidden="true" />;
  }

  if (id === "linkedin") {
    return <Linkedin size={20} aria-hidden="true" />;
  }

  if (id === "email") {
    return <Mail size={20} aria-hidden="true" />;
  }

  if (id === "phone") {
    return <Phone size={20} aria-hidden="true" />;
  }

  return <Plus size={20} aria-hidden="true" />;
}

export function SocialLink({ link }: { link: ContactLink }) {
  if (!link.href) {
    return null;
  }

  return (
    <a
      className="social-link"
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
    >
      <ContactIcon id={link.id} />
      <span>
        <strong>{link.label}</strong>
        <span>{link.displayValue}</span>
      </span>
      {link.external ? <ExternalLink size={16} aria-hidden="true" /> : null}
    </a>
  );
}
