import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Building systems. Optimising performance. Engineering the future.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >
        {/* Terminal Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-[#3a4a5a] text-sm tracking-widest"
        >
          ╔══════════════════════════════════════════╗
        </motion.div>
        
        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-[#00ff88]">MUJTABA</span>
          <br />
          <span className="text-[#00d4ff]">TAIMUR</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[#00d4ff] text-sm md:text-base tracking-[0.3em] uppercase mb-12"
        >
          Engineering Enthusiast | Competitive Cyclist | Software Developer
        </motion.p>
        
        {/* Typing Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-[#0d1117] border border-[#1a2a3a] rounded px-6 py-4 inline-block"
        >
          <span className="text-[#3a4a5a]">{'>'} </span>
          <span className="text-[#00ff88]">{displayText}</span>
          <span className={`text-[#00ff88] ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
        </motion.div>
        
        {/* Terminal Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-8 text-[#3a4a5a] text-sm tracking-widest"
        >
          ╚══════════════════════════════════════════╝
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#3a4a5a] text-xs tracking-widest"
          >
            [ SCROLL ]
            <div className="mt-2 text-[#00ff88]">▼</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}