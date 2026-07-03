import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY } from '@/constants';

const WhatsAppButton = () => {
  const phoneNumber = COMPANY.phone.replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Hello Seravo Life Sciences, I would like to know more about your products!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-elevated hover:shadow-card transition-shadow duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      
      {/* Optional Ping Animation */}
      <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
    </motion.a>
  );
};

export default WhatsAppButton;
