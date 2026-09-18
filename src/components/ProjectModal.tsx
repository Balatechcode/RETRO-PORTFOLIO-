import React from 'react';
import { ExternalLink, CheckCircle2, Cpu, ShieldCheck, X } from 'lucide-react';
import { Project } from '../types';
import { playTactileClick } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-[#3c2e1c]/70 backdrop-blur-xs z-[80] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="retro-raised bg-[#ffebd4] max-w-2xl w-full p-4 sm:p-5 border-2 border-[#18362b] shadow-2xl my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Title Bar */}
        <div className="bg-[#2f4d41] text-[#fff8f4] px-4 py-2 flex items-center justify-between mb-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#e7e965]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-wider">
              {project.exeName} — Deep System Inspection
            </span>
          </div>
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="w-5 h-5 bg-[#e7e965] text-[#18362b] font-bold border border-[#18362b] flex items-center justify-center hover:bg-[#cbcd4c]"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="retro-sunken bg-[#fff1e4] p-4 sm:p-5 space-y-4 border border-[#c1c8c3] max-h-[75vh] overflow-y-auto">
          {/* Header Summary */}
          <div className="border-b border-[#c1c8c3] pb-3">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
              <span className="font-jetbrains text-xs bg-[#e7e965] text-[#18362b] px-2.5 py-0.5 font-bold border border-[#18362b]">
                {project.category.toUpperCase()}
              </span>
              <span className="font-jetbrains text-xs text-[#616200] font-bold">
                STATUS: {project.status}
              </span>
            </div>
            <h3 className="font-space text-2xl font-bold text-[#18362b]">
              {project.title}
            </h3>
            <p className="font-jetbrains text-xs text-[#2f4d41] font-bold">
              {project.tagline}
            </p>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h5 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider">
              SYSTEM BRIEF &amp; OBJECTIVE:
            </h5>
            <p className="font-sans-body text-sm text-[#251909] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h5 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider">
              ENGINEERED CAPABILITIES:
            </h5>
            <ul className="space-y-1.5 font-sans-body text-xs text-[#414845]">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#616200] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics & Performance */}
          <div className="space-y-2">
            <h5 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider">
              MEASURABLE COMMERCIAL IMPACT:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {project.metrics.map((metric, i) => (
                <div key={i} className="retro-raised bg-[#ffebd4] p-2.5 border border-[#c1c8c3] text-center font-jetbrains text-xs font-bold text-[#18362b]">
                  {metric}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-2">
            <h5 className="font-jetbrains text-xs font-bold text-[#18362b] uppercase tracking-wider">
              TECHNICAL ARCHITECTURE HIGHLIGHTS:
            </h5>
            <div className="bg-[#18362b] text-[#d6e6de] p-3 font-jetbrains text-xs space-y-1 border border-[#2f4d41]">
              {project.architectureHighlights.map((arch, i) => (
                <p key={i} className="flex items-start gap-1.5">
                  <span className="text-[#e7e965]">&gt;</span>
                  <span>{arch}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="pt-2">
            <span className="font-jetbrains text-[10px] text-[#18362b] font-bold uppercase block mb-1.5">
              TECHNOLOGIES DEPLOYED:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-[#ffebd4] text-[#18362b] font-jetbrains text-xs font-bold border border-[#c1c8c3]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap justify-end gap-3 mt-4 pt-2">
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="retro-btn bg-[#fff1e4] px-4 py-2 font-jetbrains text-xs font-bold text-[#18362b] hover:bg-[#ffebd4]"
          >
            [DISMISS WINDOW]
          </button>

          <button
            onClick={() => {
              playTactileClick();
              onClose();
              onOpenContact();
            }}
            className="retro-btn bg-[#2f4d41] text-[#fff8f4] px-5 py-2 font-jetbrains text-xs font-bold flex items-center gap-1.5 phosphor-glow"
          >
            <span>[DISCUSS SIMILAR BUILD]</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#e7e965]" />
          </button>
        </div>
      </div>
    </div>
  );
};
