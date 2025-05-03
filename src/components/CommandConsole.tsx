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
    executeCommand,
    isThemeActive,
    setIsThemeActive,
  } = useCommand();

  const inputRef = useRef<HTMLInputElement>(null);
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
        <div key={index} className="text-neon-ce font-bold tracking-wide mb-1">
          {text}
        </div>
      );
    } else if (text.startsWith('-') || text.includes(':')) {
      return (
        <div key={index} className="text-neon-ece font-medium mb-1">
          {text}
        </div>
      );
    } else {
      return <div key={index} className="text-gray-300 mb-1">{text}</div>;
    }
  };

  return (
    <div
    style={isThemeActive ? {
      backgroundImage: "url('https://i.pinimg.com/originals/34/16/fc/3416fc4113b69a0bf1cc75a772c4b5c4.gif')",
      backgroundSize: "cover",
      backgroundBlendMode: "multiply",
      backgroundPosition: "center"
    } : {}}
      className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#111] to-[#1a1a1a] border-t border-primary shadow-lg px-6 py-4 transition-transform duration-300 transform ${
      isConsoleOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center mb-3">
      <div className="flex items-center text-neon-cse">
        <Terminal className="h-5 w-5 mr-2 animate-pulse" />
        <span className="font-mono text-lg font-semibold tracking-tight">
        TecHETC Terminal
        </span>
      </div>
      <button
        onClick={closeConsole}
        className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded transition-all duration-200"
      >
        ESC
      </button>
      </div>

      <div
      ref={outputRef}
      className="h-[220px] overflow-y-auto bg-black bg-opacity-40 border border-neutral-700 rounded-md p-3 font-mono text-base text-white shadow-inner space-y-1 mb-3"
      >
      {outputHistory.map((output, index) => renderOutput(output, index))}
      </div>

      <div className="flex items-center bg-[#222] border border-neutral-700 rounded-md px-3 py-2">
      <ArrowRight className="h-5 w-5 text-neon-cse mr-2" />
      <input
        ref={inputRef}
        type="text"
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-grow bg-transparent outline-none font-mono text-base text-white placeholder-gray-500"
        placeholder="Type /help to explore available commands..."
      />
      </div>
    </div>
  );
};

export default CommandConsole;
