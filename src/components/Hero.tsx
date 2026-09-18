import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Download, ArrowRight, Sparkles, CheckCircle2, HardDrive, Disc, Activity } from 'lucide-react';
import { playTactileClick, playTerminalKey } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'telemetry' | 'highlights'>('terminal');

  const terminalTabs = [
    { id: 'terminal', label: 'WORKSTATION.SH' },
    { id: 'telemetry', label: 'TELEMETRY.LOG' },
    { id: 'highlights', label: 'CORE_STACK.ENV' },
  ] as const;

  return (
    <section className="relative pt-8 pb-4">
      {/* Hand-drawn Retro Sticky Note */}
      <motion.div
        initial={{ rotate: 6, opacity: 0, scale: 0.9 }}
        animate={{ rotate: 3, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="absolute -top-3 right-4 lg:right-16 z-20 hidden md:block"
      >
        <div className="retro-raised bg-[#e7e965] text-[#1c1d00] p-3 max-w-[190px] text-center shadow-lg transform hover:-rotate-1 hover:scale-105 transition-all cursor-default">
          <span className="font-handwriting text-2xl font-bold leading-snug block text-[#251909]">
            Let's build something cool! ✨
          </span>
          <span className="font-jetbrains text-[9px] uppercase tracking-wider block mt-1 text-[#616200] font-bold border-t border-[#cbcd4c] pt-1">
            STICKY NOTE #04 • VAPI, IN
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Subsystem Chip */}
          <div className="inline-flex items-center space-x-2 retro-raised bg-[#ffebd4] px-3.5 py-1.5 border border-[#c1c8c3]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#616200] animate-pulse"></span>
            <span className="font-jetbrains text-xs font-bold text-[#18362b]">
              PORTFOLIO SYSTEM v2.026
            </span>
            <span className="text-[#414845] font-jetbrains text-[11px] border-l border-[#c1c8c3] pl-2">
              ARCH_x64 • BCA 2025
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-space text-3xl sm:text-4xl lg:text-5xl text-[#18362b] font-bold leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="underline decoration-[#e7e965] decoration-wavy decoration-3 underline-offset-4">
                Balakrishna
              </span>
              .
            </h1>

            <h2 className="font-space text-lg sm:text-2xl text-[#2f4d41] font-bold flex items-center gap-2">
              <span>Digital Marketer + Full Stack Web Developer</span>
            </h2>

            <p className="font-sans-body text-base sm:text-lg text-[#414845] leading-relaxed max-w-xl">
              I architect high-performance web applications, immersive digital experiences, e-commerce stores, and growth-focused marketing systems tailored for measurable conversion and speed.
            </p>
          </div>

          {/* Welcome callout */}
          <div className="flex items-center gap-2 text-[#18362b]">
            <Sparkles className="w-5 h-5 text-[#616200]" />
            <span className="font-handwriting text-2xl font-bold">
              Welcome to my digital workstation →
            </span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              id="hero-explore-btn"
              href="#projects"
              onClick={() => playTactileClick()}
              className="retro-btn bg-[#2f4d41] text-[#fff8f4] px-6 py-3 font-jetbrains text-xs sm:text-sm font-bold flex items-center gap-2 phosphor-glow"
            >
              <Terminal className="w-4 h-4 text-[#e7e965]" />
              <span>[EXPLORE MY WORK]</span>
              <ArrowRight className="w-4 h-4 text-[#e7e965]" />
            </a>

            <button
              id="hero-contact-btn"
              onClick={() => {
                playTactileClick();
                onOpenContact();
              }}
              className="retro-btn bg-[#e7e965] text-[#18362b] px-5 py-3 font-jetbrains text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#cbcd4c] transition-colors phosphor-glow"
            >
              <span>[GET IN TOUCH]</span>
            </button>

            <button
              id="hero-cv-btn"
              onClick={() => {
                playTactileClick();
                onOpenResume();
              }}
              className="retro-btn bg-[#ffebd4] text-[#18362b] border border-[#727974] px-5 py-3 font-jetbrains text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#fff1e4] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>[DOWNLOAD CV]</span>
            </button>
          </div>

          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 retro-sunken bg-[#fff1e4] px-3.5 py-2 border border-[#d8c2a8]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#616200] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e7e965] border border-[#18362b]"></span>
            </span>
            <span className="font-jetbrains text-xs text-[#18362b] font-bold uppercase tracking-wider">
              ● AVAILABLE FOR FREELANCE & PRODUCT LAUNCHES
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Workstation CRT Window */}
        <div className="lg:col-span-6 relative">
          {/* Outer retro chassis */}
          <div className="retro-raised bg-[#ffebd4] p-3.5 relative border border-[#727974] shadow-xl">
            {/* Window Title Bar */}
            <div className="bg-[#2f4d41] text-[#fff8f4] px-3.5 py-2 flex items-center justify-between mb-3 shadow-inner">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#e7e965]" />
                <span className="font-jetbrains text-xs font-bold tracking-wider">
                  BALAKRISHNA_WORKSTATION_CRT.EXE
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-jetbrains text-[10px]">
                <button
                  onClick={() => playTactileClick()}
                  className="w-4 h-4 bg-[#ffebd4] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center"
                >
                  _
                </button>
                <button
                  onClick={() => playTactileClick()}
                  className="w-4 h-4 bg-[#ffebd4] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center"
                >
                  □
                </button>
                <button
                  onClick={() => playTactileClick()}
                  className="w-4 h-4 bg-[#e7e965] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Inner CRT Viewport */}
            <div className="retro-sunken-dark bg-[#1b2924] p-4 text-[#fff8f4] font-jetbrains text-xs rounded-none min-h-[360px] flex flex-col justify-between relative overflow-hidden">
              {/* Scanline subtle gradient */}
              <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-40"></div>

              <div>
                {/* Mode Tabs */}
                <div className="flex items-center gap-1.5 border-b border-[#2f4d41] pb-2 mb-3">
                  {terminalTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        playTerminalKey();
                        setActiveTab(tab.id);
                      }}
                      className={`px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-[#2f4d41] text-[#e7e965] border-t-2 border-[#e7e965]'
                          : 'text-[#a9b9b2] hover:text-[#fff8f4] hover:bg-[#25342e]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: Terminal Log */}
                {activeTab === 'terminal' && (
                  <div className="space-y-2 leading-relaxed">
                    <p className="text-[#a9b9b2]">
                      <span className="text-[#e7e965] font-bold">root@balakrishna-os:~$</span> whoami --full
                    </p>
                    <div className="bg-[#25342e] p-2.5 border border-[#2f4d41] text-[11px] space-y-1 text-[#d6e6de]">
                      <p><span className="text-[#e7e965]">NAME:</span> Balakrishna Kolla</p>
                      <p><span className="text-[#e7e965]">OCCUPATION:</span> Digital Marketer & Full Stack Web Developer</p>
                      <p><span className="text-[#e7e965]">EDUCATION:</span> Bachelor of Computer Applications (BCA, 2025)</p>
                      <p><span className="text-[#e7e965]">LOCATION:</span> Vapi, Gujarat, India</p>
                    </div>

                    <p className="text-[#a9b9b2] pt-1">
                      <span className="text-[#e7e965] font-bold">root@balakrishna-os:~$</span> systemctl status skills.service
                    </p>
                    <p className="text-[#e7e965]">
                      ● skills.service - Active (Running) | Load: React, Next.js, Node.js, Shopify, SEO, Automation
                    </p>
                  </div>
                )}

                {/* Tab 2: Telemetry Log */}
                {activeTab === 'telemetry' && (
                  <div className="space-y-2 leading-relaxed text-[11px]">
                    <div className="flex justify-between items-center text-[#e7e965] border-b border-[#2f4d41] pb-1">
                      <span>METRIC TELEMETRY</span>
                      <span className="text-[#adcebe]">SAMPLING RATE: 60Hz</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[#d6e6de] pt-1">
                      <div className="bg-[#25342e] p-2 border border-[#2f4d41]">
                        <span className="text-[#a9b9b2] block text-[10px]">CURRENT ROLE:</span>
                        <span className="font-bold text-[#e7e965]">Petrotech Chemical</span>
                      </div>
                      <div className="bg-[#25342e] p-2 border border-[#2f4d41]">
                        <span className="text-[#a9b9b2] block text-[10px]">UPTIME RECORD:</span>
                        <span className="font-bold text-[#e7e965]">99.98% Monitored</span>
                      </div>
                      <div className="bg-[#25342e] p-2 border border-[#2f4d41]">
                        <span className="text-[#a9b9b2] block text-[10px]">E-COMMERCE AOV:</span>
                        <span className="font-bold text-[#e7e965]">+27% Lift at Festylo</span>
                      </div>
                      <div className="bg-[#25342e] p-2 border border-[#2f4d41]">
                        <span className="text-[#a9b9b2] block text-[10px]">B2B COMMODITY ENGINE:</span>
                        <span className="font-bold text-[#e7e965]">InstaPrice Live</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Core Stack */}
                {activeTab === 'highlights' && (
                  <div className="space-y-2 leading-relaxed text-[11px]">
                    <p className="text-[#e7e965] font-bold">EXPORTED ENVIRONMENT VARIABLES:</p>
                    <div className="grid grid-cols-2 gap-1.5 text-[#d6e6de]">
                      <span className="bg-[#25342e] px-2 py-1 border border-[#2f4d41]">STACK_FRONTEND="React / Next.js"</span>
                      <span className="bg-[#25342e] px-2 py-1 border border-[#2f4d41]">STACK_BACKEND="Node.js / Express"</span>
                      <span className="bg-[#25342e] px-2 py-1 border border-[#2f4d41]">STACK_COMMERCE="Shopify Liquid"</span>
                      <span className="bg-[#25342e] px-2 py-1 border border-[#2f4d41]">STACK_DATABASE="MongoDB / PostgreSQL"</span>
                      <span className="bg-[#25342e] px-2 py-1 border border-[#2f4d41]">STACK_GROWTH="Technical SEO / GA4"</span>
                      <span className="bg-[#25342e] px-2 py-1 border border-[#2f4d41]">STACK_PIPELINES="Google Apps Script"</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Blinking Prompt Footer */}
              <div className="pt-3 border-t border-[#2f4d41] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-[#fff8f4]">
                  <span className="text-[#e7e965] font-bold">$</span>
                  <span>ready for deployment</span>
                  <span className="inline-block w-2 h-3.5 bg-[#e7e965] cursor-blink"></span>
                </div>
                <span className="text-[#cbcd4c] font-bold flex items-center gap-1">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>LIVE CHANNEL</span>
                </span>
              </div>
            </div>

            {/* Tactile Hardware Accents: Floppy Disks and CD-ROM indicator */}
            <div className="mt-3 pt-2.5 border-t border-[#d8c2a8] flex justify-between items-center text-xs font-jetbrains text-[#414845]">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#18362b]">
                  <HardDrive className="w-3.5 h-3.5 text-[#2f4d41]" />
                  <span>HDD: MOUNTED</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#18362b]">
                  <Disc className="w-3.5 h-3.5 text-[#616200]" />
                  <span>DRIVE A:\ FLOPPY</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#e7e965] border border-[#18362b]"></span>
                <span className="text-[10px] uppercase font-bold text-[#18362b]">READY (0 ERRORS)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
