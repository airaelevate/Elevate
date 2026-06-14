import React from "react";
import { BookOpen, Monitor, Briefcase, Award, GraduationCap, Rocket } from "lucide-react";

export default function Journey() {
  const steps = [
    {
      id: 1,
      title: "Learn",
      desc: "Master fundamentals.",
      icon: BookOpen,
      active: false,
    },
    {
      id: 2,
      title: "Webinar",
      desc: "Industry insights.",
      icon: Monitor,
      active: true, // Glow effect as per screenshot
    },
    {
      id: 3,
      title: "Workshop",
      desc: "Apply skills live.",
      icon: Briefcase,
      active: false,
    },
    {
      id: 4,
      title: "Course",
      desc: "Specialize deeply.",
      icon: Award,
      active: false,
    },
    {
      id: 5,
      title: "Internship",
      desc: "Real-world rep.",
      icon: GraduationCap,
      active: false,
    },
    {
      id: 6,
      title: "Placement",
      desc: "Launch career.",
      icon: Rocket,
      active: false,
    },
  ];

  return (
    <section id="journey" className="py-24 border-t border-white/5 bg-[#050506]/20 relative">
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full radial-glow-gold opacity-5 blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          {/* THE JOURNEY Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#0B0B0B] border border-gold/30 rounded-full px-4.5 py-1.5 text-[10px] font-black text-gold uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            THE JOURNEY
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Elevate Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A continuous pathway from your first lesson to your first paycheck.
          </p>
        </div>

        {/* Timeline (Responsive: stacks on mobile, horizontal on desktop) */}
        <div className="relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[38px] left-[8%] right-[8%] h-0.5 bg-zinc-800 z-0">
            {/* Active Gold Line - grows smoothly in sync with traveler dot */}
            <div className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_8px_rgba(229,193,88,0.5)] animate-fill-line" />
            
            {/* Glowing gold dot moving smoothly from left to right */}
            <div className="absolute top-1/2 w-4.5 h-4.5 rounded-full bg-gold border border-white/20 shadow-[0_0_15px_rgba(229,193,88,0.9)] animate-travel-dot" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const stepAnimateClasses = [
                "animate-pulse-step-1",
                "animate-pulse-step-2",
                "animate-pulse-step-3",
                "animate-pulse-step-4",
                "animate-pulse-step-5",
                "animate-pulse-step-6"
              ];
              
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  
                  {/* Step Circle Container */}
                  <div className="relative mb-6">
                    {/* Circle Node with smooth animations and hover scales */}
                    <div
                      className={`w-[76px] h-[76px] rounded-full bg-[#0E0E11] border flex items-center justify-center transition-all duration-300 relative
                      ${step.active 
                        ? "text-gold border-gold/40 shadow-[0_0_15px_rgba(229,193,88,0.25)]" 
                        : "text-slate-400 border-white/10"
                      }
                      group-hover:border-gold group-hover:scale-[1.18] group-hover:shadow-[0_0_20px_rgba(229,193,88,0.5)] group-hover:text-gold group-hover:animate-none lg:${stepAnimateClasses[idx]}`}
                    >
                      {/* Active gold background glow (mobile only, since keyframes handle desktop glow) */}
                      {step.active && (
                        <div className="absolute inset-0 rounded-full bg-gold/5 animate-pulse lg:hidden" />
                      )}
                      
                      <Icon
                        className="w-6 h-6 transition-colors duration-300 text-current"
                      />
                    </div>

                    {/* Step Number Badge - top right of circle */}
                    <span className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-gold text-black font-extrabold text-[9px] flex items-center justify-center border border-[#050506]">
                      {step.id}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-1.5">
                    <h3
                      className={`text-base font-extrabold font-outfit text-white transition-colors group-hover:text-gold group-hover:animate-none lg:${
                        [
                          "animate-text-pulse-1",
                          "animate-text-pulse-2",
                          "animate-text-pulse-3",
                          "animate-text-pulse-4",
                          "animate-text-pulse-5",
                          "animate-text-pulse-6"
                        ][idx]
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[140px] mx-auto font-medium">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
