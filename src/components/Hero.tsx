import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegistration } from '../contexts/RegistrationContext';

const Hero: React.FC = () => {
  const { openModal } = useRegistration();
  const [currentColor, setCurrentColor] = useState<string>('neon-cse');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const colors = ['neon-cse', 'neon-ece', 'neon-me', 'neon-ce'];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setCurrentColor(colors[index]);
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
              color: i % 4 === 0 ? '#00FFFF' : i % 4 === 1 ? '#FF00FF' : i % 4 === 2 ? '#FFFF00' : '#00FF00',
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
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
                    Tec
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
            style={{ transform: calculateTransform(5) }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="font-pixel text-center">
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl mb-2"
                  >
                    2025
                  </motion.div>
                  <motion.div
                    animate={{ y: [2, -2, 2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-lg"
                  >
                    NOV 15-16
                  </motion.div>
                </div>
              </motion.div>
            </div>
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

export default Hero