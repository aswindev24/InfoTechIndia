import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { domainsData } from '../data/domainsData';
import Button from '../components/common/Button';
import { openWhatsApp } from '../utils/whatsapp';

const Domains = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <SectionTitle title="Project Domains" subtitle="Choose from a wide variety of trending technologies." />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {domainsData.map((domain, index) => (
                    <motion.div
                        key={domain.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="bg-card p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group"
                        onClick={() => openWhatsApp(`I need a project in ${domain.title}`)}
                    >
                        <div className={`text-5xl mb-2 transition-transform duration-300 group-hover:scale-110 ${domain.color}`}>
                            <domain.icon />
                        </div>
                        <h3 className="font-semibold text-lg text-textPrimary">{domain.title}</h3>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-accentCyan font-medium mt-2">
                            Click to Inquire
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Domains;
