import React from 'react';
import { History, CheckCircle2, Calendar, MapPin, Building2, Briefcase } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

export const ExperienceSection: React.FC = () => {
  const currentRole = EXPERIENCE_LIST.find((e) => e.type === 'CURRENT ROLE');
  const projectRoles = EXPERIENCE_LIST.filter((e) => e.type === 'PROJECT EXP');

  return (
    <section className="retro-raised bg-[#ffebd4] p-4 sm:p-5 border border-[#727974]" id="experience">
      <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <History className="w-4 h-4 text-[#e7e965]" />
          <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
            EXPERIENCE.LOG — Career &amp; Project Track Record
          </span>
        </div>
        <span className="font-jetbrains text-[10px] bg-[#e7e965] text-[#18362b] px-2.5 py-0.5 font-bold border border-[#18362b]">
          {EXPERIENCE_LIST.length} LOGGED ENTRIES
        </span>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Current Primary Corporate Role Card */}
        {currentRole && (
          <div className="retro-raised bg-[#fff1e4] border-2 border-[#18362b] p-6 relative">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span className="bg-[#e7e965] text-[#18362b] px-2.5 py-0.5 font-jetbrains text-[11px] font-bold border border-[#18362b]">
                    CURRENT ROLE
                  </span>
                  <span className="font-jetbrains text-xs text-[#414845]">
                    INDUSTRIAL B2B SUBSYSTEM
                  </span>
                </div>
                <h3 className="font-space text-2xl font-bold text-[#18362b] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#2f4d41]" />
                  <span>{currentRole.company}</span>
                </h3>
                <p className="font-jetbrains text-sm text-[#2f4d41] font-bold mt-0.5">
                  {currentRole.role}
                </p>
              </div>

              <div className="text-right font-jetbrains text-xs">
                <span className="font-bold text-[#18362b] flex items-center gap-1 sm:justify-end">
                  <Calendar className="w-3.5 h-3.5 text-[#616200]" />
                  <span>{currentRole.period}</span>
                </span>
                <span className="text-[#414845] flex items-center gap-1 sm:justify-end mt-0.5">
                  <MapPin className="w-3 h-3 text-[#18362b]" />
                  <span>{currentRole.location}</span>
                </span>
              </div>
            </div>

            <div className="space-y-3 font-sans-body text-sm sm:text-base text-[#251909]">
              <p className="leading-relaxed">{currentRole.description}</p>

              <div className="pt-2">
                <h5 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider mb-2">
                  Key Achievements &amp; Deployed Deliverables:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {currentRole.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#414845]">
                      <CheckCircle2 className="w-4 h-4 text-[#616200] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Roles Grid */}
        <div>
          <h4 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider mb-3">
            PROJECT ENGINEERING &amp; CLIENT EXPERIENCE:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectRoles.map((item) => (
              <div
                key={item.id}
                onClick={() => playTactileClick()}
                className="retro-sunken bg-[#fff1e4] p-4 border border-[#c1c8c3] flex flex-col justify-between hover:bg-[#ffebd4] transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-1.5">
                    <h5 className="font-space text-base font-bold text-[#18362b] flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#2f4d41]" />
                      <span>{item.company}</span>
                    </h5>
                    <span className="font-jetbrains text-[10px] bg-[#ffebd4] text-[#18362b] px-2 py-0.5 border border-[#c1c8c3] font-bold">
                      {item.period}
                    </span>
                  </div>

                  <p className="font-jetbrains text-xs text-[#616200] font-bold mb-2">
                    {item.role}
                  </p>

                  <p className="font-sans-body text-xs text-[#414845] leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-[#d8c2a8] pt-2 space-y-1">
                  {item.highlights.map((hl, index) => (
                    <p key={index} className="font-jetbrains text-[11px] text-[#251909] flex items-center gap-1">
                      <span className="text-[#616200] font-bold">&gt;</span>
                      <span>{hl}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
