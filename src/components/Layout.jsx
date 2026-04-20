import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-alabaster text-onyx-900 overflow-x-hidden">
      <CustomCursor />

      {/* ── Subtlest Light Blueprint ── */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),' +
            'linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 0,
        }}
      />

      {/* ── Softest Light Accents ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 10%, rgba(212,175,55,0.03) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      <main className="relative w-full" style={{ zIndex: 1 }}>
        {children}
      </main>

      {/* ── Tightened Luxury Footer ── */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100 mt-12 bg-white" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #ffe878, #D4AF37)' }}
            >X</div>
            <span className="text-xl font-bold tracking-tighter text-onyx-900">
              Noisera<span className="text-gradient-gold">X</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.25em] font-bold text-slate-400">
            {['Privacy', 'Intelligence', 'Manifesto', 'Contact'].map(l => (
              <a key={l} href="#" className="hover:text-gold-600 transition-colors duration-200">{l}</a>
            ))}
          </div>

          <div className="text-[9px] text-slate-400 uppercase tracking-widest font-medium">
            &copy; 2024 NoiseraX.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;