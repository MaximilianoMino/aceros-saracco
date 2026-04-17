import * as Lucide from "lucide-react";

const services = [
  {
    title: "Atención Personalizada",
    description:
      "Asesoramiento técnico especializado para cada proyecto. Nuestro equipo te ayuda a elegir los materiales correctos.",
    icon: Lucide.Users,
  },
  {
    title: "Logística Ágil",
    description:
      "Flota propia de transporte para entregas rápidas y seguras en obra. Programación flexible según tus necesidades.",
    icon: Lucide.Truck,
  },
  {
    title: "Stock Asegurado",
    description:
      "Amplio inventario disponible inmediatamente. No detenemos tu obra por falta de materiales.",
    icon: Lucide.Package,
  },
  {
    title: "Acopio Especializado",
    description:
      "Servicios de almacenaje especializados. Custodia y gestión de materiales para tus proyectos.",
    icon: Lucide.Warehouse,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-12 md:py-24 px-4 md:px-12 bg-primary border-t border-gray-200"
    >
      <div className="max-w-[1184px] mx-auto">
        {/* Header */}
        <div className="text-start mb-8 md:mb-16 animate-fade-in-up">
          <h2 className="text-white font-bold text-2xl md:text-4xl leading-tight md:leading-[50px] tracking-[-1px] md:tracking-[-2px] mb-2 md:mb-4">
            <span className="text-accent text-4xl leading-none mr-2">|</span>
            NUESTROS SERVICIOS
          </h2>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed md:leading-7 max-w-[672px]">
            Brindamos soluciones integrales para la industria de la construcción
          </p>
        </div>

        {/* Services Grid - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white shadow-sm rounded-lg px-2 md:px-4 py-4 md:py-6 flex flex-col items-center gap-3 md:gap-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                <service.icon
                  className="w-7 md:w-8 h-7 md:h-8 text-accent group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-primary font-bold text-sm md:text-lg leading-tight md:leading-7 uppercase tracking-[-0.5px]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-[26px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
