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
    status: 'IN_DEVELOPMENT',
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
    <section className="system-section alt">
      <div className="system-container">
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
              PROJECTS.dir
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // TECHNICAL_PORTFOLIO_INDEX
          </p>
        </motion.div>

        <div className="system-grid-layout two">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="system-panel"
            >
              <div className="panel-topline">
                <div className="panel-dots" aria-hidden="true">
                  <span className="panel-dot" />
                  <span className="panel-dot" />
                  <span className="panel-dot" />
                </div>
                <span className="panel-id">{project.id}</span>
              </div>

              <div className="card-body">
                <div className="card-title-row">
                  <div>
                    <h3 className="card-title">
                      {project.title}
                    </h3>
                    <p className="card-subtitle">
                      [{project.tech}]
                    </p>
                  </div>
                  <span className={`status-chip ${project.status === 'OPERATIONAL' ? '' : 'dev'}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="muted-text text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="system-button"
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
