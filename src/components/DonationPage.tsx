import React from 'react';
import { motion } from 'framer-motion';
import QRCodeSection from './QRCodeSection';
import BankDetailsSection from './BankDetailsSection';
import BackgroundAnimation from './BackgroundAnimation';

const DonationPage: React.FC = () => {


  return (
    <div className="min-h-screen mt-20 w-full overflow-hidden relative flex flex-col items-center justify-center p-4 sm:p-6 transition-colors duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-black">
      <BackgroundAnimation />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 right-4 z-10"
      >
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8 z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
          Support Our Cause
        </h1>
        <p className="text-lg text-black/80 dark:text-yellow-100/80 max-w-md mx-auto">
          Your contribution helps us continue our mission and make a difference.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl z-10">
        <QRCodeSection />
        <BankDetailsSection />
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 text-center text-sm text-black/70 dark:text-yellow-100/70 z-10"
      >
      </motion.footer>
    </div>
  );
};

export default DonationPage;