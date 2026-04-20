import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Shield, Globe, Zap, Crown, Fingerprint, Lock } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/20 via-onyx/60 to-onyx z-10" />
        <img 
          src="/luxury_tech_background_1776668191835.png" 
          alt="Luxury Tech Background"
          className="w-full h-full object-cover scale-110 opacity-40 mix-blend-luminosity"
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-10 group cursor-default"
          >
            <Crown className="w-4 h-4 text-gold-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-200">The Gold Standard of Privacy</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter"
          >
            <span className="block text-white">REDEFINE.</span>
            <span className="block text-gradient-gold">ANONYMITY.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-light"
          >
            Experience the world's most sophisticated browser extension. 
            <span className="text-white font-medium"> NoiseraX</span> employs high-fidelity behavior synthesis to render your digital footprint untraceable.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-20"
          >
            <motion.button
              className="px-10 py-5 bg-gold-500 text-onyx rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Privileged Access
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className="px-10 py-5 bg-transparent text-white border border-white/20 hover:border-gold-500/50 hover:bg-white/5 rounded-full font-bold text-lg flex items-center justify-center gap-3 backdrop-blur-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 text-gold-500" />
              Watch the Film
            </motion.button>
          </motion.div>

          {/* Trust Matrix */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/5 w-full max-w-4xl"
          >
            {[
              { icon: Lock, label: 'Military Grade', sub: 'On-Device ML' },
              { icon: Globe, label: 'Global Synth', sub: 'Behavioral Noise' },
              { icon: Fingerprint, label: 'Anti-Print', sub: 'Identity Cloak' },
              { icon: Zap, label: 'Zero Latency', sub: 'Optimized Core' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="w-6 h-6 text-gold-500/50 mb-3" />
                <div className="text-xs font-bold text-white uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent relative">
          <motion.div 
            className="absolute top-0 left-[-1.5px] w-1 h-3 bg-gold-500 rounded-full"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;