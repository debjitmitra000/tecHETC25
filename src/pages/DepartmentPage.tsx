import React, { useState, useEffect } from "react";
import { useRegistration } from "../contexts/RegistrationContext";

import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { EventProps } from "../components/EventCard";
import {
  Cpu,
  Zap,
  Cog,
  Building2,
  Users,
  Trophy,
  Clock,
  Calendar,
  MapPin,
  CreditCard,
  BadgeCheck,
  Bolt,
  Brain,
} from "lucide-react";

const DepartmentPage: React.FC = () => {
  const { dept } = useParams<{ dept: string }>();
  const { openModal, setSelectedEvents } = useRegistration();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // Add this hook for programmatic navigation
  const eventId = searchParams.get("event");

  const [activeTab, setActiveTab] = useState<"events" | "team" | "about">(
    "events"
  );
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeModal = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const eventsSection = document.getElementById("events");
      eventsSection?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  // Department data
  const departments = {
    cse: {
      name: "Computer Science Engineering",
      shortName: "CSE",
      color: "neon-cse",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "The Computer Science department hosts coding challenges, hackathons, and software development competitions that push the boundaries of digital innovation.",
      coordinator: "Dr. Alan Turing",
      studentCoordinator: "Jane Hopper",
      events: [
        {
          id: "hackathon",
          title: "Hackathon",
          department: "cse",
          departmentName: "CSE",
          description:
            "24-hour coding marathon to build innovative software solutions for real-world problems.",
          entryFee: 500,
          prize: 25000,
          date: "Nov 15-16",
          time: "10:00 AM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams must consist of 2-4 members",
            "All code must be written during the event",
            "Use of open-source libraries is permitted",
            "Projects must address one of the provided themes",
            "Final submissions include code repository and demo video",
            "Judging based on innovation, technical difficulty, and presentation",
          ],
          location: "CSE Labs, Main Building",
          registration: "Open until Nov 10",
        },
        {
          id: "code-sprint",
          title: "Code Sprint",
          department: "cse",
          departmentName: "CSE",
          description:
            "Fast-paced coding competition with time constraints to test algorithmic problem-solving skills.",
          entryFee: 300,
          prize: 15000,
          date: "Nov 16",
          time: "9:00 AM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/1.png",
          rules: [
            "Individual participation only",
            "Three rounds of increasing difficulty",
            "Each round has a time limit of 60 minutes",
            "Participants must solve algorithmic problems",
            "Ranking based on number of problems solved and time taken",
            "Top 10 advance to final round",
          ],
          location: "CSE Seminar Hall",
          registration: "Open until Nov 12",
        },
        {
          id: "ui-ux-challenge",
          title: "UI/UX Challenge",
          department: "cse",
          departmentName: "CSE",
          description:
            "Design challenge focusing on creating intuitive and visually appealing user interfaces for given scenarios.",
          entryFee: 250,
          prize: 10000,
          date: "Nov 15",
          time: "11:00 AM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 1-2 members",
            "Design must be created during the event",
            "Use any design software of your choice",
            "Submit wireframes, mockups, and prototype",
            "Presentation to judges required",
            "Judging based on creativity, usability, and adherence to design principles",
          ],
          location: "Design Lab, Tech Building",
          registration: "Open until Nov 10",
        },
      ],
      teamMembers: [
        {
          name: "Jane Hopper",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Mike Wheeler",
          role: "Technical Lead",
          avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Lucas Sinclair",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Max Mayfield",
          role: "Design Head",
          avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    ece: {
      name: "Electronics & Communication Engineering",
      shortName: "ECE",
      color: "neon-ece",
      icon: <Zap className="h-6 w-6" />,
      description:
        "The Electronics department specializes in circuit design, IoT innovations, and electronic systems that bridge the gap between hardware and software.",
      coordinator: "Dr. Nikola Tesla",
      studentCoordinator: "Will Byers",
      events: [
        {
          id: "circuit-design",
          title: "Circuit Challenge",
          department: "ece",
          departmentName: "ECE",
          description:
            "Design and build electronic circuits that solve specific challenges with limited components.",
          entryFee: 400,
          prize: 20000,
          date: "Nov 15",
          time: "10:30 AM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2-3 members",
            "Use only provided components",
            "Circuit must be assembled within 3 hours",
            "Circuit must perform the specified function",
            "Judging based on efficiency, creativity, and performance",
            "Safety protocols must be followed",
          ],
          location: "ECE Lab 1",
          registration: "Open until Nov 8",
        },
        {
          id: "iot-challenge",
          title: "IoT Showcase",
          department: "ece",
          departmentName: "ECE",
          description:
            "Create innovative IoT solutions that address real-world problems and demonstrate their application.",
          entryFee: 450,
          prize: 18000,
          date: "Nov 16",
          time: "11:00 AM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2-4 members",
            "Hardware and software integration required",
            "Project must use at least one IoT protocol",
            "Demonstration video submission required",
            "Live demonstration to judges",
            "Judging based on innovation, application, and scalability",
          ],
          location: "ECE Lab 2",
          registration: "Open until Nov 10",
        },
        {
          id: "signal-processing",
          title: "Signal Masters",
          department: "ece",
          departmentName: "ECE",
          description:
            "Competition focused on digital signal processing algorithms and applications.",
          entryFee: 350,
          prize: 15000,
          date: "Nov 15",
          time: "2:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/1.png",
          rules: [
            "Individual participation",
            "Three rounds of signal processing challenges",
            "MATLAB or Python implementation",
            "Time limit of 90 minutes per round",
            "Algorithms judged on accuracy and efficiency",
            "Top 5 advance to final round",
          ],
          location: "Signal Processing Lab",
          registration: "Open until Nov 10",
        },
      ],
      teamMembers: [
        {
          name: "Will Byers",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Dustin Henderson",
          role: "Technical Expert",
          avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Suzie Bingham",
          role: "Event Coordinator",
          avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Eddie Munson",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    me: {
      name: "Mechanical Engineering",
      shortName: "ME",
      color: "neon-me",
      icon: <Cog className="h-6 w-6" />,
      description:
        "The Mechanical department focuses on robotics, CAD design, and physical engineering challenges that test structural integrity and mechanical precision.",
      coordinator: "Dr. Isaac Newton",
      studentCoordinator: "Steve Harrington",
      events: [
        {
          id: "robo-wars",
          title: "RoboWars",
          department: "me",
          departmentName: "ME",
          description:
            "Battle your custom-built robots in an arena to determine the ultimate mechanical champion.",
          entryFee: 600,
          prize: 30000,
          date: "Nov 15-16",
          time: "1:00 PM",
          icon: <Cog className="h-5 w-5 text-neon-me" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 3-5 members",
            "Robot weight limit: 5kg",
            "Robot must fit within 40x40x40cm box",
            "No hazardous materials or weapons",
            "Matches last 3 minutes or until immobilization",
            "Double elimination tournament format",
            "Safety protocols must be followed",
          ],
          location: "ME Workshop",
          registration: "Open until Nov 5",
        },
        {
          id: "cad-contest",
          title: "CAD Contest",
          department: "me",
          departmentName: "ME",
          description:
            "Design complex 3D models using CAD software within time limits based on specification requirements.",
          entryFee: 350,
          prize: 12000,
          date: "Nov 16",
          time: "2:00 PM",
          icon: <Cog className="h-5 w-5 text-neon-me" />,
          bannerImage: "/images/1.png",
          rules: [
            "Individual participation",
            "4-hour time limit",
            "Use provided CAD software",
            "Model must meet given specifications",
            "Export in specified format",
            "Judging based on accuracy, efficiency, and innovation",
          ],
          location: "ME Design Studio",
          registration: "Open until Nov 12",
        },
        {
          id: "thermo-challenge",
          title: "ThermoChallenge",
          department: "me",
          departmentName: "ME",
          description:
            "Competition based on thermodynamics principles and heat transfer applications.",
          entryFee: 300,
          prize: 10000,
          date: "Nov 15",
          time: "10:00 AM",
          icon: <Cog className="h-5 w-5 text-neon-me" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2 members",
            "Design and build a thermal system",
            "System must achieve specified temperature control",
            "Use only provided materials",
            "Judging based on efficiency, innovation, and performance",
            "Technical report submission required",
          ],
          location: "Thermo Lab",
          registration: "Open until Nov 10",
        },
      ],
      teamMembers: [
        {
          name: "Steve Harrington",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Nancy Wheeler",
          role: "Design Specialist",
          avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Jonathan Byers",
          role: "Technical Support",
          avatar:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Robin Buckley",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    ce: {
      name: "Civil Engineering",
      shortName: "CE",
      color: "neon-ce",
      icon: <Building2 className="h-6 w-6" />,
      description:
        "The Civil department challenges focus on structural design, earthquake resistance, and sustainable construction techniques for the modern world.",
      coordinator: "Dr. Robert Hooke",
      studentCoordinator: "Lucas Sinclair",
      events: [
        {
          id: "bridge-building",
          title: "Bridge Building",
          department: "ce",
          departmentName: "CE",
          description:
            "Construct model bridges and test their strength-to-weight ratio against strict specifications.",
          entryFee: 350,
          prize: 15000,
          date: "Nov 15",
          time: "3:30 PM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2-3 members",
            "Bridge must be built only with provided materials",
            "Maximum dimensions: 60cm length, 15cm width, 20cm height",
            "Construction time: 3 hours",
            "Bridge must support minimum 5kg load",
            "Judging based on strength-to-weight ratio and aesthetics",
          ],
          location: "CE Courtyard",
          registration: "Open until Nov 10",
        },
        {
          id: "earthquake-proof",
          title: "Quake Proof",
          department: "ce",
          departmentName: "CE",
          description:
            "Design structures that can withstand simulated earthquake conditions while maintaining integrity.",
          entryFee: 400,
          prize: 16000,
          date: "Nov 16",
          time: "3:30 PM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2-4 members",
            "Structure must be built with provided materials",
            "Maximum dimensions: 30x30x50cm",
            "Construction time: 4 hours",
            "Structure tested on shake table at multiple intensities",
            "Judging based on structural integrity after testing",
          ],
          location: "CE Structures Lab",
          registration: "Open until Nov 12",
        },
        {
          id: "eco-construction",
          title: "EcoConstruct",
          department: "ce",
          departmentName: "CE",
          description:
            "Competition focused on sustainable construction techniques using eco-friendly materials.",
          entryFee: 300,
          prize: 12000,
          date: "Nov 15",
          time: "1:00 PM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2-3 members",
            "Design must use renewable materials",
            "Structural stability must be maintained",
            "Presentation of sustainability features required",
            "Judging based on innovation, sustainability, and structural integrity",
            "Technical report submission required",
          ],
          location: "Environmental Engineering Lab",
          registration: "Open until Nov 10",
        },
      ],
      teamMembers: [
        {
          name: "Lucas Sinclair",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Erica Sinclair",
          role: "Technical Head",
          avatar:
            "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Argyle",
          role: "Logistics Manager",
          avatar:
            "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Murray Bauman",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    ee: {
      name: "Electrical Engineering",
      shortName: "EE",
      color: "neon-ee",
      icon: <Bolt className="h-6 w-6" />,
      description:
        "The Electrical Engineering department focuses on power systems, electrical machines, and innovative solutions in energy management and control systems.",
      coordinator: "Dr. Michael Faraday",
      studentCoordinator: "Max Mayfield",
      events: [
        {
          id: "power-systems",
          title: "Power Systems Challenge",
          department: "ee",
          departmentName: "EE",
          description:
            "Design and simulate power distribution systems with focus on efficiency and reliability.",
          entryFee: 400,
          prize: 20000,
          date: "Nov 15",
          time: "10:00 AM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 2-3 members",
            "Use provided simulation software",
            "System must meet efficiency requirements",
            "Include protection mechanisms",
            "Present design considerations",
            "Technical documentation required",
          ],
          location: "Power Systems Lab",
          registration: "Open until Nov 10",
        },
        {
          id: "motor-design",
          title: "Motor Design Competition",
          department: "ee",
          departmentName: "EE",
          description:
            "Create innovative electric motor designs focusing on efficiency and performance.",
          entryFee: 450,
          prize: 18000,
          date: "Nov 16",
          time: "11:00 AM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/1.png",
          rules: [
            "Individual or team of 2",
            "Original motor design required",
            "Performance testing mandatory",
            "Efficiency calculations needed",
            "Cost analysis included",
            "Presentation to judges",
          ],
          location: "Machines Lab",
          registration: "Open until Nov 12",
        },
        {
          id: "energy-innovation",
          title: "Energy Innovation",
          department: "ee",
          departmentName: "EE",
          description:
            "Develop innovative solutions for renewable energy integration and smart grid applications.",
          entryFee: 500,
          prize: 25000,
          date: "Nov 15-16",
          time: "9:00 AM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/1.png",
          rules: [
            "Teams of 3-4 members",
            "Project must be sustainable",
            "Include smart grid integration",
            "Real-time monitoring required",
            "Cost-benefit analysis needed",
            "Final presentation and demo",
          ],
          location: "Smart Grid Lab",
          registration: "Open until Nov 8",
        },
      ],
      teamMembers: [
        {
          name: "Max Mayfield",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Eddie Munson",
          role: "Technical Lead",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Robin Buckley",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Steve Harrington",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    general: {
      name: "Basic Science Engineering",
      shortName: "BSH",
      color: "primary",
      icon: <Brain className="h-6 w-6" />,
      description:
        "The Basic Science department serves as the foundation of engineering education, nurturing analytical thinking and scientific principles across physics, chemistry, and mathematics.",
      coordinator: "Dr. Michael Faraday",
      studentCoordinator: "Max Mayfield",
      events: [
        {
          id: "quizard",
          title: "Quizard",
          department: "bsh",
          departmentName: "BSH",
          description:
            "A thrilling quiz competition testing your knowledge in science, logic, and general awareness. Fast-paced rounds and challenging questions await!",
          entryFee: 100,
          prize: 5000,
          date: "Nov 14",
          time: "2:00 PM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/quizard-banner.png",
          rules: [
            "Teams of 2-3 members",
            "Multiple rounds including rapid fire and buzzer",
            "No use of electronic devices",
            "Fair play is mandatory",
            "Decision of the quizmaster is final",
          ],
          location: "Main Seminar Hall",
          registration: "Open until Nov 10",
        },
        {
          id: "hunt4fun",
          title: "Hunt 4 Fun",
          department: "bsh",
          departmentName: "BSH",
          description:
            "A thrilling quiz competition testing your knowledge in science, logic, and general awareness. Fast-paced rounds and challenging questions await!",
          entryFee: 100,
          prize: 5000,
          date: "Nov 14",
          time: "2:00 PM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/quizard-banner.png",
          rules: [
            "Teams of 2-3 members",
            "Multiple rounds including rapid fire and buzzer",
            "No use of electronic devices",
            "Fair play is mandatory",
            "Decision of the quizmaster is final",
          ],
          location: "Main Seminar Hall",
          registration: "Open until Nov 10",
        },
        {
          id: "sudoku",
          title: "Sudoku",
          department: "bsh",
          departmentName: "BSH",
          description:
            "A thrilling quiz competition testing your knowledge in science, logic, and general awareness. Fast-paced rounds and challenging questions await!",
          entryFee: 100,
          prize: 5000,
          date: "Nov 14",
          time: "2:00 PM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/quizard-banner.png",
          rules: [
            "Teams of 2-3 members",
            "Multiple rounds including rapid fire and buzzer",
            "No use of electronic devices",
            "Fair play is mandatory",
            "Decision of the quizmaster is final",
          ],
          location: "Main Seminar Hall",
          registration: "Open until Nov 10",
        },
      ],
      teamMembers: [
        {
          name: "Max Mayfield",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Eddie Munson",
          role: "Technical Lead",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Robin Buckley",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Steve Harrington",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    
  };
 // Find department and event
 const departmentInfo = dept && departments[dept as keyof typeof departments];

 useEffect(() => {
   if (departmentInfo && eventId) {
     const event = departmentInfo.events.find((e) => e.id === eventId);
     if (event) {
       setSelectedEvent(event);
     }
   }
 }, []);
 // }, [dept, eventId, departmentInfo]);

 // Add this effect to detect scrolling within the modal
 useEffect(() => {
   if (selectedEvent) {
     const modalContent = document.querySelector('.modal-content');
     if (modalContent) {
       const handleScroll = () => {
         setIsScrolled(modalContent.scrollTop > 10);
       };
       modalContent.addEventListener('scroll', handleScroll);
       return () => modalContent.removeEventListener('scroll', handleScroll);
     }
   }
 }, [selectedEvent]);

 if (!departmentInfo) {
   return (
     <div className="pt-24 pb-16 text-center">
       <h2 className="section-title">Department Not Found</h2>
       <p>The requested department does not exist.</p>
     </div>
   );
 }

 const color = departmentInfo.color;

 return (
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.5 }}
     className="pt-24 pb-16"
   >
     <div className="container my-32 mx-auto px-4">
       {/* Department Header */}
       <div
         className={`mb-10 p-6 bg-surface border-2 border-${color} rounded-lg pixel-corners relative overflow-hidden`}
       >
         <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>

         <div className="relative z-50 flex flex-col md:flex-row items-center gap-6">
           <div
             className={`w-20 h-20 rounded-full flex items-center justify-center bg-${color} bg-opacity-20 border-2 border-${color}`}
           >
             {React.cloneElement(departmentInfo.icon as React.ReactElement, {
               className: `h-10 w-10 text-${color}`,
             })}
           </div>

           <div className="text-center md:text-left">
             <h1
               className={`font-pixel text-3xl md:text-4xl text-${color} mb-2`}
             >
               {departmentInfo.name}
             </h1>
             <p className="text-gray-300 max-w-2xl">
               {departmentInfo.description}
             </p>
           </div>
         </div>
       </div>

       {/* Navigation Tabs */}
       <div className="flex justify-center mb-10">
         <div
           className={`inline-flex border-2 border-${color} rounded-lg overflow-hidden`}
         >
           <button
             onClick={() => setActiveTab("events")}
             className={`px-6 py-3 font-mono ${
               activeTab === "events"
                 ? `bg-${color} text-white`
                 : `text-${color} hover:bg-${color} hover:bg-opacity-20`
             }`}
           >
             EVENTS
           </button>
           <button
             onClick={() => setActiveTab("team")}
             className={`px-6 py-3 font-mono ${
               activeTab === "team"
                 ? `bg-${color} text-white`
                 : `text-${color} hover:bg-${color} hover:bg-opacity-20`
             }`}
           >
             TEAM
           </button>
           <button
             onClick={() => setActiveTab("about")}
             className={`px-6 py-3 font-mono ${
               activeTab === "about"
                 ? `bg-${color} text-white`
                 : `text-${color} hover:bg-${color} hover:bg-opacity-20`
             }`}
           >
             ABOUT
           </button>
         </div>
       </div>

       {/* Event Detail Modal */}
       {selectedEvent && (
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
           onClick={() => setSelectedEvent(null)}
         >
           <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
             <div className="flex items-center justify-center h-full p-4 pt-16 pb-16">
               <div
                 className={`modal-content bg-surface border-2 border-${color} rounded-lg pixel-corners max-w-3xl w-full max-h-[80vh] overflow-y-auto`}
                 onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
               >
                 <div
                   className={`p-4 ${isScrolled ? `bg-${color}` : `bg-${color} bg-opacity-20`} 
                   flex justify-between items-center sticky top-0 z-10 transition-colors duration-200`}
                 >
                   <h3 className={`font-pixel text-xl ${isScrolled ? 'text-white' : `text-${color}`}`}>
                     {selectedEvent.title}
                   </h3>
                   <button
                     onClick={closeModal}
                     className="p-1 rounded-full hover:bg-black hover:bg-opacity-20"
                     aria-label="Close modal"
                   >
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-6 w-6"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M6 18L18 6M6 6l12 12"
                       />
                     </svg>
                   </button>
                 </div>

                 {/* Banner image */}
                 {selectedEvent.bannerImage && (
                   <div className="w-full h-48 relative overflow-hidden">
                     <img
                       src={selectedEvent.bannerImage}
                       alt="Event Banner"
                       className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                     />
                   </div>
                 )}

                 {/* Rest of the modal content remains the same */}
                 <div className="p-6">
                   <p className="text-gray-300 mb-6">
                     {selectedEvent.description}
                   </p>

                   {/* Event details sections */}
                   <div className="grid grid-cols-2 gap-4 mb-6">
                     <div
                       className={`flex items-center p-3 bg-background rounded border border-${color}`}
                     >
                       <Calendar className={`h-5 w-5 mr-2 text-${color}`} />
                       <div>
                         <span className="text-gray-400 text-sm block">
                           Date
                         </span>
                         <span className="font-mono">
                           {selectedEvent.date}
                         </span>
                       </div>
                     </div>

                     <div
                       className={`flex items-center p-3 bg-background rounded border border-${color}`}
                     >
                       <Clock className={`h-5 w-5 mr-2 text-${color}`} />
                       <div>
                         <span className="text-gray-400 text-sm block">
                           Time
                         </span>
                         <span className="font-mono">
                           {selectedEvent.time}
                         </span>
                       </div>
                     </div>

                     <div
                       className={`flex items-center p-3 bg-background rounded border border-${color}`}
                     >
                       <MapPin className={`h-5 w-5 mr-2 text-${color}`} />
                       <div>
                         <span className="text-gray-400 text-sm block">
                           Location
                         </span>
                         <span className="font-mono">
                           {selectedEvent.location}
                         </span>
                       </div>
                     </div>

                     <div
                       className={`flex items-center p-3 bg-background rounded border border-${color}`}
                     >
                       <CreditCard className={`h-5 w-5 mr-2 text-${color}`} />
                       <div>
                         <span className="text-gray-400 text-sm block">
                           Entry Fee
                         </span>
                         <span className="font-mono">
                           ₹{selectedEvent.entryFee}
                         </span>
                       </div>
                     </div>
                   </div>

                   <div
                     className={`mb-6 p-4 bg-background rounded border border-${color}`}
                   >
                     <div className="flex items-center mb-3">
                       <Trophy className={`h-5 w-5 mr-2 text-${color}`} />
                       <h4 className="font-mono text-lg">Prize Pool</h4>
                     </div>
                     <div className={`text-2xl font-pixel text-${color}`}>
                       ₹{selectedEvent.prize}
                     </div>
                   </div>

                   <div className="mb-6">
                     <h4
                       className={`font-mono text-lg border-b border-${color} pb-2 mb-3`}
                     >
                       Rules & Guidelines
                     </h4>
                     <ul className="space-y-2">
                       {selectedEvent.rules.map((rule, index) => (
                         <li key={index} className="flex items-start">
                           <BadgeCheck
                             className={`h-5 w-5 mr-2 text-${color} mt-0.5 flex-shrink-0`}
                           />
                           <span className="text-gray-300">{rule}</span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="text-center">
                     <div className="mb-2 text-gray-400">
                       <span>Registration: </span>
                       <span className="font-mono">
                         {selectedEvent.registration}
                       </span>
                     </div>
                     <button
                       onClick={() => {
                         setSelectedEvents([selectedEvent.id]);
                         openModal();
                       }}
                       className={`btn border-${color} text-${color} hover:bg-${color} hover:bg-opacity-20`}
                     >
                       Register Now
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </motion.div>
       )}

       {/* Content Tabs */}
       <div>
         {/* Events Tab */}
         {activeTab === "events" && (
           <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {departmentInfo.events.map((event, index) => (
                 <motion.div
                   key={event.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className={`bg-surface border-2 border-${color} rounded-lg overflow-hidden pixel-corners hover:scale-102 transition-all duration-300 shadow-${color} hover:shadow-lg`}
                 >
                   <div
                     className={`p-4 bg-${color} bg-opacity-10 flex items-center justify-between`}
                   >
                     <div className="flex items-center">
                       <span className="mr-2">{event.icon}</span>
                       <h3 className={`font-pixel text-lg text-${color}`}>
                         {event.title}
                       </h3>
                     </div>
                   </div>

                   <div className="p-4">
                     <p className="text-gray-300 mb-4">{event.description}</p>

                     <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                       <div className="bg-background rounded p-2">
                         <span className="block text-gray-400">Entry Fee</span>
                         <span className="font-mono text-white">
                           ₹{event.entryFee}
                         </span>
                       </div>
                       <div className="bg-background rounded p-2">
                         <span className="block text-gray-400">Prize</span>
                         <span className="font-mono text-white">
                           ₹{event.prize}
                         </span>
                       </div>
                       <div className="bg-background rounded p-2">
                         <span className="block text-gray-400">Date</span>
                         <span className="font-mono text-white">
                           {event.date}
                         </span>
                       </div>
                       <div className="bg-background rounded p-2">
                         <span className="block text-gray-400">Time</span>
                         <span className="font-mono text-white">
                           {event.time}
                         </span>
                       </div>
                     </div>

                     <button
                       onClick={() => setSelectedEvent(event)}
                       className={`flex items-center justify-center w-full py-2 border border-${color} text-${color} hover:bg-${color} hover:bg-opacity-20 transition-all rounded font-mono`}
                     >
                       View Details
                     </button>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         )}

         {/* Team Tab */}
         {activeTab === "team" && (
           <div>
             <div
               className={`p-6 mb-8 bg-surface border border-${color} rounded-lg pixel-corners`}
             >
               <h2 className={`font-pixel text-xl text-${color} mb-4`}>
                 Faculty & Coordinators
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-center bg-background p-4 rounded-lg">
                   <div
                     className={`w-12 h-12 rounded-full bg-${color} bg-opacity-20 flex items-center justify-center mr-4`}
                   >
                     <Users className={`h-6 w-6 text-${color}`} />
                   </div>
                   <div>
                     <div className="font-mono text-lg">
                       {departmentInfo.coordinator}
                     </div>
                     <div className="text-gray-400">Faculty Coordinator</div>
                   </div>
                 </div>
                 <div className="flex items-center bg-background p-4 rounded-lg">
                   <div
                     className={`w-12 h-12 rounded-full bg-${color} bg-opacity-20 flex items-center justify-center mr-4`}
                   >
                     <Users className={`h-6 w-6 text-${color}`} />
                   </div>
                   <div>
                     <div className="font-mono text-lg">
                       {departmentInfo.studentCoordinator}
                     </div>
                     <div className="text-gray-400">Student Coordinator</div>
                   </div>
                 </div>
               </div>
             </div>

             <h2 className={`font-pixel text-xl text-${color} mb-6`}>
               Team Members
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {departmentInfo.teamMembers.map((member, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className={`bg-surface border border-${color} rounded-lg pixel-corners overflow-hidden`}
                 >
                   <div className="aspect-square overflow-hidden">
                     <img
                       src={member.avatar}
                       alt={member.name}
                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                     />
                   </div>
                   <div className="p-4">
                     <h3 className="font-mono text-lg">{member.name}</h3>
                     <p className={`text-${color} text-sm`}>{member.role}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         )}

         {/* About Tab */}
         {activeTab === "about" && (
           <div className="max-w-4xl mx-auto">
             <div
               className={`bg-surface p-6 border border-${color} rounded-lg pixel-corners mb-8`}
             >
               <h2 className={`font-pixel text-xl text-${color} mb-4`}>
                 About {departmentInfo.shortName} Department
               </h2>
               <p className="text-gray-300 mb-4">
                 {departmentInfo.description} Our department is committed to
                 fostering innovation and technical excellence through hands-on
                 competitions and collaborative events.
               </p>
               <p className="text-gray-300">
                 The {departmentInfo.name} department at TecHETC features a
                 series of challenging events designed to test students'
                 technical knowledge, creativity, and problem-solving
                 abilities. Our competitions are judged by faculty experts and
                 industry professionals.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div
                 className={`bg-surface p-6 border border-${color} rounded-lg pixel-corners`}
               >
                 <h3 className={`font-pixel text-lg text-${color} mb-4`}>
                   Participation Guidelines
                 </h3>
                 <ul className="space-y-3">
                   <li className="flex items-start">
                     <span
                       className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                     ></span>
                     <span>Registration is mandatory for all events</span>
                   </li>
                   <li className="flex items-start">
                     <span
                       className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                     ></span>
                     <span>Participants must carry valid ID proof</span>
                   </li>
                   <li className="flex items-start">
                     <span
                       className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                     ></span>
                     <span>Teams must adhere to the specified team size</span>
                   </li>
                   <li className="flex items-start">
                     <span
                       className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                     ></span>
                     <span>Event-specific rules must be followed</span>
                   </li>
                   <li className="flex items-start">
                     <span
                       className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                     ></span>
                     <span>Judges' decisions are final</span>
                   </li>
                 </ul>
               </div>

               <div
                 className={`bg-surface p-6 border border-${color} rounded-lg pixel-corners`}
               >
                 <h3 className={`font-pixel text-lg text-${color} mb-4`}>
                   Contact Information
                 </h3>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <span className={`mr-3 text-${color}`}>
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-5 w-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                         />
                       </svg>
                     </span>
                     <span>
                       {departmentInfo.shortName.toLowerCase()}@techetc.edu
                     </span>
                   </li>
                   <li className="flex items-start">
                     <span className={`mr-3 text-${color}`}>
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-5 w-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                         />
                       </svg>
                     </span>
                     <span>+91 9876543210</span>
                   </li>
                   <li className="flex items-start">
                     <span className={`mr-3 text-${color}`}>
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-5 w-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                         />
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                         />
                       </svg>
                     </span>
                     <span>
                       {departmentInfo.shortName} Department, Engineering
                       College Campus, Tech Avenue
                     </span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         )}
       </div>
     </div>
   </motion.div>
 );
};

export default DepartmentPage;