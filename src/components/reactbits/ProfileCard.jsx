import React, { useRef, useState } from 'react';
import { UserCheck, Award, Mail, ChevronRight } from 'lucide-react';

export default function ProfileCard({
  name = "[Principal's Name - Pending Client Confirmation]",
  title = "Principal, LCH SGT High School",
  image = null,
  quote = "Education is more than academic learning. It is about nurturing confidence, encouraging curiosity, and helping every child discover their potential.",
  onMessageClick,
  onContactClick,
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle restrained tilt (-6 to +6 degrees)
    const rotX = -((y - centerY) / centerY) * 6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position percentage
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      className="perspective-1000 w-full max-w-md mx-auto"
      style={{ perspective: '1200px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-2xl bg-gradient-to-br from-white via-ivory-50 to-sage-50 border border-emerald-900/10 shadow-elevated p-8 overflow-hidden group hover:shadow-premium"
      >
        {/* Subtle holographic sheen edge */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(245, 158, 11, 0.12), rgba(6, 78, 59, 0.08) 60%, transparent 80%)`,
            opacity: glarePosition.opacity,
          }}
        />

        {/* Top badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide border border-emerald-200/60">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>School Leadership</span>
          </div>
          <span className="text-[11px] font-mono tracking-wider text-charcoal-600/70 uppercase">
            Est. 40 Years
          </span>
        </div>

        {/* Portrait container */}
        <div className="relative mx-auto w-44 h-44 rounded-2xl p-1 bg-gradient-to-tr from-emerald-800 via-amber-400 to-emerald-600 shadow-md mb-6">
          <div className="w-full h-full rounded-[14px] bg-sage-100 flex flex-col items-center justify-center overflow-hidden border border-white">
            {image ? (
              <img src={image} alt="Principal Portrait" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-900/10 flex items-center justify-center text-emerald-800 mb-2">
                  <UserCheck className="w-8 h-8 text-emerald-700" />
                </div>
                <p className="text-[11px] font-semibold text-emerald-900">
                  Principal's Portrait
                </p>
                <p className="text-[10px] text-charcoal-600/80 mt-0.5">
                  Replaceable Photo Placeholder
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-1">
          <h3 className="text-xl font-bold text-emerald-950 font-display tracking-tight">
            {name}
          </h3>
          <p className="text-sm font-medium text-amber-700">
            {title}
          </p>
        </div>

        {/* Verified Notice Note */}
        <div className="mt-4 pt-4 border-t border-emerald-900/10 text-center">
          <p className="text-xs text-charcoal-700/80 italic font-serif leading-relaxed px-2">
            "{quote}"
          </p>
          <div className="mt-2 text-[10px] text-emerald-800/60 uppercase tracking-widest font-mono">
            Draft Copy for Client Review
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <a
            href="#principal-message"
            onClick={onMessageClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
          >
            <span>Read Message</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
          <a
            href="#contact"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-sage-50 text-emerald-900 text-xs font-semibold tracking-wide border border-emerald-900/20 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>Contact School</span>
          </a>
        </div>
      </div>
    </div>
  );
}
