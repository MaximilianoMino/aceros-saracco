import * as Lucide from "lucide-react";

const materials = [
  {
    name: "Hierros para construcción",
    items: ["Hierro 4 mm", "Hierro 5 mm", "Hierro 5,5 mm"],
    image: "/images/materiales/hierros.webp",
  },
  {
    name: "Mallas electrosoldadas",
    items: [
      "Malla 15x25 3.7mm",
      "Malla 15x25 5.5mm",
      "Malla 15x15 3.7mm",
      "Malla 15x15 5mm",
      "Malla 15x15 5.5mm",
    ],
    image: "/images/materiales/mallas.webp",
  },
  {
    name: "Barras normalizadas",
    items: [
      "Hierro 6 mm",
      "Hierro 8 mm",
      "Hierro 10 mm",
      "Hierro 12 mm",
      "Hierro 16 mm",
      "Hierro 20 mm",
      "Hierro 25 mm",
    ],
    image: "/images/materiales/varilla-de-acero.webp",
  },
  {
    name: "Alambres",
    items: [
      "Alambre de atar recocido N°17 (fraccionado y a granel)",
      "Alambre de atar recocido N°14",
      "Alambre de atar recocido N°9",
    ],
    image: "/images/materiales/alambres.webp",
  },
  {
    name: "Clavos punta París",
    items: [
      "2 pulgadas (fraccionado y a granel)",
      "2½ pulgadas (fraccionado y a granel)",
    ],
    image: "/images/materiales/clavos.webp",
  },
];

function splitItems(items: string[]) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export default function Materials() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white border-t border-gray-200" id="materiales">
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-primary font-bold text-2xl md:text-4xl leading-tight md:leading-[50px] uppercase">
            <span className="text-accent text-4xl leading-none mr-2">|</span>
            NUESTROS MATERIALES
          </h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed md:leading-7 mt-1 md:mt-2">
            Amplio catálogo de productos de acero para todos los necesidades de
            construcción
          </p>
        </div>

        {/* Materials Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {materials.map((material, index) => {
            const hasMultipleColumns = material.items.length > 3;
            const columns = hasMultipleColumns
              ? splitItems(material.items)
              : [material.items];

            return (
              <div
                key={material.name}
                className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="bg-gray-200 h-[150px] md:h-[180px] overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-primary font-bold text-sm md:text-lg leading-tight uppercase group-hover:text-accent transition-colors">
                    {material.name}
                  </h3>

                  {hasMultipleColumns ? (
                    <div className="mt-2 md:mt-3 grid grid-cols-2 gap-x-3 gap-y-0.5">
                      {columns.map((col, colIdx) => (
                        <div key={colIdx} className="space-y-0.5">
                          {col.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-600 text-xs flex items-center gap-1.5"
                            >
                              <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-2 md:mt-3 space-y-0.5">
                      {material.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-600 text-xs md:text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href="#contacto"
                    className="text-accent font-bold text-xs md:text-sm mt-3 md:mt-4 inline-flex items-center gap-2 hover:text-orange-600 transition-colors group"
                  >
                    Consultar disponibilidad
                    <Lucide.ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-8 md:mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contacto"
            className="bg-accent text-white font-bold text-sm md:text-base px-6 md:px-10 py-3 md:py-4 uppercase tracking-wider inline-flex hover:bg-orange-600 transition-colors"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
