import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { COMPANY_DETAILS } from '../../constants/companyInfo';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle
                            title="Why Choose Info Tech India?"
                            subtitle="We go beyond just code. We provide a complete ecosystem for your academic success."
                            center={false}
                        />

                        <div className="flex flex-col gap-6">
                            {COMPANY_DETAILS.guarantees.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5"
                                >
                                    <FaCheckCircle className="text-whatsapp text-xl flex-shrink-0" />
                                    <span className="text-lg font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full min-h-[400px] bg-gradient-to-br from-accentPurple/20 to-accentCyan/20 rounded-2xl border border-white/10 flex items-center justify-center p-8 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="text-center relative z-10">
                            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentCyan to-accentPurple mb-2">100%</div>
                            <div className="text-xl text-textMuted uppercase tracking-widest">Satisfaction</div>

                            <div className="mt-8 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-whatsapp to-green-300 mb-2">24/7</div>
                            <div className="text-xl text-textMuted uppercase tracking-widest">WhatsApp Support</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default WhyChooseUs;
