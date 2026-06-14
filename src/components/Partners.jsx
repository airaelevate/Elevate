import React from "react";
import { Building, CheckCircle, GraduationCap } from "lucide-react";

export default function Partners() {
  const companyBenefits = [
    "Hire from a pre-vetted, project-tested talent pool trained on modern stacks.",
    "Build a continuous funnel of interns who contribute meaningfully from week one.",
    "Co-create customized curriculum mapped directly to your company's hiring rubric.",
    "Upskill existing teams with custom corporate tracks aligned to your technology roadmap.",
  ];

  return (
    <section id="partners" className="py-24 border-t border-white/5 bg-[#050506]/20 relative">
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[85px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#0A0A0C] border border-amber-500/30 rounded-full px-4.5 py-1.5 text-[10px] font-black text-amber-500 uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            COLLABORATION
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight font-outfit leading-tight">
            Partnership Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Collaborating with academic campuses and corporate teams to establish a continuous pipeline of validated product developers and business practitioners.
          </p>
        </div>

        {/* Side-by-Side grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: College Partnerships */}
          <div className="rounded-[24px] p-8 md:p-10 bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.8)]">
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-gold/5 rounded-full blur-2xl animate-pulse" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white font-outfit">
                    Build Industry-Ready Talent
                  </h3>
                  <p className="text-xs text-gold/80 font-bold uppercase tracking-wider mt-0.5">
                    For Academic Campuses
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed text-left font-medium">
                Bring modern, industry-grade learning labs, hands-on workshop modules, live mentor frameworks, and robust placement infrastructure directly to your students. Bridge the gap between standard university textbooks and active corporate tech requirements.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-extrabold py-3.5 px-6 rounded-full transition-all duration-200 text-xs uppercase tracking-wider"
              >
                Become a Partner College
              </a>
            </div>
          </div>

          {/* Card 2: Corporate Placements */}
          <div className="rounded-[24px] p-8 md:p-10 bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-[0_8px_30px_rgb(0,0,0,0.8)]">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-gold/5 rounded-full blur-2xl animate-pulse" />
            
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <Building className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-outfit">
                    Access Emerging Talent
                  </h3>
                  <p className="text-xs text-gold/80 font-bold uppercase tracking-wider mt-0.5">
                    For Corporate Employers
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 text-left">
                {companyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed font-semibold">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center bg-gold hover:bg-gold/80 text-black font-extrabold py-3.5 px-6 rounded-full transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-gold/20 text-xs uppercase tracking-wider"
              >
                Explore Enterprise Hiring
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
