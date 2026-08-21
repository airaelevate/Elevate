import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Users, Briefcase, Compass, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import home from '../assets/home.png';
import RoadmapTimeline from '../components/RoadmapTimeline';

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
    <div className="min-h-screen bg-[#FBF5E9] text-slate-800 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#C59B27]/10 border border-[#C59B27]/30 text-[#8C6D23] rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5 w-fit">
              <Compass className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>CAREER ACCELERATION INITIATIVE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#0C192E] leading-[1.15] sm:leading-[1.12] tracking-tight">
              Beyond <br className="hidden sm:inline" />
              your <span className="text-[#C59B27] font-serif font-bold">degree</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Elevate is an initiative by <strong className="text-[#0C192E] font-semibold">Aira Ventures Pvt Ltd</strong>, built for students who want more than marksheets. We turn academic learning into industry-ready capability through live webinars, hands-on workshops, value added courses and placement support.
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 bg-gradient-to-r from-[#C2781B] via-[#D8982D] to-[#ECC262] text-[#0C192E] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="h-4 w-4 text-[#0C192E] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59B27] hover:text-[#0C192E] border-b-2 border-[#C59B27] hover:border-[#0C192E] py-2 sm:py-0.5 transition-colors duration-300 text-center"
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
            className="lg:col-span-6 xl:col-span-7 relative group mt-4 lg:mt-0"
          >
            {/* Decorative background glow accent */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#C59B27]/20 via-amber-100/30 to-[#0C192E]/10 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-full h-[240px] xs:h-[280px] sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E5D7BE]/60 bg-white relative">
              <img 
                src={home} 
                alt="Students learning together" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Overlay Badge (Mobile safe positioning) */}
            <div className="absolute bottom-3 right-3 sm:-bottom-5 sm:right-6 lg:-right-4 bg-[#0A1324] border border-[#1E2D45] text-white p-3.5 sm:p-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl shadow-2xl z-10 max-w-[calc(100%-1.5rem)] sm:max-w-none">
              <div className="flex items-center gap-2 text-[#C59B27] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em]">
                <MapPin className="h-3.5 w-3.5 text-[#C59B27] shrink-0" />
                <span className="truncate">PAN-INDIA COMMUNITY</span>
              </div>
              <div className="text-base sm:text-xl font-serif text-white mt-1 font-medium tracking-tight truncate">
                Learn Smart. Grow Faster.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pan-India Stats Bar */}
      <section className="bg-[#0C192E] text-white py-10 sm:py-14 my-10 sm:my-16 lg:my-20 border-y border-[#1E2D45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl hover:bg-[#12213a] transition-all duration-300 group cursor-default"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#C59B27] group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-1.5 sm:mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-300 group-hover:text-[#C59B27] transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Students Choose Elevate Section */}
      <section className="py-10 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 text-center">
          <div className="h-[1px] w-8 sm:w-16 lg:w-24 bg-[#D9C4A0]"></div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C6D23]">
            WHY STUDENTS CHOOSE ELEVATE
          </span>
          <div className="h-[1px] w-8 sm:w-16 lg:w-24 bg-[#D9C4A0]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#F6EFE3] hover:bg-[#FFFDF9] p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#E7D9C1] hover:border-[#C59B27] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EFE4CF] border border-[#E0D0B6] group-hover:bg-[#C59B27] group-hover:border-[#C59B27] flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300">
                  <feat.icon className="h-5 w-5 text-[#8C6D23] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-[#0C192E] mb-3 sm:mb-4 leading-tight group-hover:text-[#8C6D23] transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              <Link
                to={feat.linkTo}
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#C59B27] group-hover:text-[#8C6D23] transition-colors duration-300 mt-2"
              >
                <span>{feat.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-6 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F1E7D3] border border-[#E5D7BE] hover:border-[#C59B27] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0C192E] mb-4 sm:mb-6 leading-tight">
            Students across India are already <span className="text-[#C59B27] font-normal">elevating</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            From back benchers to toppers in the front seat, our community learns together in one place — every session designed to be practical, current and free of fluff.
          </p>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C2781B] via-[#D8982D] to-[#ECC262] text-[#0C192E] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-xl hover:brightness-105 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>COME ON BOARD</span>
            <ArrowRight className="h-4 w-4 text-[#0C192E] group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
