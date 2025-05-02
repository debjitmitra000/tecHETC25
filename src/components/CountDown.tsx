import React, { useState, useEffect, useRef } from 'react';

const SimplifiedNeonCountdown = ({ targetDate = "2025-05-15T00:00:00" }) => {
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
  const gridRef = useRef(null);

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

    // Scanning animation for grid
    const scanTimer = setInterval(() => {
      setScanPosition(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(blinkTimer);
      clearInterval(scanTimer);
    };
  }, [timeLeft]);

  // Display digit with label
  const renderDigit = (value, label) => {
    const digits = String(value).padStart(2, '0');
    
    return (
      <div className="flex flex-col items-center mx-1">
        <div className="bg-black rounded border-2 border-blue-500 p-2 relative overflow-hidden">
          {/* Grid background for each digit box */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
            {Array(36).fill(0).map((_, i) => (
              <div key={i} className="border-r border-b border-blue-900 opacity-30"></div>
            ))}
          </div>
          
          <div className="font-mono text-2xl md:text-4xl font-bold relative z-10"
               style={{
                 fontFamily: "'Press Start 2P', monospace",
                 textShadow: ' 0 0 10px #0ff',
               }}>
            <span className="text-white">{digits}</span>
          </div>
          <div className="text-xs text-blue-500 font-bold mt-1 text-center relative z-10"
               style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem' }}>
            {label}
          </div>
        </div>
      </div>
    );
  };

  // Separator between digits
  const renderSeparator = () => (
    <div className="flex flex-col justify-center h-full mx-1">
      <div className={`text-2xl md:text-4xl ${blink ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}
           style={{ 
             fontFamily: "'Press Start 2P', monospace",
             color: 'white',
             textShadow: '0 0 5px #0ff, 0 0 10px #0ff'
           }}>
        :
      </div>
    </div>
  );

  // Grid background generator
  const renderGrid = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={gridRef}>
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 grid grid-rows-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={`h-${i}`} className="border-b border-blue-900 opacity-20"></div>
          ))}
        </div>
        
        {/* Vertical grid lines */}
        <div className="absolute inset-0 grid grid-cols-12">
          {Array(12).fill(0).map((_, i) => (
            <div key={`v-${i}`} className="border-r border-blue-900 opacity-20"></div>
          ))}
        </div>
        
        {/* Scanning line - horizontal */}
        <div 
          className="absolute left-0 right-0 h-px bg-blue-400 opacity-10"
          style={{ 
            top: `${scanPosition}%`,
            boxShadow: '0 0 8px 2px #0ff',
            transition: 'top 0.1s linear'
          }}
        ></div>
        
        {/* Scanning line - vertical */}
        <div 
          className="absolute top-0 bottom-0 w-px bg-blue-400 opacity-10"
          style={{ 
            left: `${(scanPosition + 30) % 100}%`,
            boxShadow: '0 0 8px 2px #0ff',
            transition: 'left 0.1s linear'
          }}
        ></div>
      </div>
    );
  };

  // Loading state
  if (!isClient) {
    return (
      <div className="bg-black border-2 border-blue-500 p-4 rounded text-center relative">
        {renderGrid()}
        <div className="text-blue-400 text-lg animate-pulse relative z-10"
             style={{ fontFamily: "'Press Start 2P', monospace" }}>
          LOADING...
        </div>
      </div>
    );
  }

  // Event has started
  if (Object.keys(timeLeft).length === 0) {
    return (
      <div className="bg-black border-4 border-blue-500 p-6 rounded relative">
        {renderGrid()}
        <div className="text-center relative z-10">
          <div className="text-2xl md:text-4xl text-white mb-4"
               style={{
                 fontFamily: "'Press Start 2P', monospace",
                 textShadow: '0 0 10px #0ff, 0 0 20px #0ff',
               }}>
            TECHetc
          </div>
          <div className="mt-4 text-blue-300 text-sm"
               style={{ fontFamily: "'Press Start 2P', monospace" }}>
            HAS STARTED
          </div>
        </div>
      </div>
    );
  }

  // Main countdown display
  return (
    <div className="bg-black p-4 rounded-md relative">
      {renderGrid()}
      <div className="flex flex-col items-center p-4 rounded-md border-2 border-blue-600 relative z-10">
        {/* Title */}
        <div className="mb-4 text-center">
          <div className="text-2xl md:text-3xl font-bold mb-2"
               style={{
                 fontFamily: "'Press Start 2P', monospace",
                 color: 'white',
                 textShadow: ' 0 0 15px #0ff',
               }}>
            TECHetc
          </div>
          <div className="inline-block border border-blue-500 px-3 py-1 bg-black">
            <span className="text-blue-400 text-xs"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Starts in
            </span>
          </div>
        </div>

        {/* Countdown timer - responsive layout */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Days on top for mobile, inline for desktop */}
          <div className="mb-4 md:mb-0">
            {renderDigit(timeLeft.days, "DAYS")}
          </div>
          
          {/* Hours, minutes, seconds in a row */}
          <div className="flex justify-center items-center">
            {renderDigit(timeLeft.hours, "HRS")}
            {renderSeparator()}
            {renderDigit(timeLeft.minutes, "MIN")}
            {renderSeparator()}
            {renderDigit(timeLeft.seconds, "SEC")}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-4 flex justify-center">
          <div className="text-xs text-blue-400 text-center"
               style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Loading the Next Chapter
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </div>
  );
};

export default SimplifiedNeonCountdown;