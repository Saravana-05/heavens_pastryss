import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CakeIcon from "@mui/icons-material/Cake";
import DownloadIcon from "@mui/icons-material/Download";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import logo from "@/assets/logo.png";
import cakeMenuPdf from "@/assets/cake-menu.pdf";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Our Creations", href: "#menu" },
  { label: "Celebrations", href: "#party" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when PDF modal is open
  useEffect(() => {
    document.body.style.overflow = pdfOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [pdfOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur shadow-md" : "bg-transparent"
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
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-secondary"
                }`}
              >
                {l.label}
              </a>
            ))}

            {/* ✅ Choose Your Cake CTA Button */}
            <button
              onClick={() => setPdfOpen(true)}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 hover:bg-primary/90 transition-all duration-200 animate-pulse-slow"
            >
              <CakeIcon sx={{ fontSize: 17 }} />
              Choose Your Cakes
            </button>
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

            {/* ✅ Mobile — Choose Your Cake */}
            <button
              onClick={() => { setPdfOpen(true); setOpen(false); }}
              className="w-full flex items-center gap-2 px-6 py-3 text-primary font-bold text-sm hover:bg-accent transition border-t border-border"
            >
              <CakeIcon sx={{ fontSize: 18 }} />
              Choose Your Cakes 🎂
            </button>
          </div>
        )}
      </nav>

      {/* ✅ PDF Viewer Modal */}
      {pdfOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/80 backdrop-blur-sm">

          {/* Modal Header */}
          <div className="flex items-center justify-between bg-card px-4 md:px-6 py-3 border-b border-border shrink-0">
            <div className="flex items-center gap-2">
              <CakeIcon className="text-primary" sx={{ fontSize: 22 }} />
              <span className="font-bold text-foreground text-base md:text-lg">
                Heavenss Pastrys — Cake Menu
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* Download Button */}
              <a
                href={cakeMenuPdf}
                download="Heavenss_Cake_Menu.pdf"
                className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                <DownloadIcon sx={{ fontSize: 17 }} />
                Download
              </a>
              {/* Close Button */}
              <button
                onClick={() => setPdfOpen(false)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition"
                aria-label="Close"
              >
                <CloseRoundedIcon sx={{ fontSize: 22 }} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src={`${cakeMenuPdf}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full"
              title="Heavenss Cake Menu"
            />
          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;