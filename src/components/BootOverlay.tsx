import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, FastForward } from 'lucide-react';
import { playBootBeep, playTactileClick } from '../utils/sound';

interface BootOverlayProps {
  onComplete?: () => void;
}

export const BootOverlay: React.FC<BootOverlayProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [statusText, setStatusText] = useState('INITIALIZING BALAKRISHNA.OS KERNEL...');

  useEffect(() => {
    playBootBeep();

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 8;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText('ALL SUBSYSTEMS ONLINE. WELCOME.');
          setTimeout(() => {
            setIsDismissed(true);
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }

        if (next > 70) setStatusText('LOADING PROJECTS & GRAPHICS SUBSYSTEMS...');
        else if (next > 40) setStatusText('MOUNTING FULL-STACK & MARKETING DRIVERS...');
        else if (next > 20) setStatusText('ALLOCATING CONVENTIONAL MEMORY (640K OK)...');

        return next;
      });
    }, 120);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        dismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const dismiss = () => {
    playTactileClick();
    setIsDismissed(true);
    if (onComplete) onComplete();
  };

  if (isDismissed) return null;

  return (
    <div
      id="boot-overlay"
      className="fixed inset-0 bg-[#18362b] z-[9999] flex flex-col justify-between p-6 sm:p-10 text-[#e7e965] font-jetbrains select-none transition-opacity duration-500"
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-[#e7e965]">
          <Terminal className="w-6 h-6 animate-pulse" />
          <span className="font-space text-sm sm:text-base tracking-wider font-bold">
            BALAKRISHNA.OS BIOS v2.026 - (C) 2025 KOLLA SYSTEMS CORP.
          </span>
        </div>
        <div className="text-xs sm:text-sm text-[#adcebe] pt-2 leading-relaxed space-y-1">
          <p className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#e7e965]" />
            <span>CPU: HYBRID NEURAL CORE @ 4.20GHz | 640K CONVENTIONAL MEMORY OK</span>
          </p>
          <p>&gt; BUS ARCHITECTURE: PCI-EXPRESS FULL-STACK X64</p>
          <p>&gt; PRIMARY DISPLAY: CRT RETRO-TACTILE SCANLINE ENGINE</p>
          <p>&gt; AUDIO MODULE: 16-BIT RETRO WAVE SYNTHESIZER READY</p>
        </div>
      </div>

      <div className="max-w-xl w-full mx-auto space-y-5 text-center my-auto">
        <p className="font-space text-lg sm:text-2xl text-[#fff8f4] tracking-tight font-bold">
          BOOTING BALAKRISHNA.OS v2.026...
        </p>

        <div className="retro-sunken bg-[#2f4d41] p-1.5 rounded-none h-8 w-full">
          <div
            className="h-full bg-[#e7e965] transition-all duration-150 flex items-center justify-center text-[#18362b] font-bold text-xs tracking-wider overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            [{progress}%] {statusText}
          </div>
        </div>

        <p className="text-[11px] text-[#cbcd4c] tracking-widest uppercase animate-pulse">
          {statusText}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#adcebe] border-t border-[#2f4d41] pt-4">
        <span>DEVICE TARGET: WORKSTATION_HYBRID (WEB + COMMERCE)</span>
        <button
          id="skip-boot-btn"
          onClick={dismiss}
          className="retro-btn bg-[#ffebd4] text-[#18362b] font-bold px-4 py-2 flex items-center gap-1.5 hover:bg-[#e7e965] transition-colors"
        >
          <FastForward className="w-4 h-4" />
          <span>[SKIP INTRO [ESC]]</span>
        </button>
      </div>
    </div>
  );
};
