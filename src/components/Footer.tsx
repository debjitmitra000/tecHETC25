import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface pt-12 pb-6 border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-pixel text-xl mb-4">
              <span className="text-gradient">TECHetc</span>
              {/* <span className="text-secondary">H</span>
              <span className="text-accent">ETC</span> */}
            </h3>
            <p className="text-gray-400 mb-4">
              The ultimate college tech fest celebrating innovation across all engineering disciplines.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-neon-ece transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-mono text-lg mb-4 text-neon-cse">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-mono text-lg mb-4 text-neon-ece">Departments</h4>
            <ul className="space-y-2">
              <li><Link to="/department/general" className="text-gray-400 hover:text-neon-general transition-colors">General</Link></li>
              <li><Link to="/department/cse" className="text-gray-400 hover:text-neon-cse transition-colors">Computer Science</Link></li>
              <li><Link to="/department/ece" className="text-gray-400 hover:text-neon-ece transition-colors">Electronics</Link></li>
              <li><Link to="/department/me" className="text-gray-400 hover:text-neon-me transition-colors">Mechanical</Link></li>
              <li><Link to="/department/ce" className="text-gray-400 hover:text-neon-ce transition-colors">Civil</Link></li>
              <li><Link to="/department/ee" className="text-gray-400 hover:text-neon-ee transition-colors">Electrical</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-mono text-lg mb-4 text-neon-me">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@techetc.edu" className="hover:text-white transition-colors">mail@hetc.ac.in</a>
              </li>
              <li className="text-gray-400 mt-4">
                Vivekananda Rd,  <br />
                Pipulpati Post, Chinsurah,<br />
                West Bengal 712103
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TecHETC. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center">
            Made with <Heart size={12} className="mx-1 text-secondary" /> for all tech enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer