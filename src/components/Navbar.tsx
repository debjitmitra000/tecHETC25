import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Zap, Cog, Building2, Bolt } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
  ];

  const departmentItems = [
    { path: '/department/cse', label: 'CSE', icon: <Cpu className="w-4 h-4 inline mr-1 text-neon-cse" /> },
    { path: '/department/ece', label: 'ECE', icon: <Zap className="w-4 h-4 inline mr-1 text-neon-ece" /> },
    { path: '/department/me', label: 'ME', icon: <Cog className="w-4 h-4 inline mr-1 text-neon-me" /> },
    { path: '/department/ce', label: 'CE', icon: <Building2 className="w-4 h-4 inline mr-1 text-neon-ce" /> },
    { path: '/department/ee', label: 'EE', icon: <Bolt className="w-4 h-4 inline mr-1 text-neon-ee" /> }
  ];

  return (
    
    <header className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${ scrolled ? 'bg-background backdrop-blur-md shadow-lg after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-[rgb(61,74,112)]/30 after:to-transparent after:animate-lightSweep' : 'gradient-bg-transactions' }`}>
 
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* <Link to="/" className="font-pixel text-xl tracking-wider" style={{ zIndex: 60 }}>
            <span className="text-primary">TEC</span>
            <span className="text-secondary">H</span>
            <span className="text-accent">etc</span>
          </Link> */}

          <Link to="/" className="font-pixel text-xl tracking-wider" style={{ zIndex: 60 }}>
            <span className="text-gradient">TECHETC</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1" style={{ zIndex: 60 }}>
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `px-3 py-2 text-base uppercase tracking-wider transition-colors duration-300 ${
                    isActive 
                      ? 'text-primary font-semibold' 
                      : 'text-white hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="relative group px-3 py-2">
              <button className="text-base uppercase tracking-wider transition-colors duration-300 flex items-center">
                Departments
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-surface border border-primary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pixel-corners">
                <div className="py-1">
                  {departmentItems.map((dept) => (
                    <NavLink
                      key={dept.path}
                      to={dept.path}
                      className={({ isActive }) => 
                        `block px-4 py-2 text-sm ${
                          isActive 
                            ? 'bg-primary bg-opacity-20' 
                            : 'hover:bg-primary hover:bg-opacity-10'
                        }`
                      }
                    >
                      {dept.icon} {dept.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden" style={{ zIndex: 60 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-surface border-t border-primary"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <NavLink style={{ zIndex: 60 }}
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `px-3 py-3 text-sm uppercase tracking-wider ${
                      isActive 
                        ? 'text-primary font-semibold' 
                        : 'text-white'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              
              <div className="mt-2 pt-2 border-t border-gray-700" style={{ zIndex: 60 }}>
                <p className="px-3 py-1 text-sm text-gray-400">Departments</p>
                {departmentItems.map((dept) => (
                  <NavLink
                    key={dept.path}
                    to={dept.path}
                    className={({ isActive }) => 
                      `px-3 py-2 text-sm flex items-center ${
                        isActive 
                          ? 'text-primary font-semibold' 
                          : 'text-white'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {dept.icon} {dept.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar