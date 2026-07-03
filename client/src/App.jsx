import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Research from '@/pages/Research';
import Healthcare from '@/pages/Healthcare';


import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="research" element={<Research />} />
            <Route path="healthcare-professionals" element={<Healthcare />} />


            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            
            <Route path="*" element={
              <div className="pt-24 pb-16 min-h-[60vh] flex items-center justify-center bg-light-bg">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-navy mb-4">404 - Not Found</h1>
                  <p className="text-text-muted">The page you are looking for does not exist.</p>
                </div>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#39A845',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
    </HelmetProvider>
  );
};

export default App;
