import * as Lucide from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[725px] flex items-center justify-start border-t border-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Industrial warehouse"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] w-full px-6 md:px-12 flex flex-col items-start gap-4 md:gap-6">
        {/* Heading */}
        <h1
          className="text-white font-bold text-2xl md:text-4xl lg:text-[55px] leading-tight md:leading-[60px] uppercase text-start animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Calidad, <span className="text-accent">precisión</span> y{" "}
          <span className="text-accent">compromiso</span> en cada entrega.
        </h1>

        {/* Products Line */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-white/80 text-sm md:text-base tracking-wide">
            Hierro • Clavos • Alambre • Mallas electrosoldadas
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex mt-2 md:mt-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contacto"
            className="bg-accent text-white font-bold text-sm px-6 md:px-8 py-3 uppercase tracking-wider hover:bg-[#f48c25]/90 transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
