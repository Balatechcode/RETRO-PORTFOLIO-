import React from 'react';
import { GraduationCap, TrendingUp, BookOpen } from 'lucide-react';
import { SYSTEM_INFO } from '../data/portfolioData';

export const EducationAndUpgrading: React.FC = () => {
  const upgradingSkills = [
    { name: 'Flutter & Cross-Platform Architecture', percentage: 92 },
    { name: 'Advanced AI Tooling & Autonomous Agents', percentage: 88 },
    { name: 'High-Scale Workflow Automation', percentage: 95 },
    { name: 'Enterprise Full Stack Systems (Node / Next)', percentage: 90 },
    { name: 'Product Architecture & Commercial CRO', percentage: 85 },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* EDUCATION.TXT */}
      <div className="lg:col-span-6 retro-raised bg-[#ffebd4] p-5 border border-[#727974] flex flex-col justify-between">
        <div>
          <div className="bg-[#2f4d41] text-[#fff8f4] px-3.5 py-1.5 flex items-center justify-between mb-4 shadow-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#e7e965]" />
              <span className="font-jetbrains text-xs font-bold">
                DOCUMENT: EDUCATION.TXT
              </span>
            </div>
            <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
              [ACADEMIC CREDENTIALS]
            </span>
          </div>

          <div className="space-y-4">
            <div className="border-b border-[#c1c8c3] pb-3.5">
              <div className="flex justify-between items-start">
                <h3 className="font-space text-lg font-bold text-[#18362b]">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <span className="font-jetbrains text-xs bg-[#e7e965] text-[#18362b] px-2 py-0.5 font-bold border border-[#18362b]">
                  GRADUATED 2025
                </span>
              </div>
              <p className="font-jetbrains text-xs text-[#616200] font-bold mt-0.5">
                Veer Narmad South Gujarat University
              </p>
              <p className="font-sans-body text-xs sm:text-sm text-[#414845] mt-2 leading-relaxed">
                Comprehensive training across relational databases (RDBMS), object-oriented programming, algorithms, computer networks, and full stack web engineering.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-space text-base font-bold text-[#18362b]">
                  Commerce Background Foundation
                </h4>
                <span className="font-jetbrains text-[11px] text-[#414845]">
                  FOUNDATION
                </span>
              </div>
              <p className="font-sans-body text-xs sm:text-sm text-[#414845] mt-1.5 leading-relaxed">
                Prior education in commerce and market economics provides the acute business instinct needed to understand customer acquisition costs (CAC), lifetime value (LTV), and real-world conversion funnel economics.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#d8c2a8] text-[11px] font-jetbrains text-[#414845]">
          STATUS: DEGREE CONFERRED • ACADEMIC VERIFICATION AVAILABLE ON REQUEST
        </div>
      </div>

      {/* CURRENTLY_UPGRADING */}
      <div className="lg:col-span-6 retro-raised bg-[#ffebd4] p-5 border border-[#727974] flex flex-col justify-between">
        <div>
          <div className="bg-[#2f4d41] text-[#fff8f4] px-3.5 py-1.5 flex items-center justify-between mb-4 shadow-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#e7e965]" />
              <span className="font-jetbrains text-xs font-bold">
                SYS_DAEMON: CURRENTLY_UPGRADING
              </span>
            </div>
            <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
              [CONTINUOUS EXPANSION]
            </span>
          </div>

          <div className="space-y-3.5">
            {upgradingSkills.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between font-jetbrains text-xs mb-1">
                  <span className="font-bold text-[#18362b]">{item.name}</span>
                  <span className="text-[#616200] font-bold">{item.percentage}%</span>
                </div>
                <div className="retro-sunken bg-[#fff1e4] h-3.5 p-0.5 border border-[#c1c8c3]">
                  <div
                    className="bg-[#2f4d41] h-full transition-all duration-500 relative overflow-hidden"
                    style={{ width: `${item.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-[#e7e965] opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#d8c2a8] text-[11px] font-jetbrains text-[#414845] flex justify-between items-center">
          <span>DAILY CADENCE: 2 HOURS DEDICATED LAB EXPERIMENTATION</span>
          <span className="text-[#616200] font-bold">● ACTIVE</span>
        </div>
      </div>
    </section>
  );
};
