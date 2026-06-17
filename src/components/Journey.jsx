import React, { useState, useEffect } from "react";
import { BookOpen, Monitor, Briefcase, Award, GraduationCap, Rocket } from "lucide-react";

export default function JourneyTimeline() {
  const steps = [
    { id: 1, title: "Learn", desc: "Master fundamentals.", icon: BookOpen },
    { id: 2, title: "Webinar", desc: "Industry insights.", icon: Monitor },
    { id: 3, title: "Workshop", desc: "Apply skills live.", icon: Briefcase },
    { id: 4, title: "Course", desc: "Specialize deeply.", icon: Award },
    { id: 5, title: "Internship", desc: "Real-world rep.", icon: GraduationCap },
    { id: 6, title: "Placement", desc: "Launch career.", icon: Rocket },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Total loop is 12000ms (12s). Divided by 6 steps = exactly 2000ms per step stage.
  // This perfectly syncs the active highlights with the CSS keyframe speed.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1300); 
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="journey" className="py-10 bg-[#07080C] text-white relative overflow-hidden select-none">
      
      {/* Native keyframe injections for completely fluid, non-stop constant speed loop mechanics */}
      <style>{`
        @keyframes continuousLineHorizontal {
          0% { width: 0%; left: 0%; }
          100% { width: 100%; left: 0%; }
        }
        @keyframes continuousDotHorizontal {
          0% { left: 0%; }
          100% { left: 100%; }   
        }
        @keyframes continuousLineVertical {
          0% { height: 0%; top: 0%; }
          100% { height: 100%; top: 0%; }
        }
        @keyframes continuousDotVertical {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-line-run-h {
          animation: continuousLineHorizontal 8s linear infinite;
        }
        .animate-dot-run-h {
          animation: continuousDotHorizontal 8s linear infinite;
        }
        .animate-line-run-v {
          animation: continuousLineVertical 12s linear infinite;
        }
        .animate-dot-run-v {
          animation: continuousDotVertical 12s linear infinite;
        }
      `}</style>

      {/* Background Ambient Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#F5C143]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F5C143]/10 border border-[#F5C143]/20 rounded-full px-4 py-1.5 text-[11px] font-bold text-[#F5C143] uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-[#F5C143] rounded-full animate-pulse" />
            THE JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-outfit">
            Elevate Journey
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-medium">
            A continuous pathway from your first lesson to your first paycheck.
          </p>
        </div>

        {/* Timeline Component Frame */}
        <div className="relative w-full max-w-md mx-auto px-12 sm:px-10 lg:max-w-none flex flex-col items-center justify-center lg:block">
          
          {/* ────────────────────────────────────────────────────────── */}
          {/* VERTICAL TIMELINE MODULE (Mobile & Tablet screens)         */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="absolute left-[82px] sm:left-1/2 sm:-translate-x-1/2 top-[38px] bottom-[38px] w-[2px] bg-zinc-900 lg:hidden z-0">
            {/* Running Fill Line */}
            <div className="absolute top-0 left-0 w-full bg-[#F5C143] shadow-[0_0_15px_#F5C143] animate-line-run-v" />
            {/* Running Head Point */}
            <div className="absolute left-1/2 w-3 h-3 rounded-full bg-[#F5C143] shadow-[0_0_14px_5px_#F5C143] -translate-x-1/2 -translate-y-1/2 animate-dot-run-v" />
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* HORIZONTAL TIMELINE MODULE (Desktop screens)               */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="hidden lg:block absolute top-[38px] left-[8.33%] right-[8.33%] h-[2px] bg-zinc-900/80 z-0">
            {/* Running Fill Line */}
            <div className="absolute top-0 left-0 h-full bg-[#F5C143] shadow-[0_0_20px_#F5C143] animate-line-run-h" />
            {/* Running Head Point */}
            <div className="absolute top-1/2 w-3 h-3 rounded-full bg-[#F5C143] shadow-[0_0_14px_5px_#F5C143] -translate-y-1/2 -translate-x-1/2 animate-dot-run-h" />
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* TIMELINE INTERACTIVE NODES                                 */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="flex flex-col sm:items-center lg:grid lg:grid-cols-6 gap-16 lg:gap-0 w-full relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <div 
                  key={step.id} 
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-row lg:flex-col items-center gap-6 lg:gap-0 text-left lg:text-center w-full relative group cursor-pointer"
                >
                  {/* Step Icon Node Frame */}
                  <div className="relative flex-shrink-0 lg:mx-auto">
                    <div
                      className={`w-[76px] h-[76px] rounded-full flex items-center justify-center relative transform-gpu transition-all duration-500 ease-out
                        group-hover:scale-115 group-hover:border-[#F5C143] group-hover:shadow-[0_0_25px_rgba(245,193,67,0.2)]
                        ${isCurrent 
                          ? "bg-[#050506] border-2 border-[#F5C143] scale-110 shadow-[0_0_35px_rgba(245,193,67,0.35)] text-[#F5C143]" 
                          : isPassed
                            ? "bg-[#050506] border border-[#F5C143]/60 text-[#F5C143]/90"
                            : "bg-[#050506] border border-zinc-800 text-zinc-600 group-hover:text-zinc-200"
                        }
                      `}
                    >
                      {/* Active Node Pulse Ring */}
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full bg-[#F5C143]/10 animate-pulse duration-5000" />
                      )}
                      
                      <Icon className="w-6 h-6 text-current transition-transform duration-300 group-hover:rotate-6" />
                    </div>

                    {/* Numerical Badge Counter */}
                    <span 
                      className={`absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full font-black text-[9px] flex items-center justify-center border transition-all duration-500
                        group-hover:border-[#F5C143]/40
                        ${isCurrent 
                          ? "bg-[#F5C143] text-black border-[#050506] scale-105" 
                          : isPassed 
                            ? "bg-zinc-800 text-zinc-300 border-[#050506]"
                            : "bg-zinc-900 text-zinc-600 border-[#050506]"
                        }
                      `}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Descriptive Typography Text Block */}
                  <div 
                    className={`space-y-1 lg:mt-6 transition-all duration-500 transform-gpu lg:w-full lg:px-2
                      group-hover:opacity-100 group-hover:translate-y-[-2px]
                      ${isCurrent 
                        ? "opacity-100 scale-100 translate-x-0" 
                        : "opacity-35"
                      }
                    `}
                  >
                    <h3 className={`text-base font-bold tracking-wide font-outfit transition-colors duration-500
                      group-hover:text-[#F5C143]
                      ${isCurrent ? "text-[#F5C143]" : "text-zinc-100"}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium max-w-[140px] lg:mx-auto leading-relaxed group-hover:text-zinc-300">
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