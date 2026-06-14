import React, { useState, useEffect } from "react";
import { BookOpen, Monitor, Briefcase, Award, GraduationCap, Rocket } from "lucide-react";

export default function Journey() {
  const steps = [
    { id: 1, title: "Learn", desc: "Master fundamentals.", icon: BookOpen },
    { id: 2, title: "Webinar", desc: "Industry insights.", icon: Monitor },
    { id: 3, title: "Workshop", desc: "Apply skills live.", icon: Briefcase },
    { id: 4, title: "Course", desc: "Specialize deeply.", icon: Award },
    { id: 5, title: "Internship", desc: "Real-world rep.", icon: GraduationCap },
    { id: 6, title: "Placement", desc: "Launch career.", icon: Rocket },
  ];

  const [activeStep, setActiveStep] = useState(4); // Default to index 4 (Step 5: Internship) to match your screenshot

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500); // 3.5 seconds gives breathing room for smooth active viewing
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="journey" className="py-24 bg-[#050506] relative overflow-hidden select-none">
      {/* Premium Background Ambient Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0B0B0B] border border-[#d4af37]/20 rounded-full px-4 py-1.5 text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em] mx-auto">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
            THE JOURNEY
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-outfit">
            Elevate Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto font-medium">
            A continuous pathway from your first lesson to your first paycheck.
          </p>
        </div>

        {/* ========================================== */}
        {/* TIMELINE COMPONENT BASE CONTAINER          */}
        {/* ========================================== */}
        <div className="relative w-full max-w-md mx-auto px-12 sm:px-10 lg:max-w-none flex flex-col items-center justify-center  lg:block">
          
          {/* ------------------------------------------ */}
          {/* MOBILE BACKGROUND LINE MODULE (Vertical)   */}
          {/* ------------------------------------------ */}
          <div className="absolute left-[82px] sm:left-1/2 sm:-translate-x-1/2 top-[38px] bottom-[38px] w-[2px] bg-zinc-900 lg:hidden z-0">
            {/* The active path segment filled cleanly exactly up to current item */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#d4af37] to-[#f59e0b] shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-[1000ms] cubic-bezier(0.25, 1, 0.5, 1)"
              style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* ------------------------------------------ */}
          {/* DESKTOP BACKGROUND LINE MODULE (Horizontal)*/}
          {/* ------------------------------------------ */}
          {/* Uses pixel-perfect padding layout math mapping exactly between node center vectors */}
          <div className="hidden lg:block absolute top-[38px] left-[8.33%] right-[8.33%] h-[2px] bg-zinc-900 z-0">
            {/* The active path segment matching the exact position layout of your image preview */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f59e0b] shadow-[0_0_20px_rgba(212,175,55,0.7)] transition-all duration-[1000ms] cubic-bezier(0.25, 1, 0.5, 1)"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* ========================================== */}
          {/* STEPS GRID WRAPPER                         */}
          {/* ========================================== */}
          <div className="flex flex-col sm:items-center lg:grid lg:grid-cols-6 gap-16 lg:gap-0 w-full relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <div 
                  key={idx} 
                  className="flex flex-row lg:flex-col items-center gap-6 lg:gap-0 text-left lg:text-center w-full relative"
                >
                  
                  {/* Circle Node Graphic Frame */}
                  <div className="relative flex-shrink-0 lg:mx-auto">
                    <div
                      className={`w-[76px] h-[76px] rounded-full flex items-center justify-center relative transform-gpu transition-all duration-[600ms] cubic-bezier(0.34, 1.56, 0.64, 1)
                        ${isCurrent 
                          ? "bg-[#0A0A0C] border-2 border-[#d4af37] scale-[1.18] shadow-[0_0_30px_rgba(212,175,55,0.4)] text-[#d4af37]" 
                          : isPassed
                            ? "bg-[#0A0A0C] border border-[#d4af37]/40 text-slate-300"
                            : "bg-[#050506] border border-zinc-800 text-zinc-600"
                        }
                      `}
                    >
                      {/* Gentle breathing pulsing layer inside the primary highlighted icon */}
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full bg-[#d4af37]/5 animate-pulse" />
                      )}
                      
                      <Icon className="w-6 h-6 transition-transform duration-500 text-current" />
                    </div>

                    {/* Sequential Badge Identifier */}
                    <span 
                      className={`absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full font-extrabold text-[9px] flex items-center justify-center border transition-all duration-500
                        ${isCurrent 
                          ? "bg-[#d4af37] text-black border-[#050506] scale-110 shadow-[0_0_10px_rgba(212,175,55,0.4)]" 
                          : isPassed 
                            ? "bg-zinc-800 text-slate-400 border-[#050506]"
                            : "bg-zinc-900 text-zinc-600 border-[#050506]"
                        }
                      `}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Text Typography Wrapper */}
                  <div 
                    className={`space-y-1 lg:mt-6 transition-all duration-500 transform-gpu lg:w-full lg:px-2
                      ${isCurrent 
                        ? "opacity-100 scale-105 lg:scale-100 translate-x-1 lg:translate-x-0" 
                        : "opacity-40"
                      }
                    `}
                  >
                    <h3 className={`text-base font-black tracking-wide font-outfit transition-colors duration-500
                      ${isCurrent ? "text-[#d4af37]" : "text-white"}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium max-w-[150px] lg:mx-auto leading-relaxed">
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