import { motion } from 'framer-motion';
import { Shield, Zap, Activity, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-100" id="solution">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative - Top Row */}
          <motion.div
            className="lg:col-span-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-emerald-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-emerald-600">Active Neutralization</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-onyx-900 mb-6 leading-tight tracking-tighter">
              Fluid <br /> <span className="text-gradient-gold italic font-serif">Dissolution.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed">
              NoiseraX injects ultra-high entropy behavioral noise, rendering your true digital signature mathematically invisible.
            </p>
          </motion.div>

          {/* Neural Dashboard - Left */}
          <motion.div
            className="lg:col-span-12 premium-card p-10 bg-alabaster border-none shadow-none text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-8">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-onyx-900 mb-6 italic font-serif">Neural Synthesis</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <div className="badge-live">98.2% Entropy</div>
                  <div className="badge-live bg-gold-400/10 border-gold-400/30 text-gold-600 before:bg-gold-500">Optimized</div>
                </div>
                <motion.button
                  className="btn-gold px-12"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Access Protocol <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
             </div>
          </motion.div>

          {/* Tightened Comparison */}
          <div className="lg:col-span-12 grid md:grid-cols-2 gap-6 mt-6">
            {[
              { 
                title: "Passive Defense", 
                desc: "Traditional tools create suspicious gaps that modern engines detect easily.",
                items: ["Ineffective Blocking", "Broken Continuity"],
                col: "text-slate-400"
              },
              { 
                title: "Active Dissolution", 
                desc: "NoiseraX floods the stream with legitimate-looking signal.",
                items: ["Identity Cloaking", "Full Entropy"],
                col: "text-emerald-600"
              }
            ].map((prop, i) => (
              <motion.div
                key={prop.title}
                className="premium-card p-10 bg-white border border-slate-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (0.1 * i) }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-onyx-900 mb-4">{prop.title}</h4>
                <p className="text-sm text-slate-500 font-light mb-8 leading-relaxed">{prop.desc}</p>
                <div className="space-y-4">
                   {prop.items.map(item => (
                     <div key={item} className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest ${prop.col}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                        {item}
                     </div>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;