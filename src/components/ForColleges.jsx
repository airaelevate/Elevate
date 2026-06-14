import React from "react";

export default function ForColleges() {
  const points = [
    {
      num: "01",
      title: "Industry Connect Programs",
      desc: "Bring real practitioners into your campus.",
    },
    {
      num: "02",
      title: "Career Development Initiatives",
      desc: "Mentorship, projects and capstones.",
    },
    {
      num: "03",
      title: "Workshops and Seminars",
      desc: "High-signal sessions on emerging tech.",
    },
    {
      num: "04",
      title: "Internship Opportunities",
      desc: "Curated pipelines for your students.",
    },
    {
      num: "05",
      title: "Placement Readiness Training",
      desc: "Structured prep that compounds hiring outcomes.",
    },
  ];

  return (
    <section id="colleges" className="py-24 border-t border-white/5 bg-[#08090D] relative overflow-hidden px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      {/* Decorative radial glows */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full radial-glow-gold opacity-5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-15%] w-[400px] h-[400px] rounded-full radial-glow-gold opacity-5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Left Column: Heading and CTA */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left space-y-6 lg:sticky lg:top-24">
            {/* FOR COLLEGES Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#0A0A0C] border border-amber-500/30 rounded-full px-4.5 py-1.5 text-[10px] font-black text-amber-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              FOR COLLEGES
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
              Build Industry-Ready Talent
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
              Partner with us to bring industry-grade learning, mentorship and placement infrastructure directly to your campus.
            </p>

            <button className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-[#080706] font-extrabold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(229,193,88,0.25)] hover:scale-105 active:scale-95 group">
              Become a Partner College
              <span className="font-black transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Right Column: Vertical List Stack */}
          <div className="w-full lg:w-7/12 flex flex-col space-y-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-5 md:p-6 rounded-[16px] bg-[#0E0E11]/40 border border-white/5 hover:border-gold/30 hover:bg-[#12100F]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group hover:scale-[1.01]"
              >
                {/* Number Box */}
                <div className="text-gold font-extrabold text-lg md:text-xl font-outfit select-none">
                  {point.num}
                </div>
                
                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-white font-extrabold text-sm md:text-base font-outfit group-hover:text-gold transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm font-medium mt-1">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
