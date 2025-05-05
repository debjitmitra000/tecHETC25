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
    ]
  };
  
  const getDepartmentColor = (dept: string) => {
    switch (dept) {
      case 'cse': return 'neon-cse';
      case 'ece': return 'neon-ece';
      case 'me': return 'neon-me';
      case 'ce': return 'neon-ce';
      case 'bsh': return 'neon-bsh'
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
        <h1 className="section-title text-gradient-1">Event Schedule</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="grid grid-cols-2 border-2 border-primary rounded-lg overflow-hidden pixel-corners">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-8 py-4 font-pixel ${activeDay === 1 ? 'bg-primary text-white' : 'bg-surface text-primary hover:bg-primary hover:bg-opacity-20'}`}
              >
                DAY 1 <span className="font-mono text-sm block mt-1">MAY 15</span>
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-8 py-4 font-pixel ${activeDay === 2 ? 'bg-primary text-white' : 'bg-surface text-primary hover:bg-primary hover:bg-opacity-20'}`}
              >
                DAY 2 <span className="font-mono text-sm block mt-1">MAY 16</span>
              </button>
            </div>
          </div>
          
          <div className="bg-surface rounded-lg p-6 border border-primary pixel-corners mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-1 lg:col-span-2">
                <h2 className="font-pixel text-xl mb-4">Day {activeDay} Overview</h2>
                <p className="text-gray-300 mb-4">
                  {activeDay === 1 
                    ? "The first day kicks off with our grand opening ceremony at 10:00 AM, setting the tone for two thrilling days ahead!🎉 Get ready for preliminary rounds of major competitions like QUIZZARD, BRIDGE THE GAP, CODE-2-DUO, and more.🧠⚙️🤖" 
                    : "The second day brings the heat with final rounds, high-stakes showdowns, and fresh challenges across gaming, design, robotics, and creativity! 🎮💡🛠️Look out for crowd favorites like BGMI, LINE FOLLOWER ROBOT, UI/UX Design, and BGMI.We wrap it all up with the prize distribution ceremony at 4:30 PM, celebrating the brightest minds of TECHetc 2k25! 🏆🎓"}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-gray-300">
                      {activeDay === 1 ? "9:00 AM - 04:00 PM" : "9:00 AM - 06:00 PM"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-secondary" />
                    <span className="text-gray-300">Hooghly Engineering & Technology College</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    <span className="text-gray-300">
                      {activeDay === 1 ? "May 15, 2025" : "May 16, 2025"}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* <div className="hidden lg:block">
                <div className="aspect-square relative">
                  
                  {activeDay === 1 && (
                    <img 
                      src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Day 1 Events"
                      className="w-full h-full object-cover rounded-lg pixel-corners"
                    />
                  )}
                  
                  
                  {activeDay === 2 && (
                    <img 
                      src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Day 2 Events"
                      className="w-full h-full object-cover rounded-lg pixel-corners"
                    />
                  )}
                  
                  
                  <div className="absolute inset-0 bg-grid-pattern bg-[length:10px_10px] opacity-30 pointer-events-none"></div>
                </div>
              </div> */}
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