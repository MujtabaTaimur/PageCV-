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

const stats = [
  { label: 'ENDURANCE', value: 92 },
  { label: 'CONSISTENCY', value: 88 },
  { label: 'TACTICAL_DECISION', value: 85 },
  { label: 'PERFORMANCE_OPT', value: 90 }
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

function ProgressBar({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-[#00d4ff] tracking-wider">{label}</span>
        <span className="text-[#00ff88]">{value}%</span>
      </div>
      <div className="h-2 bg-[#1a2a3a] rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"
        />
      </div>
    </div>
  );
}

export default function CyclingSection() {
  return (
    <section className="py-24 px-6">
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
              TELEMETRY.dat
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1a2a3a] to-transparent" />
          </div>
          <p className="text-[#3a4a5a] text-sm tracking-widest">
            // CYCLING_PERFORMANCE_METRICS
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d1117] border border-[#1a2a3a] rounded-lg overflow-hidden"
          >
            <div className="bg-[#161b22] px-4 py-3 border-b border-[#1a2a3a]">
              <span className="text-[#00ff88] text-sm tracking-wider">RACE_LOG.txt</span>
            </div>
            
            <div className="p-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="py-3 border-b border-[#1a2a3a] last:border-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#e0e0e0] text-sm">
                        <span className="text-[#3a4a5a]">{'>'}</span> {achievement.event}
                      </p>
                      <p className="text-[#3a4a5a] text-xs mt-1">[{achievement.category}]</p>
                    </div>
                    <span className="text-[#00ff88] text-sm font-bold whitespace-nowrap">
                      {achievement.result}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Performance Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d1117] border border-[#1a2a3a] rounded-lg overflow-hidden"
          >
            <div className="bg-[#161b22] px-4 py-3 border-b border-[#1a2a3a] flex items-center justify-between">
              <span className="text-[#00ff88] text-sm tracking-wider">PERFORMANCE_ANALYSIS</span>
              <span className="text-[#3a4a5a] text-xs animate-pulse">● LIVE</span>
            </div>
            
            <div className="p-6 space-y-6">
              {stats.map((stat, index) => (
                <ProgressBar key={index} label={stat.label} value={stat.value} />
              ))}
              
              {/* National Points Counter */}
              <div className="mt-8 pt-6 border-t border-[#1a2a3a]">
                <div className="text-center">
                  <p className="text-[#3a4a5a] text-xs tracking-wider mb-2">NATIONAL_POINTS_2025</p>
                  <div className="text-5xl font-bold text-[#00ff88]">
                    <AnimatedCounter target={304} />
                  </div>
                  <p className="text-[#00d4ff] text-xs mt-2">BRITISH CYCLING</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}