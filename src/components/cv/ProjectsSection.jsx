import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'proj_001',
    title: 'AEROSCOPE_V2',
    tech: 'React, TypeScript, Leaflet, OpenSky API',
    description: 'Displays live aircraft positions on an interactive Leaflet map using OpenSky Network data. The interface includes flight markers, map controls, responsive layout, loading states, and frontend updates from API responses.',
    status: 'OPERATIONAL',
    repoUrl: 'https://github.com/MujtabaTaimur/Aeroscope-v2-'
  },
  {
    id: 'proj_002',
    title: 'AI_CHATBOT',
    tech: 'Python, PyTorch, NLTK',
    description: 'PyTorch intent-classification chatbot with NLTK preprocessing, tokenization, lemmatization, bag-of-words vector generation, model training, and inference against a custom intents dataset.',
    status: 'IN_DEVELOPMENT',
    repoUrl: 'https://github.com/MujtabaTaimur/AI-ChatBot-Pytorch-'
  },
  {
    id: 'proj_003',
    title: 'ThermostatDesign',
    tech: 'HTML & CSS',
    description: 'Single-page thermostat interface built with HTML and CSS. The UI presents temperature controls, visual state changes, structured layout, responsive styling, and animated interface details.',
    status: 'OPERATIONAL',
    repoUrl: 'https://github.com/MujtabaTaimur/ThermostatDesign'
  },
  {
    id: 'proj_004',
    title: 'SERVER_HOMELAB',
    tech: 'Linux, networking, self-hosting',
    description: 'Server and homelab environment for experimenting with Linux services, networking, SSH access, deployment workflows, automation scripts, and self-hosted tools.',
    status: 'IN_PROGRESS',
    repoUrl: null
  },
  {
    id: 'proj_005',
    title: 'TRAINING_ANALYTICS',
    tech: 'Data, performance, dashboards',
    description: 'Training analytics dashboard concept for cycling performance data, structured training logs, metric tracking, comparison views, and feedback loops for analysing progress over time.',
    status: 'IN_PROGRESS',
    repoUrl: null
  },
  {
    id: 'proj_006',
    title: 'INSTAMATH',
    tech: 'Swift, OCR, AI concept',
    description: 'Swift app prototype for photo-based maths input, OCR workflow exploration, question parsing, and AI-assisted explanation screens for step-by-step learning.',
    status: 'IN_DEVELOPMENT',
    repoUrl: 'https://github.com/MujtabaTaimur/InstaMath'
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
                
                {project.repoUrl ? (
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
                ) : (
                  <span className="system-button disabled">
                    <span>[</span>
                    <span>CASE_STUDY_PENDING</span>
                    <span>]</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
