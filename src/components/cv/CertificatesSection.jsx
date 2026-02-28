import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  {
    id: 'cert_001',
    title: 'Foundations of Business Analysis',
    issuer: 'SAP',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_002',
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_003',
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'IBM',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_004',
    title: 'Project Development in Python',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_005',
    title: 'Introduction to Software Engineering',
    issuer: 'IBM',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_006',
    title: 'Introduction to HTML, CSS & JavaScript',
    issuer: 'IBM',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_007',
    title: 'Aerospace Engineer',
    issuer: 'Rolls-Royce',
    status: 'CERTIFIED',
    icon: Award
  },
  {
    id: 'cert_008',
    title: 'Future-Ready Skills',
    issuer: 'Rolls-Royce',
    status: 'CERTIFIED',
    icon: Award
  }
];

export default function CertificatesSection() {
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
              CERTIFICATES.log
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a2a3a] to-transparent" />
          </div>
          <p className="text-[#3a4a5a] text-sm tracking-widest">
            // PROFESSIONAL_CREDENTIALS
          </p>
        </motion.div>

        {/* Certificates Timeline */}
        <div className="space-y-4">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                onClick={() => window.open('https://github.com/MujtabaTaimur/CS_Course', '_blank')}
                className="flex gap-4 cursor-pointer group"
              >
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center pt-1">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-[#00ff88] border-2 border-[#0b0f14] relative"
                    whileHover={{ scale: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#00ff88]"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  {index !== certificates.length - 1 && (
                    <motion.div 
                      className="w-0.5 h-16 bg-gradient-to-b from-[#00ff88] to-[#1a2a3a] mt-2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}
                </div>

                {/* Certificate card content */}
                <motion.div 
                  className="flex-1 bg-[#0d1117] border border-[#1a2a3a] rounded-lg p-4 mb-2 relative overflow-hidden"
                  whileHover={{ 
                    borderColor: "#00ff88",
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/0 via-[#00ff88]/10 to-[#00ff88]/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="text-[#00ff88] flex-shrink-0" size={18} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#00ff88] text-sm font-bold tracking-wider truncate">
                          {cert.title}
                        </h3>
                        <p className="text-[#00d4ff] text-xs tracking-wider mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <motion.span 
                      className="text-[10px] px-2 py-1 rounded bg-[#00ff88]/10 text-[#00ff88] tracking-wider whitespace-nowrap ml-2"
                      whileHover={{ 
                        backgroundColor: "rgba(0, 255, 136, 0.2)",
                        scale: 1.1
                      }}
                    >
                      {cert.status}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
