import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

const materials = [
  {
    name: "Hierros para construcción",
    description:
      "Para refuerzo estructural en construcción. Variedad de calibres y especificaciones.",
    image: "/images/materiales/hierros.webp",
  },
  {
    name: "Mallas electrosoldadas",
    description:
      "Perfiles estructurales para vigas y columnas. Resistencia y durabilidad.",
    image: "/images/materiales/mallas.webp",
  },
  {
    name: "Barras normalizadas",
    description:
      "Vigas de acero de alta resistencia. Para cargas estructurales importantes.",
    image: "/images/materiales/varilla-de-acero.webp",
  },
  {
    name: "Clavos punta París",
    description:
      "Para aplicaciones industriales y de construcción. Múltiples espesores disponibles.",
    image: "/images/materiales/clavos.webp",
  },
  {
    name: "Alambres",
    description:
      "Para aplicaciones industriales y de construcción. Múltiples espesores disponibles.",
    image: "/images/materiales/alambres.webp",
  },
];

export default function Materials() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-primary font-bold text-2xl md:text-4xl leading-tight md:leading-[50px] uppercase">
            NUESTROS MATERIALES
          </h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed md:leading-7 mt-1 md:mt-2">
            Amplio catálogo de productos de acero para todos los necesidades de
            construcción
          </p>
        </motion.div>

        {/* Materials Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="bg-gray-200 h-[150px] md:h-[215px] overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-primary font-bold text-sm md:text-lg leading-tight md:leading-[27px] uppercase group-hover:text-accent transition-colors">
                  {material.name}
                </h3>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed md:leading-[21px] mt-2 md:mt-3">
                  {material.description}
                </p>
                <a
                  href="#contacto"
                  className="text-accent font-bold text-xs md:text-sm mt-3 md:mt-4 inline-flex items-center gap-2 hover:text-orange-600 transition-colors group"
                >
                  Consultar disponibilidad
                  <Lucide.ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <a
            href="#contacto"
            className="bg-accent text-white font-bold text-sm md:text-base px-6 md:px-10 py-3 md:py-4 uppercase tracking-wider inline-flex hover:bg-orange-600 transition-colors"
          >
            Ver Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
