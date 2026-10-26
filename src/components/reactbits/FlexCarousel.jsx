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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
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

      {/* Mobile Card View with touch-swipe & responsive aspect */}
      <div 
        className="md:hidden select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5.2] min-h-[370px] xs:min-h-[390px] shadow-elevated">
          <img
            src={items[activeIndex].image}
            alt={items[activeIndex].title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/65 to-transparent" />
          
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[10px] sm:text-[11px] font-semibold">
                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                {items[activeIndex].tag || "Holistic Learning"}
              </span>
              <span className="text-white/80 font-mono text-[11px] sm:text-xs bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                0{activeIndex + 1} / 0{items.length}
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Key Growth Focus</span>
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white font-display leading-tight">
                {items[activeIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-sage-100/90 leading-relaxed font-sans line-clamp-3">
                {items[activeIndex].description}
              </p>
              {items[activeIndex].highlights && (
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {items[activeIndex].highlights.map((h, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/10">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls and Indicators */}
      <div className="flex items-center justify-between mt-5 sm:mt-6 px-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-6 sm:w-8 bg-amber-500'
                  : 'w-2 bg-emerald-900/20 hover:bg-emerald-900/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-sage-100 text-emerald-900 border border-emerald-900/10 flex items-center justify-center transition-colors shadow-sm active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors shadow-sm active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
