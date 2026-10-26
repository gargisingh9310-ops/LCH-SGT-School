import React from 'react';
import { HeartHandshake, BookOpen, Users, Building, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CSRBanner({ onOpenCSRModal }) {
  const supportAreas = [
    {
      title: 'Educational Resources',
      desc: 'Sponsoring library volumes, STEM lab equipment, science kits, and digital learning software tools.',
      icon: BookOpen,
    },
    {
      title: 'Student Development',
      desc: 'Supporting sports training equipment, nutrition, extracurricular coaches, and academic mentorship programs.',
      icon: Users,
    },
    {
      title: 'School & Learning Facilities',
      desc: 'Assisting campus infrastructure upgrades, solar power, smart boards, clean water systems, and classroom enhancements.',
      icon: Building,
    },
  ];

  return (
    <section id="csr-banner" className="py-24 emerald-gradient-bg text-white relative overflow-hidden border-t border-emerald-800">
      
      {/* Decorative Gold Lighting Accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy and High Impact Message */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Corporate Social Responsibility & Philanthropy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Your Partnership Can Help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Shape a Brighter Future
              </span>
            </h2>

            <p className="text-base sm:text-lg text-sage-100/90 leading-relaxed font-sans max-w-2xl">
              Join us in exploring opportunities to support education, student wellbeing, and meaningful community development.
            </p>

            {/* 3 Potential Support Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {supportAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {area.title}
                    </h3>
                    <p className="text-xs text-sage-200/80 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Regulatory Transparency Note */}
            <p className="text-[11px] text-sage-300/70 italic font-sans pt-1">
              * Potential areas for collaboration subject to school requirements and mutual agreement. Specific partnership frameworks and documentation discussed directly with school leadership.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenCSRModal}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-charcoal-950 font-bold text-sm tracking-wide shadow-gold-glow hover:shadow-premium transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <HeartHandshake className="w-5 h-5 text-charcoal-950" />
                <span>Discuss a CSR Partnership</span>
                <ArrowRight className="w-4 h-4 text-charcoal-950 ml-1" />
              </button>
            </div>

          </div>

          {/* Right Side: Authentic Visual Card with School Patron Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-amber-400/30 group">
              <img
                src="/assets/images/school_building.jpg"
                alt="Students & Campus"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/logos/lions_club_badge.png"
                    alt="Lions Club"
                    className="h-10 w-auto object-contain rounded"
                  />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white">
                      Lions Club of Hyderabad
                    </span>
                    <span className="block text-[10px] text-amber-300">
                      Hope · Faith · Charity
                    </span>
                  </div>
                </div>
                <p className="text-xs text-sage-100/90 leading-relaxed font-sans pt-1">
                  Investing in education today builds an empowered, self-reliant generation for tomorrow.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
