import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-onyx text-slate-100 overflow-x-hidden selection:bg-gold-500 selection:text-onyx">
      <CustomCursor />
      {/* Background grain texture */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-50" />
      
      {/* Fixed background layout */}
      <div className="fixed inset-0 bg-onyx -z-20" />
      
      {/* Subtle Luxury Glows */}
      <motion.div
        className="fixed -top-24 -left-24 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="fixed -bottom-24 -right-24 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <main className="relative z-10 w-full">
        {children}
      </main>

      {/* Luxury Footer (Minimalist) */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-2xl font-bold tracking-tighter text-white">
             Noisera<span className="text-gold-500">X</span>
           </div>
           <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
             <a href="#" className="hover:text-gold-500 transition-colors">Privacy Protocol</a>
             <a href="#" className="hover:text-gold-500 transition-colors">Intelligence</a>
             <a href="#" className="hover:text-gold-500 transition-colors">Manifesto</a>
           </div>
           <div className="text-[10px] text-slate-600 uppercase tracking-widest">
             &copy; 2024 NoiseraX Intelligence. All rights Reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;