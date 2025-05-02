import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Award, Calendar, Users, MapPin } from 'lucide-react';
import Countdown from './CountDown';

const AboutSection = () => {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const rulesContainerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const ruleItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: index => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3,
        delay: 0.1 + (index * 0.05),
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        

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
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          TECHetc is our annual technology festival that celebrates innovation, creativity, and technical excellence across all engineering disciplines. Join us for two days of excitement, competition, and collaboration as we showcase the best of engineering talent from across the country.
        </motion.p>


        {/* Timer with simplified animation */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Countdown />
        </motion.div>
        
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
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-background p-4 border border-primary rounded-lg pixel-corners flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <h3 className="font-pixel text-2xl mb-1 text-white">{stat.value}</h3>
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
            variants={titleVariants}
          >
            General Rules & Guidelines
          </motion.h2>

          <div className="space-y-4">
            {grules.map((rule, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                variants={ruleItemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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