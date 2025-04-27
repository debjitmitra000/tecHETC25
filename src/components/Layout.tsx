import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CommandConsole from './CommandConsole';
import AudioControls from './AudioControls';
import { Volume2, Terminal } from 'lucide-react';
import { useCommand } from '../contexts/CommandContext';

const Layout: React.FC = () => {
  const { toggleConsole } = useCommand();

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="scan-line"></div>
      <Navbar />
      <main className="flex-grow bg-background relative z-10">
        <Outlet />
      </main>
      <Footer />
      <CommandConsole />

      <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
        <AudioControls />
        <button 
          onClick={toggleConsole}
          className="p-2 bg-surface border border-primary rounded-md hover:bg-primary hover:bg-opacity-20 transition-all"
          title="Toggle Command Console (Press ` key)"
        >
          <Terminal className="h-5 w-5 text-neon-cse" />
        </button>
      </div>
    </div>
  );
};

export default Layout;