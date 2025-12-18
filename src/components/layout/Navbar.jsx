import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { ROUTES } from '../../constants/routes';
import Button from '../common/Button';
import { openWhatsApp } from '../../utils/whatsapp';
import companyLogo from '../../assets/images/comapnyLogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5 ' : 'bg-transparent '}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img src={companyLogo} alt="Info Tech India" className="h-36 w-auto" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {ROUTES.map((route) => (
                            <NavLink
                                key={route.path}
                                to={route.path}
                                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-accentCyan ${isActive ? 'text-accentCyan' : 'text-textMuted'}`}
                            >
                                {route.label}
                            </NavLink>
                        ))}
                    </div>
                    <Button variant="whatsapp" onClick={() => openWhatsApp()} className="!py-2 !px-4 text-sm">
                        Chat on WhatsApp
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-textPrimary text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {ROUTES.map((route) => (
                                <NavLink
                                    key={route.path}
                                    to={route.path}
                                    className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-accentCyan' : 'text-textMuted'}`}
                                >
                                    {route.label}
                                </NavLink>
                            ))}
                            <Button variant="whatsapp" onClick={() => openWhatsApp()} className="w-full mt-4">
                                Chat on WhatsApp
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
export default Navbar;
