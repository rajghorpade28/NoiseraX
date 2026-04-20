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
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(212,175,55,0.1) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(16,185,129,0.08) 0%, transparent 60%)',
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
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold-500">
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
            className="text-white opacity-80 text-lg font-light leading-relaxed max-w-sm"
          >
            NoiseraX is built on cryptographic logic and behavioral engineering — every module designed for absolute anonymity.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`${f.span} premium-border rounded-[2.5rem] p-10 md:p-12 flex flex-col group cursor-default overflow-hidden min-h-[380px] relative bg-white/[0.02] shadow-xl`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              {/* Card inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${f.accent}20 0%, transparent 60%)` }}
              />

              {/* Header row */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div
                  className="w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg"
                  style={{
                    background: `${f.accent}20`,
                    border: `1px solid ${f.accent}50`,
                    color: f.accent,
                  }}
                >
                  <f.icon className="w-6 h-6 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                </div>
                <div className="text-[10px] font-mono text-white opacity-50 uppercase tracking-[0.2em] pt-1">
                  Protocol {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6 italic font-serif leading-tight">
                  {f.title}
                </h3>
                <p className="text-white opacity-90 text-sm font-light leading-relaxed mb-10 max-w-sm">
                  {f.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                {f.details.map(d => (
                  <span
                    key={d}
                    className="chip px-4 py-1.5 text-[10px] border-white/20 text-white opacity-70 group-hover:opacity-100 group-hover:border-white/40 transition-all font-bold"
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
          className="mt-24 premium-border rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden bg-white/[0.02]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Dot matrix bg */}
          <div className="grid-dots absolute inset-0 opacity-40 pointer-events-none" />
          {/* Colour blooms */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.2) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <Cpu className="w-16 h-16 mb-8 animate-pulse text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
              INITIALIZE <br />
              <span className="text-gradient-gold italic font-serif">AUTONOMY.</span>
            </h3>
            <p className="text-xl text-white opacity-90 mb-14 max-w-2xl font-light leading-relaxed">
              Step into the architects' circle. Experience the pinnacle of sovereign technology.
            </p>
            <motion.button
              className="btn-gold text-lg px-12 py-5 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Deploy NoiseraX
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;