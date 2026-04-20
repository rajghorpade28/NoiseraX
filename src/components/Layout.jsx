import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
      
      {/* Animated background shapes */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;