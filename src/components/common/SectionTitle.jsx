import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true }) => {
    return (
        <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-accentCyan to-accentPurple pb-2"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-textMuted text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-1 w-24 bg-gradient-to-r from-accentPurple to-accentCyan mt-6 rounded-full ${center ? 'mx-auto' : ''}`}
            />
        </div>
    );
};
export default SectionTitle;
