import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

const About = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <SectionTitle title="About Info Tech India" subtitle="Dedicated to shaping the future of aspiring developers." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-textMuted text-lg leading-relaxed"
                >
                    <p>
                        <span className="text-textPrimary font-semibold">Info Tech India</span> is a premier software development firm dedicated to bridging the gap between academic learning and industry standards.
                    </p>
                    <p>
                        We specialize in providing high-quality final year projects for <span className="text-accentCyan">MCA, BCA, and BSc Computer Science</span> students. Our mission is to not just provide code, but to provide knowledge, ensuring every student understands their project inside out.
                    </p>
                    <p>
                        With expertise in <span className="text-accentPurple">AI, Machine Learning, and Full Stack Web Development</span>, we help students create projects that stand out and secure top grades.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accentCyan/10 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Our Core Values</h3>
                    <ul className="space-y-4 relative z-10">
                        {['Student Centric Approach', 'Innovation & Quality', 'Affordable Solutions', 'Complete Transparency'].map((val, i) => (
                            <li key={i} className="flex items-center gap-3 text-textPrimary">
                                <span className="w-2 h-2 rounded-full bg-accentCyan"></span>
                                {val}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};
export default About;
