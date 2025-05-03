import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventCard2, { EventProps } from "../components/EventCard2";
// import EventCard from '../components/EventCard';
import {
  Search,
  Cpu,
  Zap,
  Cog,
  Building2,
  Bolt,
  Brain,
  FlaskConical,
} from "lucide-react";

const EventsPage: React.FC = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const allEvents: EventProps[] = [
    {
      id: "sudoku",
      title: "SUDOKU",
      department: "bsh",
      departmentName: "BSH",
      description:
        "Challenge your logical thinking in this timed number puzzle event.",
      entryFee: 10,
      teamSize: 1,
      date: "May 15",
      time: "10:00 AM",
      icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
      bannerImage: "/images/sudoku.webp",
    },
    {
      id: "code-2-duo",
      title: "CODE–2–DUO",
      department: "cse",
      departmentName: "CSE",
      description:
        "Pair up and compete in this coding challenge designed for speed and logic.",
      entryFee: 0,
      teamSize: 2,
      date: "May 15",
      time: "11:00 AM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/code-2-duo.webp",
    },
    {
      id: "instant-circuit-making",
      title: "INSTANT CIRCUIT MAKING",
      department: "ee",
      departmentName: "EE",
      description:
        "Quick-fire circuit building under pressure using provided components.",
      entryFee: 0,
      teamSize: 2,
      date: "May 15",
      time: "01:00 PM",
      icon: <Bolt className="h-5 w-5 text-neon-ee" />,
      bannerImage: "/images/instant-circuit-making.webp",
    },
    {
      id: "robo-soccer",
      title: "ROBO SOCCER",
      department: "ece",
      departmentName: "ECE",
      description:
        "Program and control your bots to score goals and defeat your opponents.",
      entryFee: 0,
      teamSize: "3 - 4",
      date: "May 15",
      time: "03:00 PM",
      icon: <Zap className="h-5 w-5 text-neon-ece" />,
      bannerImage: "/images/robo-soccer.webp",
    },
    {
      id: "bridge-the-gap",
      title: "BRIDGE THE GAP",
      department: "ce",
      departmentName: "CE",
      description:
        "Design and build model bridges to test structural strength and creativity.",
      entryFee: "100 per team",
      teamSize: "2 - 4",
      date: "May 16",
      time: "10:00 AM",
      icon: <Building2 className="h-5 w-5 text-neon-ce" />,
      bannerImage: "/images/bridge-the-gap.webp",
    },
    {
      id: "cadmania",
      title: "CADMANIA",
      department: "me",
      departmentName: "ME",
      description:
        "Showcase your design and drafting skills using CAD software.",
      entryFee: 0,
      teamSize: 1,
      date: "May 16",
      time: "11:00 AM",
      icon: <Cog className="h-5 w-5 text-neon-me" />,
      bannerImage: "/images/cadmania.webp",
    },
    {
      id: "user-interface-user-experience",
      title: "UI–UX Design",
      department: "cse",
      departmentName: "CSE",
      description:
        "Design modern and user-friendly interfaces with top-notch UX principles.",
      entryFee: 0,
      teamSize: 1,
      date: "May 16",
      time: "01:00 PM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/user-interface-user-experience.webp",
    },
    {
      id: "hunt-for-fun",
      title: "HUNT FOR FUN",
      department: "bsh",
      departmentName: "BSH",
      description:
        "A campus-wide treasure hunt with fun clues and exciting challenges.",
      entryFee: "60 per team",
      teamSize: "2 to 3",
      date: "May 16",
      time: "02:00 PM",
      icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
      bannerImage: "/images/hunt-for-fun.webp",
    },
    {
      id: "line-follower-robot",
      title: "LINE FOLLOWER ROBOT",
      department: "ece",
      departmentName: "ECE",
      description:
        "Build a robot that can smartly follow a line across complex paths.",
      entryFee: 0,
      teamSize: "2 - 4",
      date: "May 16",
      time: "03:00 PM",
      icon: <Zap className="h-5 w-5 text-neon-ece" />,
      bannerImage: "/images/line-follower-robot.webp",
    },
    {
      id: "electromat",
      title: "ELECTROMAT",
      department: "ee",
      departmentName: "EE",
      description:
        "Put your problem-solving skills to the test in this hands-on electromagnetism and MATLAB-based coding competition.",
      entryFee: 0,
      teamSize: "1 - 2",
      date: "May 15",
      time: "10:00 AM",
      icon: <Bolt className="h-5 w-5 text-neon-ee" />,
      bannerImage: "/images/electromat.webp",
    },
    {
      id: "insta-plan",
      title: "INSTA-PLAN",
      department: "ce",
      departmentName: "CE",
      description:
        "Create quick architectural plans under real-world constraints.",
      entryFee: 0,
      teamSize: 2,
      date: "May 17",
      time: "11:00 AM",
      icon: <Building2 className="h-5 w-5 text-neon-ce" />,
      bannerImage: "/images/insta-plan.webp",
    },
    {
      id: "battle-grounds-mobile-india",
      title: "BGMI",
      department: "cse",
      departmentName: "CSE",
      description: "Drop in, gear up, and battle your way to Compete in the ultimate mobile battle royale tournament.",
      entryFee: "200 per team",
      teamSize: "3 - 4",
      date: "May 17",
      time: "01:00 PM",
      icon: <Cpu className="h-5 w-5 text-neon-cse" />,
      bannerImage: "/images/battle-grounds-mobile-india.webp",
    },
    {
      id: "quizzard",
      title: "QUIZZARD",
      department: "general",
      departmentName: "GENERAL",
      description:
        "Put your general knowledge to the test in this fast-paced quiz battle.",
      entryFee: 0,
      teamSize: 2,
      date: "May 17",
      time: "02:00 PM",
      icon: <Brain className="h-5 w-5 text-neon-general" />,
      bannerImage: "/images/quizzard.webp",
    },
    {
      id: "electrotech-exploration",
      title: "ELECTROTECH EXPLORATION",
      department: "ece",
      departmentName: "ECE",
      description:
        "Dive into exciting electronics experiments and innovations.",
      entryFee: 0,
      teamSize: 1,
      date: "May 16",
      time: "03:00 PM",
      icon: <Zap className="h-5 w-5 text-neon-ece" />,
      bannerImage: "/images/electrotech-exploration.webp",
    },
    {
      id: "model-display",
      title: "MODEL DISPLAY",
      department: "general",
      departmentName: "GENERAL",
      description:
        "Showcase creative models and prototypes across engineering domains.",
      entryFee: 0,
      teamSize: 4,
      date: "May 18",
      time: "10:00 AM",
      icon: <Brain className="h-5 w-5 text-neon-general" />,
      bannerImage: "/images/model-display.webp",
    },
  ];

  const filteredEvents = allEvents.filter((event) => {
    return (
      (filter === "all" || event.department === filter) &&
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
        <h1 className="section-title text-gradient-1">All Events</h1>

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

            {/* <div className="flex space-x-2 w-full md:w-auto">
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
              <button
                onClick={() => setFilter('ee')}
                className={`px-3 py-2 rounded-md font-mono flex items-center ${filter === 'ee' ? 'bg-neon-ee bg-opacity-20 text-neon-ee border border-neon-ee' : 'border border-gray-700 text-gray-300'}`}
              >
                <Bolt className="h-4 w-4 mr-1" /> EE
              </button>
            </div> */}
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard2 key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No events found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventsPage;
