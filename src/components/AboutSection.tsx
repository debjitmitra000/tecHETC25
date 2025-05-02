import FuturisticNeonCountdown from './CountDown';
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Award, Calendar, Users, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '15', label: 'Events', icon: <Award className="h-10 w-10 text-neon-cse" /> },
    { value: '2', label: 'Days', icon: <Calendar className="h-10 w-10 text-neon-ece" /> },
    { value: '500+', label: 'Participants', icon: <Users className="h-10 w-10 text-neon-me" /> },
    { value: '30+', label: 'Colleges', icon: <MapPin className="h-10 w-10 text-neon-ce" /> }
  ];

  const grules = [
    "The College identity card must be produced at the time of registration by every paryicipants.",
    "The decision of the jury will be final and binding for all events.",
    "Any or all of the rules are subject to change at any time.",
    "The registered participants will receive a participation certificate, welcome kit and refreshments.",
    "Participants are responsible for their projects and related accessories as mentioned in that event's rules.",
    "Students from different colleges may mix and match to form a team for the group events. However, in the HUNT FOR FUN event, at least one group member should be from HETC.",
    "Using unfair means like approach to judges etc. will lead to disqualification.",
    "No obscene/vulgar statements/gestures are tolerable under any circumstances and will undoubtedly lead to the disqualification of the entire team.",
    "Any damage to the institute property or any other indiscipline is not tolerable. Strict disciplinary action will be initiated against the defaulter(s) as per the institutes' rules.",
    "A particular event will be cancelled if the number of participating candidates/ groups is less than five.",
    "The organising committee will not provide T.A. and accommodation facilities."
  ];

  // Animation variants
  const timerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      } 
    }
  };

  const introTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      } 
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const rulesContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.6,
      }
    }
  };

  const ruleItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Timer with entrance animation */}
        <motion.div
          className="mb-16"
          variants={timerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FuturisticNeonCountdown />
        </motion.div>

        {/* Section title */}
        <motion.h2 
          className="section-title text-gradient mb-6"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About TECHetc 2k25
        </motion.h2>  
        
        {/* About paragraph - Left aligned */}
        <motion.p 
          className="text-lg text-white mb-16"
          variants={introTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          TECHetc is our annual technology festival that celebrates innovation, creativity, and technical excellence across all engineering disciplines. Join us for two days of excitement, competition, and collaboration as we showcase the best of engineering talent from across the country.
        </motion.p>
        
        {/* Stats - two per row on small screens, four on large */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsItemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(120, 120, 255, 0.3)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="bg-background p-4 border border-primary rounded-lg pixel-corners flex flex-col items-center text-center"
            >
              <motion.div 
                className="mb-4"
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.3
                }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="font-pixel text-2xl mb-1 text-gradient">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Rules section */}
        <motion.div
          variants={rulesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-background p-8 border border-primary rounded-lg pixel-corners"
        >
          <motion.h2 
            className="underline text-gradient-2 text-2xl sm:text-3xl md:text-4xl mb-8"
            variants={ruleItemVariants}
          >
            General Rules & Guidelines
          </motion.h2>

          <div className="space-y-4">
            {grules.map((rule, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                variants={ruleItemVariants}
              >
                <BadgeCheck
                  className="h-6 w-6 mr-3 text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-white">{rule}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;