import * as Lucide from "lucide-react";

const benefits = [
  {
    title: "SOMOS FABRICANTES",
    description: "Trazabilidad, control de calidad y producción continua",
    icon: Lucide.Factory,
  },
  {
    title: "LOGÍSTICA ÁGIL Y ACCESIBLE",
    description: "Entregamos en obra",
    icon: Lucide.Truck,
  },
  {
    title: "PRECIOS MAYORISTAS",
    description:
      "Beneficios por volumen. Condiciones comerciales competitivas.",
    icon: Lucide.Tag,
  },
  {
    title: "STOCK ASEGURADO",
    description: "Disponibilidad inmediata para que tu obra no se detenga.",
    icon: Lucide.Package,
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-12 md:py-24 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-2 md:gap-4">
          <h2 className="text-primary font-bold text-2xl md:text-4xl leading-tight md:leading-[50px] uppercase animate-slide-in-left">
            <span className="text-accent text-4xl leading-none mr-2">|</span>
            Sobre Nosotros
          </h2>

          <div
            className="text-gray-700 text-sm md:text-base leading-relaxed animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Somos fabricantes y proveedores de acero a gran escala con
              logística ágil, asesoramiento personalizado y condiciones
              comerciales adaptadas al ritmo de obra.
            </p>
          </div>

          {/* Benefits Grid - 2x2 en tablet, 1 col en mobile, 2 col en desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mt-2 md:mt-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-100 shadow-sm rounded p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <div className="p-3bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <benefit.icon className="w-5 md:w-6 h-5 md:h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="text-primary font-bold text-sm md:text-sm uppercase tracking-[-0.35px]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 md:mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            className="bg-accent text-white font-bold text-sm md:text-base px-6 md:px-8 py-3 uppercase tracking-wider inline-flex items-center justify-center mt-2 md:mt-4 hover:bg-accent/90 transition-colors w-fit animate-fade-in-up"
          >
            Contactanos
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full animate-slide-in-right">
          <div className="bg-gray-200 overflow-hidden shadow-lg h-[250px] md:h-[400px] lg:h-[500px]">
            <img
              src="/images/about.webp"
              alt="Depósito industrial de Aceros Saracco"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
