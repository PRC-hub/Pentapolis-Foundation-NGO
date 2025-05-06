import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-xl p-6 
                 bg-white/30 dark:bg-black/30 border border-white/30 dark:border-yellow-100/20
                 hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-yellow-100/5 dark:to-transparent pointer-events-none"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassmorphicCard;