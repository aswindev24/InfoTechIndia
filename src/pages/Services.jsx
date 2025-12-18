import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { openWhatsApp } from '../utils/whatsapp';

const Services = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <SectionTitle title="Our Expertise" subtitle="Comprehensive solutions tailored for your academic success." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accentCyan/30 transition-all shadow-lg hover:shadow-accentCyan/10 flex flex-col items-start"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-3xl text-accentCyan">
                            <service.icon />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-textMuted mb-8 flex-grow leading-relaxed">
                            {service.description}
                        </p>
                        <Button variant="outline" onClick={() => openWhatsApp(`I am interested in ${service.title}`)} className="w-full">
                            Inquire Now
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Services;
