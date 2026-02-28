import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'cycling', label: 'TELEMETRY' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'certificates', label: 'CERTIFICATES' },
  { id: 'contact', label: 'CONTACT' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0b0f14]/95 backdrop-blur-sm border-b border-[#1a2a3a]' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#00ff88] font-bold tracking-wider text-sm hover:text-[#00d4ff] transition-colors"
            >
              MT_SYSTEMS
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-4 py-2 text-xs text-[#8b949e] hover:text-[#00ff88] transition-colors tracking-wider border border-transparent hover:border-[#1a2a3a] rounded"
                >
                  [{section.label}]
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#00ff88] hover:text-[#00d4ff] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-40 md:hidden bg-[#0b0f14]/98 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(section.id)}
                className="text-xl text-[#8b949e] hover:text-[#00ff88] transition-colors tracking-wider"
              >
                <span className="text-[#3a4a5a]">{'>'}</span> {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}