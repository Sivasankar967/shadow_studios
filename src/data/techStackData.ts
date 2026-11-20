import { TechItem } from '../types';

export const techStackData: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 'Core Specialty', description: 'Declarative component architecture for interactive UI systems.', highlight: true },
  { name: 'Next.js', category: 'Frontend', level: 'Production Standard', description: 'Server-side rendering, static site generation, and Edge API routes.', highlight: true },
  { name: 'TypeScript', category: 'Frontend', level: 'Strict Standard', description: 'End-to-end type safety, fewer runtime bugs, and cleaner interfaces.', highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Styling Engine', description: 'Utility-first CSS for rapid, responsive, and lightweight design execution.' },
  { name: 'JavaScript (ESNext)', category: 'Frontend', level: 'Core Language', description: 'Modern asynchronous JavaScript and browser APIs.' },
  { name: 'HTML5 & Semantic Web', category: 'Frontend', level: 'Foundation', description: 'Accessible markup adhering to WCAG and SEO standards.' },
  { name: 'Modern CSS & Animations', category: 'Frontend', level: 'Visuals', description: 'Hardware-accelerated transforms, CSS Grid, and custom properties.' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Core Runtime', description: 'High-throughput event-driven microservices and real-time APIs.', highlight: true },
  { name: 'Express.js', category: 'Backend', level: 'REST Framework', description: 'Battle-tested middleware architecture for secure backend endpoints.' },
  { name: 'Python', category: 'Backend', level: 'Data & AI Core', description: 'Async data processing pipelines, ML workflows, and scripting.', highlight: true },
  { name: 'FastAPI', category: 'Backend', level: 'High-Speed API', description: 'High-performance async Python APIs with automatic OpenAPI schemas.', highlight: true },

  // Mobile
  { name: 'React Native', category: 'Mobile', level: 'Cross-Platform', description: 'Native-grade iOS & Android applications from a unified codebase.', highlight: true },
  { name: 'Expo Ecosystem', category: 'Mobile', level: 'Modern Tooling', description: 'Fast iteration, OTA updates, and native device sensor modules.' },

  // Database
  { name: 'PostgreSQL', category: 'Database', level: 'Relational Standard', description: 'ACID-compliant relational storage with pgvector extensions.', highlight: true },
  { name: 'MongoDB', category: 'Database', level: 'Document Store', description: 'Flexible schema NoSQL database for rapid iteration and prototyping.' },
  { name: 'MySQL', category: 'Database', level: 'Enterprise Relational', description: 'Proven relational storage for high-scale structured data.' },
  { name: 'Firebase', category: 'Database', level: 'Real-time & Auth', description: 'Real-time Firestore sync, authentication, and serverless functions.' },

  // AI
  { name: 'Gemini API', category: 'AI', level: 'Multimodal Frontier', description: 'Ultra-long context windows, multimodal analysis, and fast inference.', highlight: true },
  { name: 'OpenAI API', category: 'AI', level: 'LLM Orchestration', description: 'Advanced GPT models for reasoning, extraction, and code generation.' },
  { name: 'Custom LLMs & Fine-Tuning', category: 'AI', level: 'Specialized Models', description: 'Domain-specific adaptations and optimized inference pipelines.' },
  { name: 'RAG Architecture', category: 'AI', level: 'Semantic Search', description: 'Vector embeddings and hybrid search over proprietary company docs.', highlight: true },
  { name: 'Autonomous AI Agents', category: 'AI', level: 'Agentic Workflows', description: 'Multi-agent loops with tool calling, self-critique, and execution.' },

  // Design
  { name: 'Figma', category: 'Design', level: 'Design Hub', description: 'Collaborative UI/UX wireframes, component systems, and design tokens.', highlight: true },
  { name: 'Adobe Photoshop', category: 'Design', level: 'Visual Craft', description: 'High-fidelity raster editing, photo manipulation, and textures.' },
  { name: 'Adobe Illustrator', category: 'Design', level: 'Vector Engineering', description: 'Bespoke iconography, brand logos, and vector illustrations.' },

  // DevOps
  { name: 'Git & GitHub', category: 'DevOps', level: 'Version Control', description: 'Trunk-based development, pull request reviews, and issue tracking.' },
  { name: 'Vercel & Edge Network', category: 'DevOps', level: 'Edge Cloud', description: 'Zero-configuration global CDN deployments with instant preview branches.' },
  { name: 'Docker', category: 'DevOps', level: 'Containerization', description: 'Predictable, isolated container environments for backend microservices.' },
  { name: 'CI/CD Pipelines', category: 'DevOps', level: 'Automation', description: 'Automated test execution, linting, build verification, and deployment.' }
];
