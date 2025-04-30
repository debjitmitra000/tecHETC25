import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Users, MapPin, Cpu, Zap, Code, Terminal } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title text-white bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] animate-glowE">
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
          
          <div className="bg-surface p-8 rounded-lg border-2 border-neon-ce pixel-corners">
            <h2 className="font-pixel text-2xl mb-4 text-neon-ce text-center">Get Involved</h2>
            <p className="text-center mb-6">
              There are many ways to be a part of TecHETC beyond participating in competitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="font-mono text-lg mb-2">Volunteer</h3>
                <p className="text-sm text-gray-400">Join our organizing team and help make the event a success</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-mono text-lg mb-2">Sponsor</h3>
                <p className="text-sm text-gray-400">Support innovation and connect with talented students</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-mono text-lg mb-2">Mentor</h3>
                <p className="text-sm text-gray-400">Guide participants with your expertise and experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;