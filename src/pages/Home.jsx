import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import PrincipalMessage from '../components/home/PrincipalMessage';
import LegacyImpact from '../components/home/LegacyImpact';
import FacilitiesGrid from '../components/home/FacilitiesGrid';
import ActivitiesCarousel from '../components/home/ActivitiesCarousel';
import CSRBanner from '../components/home/CSRBanner';
import { CSRModal, FacilityModal, AdmissionsModal } from '../components/ui/Modals';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [csrModalOpen, setCsrModalOpen] = useState(false);
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Single Lenis instance with smooth wheel
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal-900">
      
      {/* Refined Institutional Header */}
      <Header
        onOpenCSRModal={() => setCsrModalOpen(true)}
        onOpenAdmissionsModal={() => setAdmissionsModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 1. Hero Section with ParticleText & Warm Natural Sunlight */}
        <Hero
          onOpenCSRModal={() => setCsrModalOpen(true)}
        />

        {/* 2. Principal's Message with React Bits ProfileCard */}
        <PrincipalMessage
          onContactClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Legacy and Impact celebrating 40+ Years of Educational Excellence */}
        <LegacyImpact
          onOpenCSRModal={() => setCsrModalOpen(true)}
        />

        {/* 4. Campus Facilities — 10 Interactive Image Cards */}
        <FacilitiesGrid
          onFacilityClick={(facility) => setSelectedFacility(facility)}
        />

        {/* 5. Activities and Campus Life — React Bits FlexCarousel */}
        <ActivitiesCarousel />

        {/* 6. CSR Partnership High-Impact Banner */}
        <CSRBanner
          onOpenCSRModal={() => setCsrModalOpen(true)}
        />
      </main>

      {/* Institutional Final Contact Bar & Footer */}
      <Footer
        onOpenCSRModal={() => setCsrModalOpen(true)}
        onOpenAdmissionsModal={() => setAdmissionsModalOpen(true)}
      />

      {/* Interactive Modals */}
      <CSRModal
        isOpen={csrModalOpen}
        onClose={() => setCsrModalOpen(false)}
      />

      <FacilityModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />

      <AdmissionsModal
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
      />
    </div>
  );
}
