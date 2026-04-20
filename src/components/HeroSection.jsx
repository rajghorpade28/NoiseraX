import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Globe, Zap, Crown, Lock, ShieldCheck, Box } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* ── Subtlest Light Accents ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 30%, rgba(212,175,55,0.06) 0%, transparent 60%),' +
            'radial-gradient(circle at 90% 70%, rgba(16,185,129,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">

          {/* ── MAIN HERO CARD ── */}
          <motion.div
            className="lg:col-span-8 premium-card p-10 md:p-14 flex flex-col justify-center overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2.5 mb-8">
              <Crown className="w-4 h-4 text-gold-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-600">
                Architecture 1.0
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bold mb-6 leading-[0.92] tracking-tighter text-onyx-900"
              style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}>
              REDEFINE<br />
              <span className="text-gradient-gold italic font-serif">DISSOLUTION.</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mb-10 font-light leading-relaxed">
              NoiseraX engineers a sanctuary for your digital signature. Beyond simple masking,
              our protocol actively corrupts the stream of behavioral metadata.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="btn-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.hash = '#contact'}
              >
                Initialize Core
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-3.5 h-3.5 text-gold-600" />
                Manifesto Film
              </motion.button>
            </div>
          </motion.div>

          {/* ── RIGHT BENTO COLUMN ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <motion.div
              className="premium-card p-8 flex flex-col justify-between flex-1 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <Lock className="w-7 h-7 text-gold-600" />
                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Sovereign Data</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-onyx-900 mb-2 italic font-serif">Deep Privacy</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                  Everything processed locally. Zero cloud footprint. Absolute sovereignty.
                </p>
                <div className="h-1 w-full rounded-full overflow-hidden bg-slate-50 border border-slate-100">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #ffe878)', width: '100%' }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="premium-card p-6 flex items-center gap-4 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.1)' }}
              >
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="badge-live">System Live</div>
                <div className="text-lg font-bold text-onyx-900 mt-1 tracking-tight">Active Shield</div>
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM TIGHT ROW ── */}
          {[
            { icon: Globe, label: 'Behavioral Synthesis' },
            { icon: Box,   label: 'Modular Protocol'  },
            { icon: Zap,   label: 'Neural Core'  },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="lg:col-span-4 premium-card p-6 flex items-center gap-4 bg-white"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (0.1 * i) }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.1)' }}
              >
                <Icon className="w-5 h-5 text-gold-600" />
              </div>
              <div className="text-[10px] font-bold text-onyx-900 uppercase tracking-widest leading-snug">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;