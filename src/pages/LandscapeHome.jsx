import React, { useEffect, useState } from 'react';
import Navigation from '@/components/cv/Navigation';
import LandscapeHeroSection from '@/components/cv/LandscapeHeroSection';
import AboutSection from '@/components/cv/AboutSection';
import ProjectsSection from '@/components/cv/ProjectsSection';
import CyclingSection from '@/components/cv/CyclingSection';
import CertificatesSection from '@/components/cv/CertificatesSection';
import ContactSection from '@/components/cv/ContactSection';

export default function LandscapeHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mt-app landscape-page font-mono">
      <Navigation />

      <div
        className="system-grid"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
        aria-hidden="true"
      />
      <div className="system-vignette" aria-hidden="true" />
      <div className="system-depth" aria-hidden="true" />
      <div className="system-scanlines" aria-hidden="true" />

      <div className="relative z-10">
        <div id="hero">
          <LandscapeHeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="cycling">
          <CyclingSection />
        </div>
        <div id="certificates">
          <CertificatesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
