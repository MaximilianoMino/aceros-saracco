import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

export default function FloatingWhatsapp() {
  const phoneNumber = "5493511234567"; // Replace with actual number

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 text-white rounded-full shadow-2xl"
    >
      <img
        src="/images/icons/whatsapp.svg"
        alt="WhatsApp"
        className="w-12 h-12 object-contain"
      />
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
    </motion.a>
  );
}
