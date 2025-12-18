import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../utils/whatsapp';

const WhatsAppButton = () => {
    return (
        <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => openWhatsApp()}
            className="fixed bottom-8 right-8 z-50 p-4 bg-whatsapp rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] flex items-center justify-center text-white text-3xl cursor-pointer group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full animate-ping bg-whatsapp opacity-20 duration-1000"></div>
            <FaWhatsapp className="relative z-10" />
        </motion.button>
    );
};
export default WhatsAppButton;
