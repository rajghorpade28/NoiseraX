import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Shield, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={`w-full max-w-5xl pointer-events-auto transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'glass-dark rounded-full py-2 px-6 shadow-2xl shadow-onyx/50' 
            : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
               <div className="absolute inset-0 bg-gold-500/20 rounded-xl blur-lg group-hover:bg-gold-500/30 transition-colors" />
               <div className="relative w-9 h-9 bg-onyx border border-white/10 group-hover:border-gold-500/50 rounded-xl flex items-center justify-center transition-colors">
                  <Shield className="w-5 h-5 text-gold-500" />
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">
                Noisera<span className="text-gold-500">X</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">Premium Protection</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center bg-white/5 rounded-full px-8 py-2 border border-white/5 space-x-8">
            {['Features', 'Intelligence', 'Security', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            
            <motion.button
              className="px-6 py-2 bg-white text-onyx rounded-full text-sm font-bold hover:bg-gold-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get NoiseraX
            </motion.button>

            <button 
              className="md:hidden p-2 text-slate-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-4 right-4 mt-2 glass-dark rounded-3xl overflow-hidden md:hidden pointer-events-auto"
          >
            <div className="p-6 flex flex-col space-y-4">
              {['Features', 'Intelligence', 'Security', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium text-slate-300 hover:text-gold-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;