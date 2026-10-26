import React, { useEffect, useState } from 'react';

export default function TextLoop({
  words = ["LEARN", "GROW", "DISCOVER"],
  interval = 2400,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 350); // half transition
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={`inline-flex items-center gap-2 overflow-hidden h-7 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 font-semibold text-xs sm:text-sm tracking-widest uppercase ${className}`}>
      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
      <span
        className={`transition-all duration-300 transform inline-block ${
          isAnimating
            ? 'opacity-0 -translate-y-2'
            : 'opacity-100 translate-y-0'
        }`}
      >
        {words[index]}
      </span>
      <span className="text-white/40">·</span>
      <span className="text-white/80 text-[11px] font-normal tracking-wider lowercase">
        every day an opportunity
      </span>
    </div>
  );
}
