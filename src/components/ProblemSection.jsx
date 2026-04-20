import { motion } from 'framer-motion';
import { Eye, Clock, MousePointer, Navigation, Target, TrendingUp, AlertTriangle, Fingerprint, Search, ShieldAlert } from 'lucide-react';

const ProblemSection = () => {
  const trackingMethods = [
    {
      icon: Clock,
      title: "Temporal Analysis",
      description: "Precision tracking of engagement intervals. Your attention span on specific metadata reveals more than your clicks ever could.",
    },
    {
      icon: MousePointer,
      title: "Bio-Kinetic Printing", 
      description: "Your velocity, acceleration, and scroll-pauses create a behavioral signature as unique as a physical fingerprint.",
    },
    {
      icon: Fingerprint,
      title: "Identity Synthesis",
      description: "Amalgamating disparate data points—from device resolution to battery level—to create a persistent shadow profile.",
    },
    {
      icon: Navigation,
      title: "Cognitive Mapping",
      description: "Analyzing the sequence of your digital traversal to predict future intent with uncanny mathematical accuracy.",
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-onyx relative overflow-hidden" id="problem">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-12 md:items-end mb-24 border-b border-white/5 pb-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
               <ShieldAlert className="w-6 h-6 text-red-500" />
               <span className="text-xs font-bold uppercase tracking-[0.4em] text-red-500">The Modern Crisis</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tighter">
              YOU ARE THE <br /> <span className="italic font-serif text-red-500/80">PRODUCT.</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Beyond cookies and trackers lies a deeper surveillance. Modern algorithms don't just see what you do—they understand who you are.
            </p>
          </motion.div>
        </div>

        {/* The Reveal Grid */}
        <div className="grid md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/5 rounded-3xl overflow-hidden mb-32">
          {trackingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-onyx p-12 hover:bg-white/[0.02] transition-colors group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col h-full">
                <div className="text-red-500/30 group-hover:text-red-500 transition-colors mb-8">
                   <method.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">{method.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed font-light">
                  {method.description}
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] text-red-500 font-bold uppercase tracking-[0.3em]">Surveillance Node Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Impact: Editorial Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
             <div className="sticky top-32">
               <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
                 The Result: <br /> <span className="text-gradient-gold">Mathematical Predictability.</span>
               </h3>
               <p className="text-slate-400 font-light leading-relaxed">
                 By aggregating these micro-interactions, entities build a digital twin of your consciousness. They know your next move before you do.
               </p>
             </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { label: "Propensity Scores", val: "94.2%", desc: "Likelihood of next purchase" },
              { label: "Behavioral Sync", val: "89.1%", desc: "Identity verification confidence" },
              { label: "Intent Velocity", val: "High", desc: "Urgency of immediate conversion" },
              { label: "Profile Wealth", val: "Tier 1", desc: "Purchasing power estimation" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="p-10 border border-white/10 rounded-3xl bg-white/[0.03] hover:border-red-500/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">{stat.label}</div>
                <div className="text-4xl font-bold text-white mb-4 italic font-serif">{stat.val}</div>
                <div className="text-xs text-slate-500 font-light tracking-tight">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;