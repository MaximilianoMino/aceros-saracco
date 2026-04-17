import * as Lucide from "lucide-react";

export default function FloatingWhatsapp() {
  const phoneNumber = "5493517868219";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="/images/icons/whatsapp.svg"
        alt="WhatsApp"
        className="w-14 h-14 object-contain rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
      />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
    </a>
  );
}
