import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import { COMPANY_DETAILS } from '../../constants/companyInfo';
import { openWhatsApp } from '../../utils/whatsapp';
import companyLogo from '../../assets/images/comapnyLogo4.png';

const Footer = () => {
    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-accentPurple to-transparent opacity-50 blur-[2px]"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={companyLogo} alt={COMPANY_DETAILS.name} className="h-12 w-auto object-contain" />
                            <h2 className="text-2xl text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentCyan to-accentPurple">
                                {COMPANY_DETAILS.name}
                            </h2>
                        </div>
                        <p className="text-textMuted max-w-sm mb-6 leading-relaxed">
                            Empowering students with premium final year projects.
                            Software solutions for academic excellence and innovation.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors"><FaInstagram /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            {ROUTES.map((route) => (
                                <li key={route.path}>
                                    <NavLink to={route.path} className="text-textMuted hover:text-accentCyan transition-colors">
                                        {route.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <button onClick={() => openWhatsApp()} className="flex items-center gap-3 text-textMuted hover:text-whatsapp transition-colors text-left">
                                    <FaWhatsapp className="text-xl" />
                                    <span>Click to Chat</span>
                                </button>
                            </li>
                            <li>
                                <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center gap-3 text-textMuted hover:text-accentCyan transition-colors">
                                    <FaEnvelope className="text-xl" />
                                    <span>{COMPANY_DETAILS.email}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-textMuted text-sm">
                    <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
