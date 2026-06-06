import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 'skill_001',
    category: 'PROGRAMMING',
    skills: ['Python', 'JavaScript', 'C++', 'MATLAB', 'SQL'],
    level: 'INTERMEDIATE'
  },
  {
    id: 'skill_002',
    category: 'FRAMEWORKS',
    skills: ['React', 'Node.js', 'PyTorch', 'TensorFlow', 'Express'],
    level: 'INTERMEDIATE'
  },
  {
    id: 'skill_003',
    category: 'TOOLS',
    skills: ['Git', 'Docker', 'VS Code', 'Linux', 'CAD'],
    level: 'INTERMEDIATE'
  },
  {
    id: 'skill_004',
    category: 'DATABASES',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    level: 'BEGINNER'
  }
];

export default function SkillsSection() {
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
              SKILLS.lib
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // TECHNICAL_CAPABILITIES_MATRIX
          </p>
        </motion.div>
        
        <div className="system-grid-layout two">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
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
                <span className="panel-id">{category.id}</span>
              </div>
              
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">
                    {category.category}
                  </h3>
                  <span className="level-chip">
                    {category.level}
                  </span>
                </div>
                
                <div className="tag-list">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="system-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
