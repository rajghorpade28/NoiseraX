import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, details, delay = 0, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative group h-full flex flex-col p-8 md:p-10 ${
        isEven ? 'bg-onyx border border-white/5' : 'bg-white/5 border border-white/10'
      } rounded-[2rem] overflow-hidden transition-all duration-700`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, cubicBezier: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/10 transition-colors" />

      {/* Icon Capsule */}
      <div className="relative w-14 h-14 mb-10">
        <div className="absolute inset-0 bg-gold-500/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
        <div className="relative w-full h-full glass border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 group-hover:text-gold-200 transition-colors">
          <Icon className="w-7 h-7" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-6 tracking-tight font-serif italic">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-8 leading-relaxed font-light text-sm">
          {description}
        </p>

        {/* Details as elegant chips */}
        {details && (
          <div className="flex flex-wrap gap-2">
            {details.slice(0, 3).map((detail, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] uppercase tracking-wider text-slate-500 font-mono group-hover:border-gold-500/20 group-hover:text-gold-500/50 transition-colors"
              >
                {detail}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className="mt-10 flex items-center gap-3 text-gold-500/50 group-hover:text-gold-500 transition-colors">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover Protocol</span>
        <motion.div
           animate={{ x: [0, 5, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-3 h-3" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;