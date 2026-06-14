import React from "react";
import { Cpu, Shield, Bot, Palette, Rocket, TrendingUp, ArrowRight } from "lucide-react";

export default function Programs() {
  const tracks = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      desc: "Master AI fundamentals, neural networks, and intelligent systems shaping modern industries.",
      duration: "8 Weeks",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      desc: "Learn to protect systems, networks, and data against evolving cyber threats and attacks.",
      duration: "8 Weeks",
    },
    {
      icon: Bot,
      title: "IoT & Robotics",
      desc: "Build connected devices, automation systems, and smart robotics for real-world applications.",
      duration: "8 Weeks",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      desc: "Create visual identities, digital assets, and compelling designs for brands and products.",
      duration: "8 Weeks",
    },
    {
      icon: Rocket,
      title: "Digital Marketing",
      desc: "Drive growth with SEO, social media, content strategy, and data-driven campaigns.",
      duration: "8 Weeks",
    },
    {
      icon: TrendingUp,
      title: "Stock Market",
      desc: "Understand trading, technical analysis, and investment strategies for financial markets.",
      duration: "8 Weeks",
    },
  ];

  return (
    <section id="programs" className="py-24 border-t border-white/5 bg-[#0B0B0B] relative">
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[90px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          {/* LEARNING PROGRAMS Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#0B0B0B] border border-gold/30  hover:shadow- rounded-full px-4.5 py-1.5 text-[10px] font-black text-gold uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            LEARNING PROGRAMS
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Tracks built for the industry's next decade
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Six flagship programs designed with practitioners — each one ends with a portfolio you can defend and a network that hires.
          </p>
        </div>

        {/* Flagship Tracks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="rounded-[24px] p-8 flex flex-col text-left group hover:scale-[1.01] bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 hover:shadow-lg hover:shadow-gold/40 transition-all duration-300 relative shadow-[0_8px_30px_rgb(0,0,0,0.8)]"
              >
                {/* Duration Badge - top right of card */}
                <div className="absolute top-8 right-8 bg-[#1A1613] text-[10px] font-bold text-gold/80 px-3 py-1 rounded-full border border-gold/20">
                  {track.duration}
                </div>

                {/* Accent Icon - circular with gold border */}
                <div className="w-12 h-12 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 font-outfit">
                  {track.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow font-medium">
                  {track.desc}
                </p>

                {/* Explore link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-gold hover:text-gold/80 transition-colors duration-200"
                >
                  Explore Program
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
