import React from 'react';
import { Settings2, CheckCircle } from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="space-y-4" id="services">
      {/* Title Header */}
      <div className="retro-raised bg-[#ffebd4] p-4 border border-[#727974] flex justify-between items-center">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 bg-[#2f4d41] text-[#e7e965]">
            <Settings2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-space text-lg sm:text-xl font-bold text-[#18362b]">
              SERVICES.SYS — Strategic Offerings &amp; Consulting
            </h2>
            <p className="font-sans-body text-xs text-[#414845]">
              Tailored software engineering and performance marketing services ready for execution.
            </p>
          </div>
        </div>
        <span className="font-jetbrains text-xs bg-[#e7e965] text-[#18362b] px-3 py-1 font-bold border border-[#18362b] hidden sm:inline-block">
          READY FOR INGESTION
        </span>
      </div>

      {/* 6 Tactile Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES_LIST.map((service) => (
          <div
            key={service.id}
            onClick={() => playTactileClick()}
            className="retro-raised bg-[#ffebd4] p-5 border border-[#727974] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-150 group"
          >
            <div>
              <div className="font-jetbrains text-xs font-bold text-[#616200] group-hover:text-[#18362b] mb-1">
                {service.number} // {service.category}
              </div>

              <h3 className="font-space text-base font-bold text-[#18362b] mb-2 tracking-tight">
                {service.title}
              </h3>

              <p className="font-sans-body text-xs text-[#414845] leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="space-y-1.5 border-t border-[#c1c8c3] pt-3">
                <span className="font-jetbrains text-[10px] text-[#18362b] font-bold uppercase tracking-wider block">
                  Core Deliverables:
                </span>
                {service.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-[#414845]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#616200] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#d8c2a8]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playTactileClick();
                  onOpenContact();
                }}
                className="w-full retro-btn bg-[#fff1e4] text-[#18362b] py-2 font-jetbrains text-xs font-bold hover:bg-[#e7e965] transition-colors text-center"
              >
                [INQUIRE ABOUT THIS SUBSYSTEM]
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
