import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trajectory from "./components/Trajectory";
import Ecosystem from "./components/Ecosystem";
import ForStudents from "./components/ForStudents";
import ForColleges from "./components/ForColleges";
import ForCompanies from "./components/ForCompanies";
import Journey from "./components/Journey";
import Programs from "./components/Programs";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";
import StudentEnquiryModal from "./components/StudentEnquiryModal";

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090D] overflow-hidden">
      {/* Click spark effect */}
      <ClickSpark
        sparkColor="#E5C158"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />

      {/* Student Enquiry Popup Modal */}
      <StudentEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* Navigation */}
      <Navbar onGetStarted={() => setIsEnquiryOpen(true)} />

      {/* Main Sections */}
      <Hero onGetStarted={() => setIsEnquiryOpen(true)} />
      <Trajectory />
      <Ecosystem />
      <Journey />
      <Programs />
      <ForStudents />
      <ForColleges />
      <ForCompanies />
      <Stories />

      {/* Footer & Contact */}
      <Footer />
    </div>
  );
}
