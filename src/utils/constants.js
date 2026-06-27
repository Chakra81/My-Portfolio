import { Code2, Server, Database, Brain, Wrench, GraduationCap, Trophy, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Tech Stack', to: 'tech-stack' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export const TYPING_TEXT = [
  "Python Full Stack Developer",
  "React Developer",
  "Django Developer",
  "Artificial Intelligence Graduate",
  "Prompt Engineering Enthusiast"
];

export const STATS = [
  { label: 'Graduated', value: '2026' },
  { label: 'CGPA', value: '8.5' },
  { label: 'Projects Completed', value: '5+' },
  { label: 'Internships', value: '2' },
];

export const SKILLS = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'Java', 'C'],
  },
  {
    category: 'Frontend',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React.js', 'jQuery'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Python', 'Django', 'Flask', 'Django REST Framework', 'REST APIs'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['SQL'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Axios'],
  },
  {
    category: 'AI Tools',
    icon: Brain,
    items: ['ChatGPT', 'GitHub Copilot', 'VectorShift', 'Gamma', 'Napkin AI', 'n8n', 'Canva AI', 'AWS CodeWhisperer', 'DebugCode AI'],
  },
];

export const PROJECTS = [
  {
    title: 'KRAVIA',
    subtitle: 'Training Institute Management System',
    description: 'Developed a complete Training Institute Management System with Admin, Trainer, and Student dashboards.',
    features: ['Student Management', 'Trainer Management', 'Course Management', 'Batch Management', 'Attendance Analytics', 'Fee Management', 'Placements', 'Online Exams', 'Study Planner', 'Assignments', 'Certificates', 'Resume Builder', 'Live Classes', 'Notifications', 'Messaging', 'AI Chat Support', 'Role-Based Authentication'],
    tech: ['React.js', 'Django', 'DRF', 'SQL', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop', // Placeholder for aesthetics
    live: '#',
    github: '#',
  },
  {
    title: 'Cloud Based AI ERP Platform',
    subtitle: 'Enterprise Management',
    description: 'Enterprise cloud-based ERP platform with AI-powered business management modules and frontend-backend integration.',
    features: ['AI Integration', 'Cloud Native', 'Business Modules'],
    tech: ['React.js', 'Node.js', 'AI Integration', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'House Price Prediction',
    subtitle: 'Machine Learning Model',
    description: 'Built a predictive model utilizing data analysis and machine learning techniques to forecast house prices accurately.',
    features: ['Data Preprocessing', 'Model Training', 'Prediction'],
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Prediction Model'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'AI Chatbot',
    subtitle: 'NLP Assistant',
    description: 'Developed an intelligent chatbot leveraging Natural Language Processing for conversational assistance.',
    features: ['Intent Recognition', 'Context Awareness'],
    tech: ['Python', 'Artificial Intelligence', 'Natural Language Processing'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1406&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'Trello Clone',
    subtitle: 'Task Management',
    description: 'A responsive task management application implementing full CRUD operations with a modern UI.',
    features: ['Board Creation', 'Drag and Drop', 'Task Status'],
    tech: ['React.js', 'Django', 'CRUD', 'Task Management', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1339&auto=format&fit=crop',
    live: '#',
    github: '#',
  }
];

export const INTERNSHIPS = [
  {
    company: 'Krify Private Solutions',
    role: 'Python Full Stack Developer Trainee',
    duration: 'Dec 2025 - June 2026',
    highlights: ['React', 'Django', 'DRF', 'REST APIs', 'SQL', 'Git', 'Industry Projects']
  },
  {
    company: 'Glossary SoftTech',
    role: 'Prompt Engineering Internship',
    duration: '2025',
    highlights: ['ChatGPT', 'VectorShift', 'GitHub Copilot', 'Canva AI', 'AWS CodeWhisperer', 'n8n', 'Gamma', 'Napkin AI']
  }
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'University', // Placeholder
    year: '2026',
    score: 'CGPA: 8.65'
  },
  {
    degree: 'Intermediate',
    institution: 'College', // Placeholder
    year: '2023', // Placeholder
    score: '96%'
  }
];

export const CERTIFICATIONS = [
  'Data Analytics with Python - NPTEL',
  'Artificial Intelligence with Python - Infosys Springboard',
  'Introduction to Artificial Intelligence - NPTEL',
  'Types of Artificial Intelligence',
  'Natural Language Processing'
];

export const ACHIEVEMENTS = [
  'Python Full Stack Certification',
  'AI Internship',
  'Real-world ERP Development',
  'Machine Learning Projects',
  'React + Django Projects',
  'Prompt Engineering Experience'
];

export const SERVICES = [
  'Python Development',
  'React Development',
  'Django Backend Development',
  'REST API Development',
  'AI Integration',
  'Responsive Website Development'
];

export const CONTACT_INFO = {
  email: 'gsna42474@gmail.com',
  phone: '+91 8143739968',
  location: 'Kakinada, Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/chakraveni-katari-244484364',
  aiPortfolio: 'https://app.vectorshift.ai/chatbots/embedded/684ea2a466d4e37c5d450084'
};
