import React from 'react';
import { Info, ShieldCheck, MapPin, Briefcase, Award, CheckCircle } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    'Web Development',
    'Digital Marketing',
    'Shopify & E-Commerce',
    'Workflow Automation',
    'UI / UX Architecture',
    'SEO & Content Strategy',
    'Google Apps Script',
    'AI Integration',
  ];

  return (
    <section className="retro-raised bg-[#ffebd4] p-4 sm:p-5 border border-[#727974]" id="about">
      {/* Window Title Bar */}
      <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4 text-[#e7e965]" />
          <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
            ABOUT.EXE — System Properties & Bio
          </span>
        </div>
        <div className="flex items-center space-x-1 font-jetbrains text-[10px]">
          <button
            onClick={() => playTactileClick()}
            className="w-5 h-5 bg-[#ffebd4] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center hover:bg-[#fff1e4]"
          >
            _
          </button>
          <button
            onClick={() => playTactileClick()}
            className="w-5 h-5 bg-[#ffebd4] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center hover:bg-[#fff1e4]"
          >
            □
          </button>
          <button
            onClick={() => playTactileClick()}
            className="w-5 h-5 bg-[#e7e965] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center hover:bg-[#cbcd4c]"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="retro-sunken bg-[#fff1e4] p-5 sm:p-7 mt-3.5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#c1c8c3]">
        {/* Biography & Attributes */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="retro-raised bg-[#e7e965] text-[#1c1d00] px-3 py-0.5 font-jetbrains text-[11px] font-bold">
              SYS_IDENTITY: VERIFIED
            </span>
            <span className="font-jetbrains text-[11px] text-[#414845]">
              BUILD_HASH: {SYSTEM_INFO.buildHash}
            </span>
          </div>

          <h2 className="font-space text-2xl sm:text-3xl text-[#18362b] font-bold tracking-tight">
            Balakrishna Kolla
          </h2>

          <p className="font-sans-body text-base text-[#251909] leading-relaxed">
            Hey, I'm Balakrishna Kolla — a <strong>Digital Marketer &amp; Full Stack Web Developer</strong> focused on building websites, digital products, e-commerce experiences and practical business solutions.
          </p>

          <p className="font-sans-body text-sm sm:text-base text-[#414845] leading-relaxed">
            Graduated with a <strong>Bachelor of Computer Applications (BCA — 2025)</strong>, I combine strong foundational programming principles with high-conversion marketing techniques. Rather than treating engineering and promotion in silos, I architect every web viewport with growth, search indexing, and customer journey momentum baked in from line one.
          </p>

          <p className="font-sans-body text-sm text-[#414845] leading-relaxed">
            With roots in commercial economics and modern web development, I translate business objectives into responsive codebases, high-retention shopfronts, and automated workflows that eliminate manual overhead.
          </p>

          {/* Focus Areas Grid */}
          <div className="pt-2">
            <h4 className="font-jetbrains text-xs font-bold text-[#18362b] mb-2.5 uppercase tracking-wider">
              CORE FOCUS SUBSYSTEMS:
            </h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="retro-raised bg-[#ffebd4] px-3 py-1 font-jetbrains text-xs font-bold text-[#18362b] border border-[#c1c8c3] hover:bg-[#e7e965] transition-colors cursor-default"
                >
                  # {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Tactile ID Profile Badge */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="retro-raised bg-[#ffebd4] p-5 max-w-sm w-full relative transform hover:rotate-0 transition-transform duration-200 border-2 border-[#727974] shadow-xl">
            <div className="absolute -top-3 -right-2 retro-raised bg-[#e7e965] text-[#1c1d00] px-2.5 py-0.5 font-jetbrains text-[10px] font-bold tracking-widest border border-[#18362b]">
              SYS_ADMIN BADGE
            </div>

            <div className="flex items-center space-x-4 border-b border-[#c1c8c3] pb-4 mb-4">
              <div className="w-16 h-16 retro-sunken bg-[#2f4d41] text-[#e7e965] flex items-center justify-center border border-[#18362b]">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <div>
                <h3 className="font-space text-lg font-bold text-[#18362b]">
                  Balakrishna Kolla
                </h3>
                <p className="font-jetbrains text-xs text-[#616200] font-bold">
                  BCA GRADUATE — 2025
                </p>
                <p className="font-sans-body text-xs text-[#414845]">
                  Full Stack + Growth Engineering
                </p>
              </div>
            </div>

            <div className="space-y-2 font-jetbrains text-xs">
              <div className="flex justify-between py-1 border-b border-[#d8c2a8]">
                <span className="text-[#414845] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#18362b]" />
                  <span>LOCATION:</span>
                </span>
                <span className="font-bold text-[#18362b]">{SYSTEM_INFO.location}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#d8c2a8]">
                <span className="text-[#414845] flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-[#18362b]" />
                  <span>ROLE PROFILE:</span>
                </span>
                <span className="font-bold text-[#18362b]">Web Dev &amp; Marketer</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#d8c2a8]">
                <span className="text-[#414845] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#616200]" />
                  <span>STATUS:</span>
                </span>
                <span className="font-bold text-[#616200]">● ACTIVE DEPLOYMENT</span>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-[#414845] flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#18362b]" />
                  <span>CLEARANCE:</span>
                </span>
                <span className="font-bold text-[#18362b]">{SYSTEM_INFO.securityClearance}</span>
              </div>
            </div>

            {/* Barcode representation */}
            <div className="mt-4 pt-3 border-t-2 border-dashed border-[#c1c8c3] text-center">
              <span className="font-space text-lg text-[#18362b] tracking-[0.25em] block select-none">
                ||| | || ||| || ||| | |||
              </span>
              <span className="font-jetbrains text-[9px] text-[#414845] block mt-0.5">
                AUTH-TOKEN: 2025-KOLLA-SYS-IN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
