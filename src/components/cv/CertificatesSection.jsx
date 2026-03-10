import React from 'react';
import { motion } from 'framer-motion';

const companyMeta = {
  'SAP':                        { color: '#f0a030', initials: 'SAP' },
  'IBM':                        { color: '#1f70c1', initials: 'IBM' },
  'Microsoft':                  { color: '#00a4ef', initials: 'MS'  },
  'Rolls-Royce':                { color: '#c9a84c', initials: 'RR'  },
  'IChemE':                     { color: '#00c896', initials: 'ICE' },
  'Siemens':                    { color: '#00bedc', initials: 'SIE' },
  'University of Huddersfield': { color: '#a855f7', initials: 'UoH' },
};

const certificates = [
  { id: 'cert_001', title: 'Foundations of Business Analysis',                        issuer: 'SAP'                        },
  { id: 'cert_002', title: 'Introduction to Cloud Computing',                          issuer: 'IBM'                        },
  { id: 'cert_003', title: 'Exploratory Data Analysis for Machine Learning',           issuer: 'IBM'                        },
  { id: 'cert_004', title: 'Project Development in Python',                            issuer: 'Microsoft'                  },
  { id: 'cert_005', title: 'Introduction to Software Engineering',                     issuer: 'IBM'                        },
  { id: 'cert_006', title: 'Introduction to HTML, CSS & JavaScript',                   issuer: 'IBM'                        },
  { id: 'cert_007', title: 'Aerospace Engineer',                                       issuer: 'Rolls-Royce'                },
  { id: 'cert_008', title: 'Future-Ready Skills',                                      issuer: 'Rolls-Royce'                },
  { id: 'cert_009', title: 'IChemE Sprint: Process Engineering in the Energy Sector',  issuer: 'IChemE'                     },
  { id: 'cert_010', title: 'Siemens: Engineering',                                     issuer: 'Siemens'                    },
  { id: 'cert_011', title: 'Motorsport Engineering with Luke Barron',                  issuer: 'University of Huddersfield' },
  { id: 'cert_012', title: 'Rolls-Royce: Fitter/Machinist',                            issuer: 'Rolls-Royce'                },
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => {
            const meta = companyMeta[cert.issuer] ?? { color: '#00ff88', initials: '??' };

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => window.open('https://github.com/MujtabaTaimur/CS_Course', '_blank')}
                className="cursor-pointer bg-[#0d1117] border border-[#1a2a3a] rounded-lg overflow-hidden hover:border-[#00ff88] transition-colors duration-300"
              >
                {/* Terminal Header */}
                <div className="bg-[#161b22] px-4 py-2 border-b border-[#1a2a3a] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[#3a4a5a] text-xs">{cert.id}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#00ff88] text-base font-bold tracking-wider leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-[#00d4ff] text-xs tracking-wider mt-2">
                        [{cert.issuer}]
                      </p>
                    </div>
                    {/* Company badge */}
                    <span
                      className="flex-shrink-0 text-[10px] font-extrabold tracking-widest px-2 py-1 rounded mt-0.5"
                      style={{
                        color: meta.color,
                        backgroundColor: `${meta.color}18`,
                        border: `1px solid ${meta.color}40`,
                      }}
                    >
                      {meta.initials}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
