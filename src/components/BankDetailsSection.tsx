import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';
import { bankDetails } from '../utils/constants';

interface CopyStateType {
  [key: string]: boolean;
}

const BankDetailsSection: React.FC = () => {
  const [copyState, setCopyState] = useState<CopyStateType>({});

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyState({ ...copyState, [field]: true });
      
      setTimeout(() => {
        setCopyState({ ...copyState, [field]: false });
      }, 2000);
    });
  };

  return (
    <GlassmorphicCard>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Bank Transfer Details</h2>
        
        <div className="space-y-4">
          {Object.entries(bankDetails).map(([key, detail]) => (
            <motion.div 
              key={key}
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-black/70 dark:text-yellow-100/70">
                    {detail.label}
                  </p>
                  <p className="font-semibold text-black dark:text-white break-all">
                    {detail.value}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(detail.value, key)}
                  className="p-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 transition-colors"
                  aria-label={`Copy ${detail.label}`}
                >
                  {copyState[key] ? (
                    <Check size={18} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
              <div className="h-px bg-black/10 dark:bg-white/10 mt-2"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-yellow-100/50 dark:bg-yellow-900/30 rounded-lg">
          <p className="text-sm text-black/90 dark:text-yellow-100/90">
            <span className="font-semibold">Important:</span> Please include your name and email in the payment reference for proper attribution.
          </p>
        </div>
      </motion.div>
    </GlassmorphicCard>
  );
};

export default BankDetailsSection;