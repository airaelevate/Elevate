import React from "react";
import { X, Check } from "lucide-react";

export default function Trajectory() {
  const brokenModel = [
    "Generic pre-recorded courses",
    "Theory without real projects",
    "No mentorship or guidance",
    "Certificates with no career outcome",
    "Disconnected from industry hiring",
  ];

  const elevateModel = [
    "Industry-curated learning tracks",
    "Hands-on projects with real teams",
    "1:1 mentorship with practitioners",
    "Internships that convert to roles",
    "Dedicated career support and guidance",
  ];

  return (
    <section id="trajectory" className="py-24 border-t border-white/5 bg-[#0B0B0B] relative">
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full radial-glow-gold opacity-5 blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          {/* THE PROBLEM Badge */}
          <div className="inline-flex items-center gap-1.5 bg-gold-300 border border-gold/30 rounded-full px-5 py-3 text-[10px] font-black text-gold uppercase tracking-widest mx-auto">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            THE PROBLEM
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Most Learning Platforms Stop at Certificates
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A certificate doesn't get you hired. Industry teams hire for proof — projects shipped, problems solved, mentors who vouch. That's the gap most EdTech leaves wide open.
          </p>
        </div>

        {/* Vertical Stack Animation - Replicating screenshot */}
        <div className="flex flex-col items-center mb-20 relative">
          {/* Central Vertical Connector Line */}
          <div className="absolute top-10 bottom-10 w-0.5 bg-white/5 z-0" />

          {/* Pill 1: Courses */}
          <div className="w-80 bg-[#0E0E11] border border-white/5 rounded-full py-3.5 text-center text-xs font-bold text-slate-400 z-10 shadow-lg mb-6">
            Courses
          </div>

          {/* Pill 2: Certificates */}
          <div className="w-80 bg-[#0E0E11] border border-white/5 rounded-full py-3.5 text-center text-xs font-bold text-slate-400 z-10 shadow-lg mb-6">
            Certificates
          </div>

          {/* Pill 3: No career continuity */}
          <div className="w-80 bg-[#0B0B0B] border border-white/5 rounded-full py-3.5 text-center text-xs font-bold text-red-500 z-10 shadow-l hover:border-red-400 ">
            No career continuity
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mt-12">
          
          {/* Left Card: Stops at the certificate */}
          <div className="rounded-[24px] p-8 md:p-10 bg-[#0C0B0A]/90 border border-red-500/10 hover:border-red-500/30 hover:bg-[#120B0B]/90 transition-all duration-300 relative overflow-hidden text-left shadow-[0_8px_30px_rgb(0,0,0,0.8)] group">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  TRADITIONAL LEARNING
                </span>
                <h3 className="text-2xl font-black text-white font-outfit mt-1">
                  Stops at the certificate
                </h3>
              </div>

              <ul className="space-y-4">
                {brokenModel.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500/70 flex-shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-400 leading-relaxed font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card: Continues till employed */}
          <div className="rounded-[24px] p-8 md:p-10 bg-[#0C0B0A]/90 border border-gold/15 hover:border-gold/30 hover:bg-[#12100F]/90 transition-all duration-300 relative overflow-hidden text-left shadow-[0_8px_30px_rgb(0,0,0,0.8)] group">
            {/* ELEVATE WAY Badge */}
            <div className="absolute top-8 right-8 bg-gold text-black font-extrabold text-[10px] tracking-wider uppercase px-4 py-1.5 rounded-full">
              ELEVATE WAY
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black text-gold uppercase tracking-widest">
                  ELEVATE
                </span>
                <h3 className="text-2xl font-black text-white font-outfit mt-1">
                  Continues till you're employed
                </h3>
              </div>

              <ul className="space-y-4 font-semibold">
                {elevateModel.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-300 leading-relaxed font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
