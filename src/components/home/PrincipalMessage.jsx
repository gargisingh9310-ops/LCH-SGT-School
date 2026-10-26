import React, { useState } from 'react';
import { Quote, BookOpen, Heart, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';
import ProfileCard from '../reactbits/ProfileCard';

export default function PrincipalMessage({ onContactClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="principal-message" className="py-14 sm:py-20 bg-ivory-50 relative overflow-hidden border-b border-emerald-900/10">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Badge */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Leadership & Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 font-display tracking-tight">
            A Message of Purpose and Possibility
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 font-sans px-2">
            Guiding students with values, curiosity, and care for over four decades.
          </p>
        </div>

        {/* Split Layout: Card on Left, Message on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive React Bits ProfileCard */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ProfileCard
              name="[Principal's Name — Pending Client Confirmation]"
              title="Principal, LCH SGT High School"
              image={null}
              onMessageClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              onContactClick={onContactClick}
            />
          </div>

          {/* Right Column: Educational Message & Highlights */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Lead Quote Banner */}
            <div className="relative p-5 sm:p-8 rounded-2xl bg-white border border-emerald-900/10 shadow-subtle">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500/25 absolute top-3 right-4 sm:top-4 sm:right-6 pointer-events-none" />
              
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-emerald-950 leading-relaxed">
                “Education is more than academic learning. It is about nurturing confidence, encouraging curiosity, and helping every child discover their potential.”
              </p>
              
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-charcoal-600 border-t border-gray-100 pt-3">
                <span className="font-medium text-amber-700">
                  Core Educational Philosophy
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase">
                  Draft Copy for Review
                </span>
              </div>
            </div>

            {/* Supporting Educational Pillars */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-sans">
                At LCH SGT High School, our classrooms, labs, and play courts are designed to work together in shaping thoughtful, disciplined, and capable young citizens. Through compassionate mentorship and structured holistic development, we ensure every student finds an encouraging environment to excel.
              </p>
            </div>

            {/* Expandable Extended Message */}
            {isExpanded && (
              <div className="p-4 sm:p-6 rounded-xl bg-sage-50 border border-emerald-200/60 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-charcoal-800 leading-relaxed animate-in fade-in slide-in-from-top-2">
                <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                  Fostering Every Child’s Individual Strengths
                </h4>
                <p>
                  As an institution supported by the Lions Club of Hyderabad, community service and equity in education are at our heart. We believe that true academic excellence must go hand in hand with moral character, teamwork, sportsmanship, and creative expression.
                </p>
                <p className="text-[11px] sm:text-xs text-charcoal-600 italic">
                  Note: The principal’s official statement, photograph, and credentials will be finalized upon direct client sign-off.
                </p>
              </div>
            )}

            {/* Key Action & Expand Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs tracking-wide transition-colors shadow-sm"
              >
                <span>{isExpanded ? "Collapse Message" : "Read the Full Message"}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
              </button>

              <a
                href="#contact"
                onClick={onContactClick}
                className="text-center sm:text-left text-xs font-semibold text-emerald-900 hover:text-amber-600 underline underline-offset-4 decoration-amber-500/50 transition-colors py-1"
              >
                Contact the School Office →
              </a>
            </div>

            {/* Client Note Alert */}
            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Client Presentation Note:</strong> The principal's profile card uses an interactive 3D perspective tilt effect. The actual photograph and verified credentials will be seamlessly inserted here once approved.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
