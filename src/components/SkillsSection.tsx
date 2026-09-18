import React, { useState } from 'react';
import { Cpu, Search, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { playTactileClick, playTerminalKey } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => {
    if (selectedCategory !== 'ALL' && cat.number !== selectedCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section className="retro-raised bg-[#ffebd4] p-4 sm:p-5 border border-[#727974]" id="skills">
      {/* Title Bar */}
      <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-[#e7e965]" />
          <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
            SKILLS.DAT — Control Panel &amp; Technical Hardware Circuits
          </span>
        </div>
        <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
          BUS_SPEED: 800MHz OK
        </span>
      </div>

      {/* Control Bar: Search & Category Filter */}
      <div className="p-4 sm:p-6 pb-2 border-b border-[#c1c8c3] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 font-jetbrains text-xs">
          <button
            onClick={() => {
              playTactileClick();
              setSelectedCategory('ALL');
            }}
            className={`px-3 py-1 font-bold border transition-colors cursor-pointer ${
              selectedCategory === 'ALL'
                ? 'bg-[#2f4d41] text-[#e7e965] border-[#18362b]'
                : 'bg-[#fff1e4] text-[#18362b] border-[#c1c8c3] hover:bg-[#e7e965]'
            }`}
          >
            [ALL CATEGORIES]
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.number}
              onClick={() => {
                playTactileClick();
                setSelectedCategory(cat.number);
              }}
              className={`px-3 py-1 font-bold border transition-colors cursor-pointer ${
                selectedCategory === cat.number
                  ? 'bg-[#2f4d41] text-[#e7e965] border-[#18362b]'
                  : 'bg-[#fff1e4] text-[#18362b] border-[#c1c8c3] hover:bg-[#e7e965]'
              }`}
            >
              [{cat.number} {cat.title.split(' ')[0]}]
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#727974]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              playTerminalKey();
              setSearchTerm(e.target.value);
            }}
            placeholder="Search skill (e.g. React)..."
            className="w-full retro-sunken bg-[#fff1e4] pl-9 pr-3 py-1.5 font-jetbrains text-xs text-[#251909] focus:outline-none focus:ring-1 focus:ring-[#18362b] placeholder:text-[#727974]"
          />
        </div>
      </div>

      {/* Grid of 6 Modules */}
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((cat) => (
          <div
            key={cat.number}
            className="retro-sunken bg-[#fff1e4] p-4 border border-[#c1c8c3] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#c1c8c3] pb-2 mb-3">
                <span className="font-space text-sm font-bold text-[#18362b]">
                  {cat.number} // {cat.title}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#616200] animate-pulse"></span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    onClick={() => playTactileClick()}
                    className={`px-2.5 py-1 font-jetbrains text-xs font-bold border transition-transform active:scale-95 cursor-default ${
                      skill.isHighlight
                        ? 'retro-raised bg-[#e7e965] text-[#1c1d00] border-[#18362b] shadow-sm'
                        : 'retro-raised bg-[#ffebd4] text-[#18362b] border-[#c1c8c3]'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-[#d8c2a8] flex justify-between items-center text-[10px] font-jetbrains text-[#414845]">
              <span>STATUS: LOADED</span>
              <span className="flex items-center gap-1 text-[#616200] font-bold">
                <Check className="w-3 h-3" />
                <span>100% OPERATIONAL</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
