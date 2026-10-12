import { Profile, Skill, EducationEntry, Project, AppMetadata } from '../types';

export const DEFAULT_PROFILE: Profile = {
  fullName: 'Ali Salaheldin',
  registrationNumber: '2526883',
  verificationCode: 'MOB-A2-6883',
  headline: 'Mobile Application Developer',
  biography: 'Passionate software engineering student with a focus on mobile development using React Native and Expo. Experienced in building cross-platform applications with modern tooling.',
  primarySkill: 'React Native',
  availability: 'available',
  profileImageUri: null,
};

export const SKILLS: Skill[] = [
  { id: '1', name: 'React Native' },
  { id: '2', name: 'TypeScript' },
  { id: '3', name: 'JavaScript/ES6+' },
  { id: '4', name: 'Expo' },
  { id: '5', name: 'Git/GitHub' },
  { id: '6', name: 'REST APIs' },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: '1',
    institution: 'INES-Ruhengeri',
    qualification: 'Bachelor of Software Engineering',
    startDate: '2023',
    endDate: '2026',
    description: 'Focus on mobile application development, software architecture, and agile methodologies.',
  },
  {
    id: '2',
    institution: 'INES-Ruhengeri',
    qualification: 'SWE 3409 - Mobile Application Development',
    startDate: '2026',
    endDate: '2026',
    description: 'Course covering React Native, Expo, TypeScript, and mobile app deployment.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Reflect',
    problem: 'Students and professionals struggle to maintain consistent reflection habits for personal growth and learning retention.',
    contribution: 'Designed and developed the complete mobile application including UI/UX, state management, local persistence, and export functionality.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'React Navigation'],
    description: 'A personal reflection journal app that helps users build a daily reflection habit. Features guided prompts, mood tracking, searchable entries, and data export. Built as a solo project demonstrating full-stack mobile development skills.',
  },
  {
    id: '2',
    title: 'Musanze Cooperative Harvest & Dispatch Decision Pipeline',
    problem: 'Agricultural cooperatives in Musanze district faced challenges coordinating harvest schedules, quality grading, and dispatch logistics leading to post-harvest losses.',
    contribution: 'Led the mobile client development team. Implemented offline-first data collection, GPS-tagged harvest records, photo evidence capture, and synchronization logic for intermittent connectivity.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Expo Location', 'Expo ImagePicker'],
    description: 'A decision support system for agricultural cooperatives enabling harvest tracking, quality assessment, and dispatch optimization. The mobile app works offline in rural areas and syncs when connectivity is available. Team project with 4 developers.',
  },
];

export const APP_METADATA: AppMetadata = {
  appName: 'AliPortfolio',
  version: '1.0.0',
  dataUseStatement: 'This application stores your editable profile information locally on your device using AsyncStorage. No data is transmitted to external servers. Camera and gallery permissions are requested only when you choose to update your profile photo. You can reset your profile data at any time from the Profile Editor screen.',
};