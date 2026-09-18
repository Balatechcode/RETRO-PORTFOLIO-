import React from 'react';
import { Smartphone, FileText, Download, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

interface CreatorAndResumeProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const CreatorAndResume: React.FC<CreatorAndResumeProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="resume">
      {/* CREATOR.MODE */}
      <div className="lg:col-span-5 retro-raised bg-[#ffebd4] p-5 border border-[#727974] flex flex-col justify-between">
        <div>
          <div className="bg-[#2f4d41] text-[#fff8f4] px-3.5 py-1.5 flex items-center justify-between mb-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#e7e965]" />
              <span className="font-jetbrains text-xs font-bold">
                CREATOR.MODE // MOBILE_FEED
              </span>
            </div>
            <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
              {SYSTEM_INFO.creatorHandle}
            </span>
          </div>

          <div className="retro-sunken bg-[#fff1e4] p-5 text-center space-y-3 border border-[#c1c8c3]">
            <div className="w-16 h-16 rounded-full bg-[#e7e965] text-[#18362b] mx-auto flex items-center justify-center font-space text-lg font-bold border-2 border-[#18362b] shadow-sm">
              24H
            </div>

            <div>
              <h3 className="font-space text-lg font-bold text-[#18362b]">
                {SYSTEM_INFO.creatorHandle}
              </h3>
              <p className="font-jetbrains text-xs text-[#616200] font-bold">
                BUILDING IN PUBLIC &amp; DIGITAL EXPERIMENTS
              </p>
            </div>

            <p className="font-sans-body text-xs sm:text-sm text-[#414845] leading-relaxed max-w-sm mx-auto">
              Personal creator journey documenting full-stack web engineering, SEO growth case studies, e-commerce experiments, and scalable business software built in public.
            </p>
          </div>
        </div>

        <a
          href={SYSTEM_INFO.creatorUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playTactileClick()}
          className="retro-btn bg-[#2f4d41] text-[#fff8f4] py-3 px-4 font-jetbrains text-xs font-bold flex items-center justify-center gap-2 mt-4 phosphor-glow"
        >
          <span>FOLLOW THE CREATOR JOURNEY →</span>
          <ExternalLink className="w-4 h-4 text-[#e7e965]" />
        </a>
      </div>

      {/* RESUME.PDF Explorer */}
      <div className="lg:col-span-7 retro-raised bg-[#ffebd4] p-5 border border-[#727974] flex flex-col justify-between">
        <div>
          <div className="bg-[#2f4d41] text-[#fff8f4] px-3.5 py-1.5 flex items-center justify-between mb-4 shadow-sm">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#e7e965]" />
              <span className="font-jetbrains text-xs font-bold">
                FILE_EXPLORER // BALAKRISHNA_KOLLA_RESUME.PDF
              </span>
            </div>
            <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
              SIZE: 248 KB • VALIDATED
            </span>
          </div>

          <div className="retro-sunken bg-[#fff1e4] p-4 sm:p-5 space-y-3 font-jetbrains text-xs border border-[#c1c8c3]">
            <div className="flex items-center gap-2 text-[#18362b] font-bold border-b border-[#c1c8c3] pb-2">
              <FileText className="w-4 h-4 text-[#2f4d41]" />
              <span>RESUME MANIFEST — SUMMARY OF ASSETS:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#251909]">
              <div className="p-2.5 retro-raised bg-[#ffebd4] border border-[#c1c8c3]">
                <span className="block font-bold text-[#616200] text-[10px]">EXPERIENCE:</span>
                <span className="block text-xs">Petrotech Chemical (Current) &amp; Client Projects</span>
              </div>
              <div className="p-2.5 retro-raised bg-[#ffebd4] border border-[#c1c8c3]">
                <span className="block font-bold text-[#616200] text-[10px]">EDUCATION:</span>
                <span className="block text-xs">BCA — 2025 Graduate (Computer Applications)</span>
              </div>
              <div className="p-2.5 retro-raised bg-[#ffebd4] border border-[#c1c8c3]">
                <span className="block font-bold text-[#616200] text-[10px]">TECHNICAL STACK:</span>
                <span className="block text-xs">React, Next.js, Node.js, Shopify, Flutter, Supabase</span>
              </div>
              <div className="p-2.5 retro-raised bg-[#ffebd4] border border-[#c1c8c3]">
                <span className="block font-bold text-[#616200] text-[10px]">GROWTH &amp; MARKETING:</span>
                <span className="block text-xs">Technical SEO, Inbound Funnels, CRO, Google Sheets</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <button
            onClick={() => {
              playTactileClick();
              onOpenResume();
            }}
            className="retro-btn bg-[#e7e965] text-[#18362b] px-6 py-3 font-jetbrains text-xs sm:text-sm font-bold flex items-center gap-2 phosphor-glow"
          >
            <Download className="w-4 h-4" />
            <span>[VIEW / DOWNLOAD CV]</span>
          </button>

          <button
            onClick={() => {
              playTactileClick();
              onOpenContact();
            }}
            className="retro-btn bg-[#ffebd4] text-[#18362b] px-5 py-3 font-jetbrains text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#fff1e4]"
          >
            <Mail className="w-4 h-4 text-[#2f4d41]" />
            <span>DISCUSS ENGAGEMENT</span>
          </button>
        </div>
      </div>
    </section>
  );
};
