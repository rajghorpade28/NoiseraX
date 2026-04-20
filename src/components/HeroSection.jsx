import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Globe, Zap, Crown, Lock, ShieldCheck, Box } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-24"
    >
      {/* ── Radial Gold Burst (hero center) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(212,175,55,0.18) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 75% 70%, rgba(16,185,129,0.14) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ── MAIN HERO CARD ── */}
          <motion.div
            className="lg:col-span-8 premium-border rounded-[3rem] p-10 md:p-16 flex flex-col justify-center overflow-hidden bg-white/[0.02]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Inner glow */}
            <div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)' }}
            />

            {/* Badge */}
            <div className="flex items-center gap-3 mb-10">
              <Crown className="w-4 h-4" style={{ color: '#D4AF37' }} />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.5em]"
                style={{ color: '#D4AF37' }}
              >
                Security Architecture 1.0
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bold mb-8 leading-[0.88] tracking-tighter text-white"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)' }}>
              REDEFINE<br />
              <span className="text-gradient-gold italic font-serif">DISSOLUTION.</span>
            </h1>

            <p className="text-xl text-white opacity-90 max-w-2xl mb-12 font-light leading-relaxed">
              NoiseraX engineers a sanctuary for your digital signature. Beyond simple masking,
              our protocol actively corrupts the stream of behavioral metadata.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button
                className="btn-gold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Initialize Core
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="btn-ghost"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play className="w-4 h-4" style={{ color: '#D4AF37' }} />
                Manifesto Film
              </motion.button>
            </div>
          </motion.div>

          {/* ── RIGHT BENTO COLUMN ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              className="premium-border rounded-[2.5rem] p-10 flex flex-col justify-between flex-1 bg-white/[0.03]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Lock className="w-9 h-9 mb-8 text-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
              <h3 className="text-3xl font-bold text-white mb-3 italic font-serif">Sovereign Data</h3>
              <p className="text-sm text-white opacity-80 font-light leading-relaxed mb-8">
                Everything processed locally. Zero cloud footprint. Absolute sovereignty.
              </p>
              <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #D4AF37, #ffe878)', width: '100%' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>

            <motion.div
              className="premium-border rounded-[2.5rem] p-8 flex items-center gap-5 bg-emerald-500/[0.05]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)' }}
              >
                <ShieldCheck className="w-8 h-8" style={{ color: '#10b981' }} />
              </div>
              <div>
                <div className="badge-live border-emerald-500/50 text-emerald-400">System Live</div>
                <div className="text-xl font-bold text-white mt-2 tracking-tight">System Armed</div>
              </div>
            </motion.div>
          </div>

          {[
            { icon: Globe, label: 'Global Behavioral Synthesis', col: '#D4AF37' },
            { icon: Box,   label: 'Modular Privacy Protocol',  col: '#D4AF37'  },
            { icon: Zap,   label: 'Zero Latency Neural Core',  col: '#D4AF37'  },
          ].map(({ icon: Icon, label, col }, i) => (
            <motion.div
              key={label}
              className="lg:col-span-4 premium-border rounded-[2rem] p-8 flex items-center gap-5 bg-white/[0.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${col}15`, border: `1px solid ${col}30` }}
              >
                <Icon className="w-6 h-6" style={{ color: col }} />
              </div>
              <div className="text-[12px] font-bold text-white opacity-90 uppercase tracking-widest leading-snug">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white opacity-40">
          Scroll
        </span>
        <div className="w-px h-16 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <motion.div
            className="absolute left-0 w-full rounded-full"
            style={{ height: '40%', background: 'linear-gradient(to bottom, #D4AF37, transparent)' }}
            animate={{ top: ['0%', '120%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;