import * as Lucide from "lucide-react";

const products = [
  { name: "Hierro", icon: Lucide.Hammer },
  { name: "Clavos", icon: Lucide.Anchor },
  { name: "Alambre", icon: Lucide.CircleDashed },
  { name: "Mallas", icon: Lucide.Grid3X3 },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[725px] flex items-center justify-center border-t border-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Industrial warehouse"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content - Centrado */}
      <div className="relative z-10 max-w-[768px] w-full px-4 md:px-8 flex flex-col items-center gap-4 md:gap-6">
        {/* Logo Header */}
        <img
          src="/images/logo-header.webp"
          alt="Aceros Saracco"
          className="w-44 md:w-60 h-auto object-contain my-10 animate-fade-in-down"
        />

        {/* Heading */}
        <h1
          className="text-white font-bold text-2xl md:text-4xl lg:text-[60px] leading-tight md:leading-[60px] uppercase text-center animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Calidad, precisión y compromiso en cada entrega.
        </h1>

        {/* Product Icons - Grid responsive */}
        <div
          className="flex flex-wrap justify-center gap-6 md:gap-16 mt-2 md:mt-4 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {products.map((product) => (
            <div
              key={product.name}
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
            </div>
          ))}
        </div>

        {/* CTAs - Stack en mobile */}
        <div
          className="flex flex-col md:flex-row mt-2 md:mt-4 w-full md:w-auto animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contacto"
            className="bg-accent text-white font-bold text-sm px-6 md:px-8 py-3 uppercase tracking-wider hover:bg-accent/90 transition-colors text-center"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
