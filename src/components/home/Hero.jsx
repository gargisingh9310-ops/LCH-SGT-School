import React, { useEffect, useRef } from 'react';
import { ArrowDown, HeartHandshake, Compass, Sparkles, ShieldCheck } from 'lucide-react';
import ParticleText from '../reactbits/ParticleText';
import TextLoop from '../reactbits/TextLoop';

export default function Hero({ onOpenCSRModal }) {
  const heroRef = useRef(null);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background Image with Warm Lighting & Parallax Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/school_building.jpg"
          alt="LCH SGT High School Campus"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Gradient Overlays for Depth and Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/75 to-charcoal-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-black/40" />
        {/* Warm Golden Morning Sunlight Glow Accent */}
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Eyebrow & Supporting Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase shadow-sm text-center">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>LCH SGT HIGH SCHOOL · 40 YEARS OF EXCELLENCE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-900/60 backdrop-blur-md border border-emerald-400/30 text-emerald-200 text-[10px] sm:text-xs font-semibold text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>Supported by Lions Club of Hyderabad</span>
          </div>
        </div>

        {/* Animated TextLoop Ribbon */}
        <div className="mb-4 sm:mb-5 max-w-full">
          <TextLoop words={["LEARN", "GROW", "DISCOVER"]} />
        </div>

        {/* Main Headline with ParticleText Treatment */}
        <div className="mb-4 sm:mb-6 max-w-4xl w-full">
          <ParticleText text="Where Learning Goes Beyond the Classroom" />
        </div>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-xl text-sage-100/95 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8 text-shadow-sm font-sans px-2">
          Every child deserves the opportunity to learn, grow, discover, and build a brighter future.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10 px-2 sm:px-0">
          <button
            onClick={onOpenCSRModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-charcoal-950 text-sm font-bold tracking-wide shadow-gold-glow hover:shadow-premium transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <HeartHandshake className="w-5 h-5 text-charcoal-950" />
            <span>Partner With Us</span>
          </button>

          <a
            href="#facilities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide backdrop-blur-md border border-white/25 transition-all duration-200"
          >
            <Compass className="w-5 h-5 text-amber-300" />
            <span>Explore Our School</span>
          </a>
        </div>

        {/* Compact Supporting Line */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest uppercase text-amber-200/90 text-center">
          <span>Education</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
          <span>Discipline</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
          <span>Holistic Development</span>
        </div>

        {/* Minimal Scroll Indicator */}
        <a 
          href="#principal-message"
          className="mt-6 sm:mt-12 inline-flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300/80">Scroll</span>
          <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-amber-400 transition-colors">
            <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce mt-1" />
          </div>
        </a>

      </div>
    </section>
  );
}
