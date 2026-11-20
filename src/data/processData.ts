import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understand the business, user personas, and technical boundaries.',
    description: 'We kick off every engagement with an intensive architectural discovery phase. We analyze your commercial objectives, interrogate user pain points, audit competitors, and establish ironclad KPIs for success.',
    deliverables: [
      'Stakeholder alignment workshop & goal definition',
      'Technical feasibility assessment & architecture audit',
      'User persona definition & user journey flowcharts',
      'Comprehensive Project Scope of Work (SOW) & sprint roadmap'
    ],
    duration: 'Week 1',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Strategize',
    tagline: 'Plan the right technology stack, system architecture, and UX approach.',
    description: 'We define the technical blueprint and interaction paradigm before writing a single line of production code. We select frameworks, design database schemas, map third-party APIs, and plan security guardrails.',
    deliverables: [
      'Technology stack matrix & third-party service mapping',
      'Relational database schema diagrams & ERDs',
      'Information Architecture (IA) and sitemap hierarchy',
      'Milestone deliverable schedule with weekly sprint goals'
    ],
    duration: 'Week 1 – 2',
    iconName: 'Cpu'
  },
  {
    number: '03',
    title: 'Design',
    tagline: 'Create user-friendly interfaces, clickable prototypes, and design systems.',
    description: 'Our design studio translates strategy into stunning visual reality. We construct high-fidelity Figma components, choreograph micro-interactions, establish accessible contrast standards, and test clickable prototypes.',
    deliverables: [
      'Full high-fidelity Figma UI kit & component tokens',
      'Interactive clickable prototype for desktop and mobile',
      'Kinetic motion design guidelines & micro-animations',
      'Design handoff documentation with ready-to-code CSS specs'
    ],
    duration: 'Week 2 – 4',
    iconName: 'Palette'
  },
  {
    number: '04',
    title: 'Develop',
    tagline: 'Build high-quality, scalable digital solutions with zero tech debt.',
    description: 'We code with engineering discipline. Clean TypeScript, modular component architecture, robust API error handling, and automated unit testing ensure the codebase is maintainable, secure, and lightning-fast.',
    deliverables: [
      'Clean, modular, thoroughly commented React/Next.js/Native codebase',
      'Staging environment with automated continuous integration (CI)',
      'Sub-second API response times and edge database caching',
      'Comprehensive code reviews & vulnerability static analysis'
    ],
    duration: 'Week 4 – 8',
    iconName: 'Code'
  },
  {
    number: '05',
    title: 'Launch',
    tagline: 'Meticulously test, QA, optimize performance, deploy, and release.',
    description: 'Before go-live, our QA team subjects the solution to rigorous cross-browser testing, mobile device labs, security penetration checks, and Lighthouse performance tuning to ensure a flawless launch day.',
    deliverables: [
      'Comprehensive QA test matrix across iOS, Android, macOS & Windows',
      'Sub-second Core Web Vitals & 99+ Lighthouse performance audit',
      'Production DNS cutover, SSL provisioning, and CDN caching rules',
      'Automated error tracking (Sentry) and server uptime monitoring'
    ],
    duration: 'Week 8 – 9',
    iconName: 'Rocket'
  },
  {
    number: '06',
    title: 'Grow',
    tagline: 'Maintain, optimize, analyze user telemetry, and scale fearlessly.',
    description: 'Launch is just the beginning of the growth curve. We monitor live real-user metrics, perform conversion rate optimization (CRO), implement feature enhancements, and scale infrastructure as your customer base expands.',
    deliverables: [
      'Post-launch 30-day warranty & dedicated emergency hotline',
      'Continuous feature iterations & conversion rate A/B testing',
      'Infrastructure auto-scaling and database optimization',
      'Quarterly technology reviews and security dependency updates'
    ],
    duration: 'Ongoing Scaling',
    iconName: 'Activity'
  }
];
