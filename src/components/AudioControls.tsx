import React from 'react';
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

const AudioControls: React.FC = () => {
  const { isMuted, toggleMute, volume, setVolume } = useAudio();

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
    <div className="relative group">
      <button
        onClick={toggleMute}
        className="p-2 bg-surface border border-primary rounded-md hover:bg-primary hover:bg-opacity-20 transition-all"
        title={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {renderVolumeIcon()}
      </button>

      <div className="absolute bottom-full mb-2 right-0 hidden group-hover:block bg-surface border border-primary rounded-md p-2 w-32 pixel-corners">
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
          {isMuted ? "Muted" : `Volume: ${Math.round(volume * 100)}%`}
        </div>
      </div>
    </div>
  );
};

export default AudioControls;