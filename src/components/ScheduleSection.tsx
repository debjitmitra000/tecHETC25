import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  
  const scheduleData = {
    1: [
      { time: "09:00 - 10:00", event: "Opening Ceremony", location: "Main Auditorium", department: "all" },
      { time: "10:00 - 18:00", event: "Hackathon (Day 1)", location: "CSE Labs", department: "cse" },
      { time: "10:30 - 12:30", event: "Circuit Design Workshop", location: "ECE Lab 1", department: "ece" },
      { time: "13:00 - 15:00", event: "RoboWars Preliminary", location: "ME Workshop", department: "me" },
      { time: "15:30 - 17:30", event: "Bridge Building Setup", location: "CE Courtyard", department: "ce" },
      { time: "18:00 - 20:00", event: "Tech Talks", location: "Seminar Hall", department: "all" }
    ],
    2: [
      { time: "09:00 - 17:00", event: "Hackathon (Day 2)", location: "CSE Labs", department: "cse" },
      { time: "10:00 - 12:00", event: "IoT Challenge", location: "ECE Lab 2", department: "ece" },
      { time: "13:00 - 15:00", event: "CAD Contest", location: "ME Design Studio", department: "me" },
      { time: "15:30 - 17:00", event: "Structural Testing", location: "CE Courtyard", department: "ce" },
      { time: "17:30 - 18:30", event: "RoboWars Finals", location: "Main Arena", department: "me" },
      { time: "19:00 - 21:00", event: "Closing Ceremony & Awards", location: "Main Auditorium", department: "all" }
    ]
  };
  
  const getDepartmentColor = (dept: string) => {
    switch (dept) {
      case 'cse': return 'neon-cse';
      case 'ece': return 'neon-ece';
      case 'me': return 'neon-me';
      case 'ce': return 'neon-ce';
      default: return 'primary';
    }
  };
  
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Event Schedule</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex border-2 border-primary rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-3 font-mono ${activeDay === 1 ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:bg-opacity-20'}`}
            >
              DAY 1
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-3 font-mono ${activeDay === 2 ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:bg-opacity-20'}`}
            >
              DAY 2
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[38px] md:left-[62px] w-[2px] bg-primary"></div>
            
            {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex mb-8"
              >
                <div className="mr-4 md:mr-8 relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="hidden md:block absolute top-14 left-7 h-full w-[2px]"></div>
                </div>
                
                <div className={`flex-1 bg-surface p-4 rounded-lg border-2 border-${getDepartmentColor(item.department)} pixel-corners`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className={`font-pixel text-${getDepartmentColor(item.department)}`}>{item.event}</h3>
                    <span className="font-mono text-white">{item.time}</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between text-sm">
                    <span className="text-gray-400">{item.location}</span>
                    <span className={`text-${getDepartmentColor(item.department)} uppercase font-mono`}>
                      {item.department === 'all' ? 'All Departments' : item.department}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;