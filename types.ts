
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  size: 'small' | 'medium' | 'large';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Article {
  id: string;
  date: string;
  title: string;
  summary: string;
  link: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  id: string;
  image?: string;
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
}
