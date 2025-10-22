// Type definitions for the presentation app

export interface StatCardProps {
  number: string;
  label: string;
  link?: string;
  linkLabel?: string;
}

export interface AgendaItemProps {
  icon: React.ReactNode;
  text: string;
}

export interface SpectrumItemProps {
  title: React.ReactNode;
  description: string;
  level?: number;
}

export interface FrameworkSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export interface TechniqueBoxProps {
  title?: string;
  children: React.ReactNode;
}

export interface SlideProps {
  isActive: boolean;
}

export interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export interface SlideNumberProps {
  current: number;
  total: number;
}

export interface DevTool {
  name: string;
  aiModel: string;
  type: string;
  features: string;
  free: string;
  link?: string;
}
