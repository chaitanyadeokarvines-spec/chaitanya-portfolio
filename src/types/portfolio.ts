export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  accentColor: string;
  externalUrl: string;
  shortDescription: string;
  tags: string[];
  caseStudy: {
    overview: string;
    objectives: string[];
    role: string;
    creativeApproach: string;
    workShowcaseDescription: string;
    outcomeAndLearnings: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  colorName: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  iconType: 'social' | 'strategy' | 'video' | 'ads';
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  color: string;
  badgeBg: string;
}

export interface SkillItem {
  name: string;
  category: 'Strategy' | 'Content' | 'Technical' | 'Marketing';
  colorClass: string;
}
