import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
    return (
        <section id="services-preview" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Our Premium Services"
                    subtitle="We provide end-to-end support for your academic and professional needs with cutting-edge technologies."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {servicesData.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accentCyan/30 transition-all shadow-lg hover:shadow-accentCyan/10 group"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-2xl text-accentCyan group-hover:bg-accentCyan group-hover:text-primary transition-colors duration-300">
                                <service.icon />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-accentCyan transition-colors">{service.title}</h3>
                            <p className="text-textMuted leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/services">
                        <Button variant="outline">View All Services</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default ServicesPreview;
