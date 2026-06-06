import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Briefcase } from 'lucide-react';

export default function ContactSection() {
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="system-section alt">
      <div className="system-container narrow">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-title-row">
            <span className="section-node" aria-hidden="true" />
            <h2>
              CONTACT.sh
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // INITIATE_CONNECTION
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="system-panel"
        >
          <div className="panel-topline">
            <div className="panel-dots" aria-hidden="true">
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-dot" />
            </div>
            <span className="panel-id">contact_protocol.sh</span>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="dim-text text-xs mb-6 tracking-[0.08em]">
              Initializing contact protocol...
              <span className="mt-green ml-2">OK</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="contact-row"
            >
              <Github size={18} className="mt-cyan flex-shrink-0" />
              <div>
                <span className="dim-text">GITHUB:</span>
                <a 
                  href="https://github.com/MujtabaTaimur" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  github.com/MujtabaTaimur
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="contact-row"
            >
              <Briefcase size={18} className="mt-green flex-shrink-0" />
              <div>
                <span className="dim-text">STATUS:</span>
                <span className="mt-green ml-2 animate-pulse">
                  ● Open to Work Experience Opportunities
                </span>
              </div>
            </motion.div>
            
            <div className="mt-8 pt-4 border-t border-[rgba(150,170,190,0.16)]">
              <div className="text-sm">
                <span className="mt-green">mujtaba@engineering</span>
                <span className="text-[var(--mt-text)]">:</span>
                <span className="mt-cyan">~</span>
                <span className="text-[var(--mt-text)]">$ </span>
                <span className="text-[var(--mt-text)]">./ready_for_opportunities.sh</span>
                <span className={`mt-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="footer-rule mb-4" />
          <p className="dim-text text-xs">
            SYSTEM_BUILD: 2025 | ENGINEERING PORTFOLIO
          </p>
          <p className="mt-green text-xs mt-2 tracking-wider">
            "PRECISION. PERFORMANCE. EXCELLENCE."
          </p>
          <div className="footer-rule mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
