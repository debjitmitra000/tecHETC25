import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface EventProps {
  id: string;
  title: string;
  department: 'cse' | 'ece' | 'me' | 'ce';
  departmentName: string;
  description: string;
  entryFee: number;
  prize: number;
  date: string;
  time: string;
  icon: React.ReactNode;
  bannerImage?: string; // Optional banner image URL
  bannerText?: string; // Optional banner text
}

interface EventCardProps {
  event: EventProps;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const getDepartmentColor = (dept: string) => {
    switch (dept) {
      case 'cse': return 'neon-cse';
      case 'ece': return 'neon-ece';
      case 'me': return 'neon-me';
      case 'ce': return 'neon-ce';
      case 'ee': return 'neon-ee'
      default: return 'primary';
    }
  };
  
  const color = getDepartmentColor(event.department);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-surface border-2 border-${color} rounded-lg overflow-hidden pixel-corners hover:scale-105 transition-all duration-300 h-full shadow-md hover:shadow-lg relative`}
    >
      <div className={`p-4 bg-${color} bg-opacity-10 flex items-center justify-between`}>
        <div className="flex items-center">
          <span className="mr-2">{event.icon}</span>
          <h3 className={`font-pixel text-lg text-${color}`}>{event.title}</h3>
        </div>
        {/* <span className={`text-${color} font-mono text-sm px-2 py-1 border border-current rounded`}>
          {event.departmentName}
        </span> */}
      </div>
      
      {/* Banner image container */}
      {event.bannerImage && (
        <div className="w-full h-32 relative overflow-hidden">
          <img 
            src={event.bannerImage} 
            alt="Event Banner"
            className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
          />
          {event.bannerText && (
            <div className={`absolute bottom-0 left-0 right-0 bg-${color} bg-opacity-80 text-center py-1 font-pixel text-xs text-white`}>
              {event.bannerText}
            </div>
          )}
        </div>
      )}
      
      <div className="p-4">
        <p className="text-gray-300 mb-4">{event.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-background rounded p-2">
            <span className="block text-gray-400">Entry Fee</span>
            <span className="font-mono text-white">₹{event.entryFee}</span>
          </div>
          <div className="bg-background rounded p-2">
            <span className="block text-gray-400">Prize</span>
            <span className="font-mono text-white">₹{event.prize}</span>
          </div>
          <div className="bg-background rounded p-2">
            <span className="block text-gray-400">Date</span>
            <span className="font-mono text-white">{event.date}</span>
          </div>
          <div className="bg-background rounded p-2">
            <span className="block text-gray-400">Time</span>
            <span className="font-mono text-white">{event.time}</span>
          </div>
        </div>
        
        <Link 
          to={`/department/${event.department}?event=${event.id}`}
          className={`flex items-center justify-center w-full py-2 border border-${color} text-${color} hover:bg-${color} hover:bg-opacity-20 transition-all rounded font-mono`}
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;