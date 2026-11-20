import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    category: 'Engineering & Performance',
    shortDescription: 'High-speed, scalable web applications, e-commerce architectures, and enterprise portals engineered with cutting-edge frameworks.',
    fullDescription: 'We build digital web experiences that are lightning-fast, secure, and built to scale to millions of users. From dynamic SaaS platforms to conversion-obsessed e-commerce ecosystems, we construct frontends with React & Next.js and resilient backends.',
    iconName: 'Globe',
    accentColor: '#D4FF00', // Lime
    features: [
      'Business websites with headless CMS',
      'High-conversion E-commerce platforms',
      'Scalable SaaS applications & client portals',
      'Intuitive Admin dashboards & analytics suites',
      'Custom bespoke web applications & microfrontends'
    ],
    deliverables: [
      'Production-ready Next.js / React codebase',
      'Sub-second Core Web Vitals optimization',
      'Responsive design across 100+ viewport sizes',
      'Full CI/CD deployment pipelines on Vercel/AWS',
      'Automated testing suites and comprehensive docs'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    category: 'iOS & Android Engineering',
    shortDescription: 'Fluid, native-grade mobile applications built for high retention, frictionless gestures, and cross-platform speed.',
    fullDescription: 'We craft immersive mobile experiences that live natively on iOS and Android. Leveraging React Native and modern native bridges, we deliver 60fps animations, instant offline sync, and frictionless biometric onboarding.',
    iconName: 'Smartphone',
    accentColor: '#00F0FF', // Cyan
    features: [
      'Native Android applications (Kotlin / React Native)',
      'Native iOS applications (Swift / React Native)',
      'Cross-platform React Native & Expo architectures',
      'Offline-first databases with real-time sync',
      'In-app purchases, Apple Pay, & Google Wallet'
    ],
    deliverables: [
      'App Store & Google Play submission and approval',
      'Unified single codebase reducing maintenance by 40%',
      'Push notification & deep-linking pipelines',
      'Biometric authentication (FaceID / Fingerprint)',
      'Crash analytics and real-time error telemetry'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'GraphQL', 'Tailwind']
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX Design',
    category: 'Product Strategy & Interaction',
    shortDescription: 'Award-winning user research, wireframing, high-fidelity prototypes, and comprehensive design systems built for conversion.',
    fullDescription: 'We merge psychological user research with visionary aesthetics. Our design team creates cohesive visual languages, scalable Figma design tokens, and interactive micro-interactions that turn casual visitors into loyal brand advocates.',
    iconName: 'Layers',
    accentColor: '#9D4EDD', // Purple
    features: [
      'In-depth User research & user journey mapping',
      'Low-fidelity wireframing & IA architecture',
      'Interactive Figma prototypes with realistic states',
      'Comprehensive multi-brand Design systems & tokens',
      'Micro-interaction & kinetic motion choreography'
    ],
    deliverables: [
      'Production-grade Figma design system library',
      'Developer handoff specs with pixel-perfect tokens',
      'Clickable usability prototypes for stakeholder testing',
      'Accessibility audit conforming to WCAG 2.1 AA standards',
      'Responsive UI kit for mobile, tablet, and desktop'
    ],
    techStack: ['Figma', 'FigJam', 'Tokens Studio', 'Framer', 'Adobe Creative Suite']
  },
  {
    id: 'ai-development',
    number: '04',
    title: 'AI Development & LLMs',
    category: 'Generative AI & Autonomous Agents',
    shortDescription: 'Intelligent AI-powered applications, enterprise RAG knowledge bases, custom LLM integrations, and business automation pipelines.',
    fullDescription: 'Harness the frontier of generative AI. We build production-ready applications powered by Gemini API, OpenAI, and open-source models, augmented by vector databases, Retrieval-Augmented Generation (RAG), and autonomous multi-agent systems.',
    iconName: 'Cpu',
    accentColor: '#10F38B', // Emerald neon
    features: [
      'Enterprise AI-powered applications & co-pilots',
      'Context-aware AI chatbots & customer agents',
      'Custom LLM fine-tuning & prompt orchestration',
      'Retrieval-Augmented Generation (RAG) with vector search',
      'Autonomous business automation pipelines'
    ],
    deliverables: [
      'Production LLM inference architecture with rate-limiters',
      'Vector database integration (Pinecone, Chroma, pgvector)',
      'Hallucination prevention guardrails & eval suites',
      'Structured JSON schema parsing and tool-calling hooks',
      'Enterprise data privacy & role-based access control'
    ],
    techStack: ['Gemini API', 'OpenAI API', 'Python', 'FastAPI', 'LangChain', 'pgvector']
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing & Growth',
    category: 'Acquisition & Performance',
    shortDescription: 'Data-driven social media growth, paid advertising engines, strategic content pipelines, and high-volume lead generation.',
    fullDescription: 'Great products deserve massive distribution. We build omnichannel marketing engines combining scientific paid acquisition, viral organic social distribution, and automated nurturing funnels that maximize lifetime customer value (LTV).',
    iconName: 'TrendingUp',
    accentColor: '#FF6B6B',
    features: [
      'Omnichannel Social media marketing campaigns',
      'High-impact Content strategy & narrative storytelling',
      'High-ROI Paid advertising (Google Ads, Meta, LinkedIn)',
      'Automated Lead generation & cold acquisition funnels',
      'Retention marketing, email journeys & drip sequences'
    ],
    deliverables: [
      'Audience persona mapping & competitive positioning',
      'Full campaign creative assets (videos, carousels, copy)',
      'Conversion tracking pixel setup with GA4 & server tagging',
      'Weekly performance analytics dashboard & ROI reports',
      'A/B testing roadmap for ad creatives and landing pages'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Mgr', 'GA4', 'HubSpot']
  },
  {
    id: 'seo-optimization',
    number: '06',
    title: 'SEO & Performance Optimization',
    category: 'Organic Dominance & Speed',
    shortDescription: 'Technical SEO audits, semantic schema architectures, Core Web Vitals optimization, and algorithmic search dominance.',
    fullDescription: 'Dominate organic search. We engineer websites with flawless technical crawlability, sub-500ms server response times, programmatic SEO architectures, and authoritative content clusters that capture high-intent commercial keywords.',
    iconName: 'Search',
    accentColor: '#FFAE00',
    features: [
      'Full Technical SEO audits & crawl budget optimization',
      'On-page SEO, semantic HTML & structured JSON-LD schema',
      'Core Web Vitals & critical rendering path speed boost',
      'Programmatic SEO landing page generation',
      'Backlink profile engineering & digital PR strategy'
    ],
    deliverables: [
      '100/100 Lighthouse performance and accessibility audits',
      'Semantic sitemap & robots.txt architecture',
      'High-intent keyword research matrix and content briefs',
      'Structured data testing & rich snippet eligibility',
      'Search Console tracking and indexation monitoring'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Semrush', 'Lighthouse']
  },
  {
    id: 'branding-creative-design',
    number: '07',
    title: 'Branding & Creative Identity',
    category: 'Brand Strategy & Visual Systems',
    shortDescription: 'Memorable brand identities, bespoke logos, custom graphic assets, and distinctive design languages that build cultural resonance.',
    fullDescription: 'We carve distinctive identities that linger in the minds of your audience. From typographic precision to futuristic 3D assets and guidelines, we build comprehensive brand systems ready for modern digital and physical mediums.',
    iconName: 'Sparkles',
    accentColor: '#F72585',
    features: [
      'Bespoke Logo design & symbol engineering',
      'Complete Brand identity guidelines & color theory',
      'Custom Graphic design, iconography, & illustration kits',
      'Futuristic 3D assets, textures, & kinetic brand collateral',
      'Print collateral, pitch deck styling, & stationery'
    ],
    deliverables: [
      'Master vector logo kit (SVG, EPS, PDF, PNG, Dark/Light)',
      'Comprehensive 40+ page Brand Guidelines document',
      'Custom typography pairings & web license recommendations',
      'Social media kit & marketing collateral templates',
      'Interactive 3D/vector brand asset library'
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'Blender']
  },
  {
    id: 'custom-software-automation',
    number: '08',
    title: 'Custom Software & Automation',
    category: 'Enterprise Tools & Systems',
    shortDescription: 'Tailored CRM systems, ERP architectures, automated workflow pipelines, and custom business tools that eradicate manual friction.',
    fullDescription: 'Eliminate repetitive manual bottlenecks and scale operations effortlessly. We build bespoke software infrastructure that synchronizes disparate departments, connects internal APIs, and automates high-volume business workflows.',
    iconName: 'Wrench',
    accentColor: '#00F0FF',
    features: [
      'Bespoke CRM systems aligned with custom sales cycles',
      'Tailored ERP solutions & real-time inventory management',
      'End-to-end Workflow automation & webhook orchestration',
      'Custom business tools, portals & internal team apps',
      'Third-party API integrations (Stripe, Slack, Salesforce)'
    ],
    deliverables: [
      'Custom web-based operational command center',
      'Role-based permissions & audit trail logging',
      'Automated background jobs and failover queues',
      'Comprehensive database schema with backup protocols',
      'Employee onboarding walkthroughs & system documentation'
    ],
    techStack: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Stripe API']
  }
];
