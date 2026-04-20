import { motion } from 'framer-motion';
import { Fingerprint, Eye, Database, AlertCircle, ShieldAlert, Cpu, Clock, MousePointer, Navigation } from 'lucide-react';

const ProblemSection = () => {
  const trackingMethods = [
    {
      icon: Clock,
      title: "Temporal Analysis",
      description: "Precision tracking of engagement intervals. Your attention span reveals more than your clicks.",
      color: "#f43f5e" // Rose
    },
    {
      icon: MousePointer,
      title: "Bio-Kinetic Printing", 
      description: "Your velocity and scroll-pauses create a behavioral signature as unique as a fingerprint.",
      color: "#f43f5e"
    },
    {
      icon: Fingerprint,
      title: "Identity Synthesis",
      description: "Amalgamating disparate data points to create a persistent, inescapable shadow profile.",
      color: "#f43f5e"
    },
    {
      icon: Navigation,
      title: "Cognitive Mapping",
      description: "Analyzing your digital traversal to predict future intent with uncanny accuracy.",
      color: "#f43f5e"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="problem">
      {/* ── Red/Rose Danger Glows ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 20%, rgba(244,63,94,0.08) 0%, transparent 50%),' +
            'radial-gradient(circle at 90% 80%, rgba(212,175,55,0.05) 0%, transparent 50%)',
        }}
      />
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-blueprint opacity-[0.07] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Content */}
          <motion.div
            className="lg:col-span-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-rose-500/50 shadow-[0_0_8px_#f43f5e]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">The Identification Crisis</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight tracking-tighter">
              Behavioral <br /> <span className="text-gradient-gold italic font-serif">Subjugation.</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
              Modern surveillance doesn't just watch you; it predicts you. Every scroll, every hover, and every pause is harvested to construct a mathematical cage of your identity.
            </p>
          </motion.div>

          {/* Blueprint Visualizer - Left */}
          <motion.div
            className="lg:col-span-7 premium-border p-10 rounded-[3rem] bg-rose-500/[0.01] border-rose-500/20 h-full relative overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Subtle red scan line animation */}
            <motion.div 
               className="absolute left-0 w-full h-[1px] bg-rose-500/30 z-0"
               animate={{ top: ['0%', '100%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-12">
                 <div className="flex items-center gap-3">
                    <ShieldAlert className="w-5 h-5 text-rose-500 shadow-[0_0_10px_#f43f5e]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">Threat Matrix: Active</span>
                 </div>
                 <div className="badge-live bg-rose-500/10 border-rose-500/40 text-rose-500 before:bg-rose-500 before:shadow-[0_0_8px_#f43f5e]">Scanning Exposure...</div>
              </div>

              {/* Abstract Blueprint Diagram */}
              <div className="relative h-72 w-full mb-12 flex items-center justify-center">
                 <svg className="w-full h-full opacity-40" viewBox="0 0 400 200">
                    <motion.path 
                       d="M 50 100 Q 150 50 250 150 T 350 100" 
                       fill="none" 
                       stroke="#f43f5e" 
                       strokeWidth="1.5" 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle 
                       cx="200" cy="100" r="60" 
                       fill="none" 
                       stroke="#D4AF37" 
                       strokeWidth="1" 
                       strokeDasharray="4 4"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.rect 
                      x="100" y="50" width="200" height="100" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.05)" 
                      strokeWidth="1" 
                    />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl font-bold font-serif text-white mb-2 shadow-sm">98.4%</div>
                        <div className="text-[10px] uppercase tracking-widest text-rose-500 font-bold">Correlation Certainty</div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                 <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 group-hover:border-rose-500/20 transition-all">
                    <div className="text-[9px] uppercase tracking-widest text-slate-300 mb-2 font-bold">Leakage Type</div>
                    <div className="text-sm font-bold text-white">Temporal Drift</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 group-hover:border-rose-500/20 transition-all">
                    <div className="text-[9px] uppercase tracking-widest text-slate-300 mb-2 font-bold">Exposure Status</div>
                    <div className="text-sm font-bold text-rose-500 animate-pulse">Unencrypted Pulse</div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Risk Grid - Right */}
          <div className="lg:col-span-5 grid gap-6">
            {trackingMethods.map((tracker, idx) => (
              <motion.div
                key={tracker.title}
                className="premium-border p-8 rounded-[2.5rem] flex items-center justify-between group cursor-default transition-all hover:bg-rose-500/[0.03] hover:border-rose-500/30"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.3)', color: '#f43f5e' }}
                  >
                    <tracker.icon className="w-6 h-6 shadow-sm" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">{tracker.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-slate-300 group-hover:text-slate-200 transition-colors">Risk Level: Severe</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-rose-500/20 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-ping" />
                </div>
              </motion.div>
            ))}
            
            <motion.div
              className="premium-border p-10 rounded-[3rem] bg-gold-500/[0.02] border-gold-500/20 group hover:bg-gold-500/[0.05] transition-all"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
               <h4 className="text-2xl font-bold text-white mb-4 italic font-serif">The Synthetic Loop</h4>
               <p className="text-sm text-slate-200 font-light leading-relaxed mb-8">
                 Profiling engines use recursive learning to close the gap on your anonymity. Traditional tools provide a false sense of security.
               </p>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-[0_0_8px_#f43f5e]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500">Protocol Failure Imminent</span>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;