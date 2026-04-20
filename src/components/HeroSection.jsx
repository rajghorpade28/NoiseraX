import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Shield, Globe, Zap, Crown, Fingerprint, Lock, ShieldCheck, Box } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-onyx pt-32 pb-20" id="hero">
      {/* Grid Blueprint Background */}
      <div className="absolute inset-0 z-0 grid-blueprint opacity-20 pointer-events-none" />
      
      {/* Animated Geometric Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-gold-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-emerald-500/5 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto">
          
          {/* Main Hero Card - Bento Style */}
          <motion.div 
            className="lg:col-span-8 premium-border p-10 md:p-16 rounded-[3rem] items-start flex flex-col justify-center overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
               <Crown className="w-5 h-5 text-gold-500" />
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold-500">Security Architecture 1.0</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold mb-10 leading-[0.85] tracking-tighter text-white">
              REDEFINE <br /> <span className="italic font-serif text-gradient-gold">DISSOLUTION.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
              NoiseraX engineers a sanctuary for your digital signature. Beyond simple masking, our protocol actively corrupts the stream of behavioral metadata.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                className="px-10 py-5 bg-white text-onyx rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gold-500 hover:text-white transition-all shadow-xl shadow-white/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Initalize Core 
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <button className="px-10 py-5 glass rounded-full font-bold text-lg text-white hover:bg-white/5 transition-all flex items-center gap-3">
                <Play className="w-5 h-5 text-gold-500" />
                Manifesto Film
              </button>
            </div>
          </motion.div>

          {/* Right Column Bento Items */}
          <div className="lg:col-span-4 grid gap-6 lg:gap-8">
            
            {/* Trust Matrix Card */}
            <motion.div 
              className="premium-border p-10 rounded-[2.5rem] flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div>
                <Lock className="w-8 h-8 text-gold-500/50 mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4 italic font-serif">Sovereign Data</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">Everything processed locally. Zero cloud footprint. Mathematical certainty in absolute privacy.</p>
              </div>
              <div className="mt-10 flex gap-2">
                 <div className="h-1 flex-1 bg-gold-500/20 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gold-500" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                 </div>
                 <div className="h-1 w-1/4 bg-white/5 rounded-full" />
              </div>
            </motion.div>

            {/* Network Analytics Card */}
            <motion.div 
              className="premium-border p-10 rounded-[2.5rem] flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
               <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <ShieldCheck className="w-8 h-8" />
               </div>
               <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-1">Status</div>
                  <div className="text-xl font-bold text-white tracking-tight">System Armed</div>
               </div>
            </motion.div>
          </div>

          {/* Bottom Row Bento Items */}
          <motion.div 
            className="lg:col-span-4 premium-border p-8 rounded-[2.5rem] sm:flex items-center gap-6 hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
             <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gold-500">
                <Globe className="w-6 h-6" />
             </div>
             <div className="text-xs font-bold text-slate-300 uppercase tracking-widest leading-loose">Global Behavioral Synthesis Enabled</div>
          </motion.div>

          <motion.div 
            className="lg:col-span-4 premium-border p-8 rounded-[2.5rem] flex items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
             <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gold-500">
                <Box className="w-6 h-6" />
             </div>
             <div className="text-xs font-bold text-slate-300 uppercase tracking-widest leading-loose">Modular Privacy Protocol</div>
          </motion.div>

          <motion.div 
            className="lg:col-span-4 premium-border p-8 rounded-[2.5rem] flex items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
             <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gold-500">
                <Zap className="w-6 h-6" />
             </div>
             <div className="text-xs font-bold text-slate-300 uppercase tracking-widest leading-loose">Zero Latency Neural Injection</div>
          </motion.div>

        </div>
      </div>

      {/* Grid-Aligned Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-4">
           <span className="text-[10px] uppercase tracking-[0.5em] text-slate-600 font-bold rotate-90 origin-left translate-x-3">Scroll</span>
           <div className="w-px h-16 bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-[-1.5px] w-1 h-3 bg-gold-500 rounded-full"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;