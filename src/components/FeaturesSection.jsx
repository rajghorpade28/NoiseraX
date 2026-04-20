import { motion } from 'framer-motion';
import { Activity, Users, Shield, Brain, Zap, Settings } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Behavioral Noise Engine",
      description: "Generates realistic background browsing activity during idle time, creating authentic human-like behavior patterns that confuse tracking algorithms without interfering with your actual browsing experience.",
      details: [
        "Activates only during idle periods to avoid interference",
        "Opens real websites with authentic interaction patterns",
        "Simulates human actions like scrolling, clicking, and reading",
        "Completely invisible - no popups, notifications, or UI disruption",
        "Adaptive timing based on your natural browsing rhythms"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Persona System",
      description: "Creates multiple distinct digital personalities with unique interests and browsing patterns. Each persona maintains consistent behavior over time, making the generated noise indistinguishable from real user activity.",
      details: [
        "Multiple interest profiles (gaming, cooking, fitness, tech, etc.)",
        "Stateful behavior - personas remember their preferences",
        "Realistic patterns including boredom, repetition, and curiosity",
        "Dynamic persona switching to maintain unpredictability",
        "Learns from your browsing to create believable alternatives"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Phishing Detection",
      description: "Real-time URL analysis combining external threat intelligence with local machine learning to detect and warn about phishing attempts, malicious sites, and suspicious domains before you interact with them.",
      details: [
        "Google Safe Browsing API integration for known threats",
        "Local ML model for zero-day phishing detection",
        "Real-time domain reputation analysis",
        "User-controlled blocking with allow/deny options",
        "Continuous learning from new threat patterns"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Fully Local & Private",
      description: "Everything runs entirely on your device with no servers, accounts, or data transmission. Your privacy is protected by design - we can't see your data because it never leaves your computer.",
      details: [
        "No servers - all processing happens locally",
        "No user accounts or registration required",
        "Zero telemetry or usage tracking",
        "Open-source algorithms you can inspect",
        "Complete data sovereignty and control"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Adaptive Behavior",
      description: "Intelligently adjusts noise generation based on your actual browsing patterns and habits. The system learns when you're active, what sites you visit, and adapts the fake behavior to be maximally effective.",
      details: [
        "Learns your browsing schedule and preferences",
        "Adjusts noise intensity based on your activity level",
        "Reduces predictability through pattern variation",
        "Contextual persona selection for different times/activities",
        "Continuous optimization for maximum tracker confusion"
      ],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "Safe Execution",
      description: "Designed with safety as the top priority. DCG never clicks ads, submits forms, or performs actions that could affect your accounts, purchases, or personal information. Only safe, read-only browsing simulation.",
      details: [
        "Never clicks on advertisements or sponsored content",
        "No form submissions or account interactions",
        "Only visits publicly accessible pages",
        "Respects robots.txt and website policies",
        "Built-in safeguards against harmful actions"
      ],
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/20" id="features">
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
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-white">
              Built for Maximum Privacy Protection
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            DCG combines cutting-edge behavioral simulation with real-time threat detection, 
            all while maintaining complete privacy and user control. Here's what makes it revolutionary:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              details={feature.details}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-900/20 to-accent-900/20 border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Take Control of Your Digital Privacy?
            </h3>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already started confusing trackers and protecting their behavioral data.
            </p>
            <motion.button
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Add DCG to Chrome - It's Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;