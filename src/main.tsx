import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AudioProvider } from './contexts/AudioContext';
import { CommandProvider } from './contexts/CommandContext';
import { RegistrationProvider } from './contexts/RegistrationContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AudioProvider>
        <CommandProvider>
          <RegistrationProvider>
            <App />
          </RegistrationProvider>
        </CommandProvider>
      </AudioProvider>
    </BrowserRouter>
  </StrictMode>
);