import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 md:px-8 pointer-events-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className={`
          premium-border rounded-[2rem] transition-all duration-500 overflow-hidden
          ${isScrolled ? 'bg-onyx/80 backdrop-blur-xl py-3 px-6' : 'bg-transparent py-4 px-8'}
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center text-onyx shadow-lg shadow-gold-500/20">
                 <Shield className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                Noisera<span className="text-gold-500">X</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {[
                { name: 'Core', path: '#hero' },
                { name: 'Protocols', path: '#features' },
                { name: 'Intelligence', path: '#problem' },
                { name: 'Dissolution', path: '#solution' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.path} 
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-gold-500 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA & Status */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                 <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-500">System Live</span>
              </div>

              <motion.button
                className="px-6 py-2.5 bg-white text-onyx rounded-full text-xs font-bold hover:bg-gold-500 hover:text-white transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Initalize
              </motion.button>

              <button 
                className="md:hidden p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 premium-border rounded-[2.5rem] bg-onyx/95 backdrop-blur-2xl p-10 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-8">
              {['Core', 'Protocols', 'Intelligence', 'Dissolution'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-bold text-white flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                  <ChevronRight className="w-6 h-6 text-gold-500 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
              <div className="h-px bg-white/5 my-4" />
              <button className="w-full py-5 bg-gold-500 text-onyx rounded-full font-bold text-lg">
                Get NoiseraX
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;