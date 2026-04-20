import { motion } from 'framer-motion';
import { Shield, Zap, Brain, ShieldCheck, Activity, Layers, Cpu, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-onyx relative overflow-hidden" id="solution">
      <div className="absolute inset-0 z-0 grid-blueprint opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative - Top Row */}
          <motion.div
            className="lg:col-span-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-emerald-500/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">Active Neutralization</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight">
              Fluid <br /> <span className="italic font-serif text-gradient-gold">Dissolution.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl font-light leading-relaxed">
              NoiseraX doesn't just block; it dissolves. Our protocol injects ultra-high entropy behavioral noise, rendering your true digital signature mathematically invisible.
            </p>
          </motion.div>

          {/* Neural Dashboard Blueprint - Left */}
          <motion.div
            className="lg:col-span-8 premium-border p-10 rounded-[3rem] bg-emerald-500/[0.02] border-emerald-500/10 h-full relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Neural Dashboard v4.2</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <div className="w-2 h-2 rounded-full bg-onyx border border-white/10" />
                    <div className="w-2 h-2 rounded-full bg-onyx border border-white/10" />
                 </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-auto">
                 {[
                   { label: 'Entropy Pulse', value: '4.8s', color: 'text-emerald-500' },
                   { label: 'Noise Density', value: 'Extreme', color: 'text-gold-500' },
                   { label: 'Signal Quality', value: '99.9%', color: 'text-white' },
                   { label: 'Latency', value: '1.2ms', color: 'text-slate-500' },
                 ].map((stat, i) => (
                   <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                      <div className="text-[8px] uppercase tracking-widest text-slate-500 mb-2">{stat.label}</div>
                      <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                   </div>
                 ))}
              </div>

              {/* Central Blueprint Mockup */}
              <div className="my-12 flex-grow flex items-center justify-center min-h-[300px] border-y border-white/5 relative">
                 <div className="relative">
                    <motion.div 
                      className="w-48 h-48 border border-emerald-500/20 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                       <div className="w-40 h-40 border-t-2 border-gold-500/30 rounded-full" />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Shield className="w-16 h-16 text-emerald-500" />
                    </div>
                    {[...Array(8)].map((_, i) => (
                      <motion.div 
                       key={i}
                       className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-emerald-500/50 to-transparent origin-left"
                       style={{ rotate: i * 45 }}
                       animate={{ opacity: [0.2, 0.8, 0.2] }}
                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                      />
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Bento Items */}
          <div className="lg:col-span-4 grid gap-8">
            <motion.div
              className="premium-border p-8 rounded-[2.5rem] flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <Layers className="w-8 h-8 text-gold-500/50 mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4 italic font-serif">Layered Defense</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">NoiseraX operates across the DOM, network request, and behavioral layers simultaneously.</p>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold-500 mt-8 group">
                Review Whitepaper <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              className="premium-border p-8 rounded-[2.5rem] bg-emerald-500/5 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Activity className="w-5 h-5 text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Live Synthesis</span>
              </div>
              <div className="space-y-3">
                 <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Identity Dissolution</span>
                    <span className="text-white">Active</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                       className="h-full bg-emerald-500" 
                       initial={{ width: 0 }}
                       whileInView={{ width: '85%' }}
                       transition={{ duration: 2, delay: 0.5 }}
                    />
                 </div>
              </div>
            </motion.div>

            <motion.div
              className="premium-border p-8 rounded-[2.5rem] font-mono h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
               <div className="text-[9px] text-slate-600 mb-4 uppercase tracking-widest">Protocol Log</div>
               <div className="space-y-2">
                  <div className="text-[10px] text-emerald-500/80">&gt; INJECTING SEED: X92..</div>
                  <div className="text-[10px] text-slate-500">&gt; ENTROPY: 0.99241</div>
                  <div className="text-[10px] text-slate-500">&gt; SWAPPING PERSONA: ALPHA</div>
                  <motion.div 
                    className="text-[10px] text-gold-500"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >&gt; SYNCHRONIZING...</motion.div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Comparison Tables - Bento Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
               className="premium-border p-12 rounded-[2.5rem] bg-white/[0.01]"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
            >
               <div>
                  <h4 className="text-3xl font-bold text-white mb-6">Passive Defense</h4>
                  <p className="text-slate-500 mb-10 leading-relaxed font-light">Traditional tools attempt to hide through blocking. This creates suspicious gaps and often fails to bypass modern fingerprinting techniques.</p>
                  <div className="space-y-4">
                     {["Ineffective Canvas Blocking", "Suspicious Data Gaps", "Broken Functionality"].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm text-slate-600 border-b border-white/5 pb-4">
                         <div className="w-1 h-1 bg-slate-600 rounded-full" />
                         {item}
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            <motion.div
               className="premium-border p-12 rounded-[2.5rem] overflow-hidden group"
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
            >
               <div className="relative z-10">
                  <Zap className="w-12 h-12 text-gold-500 mb-8" />
                  <h4 className="text-3xl font-bold text-white mb-6">Active Dissolution</h4>
                  <p className="text-slate-400 mb-10 leading-relaxed font-light italic font-serif">NoiseraX methodology: Flooding the stream with legitimate noise, making the signal-to-noise ratio mathematically impossible to decipher.</p>
                  <div className="space-y-4">
                     {["Total Identity Cloaking", "Seamless Web Experience", "Adaptive Behavioral Flow"].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm text-gold-500 border-b border-white/10 pb-4">
                         <CheckCircle className="w-4 h-4" />
                         {item}
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
};

export default SolutionSection;