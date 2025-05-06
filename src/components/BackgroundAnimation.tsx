import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 40,
    duration: Math.random() * 20 + 15
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-yellow-400/5 to-yellow-500/10 dark:from-yellow-300/10 dark:to-yellow-400/15"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            scale: [1, Math.random() * 0.3 + 0.9, 1]
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;