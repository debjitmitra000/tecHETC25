import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const grules = [
    "The College identity card must be produced at the time of registration by every participant.",
    "The decision of the jury will be final and binding for all events.",
    "Any or all of the rules are subject to change at any time.",
    "The registered participants will receive a participation certificate, welcome kit and refreshments.",
    "Participants are responsible for their projects and related accessories as mentioned in that event's rules.",
    "Students from different colleges may mix and match to form a team for the group events. However, in the HUNT FOR FUN event, at least one group member should be from HETC.",
    "Using unfair means like approach to judges etc. will lead to disqualification.",
    "No obscene/vulgar statements/gestures are tolerable under any circumstances and will undoubtedly lead to the disqualification of the entire team.",
    "Any damage to the institute property or any other indiscipline is not tolerable. Strict disciplinary action will be initiated against the defaulter(s) as per the institutes' rules.",
    "A particular event will be cancelled if the number of participating candidates/groups is less than five.",
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

  return (
    <section id="about" className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-gradient"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          General Rules & Guidelines
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="space-y-2">
              {grules.map((rule, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={textItemVariants}
                >
                  <BadgeCheck
                    className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white">{rule}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;