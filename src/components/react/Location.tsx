export default function Location() {
  return (
    <section className="relative h-[250px] md:h-[400px] w-full bg-gray-300">
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

      {/* Location Label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-2 uppercase whitespace-nowrap shadow-lg">
        Dr. Ricaldo Balbin, RN19 km 3,3 • Córdoba
      </div>
    </section>
  );
}
