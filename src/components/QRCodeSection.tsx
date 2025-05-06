import React from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { Download } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const QRCodeSection: React.FC = () => {
  const qrValue = "https://donate.yourcompany.com/payment";
  
  const downloadQRCode = () => {
    const svg = document.getElementById('donation-qr-code');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = 'donation-qr-code.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    }
  };

  return (
    <GlassmorphicCard>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Scan to Donate</h2>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white p-4 rounded-xl shadow-sm mb-4"
        >
          <QRCode
            id="donation-qr-code"
            value={qrValue}
            size={180}
            className="max-w-full"
            level="H"
          />
        </motion.div>
        
        <p className="text-black/90 dark:text-yellow-100/90 mb-4">
          Scan this QR code with your banking app to make a quick and secure donation.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadQRCode}
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg transition-colors duration-300"
        >
          <Download size={18} />
          <span>Download QR Code</span>
        </motion.button>
      </motion.div>
    </GlassmorphicCard>
  );
};

export default QRCodeSection;