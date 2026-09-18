import React, { useState } from 'react';
import { Terminal, Download, Send, User, Code, Layers, History, Settings, Volume2, VolumeX, MessageCircle, AlertTriangle } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { playTactileClick, toggleAudioMute, getAudioMutedState } from '../utils/sound';

interface BottomTaskbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const BottomTaskbar: React.FC<BottomTaskbarProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(getAudioMutedState());

  const handleStartToggle = () => {
    playTactileClick();
    setStartMenuOpen(!startMenuOpen);
  };

  const handleSoundToggle = () => {
    const next = toggleAudioMute();
    setIsMuted(next);
    if (!next) playTactileClick();
  };

  const menuItems = [
    { label: 'ABOUT.EXE', href: '#about', icon: User },
    { label: 'SKILLS.DAT', href: '#skills', icon: Code },
    { label: 'PROJECTS.EXE', href: '#projects', icon: Layers },
    { label: 'EXPERIENCE.LOG', href: '#experience', icon: History },
    { label: 'SERVICES.SYS', href: '#services', icon: Settings },
    { label: 'AUTOMATION.SH', href: '#automation', icon: Terminal },
    { label: 'CONTACT.EXE', href: '#contact', icon: Send },
  ];

  return (
    <>
      {/* Start Menu Popup */}
      {startMenuOpen && (
        <div className="fixed bottom-10 left-3 z-[60] w-64 retro-raised bg-[#ffebd4] border-2 border-[#18362b] shadow-2xl p-1 font-jetbrains text-xs">
          {/* Side banner in Start Menu */}
          <div className="flex">
            <div className="w-8 bg-[#2f4d41] text-[#e7e965] flex items-end justify-center pb-3 font-space font-bold writing-vertical-lr text-xs tracking-widest uppercase select-none">
              <span className="-rotate-90">BALAKRISHNA.OS</span>
            </div>

            <div className="flex-1 p-2 space-y-1">
              <div className="pb-1.5 mb-1.5 border-b border-[#c1c8c3] text-[11px] font-bold text-[#18362b]">
                PORTFOLIO WORKSTATION v2.026
              </div>

              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      playTactileClick();
                      setStartMenuOpen(false);
                    }}
                    className="flex items-center gap-2 p-1.5 text-[#251909] hover:bg-[#2f4d41] hover:text-[#e7e965] font-bold transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <div className="pt-2 border-t border-[#c1c8c3] space-y-1">
                <a
                  href={SYSTEM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    playTactileClick();
                    setStartMenuOpen(false);
                  }}
                  className="w-full text-left flex items-center gap-2 p-1.5 bg-[#25d366] text-[#0b3318] hover:bg-[#20ba5a] font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#0b3318]" />
                  <span>WHATSAPP.EXE (DIRECT)</span>
                </a>

                <button
                  onClick={() => {
                    playTactileClick();
                    setStartMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-left flex items-center gap-2 p-1.5 text-[#251909] hover:bg-[#2f4d41] hover:text-[#e7e965] font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD CV.PDF</span>
                </button>

                <button
                  onClick={() => {
                    playTactileClick();
                    setStartMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-exit-alert'));
                  }}
                  className="w-full text-left flex items-center gap-2 p-1.5 text-[#251909] hover:bg-[#2f4d41] hover:text-[#e7e965] font-bold text-[11px]"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-[#616200]" />
                  <span>EXIT GREETING ALERT</span>
                </button>

                <button
                  onClick={handleSoundToggle}
                  className="w-full text-left flex items-center gap-2 p-1.5 text-[#251909] hover:bg-[#2f4d41] hover:text-[#e7e965] font-bold"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Taskbar */}
      <footer className="bg-[#ffebd4] text-[#18362b] border-t border-[#c1c8c3] shadow-md fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-3 py-1 h-9 select-none font-jetbrains text-xs">
        {/* Start Button */}
        <div className="flex items-center space-x-3">
          <button
            id="start-menu-button"
            onClick={handleStartToggle}
            className={`retro-btn px-2.5 py-0.5 font-bold flex items-center gap-1.5 text-xs ${
              startMenuOpen ? 'bg-[#2f4d41] text-[#e7e965]' : 'bg-[#e7e965] text-[#18362b]'
            }`}
          >
            <div className="w-3.5 h-3.5 bg-[#18362b] text-[#e7e965] flex items-center justify-center text-[9px] font-bold">
              ⊞
            </div>
            <span>START</span>
          </button>

          <span className="hidden sm:inline text-[11px] text-[#414845] font-medium">
            BALAKRISHNA.OS v2.5 [ONLINE] © 2025 Balakrishna Kolla. All systems nominal.
          </span>
        </div>

        {/* Status / Quick Links */}
        <div className="flex items-center space-x-4 text-xs font-bold">
          <div className="hidden md:flex items-center space-x-3 text-[#414845] text-[11px]">
            <a href="#about" onClick={() => playTactileClick()} className="hover:text-[#18362b] hover:underline">
              SYSTEM.NFO
            </a>
            <a href="#skills" onClick={() => playTactileClick()} className="hover:text-[#18362b] hover:underline">
              TERMINAL.SH
            </a>
            <a href="#experience" onClick={() => playTactileClick()} className="hover:text-[#18362b] hover:underline">
              LOGS.DAT
            </a>
            <a href="#contact" onClick={() => playTactileClick()} className="hover:text-[#18362b] hover:underline">
              DISPATCH.EXE
            </a>
          </div>

          <div className="flex items-center gap-1 text-[#18362b]">
            <span className="w-2 h-2 rounded-full bg-[#616200] cursor-blink"></span>
            <span className="text-[10px] uppercase">ONLINE</span>
          </div>
        </div>
      </footer>
    </>
  );
};
