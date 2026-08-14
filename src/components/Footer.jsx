import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1424] text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-16">
          
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-serif font-extrabold text-2xl tracking-[0.15em] text-[#C59B27] block">
                ELEVATE
              </span>
              <div className="flex items-center space-x-1.5 text-[9px] font-semibold text-[#C59B27] uppercase tracking-[0.2em] mt-0.5">
                <span className="h-[1px] w-3 bg-[#C59B27]"></span>
                <span>BEYOND YOUR DEGREE</span>
                <span className="h-[1px] w-3 bg-[#C59B27]"></span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              An initiative by <strong className="text-white font-medium">Aira Ventures Pvt Ltd</strong> — building industry ready students across India, one skill at a time.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-[#C59B27] tracking-[0.2em] uppercase text-xs">
              EXPLORE
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Reach Us */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-[#C59B27] tracking-[0.2em] uppercase text-xs">
              REACH US
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@airaelevate.com" className="text-slate-300 hover:text-[#C59B27] transition-colors text-sm flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#C59B27] shrink-0" />
                  <span>info@airaelevate.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917022603588" className="text-slate-300 hover:text-[#C59B27] transition-colors text-sm flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#C59B27] shrink-0" />
                  <span>+91 70226 03588</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <span className="font-serif italic text-[#C59B27] text-base">
                Let's Elevate together.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 text-center">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Elevate - Aira Ventures Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
