import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Elevate-logo.png"

export default function Navbar({ onGetStarted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#programs" },
    { label: "Success Stories", href: "#stories" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,94vw)]">
      <nav className="glass-card rounded-full px-5 py-1.5 md:py-2.5 flex items-center justify-between shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
        {/* Brand Logo - Base64 Image */}
        <a href="#home" className="flex items-center pl-1">
          <img
            src={logo}
            alt="Elevate Logo"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9 text-[1rem] font-semibold text-foreground/90 tracking-wide">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-foreground/90 transition-colors hover:text-gold after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:scale-x-0 after:origin-right after:bg-gold after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="flex items-center gap-3">
          {/* <a
            href="#"
            className="hidden sm:inline text-sm font-medium text-foreground/90 hover:text-gold transition-colors"
          >
            Sign In
          </a> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onGetStarted();
            }}
            className="hidden md:block rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.82_0.16_85_/_0.6)] transition-transform hover:scale-[1.04] active:scale-[0.98] cursor-pointer"
          >
            Get Started
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden text-foreground/90 hover:text-gold p-1 ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[110%] left-0 right-0 glass-card rounded-lg py-2 px-6 shadow-2xl flex flex-col gap-3 animate-fade-in border border-white/5 bg-[#0E0E11]/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-semibold text-foreground/90 hover:text-gold transition-colors py-2 sm:py-2.5 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            {/* <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold text-foreground/90 hover:text-gold transition-colors py-3 border border-white/10 rounded-full"
            >
              Sign In
            </a> */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onGetStarted();
              }}
              className="w-full text-center bg-gold text-primary-foreground font-semibold py-3 text-sm rounded-full shadow-[0_8px_24px_-8px_oklch(0.82_0.16_85_/_0.6)] cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
