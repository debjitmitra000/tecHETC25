import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  
  const scheduleData = {
    1: [
      { time: "10:00 AM - 10:30 AM", event: "Opening Ceremony", location: "College Premises", department: "all" },
      { time: "10:30 AM", event: "Bridge The Gap", location: "Academic Building (A-201, A-202, A-203, A-204)", department: "ce" },
      { time: "10:30 AM", event: "Electrotech Exploration", location: "Academic Building (A-209)", department: "ece" },
      { time: "10:30 AM", event: "Model Display", location: "R C Paul Memorial Auditorium", department: "all" },
      { time: "11:00 AM", event: "Code - 2 - Duo", location: "Computer Lab 2 & 3", department: "cse" },
      { time: "11:30 AM", event: "Quizard", location: "Reading Room (Screening) & Seminar Hall (Final)", department: "bsh" },
      { time: "12:00 PM", event: "Instant Circuit Making", location: "Academic Building (Power System Lab)", department: "ee" },
      { time: "02:30 PM", event: "Robo Soccer", location: "Academic Building (A-209)", department: "ece" },
      { time: "02:30 PM", event: "Electromat", location: "Admin Building (Control Lab)", department: "ee" },
      { time: "03:30 PM", event: "Sudoku", location: "Reading Room", department: "bsh" }
    ],
    2: [
      { time: "10:00 AM", event: "Insta-Plan", location: "Academic Building (A-206, A-208)", department: "ce" },
      { time: "10:45 AM", event: "Bridge The Gap (Testing)", location: "Workshop", department: "all" },
      { time: "11:00 AM", event: "Line Follower Robot", location: "Academic Building (A-209)", department: "ece" },
      { time: "11:30 AM", event: "BGMI", location: "Computer Lab 2 & 3", department: "cse" },
      { time: "11:30 AM", event: "CADMANIA", location: "NE Building AutoCAD Lab", department: "me" },
      { time: "12:00 PM", event: "UI/UX Design", location: "Computer Lab 2 & 3", department: "cse" },
      { time: "12:30 PM", event: "Hunt For Fun", location: "R C Paul Memorial Auditorium & Academic building (A-105)", department: "bsh" },
      { time: "04:30 PM", event: "Prize Distribution Ceremony", location: "R C Paul Memorial Auditorium", department: "all" }
    ],
  };
  
  const getDepartmentColor = (dept: string) => {
    switch (dept) {
      case 'cse': return 'neon-cse';
      case 'ece': return 'neon-ece';
      case 'me': return 'neon-me';
      case 'ce': return 'neon-ce';
      case 'bsh': return 'neon-bsh'
      case 'ee': return 'neon-ee'
      default: return 'primary';
    }
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const tabsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gradient"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Event Schedule
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-8"
          variants={tabsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex border-2 border-primary rounded-lg overflow-hidden">
            <motion.button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-3 font-mono ${activeDay === 1 ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:bg-opacity-20'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DAY 1
            </motion.button>
            <motion.button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-3 font-mono ${activeDay === 2 ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:bg-opacity-20'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DAY 2
            </motion.button>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div 
              className="absolute top-0 bottom-0 left-[38px] md:left-[62px] w-[2px] bg-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: "top" }}
            ></motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                variants={timelineVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                  <motion.div
                    key={`${activeDay}-${index}`}
                    variants={itemVariants}
                    className="flex mb-8"
                  >
                    <motion.div 
                      className="mr-4 md:mr-8 relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          damping: 10, 
                          stiffness: 100, 
                          delay: 0.3 + index * 0.1 
                        }}
                      >
                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </motion.div>
                      <div className="hidden md:block absolute top-14 left-7 h-full w-[2px]"></div>
                    </motion.div>
                    
                    <motion.div 
                      className={`flex-1 bg-surface p-4 rounded-lg border-2 border-${getDepartmentColor(item.department)} pixel-corners`}
                      whileHover={{ scale: 1.02, boxShadow: `0 0 8px rgba(var(--color-${getDepartmentColor(item.department)}-rgb), 0.6)` }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className={`font-pixel text-${getDepartmentColor(item.department)}`}>{item.event}</h3>
                        <span className="text-lg font-mono text-white">{item.time}</span>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between text-xl">
                        <span className="text-gray-400">{item.location}</span>
                        {/* <span className={`text-${getDepartmentColor(item.department)} uppercase font-mono`}>
                          {item.department === 'all' ? 'All Departments' : item.department}
                        </span> */}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;