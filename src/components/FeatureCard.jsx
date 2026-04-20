import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, details, gradient, delay = 0 }) => {
  return (
    <motion.div
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 ${gradient.includes('blue') ? 'text-blue-400' : 
                                   gradient.includes('purple') ? 'text-purple-400' :
                                   gradient.includes('green') ? 'text-green-400' :
                                   gradient.includes('orange') ? 'text-orange-400' :
                                   gradient.includes('cyan') ? 'text-cyan-400' :
                                   'text-primary-400'}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Details */}
      {details && (
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default FeatureCard;