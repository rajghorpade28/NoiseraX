import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden" style={{ background: '#0c0c0f' }}>
      <CustomCursor />

      {/* ── Global Blueprint Grid ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(212,175,55,0.05) 1px, transparent 1px),' +
            'linear-gradient(to bottom, rgba(212,175,55,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          zIndex: 0,
        }}
      />

      {/* ── Gold ambient glow (top-left) ── */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          top: '-15%', left: '-10%',
          width: '55vw', height: '55vw',
          background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 50%, transparent 70%)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Emerald ambient glow (bottom-right) ── */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          bottom: '-15%', right: '-10%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.03) 50%, transparent 70%)',
          zIndex: 0,
        }}
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Deep Blue mid-accent ── */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '60vw', height: '40vw',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
          zIndex: 0,
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <main className="relative w-full" style={{ zIndex: 1 }}>
        {children}
      </main>

      {/* ── Luxury Footer ── */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="gold-divider mb-16" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-onyx font-black text-lg"
              style={{ background: 'linear-gradient(135deg, #ffe878, #D4AF37)' }}
            >X</div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              Noisera<span className="text-gradient-gold">X</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.35em] font-bold text-slate-500">
            {['Privacy Protocol', 'Intelligence', 'Manifesto', 'Contact'].map(l => (
              <a key={l} href="#" className="hover:text-gold-500 transition-colors duration-200">{l}</a>
            ))}
          </div>

          <div className="text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; 2024 NoiseraX. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;