import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Github, Briefcase } from 'lucide-react';

export default function ContactSection() {
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00ff88]">■</span>
            <h2 className="text-2xl md:text-3xl text-[#00d4ff] tracking-wider">
              CONTACT.sh
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a2a3a] to-transparent" />
          </div>
          <p className="text-[#3a4a5a] text-sm tracking-widest">
            // INITIATE_CONNECTION
          </p>
        </motion.div>
        
        {/* Command Prompt Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d1117] border border-[#1a2a3a] rounded-lg overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-[#1a2a3a] flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[#3a4a5a] text-xs ml-2">contact_protocol.sh</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 space-y-4">
            <div className="text-[#3a4a5a] text-xs mb-6">
              Initializing contact protocol...
              <span className="text-[#00ff88] ml-2">OK</span>
            </div>
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 py-3 border-b border-[#1a2a3a]"
            >
              <Phone size={18} className="text-[#00ff88]" />
              <div>
                <span className="text-[#3a4a5a]">CONTACT:</span>
                <a 
                  href="tel:07787022590" 
                  className="text-[#e0e0e0] ml-2 hover:text-[#00ff88] transition-colors"
                >
                  07787 022590
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 py-3 border-b border-[#1a2a3a]"
            >
              <Github size={18} className="text-[#00d4ff]" />
              <div>
                <span className="text-[#3a4a5a]">GITHUB:</span>
                <a 
                  href="https://github.com/MujtabaTaimur" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d4ff] ml-2 hover:text-[#00ff88] transition-colors"
                >
                  github.com/MujtabaTaimur
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 py-3"
            >
              <Briefcase size={18} className="text-[#ffbd2e]" />
              <div>
                <span className="text-[#3a4a5a]">STATUS:</span>
                <span className="text-[#00ff88] ml-2 animate-pulse">
                  ● Open to Work Experience Opportunities
                </span>
              </div>
            </motion.div>
            
            {/* Command Input */}
            <div className="mt-8 pt-4 border-t border-[#1a2a3a]">
              <div className="text-sm">
                <span className="text-[#00ff88]">mujtaba@engineering</span>
                <span className="text-[#e0e0e0]">:</span>
                <span className="text-[#00d4ff]">~</span>
                <span className="text-[#e0e0e0]">$ </span>
                <span className="text-[#e0e0e0]">./ready_for_opportunities.sh</span>
                <span className={`text-[#00ff88] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="text-[#3a4a5a] text-xs tracking-widest mb-4">
            ═══════════════════════════════════════
          </div>
          <p className="text-[#3a4a5a] text-xs">
            SYSTEM_BUILD: 2025 | ENGINEERING PORTFOLIO
          </p>
          <p className="text-[#00ff88] text-xs mt-2 tracking-wider">
            "PRECISION. PERFORMANCE. EXCELLENCE."
          </p>
          <div className="text-[#3a4a5a] text-xs tracking-widest mt-4">
            ═══════════════════════════════════════
          </div>
        </motion.div>
      </div>
    </section>
  );
}