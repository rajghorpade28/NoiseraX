import { motion } from 'framer-motion';
import { Fingerprint, Eye, Database, AlertCircle, ShieldAlert, Cpu, Clock, MousePointer, Navigation } from 'lucide-react';

const ProblemSection = () => {
  const trackingMethods = [
    {
      icon: Clock,
      title: "Temporal Analysis",
      description: "Precision tracking of engagement intervals. Your attention span reveals more than your clicks.",
      color: "#f43f5e" 
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 20%, rgba(244,63,94,0.12) 0%, transparent 50%),' +
            'radial-gradient(circle at 90% 80%, rgba(212,175,55,0.08) 0%, transparent 50%)',
        }}
      />
      
      <div className="absolute inset-0 z-0 grid-blueprint opacity-[0.1] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <motion.div
            className="lg:col-span-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-rose-500">The Identification Crisis</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight tracking-tighter">
              Behavioral <br /> <span className="text-gradient-gold italic font-serif">Subjugation.</span>
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl font-light leading-relaxed">
              Modern surveillance doesn't just watch you; it predicts you. Every scroll, every hover, and every pause is harvested to construct a mathematical cage of your identity.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {trackingMethods.map((tracker, idx) => (
              <motion.div
                key={tracker.title}
                className="premium-border p-8 rounded-[2.5rem] bg-white/[0.03] border-white/10 group cursor-default"
                whileHover={{ y: -5, borderColor: 'rgba(244,63,94,0.4)' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-rose-500/10 border border-rose-500/30 text-rose-500">
                  <tracker.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 italic font-serif">{tracker.title}</h4>
                <p className="text-sm text-white opacity-80 leading-relaxed font-light mb-6">
                  {tracker.description}
                </p>
                <div className="badge-live bg-rose-500/10 border-rose-500/30 text-rose-500 before:bg-rose-500">Severely Exposed</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="lg:col-span-12 grid md:grid-cols-2 gap-8">
            <motion.div
              className="premium-border p-12 rounded-[3.5rem] bg-rose-500/[0.02] border-rose-500/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold text-white mb-6 italic font-serif tracking-tight text-gradient-gold">Synthetic Recursion</h4>
              <p className="text-lg text-white opacity-90 leading-relaxed font-light mb-10">
                Profiling engines use recursive learning to close the gap on your anonymity. Traditional tools provide a false sense of security while your shadow profile grows.
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping shadow-[0_0_10px_#f43f5e]" />
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">Protocol Failure Imminent</span>
              </div>
            </motion.div>

            <motion.div
              className="premium-border p-12 rounded-[3.5rem] bg-white/[0.02] border-white/10 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
               <div className="text-[10px] text-slate-400 mb-8 uppercase tracking-[0.5em] font-bold">System Telemetry</div>
               <div className="space-y-6">
                  {[
                    { label: 'Correlation Certainty', val: '98.4%', col: '#f43f5e' },
                    { label: 'Profile Wealth', val: 'Tier 1', col: '#fff' },
                    { label: 'Identity Confidence', val: 'High', col: '#f43f5e' }
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                       <span className="text-xs text-white opacity-60 uppercase tracking-widest">{s.label}</span>
                       <span className="text-2xl font-bold font-mono" style={{ color: s.col }}>{s.val}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;