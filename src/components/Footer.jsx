import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/Elevate-logo.png"


export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#060608] relative overflow-hidden">
      
      {/* Background glow overlay */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[95px]" />
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full radial-glow-gold opacity-5 blur-[80px]" />

      {/* ── TOP CTA BANNER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-b border-white/5 relative z-10 justify-center items-center ">
        <div className="glass-card rounded-[32px] p-8 md:p-12 bg-gradient-to-br from-gold/50 via-slate-950/40 to-transparent border border-gold relative overflow-hidden text-center md:text-left flex flex-col md:flex-row justify-center items-center gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center justify-center  gap-1.5 bg-gold/30 hover:bg-gold/50 rounded-full px-3.5 py-1 text-xs font-bold text-amber-500 uppercase">
              🚀 Accelerated Growth
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-outfit">
              Beyond Your <span className="text-gold">Degree</span>
            </h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
              Not just courses. Not just certifications. A complete pathway that helps learners gain skills, experience, industry exposure, and career opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end flex-shrink-0">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold/80 text-[#080706] font-extrabold px-6 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] text-sm group"
            >
              Start Your Journey
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0E0E11]/80 hover:bg-[#12100F]/90 text-[#f4f3f2] border border-white/10 hover:border-gold/30 font-extrabold px-6 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* ── SITEMAP GRID (4 COLUMNS) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        
        {/* Col 1: Elevate Brand Info */}
        <div className="space-y-6 flex flex-col items-start text-left">
          <div className="space-y-2 text-left">
            <div className="text-2xl font-black text-gold tracking-wider font-outfit uppercase">
              <img src={logo} alt=""  className="w-auto h-16 md:h-12 text-gold"/>
            </div>
            <div className="text-[9px] font-black text-gold/85 tracking-[0.25em] uppercase font-outfit">
              LEARN · BUILD · ACHIEVE
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-[280px] leading-relaxed font-medium">
            A career acceleration ecosystem that connects learning, mentorship, projects and placements.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-gold/30 hover:bg-[#12100F]/60 flex items-center justify-center text-slate-400 hover:text-gold transition-all duration-300 shadow-sm"
            >
              <svg
                className="w-4.5 h-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-gold/30 hover:bg-[#12100F]/60 flex items-center justify-center text-slate-400 hover:text-gold transition-all duration-300 shadow-sm"
            >
              <svg
                className="w-4.5 h-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-gold/30 hover:bg-[#12100F]/60 flex items-center justify-center text-slate-400 hover:text-gold transition-all duration-300 shadow-sm"
            >
              <svg
                className="w-4.5 h-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4 text-left">
          <h5 className="text-xs font-black tracking-widest uppercase text-white font-outfit">
            Quick Links
          </h5>
          <ul className="space-y-2">
            {["Home", "Programs", "Success Stories", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Programs */}
        <div className="space-y-4 text-left">
          <h5 className="text-xs font-black tracking-widest uppercase text-white font-outfit">
            Programs
          </h5>
          <ul className="space-y-2">
            {[
              "Artificial Intelligence",
              "Cyber Security",
              "IoT & Robotics",
              "Graphic Design",
              "Digital Marketing",
              "Stock Market",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#programs"
                  className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Get in touch */}
        <div className="space-y-4 text-left">
          <h5 className="text-xs font-black tracking-widest uppercase text-white font-outfit">
            Get in touch
          </h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4.5 h-4.5 mt-0.5 text-gold flex-shrink-0" />
              <a href="mailto:info@airaelevate.com" className="hover:text-white transition-colors font-medium">
                info@airaelevate.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4.5 h-4.5 mt-0.5 text-gold flex-shrink-0" />
              <a href="tel:+917812874893" className="hover:text-white transition-colors font-medium">
                +91 7812874893
              </a>
            </li>
            <li className="flex items-start gap-2.5 leading-relaxed font-medium">
              <MapPin className="w-4.5 h-4.5 mt-0.5 text-gold flex-shrink-0" />
              <span>
                Awfis, 24 Residency Road, Saberi Complex, Bangalore, Kar - 560001
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── BOTTOM COPYRIGHT LINE ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-slate-500 font-semibold">
        <span className="text-slate-500">&copy; {new Date().getFullYear()} Elevate. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
        </div>
      </div>

    </footer>
  );
}
