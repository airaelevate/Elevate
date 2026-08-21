import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Sparkles, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import StudentEnquiryModal from './StudentEnquiryModal';

export default function Contact() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-slate-800 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <section className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B27] font-semibold mb-3 block"
          >
            CONTACT US
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#0C192E] leading-[1.15] sm:leading-tight tracking-tight"
          >
            We would be delighted to have <br className="hidden sm:inline" />
            you <span className="text-gold-gradient font-serif italic font-normal">on board</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Whether you are a student, a college or a company — one message is all it takes to begin. Choose us, and choose success the easy way.
          </motion.p>
        </section>

        {/* 2 Main Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Write To Us Card */}
          <motion.a
            href="mailto:info@airaelevate.com"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-[#EAE1D0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF3E6] border border-[#E8D7B8] flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 text-[#C59B27]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block mb-1.5 sm:mb-2">
                WRITE TO US
              </span>
              <span className="text-lg sm:text-2xl font-serif font-bold text-[#0C192E] block group-hover:text-[#C59B27] transition-colors truncate">
                info@airaelevate.com
              </span>
            </div>
          </motion.a>

          {/* Call or Whatsapp Card */}
          <motion.a
            href="https://wa.me/917022603588"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0C192E] border border-[#1E2D45] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#172740] border border-[#2B4063] flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5 text-[#C59B27]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C59B27] block mb-1.5 sm:mb-2">
                CALL OR WHATSAPP
              </span>
              <span className="text-lg sm:text-2xl font-serif font-bold text-white block group-hover:text-[#D4AF37] transition-colors truncate">
                +91 70226 03588
              </span>
            </div>
          </motion.a>
        </div>

        {/* Big Quote & Action Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#F5EFE6] border border-[#E5D7BE] rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center shadow-sm relative overflow-hidden"
        >
          <div className="w-10 h-10 rounded-full bg-[#EFE4D2] border border-[#DDD0B9] flex items-center justify-center mx-auto mb-5 sm:mb-6">
            <Sparkles className="h-5 w-5 text-[#C59B27]" />
          </div>

          <h2 className="text-base sm:text-2xl font-serif font-semibold text-[#0C192E] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            “Your ambition deserves a team that keeps showing up for it. Tell us where you want to go — we will build the path with you.”
          </h2>

          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            {/* 2-Box Action Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">
              <a
                href="https://wa.me/917022603588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gold-gradient hover:opacity-95 text-[#0C192E] text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all transform hover:-translate-y-0.5 text-center"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>MESSAGE REPRESENTATIVE</span>
              </a>

              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0C192E] hover:bg-[#162744] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all transform hover:-translate-y-0.5 border border-[#C59B27]/30 cursor-pointer text-center"
              >
                <FileText className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>STUDENT ENQUIRY FORM</span>
              </button>
            </div>

            <span className="text-xs sm:text-sm font-serif italic text-[#C59B27] block">
              Let's Elevate together.
            </span>
          </div>
        </motion.div>

        {/* Student Enquiry Modal */}
        <StudentEnquiryModal 
          isOpen={isEnquiryOpen} 
          onClose={() => setIsEnquiryOpen(false)} 
        />

      </div>
    </div>
  );
}
