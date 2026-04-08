import { useState } from "react";
import * as Lucide from "lucide-react";

const faqItems = [
  {
    question: "¿Qué productos de acero ofrecen?",
    answer:
      "Ofrecemos varillas para construcción, perfiles metálicos (UPN, HEB, ángulos), planchas de acero comercial, acero galvanizado e inoxidable, y productos especializados según necesidad. Consulta nuestro catálogo completo o contáctanos para más información.",
  },
  {
    question: "¿Realizan entregas en obra?",
    answer:
      "Sí, contamos con flota propia de transporte para realizar entregas directas en obra. Nuestra red logística cubre toda el área de Córdoba y regiones circundantes.",
  },
  {
    question: "¿Tienen stock disponible para entrega inmediata?",
    answer:
      "Sí, contamos con stock asegurado de los productos más solicitados. Puedes verificar disponibilidad antes de realizar tu compra.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 lg:px-[192px] bg-gray-100 border-t border-gray-200">
      <div className="max-w-[896px] mx-auto">
        {/* Header */}
        <h2 className="text-primary font-bold text-xl md:text-3xl leading-tight md:leading-[48px] uppercase text-center mb-8 md:mb-12 animate-fade-in-up">
          <span className="text-accent text-4xl leading-none mr-2">|</span>
          PREGUNTAS FRECUENTES
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3 md:gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200/50 transition-colors"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left group"
              >
                <span className="text-primary font-bold text-xs md:text-base uppercase group-hover:text-accent transition-colors pr-2">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <Lucide.ChevronDown className="w-4 md:w-5 h-4 md:h-5 text-accent" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed md:leading-[23px] px-4 md:px-6 pb-4 md:pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
