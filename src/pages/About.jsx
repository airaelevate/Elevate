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
      quote: 'The session was highly informative and engaging. It provided students with valuable insights into career development, industry expectations, and opportunities beyond academics. The resource person presented the concepts clearly with practical examples, making the session useful and interactive. Overall, the session was well organized and highly beneficial in enhancing students’ career awareness and placement preparedness.Special thanks to you and the entire AIRA Elevate team for organizing such a valuable and impactful session for our students.',
      badge: 'Placement Success',
      category: 'Student'
    },
    {
      id: 4,
      name: 'Dr.Prakash Selvam',
      initials: 'PS',
      role: 'Commerce',
      college: 'Sona College of Technology,Salem',
      program: 'Industry Internship Program',
      rating: 5,
      avatar: null,
      quote: 'The students of the Department of Commerce with Computer Applications, Arul Anandar College, Karumathur, Madurai, participated in a free webinar on “Digital Marketing & AI Skills” conducted by Elevate. The resource person delivered an informative and detailed session on digital marketing and essential AI skills, providing valuable insights and practical knowledge to the students.',
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
    <div className="min-h-screen bg-[#FBF5E9] text-slate-800 pt-28 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3"
          >
            ABOUT THE COMPANY
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#0C192E] leading-tight max-w-4xl tracking-tight"
          >
            We exist for the gap between a <span className="text-[#C59B27] font-serif font-normal">degree</span> and a career.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10 text-slate-600 text-sm sm:text-base leading-relaxed"
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
        <section className="py-12  border-[#EAE1D0]">
          <RoadmapTimeline />
        </section>

        {/* Our Vision & Our Mission */}
        <section className="py-16  border-[#EAE1D0] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision - Dark Navy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0C192E] border border-[#1E2D45] text-white shadow-xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:border-[#C59B27] hover:shadow-2xl hover:shadow-[#C59B27]/10 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#172740] border border-[#2B4063] flex items-center justify-center mb-6 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] transition-all duration-300">
                <Compass className="h-6 w-6 text-[#C59B27] group-hover:text-[#0C192E] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#C59B27] transition-colors duration-300">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be a lasting part of every student’s journey — the companion that stands beside them from their first year of college to their first day at work, and helps the coming generation stay skilled in a real world that keeps rewriting its rules.
              </p>
            </div>
          </motion.div>

          {/* Mission - Cream Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE1D0] shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:border-[#C59B27] hover:shadow-xl group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FAF3E6] border border-[#E8D7B8] flex items-center justify-center mb-6 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] transition-all duration-300">
                <Target className="h-6 w-6 text-[#C59B27] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0C192E] mb-4 group-hover:text-[#8C6D23] transition-colors duration-300">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver accessible, practical and current learning — webinars, workshops, value added courses, internships and placement assistance — so that every student, from every domain and every corner of India, graduates with skills the industry is actively looking for.
              </p>
            </div>
          </motion.div>
        </section>

        {/* UPGRADED TESTIMONIALS SECTION */}
        <section className="py-20  border-[#EAE1D0]">
          {/* Header & Stat Pills */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                STUDENT & FACULTY STORIES
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C192E] tracking-tight">
                What Our <span className="text-[#C59B27] font-normal">Learners & Educators</span> Say
              </h2>
            </div>

            <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-full bg-[#FAF3E6] border border-[#E8D7B8] text-xs font-semibold text-[#0C192E] flex items-center gap-1.5 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#C59B27] text-[#C59B27]" />
                <span>4.9 / 5 Rating</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#FAF3E6] border border-[#E8D7B8] text-xs font-semibold text-[#0C192E] flex items-center gap-1.5 shadow-sm">
                <UserCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>5,000+ Students Impacted</span>
              </div>
            </div>
          </div>


          {/* DUAL CONTINUOUS INFINITE MARQUEE TRACKS */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                CONTINUOUS FEEDBACK STREAM
              </span>
              <span className="text-xs text-slate-500 ">
                Hover to pause scrolling
              </span>
            </div>

            {/* Row 1: Forward Infinite Marquee */}
            <div className="pause-on-hover overflow-hidden relative py-2">
              {/* Side Overlays for Smooth Edge Fade */}
              <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FBF5E9] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FBF5E9] to-transparent z-10 pointer-events-none"></div>

              <div className="animate-marquee flex gap-6">
                {[...testimonials, ...testimonials].map((item, idx) => (
                  <div
                    key={`r1-${item.id}-${idx}`}
                    className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-6 border border-[#EAE1D0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#C59B27] text-[#C59B27]" />
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6D23] bg-[#FAF3E6] px-2.5 py-0.5 rounded-full border border-[#E8D7B8]">
                          {item.badge}
                        </span>
                      </div>

                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5  font-serif">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3.5  border-[#F5ECDC]">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#D9C4A0] shadow-sm shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#0C192E] text-[#C59B27] flex items-center justify-center font-bold text-xs border border-[#2B4063] shadow-sm shrink-0">
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


