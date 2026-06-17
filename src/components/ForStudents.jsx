import React from "react";
import { Target, Briefcase, Users, GraduationCap, FileText, MessageSquare, Rocket } from "lucide-react";

export default function ForStudents() {
  const row1 = [
    {
      icon: Target,
      title: "Industry-Relevant Learning",
    },
    {
      icon: Briefcase,
      title: "Practical Projects",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
    },
  ];

  const row2 = [
    {
      icon: GraduationCap,
      title: "Internship Opportunities",
    },
    {
      icon: FileText,
      title: "Resume Support",
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
    },
    {
      icon: Rocket,
      title: "Placement Assistance",
    },
  ];

  return (
    <section id="students" className="py-14 border-t border-white/5 bg-[#07080C] relative overflow-hidden px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      {/* Decorative radial glows */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5 flex flex-col items-center">
          {/* FOR STUDENTS Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#07080C] border border-gold/30 rounded-full px-4.5 py-1.5 text-[10px] font-black text-gold uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
            FOR STUDENTS
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Your Career Starts Here
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to move from learner to professional — under one roof.
          </p>
        </div>

        {/* Cards container */}
        <div className="w-full space-y-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {row1.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] p-7 flex flex-col items-start text-left bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.8)] group w-full"
                >
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white font-outfit">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Row 2: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
            {row2.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] p-7 flex flex-col items-start text-left bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.8)] group w-full"
                >
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white font-outfit">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
