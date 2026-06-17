import React from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Code, UserCheck, Briefcase, Target, Users } from "lucide-react";

export default function Hero({ onGetStarted }) {
  return (
    <section id="home" className="relative min-h-screen bg-[#07080C] flex items-center justify-center pt-44 pb-16 overflow-hidden">
      
      {/* Cosmic background grid & gold radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full radial-glow-gold opacity-35 blur-[80px] md:blur-[130px]" />
        <div className="absolute inset-0 bg-cosmic-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-8 text-left animate-fade-in-up">
            
            {/* Title - styled exactly as screenshot */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] font-outfit text-white">
              Learn. Build. <br />
              <span className="text-gold">
                Achieve.
              </span>
            </h1>
 
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white max-w-xl leading-relaxed font-medium">
              Transform your potential into professional success through industry-focused learning, expert mentorship, hands-on projects, internships, and career opportunities.
            </p>
 
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onGetStarted();
                }}
                className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-extrabold px-6 py-3 rounded-full transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-extrabold px-6 py-3 rounded-full transition-all duration-200 text-sm"
              >
                Partner with us
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>
 
          {/* Right Column Visual: Trajectory Interactive Card */}
          <div className="lg:col-span-6 relative flex justify-center items-center lg:mt-0 animate-fade-in" style={{ opacity: 1, transform: "none" }}>
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/10 via-transparent to-transparent blur-2xl animate-pulse"></div>
            <div className="w-full max-w-[520px] mx-auto aspect-[1/1] rounded-3xl glass-card overflow-hidden relative">
              <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-gold/12 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/[0.06] blur-3xl"></div>
              
              {/* Card Header */}
              <div className="absolute top-0 left-0 right-0 z-20 px-7 pt-6 pb-4 border-b border-border/40 bg-gradient-to-b from-surface/40 to-transparent backdrop-blur-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-left">
                    <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-gold/80">Career Trajectory</p>
                    <p className="mt-1.5 text-base font-semibold text-white leading-tight font-outfit">From Learning to Placement</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-surface/70 px-2.5 py-1 text-[10px] font-semibold text-gold">
                    <span className="size-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(229,193,88,1)]"></span>
                    Live
                  </div>
                </div>
              </div>

              {/* Curve Graph Area */}
              <div className="absolute inset-0 pt-[88px] pb-12 px-7">
                <div className="relative h-full w-full">
                  <div className="absolute left-0 right-0 border-t border-dashed border-border/20" style={{ top: "0%" }}></div>
                  <div className="absolute left-0 right-0 border-t border-dashed border-border/20" style={{ top: "33.333333%" }}></div>
                  <div className="absolute left-0 right-0 border-t border-dashed border-border/20" style={{ top: "66.666667%" }}></div>
                  <div className="absolute left-0 right-0 border-t border-dashed border-border/20" style={{ top: "100%" }}></div>
                  
                  <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.18"></stop>
                        <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M 6 92 C 22 88, 28 80, 32 72 C 38 60, 46 56, 50 50 C 58 40, 66 36, 70 32 C 80 18, 86 14, 92 8 L 92 100 L 6 100 Z" fill="url(#areaGrad)" opacity="1"></path>
                    <path d="M 6 92 C 22 88, 28 80, 32 72 C 38 60, 46 56, 50 50 C 58 40, 66 36, 70 32 C 80 18, 86 14, 92 8" fill="none" stroke="url(#arrowGrad)" strokeWidth="2"></path>
                  </svg>

                  {/* Node 1: Learning */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 group z-10" style={{ left: "8%", top: "90%" }}>
                    <div className="relative flex items-center justify-center rounded-full transition-all duration-300 size-9 bg-surface border border-gold/40 text-gold backdrop-blur-md group-hover:border-gold group-hover:bg-surface-2 group-hover:scale-110">
                      <BookOpen className="w-4 h-4 text-gold" strokeWidth={2.2} />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap">
                      <div className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide border backdrop-blur-sm bg-surface/80 text-foreground/90 border-border/60 font-sans">Learning</div>
                    </div>
                  </div>

                  {/* Node 2: Projects */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 group z-10" style={{ left: "30%", top: "72%" }}>
                    <div className="relative flex items-center justify-center rounded-full transition-all duration-300 size-9 bg-surface border border-gold/40 text-gold backdrop-blur-md group-hover:border-gold group-hover:bg-surface-2 group-hover:scale-110">
                      <Code className="w-4 h-4 text-gold" strokeWidth={2.2} />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap">
                      <div className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide border backdrop-blur-sm bg-surface/80 text-foreground/90 border-border/60 font-sans">Projects</div>
                    </div>
                  </div>

                  {/* Node 3: Mentorship */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 group z-10" style={{ left: "50%", top: "50%" }}>
                    <div className="relative flex items-center justify-center rounded-full transition-all duration-300 size-9 bg-surface border border-gold/40 text-gold backdrop-blur-md group-hover:border-gold group-hover:bg-surface-2 group-hover:scale-110">
                      <Users className="w-4 h-4 text-gold" strokeWidth={2.2} />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap">
                      <div className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide border backdrop-blur-sm bg-surface/80 text-foreground/90 border-border/60 font-sans">Mentorship</div>
                    </div>
                  </div>

                  {/* Node 4: Internships */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 group z-10" style={{ left: "70%", top: "32%" }}>
                    <div className="relative flex items-center justify-center rounded-full transition-all duration-300 size-9 bg-surface border border-gold/40 text-gold backdrop-blur-md group-hover:border-gold group-hover:bg-surface-2 group-hover:scale-110">
                      <Briefcase className="w-4 h-4 text-gold" strokeWidth={2.2} />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap">
                      <div className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide border backdrop-blur-sm bg-surface/80 text-foreground/90 border-border/60 font-sans">Internships</div>
                    </div>
                  </div>

                  {/* Node 5: Placements */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 group z-10" style={{ left: "90%", top: "10%" }}>
                    <div className="relative flex items-center justify-center rounded-full transition-all duration-300 size-11 bg-gold text-primary-foreground border-2 border-gold shadow-[0_8px_30px_-6px_oklch(0.82_0.16_85_/_0.7)] group-hover:scale-110">
                      <Target className="w-5 h-5 text-primary-foreground" strokeWidth={2.2} />
                      <span className="absolute inset-0 rounded-full animate-pulse-ring border border-gold"></span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap">
                      <div className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide border backdrop-blur-sm bg-gold/15 text-gold border-gold/40 font-sans font-bold">Placements</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-7 py-3 border-t border-border/40 bg-gradient-to-t from-surface/60 to-transparent backdrop-blur-sm flex items-center justify-between text-[10px] font-semibold tracking-wide">
                <span className="tracking-[0.18em] uppercase text-slate-500 font-sans">Outcome</span>
                <span className="text-white font-sans">
                  <span className="text-gold font-bold mr-1">95%</span>
                  Placement Success
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}