import React, {useEffect} from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import ScheduleSection from '../components/ScheduleSection';
import GallerySection from '../components/GallerySection';
import FaqSection from '../components/FaqSection';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutSection />
      <EventsSection />
      <ScheduleSection />
      <GallerySection />
      <FaqSection />
    </motion.div>
  );
};

export default HomePage;