import { useState } from "react";
import * as Lucide from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-12 md:py-24 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left - Contact Info */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8">
          <div className="animate-slide-in-left">
            <h2 className="text-primary font-bold text-xl md:text-[36px] leading-tight md:leading-10 tracking-[-0.5px] md:tracking-[-0.9px] uppercase">
              <span className="text-accent text-4xl leading-none mr-2">|</span>
              CONTACTANOS
            </h2>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed md:leading-7 mt-2 md:mt-4">
              Nuestro equipo técnico está listo para asesorarte. Respondemos
              consultas técnicas y presupuestos en el día.
            </p>
          </div>

          {/* Contact Details */}
          <div
            className="flex flex-col gap-4 md:gap-6 mt-2 md:mt-4 animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Address */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                <Lucide.MapPin className="w-4 md:w-5 h-4 md:h-5 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs md:text-base uppercase">
                  Ubicación
                </h4>
                <p className="text-gray-700 text-xs md:text-base">
                  Dr. Ricaldo Balbin, RN19 km 3,3,
                  <br />
                  X5000 Córdoba
                </p>
              </div>
            </div>

            {/* Phone/WhatsApp */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                <Lucide.Phone className="w-4 md:w-5 h-4 md:h-5 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs md:text-base uppercase">
                  Atención Comercial
                </h4>
                <a
                  href="https://wa.me/5493517868219"
                  className="text-gray-700 text-xs md:text-base hover:text-accent transition-colors"
                >
                  +54 9 3517 86-8219
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                <Lucide.Mail className="w-4 md:w-5 h-4 md:h-5 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs md:text-base uppercase">
                  Correo Electrónico
                </h4>
                <a
                  href="mailto:acerossaracco.sas@gmail.com"
                  className="text-gray-700 text-xs md:text-base hover:text-accent transition-colors"
                >
                  acerossaracco.sas@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-accent/10 rounded flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                <Lucide.Instagram className="w-4 md:w-5 h-4 md:h-5 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-primary font-bold text-xs md:text-base uppercase">
                  Redes Sociales
                </h4>
                <a
                  href="https://instagram.com/Aceros__Saracco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-xs md:text-base hover:text-accent transition-colors"
                >
                  @Aceros__Saracco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-10 border border-gray-100 animate-slide-in-right">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nombre"
                className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.7px]"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
                required
                className="bg-light border border-gray-200 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            {/* Email & Phone Row - Stack en mobile */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.7px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.com"
                  required
                  className="bg-light border border-gray-200 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="telefono"
                  className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.7px]"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+54 351..."
                  className="bg-light border border-gray-200 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mensaje"
                className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.7px]"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Describa su requerimiento o materiales a cotizar..."
                rows={3}
                required
                className="bg-light border border-gray-200 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-accent text-white font-bold text-xs md:text-base uppercase tracking-wider py-3 md:py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Lucide.Loader2 className="w-4 md:w-5 h-4 md:h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Lucide.Send className="w-4 md:w-5 h-4 md:h-5" />
                  Enviar Consulta
                </>
              )}
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-600 text-center text-xs md:text-sm font-medium">
                ¡Mensaje enviado exitosamente! Te contactaremos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center text-xs md:text-sm font-medium">
                Error al enviar. Intenta nuevamente o contáctanos por otro
                medio.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
