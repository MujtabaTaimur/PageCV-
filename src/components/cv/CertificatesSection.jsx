import React from 'react';
import { motion } from 'framer-motion';

const companyMeta = {
  'SAP':                        { tone: 'green', initials: 'SAP' },
  'IBM':                        { tone: 'cyan', initials: 'IBM' },
  'Microsoft':                  { tone: 'cyan', initials: 'MS'  },
  'Rolls-Royce':                { tone: 'green', initials: 'RR'  },
  'IChemE':                     { tone: 'green', initials: 'ICE' },
  'Siemens':                    { tone: 'cyan', initials: 'SIE' },
  'University of Huddersfield': { tone: 'cyan', initials: 'UoH' },
  'Google':                     { tone: 'green', initials: 'GGL' },
};

const certificates = [
  { id: 'cert_001', title: 'Foundations of Business Analysis',                        issuer: 'SAP'                        },
  { id: 'cert_002', title: 'Introduction to Cloud Computing',                          issuer: 'IBM'                        },
  { id: 'cert_003', title: 'Exploratory Data Analysis for Machine Learning',           issuer: 'IBM'                        },
  { id: 'cert_004', title: 'Project Development in Python',                            issuer: 'Microsoft'                  },
  { id: 'cert_005', title: 'Introduction to Software Engineering',                     issuer: 'IBM'                        },
  { id: 'cert_006', title: 'Introduction to HTML, CSS & JavaScript',                   issuer: 'IBM'                        },
  { id: 'cert_007', title: 'Aerospace Engineer',                                       issuer: 'Rolls-Royce'                },
  { id: 'cert_010', title: 'Siemens: Engineering',                                     issuer: 'Siemens'                    },
  { id: 'cert_012', title: 'Rolls-Royce: Fitter/Machinist',                            issuer: 'Rolls-Royce'                },
  { id: 'cert_013', title: 'Foundations of Cybersecurity',                             issuer: 'Google'                     },
];

export default function CertificatesSection() {
  return (
    <section className="system-section">
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
              CERTIFICATES.log
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // PROFESSIONAL_CREDENTIALS
          </p>
        </motion.div>

        <div className="system-grid-layout two">
          {certificates.map((cert, index) => {
            const meta = companyMeta[cert.issuer] ?? { tone: 'green', initials: '??' };

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => window.open('https://github.com/MujtabaTaimur/CS_Course', '_blank')}
                className="system-panel clickable"
              >
                <div className="panel-topline">
                  <div className="panel-dots" aria-hidden="true">
                    <span className="panel-dot" />
                    <span className="panel-dot" />
                    <span className="panel-dot" />
                  </div>
                  <span className="panel-id">{cert.id}</span>
                </div>

                <div className="card-body">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="card-title text-base leading-snug">
                        {cert.title}
                      </h3>
                      <p className="card-subtitle mt-2">
                        [{cert.issuer}]
                      </p>
                    </div>
                    <span
                      className={`issuer-chip flex-shrink-0 mt-0.5 ${meta.tone === 'cyan' ? 'level-chip' : ''}`}
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
