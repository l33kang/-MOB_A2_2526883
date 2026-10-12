export type AvailabilityStatus = 'available' | 'unavailable' | 'not-specified';

export interface Profile {
  fullName: string;
  registrationNumber: string;
  verificationCode: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: AvailabilityStatus;
  profileImageUri: string | null;
}

export interface Skill {
  id: string;
  name: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technologies: string[];
  description: string;
}

export interface AppMetadata {
  appName: string;
  version: string;
  dataUseStatement: string;
}

export interface ValidationError {
  field: string;
  message: string;
}