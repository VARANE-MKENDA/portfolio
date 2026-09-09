import { profile } from "../data/content";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-heading font-semibold">{profile.name}</p>
        <p className="text-muted text-xs mt-1">{profile.title}</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mt-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-body hover:text-heading transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-muted text-xs mt-6">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
