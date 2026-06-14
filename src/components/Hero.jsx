import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroimage from '../assets/hero-journey.jpg';

export default function Hero({ onGetStarted }) {
  return (
    <section id="home" className="relative min-h-screen bg-[#060607] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      
      {/* Subtle Background Glow Base */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[25%] right-[5%] w-[600px] h-[600px] rounded-full bg-amber-500/[0.03] blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================== */}
          {/* LEFT COLUMN CONTENT: TEXT & CTA BUTTONS    */}
          {/* ========================================== */}
          <div className="lg:col-span-6 space-y-7 text-left max-w-xl">
            
            {/* Title - Exact Typographic Weight & Line-Height Match */}
            <h1 className="text-5xl sm:text-6xl md:text-[5.25rem] font-black tracking-tight leading-[1.05] font-outfit text-white">
              Learn. Build. <br />
              <span className="text-[#f1be38]">
                Achieve.
              </span>
            </h1>
 
            {/* Description Description Text Styling */}
            <p className="text-sm sm:text-base md:text-[1.05rem] text-zinc-400 leading-relaxed font-medium tracking-wide">
              Transform your potential into professional success through industry-focused learning, expert mentorship, hands-on projects, internships, and career opportunities.
            </p>
 
            {/* Action Buttons: Solid Vibrant Gold & Matte Bordered Dark Mode */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onGetStarted();
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#f1be38] hover:bg-[#e0b02f] text-black font-extrabold px-7 py-3.5 rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(241,190,56,0.25)] text-sm group"
              >
                Get Started 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/20 hover:bg-zinc-900/50 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
              >
                Partner With Us 
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
 
          {/* ========================================== */}
          {/* RIGHT COLUMN CONTENT: HERO STAIRCASE IMAGE */}
          {/* ========================================== */}
          <div className="lg:col-span-6 flex justify-center items-center mt-12 lg:mt-0">
            {/* Scaled frame box ensuring image details drop into perfect symmetry */}
            <div className="w-full max-w-[620px] relative select-none pointer-events-none">
              
              <img 
                src={heroimage} 
                alt="Staircase journey trajectory visual" 
                className="w-full h-auto object-contain block mx-auto opacity-95" 
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}