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
            'radial-gradient(circle at 80% 20%, rgba(16,185,129,0.1) 0%, transparent 50%),' +
            'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="absolute inset-0 z-0 grid-blueprint opacity-[0.08] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative - Top Row */}
          <motion.div
            className="lg:col-span-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-emerald-500/50 shadow-[0_0_8px_#10b981]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">Active Neutralization</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight tracking-tighter">
              Fluid <br /> <span className="text-gradient-gold italic font-serif">Dissolution.</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
              NoiseraX doesn't just block; it dissolves. Our protocol injects ultra-high entropy behavioral noise, rendering your true digital signature mathematically invisible.
            </p>
          </motion.div>

          {/* Neural Dashboard Blueprint - Left */}
          <motion.div
            className="lg:col-span-8 premium-border p-10 rounded-[3.5rem] bg-emerald-500/[0.02] border-emerald-500/20 h-full relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />
            
            {/* Animated emerald sweep */}
            <motion.div 
               className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 z-0"
               animate={{ top: ['0%', '100%'] }}
               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500 border border-emerald-500/30">
                      <Cpu className="w-5 h-5 shadow-sm" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Neural Engine v5.0</span>
                      <div className="text-[8px] uppercase tracking-widest text-emerald-500 mt-1 font-bold">Status: Synchronized</div>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10" />
                 </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                 {[
                   { label: 'Entropy Pulse', value: '4.9s', color: '#10b981' },
                   { label: 'Noise Density', value: 'Level 9', color: '#D4AF37' },
                   { label: 'Signal Guard', value: '100%', color: '#fff' },
                   { label: 'Latency', value: '0.8ms', color: '#94a3b8' },
                 ].map((stat, i) => (
                   <motion.div 
                    key={i} 
                    className="p-5 bg-white/[0.03] border border-white/5 rounded-3xl group-hover:bg-white/[0.05] transition-colors"
                    whileHover={{ y: -5 }}
                   >
                      <div className="text-[8px] uppercase tracking-widest text-slate-300 mb-2 font-bold">{stat.label}</div>
                      <div className="text-xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</div>
                   </motion.div>
                 ))}
              </div>

              {/* Central Blueprint Mockup */}
              <div className="my-8 flex-grow flex items-center justify-center min-h-[340px] border-y border-white/5 relative bg-emerald-500/[0.01]">
                 <div className="relative">
                    {/* Pulsing Emerald Rings */}
                    <motion.div 
                      className="absolute inset-0 border border-emerald-500/20 rounded-full"
                      animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 border border-emerald-500/10 rounded-full"
                      animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    />

                    {/* Main Rotating Core */}
                    <motion.div 
                      className="w-56 h-56 border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.1)]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                       <div className="w-48 h-48 border-t-2 border-gold-500/40 rounded-full border-r border-gold-500/10" />
                    </motion.div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Shield className="w-20 h-20 text-emerald-500 shadow-2xl drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
                    </div>

                    {/* Animated Data Spokes */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div 
                       key={i}
                       className="absolute top-1/2 left-1/2 w-40 h-px origin-left"
                       style={{ 
                         rotate: i * 30,
                         background: 'linear-gradient(90deg, rgba(16,185,129,0.6), transparent)' 
                       }}
                       animate={{ opacity: [0.1, 0.6, 0.1], width: ['120px', '160px', '120px'] }}
                       transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                      />
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Bento Items */}
          <div className="lg:col-span-4 grid gap-8">
            {/* Strategy Card */}
            <motion.div
              className="premium-border p-10 rounded-[3rem] flex flex-col justify-between group transition-all hover:bg-emerald-500/[0.03] hover:border-emerald-500/30"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-8 border border-gold-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 italic font-serif">Layered Defense</h4>
                <p className="text-sm text-slate-200 font-light leading-relaxed">NoiseraX operates across the DOM, network request, and behavioral layers simultaneously.</p>
              </div>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500 mt-12 group/btn">
                Access Infrastructure <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Status Card */}
            <motion.div
              className="premium-border p-10 rounded-[3rem] bg-emerald-500/[0.04] border-emerald-500/30 group hover:bg-emerald-500/[0.08] transition-all"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Activity className="w-6 h-6 text-emerald-500 drop-shadow-[0_0_8px_#10b981]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Live Synthesis Engine</span>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between text-[11px] font-bold tracking-tight">
                    <span className="text-slate-200 uppercase">Entropy Masking</span>
                    <span className="text-emerald-500">98.2% Dissolved</span>
                 </div>
                 <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                       className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" 
                       initial={{ width: 0 }}
                       whileInView={{ width: '98.2%' }}
                       transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    />
                 </div>
              </div>
            </motion.div>

            {/* Protocol Log Card */}
            <motion.div
              className="premium-border p-10 rounded-[3rem] font-mono h-full bg-black/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
               <div className="text-[9px] text-slate-400 mb-6 uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-2">Protocol Trace</div>
               <div className="space-y-3">
                  <div className="text-[10px] text-emerald-500 font-bold tracking-tight">&gt; INJECTING SEED: SYTN_0X42..</div>
                  <div className="text-[10px] text-slate-200 tracking-tight">&gt; ENTROPY_SCORE: 0.9998124</div>
                  <div className="text-[10px] text-slate-200 tracking-tight">&gt; ACTIVE_PERSONA: ARCH_DELTA</div>
                  <motion.div 
                    className="text-[10px] text-gold-500 font-bold"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >&gt; OPTIMIZING_FLOW_SYNC...</motion.div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Comparison Tables - Bento Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
            <motion.div
               className="premium-border p-14 rounded-[3.5rem] bg-white/[0.01] group hover:bg-white/[0.02] transition-colors"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
            >
               <div>
                  <h4 className="text-4xl font-bold text-white mb-8 tracking-tight">Passive Defense</h4>
                  <p className="text-slate-200 mb-12 leading-relaxed font-light text-lg">Traditional tools attempt to hide through blocking. This creates suspicious gaps and often fails to bypass modern fingerprinting techniques.</p>
                  <div className="grid gap-5">
                     {["Ineffective Canvas Blocking", "Suspicious Data Gaps", "Broken Profile Continuity"].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-[13px] font-bold text-slate-300 uppercase tracking-widest border-b border-white/5 pb-5">
                         <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                         {item}
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            <motion.div
               className="premium-border p-14 rounded-[3.5rem] overflow-hidden group bg-emerald-500/[0.01] hover:bg-emerald-500/[0.03] shadow-2xl transition-all"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-10 border border-gold-500/30">
                    <Zap className="w-7 h-7 shadow-[0_0_10px_#D4AF37]" />
                  </div>
                  <h4 className="text-4xl font-bold text-white mb-8 tracking-tight">Active Dissolution</h4>
                  <p className="text-slate-100 mb-12 leading-relaxed font-light text-lg italic font-serif">NoiseraX methodology: Flooding the stream with legitimate noise, making the signal-to-noise ratio mathematically impossible to decipher.</p>
                  <div className="grid gap-5">
                     {["Total Identity Cloaking", "Seamless Platform Logic", "Full Behavioral Entropy"].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-[13px] font-bold text-emerald-500 uppercase tracking-[0.2em] border-b border-emerald-500/10 pb-5">
                         <CheckCircle className="w-5 h-5 shadow-[0_0_8px_#10b981]" />
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