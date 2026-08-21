import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Star, Sparkles, UserCheck } from 'lucide-react';
import RoadmapTimeline from '../components/RoadmapTimeline';

export default function About() {
  const testimonials = [
    {
      id: 1,
      name: 'SREEVIDYA V M',
      initials: 'SV',
      role: 'HOD, Department of Management Studies',
      college: 'Dhanwantari Academy for Management Studies',
      program: 'FDP on AI in Teaching & Learning',
      rating: 5,
      avatar: null,
      quote: 'We extend our heartfelt gratitude to AIRA Elevate for collaborating with us and conducting such an insightful and engaging Faculty Development Programme. Your expertise, dedication, and valuable sessions have enriched our knowledge and inspired us to explore innovative AI tools in teaching and learning.',
      badge: 'Faculty Feedback',
      category: 'Faculty'
    },
    {
      id: 2,
      name: 'FAJNA',
      initials: 'FJ',
      role: 'B.Com (Hons) Learner',
      college: 'SRCC, Delhi University',
      program: 'Value Added Certification',
      rating: 5,
      avatar: null,
      quote: 'Thank you so much to the HR Leaders & Team Elevate! 💙✨ I’m truly grateful for this special appreciation and recognition. It was a wonderful session, and I really enjoyed being an interactive part of it. Thank you for creating such an engaging learning experience! 🚀🎓',
      badge: 'Interactive Learner',
      category: 'Student'
    },
    {
      id: 3,
      name: 'Dr.Karthikeyan R',
      initials: 'KR',
      role: 'Commerce',
      college: 'Christ University, Bengaluru',
      program: 'Placement Assistance Cohort',
      rating: 5,
      avatar: null,
      quote: 'The session was highly informative and engaging. It provided students with valuable insights into career development, industry expectations, and opportunities beyond academics. The resource person presented the concepts clearly with practical examples, making the session useful and interactive.',
      badge: 'Placement Success',
      category: 'Student'
    },
    {
      id: 4,
      name: 'Dr.Prakash Selvam',
      initials: 'PS',
      role: 'Commerce',
      college: 'Sona College of Technology, Salem',
      program: 'Industry Internship Program',
      rating: 5,
      avatar: null,
      quote: 'The students participated in a free webinar on “Digital Marketing & AI Skills” conducted by Elevate. The resource person delivered an informative and detailed session, providing valuable insights and practical knowledge to the students.',
      badge: 'Internship Alumnus',
      category: 'Intern'
    },
    {
      id: 5,
      name: 'Sneha Kulkarni',
      initials: 'SK',
      role: 'M.Sc Data Science',
      college: 'Pune University',
      program: 'Data Analytics Masterclass',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300',
      quote: 'The live sessions felt like sitting in a masterclass with senior practitioners. Zero fluff, 100% actionable skills, workflows and industry tools.',
      badge: 'Workshop Graduate',
      category: 'Student'
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      initials: 'AM',
      role: 'BA Economics',
      college: 'Mumbai University',
      program: 'Digital Career Skills',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
      quote: 'Coming from a non-tech background, I was intimidated by modern digital tools. Elevate made tech skills approachable and immediately applicable.',
      badge: 'Certified Learner',
      category: 'Student'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF5E9] text-slate-800 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B27] font-semibold mb-3 block"
          >
            ABOUT THE COMPANY
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#0C192E] leading-[1.15] sm:leading-tight max-w-4xl tracking-tight"
          >
            We exist for the gap between a <span className="text-[#C59B27] font-serif font-normal">degree</span> and a career.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-10 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            <p>
              Elevate is an initiative of <strong className="text-[#0C192E] font-semibold">Aira Ventures Pvt Ltd</strong>, created to make students genuinely employable in a world that changes faster than syllabi. We plan learning journeys, promote awareness of new-age skills, connect students with practitioners, and elevate them into roles they are proud of.
            </p>
            <p>
              We work with colleges, departments and individual learners across India and across every domain — engineering, commerce, management, science and the arts. Every program we run is built on one test: <strong className="text-[#0C192E] font-semibold">will this help a student do something they could not do last week?</strong>
            </p>
          </motion.div>
        </section>

        {/* Roadmap Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <RoadmapTimeline />
        </section>

        {/* Our Vision & Our Mission */}
        <section className="py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision - Dark Navy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0C192E] border border-[#1E2D45] text-white shadow-xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 hover:border-[#C59B27] hover:shadow-2xl hover:shadow-[#C59B27]/10 group cursor-pointer"
          >
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#172740] border border-[#2B4063] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] transition-all duration-300">
                <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-[#C59B27] group-hover:text-[#0C192E] transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3 sm:mb-4 group-hover:text-[#C59B27] transition-colors duration-300">Our Vision</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                To be a lasting part of every student’s journey — the companion that stands beside them from their first year of college to their first day at work, and helps the coming generation stay skilled in a real world that keeps rewriting its rules.
              </p>
            </div>
          </motion.div>

          {/* Mission - Cream Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE1D0] shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 hover:border-[#C59B27] hover:shadow-xl group cursor-pointer"
          >
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF3E6] border border-[#E8D7B8] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] transition-all duration-300">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#C59B27] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0C192E] mb-3 sm:mb-4 group-hover:text-[#8C6D23] transition-colors duration-300">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To deliver accessible, practical and current learning — webinars, workshops, value added courses, internships and placement assistance — so that every student, from every domain and every corner of India, graduates with skills the industry is actively looking for.
              </p>
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-12 sm:py-16 lg:py-20">
          {/* Header & Stat Pills */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B27] font-semibold mb-2 sm:mb-3">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span>STUDENT & FACULTY STORIES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0C192E] tracking-tight leading-tight">
                What Our <span className="text-[#C59B27] font-normal">Learners & Educators</span> Say
              </h2>
            </div>

            <div className="mt-2 md:mt-0 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FAF3E6] border border-[#E8D7B8] text-[11px] sm:text-xs font-semibold text-[#0C192E] flex items-center gap-1.5 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#C59B27] text-[#C59B27]" />
                <span>4.9 / 5 Rating</span>
              </div>
              <div className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FAF3E6] border border-[#E8D7B8] text-[11px] sm:text-xs font-semibold text-[#0C192E] flex items-center gap-1.5 shadow-sm">
                <UserCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>5,000+ Students Impacted</span>
              </div>
            </div>
          </div>

          {/* DUAL CONTINUOUS INFINITE MARQUEE TRACKS */}
          <div className="mt-8 sm:mt-12 space-y-6">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6D23] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>CONTINUOUS FEEDBACK STREAM</span>
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 hidden sm:inline">
                Hover to pause scrolling
              </span>
            </div>

            {/* Row 1: Forward Infinite Marquee */}
            <div className="pause-on-hover overflow-hidden relative py-2">
              {/* Side Overlays for Smooth Edge Fade */}
              <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FBF5E9] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FBF5E9] to-transparent z-10 pointer-events-none"></div>

              <div className="animate-marquee flex gap-4 sm:gap-6">
                {[...testimonials, ...testimonials].map((item, idx) => (
                  <div
                    key={`r1-${item.id}-${idx}`}
                    className="w-[280px] xs:w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE1D0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#C59B27] text-[#C59B27]" />
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6D23] bg-[#FAF3E6] px-2.5 py-0.5 rounded-full border border-[#E8D7B8]">
                          {item.badge}
                        </span>
                      </div>

                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-serif">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3.5 border-t border-[#F5ECDC]">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#D9C4A0] shadow-sm shrink-0"
                        />
                      ) : (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0C192E] text-[#C59B27] flex items-center justify-center font-bold text-xs border border-[#2B4063] shadow-sm shrink-0">
                          {item.initials}
                        </div>
                      )}
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-serif font-bold text-[#0C192E] truncate group-hover:text-[#C59B27] transition-colors">
                          {item.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 truncate">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}


