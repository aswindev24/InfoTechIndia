import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Domains from '../pages/Domains';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import useScrollToTop from '../hooks/useScrollToTop';

const AppRoutes = () => {
    useScrollToTop();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default AppRoutes;
