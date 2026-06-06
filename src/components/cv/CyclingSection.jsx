import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const achievements = [
  { event: 'National 10 Mile Time Trials', result: '1st - 21:59', category: 'National' },
  { event: 'European Junior Cycling Tour Assen', result: '4th Overall', category: 'International' },
  { event: 'National Youth Omnium Finals', result: '2nd Place', category: 'National' },
  { event: 'National Youth Circuit Championships', result: '2nd Place', category: 'National' },
  { event: 'Youth Tour of Scotland', result: '3rd Overall', category: 'International' },
  { event: 'British Cycling National Points', result: '304 Points', category: '2025 Season' }
];

function AnimatedCounter({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    restDelta: 0.5 
  });
  
  const display = useTransform(spring, (current) => Math.floor(current));
  
  React.useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, spring, target]);
  
  return <motion.span ref={ref}>{display}</motion.span>;
}

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
              TELEMETRY.dat
            </h2>
            <div className="section-rule" />
          </div>
          <p className="section-meta">
            // CYCLING_PERFORMANCE_METRICS
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
              <span className="mt-green text-sm tracking-wider">STATUS</span>
              <span className="panel-id animate-pulse">● LIVE</span>
            </div>
            
            <div className="p-6">
              <div>
                <div className="text-center">
                  <p className="mt-cyan text-xs tracking-wider mb-5">TEAM - VC Londres</p>
                  <p className="dim-text text-xs tracking-wider mb-2">NATIONAL_POINTS_2025</p>
                  <div className="text-5xl font-bold mt-green glow-green">
                    <AnimatedCounter target={304} />
                  </div>
                  <p className="mt-cyan text-xs mt-2">BRITISH CYCLING</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
