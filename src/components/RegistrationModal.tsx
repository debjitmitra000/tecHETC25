import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Camera, Zap, AlertTriangle, CreditCard, ArrowRight, QrCode, Info } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

const RegistrationModal = () => {
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
    // Google Form URL
    const googleFormUrl = "https://forms.gle/52J8CSrtBtnhXFnC9";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-100"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 w-full max-w-2xl rounded-lg border-2 border-primary pixel-corners"
          >
            <div className="flex flex-col h-full max-h-[90vh] sm:max-h-[80vh]">
              {/* Header */}
              <div className="flex justify-between items-center p-3 sm:p-4 border-b border-primary bg-primary">
                <h2 className="font-pixel text-lg sm:text-xl text-white">Register For TECHetc 2K25</h2>
                <button
                  onClick={closeModal}
                  className="p-1 sm:p-2 hover:text-black transition-colors"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="p-3 sm:p-6 overflow-y-auto bg-gray-900 text-gray-200">
                <div className="flex flex-col">
                  {/* Important Notice Banners */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {/* Registration Fee Notice */}
                    <div className="w-full bg-gray-800 border-l-4 border-primary p-3 sm:p-4 rounded-r-md">
                      <div className="flex items-start">
                        <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-pixel text-sm sm:text-base text-primary">REGISTRATION FEE</h3>
                          <p className="font-mono text-xs sm:text-sm mt-1">Each candidate must register for TECHetc 2k25 by paying  ₹100.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Event Fee Notice */}
                    <div className="w-full bg-gray-800 border-l-4 border-primary p-3 sm:p-4 rounded-r-md">
                      <div className="flex items-start">
                        <Info className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-pixel text-sm sm:text-base text-primary">EVENT ENTRY FEES</h3>
                          <p className="font-mono text-xs sm:text-sm mt-1">Besides the registration fee, separate entry fees apply for some individual and group events. Check the Events section for details. Event fees will be collected on-site prior to participation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Timeline */}
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="hidden sm:block absolute left-0 top-6 h-full w-1 bg-primary opacity-30 ml-3"></div>
                    <h4 className="font-pixel text-primary text-base sm:text-lg mb-4 sm:mb-6">Registration Process</h4>
                    
                    <div className="space-y-4 sm:space-y-8 relative">
                      {/* Step 1: Account Details */}
                      <div className="sm:ml-10 relative">
                        <div className="hidden sm:flex absolute -left-10 top-0 items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full">
                          <span className="text-white font-bold text-xs sm:text-sm">1</span>
                        </div>
                        
                        <div className="bg-gray-800 border border-gray-700 p-3 sm:p-5 rounded-lg shadow-lg">
                          <div className="flex items-center mb-2 sm:mb-3">
                            <div className="sm:hidden bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 font-bold text-xs">1</div>
                            <h5 className="font-pixel text-white text-sm sm:text-base flex items-center">
                              <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                              Payment Details
                            </h5>
                          </div>
                          
                          <div className="ml-0 sm:ml-2 bg-gray-900 p-3 sm:p-4 rounded-md border-l-4 border-primary">
                            <p className="font-mono text-xs sm:text-sm mb-2 sm:mb-3">Transfer ₹100/- to the following account:</p>
                            <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
                              <div className="flex justify-between border-b border-gray-700 pb-1">
                                <span className="text-gray-400">A/C holder's Name:</span>
                                <span className="text-white">Hooghly Engineering & Technology College</span>
                              </div>
                              <div className="flex justify-between border-b border-gray-700 pb-1">
                                <span className="text-gray-400">A/C Number:</span>
                                <span className="text-white">50339432106</span>
                              </div>
                              <div className="flex justify-between border-b border-gray-700 pb-1">
                                <span className="text-gray-400">Bank Name:</span>
                                <span className="text-white">Indian Bank</span>
                              </div>
                              <div className="flex justify-between border-b border-gray-700 pb-1">
                                <span className="text-gray-400">IFSC Code:</span>
                                <span className="text-white">IDIB000C593</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Branch:</span>
                                <span className="text-white">Chinsurah Main</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 2: Take Screenshot */}
                      <div className="sm:ml-10 relative">
                        <div className="hidden sm:flex absolute -left-10 top-0 items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full">
                          <span className="text-white font-bold text-xs sm:text-sm">2</span>
                        </div>
                        
                        <div className="bg-gray-800 border border-gray-700 p-3 sm:p-5 rounded-lg shadow-lg">
                          <div className="flex items-center mb-2 sm:mb-3">
                            <div className="sm:hidden bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 font-bold text-xs">2</div>
                            <h5 className="font-pixel text-white text-sm sm:text-base flex items-center">
                              <Camera className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                              Save Payment Receipt
                            </h5>
                          </div>
                          
                          <div className="ml-0 sm:ml-2">
                            <div className="bg-gray-900 p-3 sm:p-4 rounded-md border border-gray-700">
                              <div className="flex items-start">
                                <p className="font-mono text-xs sm:text-sm">Take a screenshot or download the receipt of your payment transaction.</p>
                              </div>
                            </div>
                            
                            <div className="mt-2 sm:mt-3 bg-gray-900 p-3 sm:p-4 rounded-md border border-primary border-opacity-50">
                              <p className="font-mono text-xs sm:text-sm text-white">This payment receipt will be required when filling out the registration form.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 3: Fill Google Form */}
                      <div className="sm:ml-10 relative">
                        <div className="hidden sm:flex absolute -left-10 top-0 items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full">
                          <span className="text-white font-bold text-xs sm:text-sm">3</span>
                        </div>
                        
                        <div className="bg-gray-800 border border-gray-700 p-3 sm:p-5 rounded-lg shadow-lg">
                          <div className="flex items-center mb-2 sm:mb-3">
                            <div className="sm:hidden bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 font-bold text-xs">3</div>
                            <h5 className="font-pixel text-white text-sm sm:text-base flex items-center">
                              <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                              Complete Registration
                            </h5>
                          </div>
                          
                          <div className="ml-0 sm:ml-2">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                              {/* Form Details */}
                              
                              {/* QR Code */}
                              <div className="flex-1 bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-700 flex flex-col items-center justify-center">
                                <motion.div
                                  animate={{
                                    boxShadow: animateQR ? '0 0 20px rgba(124, 58, 237, 0.6)' : '0 0 5px rgba(124, 58, 237, 0.2)'
                                  }}
                                  transition={{ duration: 1.5, ease: "easeInOut" }}
                                  className="border-2 border-primary p-1 sm:p-2 bg-black rounded-md mb-2 sm:mb-3 relative overflow-hidden"
                                >
                                  <img src="/qr.webp" alt="Registration QR Code" className="w-24 h-24 sm:w-32 sm:h-32 object-cover" />
                                  <motion.div
                                    className="absolute w-full h-6 sm:h-8 bg-primary bg-opacity-20"
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
                                </motion.div>
                                <div className="flex items-center text-xs sm:text-sm font-mono mb-1 sm:mb-2">
                                  <QrCode className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2" />
                                  Scan QR code
                                </div>
                                
                                <motion.div
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: showNote ? 1 : 0, y: showNote ? 0 : 8 }}
                                  transition={{ delay: 0.3, duration: 0.5 }}
                                  className="text-center"
                                >
                                  <p className="text-xs mb-1 font-mono text-gray-400">Or</p>
                                  <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScptNQVmM__o-r4myA1wQ_PhS6AImDK37BpGhaywCtngBaezg/closedform" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="font-mono text-primary hover:text-purple-400 text-xs sm:text-sm flex items-center justify-center transition-colors"
                                  >
                                    <ExternalLink className="mr-1 h-2 w-2 sm:h-3 sm:w-3" />
                                    Click here to open form
                                  </a>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Offline Registration Notice */}
                  <div className="bg-gray-800 p-3 sm:p-4 rounded-md border border-gray-700 w-full">
                    <p className="font-mono text-xs sm:text-sm">
                      <span className="font-bold text-primary">Note:</span> You can also register offline at the college campus.
                    </p>
                  </div>
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