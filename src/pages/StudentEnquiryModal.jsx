import { useState } from "react";
import { User, Mail, BookOpen, X, CheckCircle2, Loader2, AlertTriangle, Send } from "lucide-react";

export default function StudentEnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const courses = [
    "Interactive Webinars",
    "Hands-on Workshops",
    "Value Added Certificate Courses",
    "Career Launchpad & Placement Assistance",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const apiUrl = import.meta.env.VITE_ENQUIRY_API_URL;

    if (!apiUrl) {
      console.warn("VITE_ENQUIRY_API_URL is not set. Simulating successful submission...");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", course: "", message: "" });
          onClose();
        }, 2500);
      }, 1200);
      return;
    }

    const trimmedUrl = apiUrl.trim();
    try {
      const payload = {
        date: new Date().toLocaleString(),
        timestamp: new Date().toISOString(),
        ...formData,
      };

      const response = await fetch(trimmedUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP status ${response.status}`);
      }

      const result = await response.json();

      if (result && result.status === "success") {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", course: "", message: "" });
          onClose();
        }, 2500);
      } else {
        throw new Error(result.message || "Failed to save enquiry data.");
      }
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      setIsSubmitting(false);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-[#0C192E]/75 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
      onClick={onClose}
    >
      {/* Main Modal Card */}
      <div 
        className="relative max-w-4xl w-full flex flex-col md:flex-row bg-[#FAF6F0] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#EAE1D0] transition-all duration-300 max-h-[90vh] md:max-h-[85vh] my-auto overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Dynamic Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-50 p-2 sm:p-2.5 rounded-full bg-white/80 border border-[#EAE1D0] text-slate-600 hover:text-[#0C192E] hover:border-[#C59B27] transition-all group focus:outline-none cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Left Column: Brand Panel */}
        <div className="w-full md:w-[42%] bg-[#0C192E] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden min-h-[180px] md:min-h-[480px] border-b md:border-b-0 md:border-r border-[#1E2D45] shrink-0">
          <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#C59B27]/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-[#C59B27]/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Graphic & Text */}
          <div className="my-auto space-y-4 sm:space-y-6 relative z-10">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#162744] border border-[#C59B27]/40 flex items-center justify-center text-[#C59B27] shadow-lg">
              <BookOpen className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="space-y-2 sm:space-y-3 text-left">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#C59B27] uppercase tracking-[0.25em] block">
                STUDENT ENQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white tracking-tight leading-tight">
                Elevate Your <span className="text-[#C59B27] font-serif font-normal">Career</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Submit your details to connect with our academic advisors and receive batch schedules, curriculum guides, and fee structures.
              </p>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 tracking-widest uppercase hidden md:block font-semibold pt-4">
            © AIRA ELEVATE LEARNING ECOSYSTEM
          </div>
        </div>

        {/* Right Column: Form Panel */}
        <div className="w-full md:w-[58%] p-6 sm:p-8 lg:p-10 relative flex flex-col justify-center bg-white overflow-y-auto">
          
          {submitted ? (
            <div className="text-center space-y-4 py-8 sm:py-12">
              <div className="w-16 h-16 bg-[#FAF3E6] text-[#C59B27] border border-[#E8D7B8] rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0C192E]">Enquiry Received!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest. An academic counselor will reach out to you within 24 hours.
              </p>
            </div>
          ) : errorMsg ? (
            <div className="text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-red-50 text-red-500 border border-red-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0C192E]">Submission Error</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {errorMsg}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setErrorMsg("")}
                  className="px-6 py-2.5 bg-[#0C192E] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#162744] transition-all cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <div className="text-left">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C192E]">Student Enquiry</h2>
                <p className="text-xs text-[#C59B27] font-semibold tracking-widest uppercase mt-1">
                  Connect with an Academic Advisor
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#C59B27] transition-colors">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF6F0] text-[#0C192E] placeholder-slate-400 rounded-xl text-sm border border-[#EAE1D0] focus:border-[#C59B27] focus:bg-white focus:outline-none transition-all font-medium"
                  />
                </div>

                {/* Email Address */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#C59B27] transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF6F0] text-[#0C192E] placeholder-slate-400 rounded-xl text-sm border border-[#EAE1D0] focus:border-[#C59B27] focus:bg-white focus:outline-none transition-all font-medium"
                  />
                </div>

                {/* Course Selection Dropdown */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#C59B27] transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-11 pr-8 py-3 bg-[#FAF6F0] text-[#0C192E] rounded-xl text-sm border border-[#EAE1D0] focus:border-[#C59B27] focus:bg-white focus:outline-none transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">Select Program / Course</option>
                    {courses.map((course, idx) => (
                      <option key={idx} value={course} className="text-[#0C192E]">
                        {course}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#C59B27]">
                    ▼
                  </div>
                </div>

                {/* Custom Message */}
                <div>
                  <textarea
                    rows="3"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your learning goals or questions..."
                    className="w-full px-4 py-3 bg-[#FAF6F0] text-[#0C192E] placeholder-slate-400 rounded-xl text-sm border border-[#EAE1D0] focus:border-[#C59B27] focus:bg-white focus:outline-none transition-all font-medium resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0C192E] hover:bg-[#162744] text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md tracking-wider text-xs uppercase cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C59B27]" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C59B27]" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}