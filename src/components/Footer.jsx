import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/Elevate-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030405] text-white">
      
      {/* ===== FULL BACKGROUND GLOW EFFECTS ===== */}
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(229,177,51,0.22)_0%,rgba(229,177,51,0.08)_35%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(229,177,51,0.12),transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#15130d_0%,#07080b_45%,#020304_100%)] pointer-events-none" />

      <div className="relative z-10">
        
        {/* ── CTA BANNER BOX ── */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-5xl mx-auto rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-[#151515] to-[#08090C] px-6 py-20 text-center relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
            
            {/* Inner Glow Spotlight */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#E5B133]/15 blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-[56px] font-black tracking-tight">
                Beyond Your <span className="text-[#F5B91B]">Degree</span>
              </h2>

              <p className="mt-5 mx-auto max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed">
                Not just courses. Not just certifications. A complete pathway that helps learners gain skills, experience, industry exposure, and career opportunities.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="#journey"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5B91B] text-black font-bold px-8 py-4 rounded-full hover:bg-[#e5a91a] transition shadow-[0_0_35px_rgba(245,185,27,.35)] text-sm whitespace-nowrap"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a 
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111217] border border-white/10 font-bold hover:bg-[#181920] transition text-sm whitespace-nowrap"
                >
                  Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── SITEMAP NAVIGATION GRID ── */}
        <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column with Social Channels */}
          <div className="space-y-3">
            <img src={logo} alt="Elevate Logo" className="h-12 w-auto" />

            <p className="text-sm text-white px-2">An Initiative of AIRA Venturess Private  Limited</p>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-medium px-2 text-justify">
              A career acceleration ecosystem that connects learning, mentorship, projects and placements.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/112454336/admin/page-posts/published/" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] hover:border-[#F5B91B] hover:text-[#F5B91B] flex items-center justify-center text-zinc-400 transition-colors duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Facebook */}
              {/* <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] hover:border-[#F5B91B] hover:text-[#F5B91B] flex items-center justify-center text-zinc-400 transition-colors duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a> */}

              {/* Instagram */}
               { <a 
                href="https://www.instagram.com/aira.elevate?igsh=cjQweWM4aWVod2kw" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] hover:border-[#F5B91B] hover:text-[#F5B91B] flex items-center justify-center text-zinc-400 transition-colors duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
 }
              {/* YouTube */}
              {/* <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] hover:border-[#F5B91B] hover:text-[#F5B91B] flex items-center justify-center text-zinc-400 transition-colors duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              {["Home", "Programs", "Success Stories", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
              Programs
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              {["Artificial Intelligence", "Cyber Security", "IoT & Robotics", "Digital Marketing"].map((program) => (
                <li key={program}>
                  <a href="#programs" className="hover:text-white transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
              Get in touch
            </h4>
            <div className="mt-5 space-y-4 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <Mail className="text-[#F5B91B] w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@airaelevate.com" className="hover:text-white transition-colors">
                  info@airaelevate.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#F5B91B] w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+917812874893" className="hover:text-white transition-colors">
                  +91 91506 99145
                </a>
              </div>

              <div className="flex items-start gap-3 leading-relaxed">
                <MapPin className="text-[#F5B91B] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Awfis, 24 Residency Road, Saberi Complex, Bangalore, Kar - 560001
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM UTILITY BAR ── */}
        <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-semibold">
          <span>
            © {new Date().getFullYear()} Elevate. All rights reserved.
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}