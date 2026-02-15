import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  EyeOff,
  Lock,
  Activity,
  UserCheck,
  Globe,
  Github,
  MessageSquare,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import './index.css';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const GlassCard = ({ icon: Icon, title, description, className = "" }) => (
  <motion.div
    className={`glass-card ${className}`}
    whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="icon-box">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const StepCard = ({ icon: Icon, number, title, description }) => (
  <div className="glass-card step-card">
    <div className="icon-box">
      <Icon size={24} />
    </div>
    <div className="step-number">{number}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

function App() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="app">
      {/* Background Shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <div className="logo-icon"></div>
            <span>NoiseraX</span>
          </a>
          <div className="nav-links">
            <a href="#solution">How it Works</a>
            <a href="#safety">Safety</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/rajghorpade28/NoiseraX" className="btn btn-sm btn-primary">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              NoiseraX
            </motion.h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Behavioral obfuscation against digital profiling.
            </motion.p>
            <motion.div
              className="cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a href="https://github.com/rajghorpade28/NoiseraX" className="btn btn-primary">Source Code</a>
              <a href="#solution" className="btn btn-secondary">Learn More</a>
            </motion.div>
            <motion.div
              className="trust-badges"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span><Activity size={16} /> Client-Side</span>
              <span><Github size={16} /> Open Source</span>
              <span><Shield size={16} /> Background Process</span>
            </motion.div>
          </div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="noise-visual">
              <div className="signal-line"></div>
              <div className="signal-line"></div>
              <div className="signal-line"></div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="section">
        <div className="container">
          <div className="section-header">
            <FadeIn>
              <h2>They Are Watching.</h2>
              <p>How behavioral data tracking threatens privacy.</p>
            </FadeIn>
          </div>
          <div className="grid-3 card-grid">
            <FadeIn delay={0.1}>
              <GlassCard
                icon={EyeOff}
                title="Profiling"
                description="Trackers infer personality and traits from browsing patterns."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <GlassCard
                icon={Activity}
                title="Targeting"
                description="Algorithms use profiles to predict and manipulate user behavior."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <GlassCard
                icon={Lock}
                title="Blocking"
                description="Standard tools hide IPs or ads but fail to stop behavioral analysis."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section bg-darker">
        <div className="container">
          <div className="grid-3 card-grid">
            <FadeIn delay={0.1}>
              <StepCard
                icon={UserCheck}
                number="01"
                title="Idle Execution"
                description="Detects when you are away from the keyboard. No interference with your work."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <StepCard
                icon={Globe}
                number="02"
                title="Persona Engine"
                description="Simulates evolving interests. Browsing history that looks human, not random."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <StepCard
                icon={Shield}
                number="03"
                title="Local Sandbox"
                description="Everything stays on your device. Zero data leakage to cloud servers."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="section">
        <div className="container center-text">
          <FadeIn>
            <h2>Ethical & Safe.</h2>
            <p className="max-w-600">Built for protection, not disruption.</p>
          </FadeIn>
          <div className="grid-3 card-grid">
            <FadeIn delay={0.1}>
              <GlassCard
                icon={CheckCircle}
                title="No Fraud"
                description="Strictly avoids ad clicks and paywall bypasses. Ethical interaction only."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <GlassCard
                icon={Shield}
                title="No Botnet"
                description="Independent client-side operation. No central command and control server."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <GlassCard
                icon={Globe}
                title="No Scraping"
                description="Respects `robots.txt` and server load guidelines. Good citizenship by design."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-darker">
        <div className="container center-text">
          <FadeIn>
            <h2>Contact Us</h2>
            <p className="max-w-600">Have questions or feedback? Send a message directly.</p>
          </FadeIn>

          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card"
              style={{ maxWidth: '600px', margin: '3rem auto', textAlign: 'center', alignItems: 'center' }}
            >
              <CheckCircle size={48} color="var(--accent-green)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--accent-green)' }}>Message Sent!</h3>
              <p>Thanks for contacting us, we will reply shortly.</p>
              <button onClick={() => setFormStatus('idle')} className="btn btn-secondary" style={{ marginTop: '1rem' }}>Send Another</button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="contact-form glass-card"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your inquiry..." required></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <div className="glass-card" style={{ alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, rgba(30,58,138,0.5) 0%, rgba(15,23,42,0.8) 100%)' }}>
              <h2>View Documentation.</h2>
              <p style={{ marginBottom: '2rem' }}>Explore the implementation details and contribute to the research.</p>
              <div className="cta-group" style={{ justifyContent: 'center' }}>
                <a href="https://github.com/rajghorpade28/NoiseraX" className="btn btn-primary btn-lg">GitHub Repository</a>
                <a href="#contact" className="btn btn-secondary btn-lg">Contact Dev</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <div className="footer-col">
            <h5>NoiseraX</h5>
            <p>Privacy through obscurity.</p>
          </div>
          <div className="footer-col">
            <h5>Links</h5>
            <a href="https://github.com/rajghorpade28/NoiseraX">Source Code</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
