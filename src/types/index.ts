export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  accentColor: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
}

export interface BusinessProblem {
  id: string;
  problemTitle: string;
  problemDescription: string;
  symptom: string;
  solutionTitle: string;
  solutionDescription: string;
  impactMetrics: string;
  iconName: string;
  category: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  clientType: string;
  category: 'Web Development' | 'Mobile Apps' | 'UI/UX Design' | 'AI Projects' | 'Branding';
  year: string;
  featured: boolean;
  coverImage: string;
  accentGradient: string;
  overview: string;
  challenge: string;
  solution: string;
  process: {
    phase: string;
    description: string;
  }[];
  technologies: string[];
  mockups: {
    type: 'desktop' | 'mobile' | 'code' | 'dashboard';
    title: string;
    caption: string;
    previewAccent: string;
  }[];
  results: {
    metric: string;
    label: string;
    note?: string;
  }[];
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'AI' | 'Design' | 'DevOps';
  level: string;
  description: string;
  highlight?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string[];
  budgetTier: string;
  description: string;
  needsNda: boolean;
}
