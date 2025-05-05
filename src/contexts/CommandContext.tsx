import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAudio } from './AudioContext';
interface CommandContextType {
  isConsoleOpen: boolean;
 
  toggleConsole: () => void;
  closeConsole: () => void;
  commandHistory: string[];
  outputHistory: string[];
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  executeCommand: () => void;
  isThemeActive: boolean;
  setIsThemeActive: (isThemeActive: boolean)=> void;

}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

interface CommandProviderProps {
  children: ReactNode;
}

export const CommandProvider: React.FC<CommandProviderProps> = ({ children }) => {
  const [isThemeActive, setIsThemeActive] = useState<boolean>(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputHistory, setOutputHistory] = useState<string[]>(['Welcome to TecHETC Terminal. Type /help for available commands.']);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const navigate = useNavigate();
  const {isMuted, toggleMute} = useAudio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || (e.key === 'c' && e.ctrlKey)) {
        e.preventDefault();
        toggleConsole();
      } else if (e.key === 'Escape' && isConsoleOpen) {
        setIsThemeActive(false);
        closeConsole();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsoleOpen]);

  const toggleConsole = () => {
    if(!isConsoleOpen)
      setIsThemeActive(false);
    setIsConsoleOpen(!isConsoleOpen);
  };

  const closeConsole = () => {
    setIsThemeActive(false);
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
        '/goto [home|events|schedule|gallery|about|faq|department/cse|department/ece|department/me|department/ce|department/ee|department/bsh] - Navigate to a page',
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
          '- SUDOKU (BSH): Challenge your logical thinking in this timed number puzzle event.',
          '- CODE–2–DUO (CSE): Pair up and compete in this coding challenge designed for speed and logic.',
          '- INSTANT CIRCUIT MAKING (EE): Quick-fire circuit building under pressure using provided components.',
          '- ROBO SOCCER (ECE): Program and control your bots to score goals and defeat your opponents.',
          '- BRIDGE THE GAP (CE): Design and build model bridges to test structural strength and creativity.',
          '- CADMANIA (ME): Showcase your design and drafting skills using CAD software.',
          '- UI–UX Design (CSE): Design modern and user-friendly interfaces with top-notch UX principles.',
          '- HUNT FOR FUN (BSH): A campus-wide treasure hunt with fun clues and exciting challenges.',
          '- LINE FOLLOWER ROBOT (ECE): Build a robot that can smartly follow a line across complex paths.',
          '- ELECTROMAT (EE): Hands-on electromagnetism and MATLAB-based coding competition.',
          '- INSTA-PLAN (CE): Create quick architectural plans under real-world constraints.',
          '- BGMI (CSE): Battle in the ultimate mobile battle royale tournament.',
          '- QUIZZARD (GENERAL): Test your general knowledge in this fast-paced quiz battle.',
          '- ELECTROTECH EXPLORATION (ECE): Dive into exciting electronics experiments and innovations.',
          '- MODEL DISPLAY (GENERAL): Showcase creative models and prototypes across engineering domains.',
          'Use /goto events for more details',
        ];
        
    } else if (command === '/schedule') {
      return [
        'Schedule:',
        'Day 1:',
        '10:00 AM - 10:30 AM: Opening Ceremony (College Premises)',
        '10:30 AM: Bridge The Gap (Academic Building - A-201, A-202, A-203, A-204)',
        '10:30 AM: Electrotech Exploration (Academic Building - A-209)',
        '10:30 AM: Model Display (R C Paul Memorial Auditorium)',
        '11:00 AM: Code - 2 - Duo (Computer Lab 2 & 3)',
        '11:30 AM: Quizard (Reading Room & Seminar Hall)',
        '12:00 PM: Instant Circuit Making (Academic Building - Power System Lab)',
        '02:30 PM: Robo Soccer (Academic Building - A-209)',
        '02:30 PM: Electromat (Admin Building - Control Lab)',
        '03:30 PM: Sudoku (Reading Room)',
        'Day 2:',
        '10:00 AM: Insta-Plan (Academic Building - A-206, A-208)',
        '10:45 AM: Bridge The Gap (Testing) (Workshop)',
        '11:00 AM: Line Follower Robot (Academic Building - A-209)',
        '11:30 AM: BGMI (Computer Lab 2 & 3)',
        '11:30 AM: CADMANIA (NE Building AutoCAD Lab)',
        '12:00 PM: UI/UX Design (Computer Lab 2 & 3)',
        '12:30 PM: Hunt For Fun (R C Paul Memorial Auditorium & A-105)',
        '04:30 PM: Prize Distribution Ceremony (R C Paul Memorial Auditorium)',
        'Use /goto schedule for detailed timeline'
      ];
      
    } else if (command === '/departments') {
      return [
        'Departments:',
        '- CSE (Computer Science & Engineering)',
        '- ECE (Electronics & Communication Engineering)',
        '- ME (Mechanical Engineering)',
        '- CE (Civil Engineering)',
        '- EE (Electrical Engineering)',
        '- BSH (Basic Science and Humanities)',
        
        'Use /goto department/[dept-code] to view department pages',
      ];
    } else if (command === '/theme') {
      if(isMuted)
          toggleMute();

      setIsThemeActive(true);
      return [
          "TecHETC Theme 2025:",
          "Retro Genesis — Where 8-bit Meets Innovation",
          "Get ready for our biggest tech fest yet!",
          "Celebrating the fusion of nostalgic computing with",
          "modern-day breakthroughs, showcasing how classic",
          "innovations continue to inspire the future of technology."
        
        
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
        isThemeActive,
        setIsThemeActive
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