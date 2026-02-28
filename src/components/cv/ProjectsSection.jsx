import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'proj_001',
    title: 'AEROSCOPE_V2',
    tech: 'React & Leaflet',
    description: 'Real-time flight tracking app inspired by FlightRadar24, built with React, TypeScript, Vite, and Tailwind CSS, using Leaflet for interactive maps and the OpenSky Network API for live flight data.',
    status: 'OPERATIONAL',
    repoUrl: 'https://github.com/MujtabaTaimur/Aeroscope-v2-'
  },
  {
    id: 'proj_002',
    title: 'AI_CHATBOT',
    tech: 'PyTorch & NLP',
    description: 'Natural language processing system with machine learning capabilities for intelligent conversation handling.',
    status: 'OPERATIONAL',
    repoUrl: 'https://github.com/MujtabaTaimur'
  },
  {
    id: 'proj_003',
    title: 'SCIENTIFIC_CALC',
    tech: 'Python',
    description: 'Advanced mathematical computation tool supporting complex scientific and engineering calculations.',
    status: 'OPERATIONAL',
    repoUrl: 'https://github.com/MujtabaTaimur'
  },
  {
    id: 'proj_004',
    title: 'ThermostatDesign',
    tech: 'HTML & CSS',
    description: 'Front-end course project that showcases an interactive thermostat user interface built using HTML and CSS. The project focuses on clean layout design, visual styling, and engaging user interaction, including animated elements such as a dinosaur and rocket to enhance the user experience.',
    status: 'OPERATIONAL',
    repoUrl: 'https://github.com/MujtabaTaimur'
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0e12]">
      <div className="max-w-6xl mx-auto">
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
              PROJECTS.dir
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a2a3a] to-transparent" />
          </div>
          <p className="text-[#3a4a5a] text-sm tracking-widest">
            // TECHNICAL_PORTFOLIO_INDEX
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0d1117] border border-[#1a2a3a] rounded-lg overflow-hidden hover:border-[#00ff88] transition-colors duration-300"
            >
              {/* Terminal Header */}
              <div className="bg-[#161b22] px-4 py-2 border-b border-[#1a2a3a] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[#3a4a5a] text-xs">{project.id}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[#00ff88] text-lg font-bold tracking-wider">
                      {project.title}
                    </h3>
                    <p className="text-[#00d4ff] text-xs tracking-wider mt-1">
                      [{project.tech}]
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'OPERATIONAL' 
                      ? 'bg-[#00ff88]/10 text-[#00ff88]' 
                      : 'bg-[#ffbd2e]/10 text-[#ffbd2e]'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-[#8b949e] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a2a3a] hover:bg-[#243447] text-[#00d4ff] px-4 py-2 rounded text-xs tracking-wider transition-colors duration-200 border border-[#2a3a4a] hover:border-[#00d4ff]"
                >
                  <span>[</span>
                  <span>VIEW_REPOSITORY</span>
                  <ExternalLink size={12} />
                  <span>]</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}