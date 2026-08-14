import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProgramDetail from './pages/ProgramDetail';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] text-slate-800 selection:bg-[#C59B27]/20 selection:text-[#C59B27]">
      <ScrollToTop />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          
          {/* Program Detail Routes */}
          <Route path="/program/:slug" element={<ProgramDetail />} />
          <Route path="/webinars" element={<Navigate to="/program/webinars" replace />} />
          <Route path="/workshops" element={<Navigate to="/program/workshops" replace />} />
          <Route path="/courses" element={<Navigate to="/program/courses" replace />} />
          <Route path="/internships" element={<Navigate to="/program/internships" replace />} />

          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route to redirect back to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
