import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Presentation, Laptop, UserCheck, Briefcase, Award } from "lucide-react";

const layers = [
  {
    icon: BookOpen,
    title: "Learning Programs",
    color: "purple",
    desc: "Structured tracks designed with industry experts, aligned to real hiring needs. Progress from fundamentals to job-ready skills with clear milestones and hands-on practice.",
  },
  {
    icon: Presentation,
    title: "Expert Webinars",
    color: "blue",
    desc: "Live sessions with industry professionals and domain experts. Stay updated with emerging trends, career insights, and real-world perspectives from the field.",
  },
  {
    icon: Laptop,
    title: "Industry Workshops",
    color: "green",
    desc: "Hands-on workshops led by practitioners from leading companies. Focus on real-world workflows, problem-solving, and practical implementation through guided projects.",
  },
  {
    icon: UserCheck,
    title: "Mentorship",
    color: "orange",
    desc: "1:1 guidance from senior engineers, researchers, and product leaders. Get personalized feedback, career advice, and support throughout your entire learning journey.",
  },
  {
    icon: Briefcase,
    title: "Internships",
    color: "amber",
    desc: "Curated placements at startups, enterprises, and research labs. Gain practical experience in real working environments and build your professional portfolio.",
  },
  {
    icon: Award,
    title: "Placement Opportunities",
    color: "indigo",
    desc: "Connect with employers based on your progress, projects, and demonstrated skills. High-performing learners get direct access to hiring opportunities and career support.",
  },
];

const colorConfig = {
  purple: {
    badgeText: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    iconBorder: "border-purple-500/30 text-purple-400",
    hoverBg: "hover:bg-purple-950/20 hover:border-purple-500/40"
  },
  blue: {
    badgeText: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    iconBorder: "border-blue-500/30 text-blue-400",
    hoverBg: "hover:bg-blue-950/20 hover:border-blue-500/40"
  },
  green: {
    badgeText: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    iconBorder: "border-emerald-500/30 text-emerald-400",
    hoverBg: "hover:bg-emerald-950/20 hover:border-emerald-500/40"
  },
  orange: {
    badgeText: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    iconBorder: "border-orange-500/30 text-orange-400",
    hoverBg: "hover:bg-orange-950/20 hover:border-orange-500/40"
  },
  amber: {
    badgeText: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    iconBorder: "border-amber-500/30 text-amber-400",
    hoverBg: "hover:bg-amber-950/20 hover:border-amber-500/40"
  },
  indigo: {
    badgeText: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    iconBorder: "border-indigo-500/30 text-indigo-400",
    hoverBg: "hover:bg-indigo-950/20 hover:border-indigo-500/40"
  }
};

export default function Ecosystem() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.1 });

  return (
    <section id="ecosystem" className="py-10 border-t border-white/5 bg-[#07080C] relative overflow-hidden px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      {/* Decorative Radial Background Lights */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* ── SECTION HEADER WITH SLOW PREMIUM ENTRY ── */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-10 space-y-5"
        >
          {/* Section Indicator Badge */}
          <div className="inline-flex items-center  gap-1.5 bg-[radial-gradient(circle_at_center,#15130d_100%,#07080b_100%,#020304_100%)] pointer-events-none border border-gold/30 rounded-full px-10 py-4 text-[15px] font-black text-[#F3BA26] uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            WHY ELEVATE
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            An ecosystem, not a course catalog
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed max-w-2xl mx-auto font-medium">
            Six interlocking layers that compound — learning that leads to projects, mentorship that leads to internships, internships that lead to placements.
          </p>
        </motion.div>

        {/* ── LAYERS INTERACTIVE GRID TRACK ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            const cfg = colorConfig[layer.color];
            return (
              <div
                key={idx}
                className="rounded-[24px] p-8 flex flex-col text-left group hover:scale-[1.01] bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 hover:shadow-md hover:shadow-gold/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.8)]"
              >
                {/* Icon Box - Circular with Gold border as per screenshot */}
                <div className="w-12 h-12 rounded-full bg-[#1A1613] border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 font-outfit">
                  {layer.title}
                </h3>
                
                <p className="text-sm text-[#f8f8f8] leading-relaxed font-medium">
                  {layer.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}