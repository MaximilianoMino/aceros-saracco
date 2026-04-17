import { useState, useEffect, useRef } from "react";

export default function Location() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.663959289084!2d-64.1377717861875!3d-31.39577211642094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943283911bb30857%3A0x2b0040f134897a69!2sACEROS%20SARACCO!5e0!3m2!1ses-419!2sar!4v1775608791367!5m2!1ses-419!2sar";

  return (
    <section
      ref={mapRef}
      className="py-12 md:py-24 px-4 md:px-8 bg-light border-t border-gray-200"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-start mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-primary font-bold text-2xl md:text-4xl uppercase tracking-wider">
            <span className="text-accent text-4xl leading-none mr-2">|</span>
            DONDE ESTAMOS
          </h2>
          <p className="text-gray-600 text-sm md:text-lg mt-2 md:mt-3">
            Ubicación estratégica en Córdoba
          </p>
        </div>

        {/* Map Container */}
        <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
          {/* Placeholder mientras no es visible */}
          {!isVisible && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
          )}

          {/* Mapa */}
          {isVisible && (
            <>
              {/* Placeholder con ícono de ubicación */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-4 z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Cargando mapa...</p>
                </div>
              )}

              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Aceros Saracco"
                className={`transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
