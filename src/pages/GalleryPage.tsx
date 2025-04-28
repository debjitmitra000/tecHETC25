import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import G1 from '../picture/G1.jpg';
import G2 from '../picture/G2.jpg';
import G3 from '../picture/G3.jpg';
import G4 from '../picture/G4.jpg';
import G6 from '../picture/G6.jpg';
import G7 from '../picture/G7.jpg';
import G8 from '../picture/G8.jpg';
import G9 from '../picture/G9.jpg';
import G10 from '../picture/G10.jpg';
import G11 from '../picture/G11.jpg';
import G13 from '../picture/G13.jpg';
import G14 from '../picture/G14.jpg';
import G16 from '../picture/G16.jpg';
import G17 from '../picture/G17.jpg';
import G18 from '../picture/G18.jpg';
import G19 from '../picture/G19.jpg';
import G20 from '../picture/G20.jpg';
import G22 from '../picture/G22.jpg';
import G23 from '../picture/G23.jpg';
import G24 from '../picture/G24.jpg';
import G25 from '../picture/G25.jpg';
import G26 from '../picture/G26.jpg';
import G27 from '../picture/G27.jpg';
import G28 from '../picture/G28.jpg';
import G29 from '../picture/G29.jpg';
import G30 from '../picture/G30.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  year: string;
}

const GalleryPage: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const galleryImages: GalleryImage[] = [
    { src: G1, alt: "Hackathon participants coding through the night", category: "cse", year: "2023" },
    { src: G2, alt: "Tech presentation on AI innovations", category: "cse", year: "2023" },
    { src: G3, alt: "Code sprint competition in progress", category: "cse", year: "2022" },
    
    { src: G4, alt: "Circuit building competition team at work", category: "ece", year: "2023" },
    { src: G6, alt: "IoT demonstration with smart home devices", category: "ece", year: "2022" },
    { src: G7, alt: "Students working on embedded systems project", category: "ece", year: "2023" },
    
    { src: G8, alt: "Robotics workshop with students assembling parts", category: "me", year: "2023" },
    { src: G9, alt: "3D printing showcase with intricate models", category: "me", year: "2023" },
    { src: G10, alt: "RoboWars arena during an exciting match", category: "me", year: "2022" },
    
    { src: G11, alt: "Bridge model competition with students testing designs", category: "ce", year: "2023" },
    { src: G13, alt: "Structural design exhibition with scale models", category: "ce", year: "2022" },
    { src: G14, alt: "Workshop on sustainable building practices", category: "ce", year: "2022" },
    
    { src: G16, alt: "Mechanical CAD design contest entries", category: "me", year: "2022" },
    { src: G17, alt: "Showcase of mechatronics projects", category: "me", year: "2023" },
    { src: G18, alt: "Advanced manufacturing workshop", category: "me", year: "2023" },
    
    { src: G19, alt: "IoT car race event with autonomous vehicles", category: "ece", year: "2023" },
    { src: G20, alt: "Students presenting final year IoT projects", category: "ece", year: "2022" },
    { src: G22, alt: "Competitive coding finals", category: "cse", year: "2023" },
    
    { src: G23, alt: "Software demo session for hackathon winners", category: "cse", year: "2022" },
    { src: G24, alt: "Students gaming and coding simultaneously", category: "cse", year: "2023" },
    { src: G25, alt: "Hackathon prize distribution", category: "cse", year: "2023" },
    
    { src: G26, alt: "College fest decorations with department banners", category: "general", year: "2023" },
    { src: G27, alt: "Creative project presentations", category: "general", year: "2022" },
    { src: G28, alt: "Project exhibition at tech event", category: "general", year: "2023" },
    
    { src: G29, alt: "Late night coding challenge", category: "cse", year: "2022" },
    { src: G30, alt: "Campus view during event inauguration", category: "general", year: "2023" },

  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'cse': return 'Computer Science';
      case 'ece': return 'Electronics';
      case 'me': return 'Mechanical';
      case 'ce': return 'Civil';
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'cse': return 'neon-cse';
      case 'ece': return 'neon-ece';
      case 'me': return 'neon-me';
      case 'ce': return 'neon-ce';
      default: return 'primary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title">Event Gallery</h1>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md font-mono ${filter === 'all' ? 'bg-primary text-white' : 'bg-surface text-primary border border-primary'}`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('cse')}
              className={`px-4 py-2 rounded-md font-mono ${filter === 'cse' ? 'bg-neon-cse bg-opacity-20 text-neon-cse border border-neon-cse' : 'bg-surface text-gray-300 border border-gray-700'}`}
            >
              Computer Science
            </button>
            <button
              onClick={() => setFilter('ece')}
              className={`px-4 py-2 rounded-md font-mono ${filter === 'ece' ? 'bg-neon-ece bg-opacity-20 text-neon-ece border border-neon-ece' : 'bg-surface text-gray-300 border border-gray-700'}`}
            >
              Electronics
            </button>
            <button
              onClick={() => setFilter('me')}
              className={`px-4 py-2 rounded-md font-mono ${filter === 'me' ? 'bg-neon-me bg-opacity-20 text-neon-me border border-neon-me' : 'bg-surface text-gray-300 border border-gray-700'}`}
            >
              Mechanical
            </button>
            <button
              onClick={() => setFilter('ce')}
              className={`px-4 py-2 rounded-md font-mono ${filter === 'ce' ? 'bg-neon-ce bg-opacity-20 text-neon-ce border border-neon-ce' : 'bg-surface text-gray-300 border border-gray-700'}`}
            >
              Civil
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className={`relative group overflow-hidden rounded-lg border-2 border-${getCategoryColor(image.category)} cursor-pointer pixel-corners`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-mono truncate">{image.alt}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className={`text-${getCategoryColor(image.category)} text-sm uppercase font-pixel`}>
                      {getCategoryName(image.category)}
                    </span>
                    <span className="text-gray-400 text-xs">{image.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl max-h-[80vh] relative pixel-corners"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <p className="text-white font-mono mb-1">{selectedImage.alt}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-${getCategoryColor(selectedImage.category)} text-sm uppercase font-pixel`}>
                      {getCategoryName(selectedImage.category)}
                    </span>
                    <span className="text-gray-400 text-xs">{selectedImage.year}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GalleryPage;