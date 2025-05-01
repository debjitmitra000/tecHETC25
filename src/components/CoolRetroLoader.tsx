import { useState, useEffect } from 'react';

export default function CoolRetroLoader({ onLoadComplete }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [pixelGrid, setPixelGrid] = useState([]);
  
  // Generate random pixel grid
  useEffect(() => {
    const grid = [];
    for (let i = 0; i < 64; i++) {
      grid.push({
        color: ['primary', 'secondary', 'accent', 'neon-cse', 'neon-me', 'neon-ece'][Math.floor(Math.random() * 6)],
        active: Math.random() > 0.7,
        delay: Math.random() * 2
      });
    }
    setPixelGrid(grid);
  }, []);

  // Handle loading simulation and effects
  useEffect(() => {
    if (isLoaded) return;
    
    // Phase transition timing
    const phaseTimer = setTimeout(() => {
      if (currentPhase < 3) {
        setCurrentPhase(prev => prev + 1);
      } else {
        setIsLoaded(true);
        onLoadComplete && onLoadComplete();
      }
    }, 1000);
    
    // Glitch effect timing
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 500);
    
    // Pixel grid animation
    const gridInterval = setInterval(() => {
      setPixelGrid(prev => prev.map(pixel => ({
        ...pixel,
        active: Math.random() > 0.5
      })));
    }, 300);
    
    return () => {
      clearTimeout(phaseTimer);
      clearInterval(glitchInterval);
      clearInterval(gridInterval);
    };
  }, [currentPhase, isLoaded, onLoadComplete]);

  if (isLoaded) return null;

  // Pixel art symbols for each phase
  const phaseSymbols = [
    "▮▯▮", // Initial
    "◨◧◨", // Mid 1
    "◢◣◤", // Mid 2
    "◉◎●"  // Final
  ];
  
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      {/* CRT scan effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-4 bg-primary" style={{ animation: 'scan-line 2s linear infinite' }}></div>
      </div>
      
      <div className="relative">
        {/* Main animated element */}
        <div 
          className={`w-32 h-32 relative ${glitch ? 'translate-x-1' : ''}`}
          style={{ transition: 'transform 50ms ease' }}
        >
          {/* Circular neon glow */}
          <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"
               style={{ 
                 background: `radial-gradient(circle, 
                               rgba(139,92,246,0.8) 0%, 
                               rgba(236,72,153,0.5) 50%, 
                               rgba(16,185,129,0) 100%)`,
                 animation: 'glow 2s ease-in-out infinite alternate'
               }}>
          </div>
          
          {/* Pixel grid background */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {pixelGrid.map((pixel, idx) => (
              <div 
                key={idx} 
                className={`${pixel.active ? `bg-${pixel.color} opacity-70` : 'bg-transparent'}`}
                style={{ 
                  transition: `opacity ${0.2 + pixel.delay}s ease-in-out`,
                }}
              ></div>
            ))}
          </div>
          
          {/* Rotating pixel frame */}
          <div 
            className="absolute inset-4 border-4 border-dashed border-accent opacity-70"
            style={{ 
              animation: 'spin 10s linear infinite',
              clipPath: 'polygon(0% 0%, 100% 0%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'
            }}
          ></div>
          
          {/* Center loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`font-pixel text-3xl ${glitch ? 'text-secondary transform scale-110' : 'text-primary'}`}
                 style={{ 
                   textShadow: '0 0 10px rgba(139, 92, 246, 0.7)',
                   transition: 'all 150ms ease'
                 }}>
              {phaseSymbols[currentPhase].split('').map((char, i) => (
                <span 
                  key={i} 
                  className={i === 1 ? 'text-accent' : ''}
                  style={{ animation: `pulse ${0.8 + i * 0.2}s infinite alternate` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pixel dots at bottom */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`w-2 h-2 ${i === currentPhase ? 'bg-accent' : 'bg-surface'} rounded-sm`}
              style={{ 
                transition: 'background-color 0.3s ease',
                animation: i === currentPhase ? 'pulse 0.6s infinite alternate' : ''
              }}
            ></div>
          ))}
        </div>
        
        {/* Loading text */}
        <div className="mt-2 text-center">
          <div 
            className="font-mono text-xs tracking-widest"
            style={{ 
              opacity: glitch ? 0.7 : 1,
              color: glitch ? '#EC4899' : '#8B5CF6',
              transform: glitch ? 'translateX(-2px)' : 'translateX(0)',
              transition: 'all 100ms ease'
            }}
          >
            {currentPhase === 0 ? 'RENDERING' : 
             currentPhase === 1 ? 'ASSEMBLING' : 
             currentPhase === 2 ? 'DIGITIZING' : 
             'INITIALIZING'}
          </div>
        </div>
      </div>
    </div>
  );
}