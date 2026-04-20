import { motion } from 'framer-motion';
import { Activity, Users, Shield, Brain, Zap, Settings, ArrowRight } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Behavioral Synthesis",
      description: "Generates ultra-realistic background activity patterns. NoiseraX creates authentic digital twin signals that render tracking algorithms ineffective without ever disrupting your flow.",
      details: ["Idle-Sync", "Human Simulation", "Stealth Core"],
    },
    {
      icon: Users,
      title: "Persona Architect",
      description: "Craft multiple distinct digital identities. Each identity maintains a stateful, consistent history across sessions, creating a diversion that is indistinguishable from reality.",
      details: ["Interest Matrix", "State Persistence", "Adaptive Swap"],
    },
    {
      icon: Shield,
      title: "Sovereign Intelligence",
      description: "On-device threat evaluation. Combining elite intelligence feeds with proprietary machine learning to neutralize phishing and domain-level threats in real-time.",
      details: ["Neural Detection", "Zero-Day Shield", "Privacy First"],
    },
    {
      icon: Brain,
      title: "Hardened Privacy",
      description: "Complete data sovereignty. Everything remains within your local environment. We do not possess your data, therefore we can never be forced to compromise it.",
      details: ["Local Execution", "Zero Telemetry", "Open Logic"],
    },
    {
      icon: Zap,
      title: "Dynamic Evolution",
      description: "An engine that learns. NoiseraX adapts to your natural browsing rhythms, evolving its noise patterns to maintain maximum entropy against sophisticated profiling.",
      details: ["Pattern Variation", "Schedule Sync", "Chaos Engine"],
    },
    {
      icon: Settings,
      title: "Optimized Safety",
      description: "Precision engineered execution. Only read-only interactions. NoiseraX never interacts with ads, forms, or accounts, ensuring your digital state remains pristine.",
      details: ["Read-Only Policy", "Sanitized Browsing", "Safety Guard"],
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-onyx relative overflow-hidden" id="features">
      {/* Decorative vertical lines like an editorial magazine */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 -translate-x-1/2 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-gold-500" />
               <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold-500">Core Intelligence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Sophisticated <br /> <span className="italic font-serif text-gradient-gold">Protocols.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pb-2"
          >
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              NoiseraX combines behavioral synthesis with hardened local intelligence to create a sanctuary for your digital life. 
              Our architecture is designed for those who demand absolute control.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - Editorial Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className={index === 1 ? 'lg:translate-y-12' : index === 4 ? 'lg:translate-y-12' : ''}>
               <FeatureCard
                 icon={feature.icon}
                 title={feature.title}
                 description={feature.description}
                 details={feature.details}
                 index={index}
                 delay={index * 0.15}
               />
            </div>
          ))}
        </div>

        {/* Exclusive Footer CTA */}
        <motion.div
          className="mt-32 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden bg-white/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <Shield className="w-16 h-16 text-gold-500 mb-8" />
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Reclaim Your <span className="italic font-serif">Aura.</span>
            </h3>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light">
              Experience the pinnacle of privacy engineering. NoiseraX is more than a tool—it's a statement of digital independence.
            </p>
            <motion.button
              className="px-12 py-6 bg-white text-onyx rounded-full font-bold text-xl hover:bg-gold-500 hover:text-white transition-all duration-500 flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Initialize Protection
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;