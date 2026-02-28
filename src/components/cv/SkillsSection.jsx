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
    <section className="py-24 px-6 bg-[#0b0f14]">
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
              SKILLS.lib
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a2a3a] to-transparent" />
          </div>
          <p className="text-[#3a4a5a] text-sm tracking-widest">
            // TECHNICAL_CAPABILITIES_MATRIX
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
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
                <span className="text-[#3a4a5a] text-xs">{category.id}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#00ff88] text-lg font-bold tracking-wider">
                    {category.category}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded bg-[#00d4ff]/10 text-[#00d4ff]">
                    {category.level}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1a2a3a] text-[#8b949e] px-3 py-1 rounded text-xs tracking-wider border border-[#2a3a4a] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors duration-200"
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