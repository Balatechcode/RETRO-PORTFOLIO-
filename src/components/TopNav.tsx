import React, { useState, useEffect } from 'react';
import { Terminal, Clock, Volume2, VolumeX, Menu, X, Download, Send, MessageCircle } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { playTactileClick, toggleAudioMute, getAudioMutedState } from '../utils/sound';

interface TopNavProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenResume, onOpenContact }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [isMuted, setIsMuted] = useState(getAudioMutedState());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    const nextMuted = toggleAudioMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      playTactileClick();
    }
  };

  const navLinks = [
    { name: 'ABOUT.EXE', href: '#about' },
    { name: 'SKILLS.DAT', href: '#skills' },
    { name: 'PROJECTS.EXE', href: '#projects' },
    { name: 'EXPERIENCE.LOG', href: '#experience' },
    { name: 'SERVICES.SYS', href: '#services' },
    { name: 'CONTACT.EXE', href: '#contact' },
  ];

  return (
    <header className="bg-[#ffebd4] text-[#18362b] border-b border-[#c1c8c3] shadow-sm fixed top-0 left-0 w-full z-50 select-none">
      <div className="max-w-[1480px] mx-auto flex justify-between items-center px-4 py-1.5 h-11">
        {/* Brand Identity */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            onClick={() => playTactileClick()}
            className="flex items-center gap-2 group font-space text-sm sm:text-base font-bold text-[#18362b] tracking-tight hover:opacity-90"
          >
            <div className="w-6 h-6 bg-[#2f4d41] text-[#e7e965] flex items-center justify-center retro-raised-subtle">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="group-hover:underline decoration-2">BALAKRISHNA.OS</span>
            <span className="inline-block w-2.5 h-2.5 rounded-none bg-[#e7e965] border border-[#18362b] cursor-blink"></span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-jetbrains text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => playTactileClick()}
              className="px-2.5 py-1 text-[#251909] hover:text-[#18362b] hover:bg-[#fff1e4] font-medium transition-colors border border-transparent hover:border-[#c1c8c3] retro-btn bg-[#ffebd4] text-center"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Trailing Controls: Audio, Clock, Status, CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Sound Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={handleAudioToggle}
            title={isMuted ? 'Unmute mechanical audio' : 'Mute mechanical audio'}
            className="retro-btn bg-[#fff1e4] text-[#18362b] p-1.5 flex items-center justify-center hover:bg-[#e7e965] transition-colors"
            aria-label="Toggle retro audio"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#ba1a1a]" /> : <Volume2 className="w-3.5 h-3.5 text-[#18362b]" />}
          </button>

          {/* System Clock */}
          <div className="hidden sm:flex items-center space-x-1.5 font-jetbrains text-[11px] text-[#414845] px-2.5 py-1 retro-sunken bg-[#fff1e4]">
            <Clock className="w-3 h-3 text-[#18362b]" />
            <span id="system-clock">{currentTime || '10:42:00 AM'}</span>
          </div>

          {/* Status Indicator */}
          <span className="hidden md:inline-flex items-center gap-1 font-jetbrains text-[10px] font-bold bg-[#e7e965] text-[#1c1d00] px-2 py-0.5 border border-[#18362b] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18362b] animate-ping"></span>
            SYS: ONLINE
          </span>

          {/* Download CV Action */}
          <button
            id="top-cv-btn"
            onClick={() => {
              playTactileClick();
              onOpenResume();
            }}
            className="hidden sm:flex retro-btn bg-[#e7e965] text-[#18362b] font-jetbrains text-xs font-bold px-3 py-1 items-center gap-1.5 phosphor-glow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV.PDF</span>
          </button>

          {/* WhatsApp Direct Action */}
          <a
            id="top-wa-btn"
            href={SYSTEM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playTactileClick()}
            className="hidden md:flex retro-btn bg-[#25d366] text-[#0b3318] font-jetbrains text-xs font-bold px-2.5 py-1 items-center gap-1 border border-[#18362b] hover:bg-[#20ba5a] transition-colors"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#0b3318]" />
            <span>WA.EXE</span>
          </a>

          {/* Contact CTA */}
          <button
            id="top-contact-btn"
            onClick={() => {
              playTactileClick();
              onOpenContact();
            }}
            className="retro-btn bg-[#2f4d41] text-[#fff8f4] font-jetbrains text-xs font-bold px-3 py-1 flex items-center gap-1.5 phosphor-glow"
          >
            <Send className="w-3.5 h-3.5 text-[#e7e965]" />
            <span className="hidden xs:inline">CONTACT</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => {
              playTactileClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden retro-btn bg-[#fff1e4] text-[#18362b] p-1.5 hover:bg-[#e7e965]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffebd4] border-t border-[#c1c8c3] px-4 py-3 space-y-2 retro-sunken">
          <div className="grid grid-cols-2 gap-2 font-jetbrains text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playTactileClick();
                  setMobileMenuOpen(false);
                }}
                className="retro-btn bg-[#fff8f4] text-[#18362b] p-2 text-center font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 font-jetbrains text-xs border-t border-[#d8c2a8]">
            <a
              href={SYSTEM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(false);
              }}
              className="retro-btn bg-[#25d366] text-[#0b3318] font-bold py-2 px-3 flex justify-center items-center gap-2 border border-[#18362b]"
            >
              <MessageCircle className="w-4 h-4 fill-[#0b3318]" />
              <span>CHAT ON WHATSAPP ({SYSTEM_INFO.whatsappNumber})</span>
            </a>

            <div className="flex justify-between items-center gap-2">
              <button
                onClick={() => {
                  playTactileClick();
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="retro-btn bg-[#e7e965] text-[#18362b] font-bold py-1.5 px-3 flex-1 flex justify-center items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </button>
              <button
                onClick={() => {
                  playTactileClick();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="retro-btn bg-[#2f4d41] text-[#fff8f4] font-bold py-1.5 px-3 flex-1 flex justify-center items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-[#e7e965]" />
                <span>DISPATCH</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
