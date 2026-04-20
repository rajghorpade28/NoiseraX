import { motion } from 'framer-motion';
import { Activity, Users, Shield, Brain, Zap, Settings, ArrowRight, Fingerprint, Layers, Cpu } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Behavioral Synthesis",
      description: "Generates ultra-realistic background activity patterns. NoiseraX creates authentic digital twin signals that render tracking algorithms ineffective without ever disrupting your flow.",
      details: ["Idle-Sync", "Human Simulation", "Stealth Core"],
      span: "lg:col-span-8",
    },
    {
      icon: Users,
      title: "Persona Architect",
      description: "Craft multiple distinct digital identities. Each identity maintains a stateful history.",
      details: ["Interest Matrix", "State Persistence"],
      span: "lg:col-span-4",
    },
    {
      icon: Shield,
      title: "Sovereign Intel",
      description: "On-device threat evaluation. Combining intelligence feeds to neutralize phishing.",
      details: ["Neural Detection", "Zero-Day Shield"],
      span: "lg:col-span-4",
    },
    {
      icon: Brain,
      title: "Hardened Privacy",
      description: "Complete data sovereignty. Everything remains within your local environment. We do not possess your data, therefore we can never be forced to compromise it.",
      details: ["Local Execution", "Zero Telemetry", "Open Logic"],
      span: "lg:col-span-8",
    },
    {
      icon: Zap,
      title: "Active Evolution",
      description: "NoiseraX adapts to your natural browsing rhythms, evolving its noise patterns.",
      details: ["Pattern Variation", "Chaos Engine"],
      span: "lg:col-span-6",
    },
    {
      icon: Settings,
      title: "Optimized Safety",
      description: "Only read-only interactions. NoiseraX never interacts with ads or accounts.",
      details: ["Read-Only Policy", "Safety Guard"],
      span: "lg:col-span-6",
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-onyx relative overflow-hidden" id="features">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-blueprint opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-px bg-gold-500" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-500">Core Intelligence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Modular <br /> <span className="italic font-serif text-gradient-gold">Infrastructure.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              NoiseraX is built on a foundation of cryptographic logic and behavioral engineering. Every module is designed for absolute anonymity.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className={`${feature.span} premium-border min-h-[400px] flex flex-col p-10 md:p-12 overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx transition-all duration-500">
                      <feature.icon className="w-6 h-6" />
                   </div>
                   <div className="text-[10px] font-mono text-slate-600 font-bold uppercase tracking-widest pt-2">
                     Protocol: {index + 1}
                   </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-3xl font-bold text-white mb-6 italic font-serif leading-tight">{feature.title}</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-sm">
                    {feature.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                   {feature.details.map((detail, idx) => (
                     <span key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] uppercase tracking-widest text-slate-500 font-bold group-hover:border-gold-500/20 group-hover:text-gold-500 transition-colors">
                        {detail}
                     </span>
                   ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Exclusive Footer CTA */}
        <motion.div
          className="mt-32 premium-border rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden bg-white/[0.02]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <Cpu className="w-16 h-16 text-emerald-500 mb-8 animate-pulse" />
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
              INITIALIZE <span className="italic font-serif text-gradient-gold">AUTONOMY.</span>
            </h3>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
              Step into the architects' circle. Experience the pinnacle of sovereign technology.
            </p>
            <motion.button
              className="px-14 py-6 bg-white text-onyx rounded-full font-bold text-xl hover:bg-gold-500 hover:text-white transition-all duration-500 flex items-center gap-4 group shadow-2xl shadow-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Deploy NoiseraX
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;