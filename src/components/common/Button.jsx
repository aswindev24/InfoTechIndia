import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer backdrop-blur-sm";

    const variants = {
        primary: "bg-gradient-to-r from-accentPurple to-accentCyan text-white shadow-accentPurple/25 hover:shadow-accentPurple/40 border border-white/10",
        secondary: "bg-white/5 text-textPrimary border border-white/10 hover:bg-white/10 hover:border-white/20",
        whatsapp: "bg-whatsapp text-white shadow-whatsapp/25 hover:shadow-whatsapp/40",
        outline: "border border-accentCyan text-accentCyan hover:bg-accentCyan/10"
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
        >
            {children}
        </motion.button>
    );
};
export default Button;
