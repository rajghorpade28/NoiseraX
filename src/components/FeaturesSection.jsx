import { motion } from 'framer-motion';
import { Activity, Users, Shield, Brain, Zap, Settings, ArrowRight, Cpu } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Behavioral Synthesis',
    description: 'Generates ultra-realistic background activity patterns that render tracking algorithms ineffective.',
    details: ['Idle-Sync', 'Stealth Core'],
    accent: '#D4AF37',
    span: 'lg:col-span-8',
  },
  {
    icon: Users,
    title: 'Persona Architect',
    description: 'Craft multiple distinct digital identities with stateful history.',
    details: ['Interest Matrix', 'Persistence'],
    accent: '#10b981',
    span: 'lg:col-span-4',
  },
  {
    icon: Shield,
    title: 'Sovereign Intel',
    description: 'On-device threat evaluation. Neutralize phishing in real time.',
    details: ['Neural Detection', 'Zero-Day'],
    accent: '#10b981',
    span: 'lg:col-span-4',
  },
  {
    icon: Brain,
    title: 'Hardened Privacy',
    description: 'Complete data sovereignty. Everything stays on your device.',
    details: ['Local Execution', 'Open Logic'],
    accent: '#D4AF37',
    span: 'lg:col-span-8',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto relative">
        {/* ── Section Header ── */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold-600">
                Core Prototypes
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-onyx-900 leading-tight tracking-tighter">
              Modular <br />
              <span className="text-gradient-gold italic font-serif">Infrastructure.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-base font-light leading-relaxed max-w-sm"
          >
            Built on cryptographic logic and behavioral engineering for absolute anonymity.
          </motion.p>
        </div>

        {/* ── Tightened Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`${f.span} premium-card p-8 md:p-10 flex flex-col group overflow-hidden min-h-[340px] relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Header row */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm"
                  style={{
                    background: `${f.accent}08`,
                    border: `1px solid ${f.accent}20`,
                    color: f.accent,
                  }}
                >
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="text-[9px] font-mono text-slate-300 uppercase tracking-widest pt-1">
                  SYS-{String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-onyx-900 mb-3 italic font-serif leading-tight">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 max-w-sm">
                  {f.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {f.details.map(d => (
                  <span key={d} className="chip">{d}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Tightened CTA ── */}
        <motion.div
          className="mt-16 premium-card p-10 md:p-16 text-center bg-alabaster border-none shadow-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-bold text-onyx-900 mb-6 leading-tight tracking-tighter">
              INITIALIZE{' '}
              <span className="text-gradient-gold italic font-serif">AUTONOMY.</span>
            </h3>
            <p className="text-base text-slate-500 mb-10 max-w-xl font-light leading-relaxed">
              Experience the pinnacle of sovereign technology.
            </p>
            <motion.button
              className="btn-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Deploy NoiseraX
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;