import React from 'react';
import { Link } from 'react-router-dom';
import EventCard, { EventProps } from './EventCard';
import {
  Cpu,
  Zap,
  Building2,
  FlaskConical,
} from "lucide-react";
import { motion } from 'framer-motion';

const EventsSection: React.FC = () => {
  const featuredEvents: EventProps[] = [
    {
      id: "robo-soccer",
      title: "ROBO SOCCER",
      department: "ece",
      departmentName: "ECE",
      description: "Program and control your bots to score goals and defeat your opponents.",
      entryFee: 200,
      prize: 6000,
      date: "Nov 15",
      time: "03:00 PM",
      icon: <Zap className="h-5 w-5 text-neon-ece" />,
      bannerImage: "/images/robo-soccer.webp",
    },
    {
      id: "bridge-the-gap",
      title: "BRIDGE THE GAP",
      department: "ce",
      departmentName: "CE",
      description: "Design and build model bridges to test structural strength and creativity.",
      entryFee: 150,
      prize: 4000,
      date: "Nov 16",
      time: "10:00 AM",
      icon: <Building2 className="h-5 w-5 text-neon-ce" />,
      bannerImage: "/images/bridge-the-gap.webp",
    },
    {
      id: "hunt-for-fun",
      title: "HUNT FOR FUN",
      department: "bsh",
      departmentName: "BSH",
      description: "A campus-wide treasure hunt with fun clues and exciting challenges.",
      entryFee: 100,
      prize: 2500,
      date: "Nov 16",
      time: "02:00 PM",
      icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
      bannerImage: "/images/hunt-for-fun.webp",
    },
    {
      id: "battle-grounds-mobile-india",
      title: "BATTLE GROUNDS MOBILE INDIA (BGMI)",
      department: "cse",
      departmentName: "CSE",
      description: "Compete in the ultimate mobile battle royale tournament.",
      entryFee: 100,
      prize: 3000,
      date: "Nov 17",
      time: "01:00 PM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/battle-grounds-mobile-india.webp",
    },
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