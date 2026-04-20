import { motion } from 'framer-motion';
import { Eye, Clock, MousePointer, Navigation, Target, TrendingUp, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const trackingMethods = [
    {
      icon: Clock,
      title: "Time on Page",
      description: "How long you spend reading, scrolling, or engaging with content reveals your interests and attention patterns.",
      example: "Spending 5+ minutes on tech articles signals you're likely a developer or tech enthusiast."
    },
    {
      icon: MousePointer,
      title: "Scroll Behavior", 
      description: "Your scrolling speed, pauses, and backtracking patterns create a unique behavioral fingerprint.",
      example: "Fast scrolling suggests skimming, while slow scrolling with pauses indicates deep reading."
    },
    {
      icon: Target,
      title: "Click Patterns",
      description: "What you click, when you click, and how you navigate through pages builds a detailed interaction map.",
      example: "Clicking on luxury product ads repeatedly suggests high disposable income."
    },
    {
      icon: Navigation,
      title: "Navigation Paths",
      description: "The sequence of pages you visit and how you move between them reveals your decision-making process.",
      example: "Visiting price comparison sites before purchases indicates you're a careful, budget-conscious shopper."
    }
  ];

  const profileTypes = [
    {
      title: "Interest Profiling",
      description: "Your browsing creates detailed maps of your hobbies, preferences, and curiosities",
      tags: ["Sports Fan", "Tech Enthusiast", "Fashion Lover", "Foodie", "Traveler"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Income Estimation", 
      description: "Sites you visit and products you view help estimate your purchasing power",
      tags: ["Budget Conscious", "Mid-Range", "Premium", "Luxury", "Enterprise"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Intent Prediction",
      description: "Your behavior patterns predict what you're likely to buy or do next",
      tags: ["Ready to Buy", "Just Browsing", "Researching", "Comparing", "Decided"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
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
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Problem:
            </span>
            <br />
            <span className="text-white">
              You're Being Profiled Every Second
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every website you visit is quietly collecting behavioral data to build an incredibly detailed profile of who you are, 
            what you want, and how much you're worth. Here's exactly how they do it:
          </p>
        </motion.div>

        {/* Tracking Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {trackingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{method.description}</p>
                  <div className="bg-slate-800/50 border border-slate-700/30 rounded-lg p-3">
                    <p className="text-sm text-slate-400">
                      <span className="text-orange-400 font-medium">Example:</span> {method.example}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Building Visualization */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            This Data Builds Detailed Behavioral Profiles
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
            Companies combine all this behavioral data to create comprehensive profiles that categorize you 
            across multiple dimensions, making you incredibly predictable and targetable.
          </p>
        </motion.div>

        {/* Profile Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {profileTypes.map((profile, index) => (
            <motion.div
              key={profile.title}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-full h-2 bg-gradient-to-r ${profile.color} rounded-full mb-6`} />
              <h4 className="text-xl font-semibold text-white mb-4">{profile.title}</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">{profile.description}</p>
              <div className="flex flex-wrap gap-2">
                {profile.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800/50 border border-slate-700/30 rounded-full text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Reality Check */}
        <motion.div
          className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Blocking Trackers Is No Longer Enough
          </h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Traditional privacy tools focus on blocking trackers, but modern surveillance has evolved beyond simple cookies. 
            Behavioral fingerprinting, canvas tracking, and advanced analytics can profile you even with ad blockers enabled. 
            <span className="text-red-400 font-medium"> The data that gets through is still enough to build detailed profiles.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;