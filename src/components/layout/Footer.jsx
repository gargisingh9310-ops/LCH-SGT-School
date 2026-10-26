import React from 'react';
import { Phone, Mail, MapPin, HeartHandshake, GraduationCap, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenCSRModal, onOpenAdmissionsModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-emerald-950 text-ivory border-t border-emerald-900/60 pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: Brand & Logos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logos/school_logo_transparent.png"
                alt="LCH SGT High School Logo"
                className="h-13 sm:h-16 w-auto object-contain bg-white/5 rounded-lg p-1.5 border border-white/10 shrink-0"
              />
              <img
                src="/assets/logos/lions_club_badge.png"
                alt="Lions Club of Hyderabad Badge"
                className="h-13 sm:h-16 w-auto object-contain rounded shadow-sm shrink-0"
              />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight">
                LCH SGT HIGH SCHOOL
              </h3>
              <p className="text-amber-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mt-0.5">
                40 Years of Excellence in Education
              </p>
              <p className="text-xs text-sage-200/80 mt-2 leading-relaxed">
                Supported by the Lions Club of Hyderabad. Nurturing every child, every talent, and taking every step towards a brighter future.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3 sm:mb-4 border-l-2 border-amber-400 pl-2.5">
              Explore Campus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-sage-200/80 hover:text-amber-400 transition-colors inline-block py-0.5">
                  Home
                </a>
              </li>
              <li>
                <a href="#legacy" className="text-sage-200/80 hover:text-amber-400 transition-colors inline-block py-0.5">
                  40-Year Educational Legacy
                </a>
              </li>
              <li>
                <a href="#principal-message" className="text-sage-200/80 hover:text-amber-400 transition-colors inline-block py-0.5">
                  Principal's Message
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-sage-200/80 hover:text-amber-400 transition-colors inline-block py-0.5">
                  Campus Facilities (10 Spaces)
                </a>
              </li>
              <li>
                <a href="#activities" className="text-sage-200/80 hover:text-amber-400 transition-colors inline-block py-0.5">
                  Holistic Student Life
                </a>
              </li>
              <li>
                <a href="#csr-banner" className="text-sage-200/80 hover:text-amber-400 transition-colors inline-block py-0.5">
                  Corporate Social Responsibility (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Supplied Phone Numbers */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3 sm:mb-4 border-l-2 border-amber-400 pl-2.5">
              Contact School
            </h4>
            <div className="space-y-3 text-xs">
              
              {/* Supplied Phone 1 */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-sage-300 uppercase">Primary Helpline</span>
                  <a
                    href="tel:+918985914859"
                    className="text-white hover:text-amber-400 font-semibold tracking-wide inline-block py-0.5 text-xs sm:text-sm"
                  >
                    +91 8985914859
                  </a>
                </div>
              </div>

              {/* Supplied Phone 2 */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-sage-300 uppercase">Secondary Helpline</span>
                  <a
                    href="tel:+918977181875"
                    className="text-white hover:text-amber-400 font-semibold tracking-wide inline-block py-0.5 text-xs sm:text-sm"
                  >
                    +91 8977181875
                  </a>
                </div>
              </div>

              {/* Address Placeholder */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-sage-300 uppercase">Campus Location</span>
                  <p className="text-sage-200/90 italic text-[11px] sm:text-xs">
                    [Campus Address — Pending Client Confirmation, Hyderabad, Telangana]
                  </p>
                </div>
              </div>

              {/* Official Email Placeholder */}
              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-sage-300 uppercase">Official Email</span>
                  <p className="text-sage-200/90 italic text-[11px] sm:text-xs break-all">
                    [official-email@pending-client-confirmation.org]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Action CTAs */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3 sm:mb-4 border-l-2 border-amber-400 pl-2.5">
              Opportunities
            </h4>
            
            <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-900/50 border border-amber-400/20 space-y-3">
              <span className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider block">
                Corporate Social Responsibility
              </span>
              <p className="text-xs text-sage-200/90 leading-relaxed">
                Partner with us to support infrastructure, lab resources, and student development.
              </p>
              <button
                onClick={onOpenCSRModal}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-charcoal-950 font-bold text-xs tracking-wide transition-colors"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Discuss CSR Partnership</span>
              </button>
            </div>

            <button
              onClick={onOpenAdmissionsModal}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions Inquiries</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-sage-300/70 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">
            © {new Date().getFullYear()} LCH SGT High School · Supported by Lions Club of Hyderabad. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="italic text-[10px] sm:text-[11px] text-amber-300/80">
              Draft Homepage Design Direction · For Client Review
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors text-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
