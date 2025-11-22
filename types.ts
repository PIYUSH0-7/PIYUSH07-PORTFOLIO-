import React from 'react';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  logo?: React.ReactNode;
  url?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  logo?: React.ReactNode;
  url?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  website?: string;
  source?: string;
  icon?: React.ReactNode;
}

export interface HackathonItem {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  logo?: React.ReactNode;
  url?: string;
}

export interface SkillItem {
  name: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}