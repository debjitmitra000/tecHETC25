import React, { useRef, useState } from 'react';
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

const AudioControls: React.FC = () => {
  const { isMuted, toggleMute, volume, setVolume } = useAudio();
  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowVolumeBar(true);
    setFadeOut(false);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    hideTimeout.current = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowVolumeBar(false), 300); // Match transition
    }, 2000);
  };

  const handleClick = () => {
    toggleMute();
    if (!isTouchDevice) return;

    // Mobile: show and auto-hide after 1s
    setShowVolumeBar(true);
    setFadeOut(false);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);

    hideTimeout.current = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowVolumeBar(false), 300);
    }, 1000);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const renderVolumeIcon = () => {
    if (isMuted) return <VolumeX className="h-5 w-5" />;
    if (volume < 0.25) return <Volume className="h-5 w-5" />;
    if (volume < 0.75) return <Volume1 className="h-5 w-5" />;
    return <Volume2 className="h-5 w-5" />;
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inline-block">
        <button
          onClick={handleClick}
          className="p-2 bg-surface border border-primary rounded-md hover:bg-primary hover:bg-opacity-20 transition-all"
          title={isMuted ? 'Unmute background music' : 'Mute background music'}
        >
          {renderVolumeIcon()}
        </button>
      </div>

      {showVolumeBar && (
        <div
          className={`absolute bottom-full mb-2 right-0 bg-surface border border-primary rounded-md p-2 w-32 pixel-corners z-10 transition-opacity duration-300 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-primary"
          />
          <div className="text-xs text-center mt-1 font-mono">
            {isMuted ? 'Muted' : `Volume: ${Math.round(volume * 100)}%`}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioControls;
