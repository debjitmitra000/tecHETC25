import React from 'react';
import { Link } from 'react-router-dom';
import EventCard, { EventProps } from './EventCard';
import { Cpu, Zap, Cog, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsSection: React.FC = () => {
  const featuredEvents: EventProps[] = [
    {
      id: "hackathon",
      title: "Hackathon",
      department: "cse",
      departmentName: "CSE",
      description: "24-hour coding marathon to build innovative software solutions for real-world problems.",
      entryFee: 500,
      prize: 25000,
      date: "Nov 15-16",
      time: "10:00 AM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/1.png",
    },
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
      bannerImage: "/images/2.png",
    },
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
      bannerImage: "/images/3.png",
    },
    {
      id: "bridge-building",
      title: "Bridge Building",
      department: "ce",
      departmentName: "CE",
      description: "Construct model bridges and test their strength-to-weight ratio against strict specifications.",
      entryFee: 350,
      prize: 15000,
      date: "Nov 15",
      time: "3:30 PM",
      icon: <Building2 className="h-5 w-5 text-neon-ce" />,
      bannerImage: "/images/4.png",
    }
  ];
  
  // Animation variants for staggered card animations
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Events</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                  }
                }
              }}
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/events" className="btn btn-primary">
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;