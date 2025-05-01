import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Camera, Zap } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

const RegistrationModal: React.FC = () => {
  const { isModalOpen, closeModal } = useRegistration();
  const [animateQR, setAnimateQR] = useState(false);
  const [showNote, setShowNote] = useState(false);
  
  // Animate QR code with pulsing effect
  useEffect(() => {
    if (isModalOpen) {
      const timer1 = setTimeout(() => setShowNote(true), 800);
      const timer2 = setInterval(() => setAnimateQR(prev => !prev), 2500);
      return () => {
        clearTimeout(timer1);
        clearInterval(timer2);
      };
    }
  }, [isModalOpen]);
  
  // Open Google Form in a new tab
  const openGoogleForm = () => {
    // Replace with your actual Google Form URL
    const googleFormUrl = "https://forms.gle/yourFormLinkHere";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface w-full max-w-lg rounded-lg border-2 border-primary pixel-corners"
          >
            <div className="flex flex-col h-full max-h-[80vh]">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-primary bg-primary">
                <h2 className="font-pixel text-base text-white">Register For TECHetc 2K25</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:text-primary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Content - Scrollable */}
              <div className="p-4 overflow-y-auto">
                <div className="flex flex-col items-center">
                  
                  
                  <div className="bg-background border border-primary rounded-md p-3 mb-4 w-full">
                    <h4 className="font-pixel text-primary text-sm mb-2">Online Registration Steps:</h4>
                    <ol className="font-mono text-sm text-left list-decimal pl-5 space-y-1.5">
                      <li>Scan QR code to pay ₹100 registration fee</li>
                      <li>Take screenshot of payment confirmation</li>
                      <li>Fill Google Form and upload screenshot</li>
                    </ol>
                    <div className="mt-3 pt-2 border-t border-primary border-opacity-30">
                      <p className="font-mono text-xs text-neon-ece mb-1">Note: ₹100 is only the registration fee. Each event has its own additional fee.</p>
                      <p className="font-mono text-xs text-neon-ce italic">You can also register offline at the registration desk offline.</p>
                    </div>
                  </div>
                  
                  <motion.div 
                    animate={{ 
                      boxShadow: animateQR ? '0 0 25px rgba(124, 58, 237, 0.6)' : '0 0 5px rgba(124, 58, 237, 0.2)'
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="border-3 border-primary p-2 bg-white rounded-md mb-4"
                  >
                    {/* Placeholder QR Code */}
                    <div className="w-40 h-40 bg-black flex items-center justify-center relative overflow-hidden">
                      <div className="text-white font-mono text-xs z-10">QR Code Placeholder</div>
                      <motion.div 
                        className="absolute w-full h-8 bg-primary bg-opacity-20" 
                        animate={{ 
                          y: ["-100%", "400%"], 
                          opacity: [0.2, 0.5, 0.2] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2.5,
                          ease: "linear"
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: showNote ? 1 : 0, opacity: showNote ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="flex items-center justify-center space-x-1.5 mb-3 bg-primary bg-opacity-10 px-3 py-1.5 rounded-full"
                  >
                    <Camera className="h-4 w-4 text-primary" />
                    <p className="font-mono text-xs text-primary">
                      Remember to screenshot your payment!
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Footer - Fixed */}
              <div className="p-4 border-t border-primary mt-auto flex justify-center">
                <div className="flex justify-center w-96">
                  <motion.button
                    onClick={openGoogleForm}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-2.5 bg-primary bg-opacity-20 border-2 border-primary rounded-md hover:bg-opacity-30 transition-colors font-pixel text-primary flex items-center justify-center"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Registration Form
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;