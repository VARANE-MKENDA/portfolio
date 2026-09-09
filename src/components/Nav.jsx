import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-2xl flex items-center justify-between gap-4 rounded-full border border-border px-3 py-2 transition-colors duration-300 ${
          scrolled ? "bg-surface/95 backdrop-blur" : "bg-surface/70 backdrop-blur"
        }`}
      >
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body hover:text-heading px-4 py-2 rounded-full hover:bg-surface-hover transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-heading ml-auto"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden absolute top-16 inset-x-4 bg-surface border border-border rounded-2xl px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="text-base text-body hover:text-heading"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
