import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard2, { EventProps } from '../components/EventCard2';
import EventCard from '../components/EventCard';
import { Cpu, Zap, Cog, Building2, Search } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const allEvents: EventProps[] = [
    // CSE Events
    {
      id: "hackathon",
      title: "UI/UX Design",
      department: "cse",
      departmentName: "CSE",
      description: "24-hour coding marathon to build innovative software solutions for real-world problems.",
      entryFee: 500,
      prize: 25000,
      date: "Nov 15-16",
      time: "10:00 AM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/2.png", 
    },
    {
      id: "code-sprint",
      title: "Code-2-Duo",
      department: "cse",
      departmentName: "CSE",
      description: "Fast-paced coding competition with time constraints to test algorithmic problem-solving skills.",
      entryFee: 300,
      prize: 15000,
      date: "Nov 16",
      time: "9:00 AM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/1.png", 
    },
    // ECE Events
    {
      id: "circuit-design",
      title: "Circuit Challenge",
      department: "ece",
      departmentName: "ECE",
      description: "Design and build electronic circuits that solve specific challenges with limited components.",
      entryFee: 400,
      prize: 20000,
      date: "Nov 15",
      time: "10:30 AM",
      icon: <Zap className="h-5 w-5 text-neon-ece" />,
      bannerImage: "/images/Banner.webp", 
    },
    {
      id: "iot-challenge",
      title: "IoT Showcase",
      department: "ece",
      departmentName: "ECE",
      description: "Create innovative IoT solutions that address real-world problems and demonstrate their application.",
      entryFee: 450,
      prize: 18000,
      date: "Nov 16",
      time: "11:00 AM",
      icon: <Zap className="h-5 w-5 text-neon-ece" />,
      bannerImage: "/images/Banner.webp", 
    },
    // ME Events
    {
      id: "robo-wars",
      title: "RoboWars",
      department: "me",
      departmentName: "ME",
      description: "Battle your custom-built robots in an arena to determine the ultimate mechanical champion.",
      entryFee: 600,
      prize: 30000,
      date: "Nov 15-16",
      time: "1:00 PM",
      icon: <Cog className="h-5 w-5 text-neon-me" />,
      bannerImage: "/images/Banner.webp", 
    },
    {
      id: "cad-contest",
      title: "CAD Contest",
      department: "me",
      departmentName: "ME",
      description: "Design complex 3D models using CAD software within time limits based on specification requirements.",
      entryFee: 350,
      prize: 12000,
      date: "Nov 16",
      time: "2:00 PM",
      icon: <Cog className="h-5 w-5 text-neon-me" />,
      bannerImage: "/images/Banner.webp", 
      bannerText: "FLAGSHIP EVENT", 
    },
    // CE Events
    {
      id: "bridge-building",
      title: "Bridge The Gap",
      department: "ce",
      departmentName: "CE",
      description: "Construct model bridges and test their strength-to-weight ratio against strict specifications.",
      entryFee: 350,
      prize: 15000,
      date: "Nov 15",
      time: "3:30 PM",
      icon: <Building2 className="h-5 w-5 text-neon-ce" />,
      bannerImage: "/images/3.png", 
      bannerText: "FLAGSHIP EVENT", 
    },
    {
      id: "earthquake-proof",
      title: "Quake Proof",
      department: "ce",
      departmentName: "CE",
      description: "Design structures that can withstand simulated earthquake conditions while maintaining integrity.",
      entryFee: 400,
      prize: 16000,
      date: "Nov 16",
      time: "3:30 PM",
      icon: <Building2 className="h-5 w-5 text-neon-ce" />,
      bannerImage: "/images/Banner.webp", 
      bannerText: "FLAGSHIP EVENT", 
    }
  ];
  
  const filteredEvents = allEvents.filter(event => {
    return (
      (filter === 'all' || event.department === filter) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       event.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title">All Events</h1>
        
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 px-4 pl-10 bg-surface border-2 border-primary rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex space-x-2 w-full md:w-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-2 rounded-md font-mono ${filter === 'all' ? 'bg-primary text-white' : 'border border-primary text-primary'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('cse')}
                className={`px-3 py-2 rounded-md font-mono flex items-center ${filter === 'cse' ? 'bg-neon-cse bg-opacity-20 text-neon-cse border border-neon-cse' : 'border border-gray-700 text-gray-300'}`}
              >
                <Cpu className="h-4 w-4 mr-1" /> CSE
              </button>
              <button
                onClick={() => setFilter('ece')}
                className={`px-3 py-2 rounded-md font-mono flex items-center ${filter === 'ece' ? 'bg-neon-ece bg-opacity-20 text-neon-ece border border-neon-ece' : 'border border-gray-700 text-gray-300'}`}
              >
                <Zap className="h-4 w-4 mr-1" /> ECE
              </button>
              <button
                onClick={() => setFilter('me')}
                className={`px-3 py-2 rounded-md font-mono flex items-center ${filter === 'me' ? 'bg-neon-me bg-opacity-20 text-neon-me border border-neon-me' : 'border border-gray-700 text-gray-300'}`}
              >
                <Cog className="h-4 w-4 mr-1" /> ME
              </button>
              <button
                onClick={() => setFilter('ce')}
                className={`px-3 py-2 rounded-md font-mono flex items-center ${filter === 'ce' ? 'bg-neon-ce bg-opacity-20 text-neon-ce border border-neon-ce' : 'border border-gray-700 text-gray-300'}`}
              >
                <Building2 className="h-4 w-4 mr-1" /> CE
              </button>
            </div>
          </div>
        </div>
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventsPage;