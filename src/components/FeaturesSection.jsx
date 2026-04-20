import { motion } from 'framer-motion';
import { Activity, Users, Shield, Brain, Zap, Settings, ArrowRight, Cpu } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Behavioral Synthesis',
    description: 'Generates ultra-realistic background activity patterns that render tracking algorithms completely ineffective.',
    details: ['Idle-Sync', 'Human Simulation', 'Stealth Core'],
    accent: '#D4AF37',
    span: 'lg:col-span-8',
  },
  {
    icon: Users,
    title: 'Persona Architect',
    description: 'Craft multiple distinct digital identities, each with a stateful, consistent history.',
    details: ['Interest Matrix', 'State Persistence'],
    accent: '#10b981',
    span: 'lg:col-span-4',
  },
  {
    icon: Shield,
    title: 'Sovereign Intel',
    description: 'On-device threat evaluation. Combinating intelligence feeds to neutralize phishing in real time.',
    details: ['Neural Detection', 'Zero-Day Shield'],
    accent: '#6366f1',
    span: 'lg:col-span-4',
  },
  {
    icon: Brain,
    title: 'Hardened Privacy',
    description: 'Complete data sovereignty. Everything stays on your device. We cannot be compelled to compromise you.',
    details: ['Local Execution', 'Zero Telemetry', 'Open Logic'],
    accent: '#D4AF37',
    span: 'lg:col-span-8',
  },
  {
    icon: Zap,
    title: 'Active Evolution',
    description: 'NoiseraX adapts to your natural browsing rhythms, evolving its noise patterns continuously.',
    details: ['Pattern Variation', 'Chaos Engine'],
    accent: '#10b981',
    span: 'lg:col-span-6',
  },
  {
    icon: Settings,
    title: 'Optimized Safety',
    description: 'Read-only interactions only. NoiseraX never touches your accounts, ads, or forms.',
    details: ['Read-Only Policy', 'Safety Guard'],
    accent: '#f59e0b',
    span: 'lg:col-span-6',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(212,175,55,0.07) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* ── Section Header ── */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px" style={{ background: '#D4AF37' }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: '#D4AF37' }}>
                Core Intelligence
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter">
              Modular <br />
              <span className="text-gradient-gold italic font-serif">Infrastructure.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-200 text-lg font-light leading-relaxed max-w-sm"
          >
            NoiseraX is built on cryptographic logic and behavioral engineering — every module designed for absolute anonymity.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`${f.span} premium-border rounded-[2.5rem] p-10 md:p-12 flex flex-col group cursor-default overflow-hidden min-h-[380px] relative`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Card inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${f.accent}18 0%, transparent 60%)` }}
              />

              {/* Header row */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500"
                  style={{
                    background: `${f.accent}18`,
                    border: `1px solid ${f.accent}40`,
                    color: f.accent,
                  }}
                >
                  <f.icon className="w-6 h-6" />
                </div>
                <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest pt-1">
                  Protocol {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 italic font-serif leading-tight">
                  {f.title}
                </h3>
                <p className="text-slate-200 text-sm font-light leading-relaxed mb-8 max-w-sm">
                  {f.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {f.details.map(d => (
                  <span
                    key={d}
                    className="chip group-hover:text-white transition-colors group-hover:border-white/20"
                    style={{ '--accent': f.accent }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          className="mt-20 premium-border rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Dot matrix bg */}
          <div className="grid-dots absolute inset-0 opacity-30 pointer-events-none" />
          {/* Colour blooms */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <Cpu className="w-14 h-14 mb-8 animate-pulse" style={{ color: '#10b981' }} />
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
              INITIALIZE{' '}
              <span className="text-gradient-gold italic font-serif">AUTONOMY.</span>
            </h3>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl font-light leading-relaxed">
              Step into the architects' circle. Experience the pinnacle of sovereign technology.
            </p>
            <motion.button
              className="btn-gold text-base group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Deploy NoiseraX
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;