import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Button from '../common/Button';
import { openWhatsApp } from '../../utils/whatsapp';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Fetching a tech-related Lottie animation
        fetch('https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.log('Lottie Load Error', err));
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary px-6">
            {/* Background Glow */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accentPurple/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accentCyan/10 rounded-full blur-[80px] -z-10"></div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="text-accentCyan font-medium text-sm tracking-wide">STUDENT FOCUSED • MERN STACK • AI</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Final Year Projects
                        <span className="block bg-clip-text  bg-gradient-to-r from-accentCyan to-accentPurple">
                            Made Easy
                        </span>
                    </h1>
                    <p className="text-textMuted text-lg mb-8 max-w-lg leading-relaxed">
                        Get premium, approval-ready projects for MCA, BCA, and BSc CS.
                        Source code, documentation, PPT, and complete viva support at the lowest cost.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button onClick={() => openWhatsApp()} className="text-lg px-8 py-4">
                            Get Started via WhatsApp
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('services-preview').scrollIntoView({ behavior: 'smooth' })}>
                            View Services
                        </Button>
                    </div>
                </motion.div>

                {/* Lottie Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        {animationData ? (
                            <Lottie animationData={animationData} loop={true} />
                        ) : (
                            // Fallback Layout if Lottie fails
                            <div className="w-full h-96 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">💻</div>
                                    <p className="text-textMuted">Loading Animation...</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-accentPurple/10 to-accentCyan/10 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
