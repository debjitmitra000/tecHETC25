import React, { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const SchedulePage: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [activeDay, setActiveDay] = useState<number>(1);
  
  const scheduleData = {
    1: [
      { time: "09:00 - 10:00", event: "Opening Ceremony", location: "Main Auditorium", department: "all" },
      { time: "10:00 - 18:00", event: "Hackathon (Day 1)", location: "CSE Labs", department: "cse" },
      { time: "10:30 - 12:30", event: "Circuit Design Workshop", location: "ECE Lab 1", department: "ece" },
      { time: "12:30 - 13:30", event: "Lunch Break", location: "Central Cafeteria", department: "all" },
      { time: "13:00 - 15:00", event: "RoboWars Preliminary", location: "ME Workshop", department: "me" },
      { time: "15:30 - 17:30", event: "Bridge Building Setup", location: "CE Courtyard", department: "ce" },
      { time: "18:00 - 20:00", event: "Tech Talks", location: "Seminar Hall", department: "all" },
      { time: "20:00 - 22:00", event: "Networking Dinner", location: "College Lawn", department: "all" }
    ],
    2: [
      { time: "09:00 - 17:00", event: "Hackathon (Day 2)", location: "CSE Labs", department: "cse" },
      { time: "10:00 - 12:00", event: "IoT Challenge", location: "ECE Lab 2", department: "ece" },
      { time: "12:00 - 13:00", event: "Lunch Break", location: "Central Cafeteria", department: "all" },
      { time: "13:00 - 15:00", event: "CAD Contest", location: "ME Design Studio", department: "me" },
      { time: "15:30 - 17:00", event: "Structural Testing", location: "CE Courtyard", department: "ce" },
      { time: "17:30 - 18:30", event: "RoboWars Finals", location: "Main Arena", department: "me" },
      { time: "19:00 - 21:00", event: "Closing Ceremony & Awards", location: "Main Auditorium", department: "all" },
      { time: "21:00 - 23:00", event: "Afterparty", location: "College Lawn", department: "all" }
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title">Event Schedule</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="grid grid-cols-2 border-2 border-primary rounded-lg overflow-hidden pixel-corners">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-8 py-4 font-pixel ${activeDay === 1 ? 'bg-primary text-white' : 'bg-surface text-primary hover:bg-primary hover:bg-opacity-20'}`}
              >
                DAY 1 <span className="font-mono text-sm block mt-1">NOV 15</span>
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-8 py-4 font-pixel ${activeDay === 2 ? 'bg-primary text-white' : 'bg-surface text-primary hover:bg-primary hover:bg-opacity-20'}`}
              >
                DAY 2 <span className="font-mono text-sm block mt-1">NOV 16</span>
              </button>
            </div>
          </div>
          
          <div className="bg-surface rounded-lg p-6 border border-primary pixel-corners mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-2">
                <h2 className="font-pixel text-xl mb-4">Day {activeDay} Overview</h2>
                <p className="text-gray-300 mb-4">
                  {activeDay === 1 
                    ? "The first day kicks off with our grand opening ceremony followed by preliminary rounds of major competitions. Don't miss the evening tech talks featuring industry experts!" 
                    : "The second day features the culmination of multi-day events and finals for all competitions, concluding with our awards ceremony celebrating the champions of TecHETC 2025!"}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-gray-300">
                      {activeDay === 1 ? "9:00 AM - 10:00 PM" : "9:00 AM - 11:00 PM"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-secondary" />
                    <span className="text-gray-300">Engineering College Campus</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    <span className="text-gray-300">
                      {activeDay === 1 ? "November 15, 2025" : "November 16, 2025"}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="aspect-square relative">
                  {/* Day 1 Image */}
                  {activeDay === 1 && (
                    <img 
                      src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Day 1 Events"
                      className="w-full h-full object-cover rounded-lg pixel-corners"
                    />
                  )}
                  
                  {/* Day 2 Image */}
                  {activeDay === 2 && (
                    <img 
                      src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Day 2 Events"
                      className="w-full h-full object-cover rounded-lg pixel-corners"
                    />
                  )}
                  
                  {/* Pixel overlay */}
                  <div className="absolute inset-0 bg-grid-pattern bg-[length:10px_10px] opacity-30 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[38px] md:left-[62px] w-[2px] bg-primary"></div>
            
            {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex mb-8"
              >
                <div className="mr-6 md:mr-10 relative">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-surface border-2 border-${getDepartmentColor(item.department)} shadow-${getDepartmentColor(item.department)} flex items-center justify-center z-10 relative`}>
                    <Clock className={`w-5 h-5 md:w-6 md:h-6 text-${getDepartmentColor(item.department)}`} />
                  </div>
                </div>
                
                <div className={`flex-1 bg-surface p-6 rounded-lg border-2 border-${getDepartmentColor(item.department)} pixel-corners`}>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className={`font-pixel text-xl text-${getDepartmentColor(item.department)}`}>{item.event}</h3>
                    <span className="font-mono text-white mt-2 md:mt-0">{item.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono uppercase bg-${getDepartmentColor(item.department)} bg-opacity-20 text-${getDepartmentColor(item.department)}`}>
                      {item.department === 'all' ? 'All Departments' : item.department}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SchedulePage;