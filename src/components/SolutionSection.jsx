import { motion } from 'framer-motion';
import { Shield, Zap, Brain, ShieldCheck, Activity, Layers, Cpu, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="solution">
      {/* ── Emerald/Gold Success Glows ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(16,185,129,0.12) 0%, transparent 50%),' +
            'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="absolute inset-0 z-0 grid-blueprint opacity-[0.1] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative - Top Row */}
          <motion.div
            className="lg:col-span-12 mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-400">Active Neutralization</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight tracking-tighter">
              Fluid <br /> <span className="text-gradient-gold italic font-serif">Dissolution.</span>
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl font-light leading-relaxed">
              NoiseraX doesn't just block; it dissolves. Our protocol injects ultra-high entropy behavioral noise, rendering your true digital signature mathematically invisible.
            </p>
          </motion.div>

          {/* Neural Dashboard Blueprint - Left */}
          <motion.div
            className="lg:col-span-8 premium-border p-10 rounded-[3.5rem] bg-emerald-500/[0.03] border-emerald-500/30 h-full relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />
            
            <motion.div 
               className="absolute top-0 left-0 w-full h-[1px] bg-emerald-400/40 z-0"
               animate={{ top: ['0%', '100%'] }}
               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Neural Engine v5.0</span>
                      <div className="text-[9px] uppercase tracking-widest text-emerald-400 mt-1 font-bold">Status: Synchronized</div>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                 </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {[
                   { label: 'Entropy Pulse', value: '4.9s', color: '#10b981' },
                   { label: 'Noise Density', value: 'Level 9', color: '#D4AF37' },
                   { label: 'Signal Guard', value: '100%', color: '#fff' },
                   { label: 'Neutralization', value: 'Full', color: '#10b981' },
                 ].map((stat, i) => (
                   <motion.div 
                    key={i} 
                    className="p-6 bg-white/[0.04] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-colors"
                   >
                      <div className="text-[9px] uppercase tracking-[0.2em] text-white opacity-50 mb-2 font-bold">{stat.label}</div>
                      <div className="text-2xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</div>
                   </motion.div>
                 ))}
              </div>

              {/* Central Blueprint Mockup */}
              <div className="my-10 flex-grow flex items-center justify-center min-h-[400px] border-y border-white/5 relative bg-emerald-500/[0.02]">
                 <div className="relative">
                    <motion.div 
                      className="absolute inset-0 border border-emerald-500/30 rounded-full"
                      animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 border border-emerald-500/20 rounded-full"
                      animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    />

                    <motion.div 
                      className="w-64 h-64 border border-emerald-400/40 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.2)]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                       <div className="w-56 h-56 border-t-2 border-gold-500/50 rounded-full border-r border-gold-500/20" />
                    </motion.div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Shield className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
                    </div>

                    {[...Array(12)].map((_, i) => (
                      <motion.div 
                       key={i}
                       className="absolute top-1/2 left-1/2 w-48 h-px origin-left"
                       style={{ 
                         rotate: i * 30,
                         background: 'linear-gradient(90deg, rgba(16,185,129,0.8), transparent)' 
                       }}
                       animate={{ opacity: [0.2, 0.8, 0.2], width: ['140px', '200px', '140px'] }}
                       transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                      />
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Bento Items */}
          <div className="lg:col-span-4 grid gap-8">
            <motion.div
              className="premium-border p-12 rounded-[3rem] flex flex-col justify-between group transition-all hover:bg-emerald-500/[0.05] hover:border-emerald-500/40 bg-white/[0.02]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 flex items-center justify-center text-gold-500 mb-10 border border-gold-500/40 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <Layers className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-6 italic font-serif">Layered Defense</h4>
                <p className="text-lg text-white opacity-90 font-light leading-relaxed">NoiseraX operates across the DOM, network request, and behavioral layers simultaneously.</p>
              </div>
              <button className="flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.3em] text-gold-500 mt-14 group/btn">
                Access Infrastructure <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              className="premium-border p-12 rounded-[3.5rem] bg-emerald-500/[0.05] border-emerald-500/40 group hover:bg-emerald-500/[0.1] transition-all"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 mb-10">
                <Activity className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_12px_#10b981]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Live Synthesis Engine</span>
              </div>
              <div className="space-y-6">
                 <div className="flex justify-between text-[13px] font-bold tracking-tight">
                    <span className="text-white opacity-80 uppercase tracking-widest">Entropy Masking</span>
                    <span className="text-emerald-400">98.2% Dissolved</span>
                 </div>
                 <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/10 shadow-inner">
                    <motion.div 
                       className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]" 
                       initial={{ width: 0 }}
                       whileInView={{ width: '98.2%' }}
                       transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    />
                 </div>
              </div>
            </motion.div>

            <motion.div
              className="premium-border p-12 rounded-[3rem] font-mono h-full bg-black/40 border-white/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
               <div className="text-[10px] text-white opacity-40 mb-8 uppercase tracking-[0.4em] font-bold border-b border-white/5 pb-3">Protocol Trace</div>
               <div className="space-y-4">
                  <div className="text-[11px] text-emerald-400 font-bold tracking-tight">&gt; INJECTING SEED: SYTN_0X42..</div>
                  <div className="text-[11px] text-white opacity-80 tracking-tight">&gt; ENTROPY_SCORE: 0.9998124</div>
                  <div className="text-[11px] text-white opacity-80 tracking-tight">&gt; ACTIVE_PERSONA: ARCH_DELTA</div>
                  <motion.div 
                    className="text-[11px] text-gold-500 font-bold"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >&gt; OPTIMIZING_FLOW_SYNC...</motion.div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Comparison Tables - Bento Layout */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">
            <motion.div
               className="premium-border p-16 rounded-[4rem] bg-white/[0.02] group hover:bg-white/[0.04] transition-colors border-white/10"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
            >
               <div>
                  <h4 className="text-4xl font-bold text-white mb-10 tracking-tight">Passive Defense</h4>
                  <p className="text-white opacity-70 mb-14 leading-relaxed font-light text-xl">Traditional tools attempt to hide through blocking. This creates suspicious gaps and fails to bypass modern fingerprinting.</p>
                  <div className="grid gap-7">
                     {["Ineffective Canvas Blocking", "Suspicious Data Gaps", "Broken Profile Continuity"].map((item, i) => (
                       <div key={i} className="flex items-center gap-5 text-[14px] font-bold text-white opacity-40 uppercase tracking-[0.15em] border-b border-white/5 pb-6">
                         <div className="w-2 h-2 bg-white/20 rounded-full" />
                         {item}
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            <motion.div
               className="premium-border p-16 rounded-[4rem] overflow-hidden group bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05] shadow-2xl transition-all border-emerald-500/20"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold-500/20 flex items-center justify-center text-gold-500 mb-10 border border-gold-500/40 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <Zap className="w-8 h-8 drop-shadow-[0_0_10px_#D4AF37]" />
                  </div>
                  <h4 className="text-4xl font-bold text-white mb-10 tracking-tight">Active Dissolution</h4>
                  <p className="text-white opacity-95 mb-14 leading-relaxed font-light text-xl italic font-serif">The signal-to-noise ratio becomes mathematically undecipherable, ensuring absolute anonymity.</p>
                  <div className="grid gap-7">
                     {["Total Identity Cloaking", "Seamless Platform Logic", "Full Behavioral Entropy"].map((item, i) => (
                       <div key={i} className="flex items-center gap-5 text-[14px] font-bold text-emerald-400 uppercase tracking-[0.25em] border-b border-emerald-500/10 pb-6">
                         <CheckCircle className="w-6 h-6 drop-shadow-[0_0_10px_#10b981]" />
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