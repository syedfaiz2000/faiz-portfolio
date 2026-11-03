export interface Skill {
  name: string;
  level: number; // 0-100
  years: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "Live" | "In Progress" | "Archived";
  tech: string[];
  features: string[];
  thumbnail: string;
  demo: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
  achievements: string[];
}

export interface EducationItem {
  institute: string;
  degree: string;
  duration: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
  initials: string;
}

export interface Certificate {
  name: string;
  org: string;
  year: string;
  url: string;
  achievement: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
