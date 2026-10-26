import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FlexCarousel({
  items = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused || items.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, items.length, autoPlayInterval]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop & Tablet Flex Expanding Accordion Layout */}
      <div className="hidden md:flex gap-4 h-[520px] w-full overflow-hidden rounded-2xl">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id || index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isActive 
                  ? 'flex-[3.5] shadow-premium ring-2 ring-amber-400/50' 
                  : 'flex-1 opacity-75 hover:opacity-95'
              }`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100 filter brightness-90'
                }`}
              />

              {/* Gradient Overlays */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent opacity-90' 
                    : 'bg-gradient-to-t from-charcoal-950 via-charcoal-900/60 to-black/30 opacity-80'
                }`}
              />

              {/* Collapsed Vertical Title (shown when inactive) */}
              {!isActive && (
                <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
                  <span className="transform -rotate-90 origin-bottom-center whitespace-nowrap text-white font-display text-sm font-semibold tracking-wider uppercase drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              )}

              {/* Expanded Content (shown when active) */}
              <div
                className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/30 text-xs font-semibold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {item.tag || "Holistic Learning"}
                  </span>
                  <span className="text-white/60 font-mono text-xs">
                    0{index + 1} / 0{items.length}
                  </span>
                </div>

                {/* Bottom Text Content */}
                <div className="space-y-3 max-w-lg">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-medium uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Key Student Growth Area</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-display leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sage-100/90 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Card View (Swipable single/dual card with touch friendly controls) */}
      <div className="md:hidden">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-elevated">
          <img
            src={items[activeIndex].image}
            alt={items[activeIndex].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[11px] font-semibold">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {items[activeIndex].tag || "Holistic Learning"}
              </span>
              <span className="text-white/70 font-mono text-xs">
                0{activeIndex + 1} / 0{items.length}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                {items[activeIndex].title}
              </h3>
              <p className="text-xs text-sage-100/90 leading-relaxed font-sans">
                {items[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls and Indicators */}
      <div className="flex items-center justify-between mt-6 px-1">
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-amber-500'
                  : 'w-2 bg-emerald-900/20 hover:bg-emerald-900/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white hover:bg-sage-100 text-emerald-900 border border-emerald-900/10 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
