import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegistration } from '../contexts/RegistrationContext';

const Hero: React.FC = () => {
  const { openModal } = useRegistration();
  const [currentColor, setCurrentColor] = useState<string>('neon-cse');
  const [currentDateColor, setCurrentDateColor] = useState<string>('neon-cse');
  const [roboGlowColor, setRoboGlowColor] = useState<string>('#4A90E2');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Theme colors
  const themeColors = {
    'neon-cse': '#4A90E2', // Soft Blue
    'neon-ece': '#FF6B81', // Warm Coral
    'neon-me': '#FFC857',  // Gentle Gold
    'neon-ce': '#6FCF97',  // Calming Teal
    'neon-ee': '#D37676',  // Muted Red
  };
  
  useEffect(() => {
    const colors = ['neon-cse', 'neon-ece', 'neon-me', 'neon-ce', 'neon-ee'];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setCurrentColor(colors[index]);
      setCurrentDateColor(colors[index]); // Set the date color to match the current theme color
      // Update robo glow color
      setRoboGlowColor(themeColors[colors[index]]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateTransform = (index: number) => {
    const offset = index * 10;
    const x = (mousePosition.x - 0.5) * offset;
    const y = (mousePosition.y - 0.5) * offset;
    return `translate(${x}px, ${y}px)`;
  };
  
  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10"></div>
      
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 0.1 : 0 }}
            transition={{ delay: i * 0.1 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              boxShadow: `0 0 ${15 + i * 2}px ${8 + i}px currentColor`,
              transform: calculateTransform(i),
              color: i % 5 === 0 ? themeColors['neon-cse'] : 
                    i % 5 === 1 ? themeColors['neon-ece'] : 
                    i % 5 === 2 ? themeColors['neon-me'] : 
                    i % 5 === 3 ? themeColors['neon-ce'] : 
                    themeColors['neon-ee'],
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Content Section - Text content with equal padding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left lg:pr-8"
          >
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-lg mb-2"
            >
              2025 Tech Fest
            </motion.h4>

            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  <motion.span
                    className={`inline-block text-${currentColor}`}
                    animate={{ scale: [1, 1.02, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    tec
                  </motion.span>
                  <motion.span
                    className="inline-block text-neon-ece"
                    animate={{ scale: [1, 1.02, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  >
                    H
                  </motion.span>
                  <motion.span
                    className="inline-block text-neon-me"
                    animate={{ scale: [1, 1.02, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                  >
                    ETC
                  </motion.span>
                </h1>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-300"
            >
              Retro Genesis: Where 8-bit Meets Innovation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Join us for the ultimate tech fest showcasing the most innovative projects 
              across Computer Science, Electronics, Mechanical, and Civil Engineering disciplines.
            </motion.p>
            
            {/* Date information with proper alignment - centered on small screens, left on large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="font-pixel mb-8 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ color: themeColors[currentDateColor] }}
                className="text-2xl mb-2"
              >
                2025
              </motion.div>
              <motion.div
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ color: themeColors[currentDateColor] }}
                className="text-lg"
              >
                NOV 15-16
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button onClick={() => openModal()} className="btn btn-primary">
                Register Now
              </button>
              <Link to="/events" className="btn btn-secondary">
                Explore Events
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-8 text-sm text-gray-500"
            >
              <p>Press ` key to access the command console</p>
            </motion.div>
          </motion.div>
          
          {/* Robot GIF Animation - only visible on large screens with proper spacing and larger size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center lg:pl-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, -1, 0],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full"
              style={{ transform: calculateTransform(3) }}
            >
              <motion.img 
                src="/images/robo.gif" 
                alt="Animated Robot"
                className="w-full h-auto object-contain max-w-lg xl:max-w-xl mx-auto"
                animate={{
                  filter: [
                    `drop-shadow(0 0 10px ${roboGlowColor})`,
                    `drop-shadow(0 0 15px ${roboGlowColor})`, 
                    `drop-shadow(0 0 10px ${roboGlowColor})`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="border-2 border-white rounded-full p-2 animate-pulse"
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </motion.a>
      </motion.div>
    </section>
  );
};

// Helper function to convert hex to RGB (kept for potential future use)
function hexToRgb(hex: string): string {
  // Remove the hash if it exists
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

export default Hero;