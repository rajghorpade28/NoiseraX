import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Shuffle, Activity, TrendingDown, CheckCircle, Globe, Lock } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-onyx relative overflow-hidden" id="solution">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
          >
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">The Neural Solution</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            ACTIVE <span className="italic font-serif text-gradient-gold">DISSOLUTION.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            NoiseraX does not hide. It corrupts. By synthesizing authentic behavioral noise, we render the observer's intelligence invalid.
          </p>
        </div>

        {/* High-Fidelity Dashboard Visualization */}
        <motion.div
          className="premium-border rounded-[3rem] p-1 shadow-2xl shadow-emerald-950/20 mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-onyx h-full w-full rounded-[2.8rem] p-8 md:p-16 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left Side: Stats & Logic */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gold-500 shadow-lg shadow-gold-500/10">
                      <Brain className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">The NoiseraX Protocol</h3>
                      <p className="text-sm text-slate-500 uppercase tracking-widest font-mono">Neural Behavioral Synthesis</p>
                   </div>
                </div>

                <div className="space-y-10">
                   {[
                     { label: "Phase 1: Analysis", val: "Temporal Sync", desc: "Syncing with your natural digital circadian rhythms." },
                     { label: "Phase 2: Synthesis", val: "Persona Injection", desc: "Layering high-entropy behavioral noise into active streams." },
                     { label: "Phase 3: Dissolution", val: "Profile Decay", desc: "Systematic corruption of third-party behavioral models." }
                   ].map((step, i) => (
                     <motion.div 
                        key={i}
                        className="flex gap-6 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                        viewport={{ once: true }}
                     >
                        <div className="flex flex-col items-center">
                           <div className="w-6 h-6 rounded-full border border-gold-500/30 flex items-center justify-center text-[10px] text-gold-500 font-bold bg-gold-500/5">
                              {i + 1}
                           </div>
                           {i !== 2 && <div className="w-px h-full bg-white/5 mt-2" />}
                        </div>
                        <div>
                           <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-1">{step.label}</div>
                           <div className="text-lg font-bold text-white mb-1 tracking-tight">{step.val}</div>
                           <p className="text-sm text-slate-500 font-light leading-relaxed">{step.desc}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
              </div>

              {/* Right Side: Visual Signal Analysis */}
              <div className="relative">
                 <div className="glass rounded-[2rem] p-10 border-white/5 relative overflow-hidden">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    <div className="relative z-10">
                       <div className="flex justify-between items-end mb-10">
                          <div>
                             <div className="text-[10px] uppercase tracking-[0.3em] text-gold-500/50 mb-2">Real-time Interference</div>
                             <div className="text-4xl font-bold text-white italic font-serif">Aura Flux</div>
                          </div>
                          <div className="text-right">
                             <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 mb-2">Entropy Level</div>
                             <div className="text-2xl font-bold text-emerald-500">Critical</div>
                          </div>
                       </div>

                       {/* Waveform Visualizer */}
                       <div className="space-y-6">
                          <div className="relative h-24 bg-white/[0.03] rounded-xl overflow-hidden border border-white/5">
                             {[...Array(20)].map((_, i) => (
                               <motion.div
                                 key={i}
                                 className="absolute bottom-0 bg-gold-500/30"
                                 style={{ 
                                   left: `${i * 5}%`, 
                                   width: '4%', 
                                   height: '40%' 
                                 }}
                                 animate={{ 
                                   height: [`${20 + Math.random() * 60}%`, `${10 + Math.random() * 80}%`, `${30 + Math.random() * 50}%`] 
                                 }}
                                 transition={{ 
                                   duration: 2 + Math.random(), 
                                   repeat: Infinity, 
                                   ease: "easeInOut" 
                                 }}
                               />
                             ))}
                             <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500/50 font-bold">Synthesized stream 01</span>
                             </div>
                          </div>

                          <div className="relative h-24 bg-white/[0.03] rounded-xl overflow-hidden border border-white/5">
                             {[...Array(20)].map((_, i) => (
                               <motion.div
                                 key={i}
                                 className="absolute bottom-0 bg-emerald-500/30"
                                 style={{ 
                                   left: `${i * 5}%`, 
                                   width: '4%', 
                                   height: '40%' 
                                 }}
                                 animate={{ 
                                   height: [`${10 + Math.random() * 80}%`, `${30 + Math.random() * 50}%`, `${20 + Math.random() * 60}%`] 
                                 }}
                                 transition={{ 
                                   duration: 2.5 + Math.random(), 
                                   repeat: Infinity, 
                                   ease: "easeInOut" 
                                 }}
                               />
                             ))}
                             <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/50 font-bold">Synthesized stream 02</span>
                             </div>
                          </div>
                       </div>

                       <div className="mt-8 flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                          <div className="flex gap-4">
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gold-500 rounded-full" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold">Persona Active</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold">ML Core Sync</span>
                             </div>
                          </div>
                          <Activity className="w-4 h-4 text-slate-500 animate-pulse" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-2 gap-8">
           <motion.div
              className="glass p-12 rounded-[2.5rem] border-white/5 overflow-hidden group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
           >
              <div className="relative z-10">
                 <Lock className="w-12 h-12 text-slate-600 mb-8" />
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