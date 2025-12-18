import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="bg-primary min-h-screen text-textPrimary font-sans">
      <Navbar />
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
