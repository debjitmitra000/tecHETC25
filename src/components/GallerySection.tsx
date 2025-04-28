import React from 'react';
import { motion } from 'framer-motion';
import G23 from '../picture/G23.jpg';
import G24 from '../picture/G24.jpg';
import G25 from '../picture/G25.jpg';
import G26 from '../picture/G26.jpg';
import G27 from '../picture/G27.jpg';
import G28 from '../picture/G28.jpg';
import G29 from '../picture/G29.jpg';
import G30 from '../picture/G30.jpg';

const GallerySection: React.FC = () => {
  const galleryImages = [
    { src: G23, alt: "Software demo session for hackathon winners", category: "cse", year: "2022" },
    { src: G24, alt: "Students gaming and coding simultaneously", category: "cse", year: "2023" },
    { src: G25, alt: "Hackathon prize distribution", category: "cse", year: "2023" },
    
    { src: G26, alt: "College fest decorations with department banners", category: "general", year: "2023" },
    { src: G27, alt: "Creative project presentations", category: "general", year: "2022" },
    { src: G28, alt: "Project exhibition at tech event", category: "general", year: "2023" },
    
    { src: G29, alt: "Late night coding challenge", category: "cse", year: "2022" },
    { src: G30, alt: "Campus view during event inauguration", category: "general", year: "2023" }
  ];

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
    <section id="gallery" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Event Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg border-2 border-${getCategoryColor(image.category)} pixel-corners`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-mono">{image.alt}</p>
                  <span className={`text-${getCategoryColor(image.category)} text-sm uppercase font-pixel`}>
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;