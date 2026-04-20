import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Core',          path: '#hero'     },
  { name: 'Protocols',     path: '#features' },
  { name: 'Intelligence',  path: '#problem'  },
  { name: 'Dissolution',   path: '#solution' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-5 md:px-8"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-[2rem] overflow-hidden transition-all duration-500 px-6 py-3"
          style={{
            background: isScrolled
              ? 'rgba(12, 12, 15, 0.85)'
              : 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: isScrolled
              ? '1px solid rgba(212,175,55,0.18)'
              : '1px solid rgba(255,255,255,0.08)',
            boxShadow: isScrolled ? '0 8px 40px rgba(0,0,0,0.6)' : 'none',
          }}
        >
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #ffe878, #D4AF37)',
                  boxShadow: '0 0 20px rgba(212,175,55,0.4)',
                }}
              >
                <Shield className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Noisera<span className="text-gradient-gold">X</span>
              </span>
            </motion.div>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-9">
              {navLinks.map(({ name, path }) => (
                <a
                  key={name}
                  href={path}
                  className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  {name}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #ffe878)' }}
                  />
                </a>
              ))}
            </nav>

            {/* ── CTA ── */}
            <div className="flex items-center gap-4">
              {/* Live badge */}
              <div className="badge-live hidden lg:flex">System Live</div>

              <motion.button
                className="btn-gold text-[11px] px-5 py-2.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Initialize
              </motion.button>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-4 right-4 mt-3 rounded-[2.5rem] p-10 md:hidden"
            style={{
              background: 'rgba(12,12,15,0.97)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(212,175,55,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex flex-col gap-7">
              {navLinks.map(({ name, path }) => (
                <a
                  key={name}
                  href={path}
                  className="flex items-center justify-between text-2xl font-bold text-white group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                  <ChevronRight
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                    style={{ color: '#D4AF37' }}
                  />
                </a>
              ))}

              <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <button className="btn-gold justify-center w-full text-base py-4">
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