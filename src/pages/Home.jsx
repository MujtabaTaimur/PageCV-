import React, { useState, useEffect } from 'react';
import Navigation from '@/components/cv/Navigation';
import HeroSection from '@/components/cv/HeroSection';
import AboutSection from '@/components/cv/AboutSection';
import ProjectsSection from '@/components/cv/ProjectsSection';
import CyclingSection from '@/components/cv/CyclingSection';
import SkillsSection from '@/components/cv/SkillsSection';
import CertificatesSection from '@/components/cv/CertificatesSection';
import ContactSection from '@/components/cv/ContactSection';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#e0e0e0] font-mono overflow-x-hidden">
      <Navigation />
      
      {/* Blueprint Grid Background with Parallax */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#00ff88 1px, transparent 1px),
            linear-gradient(90deg, #00ff88 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      
      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
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
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="certificates">
          <CertificatesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      
      {/* Scanline Effect */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.03) 2px, rgba(0,255,136,0.03) 4px)'
        }}
      />
    </div>
  );
}