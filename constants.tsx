
import { Project, Experience, Article, Certificate, Education } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Writing', href: '#writing' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'HSBC Electronic Data Processing (Guangdong) Limited',
    period: 'Feb 2025 - Nov 2025',
    description: [
      'Reduced cloud platform bills by 90% by implementing Flink Operator with Kubernetes, enabling automatic scaling of task manager pods.',
      'Developed and maintained the banking platform using Flask, Redis, and Angular, ensuring reliable performance.',
      'Established a CI/CD pipeline using Jenkins to automate sanity checks, slashing the testing cycle time from 4 hours to 30 minutes.',
      'Migrated legacy applications to GKE on GCP, enhancing system scalability and data processing capabilities for TB-scale datasets.'
    ],
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'SAE Magnetics (HK) LTD (TDK Group)',
    period: 'Oct 2024 - Feb 2025',
    description: [
      'Engineered an automated data pipeline using NumPy/Pandas to analyze HDD performance metrics, replacing manual workflows and slashing reporting time by ~95%.',
      'Developed a multi-threaded Python daemon on Linux to orchestrate system testing workflows, implementing a PID control algorithm to synchronize device states with <1s latency.'
    ],
  },
  {
    id: '3',
    role: 'Java Software Engineer',
    company: 'Beijing Seeyon Software Co., Ltd.',
    period: 'Feb 2021 - Aug 2021',
    description: [
      'Developed a third-party software access module using Spring Boot by integrating multiple third-party APIs.',
      'Resolved abnormal data-structure issues arising from client version migrations by building a Java utility with Hibernate to automate SQL execution, reducing labor costs by ~70%.'
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Remino',
    description: 'AI-Powered Spaced Repetition Learning Platform (SaaS). Local-First architecture using LWW Element Sets, unified AI Gateway with Redis rate limiting, RAG pipeline for semantic chunking, and switchable scheduling algorithms (FSRS, Leitner).',
    tags: ['React', 'Python', 'Redis', 'OpenAI', 'Gemini', 'FSRS'],
    link: 'https://remino.co/',
    size: 'large',
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    date: '2026.02.15',
    title: 'The Future of Deterministic AI Systems',
    summary: 'Exploring how we move from probabilistic outputs to reliable, verifiable machine intelligence.',
    link: '#',
  },
  {
    id: '2',
    date: '2025.11.02',
    title: 'Minimalism in Software Architecture',
    summary: 'Why less code is often the superior solution for long-term maintainability.',
    link: '#',
  },
  {
    id: '3',
    date: '2025.08.20',
    title: 'Scaling Vector Databases for Enterprise',
    summary: 'Lessons learned from deploying high-throughput RAG systems in production.',
    link: '#',
  },
];

export const CERTIFICATES: Certificate[] = [
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', id: 'AWS-1', image: '/certificates/aws-certified-developer-associate.b4c74a12.png', url: 'https://www.credly.com/badges/e7c2573a-3dee-492b-a546-9171688adbf2/linked_in_profile' },
  { name: 'GitHub Actions (CI/CD)', issuer: 'GitHub', id: 'GH-1', image: '/certificates/github-actions.6a453450.png', url: 'https://www.credly.com/badges/fb011777-c2b6-4101-9686-5b48ed6a8de8/linked_in_profile' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', id: 'PSM-1', image: '/certificates/professional-scrum-master-i-psm-i.d96a1801.png', url: 'https://www.credly.com/badges/b7af8d18-325a-42ab-b257-fea0c5f81851/linked_in_profile' },
  { name: 'Meta Backend Developer', issuer: 'Meta', id: 'META-1', image: '/certificates/Meta.png', url: 'https://www.coursera.org/account/accomplishments/specialization/UFQEPQG4LFRH' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', id: 'AWS-CP', image: '/certificates/cloud_practioner.png', url: 'https://www.credly.com/badges/60b772c7-aa7b-46af-a31d-89f9a6a282ff/linked_in_profile' },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: '1',
    degree: 'Master of Applied Science',
    major: 'Computer Engineering',
    school: 'Memorial University of Newfoundland',
    location: 'St. John\'s, NL',
    period: 'May 2024',
    gpa: '3.9/4',
  },
];
