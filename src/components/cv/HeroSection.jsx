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
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-shell bracket-frame"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="hero-meta"
        >
          MT_SYSTEMS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.65 }}
          className="hero-title"
        >
          <span className="hero-title-accent">MUJTABA</span>
          <span>TAIMUR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="hero-role"
        >
          Engineering Enthusiast | Competitive Cyclist | Software Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="terminal-prompt"
          aria-label={fullText}
        >
          <span className="terminal-user">mt_systems:~$</span>
          <span className="terminal-text">{displayText}</span>
          <span className={`terminal-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="scroll-indicator"
        >
          [SCROLL]
          <span aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
