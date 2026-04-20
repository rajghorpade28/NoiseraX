import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Eye, Zap, Users, Brain, Activity } from 'lucide-react';

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
            <motion.div
              className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Shield className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Privacy + Security Browser Extension</span>
            </motion.div>

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
              className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DCG is a revolutionary browser extension that generates realistic background browsing activity to confuse trackers, 
              while providing real-time phishing detection using both external threat intelligence and local machine learning. 
              <span className="text-primary-300 font-medium">Everything runs on-device with no servers, no accounts, and no data collection.</span>
            </motion.p>

            {/* Key Features Preview */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center">
                <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Multiple Personas</div>
                <div className="text-xs text-slate-400">Realistic behavior simulation</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center">
                <Brain className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Smart Detection</div>
                <div className="text-xs text-slate-400">AI-powered phishing protection</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center">
                <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Adaptive Noise</div>
                <div className="text-xs text-slate-400">Behavior-based corruption</div>
              </div>
            </motion.div>

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
                <span>100% Local Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-400" />
                <span>No Data Collection</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Real-time Protection</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
              {/* Enhanced signal visualization */}
              <div className="absolute inset-0 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs text-slate-400 font-mono">DCG Signal Analysis</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Active</span>
                  </div>
                </div>
                
                {/* Original behavior section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-slate-300 font-medium">Your Real Behavior</div>
                    <div className="text-xs text-blue-400">Trackable: 94%</div>
                  </div>
                  <div className="h-12 bg-slate-800/50 rounded-lg relative overflow-hidden border border-slate-700/30">
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 -translate-y-1/2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                    <motion.div
                      className="absolute top-1/2 left-0 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 shadow-lg shadow-blue-400/50"
                      animate={{ x: [0, 280, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                </div>

                {/* DCG corrupted behavior */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-slate-300 font-medium">With DCG Noise Injection</div>
                    <div className="text-xs text-red-400">Trackable: 23%</div>
                  </div>
                  <div className="h-16 bg-slate-800/50 rounded-lg relative overflow-hidden border border-slate-700/30">
                    {/* Multiple overlapping signals representing different personas */}
                    {[
                      { color: 'bg-blue-400', delay: 0, y: 0 },
                      { color: 'bg-purple-400', delay: 0.3, y: -8 },
                      { color: 'bg-green-400', delay: 0.6, y: 8 },
                      { color: 'bg-yellow-400', delay: 0.9, y: -4 },
                      { color: 'bg-pink-400', delay: 1.2, y: 4 },
                    ].map((signal, i) => (
                      <motion.div
                        key={i}
                        className={`absolute top-1/2 left-0 w-full h-0.5 ${signal.color} opacity-70`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 + signal.delay }}
                        style={{ 
                          transformOrigin: 'left',
                          transform: `translateY(${signal.y}px)`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Status indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
                    <div className="text-xs text-slate-400 mb-1">Active Personas</div>
                    <div className="text-lg font-bold text-white">4</div>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
                    <div className="text-xs text-slate-400 mb-1">Profile Accuracy</div>
                    <div className="text-lg font-bold text-red-400">23%</div>
                  </div>
                </div>
              </div>

              {/* Floating personas with enhanced animations */}
              <div className="absolute top-4 right-4 space-y-2">
                {[
                  { emoji: '🎮', label: 'Gamer' },
                  { emoji: '📚', label: 'Reader' }, 
                  { emoji: '🏃', label: 'Fitness' },
                  { emoji: '🍳', label: 'Cooking' }
                ].map((persona, i) => (
                  <motion.div
                    key={i}
                    className="group relative"
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
                    <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-lg backdrop-blur-sm border border-slate-600/50 hover:border-primary-500/50 transition-colors cursor-pointer">
                      {persona.emoji}
                    </div>
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 bg-slate-800 text-xs text-slate-300 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {persona.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center mb-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
        <div className="text-xs text-slate-500">Scroll to explore</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;