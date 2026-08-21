import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, User, CheckCircle2, 
  ExternalLink, MessageCircle, HelpCircle, Sparkles, 
  X, Send, BookOpen, Award, ShieldCheck, ChevronRight
} from 'lucide-react';
import { programsData } from '../data/programsData';

export default function ProgramDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find category data or default to webinars
  const programCategory = programsData[slug] || programsData['webinars'];

  // Tab state for webinars: 'upcoming' | 'completed' | 'all'
  const [webinarFilter, setWebinarFilter] = useState('upcoming');

  // Image Lightbox Modal State
  const [lightboxImage, setLightboxImage] = useState(null);

  // Registration Modal State
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: ''
  });

  const handleOpenRegister = (item = null) => {
    setSelectedItem(item);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Combine or filter items based on category and active tab
  const upcomingItems = programCategory.upcomingList || [];
  const completedItems = programCategory.completedList || [];

  let displayedList = upcomingItems;
  if (webinarFilter === 'completed') {
    displayedList = completedItems;
  } else if (webinarFilter === 'all') {
    displayedList = [...upcomingItems, ...completedItems];
  } else {
    displayedList = upcomingItems;
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-slate-800 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Breadcrumb */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27] hover:text-[#0C192E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROGRAMS</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/products" className="hover:underline">Products</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#0C192E] font-bold truncate max-w-[160px] sm:max-w-none">{programCategory.title}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B27] font-bold mb-3 bg-[#FAF3E6] px-3 py-1 rounded-full border border-[#E8D7B8] w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{programCategory.tagline}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0C192E] leading-[1.15] sm:leading-tight tracking-tight mb-4 sm:mb-6">
                {programCategory.heroTitle}
              </h1>

              <p className="text-slate-600 text-xs sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                {programCategory.heroDesc}
              </p>

              {/* Category Key Stats Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {programCategory.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#EAE1D0] shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-[#FAF3E6]">
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block uppercase font-medium tracking-wider truncate">
                      {stat.label}
                    </span>
                    <strong className="text-xs sm:text-sm font-serif font-bold text-[#0C192E] mt-0.5 block truncate">
                      {stat.value}
                    </strong>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
                <button
                  onClick={() => handleOpenRegister(null)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0C192E] hover:bg-[#C59B27] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                >
                  <span>REGISTER NOW</span>
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </button>

                <a
                  href={programCategory.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-2 border-[#C59B27] hover:bg-[#C59B27]/10 text-[#C59B27] text-xs font-bold uppercase tracking-wider rounded-full transition-all text-center"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>REPRESENTATIVE</span>
                </a>

                {/* Student Enquiry Modal Trigger */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-[#EAE1D0] hover:border-[#C59B27] text-slate-700 hover:text-[#0C192E] text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm cursor-pointer text-center"
                >
                  <HelpCircle className="h-4 w-4 text-[#C59B27] shrink-0" />
                  <span>KNOW MORE</span>
                </button>
              </div>
            </motion.div>

            {/* Right Poster Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 mt-6 lg:mt-0"
            >
              <div 
                onClick={() => setLightboxImage({ src: programCategory.poster, title: programCategory.posterTitle || programCategory.title })}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-[#0C192E] group cursor-pointer"
              >
                <img 
                  src={programCategory.poster} 
                  alt={programCategory.title}
                  className="w-full h-[260px] xs:h-[320px] sm:h-[440px] lg:h-[500px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-[#0C192E]/20 group-hover:bg-transparent transition-colors"></div>
                
                {/* Poster Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#0C192E]/90 backdrop-blur-md border border-[#C59B27]/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-white max-w-[80%]">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#C59B27] tracking-widest block truncate">OFFICIAL BROCHURE</span>
                  <span className="text-xs font-serif font-bold truncate block">{programCategory.posterTitle || programCategory.title}</span>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-[#0C192E]/90 backdrop-blur-md text-[#C59B27] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-[#C59B27]/30 flex items-center gap-1.5">
                  <span>Click to view poster</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* LIST & BATCH SCHEDULE WITH UPCOMING / COMPLETED TABS */}
        <section className="py-8 sm:py-12 border-t border-[#EAE1D0]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B27] font-semibold block mb-1.5 sm:mb-2">
                SCHEDULE & BROCHURES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0C192E] leading-snug">
                {programCategory.title} <span className="text-[#C59B27] font-normal italic">Batches & Details</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            {(upcomingItems.length > 0 || completedItems.length > 0) && (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-white p-1.5 rounded-xl sm:rounded-2xl border border-[#EAE1D0] shadow-sm shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setWebinarFilter('upcoming')}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl transition-all ${
                    webinarFilter === 'upcoming'
                      ? 'bg-[#0C192E] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0C192E] hover:bg-slate-100'
                  }`}
                >
                  Upcoming ({upcomingItems.length})
                </button>
                <button
                  onClick={() => setWebinarFilter('completed')}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl transition-all ${
                    webinarFilter === 'completed'
                      ? 'bg-[#0C192E] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0C192E] hover:bg-slate-100'
                  }`}
                >
                  Completed ({completedItems.length})
                </button>
                <button
                  onClick={() => setWebinarFilter('all')}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl transition-all ${
                    webinarFilter === 'all'
                      ? 'bg-[#0C192E] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0C192E] hover:bg-slate-100'
                  }`}
                >
                  All ({upcomingItems.length + completedItems.length})
                </button>
              </div>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedList.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE1D0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Thumbnail with Clickable Lightbox */}
                  <div 
                    onClick={() => setLightboxImage({ src: item.image, title: item.title, date: item.date })}
                    className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    <div className="absolute inset-0 bg-[#0C192E]/20 group-hover:bg-transparent transition-colors"></div>

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 bg-[#0C192E]/95 text-[#C59B27] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C59B27]/40 backdrop-blur-md">
                      {item.badge}
                    </div>

                    {/* Price Tag if available */}
                    {item.fee && (
                      <div className="absolute top-3 right-3 bg-[#C59B27] text-[#0C192E] text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        {item.fee}
                        {item.originalFee && (
                          <span className="line-through text-[10px] opacity-75">{item.originalFee}</span>
                        )}
                      </div>
                    )}

                    {/* Zoom overlay label */}
                    <div className="absolute bottom-3 right-3 bg-[#0C192E]/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>View Brochure</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Date & Time Info */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#C59B27] mb-3">
                      <span className="flex items-center gap-1.5 bg-[#FAF3E6] px-2.5 py-1 rounded-lg border border-[#E8D7B8]">
                        <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.time}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-serif font-bold text-[#0C192E] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    {item.tagline && (
                      <p className="text-xs font-medium text-[#C59B27] italic mb-3">
                        "{item.tagline}"
                      </p>
                    )}

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    {/* Speaker Info */}
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF6F0] border border-[#EAE1D0] mb-5">
                      <div className="w-8 h-8 rounded-full bg-[#0C192E] text-[#C59B27] flex items-center justify-center font-bold text-xs shrink-0">
                        <User className="w-4 h-4 text-[#C59B27]" />
                      </div>
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-serif font-bold text-[#0C192E] truncate">{item.speaker}</h5>
                        <p className="text-[11px] text-slate-500 truncate">{item.speakerRole}</p>
                      </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Key Highlights:</span>
                      {item.takeaways.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {item.perks && (
                      <div className="text-[11px] text-[#8C6D23] bg-[#FAF3E6] px-3 py-1.5 rounded-xl border border-[#E8D7B8] font-medium mb-2">
                        ✨ Included: {item.perks}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-[#F5ECDC] mt-auto">
                  <div className="pt-4 flex flex-col gap-2.5">
                    {!item.isCompleted ? (
                      <>
                        <button
                          onClick={() => handleOpenRegister(item)}
                          className="w-full py-3 px-4 bg-[#0C192E] hover:bg-[#C59B27] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          REGISTER FOR THIS SESSION
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>

                      </>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => setLightboxImage({ src: item.image, title: item.title, date: item.date })}
                          className="w-full py-3 px-4 bg-[#FAF3E6] hover:bg-[#E8D7B8] text-[#0C192E] text-xs font-bold uppercase tracking-wider rounded-full border border-[#D9C4A0] transition-colors flex items-center justify-center gap-2"
                        >
                          VIEW BROCHURE POSTER
                        </button>
                        <a
                          href={item.regLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-slate-500 hover:text-[#C59B27] text-center font-semibold transition-colors py-1"
                        >
                          View Session Archive / Registration Form →
                        </a>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* SUPPORT / CONTACT CTA BANNER */}
        <section className="py-8 sm:py-12 mt-8 sm:mt-12 bg-[#0C192E] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white border border-[#1E2D45] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B27] font-semibold block mb-1.5 sm:mb-2">
              HAVE QUESTIONS OR COLLEGE INQUIRIES?
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 leading-tight">
              Connect with an Elevate Representative
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Want to organize custom workshops or webinars for your department or college campus? Get in touch with our program leads directly.
            </p>
          </div>

          <a
            href={programCategory.repLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3.5 bg-[#C59B27] hover:bg-amber-500 text-[#0C192E] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2 text-center"
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>CONTACT REPRESENTATIVE</span>
          </a>
        </section>

      </div>

      {/* LIGHTBOX BROCHURE MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] bg-[#0C192E] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C59B27]/40 shadow-2xl flex flex-col w-full"
            >
              <div className="p-3.5 sm:p-4 bg-[#0C192E] border-b border-[#1E2D45] flex items-center justify-between text-white">
                <div className="overflow-hidden pr-2">
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-[#C59B27] truncate">{lightboxImage.title}</h4>
                  {lightboxImage.date && <p className="text-[11px] text-slate-400 truncate">{lightboxImage.date}</p>}
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="p-2 overflow-auto max-h-[78vh] flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* REGISTRATION MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-[#EAE1D0] relative overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!formSubmitted ? (
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    PROGRAM REGISTRATION
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#0C192E] mb-2">
                    {selectedItem ? selectedItem.title : programCategory.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-6">
                    Fill out your details below to secure your spot for the upcoming batch.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0C192E] mb-1 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#C59B27] bg-[#FAF6F0]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0C192E] mb-1 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="student@college.edu"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#C59B27] bg-[#FAF6F0]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0C192E] mb-1 uppercase tracking-wider">
                          WhatsApp Mobile *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+91 9876543210"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#C59B27] bg-[#FAF6F0]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0C192E] mb-1 uppercase tracking-wider">
                          College / University *
                        </label>
                        <input
                          type="text"
                          name="college"
                          required
                          value={formData.college}
                          onChange={handleFormChange}
                          placeholder="e.g. VIT / Delhi University"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#C59B27] bg-[#FAF6F0]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0C192E] mb-1 uppercase tracking-wider">
                          Department / Year
                        </label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleFormChange}
                          placeholder="e.g. CSE - 3rd Year"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#C59B27] bg-[#FAF6F0]"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 bg-[#0C192E] hover:bg-[#C59B27] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        SUBMIT REGISTRATION
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-center pt-2">
                      <a
                        href={selectedItem?.regLink || programCategory.regLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#C59B27] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        Or open direct Google Form
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0C192E]">
                    Registration Submitted!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0C192E]">{formData.name}</strong>. Your spot request has been logged. Join the official WhatsApp group for instant session links and updates.
                  </p>

                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      href={selectedItem?.waLink || programCategory.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      JOIN OFFICIAL WHATSAPP GROUP NOW
                    </a>

                    <button
                      onClick={handleCloseModal}
                      className="w-full py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                    >
                      DONE
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
