import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

const products = [
  { name: "Hierro", icon: Lucide.Hammer },
  { name: "Clavos", icon: Lucide.Anchor },
  { name: "Alambre", icon: Lucide.CircleDashed },
  { name: "Mallas", icon: Lucide.Grid3X3 },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[725px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_home.webp"
          alt="Industrial warehouse"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content - Centrado */}
      <div className="relative z-10 max-w-[768px] w-full px-4 md:px-8 flex flex-col items-center gap-4 md:gap-6">
        {/* Logo Header */}
        <motion.img
          src="/images/logo-header.webp"
          alt="Aceros Saracco"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-40 md:w-56 h-auto object-contain mb-2"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-bold text-2xl md:text-4xl lg:text-[60px] leading-tight md:leading-[60px] uppercase text-center"
        >
          Calidad, precisión y compromiso en cada entrega.
        </motion.h1>

        {/* Product Icons - Grid responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-16 mt-2 md:mt-4"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <product.icon
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-white font-bold text-xs md:text-sm uppercase tracking-[1.4px]">
                {product.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs - Stack en mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2 md:mt-4 w-full md:w-auto"
        >
          <a
            href="#contacto"
            className="bg-accent text-white font-bold text-sm px-6 md:px-8 py-3 uppercase tracking-wider hover:bg-orange-600 transition-colors text-center"
          >
            Solicitar Presupuesto
          </a>
          <a
            href="#nosotros"
            className="border-2 border-white text-white font-bold text-sm px-6 md:px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-primary transition-colors text-center"
          >
            Conocenos
          </a>
        </motion.div>
      </div>
    </section>
  );
}