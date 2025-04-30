import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface EventProps {
  id: string;
  title: string;
  department: "cse" | "ece" | "me" | "ce" | "ee" | "general" | "bsh";
  departmentName: string;
  description: string;
  entryFee: number;
  teamSize: number; // Changed from prize to teamSize
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

const EventCard = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDepartmentColorClasses = (dept) => {
    switch (dept) {
      case "cse":
        return {
          border: "border-neon-cse",
          bg: "bg-neon-cse",
          text: "text-neon-cse",
          shadow: "shadow-neon-cse",
        };
      case "ece":
        return {
          border: "border-neon-ece",
          bg: "bg-neon-ece",
          text: "text-neon-ece",
          shadow: "shadow-neon-ece",
        };
      case "me":
        return {
          border: "border-neon-me",
          bg: "bg-neon-me",
          text: "text-neon-me",
          shadow: "shadow-neon-me",
        };
      case "ce":
        return {
          border: "border-neon-ce",
          bg: "bg-neon-ce",
          text: "text-neon-ce",
          shadow: "shadow-neon-ce",
        };
      case "ee":
        return {
          border: "border-neon-ee",
          bg: "bg-neon-ee",
          text: "text-neon-ee",
          shadow: "shadow-neon-ee",
        };
      case "bsh":
        return {
          border: "border-neon-bsh",
          bg: "bg-neon-bsh",
          text: "text-neon-bsh",
          shadow: "shadow-neon-bsh",
        };
      case "general":
        return {
          border: "border-neon-general",
          bg: "bg-neon-general",
          text: "text-neon-general",
          shadow: "shadow-neon-general",
        };
      default:
        return {
          border: "border-primary",
          bg: "bg-primary",
          text: "text-primary",
          shadow: "shadow-primary",
        };
    }
  };

  const colorClasses = getDepartmentColorClasses(event.department);

  // Glitch animation variants
  const glitchVariants = {
    normal: {
      filter: "none",
      scale: 1,
      opacity: 0.7,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      opacity: 1,
      filter: "contrast(1.2) brightness(1.1)",
      transition: { duration: 0.3 },
    },
  };

  // Random glitch overlay effect
  const GlitchOverlay = ({ isActive }) => {
    return (
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isActive ? [0, 0.8, 0, 0.4, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          repeat: isActive ? Infinity : 0,
          repeatType: "loop",
          repeatDelay: 0.5,
          times: [0, 0.1, 0.3, 0.5, 0.6],
        }}
      >
        <div
          className={`absolute inset-0 ${colorClasses.bg} mix-blend-screen bg-opacity-50`}
        ></div>

        {/* Horizontal glitch lines */}
        <motion.div
          className="absolute h-1 bg-white w-full left-0"
          style={{ top: "30%" }}
          animate={{
            x: isActive ? ["-100%", "100%"] : "-100%",
            opacity: isActive ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.2,
            repeat: isActive ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 0.3,
          }}
        />

        <motion.div
          className="absolute h-1 bg-white w-3/4 right-0"
          style={{ top: "60%" }}
          animate={{
            x: isActive ? ["100%", "-100%"] : "100%",
            opacity: isActive ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.15,
            repeat: isActive ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 0.5,
          }}
        />

        {/* Digital noise */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/png;base64,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')",
            backgroundSize: "cover",
            opacity: isActive ? 0.05 : 0,
          }}
        />
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-surface border-2 ${colorClasses.border} rounded-lg overflow-hidden pixel-corners hover:scale-102 transition-all duration-300 h-full ${colorClasses.shadow} hover:shadow-lg`}
    >
      <div
        className={`p-4 ${colorClasses.bg} bg-opacity-10 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <span className="mr-2">{event.icon}</span>
          <h3 className={`font-pixel text-lg ${colorClasses.text}`}>
            {event.title}
          </h3>
        </div>
      </div>

      {/* Banner image container with hover effects */}
      {event.bannerImage && (
        <div
          className="w-full h-32 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={event.bannerImage}
            alt="Event Banner"
            className="w-full h-full object-cover"
            variants={glitchVariants}
            initial="normal"
            animate={isHovered ? "hover" : "normal"}
          />

          {/* Text overlay with department color */}
          {event.bannerText && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={`font-pixel ${colorClasses.text} text-xl px-4 py-2 bg-black bg-opacity-50`}
                animate={{
                  x: isHovered ? [0, -3, 5, 0, -2, 0] : 0,
                  opacity: isHovered ? [1, 0.8, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
              >
                {event.bannerText}
              </motion.div>
            </div>
          )}

          {/* Glitch overlay effect */}
          <GlitchOverlay isActive={isHovered} />

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(transparent 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)",
              backgroundSize: "100% 4px",
            }}
            animate={{
              backgroundPosition: isHovered ? ["0% 0%", "0% 100%"] : "0% 0%",
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0,
              repeatType: "loop",
            }}
          />

          {/* Edge glow effect */}
          <motion.div
            className={`absolute inset-0 pointer-events-none border-2 border-transparent`}
            animate={{
              boxShadow: isHovered
                ? [
                    `inset 0 0 10px ${colorClasses.text}`,
                    `inset 0 0 20px ${colorClasses.text}`,
                    `inset 0 0 10px ${colorClasses.text}`,
                  ]
                : "inset 0 0 0px transparent",
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse",
            }}
          />
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
            <span className="block text-gray-400">Team Size</span>
            <span className="font-mono text-white">
              {event.teamSize} {event.teamSize === 1 ? "person" : "people"}
            </span>
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
          to={`/departmentpage/${event.department}?event=${event.id}`}
          className={`flex items-center justify-center w-full py-2 border ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} hover:bg-opacity-20 transition-all rounded font-mono`}
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;
