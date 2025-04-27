import React from 'react';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Hackathon participants",
      category: "cse"
    },
    {
      src: "https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Circuit building competition",
      category: "ece"
    },
    {
      src: "https://images.pexels.com/photos/3846033/pexels-photo-3846033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Robotics workshop",
      category: "me"
    },
    {
      src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Bridge model competition",
      category: "ce"
    },
    {
      src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Tech presentation",
      category: "cse"
    },
    {
      src: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "IoT demonstration",
      category: "ece"
    },
    {
      src: "https://images.pexels.com/photos/2531353/pexels-photo-2531353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "3D printing showcase",
      category: "me"
    },
    {
      src: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Structural design exhibition",
      category: "ce"
    }
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