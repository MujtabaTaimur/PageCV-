import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="system-section">
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
              ABOUT.exe
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // SYSTEM_PROFILE_LOADED
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="system-panel"
        >
          <div className="panel-topline">
            <div className="panel-dots" aria-hidden="true">
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-dot" />
            </div>
            <span className="panel-id">profile.txt</span>
          </div>

          <div className="card-body system-copy">
            <p>
              <span className="mt-green">{'>'}</span> Year 10 student in London pursuing{' '}
              <span className="mt-cyan">AQA Higher Sciences</span>,{' '}
              <span className="mt-cyan">Edexcel Maths Higher</span>, and{' '}
              <span className="mt-cyan">OCR Computer Science</span>. Currently seeking a 
              short work experience placement with a technology, engineering, AI, hardware, or startup team.
            </p>
            
            <p>
              <span className="mt-green">{'>'}</span> I learn by building: web apps, 
              AI tools, automation scripts, server and homelab projects, and 
              training analytics systems that connect sport, data, and performance.
            </p>
            
            <p>
              <span className="mt-green">{'>'}</span> Competitive cycling at national and 
              international level has taught me that useful engineering needs both{' '}
              <span className="mt-cyan">analytical precision</span> and{' '}
              <span className="mt-cyan">disciplined execution</span>: measure carefully, 
              improve quickly, and do the hard work consistently.
            </p>

            <div className="mt-6 pt-4 border-t border-[rgba(150,170,190,0.16)] dim-text text-xs tracking-[0.08em]">
              STATUS: Week Beginning 6th July 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
