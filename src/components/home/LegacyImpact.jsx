import React from 'react';
import { Award, HeartHandshake, Sparkles, Building2, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import CountUp from '../reactbits/CountUp';

export default function LegacyImpact({ onOpenCSRModal }) {
  const pillars = [
    {
      title: 'Holistic Student Development',
      description: 'Balancing academic curriculum with daily mindfulness, physical education, creative arts, and moral discipline.',
      icon: Sparkles,
      accent: 'from-emerald-500/10 to-emerald-500/20',
      badge: 'Balanced Curriculum',
    },
    {
      title: 'Community-Supported Education',
      description: 'Established with the civic mission of the Lions Club of Hyderabad to ensure high-quality schooling remains accessible.',
      icon: ShieldCheck,
      accent: 'from-amber-500/10 to-amber-500/20',
      badge: 'Civic Mission',
    },
    {
      title: 'Opportunities for Corporate Partnership',
      description: 'Inviting socially conscious corporate organizations to invest in modern labs, digital classrooms, and student welfare.',
      icon: HeartHandshake,
      accent: 'from-emerald-600/10 to-emerald-700/20',
      badge: 'CSR Co-Creation',
    },
  ];

  return (
    <section id="legacy" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Honoring Our Foundation · 1984 – 2024</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-emerald-950 font-display tracking-tight leading-tight">
            40 Years of Excellence.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
              A Future Full of Possibilities.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-charcoal-700/90 leading-relaxed font-sans">
            Supported by the Lions Club of Hyderabad, LCH SGT High School is committed to creating meaningful educational opportunities and encouraging the holistic development of children.
          </p>
        </div>

        {/* Deep Emerald Accent Panel celebrating the 40+ Years Legacy */}
        <div className="relative rounded-3xl emerald-gradient-bg p-8 sm:p-12 lg:p-16 text-white shadow-premium overflow-hidden mb-16 border border-emerald-800">
          
          {/* Background Ambient Glow & Watermark Logo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
            <img src="/assets/logos/school_logo_transparent.png" alt="" className="w-96 h-96 object-contain" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Stat Counter: ONLY the verified 40+ figure */}
            <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-emerald-800/80 pb-8 lg:pb-0 lg:pr-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3 border border-amber-400/20">
                Verified Historic Milestone
              </div>

              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white font-display tracking-tight flex items-center justify-center lg:justify-start">
                <CountUp to={40} suffix="+" duration={2.2} className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-display">
                Years of Educational Excellence
              </h3>

              <p className="text-xs sm:text-sm text-sage-200/90 mt-2 leading-relaxed">
                Celebrating four continuous decades of service to young minds and families in Hyderabad.
              </p>

              {/* Lions Club Badge integration in panel */}
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <img
                  src="/assets/logos/lions_club_badge.png"
                  alt="Lions Club of Hyderabad"
                  className="h-12 w-auto object-contain rounded"
                />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Lions Club of Hyderabad</div>
                  <div className="text-[11px] text-amber-300">Patron & Civic Support Partner</div>
                </div>
              </div>
            </div>

            {/* Right Overview & Client Verified Stats Note */}
            <div className="lg:col-span-7 space-y-5 lg:pl-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Our Educational Mission
              </span>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-snug">
                Every Child. Every Talent. Every Step Towards a Brighter Future.
              </h4>

              <p className="text-sm sm:text-base text-sage-100/90 leading-relaxed font-sans">
                Since its founding, LCH SGT High School has provided a nurturing haven where children from diverse backgrounds discover confidence, build strong ethical foundations, and cultivate skills for tomorrow.
              </p>

              {/* Note on verified statistics */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-sage-200/80 leading-relaxed">
                <strong className="text-amber-300 font-semibold block mb-1">
                  Integrity & Data Policy:
                </strong>
                In keeping with strict client requirements, only the verified 40-year milestone is animated. Detailed metrics regarding student body, alumni achievements, and donor support can be included in future phases upon official verification.
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenCSRModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-charcoal-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Support Our Mission (CSR)</span>
                </button>
                <a
                  href="#facilities"
                  className="text-xs font-semibold text-white/90 hover:text-amber-300 underline underline-offset-4 transition-colors"
                >
                  Explore Campus Facilities →
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Educational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-8 rounded-2xl bg-ivory-50 border border-emerald-900/10 hover:border-amber-500/40 transition-all duration-300 hover:shadow-elevated transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white text-emerald-900 border border-emerald-900/10">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-emerald-950 font-display mb-3 group-hover:text-amber-700 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
