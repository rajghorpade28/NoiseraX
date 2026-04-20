import { motion } from 'framer-motion';
import { Fingerprint, Clock, MousePointer, Navigation, ShieldAlert } from 'lucide-react';

const ProblemSection = () => {
  const trackingMethods = [
    {
      icon: Clock,
      title: "Temporal Analysis",
      description: "Precision tracking of engagement intervals.",
    },
    {
      icon: MousePointer,
      title: "Bio-Kinetic Printing", 
      description: "Your velocity create a behavioral signature.",
    },
    {
      icon: Fingerprint,
      title: "Identity Synthesis",
      description: "Amalgamating data to create shadow profiles.",
    },
    {
      icon: Navigation,
      title: "Cognitive Mapping",
      description: "Analyzing traversal to predict future intent.",
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-alabaster" id="problem">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Content */}
          <motion.div
            className="lg:col-span-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-red-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-red-600">The Identification Crisis</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-onyx-900 mb-6 leading-tight tracking-tighter">
              Behavioral <br /> <span className="text-gradient-gold italic font-serif">Subjugation.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
              Modern surveillance doesn't just watch you; it predicts you. Every scroll and every pause is harvested to construct a mathematical cage of your identity.
            </p>
          </motion.div>

          {/* Blueprint Visualizer - Left */}
          <motion.div
            className="lg:col-span-12 grid lg:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="premium-card p-10 bg-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 grid-dots opacity-[0.03] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-red-500" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Threat Matrix</span>
                   </div>
                   <div className="text-[9px] font-bold text-red-600 uppercase tracking-widest">Scanning...</div>
                </div>
                <div className="text-6xl font-bold font-serif text-onyx-900 mb-2">98.4%</div>
                <div className="text-[10px] uppercase tracking-widest text-red-600 font-bold mb-8">Correlation Certainty</div>
                <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                  <motion.div 
                    className="h-full bg-red-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '98.4%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {trackingMethods.map((idx) => (
                <div key={idx.title} className="premium-card p-6 bg-white hover:border-red-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-red-400/5 text-red-500 border border-red-500/10">
                    <idx.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-onyx-900 mb-1">{idx.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">{idx.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;