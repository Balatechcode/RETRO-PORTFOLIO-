import React, { useState } from 'react';
import { MessageCircle, Send, X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

interface WhatsAppButtonProps {
  onOpenContact?: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    'Hi Balakrishna, I saw your portfolio and would like to discuss a project!'
  );

  const presets = [
    {
      label: '💼 Full-Stack Web Project',
      text: 'Hi Balakrishna! I checked your portfolio and would like to discuss a custom web application project.',
    },
    {
      label: '🛒 Shopify Store & E-Com',
      text: 'Hi Balakrishna! I am looking for a Shopify Liquid / E-commerce expert to build or scale our store.',
    },
    {
      label: '📈 SEO & Growth Funnel',
      text: 'Hi Balakrishna! I would like to consult on technical SEO, digital marketing, and lead generation.',
    },
    {
      label: '⚡ Automation & Google Apps Script',
      text: 'Hi Balakrishna! I need help automating workflows and business operations with custom scripts.',
    },
  ];

  const handleLaunchWhatsApp = (textToTransmit?: string) => {
    playTactileClick();
    const message = encodeURIComponent(textToTransmit || customMsg);
    const url = `https://wa.me/918154954408?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-12 sm:bottom-14 right-3 sm:right-6 z-[65] font-jetbrains select-none">
      {/* Popover Mini Chat Console */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="WhatsApp Dispatch Console"
          className="retro-raised bg-[#ffebd4] w-80 sm:w-88 p-3 sm:p-4 border-2 border-[#18362b] shadow-2xl mb-2.5 animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          {/* Title Bar */}
          <div className="bg-[#18362b] text-[#e7e965] px-3 py-1.5 flex items-center justify-between shadow-sm mb-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span className="text-xs font-bold tracking-wide">
                WHATSAPP.EXE — Direct Feed
              </span>
            </div>
            <button
              onClick={() => {
                playTactileClick();
                setIsOpen(false);
              }}
              className="w-4 h-4 bg-[#e7e965] text-[#18362b] font-bold text-xs flex items-center justify-center hover:bg-[#cbcd4c]"
              aria-label="Close WhatsApp dialogue"
            >
              ✕
            </button>
          </div>

          {/* Quick Header */}
          <div className="retro-sunken bg-[#fff1e4] p-3 border border-[#c1c8c3] mb-3 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-space text-xs font-bold text-[#18362b]">
                Balakrishna Kolla
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-[#2f4d41] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse"></span>
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-[#414845] leading-tight">
              Direct frequency for project inquiries, freelance bookings, or quick technical consultation.
            </p>
            <p className="text-[10px] text-[#616200] font-bold">
              ⚡ Typical response: &lt; 15 minutes
            </p>
          </div>

          {/* Preset Prompts */}
          <div className="space-y-1.5 mb-3">
            <span className="text-[10px] font-bold text-[#18362b] uppercase tracking-wider block">
              SELECT PRESET TOPIC:
            </span>
            <div className="space-y-1">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playTactileClick();
                    setCustomMsg(p.text);
                  }}
                  className={`w-full text-left text-[11px] px-2 py-1.5 border transition-colors flex items-center justify-between ${
                    customMsg === p.text
                      ? 'bg-[#2f4d41] text-[#e7e965] border-[#18362b] font-bold'
                      : 'bg-[#ffebd4] text-[#251909] border-[#c1c8c3] hover:bg-[#fff1e4]'
                  }`}
                >
                  <span className="truncate">{p.label}</span>
                  {customMsg === p.text && (
                    <CheckCircle2 className="w-3 h-3 text-[#e7e965] shrink-0 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message preview box */}
          <div className="mb-3">
            <label className="text-[10px] font-bold text-[#18362b] uppercase block mb-1">
              TRANSMISSION MESSAGE:
            </label>
            <textarea
              rows={2}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full retro-sunken bg-[#fff1e4] p-2 text-xs text-[#251909] border border-[#c1c8c3] focus:outline-none focus:ring-1 focus:ring-[#18362b] resize-none"
            />
          </div>

          {/* Action button */}
          <button
            onClick={() => handleLaunchWhatsApp()}
            className="w-full retro-btn bg-[#25d366] text-[#0b3318] py-2 px-3 text-xs font-bold flex items-center justify-center gap-2 border-2 border-[#18362b] hover:bg-[#20ba5a] transition-colors shadow-sm phosphor-glow"
          >
            <MessageCircle className="w-4 h-4 fill-[#0b3318]" />
            <span>[OPEN IN WHATSAPP →]</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Tactical Launcher Pill */}
      <div className="flex items-center gap-2">
        <button
          id="floating-whatsapp-btn"
          onClick={() => {
            playTactileClick();
            setIsOpen(!isOpen);
          }}
          className="retro-btn bg-[#18362b] text-[#e7e965] px-3.5 py-2 text-xs font-bold flex items-center gap-2 border-2 border-[#2f4d41] shadow-xl hover:bg-[#2f4d41] transition-all group"
          aria-expanded={isOpen}
          title="Chat directly with Balakrishna Kolla on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-4 h-4 text-[#25d366] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25d366]"></span>
            </span>
          </div>
          <span className="tracking-wide hidden xs:inline sm:inline">
            {isOpen ? '[CLOSE WA.EXE]' : '[WHATSAPP.EXE]'}
          </span>
          <span className="bg-[#25d366] text-[#0b3318] text-[9px] px-1 py-0.2 font-bold uppercase rounded-xs">
            ONLINE
          </span>
        </button>
      </div>
    </div>
  );
};
