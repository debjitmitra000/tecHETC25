import React, { useRef, useEffect } from 'react';
import { useCommand } from '../contexts/CommandContext';
import { Terminal, ArrowRight } from 'lucide-react';

const CommandConsole: React.FC = () => {
  const { 
    isConsoleOpen, 
    closeConsole,
    commandHistory, 
    outputHistory,
    currentCommand, 
    setCurrentCommand,
    executeCommand
  } = useCommand();
  
  const inputRef = useRef<HTMLInputElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isConsoleOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isConsoleOpen]);
  
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputHistory]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    } else if (e.key === 'Escape') {
      closeConsole();
    }
  };
  
  const renderOutput = (text: string, index: number) => {
    if (text.startsWith('> ')) {
      return (
        <div key={index} className="text-neon-cse font-bold">
          {text}
        </div>
      );
    } else if (text.startsWith('-') || text.includes(':')) {
      return (
        <div key={index} className="text-neon-ece">
          {text}
        </div>
      );
    } else {
      return <div key={index}>{text}</div>;
    }
  };
  
  return (
    <div 
      ref={consoleRef}
      className={`console fixed bottom-0 left-0 right-0 bg-surface border-t-2 border-primary px-4 py-2 z-40 transition-transform duration-300 ${isConsoleOpen ? 'open' : ''}`}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-neon-cse">
          <Terminal className="h-4 w-4 mr-2" />
          <span className="font-mono text-sm">TecHETC Terminal</span>
        </div>
        <button 
          onClick={closeConsole}
          className="text-gray-400 hover:text-white"
        >
          ESC
        </button>
      </div>
      
      <div 
        ref={outputRef}
        className="h-[210px] overflow-y-auto font-mono text-sm mb-2 px-2"
      >
        {outputHistory.map((output, index) => (
          renderOutput(output, index)
        ))}
      </div>
      
      <div className="flex items-center bg-background rounded px-2 py-1">
        <ArrowRight className="h-4 w-4 text-neon-cse mr-2" />
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent outline-none font-mono text-sm"
          placeholder="Type /help for available commands..."
        />
      </div>
    </div>
  );
};

export default CommandConsole;