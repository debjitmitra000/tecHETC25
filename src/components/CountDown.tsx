import React, { useState, useEffect } from 'react';

const SimplifiedCountdown = ({ targetDate = "2025-05-15T00:00:00" }) => {
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
  const [scanPosition, setScanPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

    // Scanning animation only when hovering
    let scanTimer;
    if (isHovering) {
      scanTimer = setInterval(() => {
        setScanPosition(prev => (prev + 1) % 100);
      }, 70); // Slightly slower than original for subtlety
    }

    return () => {
      clearTimeout(timer);
      clearInterval(blinkTimer);
      if (scanTimer) clearInterval(scanTimer);
    };
  }, [timeLeft, isHovering]);

  // Display digit with label
  const renderDigit = (value, label) => {
    const digits = String(value).padStart(2, '0');
    
    return (
      <div className="flex flex-col items-center mx-1">
        <div className="bg-surface rounded border border-primary p-1 sm:p-2 relative overflow-hidden">
          {/* Grid background with reduced visibility */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
            {Array(36).fill(0).map((_, i) => (
              <div key={i} className="border-r border-b border-primary opacity-5"></div>
            ))}
          </div>
          
          <div className="font-pixel text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold relative z-10">
            <span className="text-white">{digits}</span>
          </div>
          <div className="text-xxs sm:text-xs text-primary font-bold mt-1 text-center relative z-10 font-pixel" style={{ fontSize: '0.4rem' }}>
            {label}
          </div>
        </div>
      </div>
    );
  };

  // Separator between digits
  const renderSeparator = () => (
    <div className="flex flex-col justify-center h-full mx-0.5 sm:mx-1">
      <div className={`text-sm sm:text-xl md:text-2xl lg:text-4xl font-pixel ${blink ? 'opacity-100' : 'opacity-30'} transition-all duration-200`}>
        <span className="text-white">:</span>
      </div>
    </div>
  );

  // Grid background with scan lines on hover
  const renderGrid = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal grid lines with reduced visibility */}
        <div className="absolute inset-0 grid grid-rows-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={`h-${i}`} className="border-b border-primary opacity-5"></div>
          ))}
        </div>
        
        {/* Vertical grid lines with reduced visibility */}
        <div className="absolute inset-0 grid grid-cols-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={`v-${i}`} className="border-r border-primary opacity-5"></div>
          ))}
        </div>
        
        {/* Scanning lines - only visible when hovering */}
        {isHovering && (
          <>
            {/* Horizontal scan line */}
            <div 
              className="absolute left-0 right-0 h-px bg-primary opacity-15 transition-all duration-100"
              style={{ top: `${scanPosition}%` }}
            ></div>
            
            {/* Vertical scan line */}
            <div 
              className="absolute top-0 bottom-0 w-px bg-primary opacity-15 transition-all duration-100"
              style={{ left: `${(scanPosition + 30) % 100}%` }}
            ></div>
          </>
        )}
      </div>
    );
  };

  // Loading state
  if (!isClient) {
    return (
      <div className="bg-surface border border-primary p-4 rounded text-center relative"
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}>
        {renderGrid()}
        <div className="text-primary text-lg animate-pulse relative z-10 font-pixel">
          LOADING...
        </div>
      </div>
    );
  }

  // Event has started
  if (Object.keys(timeLeft).length === 0) {
    return (
      <div className="bg-surface border-2 border-primary p-6 rounded relative"
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}>
        {renderGrid()}
        <div className="text-center relative z-10">
          <div className="text-2xl md:text-4xl text-white mb-4 font-pixel">
            TECHetc
          </div>
          <div className="mt-4 text-primary text-sm font-pixel">
            HAS STARTED
          </div>
        </div>
      </div>
    );
  }

  // Main countdown display
  return (
    <div className="bg-background p-4 rounded-md relative"
         onMouseEnter={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}>
      {renderGrid()}
      <div className="flex flex-col items-center p-2 sm:p-4 rounded-md border border-primary relative z-10">
        {/* Title */}
        <div className="mb-2 sm:mb-4 text-center">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 font-pixel">
            <span className="text-white">TECHetc</span>
          </div>
          <div className="inline-block border border-primary px-2 py-0.5 sm:px-3 sm:py-1 bg-surface">
            <span className="text-primary text-xxs sm:text-xs font-pixel" style={{ fontSize: '0.5rem' }}>
              Starts in
            </span>
          </div>
        </div>

        {/* Countdown timer - single row layout on all screens */}
        <div className="flex flex-row justify-center items-center">
          {/* Days */}
          {renderDigit(timeLeft.days, "DAYS")}
          
          {/* Separator between days and hours */}
          {renderSeparator()}
          
          {/* Hours, minutes, seconds */}
          {renderDigit(timeLeft.hours, "HRS")}
          {renderSeparator()}
          {renderDigit(timeLeft.minutes, "MIN")}
          {renderSeparator()}
          {renderDigit(timeLeft.seconds, "SEC")}
        </div>

        {/* Footer */}
        <div className="w-full mt-2 sm:mt-4 flex justify-center">
          <div className="text-xxs sm:text-xs text-primary text-center font-pixel" style={{ fontSize: '0.5rem' }}>
            Loading the Next Chapter
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedCountdown;