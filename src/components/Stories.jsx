import React from "react";
import { Star, Quote } from "lucide-react";

export default function Stories() {
  const testimonials = [
    {
      text: "Elevate didn't just teach me ML — they put me on a real team shipping models. By the time I interviewed, I had three projects in production to talk about.",
      author: "Ananya Sharma",
      role: "AI & Machine Learning",
      company: "Data Scientist - Razorpay",
      avatar: "AS",
      color: "from-amber-600 to-amber-400",
    },
    {
      text: "The mentorship was the unlock. My mentor reviewed my pull requests, prepped me for system design and helped me land an internship I couldn't crack on my own.",
      author: "Rohit Verma",
      role: "Full Stack Development",
      company: "SDE Intern - Swiggy",
      avatar: "RV",
      color: "from-amber-600 to-amber-500",
    },
    {
      text: "From RAG pipelines to fine-tuning — every concept was tied to something we actually built. The placement support made the final mile feel effortless.",
      author: "Priya Iyer",
      role: "Generative AI",
      company: "AI Engineer - Postman",
      avatar: "PI",
      color: "from-amber-500 to-amber-300",
    },
  ];

  return (
    <section id="stories" className="py-24 border-t border-white/5 bg-[#050506]/20 relative">
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full radial-glow-gold opacity-5 blur-[85px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#0A0A0C] border border-amber-500/30 rounded-full px-4.5 py-1.5 text-[10px] font-black text-amber-500 uppercase tracking-widest mx-auto">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight font-outfit leading-tight">
            Success Stories That Inspire
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Learners who walked the pathway — from first lesson to first offer.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((story, idx) => (
            <div
              key={idx}
              className="rounded-[24px] p-8 flex flex-col justify-between text-left relative overflow-hidden group bg-[#0C0B0A]/90 border border-gold/10 hover:border-gold/30 hover:bg-[#12100F]/90 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.8)]"
            >
              <div className="absolute top-6 right-6 text-slate-800/40 group-hover:text-gold/30 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div className="space-y-4 relative z-10 text-left">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-semibold">
                  "{story.text}"
                </p>
              </div>

              {/* Author footer info */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/5 relative z-10">
                {/* Custom Avatar Circle */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/40 flex items-center justify-center text-white font-black text-sm shadow-md">
                  {story.avatar}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white font-outfit">
                    {story.author}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {story.role} · <strong className="text-slate-300 font-bold">{story.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
