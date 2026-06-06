import { motion } from 'framer-motion';

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
            MT_SYSTEMS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="landscape-logo"
          >
            <span className="landscape-logo-line">
              <span className="landscape-logo-mt">MT</span>
              <span className="landscape-logo-underscore" aria-hidden="true" />
              <span className="landscape-logo-systems">SYSTEMS</span>
              <span className="landscape-logo-dash" aria-hidden="true" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="landscape-id-panel"
          >
            <p className="panel-id">ENGINEER ID // MT-001</p>
            <p className="landscape-name">MUJTABA TAIMUR</p>
            <p className="landscape-role">
              Engineering Enthusiast | Competitive Cyclist | Software Developer
            </p>
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
              <span>DISCOVER</span>
              <span>//</span>
              <span>ANALYZE</span>
              <span>//</span>
              <span>APPLY</span>
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
