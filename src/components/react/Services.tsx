import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

const services = [
  {
    title: 'Atención Personalizada',
    description: 'Asesoramiento técnico especializado para cada proyecto. Nuestro equipo te ayuda a elegir los materiales correctos.',
    icon: Lucide.Users,
  },
  {
    title: 'Logística Ágil',
    description: 'Flota propia de transporte para entregas rápidas y seguras en obra. Programación flexible según tus necesidades.',
    icon: Lucide.Truck,
  },
  {
    title: 'Stock Asegurado',
    description: 'Amplio inventario disponible inmediatamente. No detenemos tu obra por falta de materiales.',
    icon: Lucide.Package,
  },
  {
    title: 'Acopio Especializado',
    description: 'Servicios de almacenaje especializados. Custodia y gestión de materiales para tus proyectos.',
    icon: Lucide.Warehouse,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-12 md:py-24 px-4 md:px-12 bg-gray-100">
      <div className="max-w-[1184px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-primary font-black text-2xl md:text-4xl leading-tight md:leading-[50px] tracking-[-1px] md:tracking-[-2px] mb-2 md:mb-4">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed md:leading-7 max-w-[672px] mx-auto">
            Brindamos soluciones integrales para la industria de la construcción
          </p>
        </motion.div>

        {/* Services Grid - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 shadow-sm p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4 hover:shadow-lg transition-all cursor-pointer group text-center"
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                <service.icon className="w-5 md:w-6 h-5 md:h-6 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-primary font-bold text-sm md:text-lg leading-tight md:leading-7 uppercase tracking-[-0.5px] group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 text-xs md:text-base leading-relaxed md:leading-[26px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}