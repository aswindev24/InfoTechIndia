import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import DomainsPreview from '../components/home/DomainsPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
    return (
        <main>
            <Hero />
            <ServicesPreview />
            <DomainsPreview />
            <WhyChooseUs />
        </main>
    );
};
export default Home;
