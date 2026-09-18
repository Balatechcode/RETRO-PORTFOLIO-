export interface Project {
  id: string;
  title: string;
  exeName: string;
  tagline: string;
  category: 'Full Stack' | 'E-Commerce' | 'Mobile' | 'Agency';
  status: 'LIVE' | 'SCALED' | 'OPERATIONAL';
  description: string;
  longDescription: string;
  features: string[];
  metrics: string[];
  technologies: string[];
  link?: string;
  github?: string;
  architectureHighlights: string[];
}

export interface SkillCategory {
  number: string;
  title: string;
  skills: { name: string; isHighlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: 'CURRENT ROLE' | 'PROJECT EXP';
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}
