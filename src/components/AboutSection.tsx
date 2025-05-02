import FuturisticNeonCountdown from './CountDown';
import React from 'react';
import { color, motion } from 'framer-motion';
import { Rocket, Target, Users, Trophy, BadgeCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-neon-cse" />,
      title: "Innovation Hub",
      description: "Fostering breakthrough ideas across engineering disciplines through interactive workshops and challenges."
    },
    {
      icon: <Target className="h-8 w-8 text-neon-ece" />,
      title: "Skill Enhancement",
      description: "Hone technical skills with hands-on competitions designed by industry experts and faculty."
    },
    {
      icon: <Users className="h-8 w-8 text-neon-me" />,
      title: "Networking",
      description: "Connect with peers, mentors, and industry professionals to build lasting relationships."
    },
    {
      icon: <Trophy className="h-8 w-8 text-neon-ce" />,
      title: "Recognition",
      description: "Win prizes and gain recognition for your technical prowess and innovative solutions."
    }
  ];
  const grules= [
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

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const textItemVariants = {
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

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const featureItemVariants = {
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

  return (
    <section id="about" className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
      <motion.div
          className="  mb-10"
 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
        {/* {<FuturisticNeonCountdown targetDate='2025-04-15T00:00:00'/>} */}
        {<FuturisticNeonCountdown />}
          </motion.div>
        <motion.h2 
          className="section-title text-gradient"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About TECHetc 2k25
          {/* <motion.span 
            className="text-neon-cse"
            initial={{ textShadow: "0 0 0px #ff0055" }}
            whileInView={{ textShadow: "0 0 10px #ff0055" }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >Tec</motion.span>
          <motion.span 
            className="text-neon-ece"
            initial={{ textShadow: "0 0 0px #00efff" }}
            whileInView={{ textShadow: "0 0 10px #00efff" }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          >H</motion.span>
          <motion.span 
            className="text-neon-me"
            initial={{ textShadow: "0 0 0px #00ff8a" }}
            whileInView={{ textShadow: "0 0 10px #00ff8a" }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
          >ETC</motion.span> */}
        </motion.h2>  
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
          className="underline text-gradient-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6"
          variants={textItemVariants}
        >General Rules & Guidelines:</motion.h2>

            <motion.p 
              className="text-lg mb-6 text-white"
              variants={textItemVariants}
            >
              TECHetc is our annual technology festival that celebrates innovation, creativity, and technical excellence across all engineering disciplines.
            </motion.p>
            <ul className="space-y-2">
              {grules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <BadgeCheck
                    className={`h-5 w-5 mr-2 text-${color} mt-0.5 flex-shrink-0`}
                  />
                  <span className="text-white">{rule}</span>
                </li>
              ))}
            </ul>
            {/* <motion.p 
              className="mb-6 text-gray-400"
              variants={textItemVariants}
            >
              Founded in 2015, our tech fest has grown to become one of the most anticipated events in the academic calendar, attracting participants from colleges across the region.
            </motion.p>
            <motion.p 
              className="mb-6 text-gray-400"
              variants={textItemVariants}
            >
              This year's theme "<motion.span 
                className="font-pixel text-neon-cse"
                animate={{ 
                  textShadow: ["0 0 4px #ff0055", "0 0 10px #ff0055", "0 0 4px #ff0055"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >Retro Genesis</motion.span>" bridges the gap between classic 8-bit computing and cutting-edge technology, showcasing how far we've come while honoring the foundations of digital innovation.
            </motion.p>
            <motion.p 
              className="text-gray-400"
              variants={textItemVariants}
            >
              Each department contributes unique events that highlight their specific domains while encouraging cross-disciplinary collaboration and learning.
            </motion.p>*/}
          </motion.div>
           
          <motion.div 
            className="hidden sm:grid sm:grid-cols-2 gap-6"
            variants={featureContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(120, 120, 255, 0.3)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="bg-background p-6 border border-primary rounded-lg pixel-corners"
              >
                <motion.div 
                  className="mb-4"
                  // animate={{ 
                  //   rotateZ: [0, 10, -10, 0],
                  //   scale: [1, 1.1, 1]
                  // }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: index
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-pixel text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;