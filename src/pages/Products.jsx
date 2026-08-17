import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MessageCircle, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { programsData } from '../data/programsData';
import StudentEnquiryModal from './StudentEnquiryModal';
import career from '../assets/careerlunchpad.jpeg';
import professional from '../assets/professional.jpeg';
import workshop from '../assets/Workshop.jpeg';
import Webinar from '../assets/Webinar.png';


export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = [
    {
      id: 'PRODUCT 01',
      slug: 'webinars',
      title: 'Interactive Webinars',
      desc: 'Live expert sessions on the skills the market is hiring for. Open to students from every domain.',
      poster: Webinar ,
      posterTitle: 'HOW TO GET INTERNSHIPS USING AI',
      posterSub: 'Live Interactive Session',
      regLink: 'https://forms.gle/W6AZdbdbjQVxKfmE8',
      waLink: 'https://chat.whatsapp.com/',
      repLink: 'https://wa.me/917022603588'
    },
    {
      id: 'PRODUCT 02',
      slug: 'workshops',
      title: 'Hands-on Workshops',
      desc: 'Hands-on, practice-first sessions. You build something, you get feedback, you leave with an action plan.',
      poster: workshop,
      posterTitle: 'AI MARKETING STUDIO WORKSHOP',
      posterSub: '3 Days Hands-on Workshop',
      regLink: 'https://forms.gle/hdGy5nzz3Bb4sCsUA',
      waLink: 'https://chat.whatsapp.com/',
      repLink: 'https://wa.me/917022603588'
    },
    {
      id: 'PRODUCT 03',
      slug: 'courses',
      title: 'Professional Certification Courses',
      desc: 'Structured certification batches with real projects, expert mentors and a credential that strengthens your resume.',
      poster: professional,
      posterTitle: 'VALUE ADDED CERTIFICATE COURSES',
      posterSub: 'Industry Recognized Credentials',
      regLink: 'https://forms.gle/',
      waLink: 'https://chat.whatsapp.com/',
      repLink: 'https://wa.me/917022603588'
    },
    {
      id: 'PRODUCT 04',
      slug: 'internships',
      title: 'Career Launchpad Program',
      desc: 'Curated internships, profile building, mock interviews and recruiter connections to carry you into your first role.',
      poster: career,
      posterTitle: 'INTERNSHIP & PLACEMENT ASSISTANCE',
      posterSub: 'Career Accelerator',
      regLink: 'https://forms.gle/',
      waLink: 'https://chat.whatsapp.com/',
      repLink: 'https://wa.me/917022603588'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF5E9] text-slate-800 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-semibold mb-3"
          >
            OUR PRODUCTS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif text-[#0C192E] leading-tight tracking-tight"
          >
            Four ways to get <span className="text-[#C59B27] font-serif font-normal">industry ready</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Explore our webinars, workshops, value-added certification courses, and placement assistance programs below. Click any program to see upcoming batches, session posters, and registration details.
          </motion.p>
        </section>

        {/* Product Cards Stack */}
        <div className="space-y-16 sm:space-y-24">
          {products.map((prod, idx) => {
            const isPosterRight = idx % 2 === 1;
            const programPath = `/program/${prod.slug}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Poster Graphic Container */}
                <div className={`lg:col-span-5 ${isPosterRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Link to={programPath} className="block group">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-br from-[#0C192E] to-[#162744]">
                      <img 
                        src={prod.poster} 
                        alt={prod.posterTitle}
                        className="w-full h-[620px] sm:h-[600px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-[#0C192E]/20 group-hover:bg-transparent transition-colors"></div>
                      
                      {/* Click overlay badge */}
                      <div className="absolute bottom-6 left-6 right-6 bg-[#0C192E]/90 backdrop-blur-md p-4 rounded-2xl border border-[#C59B27]/30 text-white flex items-center justify-between opacity-95 group-hover:opacity-100 transition-opacity">
                        <div>
                          <span className="text-[10px] font-bold text-[#C59B27] uppercase tracking-widest block">VIEW UPCOMING BATCHES</span>
                          <span className="text-sm font-serif font-bold">{prod.posterTitle}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content & Action Buttons */}
                <div className={`lg:col-span-7 flex flex-col justify-center ${isPosterRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C59B27] block mb-2">
                    {prod.id}
                  </span>

                  <Link to={programPath} className="group">
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C192E] mb-4 group-hover:text-[#C59B27] transition-colors">
                      {prod.title}
                    </h3>
                  </Link>

                  <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-xl">
                    {prod.desc}
                  </p>

                  {/* 3 Action Buttons */}
                  <div className="flex flex-wrap gap-3 items-center">
                    {/* Register Now / Details Page */}
                    <Link
                      to={programPath}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0C192E] hover:bg-[#C59B27] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
                    >
                      REGISTER NOW & DETAILS
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {/* Contact Rep */}
                    <a
                      href={prod.repLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border-2 border-[#C59B27] hover:bg-[#C59B27]/10 text-[#C59B27] text-xs font-bold uppercase tracking-wider rounded-full transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      REPRESENTATIVE
                    </a>

                    {/* Student Enquiry Modal Trigger */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-[#EAE1D0] hover:border-[#C59B27] text-slate-700 hover:text-[#0C192E] text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm cursor-pointer"
                    >
                      <HelpCircle className="h-4 w-4 text-[#C59B27]" />
                      KNOW MORE
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Student Enquiry Modal */}
      <StudentEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
