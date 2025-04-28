import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Users, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const stats = [
    { value: '8', label: 'Events', icon: <Award className="h-8 w-8 text-neon-cse" /> },
    { value: '2', label: 'Days', icon: <Calendar className="h-8 w-8 text-neon-ece" /> },
    { value: '500+', label: 'Participants', icon: <Users className="h-8 w-8 text-neon-me" /> },
    { value: '20+', label: 'Colleges', icon: <MapPin className="h-8 w-8 text-neon-ce" /> }
  ];

  const timeline = [
    { year: '2015', title: 'First Edition', description: 'TecHETC was born with just 3 events and 100 participants.' },
    { year: '2018', title: 'Regional Recognition', description: 'Expanded to include participants from neighboring colleges.' },
    { year: '2020', title: 'Virtual Shift', description: 'Successfully transitioned to a fully online format during the pandemic.' },
    { year: '2023', title: 'Record Participation', description: 'Celebrated with over 400 participants from 15+ colleges.' },
    { year: '2025', title: 'Retro Genesis', description: 'Current edition with the 8-bit retro theme bridging past and future.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title">About TecHETC</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-center text-gray-300 mb-8">
            The ultimate celebration of technology and innovation across engineering disciplines.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface p-6 rounded-lg text-center border border-primary pixel-corners"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="font-pixel text-3xl mb-2">{stat.value}</div>
                <div className="text-gray-400 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none mb-16">
            <h2 className="font-pixel text-2xl mb-4 text-neon-cse">Our Story</h2>
            <p className="mb-4">
              TecHETC was first conceived in 2015 by a group of passionate engineering students who wanted to create a platform for showcasing technical talent beyond the classroom. What began as a small departmental event has grown into one of the region's most anticipated technical festivals.
            </p>
            <p className="mb-4">
              Each year, we choose a theme that reflects current technological trends while encouraging participants to think innovatively. This year's "Retro Genesis" theme celebrates the foundations of computing while looking toward the cutting-edge future of technology.
            </p>
            <p>
              The festival is organized by students for students, with guidance from faculty advisors and industry professionals. This collaboration ensures that events are both academically enriching and aligned with industry practices.
            </p>
            
            <h2 className="font-pixel text-2xl mt-12 mb-4 text-neon-ece">Our Mission</h2>
            <ul className="space-y-2">
              <li>To foster technical creativity and innovation among engineering students</li>
              <li>To provide a platform for students to showcase their technical expertise</li>
              <li>To encourage cross-disciplinary collaboration between different engineering branches</li>
              <li>To bridge the gap between academic learning and practical implementation</li>
              <li>To connect students with industry professionals and potential employers</li>
            </ul>
          </div>
          
          <div className="mb-16">
            <h2 className="font-pixel text-2xl mb-8 text-neon-me text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-cse via-neon-ece to-neon-me"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative mb-12 ${index % 2 === 0 ? 'text-right mr-auto pr-8 pl-4' : 'text-left ml-auto pl-8 pr-4'}`}
                  style={{ width: 'calc(50% - 1px)' }}
                >
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} h-5 w-5 rounded-full bg-background border-2 border-primary transform translate-x-${index % 2 === 0 ? '1/2' : '-1/2'}`}></div>
                  <div className="font-pixel text-primary mb-2">{item.year}</div>
                  <h3 className="font-mono text-xl mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-surface p-8 rounded-lg border-2 border-neon-ce pixel-corners">
            <h2 className="font-pixel text-2xl mb-4 text-neon-ce text-center">Get Involved</h2>
            <p className="text-center mb-6">
              There are many ways to be a part of TecHETC beyond participating in competitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="font-mono text-lg mb-2">Volunteer</h3>
                <p className="text-sm text-gray-400">Join our organizing team and help make the event a success</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-mono text-lg mb-2">Sponsor</h3>
                <p className="text-sm text-gray-400">Support innovation and connect with talented students</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-mono text-lg mb-2">Mentor</h3>
                <p className="text-sm text-gray-400">Guide participants with your expertise and experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;