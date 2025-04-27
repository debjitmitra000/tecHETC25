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
      icon: <Cpu className="h-5 w-5 text-neon-cse" />
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
      icon: <Zap className="h-5 w-5 text-neon-ece" />
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
      icon: <Cog className="h-5 w-5 text-neon-me" />
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
      icon: <Building2 className="h-5 w-5 text-neon-ce" />
    }
  ];
  
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
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