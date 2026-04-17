import * as Lucide from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Materiales", href: "#materiales" },
  ];

  return (
    <footer className="bg-dark text-white py-10 md:py-16 px-4 md:px-8">
      <div className="max-w-[1216px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-8 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4 animate-fade-in-up">
            <h3 className="font-bold text-xl md:text-2xl leading-7 md:leading-8 tracking-[-1px] uppercase text-white">
              Aceros Saracco
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[320px]">
              Fabricantes y proveedores de acero de calidad para la industria de la construcción. Compromiso, precisión y entrega en cada proyecto.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/Aceros-Saracco-61565624704902"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:bg-accent/20 rounded-lg transition-colors group"
                aria-label="Facebook"
              >
                <Lucide.Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/acerossaracco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:bg-accent/20 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Lucide.Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-accent font-bold text-xs uppercase tracking-[1.4px]">
              Enlaces
            </h4>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 text-sm hover:text-white hover:translate-x-1 transition-all w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-accent font-bold text-xs uppercase tracking-[1.4px]">
              Contacto
            </h4>
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <Lucide.MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm">
                Dr. Ricaldo Balbin, RN19 km 3,3, X5000 Córdoba
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Lucide.Phone className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <a
                href="https://wa.me/5493517868219"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                +54 9 3517 86-8219
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Lucide.Mail className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <a
                href="mailto:acerossaracco.sas@gmail.com"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                acerossaracco.sas@gmail.com
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="mt-2 bg-accent text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded hover:bg-accent/90 transition-colors w-fit"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-gray-500 text-xs">
            © {currentYear} Aceros Saracco. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
