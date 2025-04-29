import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Check } from 'lucide-react';
import { useRegistration } from '../contexts/RegistrationContext';

interface Event {
  id: string;
  title: string;
  department: string;
  departmentName: string;
}

const RegistrationModal: React.FC = () => {
  const { isModalOpen, closeModal, selectedEvents, toggleEventSelection } = useRegistration();
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
  });

  const allEvents: Event[] = [
    { id: "hackathon", title: "Hackathon", department: "cse", departmentName: "CSE" },
    { id: "code-sprint", title: "Code Sprint", department: "cse", departmentName: "CSE" },
    { id: "circuit-design", title: "Circuit Challenge", department: "ece", departmentName: "ECE" },
    { id: "iot-challenge", title: "IoT Showcase", department: "ece", departmentName: "ECE" },
    { id: "robo-wars", title: "RoboWars", department: "me", departmentName: "ME" },
    { id: "cad-contest", title: "CAD Contest", department: "me", departmentName: "ME" },
    { id: "bridge-building", title: "Bridge Building", department: "ce", departmentName: "CE" },
    { id: "earthquake-proof", title: "Quake Proof", department: "ce", departmentName: "CE" },
    { id: "power-systems", title: "Power Systems Challenge", department: "ee", departmentName: "EE" },
    { id: "motor-design", title: "Motor Design Competition", department: "ee", departmentName: "EE" },
    { id: "energy-innovation", title: "Energy Innovation", department: "ee", departmentName: "EE" },
  ];

  const filteredEvents = allEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, events: selectedEvents });
    closeModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getDepartmentColor = (dept: string) => {
    switch(dept) {
      case 'cse': return 'neon-cse';
      case 'ece': return 'neon-ece';
      case 'me': return 'neon-me';
      case 'ce': return 'neon-ce';
      case 'ee': return 'neon-ee';
      default: return 'primary';
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface w-full max-w-2xl rounded-lg border-2 border-primary pixel-corners"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-pixel text-xl text-primary">Event Registration</h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:text-primary transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-primary rounded-md p-2 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-primary rounded-md p-2 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono mb-2">Phone No</label>
                    <input
                      type="number"
                      name="phoneNumber"  // changed
                      required
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-primary rounded-md p-2 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2">Department</label>
                    <select
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-primary rounded-md p-2 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Department</option>
                      <option value="cse">Computer Science</option>
                      <option value="ece">Electronics</option>
                      <option value="me">Mechanical</option>
                      <option value="ce">Civil</option>
                      <option value="ee">Electrical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-mono mb-2">Year</label>
                    <select
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-primary rounded-md p-2 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono mb-2">Select Events</label>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-background border border-primary rounded-md p-2 pl-10 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>

                  <div className="max-h-48 overflow-y-auto space-y-2 bg-background p-4 rounded-md border border-primary">
                    {filteredEvents.map((event) => (
                      <div
                        key={event.id}
                        onClick={() => toggleEventSelection(event.id)}
                        className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                          selectedEvents.includes(event.id)
                            ? `bg-${getDepartmentColor(event.department)} bg-opacity-20 border border-${getDepartmentColor(event.department)}`
                            : 'hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`text-${getDepartmentColor(event.department)} mr-2`}>
                            {event.departmentName}
                          </span>
                          <span>{event.title}</span>
                        </div>
                        {selectedEvents.includes(event.id) && (
                          <Check className={`h-5 w-5 text-${getDepartmentColor(event.department)}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors font-mono"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary bg-opacity-20 border border-primary rounded-md hover:bg-opacity-30 transition-colors font-mono text-primary"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal