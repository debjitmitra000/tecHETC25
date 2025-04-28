import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RegistrationContextType {
  isModalOpen: boolean;
  selectedEvents: string[];
  setSelectedEvents: React.Dispatch<React.SetStateAction<string[]>>;
  openModal: (eventId?: string) => void;
  closeModal: () => void;
  toggleEventSelection: (eventId: string) => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const openModal = (eventId?: string) => {
    setIsModalOpen(true);
    if (eventId && !selectedEvents.includes(eventId)) {
      setSelectedEvents([...selectedEvents, eventId]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvents([]);
  };

  const toggleEventSelection = (eventId: string) => {
    setSelectedEvents(prev => 
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <RegistrationContext.Provider 
      value={{
        isModalOpen,
        selectedEvents,
        openModal,
        setSelectedEvents,
        closeModal,
        toggleEventSelection,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = (): RegistrationContextType => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};