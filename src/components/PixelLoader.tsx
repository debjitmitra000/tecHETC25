import { useState, useEffect } from 'react';

type Pixel = {
  color: 'primary' | 'secondary' | 'accent' | 'neon-cse' | 'neon-me' | 'neon-ece';
  active: boolean;
  delay: number;
};

type EnhancedRetroLoaderProps = {
  onLoadComplete?: () => void;
};

export default function EnhancedRetroLoader({ onLoadComplete }: EnhancedRetroLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [pixelGrid, setPixelGrid] = useState<Pixel[]>([]);
  const [loadingText, setLoadingText] = useState("INITIALIZING");

  // Generate random pixel grid
  useEffect(() => {
    const grid: Pixel[] = [];
    const colors: Pixel['color'][] = ['primary', 'secondary', 'accent', 'neon-cse', 'neon-me', 'neon-ece'];

    for (let i = 0; i < 64; i++) {
      grid.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        active: Math.random() > 0.7,
        delay: Math.random() * 2,
      });
    }

    setPixelGrid(grid);
  }, []);

  // Handle loading simulation and effects
  useEffect(() => {
    if (isLoaded) return;

    const phaseTimer = setTimeout(() => {
      if (currentPhase < 3) {
        setCurrentPhase((prev) => prev + 1);
        const texts = ["INITIALIZING", "LOADING ASSETS", "CONFIGURING", "FINALIZING"];
        setLoadingText(texts[currentPhase + 1]);
      } else {
        setIsLoaded(true);
        onLoadComplete?.();
      }
    }, 1500);

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 500);

    const gridInterval = setInterval(() => {
      setPixelGrid((prev) =>
        prev.map((pixel) => ({
          ...pixel,
          active: Math.random() > 0.5,
        }))
      );
    }, 300);

    return () => {
      clearTimeout(phaseTimer);
      clearInterval(glitchInterval);
      clearInterval(gridInterval);
    };
  }, [currentPhase, isLoaded, onLoadComplete]);

  if (isLoaded) return null;

  const progress = ((currentPhase + 1) / 4) * 100;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* CRT scan effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-1 bg-cyan-500 opacity-20" 
             style={{ animation: 'scan 2s linear infinite' }}></div>
      </div>
      
      {/* Static noise overlay */}
      <div className="absolute inset-0 opacity-5 bg-repeat"
           style={{ 
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
             animation: 'staticNoise 0.5s steps(1) infinite'
           }}>
      </div>
      
      <div className="relative max-w-md w-full px-6">
        {/* Main container with pixel border */}
        <div className={`border-4 border-cyan-500 p-6 bg-gray-900 ${glitch ? 'translate-x-1' : ''}`}
             style={{ 
               transition: 'transform 50ms ease',
               boxShadow: '0 0 15px rgba(6, 182, 212, 0.5), inset 0 0 15px rgba(6, 182, 212, 0.3)'
             }}>
          
          {/* Top header with terminal-style info */}
          <div className="flex justify-between text-xs text-cyan-400 font-mono mb-4 border-b border-cyan-800 pb-2">
            <div>SYSTEM v3.8.5</div>
            <div className="flex space-x-2">
              <div className="animate-pulse">REC</div>
              <div>{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}.{Math.floor(Math.random() * 100).toString().padStart(2, '0')}</div>
            </div>
          </div>
          
          {/* Main animated element */}
          <div className="flex justify-center">
            <div className="w-32 h-32 relative mb-6">
              {/* Circular neon glow */}
              <div className="absolute inset-0 rounded-full opacity-30 animate-pulse"
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
              
              {/* Rotating element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 relative" style={{ animation: 'spin 4s linear infinite' }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute w-4 h-4 bg-cyan-500"
                      style={{ 
                        opacity: 0.7, 
                        transform: `rotate(${i * 90}deg) translateY(-10px)`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Loading text with typewriter effect */}
          <div className="text-center font-mono text-cyan-400 mb-4 h-6 overflow-hidden">
            <div className="inline-block relative">
              {loadingText}
              <span className="animate-blink ml-1">_</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-6 border-2 border-cyan-700 relative mb-4 overflow-hidden">
            <div 
              className="h-full bg-cyan-600 relative"
              style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
            >
              {/* Animated scan line inside progress bar */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="h-1 w-full bg-white" style={{ animation: 'progressScan 1s linear infinite' }}></div>
              </div>
              
              {/* Pixel decorations on progress bar */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-1 w-1 bg-cyan-200 absolute top-1" 
                  style={{ left: `${i * 12.5}%` }}
                ></div>
              ))}
            </div>
            
            {/* Progress percentage */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs text-white font-mono">
              {Math.floor(progress)}%
            </div>
          </div>
          
          {/* Phase indicators */}
          <div className="flex justify-center space-x-2 mb-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className={`w-3 h-3 ${i <= currentPhase ? 'bg-cyan-500' : 'bg-gray-700'} mb-1`}
                  style={{ 
                    transition: 'background-color 0.3s ease',
                    animation: i === currentPhase ? 'pulse 0.6s infinite alternate' : ''
                  }}
                ></div>
                <div className="text-xs text-cyan-400 font-mono">{i + 1}</div>
              </div>
            ))}
          </div>
          
          {/* Status messages */}
          <div className="text-xs text-gray-400 font-mono mt-4 border-t border-cyan-900 pt-2">
            <div className={`flex ${glitch ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'opacity 0.1s ease' }}>
              <span className="text-cyan-400 mr-2">&gt;</span>
              <span>STATUS: {["CONNECTING", "PROCESSING", "VERIFYING", "COMPLETING"][currentPhase]}</span>
            </div>
            <div className="flex">
              <span className="text-cyan-400 mr-2">&gt;</span>
              <span>MEMORY: {Math.floor(58 + Math.random() * 40)}MB</span>
            </div>
          </div>
          
          {/* Decorative corner pixels */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
        </div>
      </div>
      
      {/* Global animations */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
        
        @keyframes pulse {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes staticNoise {
          0%, 100% { opacity: 0.03; }
          10% { opacity: 0.05; }
          30% { opacity: 0.02; }
          50% { opacity: 0.04; }
          70% { opacity: 0.02; }
          90% { opacity: 0.03; }
        }
        
        @keyframes progressScan {
          0% { transform: translateY(-6px); }
          100% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}