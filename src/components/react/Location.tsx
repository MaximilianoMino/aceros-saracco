export default function Location() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-light border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-primary font-bold text-2xl md:text-4xl uppercase tracking-wider">
            <span className="text-accent text-4xl leading-none mr-2">|</span>
            DONDE ESTAMOS
          </h2>
          <p className="text-gray-700 text-sm md:text-lg mt-2 md:mt-3">
            Ubicación estratégica en Córdoba
          </p>
        </div>

        {/* Map */}
        <div className="h-[250px] md:h-[400px] w-full bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.663959289084!2d-64.1377717861875!3d-31.39577211642094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943283911bb30857%3A0x2b0040f134897a69!2sACEROS%20SARACCO!5e0!3m2!1ses-419!2sar!4v1775608791367!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Aceros Saracco"
          />
        </div>
      </div>
    </section>
  );
}