import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Eye, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Confuse Trackers.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Protect Your Digital Behavior.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DCG generates realistic browsing noise and detects phishing in real-time — 
              reducing surveillance accuracy without blocking the web.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-primary-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Chrome
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 border border-slate-600 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                See How It Works
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>100% Local</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-400" />
                <span>No Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Real-time Protection</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
              {/* Signal visualization */}
              <div className="absolute inset-0 p-8">
                <div className="text-xs text-slate-400 mb-4 font-mono">Signal Analysis</div>
                
                {/* Clean signal */}
                <div className="mb-8">
                  <div className="text-sm text-slate-300 mb-2">Original Behavior</div>
                  <div className="h-12 bg-slate-800 rounded-lg relative overflow-hidden">
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                    <motion.div
                      className="absolute top-1/2 left-0 w-2 h-2 bg-primary-400 rounded-full -translate-y-1/2"
                      animate={{ x: [0, 300, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                </div>

                {/* Noisy signal */}
                <div className="mb-8">
                  <div className="text-sm text-slate-300 mb-2">With DCG Noise</div>
                  <div className="h-12 bg-slate-800 rounded-lg relative overflow-hidden">
                    {/* Multiple signal lines */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute top-1/2 left-0 w-full h-0.5 ${
                          i === 0 ? 'bg-primary-400' : 'bg-accent-400/60'
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, delay: 1.5 + i * 0.2 }}
                        style={{ 
                          transformOrigin: 'left',
                          transform: `translateY(${(i - 2) * 3}px)`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-400 mb-2">
                    Tracking Accuracy: 23%
                  </div>
                  <div className="text-sm text-slate-400">
                    Behavioral profile corrupted
                  </div>
                </div>
              </div>

              {/* Floating personas */}
              <div className="absolute top-4 right-4 space-y-2">
                {['🎮', '📚', '🏃', '🍳'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center text-sm backdrop-blur-sm border border-slate-600/50"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;