import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { COMPANY_DETAILS } from '../constants/companyInfo';
import { openWhatsApp } from '../utils/whatsapp';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col justify-center">
            <SectionTitle title="Get In Touch" subtitle="We are just a click away. Reach out for instant support." />

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accentPurple/10 to-transparent pointer-events-none"></div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                    <p className="text-textMuted mb-8">
                        Ready to start your final year project? Contact us now for the best rates and premium support.
                    </p>

                    <div className="space-y-6">
                        <div
                            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-white/5 cursor-pointer hover:border-whatsapp/50 transition-colors"
                            onClick={() => openWhatsApp()}
                        >
                            <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center text-whatsapp text-2xl">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <p className="text-sm text-textMuted">WhatsApp (Recommended)</p>
                                <p className="text-lg font-semibold text-white">Chat Now</p>
                            </div>
                        </div>

                        <a
                            href={`mailto:${COMPANY_DETAILS.email}`}
                            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-white/5 hover:border-accentCyan/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-accentCyan/10 flex items-center justify-center text-accentCyan text-2xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-textMuted">Email Us</p>
                                <p className="text-lg font-semibold text-white">{COMPANY_DETAILS.email}</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <div className="inline-block p-6 rounded-full bg-whatsapp/10 mb-6 animate-pulse">
                            <FaWhatsapp className="text-6xl text-whatsapp" />
                        </div>
                        <h3 className="text-xl font-medium mb-4">Quick Response Guaranteed</h3>
                        <Button onClick={() => openWhatsApp()} variant="whatsapp" className="w-full text-lg">
                            Message Us on WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
