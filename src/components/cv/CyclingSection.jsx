import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { event: 'National 10 Mile Time Trials', result: '1st - 21:59', category: 'National' },
  { event: 'European Junior Cycling Tour Assen', result: '4th Overall', category: 'International' },
  { event: 'National Youth Omnium Finals', result: '2nd Place', category: 'National' },
  { event: 'National Youth Circuit Championships', result: '2nd Place', category: 'National' },
  { event: 'Youth Tour of Scotland', result: '3rd Overall', category: 'International' }
];

export default function CyclingSection() {
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
              ACHIEVEMENTS.log
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // PERFORMANCE_AND_DISCIPLINE_SIGNAL
          </p>
        </motion.div>
        
        <div className="system-grid-layout two">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="system-panel"
          >
            <div className="panel-topline">
              <span className="mt-green text-sm tracking-wider">RACE_LOG.txt</span>
              <span className="panel-id">telemetry_feed</span>
            </div>
            
            <div className="card-body py-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="telemetry-row"
                >
                  <div className="flex-1">
                    <p className="text-[var(--mt-text)] text-sm leading-relaxed">
                      <span className="dim-text">{'>'}</span> {achievement.event}
                    </p>
                    <p className="dim-text text-xs mt-1">[{achievement.category}]</p>
                  </div>
                  <span className="mt-green text-sm font-bold whitespace-nowrap">
                    {achievement.result}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="system-panel"
          >
            <div className="panel-topline">
              <span className="mt-green text-sm tracking-wider">TRANSFER.log</span>
              <span className="panel-id">engineering_signal</span>
            </div>
            
            <div className="card-body">
              <div className="card-title-row">
                <div>
                  <h3 className="card-title">PERFORMANCE_SYSTEM</h3>
                  <p className="card-subtitle">[Sport discipline to engineering practice]</p>
                </div>
              </div>
              <p className="muted-text text-sm leading-relaxed mb-2">
                Cycling has trained the same habits engineering teams need: measure the system, find the bottleneck, test a change, and execute under pressure.
              </p>
              <div className="transfer-rows">
                <div className="telemetry-row">
                  <div>
                    <p className="text-[var(--mt-text)] text-sm leading-relaxed"><span className="dim-text">{'>'}</span> Measure</p>
                    <p className="dim-text text-xs mt-1">[training data, feedback, repeat testing]</p>
                  </div>
                  <span className="mt-green text-sm font-bold whitespace-nowrap">DATA</span>
                </div>
                <div className="telemetry-row">
                  <div>
                    <p className="text-[var(--mt-text)] text-sm leading-relaxed"><span className="dim-text">{'>'}</span> Improve</p>
                    <p className="dim-text text-xs mt-1">[small changes, clear result checks]</p>
                  </div>
                  <span className="mt-green text-sm font-bold whitespace-nowrap">ITERATE</span>
                </div>
                <div className="telemetry-row">
                  <div>
                    <p className="text-[var(--mt-text)] text-sm leading-relaxed"><span className="dim-text">{'>'}</span> Execute</p>
                    <p className="dim-text text-xs mt-1">[calm decisions under pressure]</p>
                  </div>
                  <span className="mt-green text-sm font-bold whitespace-nowrap">DELIVER</span>
                </div>
              </div>
              <div className="tag-list mt-5">
                <span className="system-tag">Training analytics</span>
                <span className="system-tag">Marginal gains</span>
                <span className="system-tag">System discipline</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
