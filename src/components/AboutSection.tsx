import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Trophy } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          About <span className="text-neon-cse">Tec</span><span className="text-neon-ece">H</span><span className="text-neon-me">ETC</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6 text-gray-300">
              TecHETC is our annual technology festival that celebrates innovation, creativity, and technical excellence across all engineering disciplines.
            </p>
            <p className="mb-6 text-gray-400">
              Founded in 2015, our tech fest has grown to become one of the most anticipated events in the academic calendar, attracting participants from colleges across the region.
            </p>
            <p className="mb-6 text-gray-400">
              This year's theme "<span className="font-pixel text-neon-cse">Retro Genesis</span>" bridges the gap between classic 8-bit computing and cutting-edge technology, showcasing how far we've come while honoring the foundations of digital innovation.
            </p>
            <p className="text-gray-400">
              Each department contributes unique events that highlight their specific domains while encouraging cross-disciplinary collaboration and learning.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 border border-primary rounded-lg pixel-corners"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-pixel text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;