import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Wrench, BookOpen, Briefcase, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    num: '0 1',
    title: 'Webinars',
    desc: 'Live, expert-led sessions that open your eyes to what the industry actually runs on — AI, digital marketing, emerging careers.',
    icon: Tv,
    link: '/products'
  },
  {
    num: '0 2',
    title: 'Workshops',
    desc: 'Hands-on, small-format sessions where you build, practise and get feedback — resumes, tools, interviews, communication.',
    icon: Wrench,
    link: '/products'
  },
  {
    num: '0 3',
    title: 'Value Added Courses',
    desc: 'Structured certification batches that add depth to your degree with real projects and industry-relevant curriculum.',
    icon: BookOpen,
    link: '/products'
  },
  {
    num: '0 4',
    title: 'Internships',
    desc: 'Curated internship opportunities so your learning meets real deliverables, real teams and real accountability.',
    icon: Briefcase,
    link: '/products'
  },
  {
    num: '0 5',
    title: 'Placement Assistance',
    desc: 'Profile building, mock interviews and recruiter connections that carry you across the final mile into a career.',
    icon: Target,
    link: '/products'
  }
];

const STEP_DURATION = 1500; // Smooth 1.5s transition pacing

export default function RoadmapTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-run animation timer (advances smoothly every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, STEP_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div 
      className="py-6 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold block mb-2">
            THE STUDENT ROADMAP
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0C192E] tracking-tight">
            Five steps. <span className="text-[#C59B27] font-normal">One continuous journey.</span>
          </h2>
        </div>

        {/* Live Step Progress Indicator Pill */}
        <div className="mt-4 md:mt-0 inline-flex items-center gap-3 bg-[#FAF3E6] border border-[#E8D7B8] px-4 py-2 rounded-full text-xs font-semibold text-[#0C192E] shadow-sm relative overflow-hidden">
          {/* Active step timer countdown progress bar */}
          {!isPaused && (
            <motion.div 
              key={`step-progress-${activeStep}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: STEP_DURATION / 1000, ease: 'linear' }}
              className="absolute bottom-0 left-0 top-0 bg-[#C59B27]/15 pointer-events-none z-0"
            />
          )}
          <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] animate-pulse relative z-10" />
          <span className="relative z-10">
            STEP 0{activeStep + 1} OF 05 : <strong className="text-[#C59B27] uppercase">{STEPS[activeStep].title}</strong>
          </span>
        </div>
      </div>

      {/* Timeline Flow Container */}
      <div className="relative pt-2">
        {/* Horizontal Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-[#E2D6C1] z-0 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#C59B27] via-[#D8982D] to-[#C59B27] rounded-full shadow-[0_0_10px_rgba(197,155,39,0.5)] transform-gpu"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          />
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {STEPS.map((step, index) => {
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                onClick={() => handleStepClick(index)}
                className="relative flex flex-col items-start cursor-pointer group p-5 sm:p-6 rounded-3xl transition-colors duration-300 select-none"
              >
                {/* Smooth Moving Background Highlight */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepCardHighlight"
                    className="absolute inset-0 bg-[#FAF3E6] border border-[#C59B27]/50 rounded-3xl shadow-lg shadow-[#C59B27]/10 z-0 transform-gpu"
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  />
                )}

                <div className="relative z-10 w-full flex flex-col items-start">
                  {/* Icon Circle */}
                  <div className="relative mb-5">
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 transform-gpu ${
                        isActive
                          ? 'bg-[#0C192E] border-2 border-[#C59B27] shadow-lg shadow-[#0C192E]/20'
                          : isCompleted
                          ? 'bg-white border-2 border-[#C59B27]'
                          : 'bg-white border border-[#D9C4A0] group-hover:border-[#C59B27]'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive
                            ? 'text-[#C59B27]'
                            : isCompleted
                            ? 'text-[#C59B27]'
                            : 'text-[#8C6D23] group-hover:text-[#C59B27]'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Step Number */}
                  <span className={`text-xs font-serif block mb-1.5 tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-[#C59B27] font-bold' : 'text-[#C59B27]/80'
                  }`}>
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-serif mb-2.5 leading-snug transition-colors duration-300 ${
                    isActive ? 'text-[#0C192E] font-bold' : 'text-[#0C192E]'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-slate-700 font-medium' : 'text-slate-600'
                  }`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Smooth Animated Active Detail Banner at Bottom */}
      <div className="mt-8 relative overflow-hidden min-h-[100px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="p-6 rounded-2xl bg-[#0C192E] text-white border border-[#1E2D45] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl transform-gpu"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#162744] border border-[#C59B27]/40 flex items-center justify-center text-[#C59B27] shrink-0 font-serif font-bold text-sm">
                {STEPS[activeStep].num}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white flex items-center gap-2">
                  <span>{STEPS[activeStep].title}</span>
                  <span className="text-xs text-[#C59B27] font-sans font-normal uppercase tracking-wider">Active Stage</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  {STEPS[activeStep].desc}
                </p>
              </div>
            </div>

            <Link
              to={STEPS[activeStep].link}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C59B27] hover:bg-[#d8a82c] text-[#0C192E] text-xs font-bold uppercase tracking-wider rounded-full shrink-0 transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <span>EXPLORE {STEPS[activeStep].title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

