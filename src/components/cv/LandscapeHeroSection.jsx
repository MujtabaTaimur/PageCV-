import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

const emailAddress = 'dev@mtaimur.de';

export default function LandscapeHeroSection() {
  return (
    <section className="landscape-hero-section">
      <div className="landscape-world" aria-hidden="true">
        <div className="landscape-storm">
          <span className="storm-light left" />
          <span className="storm-light right" />
          <span className="storm-break" />
        </div>
        <div className="landscape-clouds layer-one" />
        <div className="landscape-clouds layer-two" />
        <div className="landscape-mountains far" />
        <div className="landscape-mountains mid" />
        <div className="landscape-mountains near" />
        <div className="facility-scene">
          <span className="facility-shadow" />
          <span className="facility-platform main" />
          <span className="facility-platform left" />
          <span className="facility-platform right" />
          <span className="facility-service-line line-one" />
          <span className="facility-service-line line-two" />
          <span className="facility-dome primary" />
          <span className="facility-dome secondary" />
          <span className="facility-tower">
            <span className="tower-core" />
            <span className="tower-side left" />
            <span className="tower-side right" />
            <span className="tower-beacon" />
            <span className="tower-signal signal-one" />
            <span className="tower-signal signal-two" />
          </span>
          <span className="facility-dish">
            <span className="dish-signal" />
            <span className="dish-bowl" />
            <span className="dish-rib rib-one" />
            <span className="dish-rib rib-two" />
            <span className="dish-rib rib-three" />
            <span className="dish-hub" />
            <span className="dish-arm" />
            <span className="dish-leg leg-one" />
            <span className="dish-leg leg-two" />
          </span>
          <span className="facility-light light-one" />
          <span className="facility-light light-two" />
          <span className="facility-light light-three" />
          <span className="facility-light light-four" />
        </div>
        <div className="landscape-water">
          <span className="water-reflection tower" />
          <span className="water-reflection dish" />
          <span className="water-glint glint-one" />
          <span className="water-glint glint-two" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="landscape-hero-shell bracket-frame"
      >
        <div className="landscape-main">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="landscape-kicker"
          >
            WORK EXPERIENCE // TECH + ENGINEERING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="landscape-logo candidate-logo"
          >
            <span className="landscape-logo-line">
              <span className="candidate-first">MUJTABA</span>
              <span className="candidate-last">TAIMUR</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="landscape-id-panel"
          >
            <p className="panel-id">YEAR 10 // LONDON // WEEK BEGINNING 6TH JULY 2026</p>
            <p className="landscape-name">Software, AI systems, hardware and performance analytics</p>
            <p className="landscape-role">
              I write apps, automate workflows, experiment with servers, and turn data into useful tools. I am seeking a short tech or engineering work experience placement.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="system-button hero-action primary" href={`mailto:${emailAddress}?subject=Work%20experience%20placement`}>
                <span>[</span>
                <Mail size={13} />
                <span>EMAIL</span>
                <span>]</span>
              </a>
              <a className="system-button hero-action" href="https://github.com/MujtabaTaimur" target="_blank" rel="noopener noreferrer">
                <span>[</span>
                <Github size={13} />
                <span>GITHUB</span>
                <span>]</span>
              </a>
            </div>
          </motion.div>

        </div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="landscape-hud"
        >
          <div className="panel-topline">
            <div className="panel-dots" aria-hidden="true">
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-dot" />
            </div>
            <span className="panel-id">home_screen</span>
          </div>

          <div className="landscape-hud-body">
            <div className="landscape-data-row">
              <span>APPS/AUTOMATION</span>
              <span>//</span>
              <span>SERVER/HOMELAB</span>
              <span>//</span>
              <span>NATIONAL CYCLIST</span>
            </div>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="landscape-scroll"
        >
          [SCROLL]
          <span aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
