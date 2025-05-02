import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate = "2025-05-15T00:00:00" }) => {
  // Calculate time left until target date
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [blink, setBlink] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Update countdown every second
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Blink effect for separators
    const blinkTimer = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(blinkTimer);
    };
  }, [timeLeft]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const digitVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: index => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: 0.3 + (index * 0.1),
        ease: "easeOut"
      }
    })
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Display digit with label
  const renderDigit = (value, label, index) => {
    const digits = String(value).padStart(2, '0');
    
    return (
      <motion.div 
        className="flex flex-col items-center mx-1"
        variants={digitVariants}
        custom={index}
      >
        <div className="bg-surface rounded border border-primary p-1 sm:p-2">
          <div className="font-pixel text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-white">{digits}</span>
          </div>
          <div className="text-xxs sm:text-xs text-primary font-bold mt-1 text-center font-pixel" style={{ fontSize: '0.4rem' }}>
            {label}
          </div>
        </div>
      </motion.div>
    );
  };

  // Separator between digits
  const renderSeparator = () => (
    <div className="flex flex-col justify-center h-full mx-0.5 sm:mx-1">
      <div className={`text-sm sm:text-xl md:text-2xl lg:text-3xl font-pixel ${blink ? 'opacity-100' : 'opacity-30'} transition-all duration-200`}>
        <span className="text-white">:</span>
      </div>
    </div>
  );

  // Loading state
  if (!isClient) {
    return (
      <div className="bg-surface border border-primary p-4 rounded text-center">
        <div className="text-primary text-lg animate-pulse font-pixel">
          LOADING...
        </div>
      </div>
    );
  }

  // Event has started
  if (Object.keys(timeLeft).length === 0) {
    return (
      <motion.div 
        className="bg-surface border border-primary p-4 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <div className="text-xl md:text-2xl text-white mb-2 font-pixel">
            TECHetc 2k25
          </div>
          <div className="text-primary text-sm font-pixel">
            HAS STARTED
          </div>
        </div>
      </motion.div>
    );
  }

  // Main countdown display
  return (
    <motion.div 
      className="bg-background p-4 rounded-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center p-2 sm:p-3 rounded-md border border-primary">
        {/* Title */}
        <motion.div 
          className="mb-2 sm:mb-3 text-center"
          variants={titleVariants}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 font-pixel">
            <span className="text-white">TECHetc 2k25</span>
          </div>
          <div className="inline-block border border-primary px-2 py-0.5 bg-surface">
            <span className="text-primary text-xxs sm:text-xs font-pixel" style={{ fontSize: '0.5rem' }}>
              Starts in
            </span>
          </div>
        </motion.div>

        {/* Countdown timer - single row layout on all screens */}
        <motion.div 
          className="flex flex-row justify-center items-center"
          initial="hidden"
          animate="visible"
        >
          {renderDigit(timeLeft.days, "DAYS", 0)}
          {renderSeparator()}
          {renderDigit(timeLeft.hours, "HRS", 1)}
          {renderSeparator()}
          {renderDigit(timeLeft.minutes, "MIN", 2)}
          {renderSeparator()}
          {renderDigit(timeLeft.seconds, "SEC", 3)}
        </motion.div>

        
      </div>
    </motion.div>
  );
};

export default Countdown;