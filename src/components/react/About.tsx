import * as Lucide from "lucide-react";

const benefits = [
  {
    title: "SOMOS FABRICANTES",
    icon: Lucide.Factory,
  },
  {
    title: "LOGÍSTICA ÁGIL Y ACCESIBLE",
    icon: Lucide.Truck,
  },
  {
    title: "PRECIOS MAYORISTAS",
    icon: Lucide.Tag,
  },
  {
    title: "STOCK ASEGURADO",
    icon: Lucide.Package,
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-12 md:py-24 px-4 md:px-8 bg-white border-t border-gray-200"
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        {/* Left Image */}
        <div className="flex-1 w-full animate-slide-in-right">
          <div className="overflow-hidden shadow-lg h-[250px] md:h-[500px] lg:h-[600px]">
            <img
              src="/images/about.webp"
              alt="Depósito industrial de Aceros Saracco"
              className="w-full rounded-md h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-2 md:gap-4">
          <h2 className="text-primary font-bold text-2xl md:text-4xl leading-tight md:leading-[50px] uppercase animate-slide-in-left">
            <span className="text-accent text-4xl leading-none mr-2">|</span>
            Sobre Nosotros
          </h2>

          {/* Benefits Grid - 2x2 en tablet, 1 col en mobile, 2 col en desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mt-2 md:mt-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-100 shadow-sm rounded p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 hover:shadow-lg hover:bg-gray-50 transition-all cursor-pointer group"
              >
                <div className="p-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <benefit.icon className="w-8 md:w-10 h-8 md:h-10 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-primary font-bold text-sm md:text-base uppercase tracking-[-0.35px] text-center">
                  {benefit.title}
                </h3>
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
      </div>
    </section>
  );
}
