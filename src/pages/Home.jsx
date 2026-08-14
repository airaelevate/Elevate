import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Users, Briefcase, Compass, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import home from '../assets/home.png'

export default function Home() {
  const stats = [
    { value: '5000+', label: 'STUDENTS ENGAGED' },
    { value: '20+', label: 'CITIES ACROSS INDIA' },
    { value: 'All', label: 'DOMAINS WELCOMED' },
    { value: '100%', label: 'PRACTICAL FOCUS' }
  ];

  const features = [
    {
      title: "Skills that stay relevant",
      desc: "AI, digital, communication and career skills that the real world is hiring for right now.",
      icon: Cpu,
      linkText: "EXPLORE PROGRAMS",
      linkTo: "/products"
    },
    {
      title: "Students from every domain",
      desc: "Engineering, commerce, management, arts, science — if you are a learner, you belong here.",
      icon: Users,
      linkText: "KNOW OUR STORY",
      linkTo: "/about"
    },
    {
      title: "From classroom to career",
      desc: "We walk with you from your first webinar to your first offer letter.",
      icon: Briefcase,
      linkText: "GET STARTED",
      linkTo: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF5E9] text-slate-800 pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="text-[#C59B27] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              PLAN. PROMOTE. CONNECT. ELEVATE.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0C192E] leading-[1.1] tracking-tight">
              Beyond <br />
              your <span className="text-[#C59B27] font-serif font-normal">degree</span>
            </h1>

            <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              Elevate is an initiative by <strong className="text-[#0C192E] font-semibold">Aira Ventures Pvt Ltd</strong>, built for students who want more than marksheets. We turn academic learning into industry-ready capability through live webinars, hands-on workshops, value added courses and placement support.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#0C192E] hover:bg-[#C59B27] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                EXPLORE PROGRAMS
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="text-xs font-bold uppercase tracking-wider text-[#C59B27] hover:text-[#0C192E] border-b-2 border-[#C59B27] hover:border-[#0C192E] pb-0.5 transition-colors duration-300"
              >
                OUR STORY
              </Link>
            </div>
          </motion.div>

          {/* Hero Right Image Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative group"
          >
            {/* Decorative background glow accent */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#C59B27]/20 via-amber-100/30 to-[#0C192E]/10 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-full h-[380px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-[#E5D7BE]/50 bg-white">
              <img 
                src={home} 
                alt="Students learning together" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Overlay Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 bg-[#0A1324] border border-[#1E2D45] text-white p-4 sm:p-5 px-6 rounded-2xl shadow-2xl z-10">
              <div className="flex items-center gap-2 text-[#C59B27] text-xs font-semibold uppercase tracking-[0.2em]">
                <MapPin className="h-4 w-4 text-[#C59B27]" />
                <span>PAN-INDIA COMMUNITY</span>
              </div>
              <div className="text-lg sm:text-xl font-serif text-white mt-1.5 font-medium tracking-tight">
                Learn Smart. Grow Faster.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pan-India Stats Bar */}
      <section className="bg-[#0C192E] text-white py-14 mt-12 sm:mt-16 border-y border-[#1E2D45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center group cursor-default"
              >
                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C59B27] group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300 group-hover:text-[#C59B27] transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Choose Elevate Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 sm:w-24 bg-[#D9C4A0]"></div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#8C6D23]">
            WHY STUDENTS CHOOSE ELEVATE
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-[#D9C4A0]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#F6EFE3] hover:bg-[#FFFDF9] p-8 sm:p-10 rounded-3xl border border-[#E7D9C1] hover:border-[#C59B27] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#EFE4CF] border border-[#E0D0B6] group-hover:bg-[#C59B27] group-hover:border-[#C59B27] flex items-center justify-center mb-6 transition-all duration-300">
                  <feat.icon className="h-5 w-5 text-[#8C6D23] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0C192E] mb-4 leading-tight group-hover:text-[#8C6D23] transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              <Link
                to={feat.linkTo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#C59B27] group-hover:text-[#8C6D23] transition-colors duration-300 mt-2"
              >
                <span>{feat.linkText}</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F1E7D3] border border-[#E5D7BE] hover:border-[#C59B27] rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C192E] mb-6">
            Students across India are already <span className="text-[#C59B27] font-normal">elevating</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From metro campuses to tier-3 towns, our community learns together in one place — every session designed to be practical, current and free of fluff.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C59B27] hover:bg-[#0C192E] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            COME ON BOARD
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
