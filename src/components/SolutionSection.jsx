import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Shuffle, TrendingDown, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  const approaches = [
    {
      type: "Traditional Tools",
      icon: Shield,
      method: "Block Trackers",
      description: "Hide Activity",
      approach: "Passive Defense",
      problems: [
        "Fingerprinting still works",
        "Behavioral patterns remain clear", 
        "Limited data still reveals patterns",
        "Breaks website functionality"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      type: "DCG Approach",
      icon: Brain,
      method: "Corrupt Data",
      description: "Mix Real + Fake",
      approach: "Active Defense",
      benefits: [
        "Behavioral fingerprinting fails",
        "Profiles become unreliable",
        "Maintains website functionality",
        "Adaptive noise generation"
      ],
      color: "from-primary-500 to-accent-500"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              The Solution:
            </span>
            <br />
            <span className="text-white">
              Instead of Blocking Tracking — DCG Corrupts It
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            DCG takes a revolutionary approach to privacy protection. Rather than trying to hide your activity, 
            we flood trackers with realistic but fake behavioral data, making their profiles worthless.
          </p>
        </motion.div>

        {/* Core Concept Visualization */}
        <motion.div
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">The DCG Formula</h3>
            <p className="text-lg text-slate-300">How we make behavioral profiling unreliable</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Real Behavior */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Real Behavior</h4>
              <p className="text-sm text-slate-400">Your actual browsing patterns</p>
            </motion.div>

            {/* Plus */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-400">+</div>
            </motion.div>

            {/* Fake Behavior */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shuffle className="w-10 h-10 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Fake Behavior</h4>
              <p className="text-sm text-slate-400">AI-generated realistic noise</p>
            </motion.div>

            {/* Equals */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-400">=</div>
            </motion.div>

            {/* Unreliable Data */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Unreliable Data</h4>
              <p className="text-sm text-slate-400">Corrupted behavioral profiles</p>
            </motion.div>
          </div>

          {/* Signal Visualization */}
          <motion.div
            className="mt-12 bg-slate-800/50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Clean Signal */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Without DCG: Clean Signal</h5>
                <div className="h-24 bg-slate-900/50 rounded-lg relative overflow-hidden border border-slate-700/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                  <div className="absolute bottom-2 left-4 text-xs text-slate-400">
                    Tracking Accuracy: 94%
                  </div>
                </div>
              </div>

              {/* Noisy Signal */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">With DCG: Corrupted Signal</h5>
                <div className="h-24 bg-slate-900/50 rounded-lg relative overflow-hidden border border-slate-700/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Multiple overlapping signals */}
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-full h-0.5 ${
                          i === 0 ? 'bg-blue-400' : 'bg-purple-400/60'
                        }`}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 1.2 + i * 0.1,
                          ease: "easeOut"
                        }}
                        style={{ 
                          transformOrigin: 'left',
                          transform: `translateY(${(i - 3) * 4}px)`
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-2 left-4 text-xs text-green-400">
                    Tracking Accuracy: 23%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Approach Comparison */}
        <div className="grid lg:grid-cols-2 gap-12">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.type}
              className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 ${
                approach.type === 'DCG Approach' ? 'ring-2 ring-primary-500/20' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${approach.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <approach.icon className={`w-8 h-8 ${approach.type === 'DCG Approach' ? 'text-primary-400' : 'text-gray-400'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{approach.type}</h3>
                <div className="space-y-2">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${approach.color}/20 rounded-full`}>
                    <span className={`font-semibold ${approach.type === 'DCG Approach' ? 'text-primary-400' : 'text-gray-400'}`}>
                      {approach.method}
                    </span>
                  </div>
                  <div className="text-slate-300">{approach.description}</div>
                  <div className={`text-sm font-medium ${approach.type === 'DCG Approach' ? 'text-green-400' : 'text-orange-400'}`}>
                    {approach.approach}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {(approach.problems || approach.benefits)?.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {approach.benefits ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-red-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                      </div>
                    )}
                    <span className={`${approach.benefits ? 'text-slate-300' : 'text-slate-400'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary-900/20 to-accent-900/20 border border-primary-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Zap className="w-12 h-12 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            The Key Insight: Noise is More Powerful Than Silence
          </h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            While traditional tools try to hide your activity (creating suspicious gaps), DCG floods trackers with 
            realistic behavioral data that looks completely legitimate. This makes it impossible for algorithms to 
            distinguish between your real interests and the noise, <span className="text-primary-400 font-medium">
            effectively breaking behavioral profiling at scale.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;