import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Materiales", href: "#materiales" },
  ];

  const contactLinks = [
    { label: "Contacto", href: "#contacto" },
    { label: "Cotizaciones", href: "#contacto" },
    { label: "Trabaja con nosotros", href: "#" },
  ];

  return (
    <footer className="bg-primary text-white py-10 md:py-16 px-4 md:px-8">
      <div className="max-w-[1216px] mx-auto">
        {/* Top Section - Stack en mobile */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:pb-8 border-b border-slate-500/50">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <h3 className="font-black text-xl md:text-2xl leading-7 md:leading-8 tracking-[-1px] md:tracking-[-1.2px] uppercase">
              Aceros Saracco
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed md:leading-[23px] max-w-[320px]">
              Fabricantes y proveedores de acero de calidad para la industria de
              la construcción. Compromiso, precisión y entrega en cada proyecto.
            </p>
            {/* Social Icons - Blancos sin bg */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center hover:text-accent transition-colors group"
                aria-label="Facebook"
              >
                <Lucide.Facebook className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center hover:text-accent transition-colors group"
                aria-label="Instagram"
              >
                <Lucide.Instagram className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center hover:text-accent transition-colors group"
                aria-label="LinkedIn"
              >
                <Lucide.Linkedin className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Links - Stack vertical en mobile */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-16">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 md:gap-4"
            >
              <h4 className="text-accent font-bold text-xs md:text-sm uppercase tracking-[1.4px]">
                Enlaces
              </h4>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 text-xs md:text-sm hover:text-white hover:translate-x-1 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 md:gap-4"
            >
              <h4 className="text-accent font-bold text-xs md:text-sm uppercase tracking-[1.4px]">
                Contacto
              </h4>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 text-xs md:text-sm hover:text-white hover:translate-x-1 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 md:pt-8 text-center"
        >
          <p className="text-gray-500 text-xs leading-4">
            © {currentYear} Aceros Saracco. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
