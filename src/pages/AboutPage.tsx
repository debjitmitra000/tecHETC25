import React, {useEffect, useState, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award,  Calendar, Users, MapPin, Cpu, Zap, Code, Terminal, Laptop, Monitor, Server, Database, Github, Bolt, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Create a ref for the top of the page
  const topRef = useRef(null);

  // Improved useEffect for scrolling to top
  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // As a fallback, also try scrolling with behavior: smooth 
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 100);
    
    // Force scroll position on first render
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hexagon-clip {
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [expandedMobile, setExpandedMobile] = useState<boolean>(true);
  
  const stats = [
    { value: '8', label: 'Events', icon: <Award className="h-8 w-8 text-neon-cse" /> },
    { value: '2', label: 'Days', icon: <Calendar className="h-8 w-8 text-neon-ece" /> },
    { value: '500+', label: 'Participants', icon: <Users className="h-8 w-8 text-neon-me" /> },
    { value: '20+', label: 'Colleges', icon: <MapPin className="h-8 w-8 text-neon-ce" /> }
  ];

  const timelineEvents = [
    { 
      year: '2015', 
      title: 'First Edition', 
      description: 'TecHETC was born with just 3 events and 100 participants.', 
      color: 'neon-cse',
      icon: <Terminal className="h-6 w-6" />,
      highlight: 'Version 1.0 Launch'
    },
    { 
      year: '2018', 
      title: 'Regional Recognition', 
      description: 'Expanded to include participants from neighboring colleges.', 
      color: 'neon-ece',
      icon: <Zap className="h-6 w-6" />,
      highlight: 'Power-Up Achieved'
    },
    { 
      year: '2020', 
      title: 'Virtual Shift', 
      description: 'Successfully transitioned to a fully online format during the pandemic.', 
      color: 'neon-me',
      icon: <Code className="h-6 w-6" />,
      highlight: 'Digital Transformation'
    },
    { 
      year: '2023', 
      title: 'Record Participation', 
      description: 'Celebrated with over 400 participants from 15+ colleges.', 
      color: 'neon-ce',
      icon: <Users className="h-6 w-6" />,
      highlight: 'High Score Unlocked'
    },
    { 
      year: '2025', 
      title: 'Coming Soon', 
      description: 'Stay tuned for our biggest edition yet!', 
      color: 'neon-general',
      icon: <Cpu className="h-6 w-6" />,
      highlight: 'Loading Next Level...'
    }
  ];

  const techTeam = [
    {
      name: "Soham De",
      contribution: "Theme Development & Tech ",
      image: "/team/soham.webp",
      icon: <Monitor className="h-6 w-6 text-neon-cse" />,
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen"
    },
    {
      name: "Debjit Mitra",
      contribution: "Developer & Designer",
      image: "/team/debjit.webp",
      icon: <Cpu className="h-6 w-6 text-neon-bsh" />,
      github: "https://github.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma"
    },
    {
      name: "Devjyoti Banerjee",
      contribution: "Content Writer & UI/UX",
      image: "/team/dev.webp",
      icon: <Database className="h-6 w-6 text-neon-me" />,
      github: "https://github.com/marcusjohnson",
      linkedin: "https://linkedin.com/in/marcusjohnson"
    },
    {
      name: "Sayan Genri",
      contribution: "Content Writer & Event Management",
      image: "/team/sayan.webp",
      icon: <Bolt className="h-6 w-6 text-neon-ee" />,
      github: "https://github.com/marcusjohnson",
      linkedin: "https://linkedin.com/in/marcusjohnson"
    },
    {
      name: "Sayar Paul",
      contribution: "Multimedia & Event Management",
      image: "/team/sayar.webp",
      icon: <Laptop className="h-6 w-6 text-neon-ce" />,
      github: "https://github.com/sophiarodriguez",
      linkedin: "https://linkedin.com/in/sophiarodriguez"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const nodeVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    active: { scale: 1.5 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      ref={topRef} // Add ref to the top of the page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title text-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] animate-glowE">
          About TECHetc
        </h1>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-center text-gray-300 mb-8">
            The ultimate celebration of technology and innovation across engineering disciplines.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-6 rounded-lg text-center border border-primary pixel-corners"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="font-pixel text-3xl mb-2">{stat.value}</div>
                <div className="text-gray-400 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none mb-16">
            <h2 className="font-pixel text-2xl mb-4 text-neon-cse">Our Story</h2>
            <p className="mb-4">
              TecHETC was first conceived in 2015 by a group of passionate engineering students who wanted to create a platform for showcasing technical talent beyond the classroom. What began as a small departmental event has grown into one of the region's most anticipated technical festivals.
            </p>
            <p className="mb-4">
              Each year, we choose a theme that reflects current technological trends while encouraging participants to think innovatively. This year's theme celebrates the foundations of computing while looking toward the cutting-edge future of technology.
            </p>
            <p>
              The festival is organized by students for students, with guidance from faculty advisors and industry professionals. This collaboration ensures that events are both academically enriching and aligned with industry practices.
            </p>
            
            <h2 className="font-pixel text-2xl mt-12 mb-4 text-neon-ece">Our Mission</h2>
            <ul className="space-y-2">
              <li>To foster technical creativity and innovation among engineering students</li>
              <li>To provide a platform for students to showcase their technical expertise</li>
              <li>To encourage cross-disciplinary collaboration between different engineering branches</li>
              <li>To bridge the gap between academic learning and practical implementation</li>
              <li>To connect students with industry professionals and potential employers</li>
            </ul>
          </div>
          
          {/* Enhanced Responsive Timeline */}
          <div className="mb-16">
            <h2 className="font-pixel text-2xl mb-8 text-neon-me text-center">Our Journey</h2>
            
            {/* Desktop Timeline (hidden on mobile) */}
            <div className="hidden md:block relative py-8">
              {/* Timeline base line */}
              <div className="absolute left-0 right-0 h-1 top-16 bg-gradient-to-r from-transparent via-neon-general to-transparent"></div>
              
              {/* Timeline nodes */}
              <div className="flex justify-between relative mb-16">
                {timelineEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer group w-1/5"
                    initial="initial"
                    whileHover="hover"
                    animate={activeEvent === index ? "active" : "initial"}
                    onClick={() => setActiveEvent(activeEvent === index ? 0 : index)}
                  >
                    {/* Year label */}
                    <div className={`font-mono text-${event.color} mb-3 text-center`}>{event.year}</div>
                    
                    {/* Interactive node */}
                    <motion.div
                      variants={nodeVariants}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-${event.color} bg-background z-10 relative overflow-hidden`}
                    >
                      <motion.div 
                        className={`absolute inset-0 bg-${event.color} opacity-0 group-hover:opacity-20`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.2 }}
                        animate={activeEvent === index ? { opacity: 0.3 } : { opacity: 0 }}
                      />
                      <div className={`text-${event.color}`}>{event.icon}</div>
                    </motion.div>
                    
                    {/* Pulse effect */}
                    {activeEvent === index && (
                      <motion.div
                        className={`absolute w-8 h-8 rounded-full border border-${event.color}`}
                        initial={{ opacity: 0.7, scale: 1 }}
                        animate={{ 
                          opacity: 0,
                          scale: 1.8,
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      />
                    )}
                    
                    {/* Highlight tag */}
                    <motion.div
                      className={`absolute -top-6 font-pixel text-xs text-${event.color} opacity-0 group-hover:opacity-100 whitespace-nowrap text-center`}
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      animate={activeEvent === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {event.highlight}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Content display area */}
              <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeEvent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", damping: 20 }}
                    className={`bg-surface p-6 rounded-lg border-2 border-${timelineEvents[activeEvent].color} pixel-corners relative overflow-hidden`}
                  >
                    {/* Background glow effect */}
                    <motion.div 
                      className={`absolute inset-0 bg-${timelineEvents[activeEvent].color} opacity-5`}
                      initial={{ opacity: 0.05 }}
                      animate={{ 
                        opacity: [0.03, 0.08, 0.03], 
                        transition: { duration: 3, repeat: Infinity } 
                      }}
                    />
                    
                    <div className="flex items-center mb-3">
                      <div className={`mr-3 p-2 rounded-full bg-${timelineEvents[activeEvent].color} bg-opacity-20`}>
                        {timelineEvents[activeEvent].icon}
                      </div>
                      <h3 className="font-mono text-2xl text-white">
                        {timelineEvents[activeEvent].title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-2">
                      {timelineEvents[activeEvent].description}
                    </p>
                    
                    <div className={`mt-3 text-${timelineEvents[activeEvent].color} font-pixel text-right`}>
                      {timelineEvents[activeEvent].year}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Mobile Timeline (shown only on mobile) */}
            <div className="md:hidden">
              <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    {/* Vertical timeline for mobile */}
                    <div className="relative pl-10 space-y-8 before:absolute before:left-5 before:top-2 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-neon-general before:to-transparent">
                      {timelineEvents.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`relative cursor-pointer`}
                          onClick={() => setActiveEvent(activeEvent === index ? 0 : index)}
                        >
                          {/* Timeline node */}
                          <div className="absolute -left-10 mt-1.5">
                            <motion.div
                              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-${event.color} bg-background z-10 relative overflow-hidden`}
                              whileHover={{ scale: 1.2 }}
                              animate={activeEvent === index ? { scale: 1.2 } : { scale: 1 }}
                            >
                              <div className={`text-${event.color}`}>{event.icon}</div>
                            </motion.div>
                            
                            {/* Pulse effect when active */}
                            {activeEvent === index && (
                              <motion.div
                                className={`absolute top-0 left-0 w-8 h-8 rounded-full border border-${event.color}`}
                                initial={{ opacity: 0.7, scale: 1 }}
                                animate={{ 
                                  opacity: 0,
                                  scale: 1.8,
                                  transition: { duration: 1.5, repeat: Infinity }
                                }}
                              />
                            )}
                          </div>
                          
                          {/* Content card */}
                          <div 
                            className={`pl-4 ${activeEvent === index ? `border-l-4 border-${event.color}` : ''}`}
                          >
                            <div className="flex items-center">
                              <h3 className={`font-mono text-lg text-${event.color} mr-2`}>{event.year}</h3>
                              <p className="font-pixel text-xs text-gray-400">{event.highlight}</p>
                            </div>
                            <h4 className="font-mono text-white">{event.title}</h4>
                            
                            {/* Expanded details shown when active */}
                            <AnimatePresence>
                              {activeEvent === index && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-2 text-gray-300 text-sm overflow-hidden"
                                >
                                  {event.description}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Tech Team Section - IMPROVED VERSION */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-pixel text-3xl text-neon-ce inline-block relative">
                Tech Team
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-neon-ce"
                  initial={{ width: 0, x: "50%" }}
                  animate={{ width: "100%", x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </h2>
              <p className="text-gray-400 mt-4 max-w-xl mx-auto">Meet the team behind this website</p>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4"
            >
              {techTeam.map((member, index) => {
                // Assign a specific neon color based on member index
                const neonColors = ['neon-cse', 'neon-bsh', 'neon-me', 'neon-ee', 'neon-ce'];
                const memberColor = neonColors[index % neonColors.length];
                
                return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-surface border-2 border-${memberColor} rounded-lg overflow-hidden pixel-corners transform transition-all duration-300 relative group`}
                >
                  {/* Animated cyber pattern background */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <pattern id={`cyber-grid-${index}`} patternUnits="userSpaceOnUse" width="10" height="10">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className={`text-${memberColor}`}/>
                      </pattern>
                      <rect width="100" height="100" fill={`url(#cyber-grid-${index})`} />
                    </svg>
                  </div>
                  
                  {/* Dynamic glow effect on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-${memberColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                    animate={{ 
                      opacity: [0, 0.05, 0, 0.05], 
                      transition: { duration: 4, repeat: Infinity } 
                    }}
                  />
                  
                  {/* Member image with hexagonal mask effect - KEEPING THIS UNCHANGED AS REQUESTED */}
                  <div className="relative w-full pt-[100%] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className={`w-full h-full relative overflow-hidden hexagon-clip shadow-lg`}>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="absolute inset-0 w-full h-full object-cover filter group-hover:grayscale-0 scale-125 group-hover:scale-100 transition-all duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Tech icon with animated pulse */}
                    <div className={`absolute bottom-4 right-4 p-2 bg-background rounded-full border-2 border-${memberColor} shadow-lg`}>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } 
                        }}
                        className={`text-${memberColor}`}
                      >
                        {member.icon}
                      </motion.div>
                    </div>
                    
                    {/* Digital scanner line effect */}
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                      className={`absolute inset-x-0 h-1 bg-${memberColor} opacity-30 mix-blend-overlay pointer-events-none`}
                    />
                  </div>
                  
                  {/* Member details with enhanced styling - IMPROVED LAYOUT */}
                  <div className="p-3 relative">
                    {/* Digital line decoration */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-${memberColor} opacity-20`} />
                    
                    {/* Name container with smaller text size to fit longer names */}
                    <div className="flex items-center justify-center">
                      <h3 className={`font-pixel text-sm text-${memberColor} tracking-wide w-full text-center leading-tight`}>
                        {member.name}
                      </h3>
                    </div>
                    
                    {/* Contribution text with smaller size */}
                    <div className="flex items-center justify-center h-8 mt-1"> 
                      <p className="font-mono text-xs text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {member.contribution}
                      </p>
                    </div>
                    
                    {/* Animated tech bar - indicates skill level */}
                    <div className="mt-1 w-full h-1 bg-gray-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-${memberColor}`}
                      />
                    </div>
                    
                    {/* Social media links - more compact */}
                    <div className="mt-1 flex justify-center space-x-3">
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`p-1 rounded-full bg-surface hover:bg-${memberColor} hover:bg-opacity-20 transition-colors duration-300`}
                      >
                        <Github className={`h-4 w-4 text-${memberColor}`} />
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`p-1 rounded-full bg-surface hover:bg-${memberColor} hover:bg-opacity-20 transition-colors duration-300`}
                      >
                        <Linkedin className={`h-4 w-4 text-${memberColor}`} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )})}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;