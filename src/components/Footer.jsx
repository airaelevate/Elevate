import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-[#1C2A4A] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Sitemap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-[#1C2A4A]/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" className="flex flex-col group w-fit">
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#C59B27] tracking-[0.2em] sm:tracking-[0.25em]">ELEVATE</span>
              </div>
              <div className="flex items-center space-x-1 text-[8px] sm:text-[9px] font-semibold text-[#556070] uppercase tracking-[0.15em] sm:tracking-[0.2em] -mt-0.5">
                <span className="h-[1px] w-6 sm:w-8 bg-[#C59B27]"></span>
                <span className="text-white font-bold">BEYOND YOUR DEGREE</span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              A career acceleration ecosystem that connects learning, mentorship, projects and placements.
            </p>

            {/* Social Media Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/112454336/admin/page-posts/published/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#16243A] border border-[#233554] text-slate-300 hover:text-[#C59B27] hover:border-[#C59B27] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>

              <a
                href="https://www.instagram.com/aira.elevate?igsh=cjQweWM4aWVod2kw"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#16243A] border border-[#233554] text-slate-300 hover:text-[#C59B27] hover:border-[#C59B27] flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/" className="hover:text-[#C59B27] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C59B27] transition-colors">
                  About 
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#C59B27] transition-colors">
                  Products    
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C59B27] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PROGRAMS */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27]">
              PROGRAMS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/products" className="hover:text-[#C59B27] transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#C59B27] transition-colors">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#C59B27] transition-colors">
                  IoT & Robotics
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#C59B27] transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27]">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <a href="mailto:info@airaelevate.com" className="hover:text-[#C59B27] transition-colors flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span className="truncate">info@airaelevate.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917022603588" className="hover:text-[#C59B27] transition-colors flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>+91 70226 03588</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>
                    Awfis, 24 Residency Road, Saberi Complex, Bangalore, Kar - 560001
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Utility Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] sm:text-xs text-slate-500">
          <p className="leading-relaxed">
            &copy; {currentYear} ELEVATE — An Initiative of AIRA Ventures Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/contact" className="hover:text-[#C59B27] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#C59B27] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}