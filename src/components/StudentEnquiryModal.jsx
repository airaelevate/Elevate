import { useState } from "react";
import { User, Mail, BookOpen, X, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

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
    "Advanced Web Development",
    "UI/UX Masterclass",
    "Data Science & AI",
    "Digital Marketing Strategy",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const apiUrl = import.meta.env.VITE_ENQUIRY_API_URL;

    if (!apiUrl) {
      console.warn(
        "VITE_ENQUIRY_API_URL is not set. Simulating a successful submission in development mode..."
      );
      // Fallback simulated submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", course: "", message: "" });
          onClose();
        }, 2500);
      }, 1500);
      return;
    }

    // Proactive URL validation
    const trimmedUrl = apiUrl.trim();
    if (!trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
      setIsSubmitting(false);
      setErrorMsg("The VITE_ENQUIRY_API_URL must be a full URL starting with 'https://'. It seems you pasted just the deployment/script ID instead of the full Web App URL. Please verify your .env file and restart your development server.");
      return;
    }
    if (trimmedUrl.includes("script.google.com") && !trimmedUrl.endsWith("/exec") && !trimmedUrl.includes("/exec?")) {
      setIsSubmitting(false);
      setErrorMsg("It looks like you copied the Apps Script Editor URL instead of the Web App URL. Please make sure the URL in your .env file ends with '/exec' (e.g., https://script.google.com/.../exec) and restart your development server.");
      return;
    }

    try {
      // Send the request using a simple post (text/plain) to avoid CORS preflight options check
      const response = await fetch(trimmedUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Server returned HTTP status 404. This usually means the URL in your .env file is invalid or you copied the Apps Script Editor URL (e.g., ending with /edit) instead of the Web App deployment URL (ending with /exec). Please copy the Web App URL and restart your development server.");
        }
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
      setErrorMsg(err.message || "Something went wrong while connecting to the server. Please try again.");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-[#07080C]/80 backdrop-blur-md transition-opacity duration-500 animate-fadeIn"
      onClick={onClose}
    >
      {/* Main Modal Card */}
      <div 
        className="relative max-w-4xl w-full flex flex-col md:flex-row bg-[#07080C] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-[#d4af37]/20 transition-all duration-300 transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Dynamic Absolute Close Button (Sits on top right of the entire card structure) */}
        <a 
          href="#hero"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#131722]/40 border border-[#d4af37]/10 text-[#d4af37]/60 hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-[#131722]/80 transition-all group focus:outline-none"
          aria-label="Close modal and scroll to hero"
        >
          <X className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" />
        </a>

        {/* Left Column: Premium Brand/Feature Panel */}
        <div className="w-full md:w-[40%] bg-gradient-to-br from-[#131722] to-[#1a1f2b] p-8 flex flex-col justify-between relative overflow-hidden min-h-[200px] md:min-h-[500px] border-b md:border-b-0 md:border-r border-[#d4af37]/10">
          {/* Animated Gold Orbs in Background */}
          <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-[#d4af37]/10 rounded-full blur-[60px] animate-pulse" />

          {/* Graphic & Dynamic Text */}
          <div className="my-auto space-y-6 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <BookOpen className="w-8 h-8 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif text-white tracking-wide">
                Elevate Your <span className="text-[#d4af37] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] bg-clip-text text-transparent">Future</span>
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Submit your enquiry to unlock bespoke learning pathways tailored around global industry standards.
              </p>
            </div>
          </div>

          {/* Bottom Footer metadata */}
          <div className="text-[10px] text-slate-500 tracking-wider uppercase hidden md:block">
            © Academic Excellence Global
          </div>
        </div>

        {/* Right Column: Premium Form Panel */}
        <div className="w-full md:w-[60%] p-8 md:p-12 relative flex flex-col justify-center bg-[#1a1f2b]">
          
          {submitted ? (
            /* Success State Animation */
            <div className="text-center space-y-4 py-12 animate-scaleUp">
              <div className="w-20 h-20 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <CheckCircle2 className="w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-2xl font-serif text-white">Enquiry Received</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Thank you. An academic counselor will review your profile and reach out within 24 business hours.
              </p>
            </div>
          ) : errorMsg ? (
            /* Error State Screen */
            <div className="text-center space-y-4 py-12 animate-scaleUp">
              <div className="w-20 h-20 bg-red-500/10 text-red-500 border border-red-500/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <AlertTriangle className="w-10 h-10 animate-bounce" style={{ animationDuration: "3s" }} />
              </div>
              <h3 className="text-2xl font-serif text-white">Submission Failed</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                {errorMsg}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setErrorMsg("")}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg transition-colors border border-slate-700 cursor-pointer"
                >
                  Go Back & Try Again
                </button>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-white tracking-wide">Course Enquiry</h2>
                <p className="text-xs text-[#d4af37] font-medium tracking-widest uppercase mt-1">Begin Your Academic Journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 group-focus-within:text-[#d4af37] transition-colors">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full pl-12 pr-4 py-3.5 bg-[#131722]/60 text-slate-200 placeholder-slate-500 rounded-lg text-sm border border-slate-800 focus:border-[#d4af37]/60 focus:bg-[#131722] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/40 transition-all font-medium"
                  />
                </div>

                {/* Email Address */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 group-focus-within:text-[#d4af37] transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3.5 bg-[#131722]/60 text-slate-200 placeholder-slate-500 rounded-lg text-sm border border-slate-800 focus:border-[#d4af37]/60 focus:bg-[#131722] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/40 transition-all font-medium"
                  />
                </div>

                {/* Course Selection Dropdown */}
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 group-focus-within:text-[#d4af37] transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#131722]/60 text-slate-300 rounded-lg text-sm border border-slate-800 focus:border-[#d4af37]/60 focus:bg-[#131722] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/40 transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500 bg-[#1a1f2b]">Select Intended Course</option>
                    {courses.map((course, idx) => (
                      <option key={idx} value={course} className="text-slate-200 bg-[#1a1f2b]">
                        {course}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[#d4af37]">
                    ▼
                  </div>
                </div>

                {/* Custom Message Container */}
                <div className="relative">
                  <textarea
                    rows="3"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals or ask a question..."
                    className="w-full px-4 py-3.5 bg-[#131722]/60 text-slate-200 placeholder-slate-500 rounded-lg text-sm border border-slate-800 focus:border-[#d4af37]/60 focus:bg-[#131722] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/40 transition-all font-medium resize-none"
                  />
                </div>

                {/* Elegant Luxury Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] hover:brightness-110 active:scale-[0.99] text-[#0d111a] font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] tracking-wider text-xs uppercase disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0d111a]" />
                        Processing Credentials...
                      </>
                    ) : (
                      "Request Catalogue &rarr;"
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