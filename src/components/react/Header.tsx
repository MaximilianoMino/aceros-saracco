import { useState, useEffect } from "react";
import * as Lucide from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Materiales", href: "#materiales" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"}`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.webp"
              alt="Aceros Saracco"
              className="h-10 md:h-20 w-auto"
            />
          </div>

          {/* Desktop Nav - Minimalista y cuadrado */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary font-bold text-xs uppercase tracking-wider px-4 py-2 border border-transparent hover:border-accent hover:text-accent transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - Cuadrado */}
          <a
            href="#contacto"
            className="hidden lg:block bg-accent text-white font-bold text-xs uppercase tracking-wider px-6 py-3 hover:bg-orange-600 transition-colors"
          >
            Cotizar
          </a>

          {/* Mobile Menu Button - Cuadrado */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 border-2 border-primary text-primary hover:border-accent hover:text-accent transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? (
              <Lucide.X className="w-5 h-5" />
            ) : (
              <Lucide.Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Fixed fullscreen */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-primary z-40"
          onClick={handleNavClick}
        >
          <nav
            className="flex flex-col items-center justify-center h-full gap-0 p-0"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="w-full text-white font-bold text-xl uppercase tracking-wider py-6 text-center border-b border-white/10 hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="mt-8 bg-accent text-white font-bold text-lg uppercase tracking-wider px-12 py-4 hover:bg-orange-600 transition-colors"
            >
              Cotizar
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
