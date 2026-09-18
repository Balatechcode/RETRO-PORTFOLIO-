/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BootOverlay } from './components/BootOverlay';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { StatsGrid } from './components/StatsGrid';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { TechStackMap } from './components/TechStackMap';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ServicesSection } from './components/ServicesSection';
import { MarketingLab } from './components/MarketingLab';
import { AutomationTerminal } from './components/AutomationTerminal';
import { EducationAndUpgrading } from './components/EducationAndUpgrading';
import { CreatorAndResume } from './components/CreatorAndResume';
import { ContactSection } from './components/ContactSection';
import { BottomTaskbar } from './components/BottomTaskbar';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';
import { playTactileClick } from './utils/sound';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleOpenContact = () => {
    playTactileClick();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    playTactileClick();
    setIsResumeOpen(true);
  };

  return (
    <div className="bg-[#edd6bb] text-[#251909] font-sans-body relative min-h-screen selection:bg-[#e7e965] selection:text-[#18362b]">
      {/* Universal CRT Scanlines Overlay */}
      <div className="fixed inset-0 crt-scanlines z-[70] pointer-events-none"></div>

      {/* Interactive OS Boot Sequence */}
      <BootOverlay />

      {/* Retro Top Menu Bar */}
      <TopNav
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Main Workspace Desktop Canvas */}
      <main className="dot-matrix-canvas pt-14 pb-20 px-3 sm:px-6 lg:px-10 max-w-[1480px] mx-auto space-y-12 sm:space-y-16">
        {/* Hero Workstation */}
        <Hero
          onOpenResume={handleOpenResume}
          onOpenContact={handleOpenContact}
        />

        {/* 4 Quick Tactile Stats Cards */}
        <StatsGrid />

        {/* About.exe System Properties & ID Badge */}
        <AboutSection />

        {/* Experience.log Career & Project Track Record */}
        <ExperienceSection />

        {/* Skills.dat Control Panel */}
        <SkillsSection />

        {/* Central Architecture CPU Stack Map */}
        <TechStackMap />

        {/* Projects.exe Gallery Showcase */}
        <ProjectsGallery
          onSelectProject={(p) => setSelectedProject(p)}
          onOpenContact={handleOpenContact}
        />

        {/* Services.sys Strategic Offerings */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Marketing.lab Growth & Conversion Engine */}
        <MarketingLab />

        {/* Automation.lab Interactive Shell */}
        <AutomationTerminal
          onOpenContact={handleOpenContact}
          onOpenResume={handleOpenResume}
        />

        {/* Education & Continuous Upgrading Daemon */}
        <EducationAndUpgrading />

        {/* Creator Mode & Resume Explorer */}
        <CreatorAndResume
          onOpenResume={handleOpenResume}
          onOpenContact={handleOpenContact}
        />

        {/* Contact.exe Lead Generation Dispatch */}
        <ContactSection />
      </main>

      {/* Bottom Taskbar & Start Menu */}
      <BottomTaskbar
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Project Deep Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* CV Viewer & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
