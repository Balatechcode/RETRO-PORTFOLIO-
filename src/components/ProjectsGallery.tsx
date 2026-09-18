import React, { useState } from 'react';
import { FolderOpen, ArrowRight, ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { playTactileClick } from '../utils/sound';

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Full Stack', 'E-Commerce', 'Mobile', 'Agency'];

  const filteredProjects =
    filterCategory === 'ALL'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filterCategory);

  return (
    <section className="space-y-6" id="projects">
      {/* Title & Filters */}
      <div className="retro-raised bg-[#ffebd4] p-4 border border-[#727974] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 bg-[#2f4d41] text-[#e7e965]">
            <FolderOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-space text-lg sm:text-xl font-bold text-[#18362b]">
              PROJECTS.EXE — Production Applications
            </h2>
            <p className="font-sans-body text-xs text-[#414845]">
              Real-world systems engineered for commercial conversion, performance &amp; scale.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1 font-jetbrains text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playTactileClick();
                  setFilterCategory(cat);
                }}
                className={`px-3 py-1 font-bold border transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#2f4d41] text-[#e7e965] border-[#18362b]'
                    : 'bg-[#fff1e4] text-[#18362b] border-[#c1c8c3] hover:bg-[#e7e965]'
                }`}
              >
                [{cat.toUpperCase()}]
              </button>
            ))}
          </div>

          <span className="font-jetbrains text-xs bg-[#18362b] text-[#e7e965] px-3 py-1 font-bold border border-[#18362b] hidden sm:inline-block">
            {filteredProjects.length} BINARIES
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => {
          const isWideBanner = project.id === 'localhub' && filterCategory === 'ALL';

          return (
            <div
              key={project.id}
              className={`retro-raised bg-[#ffebd4] p-4 sm:p-5 flex flex-col justify-between border border-[#727974] hover:shadow-xl transition-all duration-150 ${
                isWideBanner ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Card Titlebar */}
                <div className="bg-[#2f4d41] text-[#fff8f4] px-3.5 py-1.5 flex items-center justify-between mb-3.5 shadow-sm">
                  <span className="font-jetbrains text-xs font-bold">
                    BIN_{String(index + 1).padStart(2, '0')} // {project.exeName}
                  </span>
                  <span className="font-jetbrains text-[10px] text-[#e7e965] font-bold">
                    [{project.tagline.toUpperCase()}]
                  </span>
                </div>

                {/* Dark Terminal Preview */}
                <div className="retro-sunken-dark bg-[#1b2924] text-[#fff8f4] p-4 mb-4 border border-[#2f4d41]">
                  <div className="border-b border-[#2f4d41] pb-2 mb-2 flex justify-between items-center font-jetbrains text-[11px] text-[#e7e965]">
                    <span>STATUS: {project.status}</span>
                    <span className="text-[#a9b9b2]">{project.category}</span>
                  </div>

                  <div className="font-space text-lg font-bold text-[#e7e965] mb-1">
                    {project.title}
                  </div>

                  <p className="font-sans-body text-xs sm:text-sm text-[#d6e6de] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Engineered Features Checklist */}
                <div className="space-y-2 mb-4">
                  <h5 className="font-jetbrains text-[11px] text-[#18362b] font-bold uppercase tracking-wider">
                    Core Engineered Features:
                  </h5>
                  <ul className="text-xs font-sans-body text-[#414845] space-y-1.5">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#616200] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#fff1e4] text-[#18362b] font-jetbrains text-[10px] font-bold border border-[#c1c8c3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#c1c8c3]">
                <button
                  onClick={() => {
                    playTactileClick();
                    onSelectProject(project);
                  }}
                  className="retro-btn bg-[#18362b] text-[#fff8f4] py-2.5 px-4 font-jetbrains text-xs font-bold flex-1 flex items-center justify-between phosphor-glow"
                >
                  <span>INSPECT BINARY ARCHITECTURE →</span>
                  <ExternalLink className="w-4 h-4 text-[#e7e965]" />
                </button>

                <button
                  onClick={() => {
                    playTactileClick();
                    onOpenContact();
                  }}
                  className="retro-btn bg-[#e7e965] text-[#18362b] py-2.5 px-3 font-jetbrains text-xs font-bold hover:bg-[#cbcd4c] transition-colors"
                  title="Discuss similar project"
                >
                  <span>BUILD SIMILAR</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
