import React, { useEffect, useState, useCallback } from 'react';
import { AlertTriangle, MessageCircle, Download, Send, X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { playAlertChime, playTactileClick } from '../utils/sound';

interface ExitIntentModalProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const triggerModal = useCallback(() => {
    // Check if dismissed in this session
    if (sessionStorage.getItem('exit_greeting_dismissed') === 'true') {
      return;
    }
    setIsOpen(true);
    setHasShown(true);
    playAlertChime();
  }, []);

  const handleClose = (dontShowAgain: boolean = true) => {
    playTactileClick();
    setIsOpen(false);
    if (dontShowAgain) {
      sessionStorage.setItem('exit_greeting_dismissed', 'true');
    }
  };

  useEffect(() => {
    // 1. Mouseleave exit-intent detection (top of screen)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !hasShown) {
        triggerModal();
      }
    };

    // 2. Custom event listener for manual testing/preview
    const handleCustomTrigger = () => {
      setIsOpen(true);
      playAlertChime();
    };

    // 3. Optional beforeunload handler
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Standard browser prompt on tab close
      // e.preventDefault();
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('open-exit-alert', handleCustomTrigger);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('open-exit-alert', handleCustomTrigger);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown, triggerModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-alert-title"
      className="fixed inset-0 bg-[#3c2e1c]/80 backdrop-blur-xs z-[90] flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={() => handleClose(true)}
    >
      <div
        className="retro-raised bg-[#ffebd4] max-w-xl w-full p-4 sm:p-6 border-2 border-[#18362b] shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="bg-[#18362b] text-[#e7e965] px-3.5 py-2 flex items-center justify-between shadow-sm mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#e7e965] animate-bounce" />
            <span
              id="exit-alert-title"
              className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider"
            >
              DISCONNECT_INTERCEPT.SYS — Greetings &amp; Wait Notice
            </span>
          </div>
          <button
            onClick={() => handleClose(true)}
            className="w-5 h-5 bg-[#e7e965] text-[#18362b] font-bold text-xs flex items-center justify-center hover:bg-[#cbcd4c]"
            aria-label="Close alert"
          >
            ✕
          </button>
        </div>

        {/* Content Box */}
        <div className="space-y-4">
          {/* Greeting Banner */}
          <div className="retro-sunken bg-[#fff1e4] p-4 border border-[#c1c8c3] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-jetbrains text-[10px] bg-[#e7e965] text-[#18362b] px-2 py-0.5 font-bold border border-[#18362b] uppercase">
                STATUS: DISCONNECT SEQUENCE INTERRUPTED
              </span>
              <span className="font-jetbrains text-[10px] text-[#2f4d41] font-bold">
                PORT 443 ACTIVE
              </span>
            </div>

            <h3 className="font-space text-lg sm:text-xl font-bold text-[#18362b] flex items-center gap-2">
              <span>👋 Wait! Before you disconnect...</span>
            </h3>

            <p className="font-sans-body text-sm text-[#251909] leading-relaxed">
              Thank you for exploring <strong>BALAKRISHNA.OS</strong>! Whether you are seeking a full-stack engineer for a new web project, an e-commerce specialist, or technical marketing consulting, let&apos;s keep in touch before you leave.
            </p>
          </div>

          {/* Action Pathways Grid */}
          <div className="space-y-2.5">
            {/* 1. WhatsApp Action (Primary) */}
            <a
              href="https://wa.me/918154954408?text=Hi%20Balakrishna%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20say%20hello%20before%20leaving!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playTactileClick();
                handleClose(true);
              }}
              className="w-full retro-raised bg-[#25d366] text-[#0b3318] p-3 border-2 border-[#18362b] hover:bg-[#20ba5a] transition-colors flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-none bg-[#0b3318] text-[#25d366] flex items-center justify-center shrink-0 border border-[#18362b]">
                  <MessageCircle className="w-5 h-5 fill-[#25d366]" />
                </div>
                <div className="text-left">
                  <div className="font-jetbrains text-xs font-bold text-[#0b3318] flex items-center gap-1.5">
                    <span>[QUICK CHAT ON WHATSAPP]</span>
                    <span className="bg-[#0b3318] text-[#25d366] text-[9px] px-1 py-0.2 uppercase font-bold">
                      FASTEST
                    </span>
                  </div>
                  <p className="font-sans-body text-xs text-[#0f4420]">
                    Direct connection to {SYSTEM_INFO.whatsappNumber} • Response &lt; 15 mins
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#0b3318] shrink-0" />
            </a>

            {/* 2. Download CV */}
            <button
              onClick={() => {
                handleClose(false);
                onOpenResume();
              }}
              className="w-full retro-raised bg-[#ffebd4] text-[#18362b] p-3 border border-[#727974] hover:bg-[#fff1e4] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#2f4d41] text-[#e7e965] flex items-center justify-center shrink-0 border border-[#18362b]">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-jetbrains text-xs font-bold text-[#18362b]">
                    [TAKE AWAY MY RESUME / CV]
                  </div>
                  <p className="font-sans-body text-xs text-[#414845]">
                    Review full technical track record, BCA degree &amp; portfolio offline
                  </p>
                </div>
              </div>
              <span className="font-jetbrains text-xs font-bold text-[#2f4d41] group-hover:translate-x-0.5 transition-transform">
                VIEW →
              </span>
            </button>

            {/* 3. Send Quick Dispatch */}
            <button
              onClick={() => {
                handleClose(false);
                onOpenContact();
              }}
              className="w-full retro-raised bg-[#ffebd4] text-[#18362b] p-3 border border-[#727974] hover:bg-[#fff1e4] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#e7e965] text-[#18362b] flex items-center justify-center shrink-0 border border-[#18362b]">
                  <Send className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-jetbrains text-xs font-bold text-[#18362b]">
                    [LEAVE A 30-SECOND MESSAGE]
                  </div>
                  <p className="font-sans-body text-xs text-[#414845]">
                    Scroll to contact form &amp; drop a brief project note
                  </p>
                </div>
              </div>
              <span className="font-jetbrains text-xs font-bold text-[#2f4d41] group-hover:translate-x-0.5 transition-transform">
                DISPATCH →
              </span>
            </button>
          </div>

          {/* Footer Controls */}
          <div className="pt-2 border-t border-[#c1c8c3] flex flex-wrap justify-between items-center gap-3">
            <span className="font-jetbrains text-[11px] text-[#727974]">
              BALAKRISHNA.OS • Workstation v2.026
            </span>

            <button
              onClick={() => handleClose(true)}
              className="retro-btn bg-[#fff1e4] px-4 py-2 font-jetbrains text-xs font-bold text-[#18362b] hover:bg-[#ffebd4] border border-[#727974]"
            >
              [CONTINUE BROWSING SITE]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
