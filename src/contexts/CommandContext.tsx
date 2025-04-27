import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CommandContextType {
  isConsoleOpen: boolean;
  toggleConsole: () => void;
  closeConsole: () => void;
  commandHistory: string[];
  outputHistory: string[];
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  executeCommand: () => void;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

interface CommandProviderProps {
  children: ReactNode;
}

export const CommandProvider: React.FC<CommandProviderProps> = ({ children }) => {
  const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputHistory, setOutputHistory] = useState<string[]>(['Welcome to TecHETC Terminal. Type /help for available commands.']);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || (e.key === 'c' && e.ctrlKey)) {
        e.preventDefault();
        toggleConsole();
      } else if (e.key === 'Escape' && isConsoleOpen) {
        closeConsole();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsoleOpen]);

  const toggleConsole = () => {
    setIsConsoleOpen(!isConsoleOpen);
  };

  const closeConsole = () => {
    setIsConsoleOpen(false);
  };

  const executeCommand = () => {
    if (!currentCommand.trim()) return;

    const newCommandHistory = [...commandHistory, currentCommand];
    setCommandHistory(newCommandHistory);

    // Process command
    const output = processCommand(currentCommand);
    setOutputHistory([...outputHistory, `> ${currentCommand}`, ...output]);
    
    setCurrentCommand('');
  };

  const processCommand = (cmd: string): string[] => {
    const command = cmd.trim().toLowerCase();

    if (command === '/help') {
      return [
        'Available commands:',
        '/help - Show this help message',
        '/goto [home|events|schedule|gallery|about|faq|department/cse|department/ece|department/me|department/ce] - Navigate to a page',
        '/events - List all events',
        '/schedule - Show event schedule',
        '/departments - List all departments',
        '/theme - Information about tech fest theme',
        '/clear - Clear console output',
      ];
    } else if (command.startsWith('/goto ')) {
      const path = command.split(' ')[1];
      if (path) {
        setTimeout(() => {
          navigate(`/${path}`);
          closeConsole();
        }, 500);
        return [`Navigating to ${path}...`];
      }
      return ['Invalid path. Use /help to see available paths.'];
    } else if (command === '/events') {
      return [
        'Events:',
        '- Hackathon (CSE): 24-hour coding competition',
        '- Circuit Design (ECE): Build innovative circuits',
        '- RoboWars (ME): Robot fighting competition',
        '- Bridge Building (CE): Structural design challenge',
        '- Code Sprint (CSE): Fast-paced coding challenge',
        '- IoT Challenge (ECE): Internet of Things project competition',
        '- CAD Contest (ME): 3D design contest',
        '- Earthquake Resistant Structures (CE): Stability competition',
        'Use /goto events for more details',
      ];
    } else if (command === '/schedule') {
      return [
        'Schedule:',
        'Day 1:',
        '09:00 - Opening Ceremony',
        '10:00 - Hackathon & Circuit Design Begin',
        '14:00 - RoboWars Preliminary Round',
        '16:00 - Bridge Building Competition',
        'Day 2:',
        '09:00 - Code Sprint',
        '11:00 - IoT Challenge Showcase',
        '14:00 - CAD Contest Judging',
        '16:00 - RoboWars Finals',
        '18:00 - Awards Ceremony',
        'Use /goto schedule for detailed timeline',
      ];
    } else if (command === '/departments') {
      return [
        'Departments:',
        '- CSE (Computer Science & Engineering)',
        '- ECE (Electronics & Communication Engineering)',
        '- ME (Mechanical Engineering)',
        '- CE (Civil Engineering)',
        'Use /goto department/[dept-code] to view department pages',
      ];
    } else if (command === '/theme') {
      return [
        'TecHETC Theme 2025:',
        'Retro Genesis: Where 8-bit Meets Innovation',
        'Celebrating the blend of nostalgic computing with',
        'cutting-edge technology. Each department showcases',
        'how past innovations influence future developments.',
      ];
    } else if (command === '/clear') {
      setTimeout(() => {
        setOutputHistory(['Console cleared. Type /help for available commands.']);
      }, 100);
      return [];
    } else if (command.startsWith('/')) {
      return [`Unknown command: ${command}. Type /help for available commands.`];
    } else {
      return [`Type commands starting with / (e.g. /help)`];
    }
  };

  return (
    <CommandContext.Provider 
      value={{
        isConsoleOpen,
        toggleConsole,
        closeConsole,
        commandHistory,
        outputHistory,
        currentCommand,
        setCurrentCommand,
        executeCommand,
      }}
    >
      {children}
    </CommandContext.Provider>
  );
};

export const useCommand = (): CommandContextType => {
  const context = useContext(CommandContext);
  if (context === undefined) {
    throw new Error('useCommand must be used within a CommandProvider');
  }
  return context;
};