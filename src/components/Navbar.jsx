import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#EAE1D0] py-3 shadow-sm' 
        : 'bg-[#FAF6F0]/80 backdrop-blur-sm py-4 border-b border-[#EAE1D0]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <div className="flex items-center space-x-1.5">
              <span className="font-serif font-extrabold text-2xl tracking-wider text-[#0C192E]">
                ELEVATE
              </span>
            </div>
            <div className="flex items-center space-x-1 text-[9px] font-semibold text-[#C59B27] uppercase tracking-[0.2em] -mt-0.5">
              <span className="h-[1px] w-2 bg-[#C59B27]"></span>
              <span>BEYOND YOUR DEGREE</span>
              <span className="h-[1px] w-2 bg-[#C59B27]"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-[#C59B27] ${
                    isActive ? 'text-[#0C192E] font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C59B27] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0C192E] hover:bg-[#172A46] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              JOIN A BATCH
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-[#0C192E] focus:outline-none p-2 rounded-lg bg-white border border-[#EAE1D0]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF6F0] border-b border-[#EAE1D0]"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 text-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                      isActive 
                        ? 'bg-[#0C192E] text-white font-semibold' 
                        : 'text-slate-700 hover:bg-[#F3ECE0]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  to="/products"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0C192E] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md"
                >
                  JOIN A BATCH
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
