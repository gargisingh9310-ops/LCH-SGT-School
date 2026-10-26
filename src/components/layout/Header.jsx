import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, HeartHandshake, PhoneCall, GraduationCap } from 'lucide-react';

export default function Header({ onOpenCSRModal, onOpenAdmissionsModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#legacy' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Campus Life', href: '#activities' },
    { label: 'CSR Support', href: '#csr-banner' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-emerald-900/10 py-3'
          : 'bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: School Logo & 40 Years Tag */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img
              src="/assets/logos/school_logo_transparent.png"
              alt="LCH SGT High School Logo"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? 'h-9 sm:h-11 md:h-12' : 'h-10 sm:h-13 md:h-14 drop-shadow-md'
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-display font-extrabold text-xs xs:text-sm sm:text-base md:text-lg tracking-tight leading-none transition-colors ${
                  isScrolled ? 'text-emerald-950' : 'text-white'
                }`}
              >
                LCH SGT HIGH SCHOOL
              </span>
              <span
                className={`text-[8.5px] xs:text-[10px] md:text-[11px] font-semibold tracking-wider uppercase mt-0.5 sm:mt-1 transition-colors truncate max-w-[170px] xs:max-w-none ${
                  isScrolled ? 'text-amber-600' : 'text-amber-300'
                }`}
              >
                40 Years of Excellence in Education
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 hover:text-amber-500 group ${
                  isScrolled ? 'text-charcoal-800' : 'text-white/90'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Partner With Us & Admissions CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#admissions"
              onClick={onOpenAdmissionsModal}
              className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all border ${
                isScrolled
                  ? 'text-emerald-900 border-emerald-900/20 hover:bg-sage-50'
                  : 'text-white border-white/30 hover:bg-white/10'
              }`}
            >
              Admissions
            </a>
            <a
              href="#csr-banner"
              onClick={onOpenCSRModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-charcoal-950 tracking-wide shadow-sm hover:shadow-gold-glow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-4 h-4 text-charcoal-950" />
              <span>Partner With Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-emerald-950 hover:bg-sage-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-emerald-900/10 shadow-elevated px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-emerald-950 hover:text-amber-600 py-1 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#admissions"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionsModal && onOpenAdmissionsModal();
                }}
                className="w-full text-center py-2.5 rounded-lg border border-emerald-900/20 text-emerald-900 font-semibold text-sm hover:bg-sage-50"
              >
                Admissions
              </a>
              <a
                href="#csr-banner"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCSRModal && onOpenCSRModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-900 text-white font-semibold text-sm shadow-sm hover:bg-emerald-800"
              >
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>Partner With Us (CSR)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
