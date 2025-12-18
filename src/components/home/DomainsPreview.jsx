import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { domainsData } from '../../data/domainsData';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const DomainsPreview = () => {
    return (
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Domains We Master"
                    subtitle="Explore a wide range of popular domains for your final year projects."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {domainsData.slice(0, 8).map((domain, index) => (
                        <motion.div
                            key={domain.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-card p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-colors"
                        >
                            <div className={`text-4xl ${domain.color}`}>
                                <domain.icon />
                            </div>
                            <h3 className="font-semibold text-textPrimary">{domain.title}</h3>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/domains">
                        <Button variant="secondary">Explore Domains</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default DomainsPreview;
