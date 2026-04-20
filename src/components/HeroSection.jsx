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
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(212,175,55,0.14) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 75% 70%, rgba(16,185,129,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ── MAIN HERO CARD ── */}
          <motion.div
            className="lg:col-span-8 premium-border rounded-[3rem] p-10 md:p-16 flex flex-col justify-center overflow-hidden"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Inner glow */}
            <div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }}
            />

            {/* Badge */}
            <div className="flex items-center gap-3 mb-10">
              <Crown className="w-4 h-4" style={{ color: '#D4AF37' }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.5em]"
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

            <p className="text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
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
            {/* Sovereign Data card */}
            <motion.div
              className="premium-border rounded-[2.5rem] p-10 flex flex-col justify-between flex-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Lock className="w-9 h-9 mb-8" style={{ color: 'rgba(212,175,55,0.6)' }} />
              <h3 className="text-2xl font-bold text-white mb-3 italic font-serif">Sovereign Data</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">
                Everything processed locally. Zero cloud footprint.
              </p>
              {/* Animated progress bar */}
              <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #D4AF37, #ffe878)', width: '100%' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>

            {/* System Armed card */}
            <motion.div
              className="premium-border rounded-[2.5rem] p-8 flex items-center gap-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <ShieldCheck className="w-7 h-7" style={{ color: '#10b981' }} />
              </div>
              <div>
                <div className="badge-live">System Live</div>
                <div className="text-xl font-bold text-white mt-2 tracking-tight">System Armed</div>
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM ROW ── */}
          {[
            { icon: Globe, label: 'Global Behavioral Synthesis' },
            { icon: Box,   label: 'Modular Privacy Protocol'  },
            { icon: Zap,   label: 'Zero Latency Neural Core'  },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="lg:col-span-4 premium-border rounded-[2rem] p-7 flex items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <Icon className="w-5 h-5" style={{ color: '#D4AF37' }} />
              </div>
              <div className="text-[11px] font-bold text-slate-300 uppercase tracking-widest leading-snug">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Scroll
        </span>
        <div className="w-px h-14 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
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