import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "Party Orders", href: "#party" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#hero">
          <img src={logo} alt="Heavenss Pastries" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur border-t border-border shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-foreground hover:text-primary hover:bg-accent text-sm font-semibold transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
