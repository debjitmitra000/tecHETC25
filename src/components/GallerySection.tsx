import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import G8 from '../picture/G8.jpg';
import G23 from '../picture/G23.jpg';
import G24 from '../picture/G24.jpg';
import G25 from '../picture/G25.jpg';
import G26 from '../picture/G26.jpg';
import G27 from '../picture/G27.jpg';
import G14 from '../picture/G14.jpg';
import G29 from '../picture/G29.jpg';
import G30 from '../picture/G30.jpg';

const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const galleryImages = [
    { src: G23, alt: "Gaming Competition", category: "CSE", year: "2023" },
    { src: G24, alt: "Gaming Competition", category: "CSE", year: "2023" },
    { src: G25, alt: "Green Campus", category: "General", year: "2023" },
    { src: G26, alt: "College fest decorations", category: "General", year: "2023" },
    { src: G27, alt: "Carrom Competition", category: "General", year: "2023" },
    { src: G8, alt: "Robozigger Track", category: "ME", year: "2023" },
    { src: G14, alt: "Quiz Competition", category: "General", year: "2023" },
    { src: G30, alt: "Campus view during event inauguration", category: "General", year: "2023" }
  ];

  // Get only 4 images for mobile view
  const visibleImages = isMobile ? galleryImages.slice(0, 4) : galleryImages;

  const getCategoryColor = (category) => {
    // Normalize category to lowercase for consistent matching
    const normalizedCategory = category.toLowerCase();
    
    switch(normalizedCategory) {
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
        <h2 className="section-title text-gradient">Event Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => (
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
                    {image.category} - {image.year}
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