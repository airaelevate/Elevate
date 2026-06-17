import React from "react";
import { Users, Briefcase, Link, TrendingUp } from "lucide-react";

export default function ForCompanies() {
  const cards = [
    {
      icon: Users,
      title: "Discover Skilled Candidates",
      desc: "Hire from a pre-vetted, project-tested talent pool of professionals trained on current industry stacks and interview-ready from day one.",
    },
    {
      icon: Briefcase,
      title: "Offer Internship Opportunities",
      desc: "Build a continuous funnel of trained interns who align with your tech stack and contribute meaningfully from their first week.",
    },
    {
      icon: Link,
      title: "Build Talent Pipelines",
      desc: "Co-create programs mapped to your hiring rubric, producing candidates who fit your culture and skill expectations from day one.",
    },
    {
      icon: TrendingUp,
      title: "Support Workforce Development",
      desc: "Upskill teams with custom corporate tracks built around your projects and roadmap, closing skill gaps without disrupting delivery.",
    },
  ];

  return (
    <section id="companies" className="py-14 border-t border-white/5 bg-[#07080C]/10 relative overflow-hidden px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      {/* Decorative radial glows */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5 flex flex-col items-center">
          {/* FOR COMPANIES Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#0A0A0C] border border-gold rounded-full px-4.5 py-1.5 text-[10px] font-black text-gold uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
            FOR COMPANIES
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-black text-white tracking-tight font-outfit leading-tight">
            Access Emerging Talent
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
            A continuous, pre-vetted pipeline of project-tested talent — built around your hiring rubric.
          </p>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-[20px] p-7 flex flex-col items-start text-left bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.8)] group w-full"
              >
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-white mb-3 font-outfit leading-tight group-hover:text-gold transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
