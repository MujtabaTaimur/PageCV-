import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
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
              ABOUT.exe
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a2a3a] to-transparent" />
          </div>
          <p className="text-[#3a4a5a] text-sm tracking-widest">
            // SYSTEM_PROFILE_LOADED
          </p>
        </motion.div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0d1117] border border-[#1a2a3a] rounded-lg p-6 md:p-8"
        >
          <div className="text-[#3a4a5a] text-xs mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4">profile.txt</span>
          </div>
          
          <div className="space-y-4 text-[#e0e0e0] leading-relaxed">
            <p>
              <span className="text-[#00ff88]">{'>'}</span> Year 10 student pursuing{' '}
              <span className="text-[#00d4ff]">AQA Higher Sciences</span>,{' '}
              <span className="text-[#00d4ff]">Edexcel Maths Higher</span>, and{' '}
              <span className="text-[#00d4ff]">OCR Computer Science</span>, with a focused 
              interest in engineering and technical problem-solving.
            </p>
            
            <p>
              <span className="text-[#00ff88]">{'>'}</span> Passionate about understanding{' '}
              <span className="text-[#00ff88]">complex systems</span>,{' '}
              <span className="text-[#00ff88]">mechanical engineering</span>, and{' '}
              <span className="text-[#00ff88]">system optimisation</span>—driven by 
              curiosity about how things work.
            </p>
            
            <p>
              <span className="text-[#00ff88]">{'>'}</span> Combining technical curiosity with 
              competitive athletics has taught me that excellence requires both{' '}
              <span className="text-[#00d4ff]">analytical precision</span> and{' '}
              <span className="text-[#00d4ff]">disciplined execution</span>.
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-[#1a2a3a] text-[#3a4a5a] text-xs">
            STATUS: Ready for engineering challenges
          </div>
        </motion.div>
      </div>
    </section>
  );
}