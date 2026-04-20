import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Core',          path: '#hero'     },
  { name: 'Protocols',     path: '#features' },
  { name: 'Intelligence',  path: '#problem'  },
  { name: 'Dissolution',   path: '#solution' },
  { name: 'Contact',       path: '#contact'  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCtaClick = () => {
    window.location.hash = '#contact';
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden transition-all duration-500 px-6 py-2.5"
          style={{
            background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(16px)',
            border: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(0, 0, 0, 0.04)',
            boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.04)' : 'none',
          }}
        >
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center gap-2.5 cursor-pointer" whileHover={{ scale: 1.02 }} onClick={() => window.location.href='/'}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #ffe878, #D4AF37)' }}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tighter text-onyx-900">Noisera<span className="text-gradient-gold">X</span></span>
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ name, path }) => (
                <a key={name} href={path} className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-onyx-900 transition-colors duration-200 group">
                  {name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 rounded-full" style={{ background: '#D4AF37' }} />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="badge-live hidden lg:flex">System Live</div>
              <motion.button className="btn-gold text-[10px] px-5 py-2.5" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} onClick={handleCtaClick}>
                Initialize
              </motion.button>
              <button className="md:hidden p-2 text-onyx-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-4 right-4 mt-3 rounded-2xl p-8 md:hidden shadow-2xl bg-white/95 backdrop-blur-xl border border-black/5">
            <div className="flex flex-col gap-6">
              {navLinks.map(({ name, path }) => (
                <a key={name} href={path} className="flex items-center justify-between text-xl font-bold text-onyx-900" onClick={() => setIsMobileMenuOpen(false)}>
                  {name} <ChevronRight className="w-5 h-5 text-gold-500" />
                </a>
              ))}
              <div className="h-px bg-slate-100" />
              <button className="btn-gold justify-center w-full text-base py-4" onClick={handleCtaClick}>Initialize Sync</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;