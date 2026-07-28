import { Toaster } from '@/components/ui/sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Index from './pages/Index';
import TentangKami from './pages/TentangKami';
import UmkmEkonomi from './pages/UmkmEkonomi';
import WisataBudaya from './pages/WisataBudaya';
import Artikel from './pages/Artikel';
import ArtikelDetail from './pages/ArtikelDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/tentang-kami" element={<PageLayout><TentangKami /></PageLayout>} />
    <Route path="/tentang-kami/:tab" element={<PageLayout><TentangKami /></PageLayout>} />
    <Route path="/umkm-ekonomi" element={<PageLayout><UmkmEkonomi /></PageLayout>} />
    <Route path="/wisata-budaya" element={<PageLayout><WisataBudaya /></PageLayout>} />
    <Route path="/artikel" element={<PageLayout><Artikel /></PageLayout>} />
    <Route path="/artikel/:slug" element={<PageLayout><ArtikelDetail /></PageLayout>} />
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AppRoutes />
    <Toaster />
  </BrowserRouter>
);

export default App;
export { AppRoutes };