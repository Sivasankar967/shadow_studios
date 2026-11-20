import { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'nexus-ai-orchestration',
    title: 'Nexus Intelligence Platform',
    tagline: 'Autonomous AI multi-agent orchestration for enterprise knowledge bases',
    clientType: 'Enterprise AI [Sample Architecture]',
    category: 'AI Projects',
    year: '2025',
    featured: true,
    coverImage: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    accentGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    isPlaceholder: true,
    overview: 'Nexus is a high-throughput enterprise platform enabling non-technical teams to deploy context-aware autonomous AI agents over millions of internal documents using Gemini and custom vector embeddings.',
    challenge: 'Enterprises struggle with fragmented silos of PDF contracts, Notion docs, and SQL databases. Off-the-shelf chatbots suffered from hallucinations, lacked auditability, and posed significant data leakage concerns.',
    solution: 'Engineered an end-to-end RAG architecture with sub-250ms vector similarity lookup, role-based document access controls, and multi-model fallbacks for 100% deterministic audit logging.',
    process: [
      { phase: '01. Data Ingestion', description: 'Engineered pipeline parsing 50k+ daily documents into semantic chunks with vector indexing.' },
      { phase: '02. RAG & Eval Suite', description: 'Benchmarked Gemini 1.5 Flash vs Pro for recall accuracy; achieved 98.4% groundedness score.' },
      { phase: '03. Frontend Cockpit', description: 'Built an ultra-responsive React dashboard featuring live agent thought tracing and citation graphs.' }
    ],
    technologies: ['Gemini API', 'Python', 'FastAPI', 'pgvector', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    mockups: [
      {
        type: 'dashboard',
        title: 'Agent Orchestration Canvas',
        caption: 'Live multi-agent topology visualizer with real-time token telemetry and tool calling inspection.',
        previewAccent: '#10F38B'
      },
      {
        type: 'desktop',
        title: 'Semantic Document Querying UI',
        caption: 'Split-view interface showing source document highlights alongside synthetic AI citations.',
        previewAccent: '#00F0FF'
      }
    ],
    results: [
      { metric: '98.4%', label: 'Groundedness benchmark [Targeted]', note: 'Zero unverified citations during evaluation' },
      { metric: '< 320ms', label: 'Average Query Latency [Benchmark]', note: 'Sub-second synthesized answers' },
      { metric: '75%', label: 'Query Resolution [Target]', note: 'Routine queries handled autonomously' }
    ]
  },
  {
    id: 'strata-fintech-mobile',
    title: 'Strata Global Neo-Banking',
    tagline: 'Next-generation cross-border treasury & digital wealth mobile application',
    clientType: 'Fintech & Wealth [Sample Project]',
    category: 'Mobile Apps',
    year: '2025',
    featured: true,
    coverImage: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
    accentGradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    isPlaceholder: true,
    overview: 'Strata is an ultra-fast cross-platform mobile banking experience designed for global remote founders and high-frequency digital asset traders.',
    challenge: 'Existing banking apps felt dated, cluttered, and slow. Users required instant multi-currency FX transfers with biometric confirmation and real-time ledger updates.',
    solution: 'Designed and built a React Native mobile application featuring biometric security, 60fps gesture-driven card management, and offline cache synchronization.',
    process: [
      { phase: '01. FinTech UI/UX', description: 'Crafted 80+ high-fidelity screens in Figma with strict micro-haptic interaction guidelines.' },
      { phase: '02. Native Bridges', description: 'Integrated Secure Enclave for FaceID authorization and native metal card rendering.' },
      { phase: '03. App Store Launch', description: 'Dual deployment to iOS App Store and Google Play with automated OTA update pipelines.' }
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Stripe API'],
    mockups: [
      {
        type: 'mobile',
        title: 'Virtual Card & FX Portfolio',
        caption: 'Haptic-reactive virtual card switching with real-time multi-currency balances and analytics.',
        previewAccent: '#00F0FF'
      },
      {
        type: 'mobile',
        title: 'Instant Global Wire Flow',
        caption: 'Three-tap international payment flow with transparent FX rates and live transfer tracker.',
        previewAccent: '#D4FF00'
      }
    ],
    results: [
      { metric: '60 FPS', label: 'Consistent UI Frame Rate', note: 'Silky smooth gestures on both iOS & Android' },
      { metric: '< 1.2s', label: 'Cold App Launch Time', note: 'Optimized bundle size under 22MB' },
      { metric: '4.8/5.0', label: 'User Feedback Target [Sample]', note: 'High adoption rate during beta cohort' }
    ]
  },
  {
    id: 'aeroflux-ecommerce-flagship',
    title: 'AeroFlux Luxury Performance',
    tagline: 'Headless e-commerce flagship for high-end technical apparel',
    clientType: 'D2C Retail & Fashion [Sample Project]',
    category: 'Web Development',
    year: '2024',
    featured: true,
    coverImage: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    accentGradient: 'from-lime-400 via-emerald-500 to-teal-500',
    isPlaceholder: true,
    overview: 'AeroFlux needed an avant-garde digital storefront capable of handling viral drop spikes with sub-second page transitions and interactive 3D product previews.',
    challenge: 'Monolithic legacy Shopify architecture resulted in 4.5s load times, low mobile checkout conversion, and lack of creative freedom for editorial storytelling.',
    solution: 'Engineered a headless storefront utilizing Next.js 15, Shopify Storefront GraphQL, and WebGL product configuration, cutting page load to under 650ms.',
    process: [
      { phase: '01. Headless Architecture', description: 'Decoupled frontend from backend using Vercel Edge Functions and GraphQL caching.' },
      { phase: '02. Editorial 3D Viewer', description: 'Built interactive 360-degree fabric simulation using Three.js and GLTF compression.' },
      { phase: '03. One-Click Checkout', description: 'Streamlined checkout with Apple Pay / Shop Pay instant modal drawer.' }
    ],
    technologies: ['Next.js', 'React', 'Shopify Storefront API', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    mockups: [
      {
        type: 'desktop',
        title: 'Interactive 3D Apparel Configurator',
        caption: 'Real-time texture and colorway customizer with dynamic lighting simulations.',
        previewAccent: '#D4FF00'
      },
      {
        type: 'mobile',
        title: 'Streamlined Mobile Drawer Checkout',
        caption: 'Friction-free single-screen checkout boosting mobile conversions.',
        previewAccent: '#10F38B'
      }
    ],
    results: [
      { metric: '100/100', label: 'Lighthouse Performance Score', note: 'Sub-600ms First Contentful Paint' },
      { metric: '+48%', label: 'Mobile Conversion Rate [Target]', note: 'Compared to previous monolithic theme' },
      { metric: '99.99%', label: 'Drop Traffic Availability', note: 'Zero downtime during flash launches' }
    ]
  },
  {
    id: 'zenith-design-system',
    title: 'Zenith Multi-Brand Design System',
    tagline: 'Enterprise design tokens, component library, and interaction guidelines',
    clientType: 'SaaS Ecosystem [Sample Project]',
    category: 'UI/UX Design',
    year: '2025',
    featured: false,
    coverImage: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    accentGradient: 'from-purple-400 via-pink-500 to-red-400',
    isPlaceholder: true,
    overview: 'A unified, accessible design language constructed in Figma and coded in React for a family of 5 interconnected B2B SaaS productivity products.',
    challenge: 'Disjointed UI components across 4 legacy acquisitions caused visual inconsistency, accessible compliance violations, and slowed engineering velocity.',
    solution: 'Constructed an atomic token architecture with 250+ accessible components, automated dark/light mode parity, and live Storybook documentation.',
    process: [
      { phase: '01. Component Audit', description: 'Cataloged 1,200+ distinct button, modal, and form permutations across 4 products.' },
      { phase: '02. Token Architecture', description: 'Structured semantic design tokens for color, typography, spacing, and elevation.' },
      { phase: '03. Code-Connect Sync', description: 'Synced Figma variables directly to Tailwind CSS configuration for automated parity.' }
    ],
    technologies: ['Figma', 'Storybook', 'TypeScript', 'Tailwind CSS', 'React', 'WCAG 2.1 AA'],
    mockups: [
      {
        type: 'dashboard',
        title: 'Component Token Matrix',
        caption: 'Live interactive design system tokens with real-time contrast ratio validation.',
        previewAccent: '#9D4EDD'
      }
    ],
    results: [
      { metric: '3.5x', label: 'Design-to-Code Velocity', note: 'Engineers build new views in hours instead of days' },
      { metric: '100%', label: 'WCAG 2.1 AA Compliance', note: 'Full keyboard navigation and screen-reader support' },
      { metric: '250+', label: 'Standardized UI Components', note: 'Single source of truth across all products' }
    ]
  },
  {
    id: 'hyperion-brand-identity',
    title: 'Hyperion Deep-Tech Rebrand',
    tagline: 'Visual identity, generative 3D assets, and guidelines for quantum tech startup',
    clientType: 'Quantum Computing [Sample Concept]',
    category: 'Branding',
    year: '2024',
    featured: false,
    coverImage: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
    accentGradient: 'from-blue-400 via-indigo-500 to-purple-600',
    isPlaceholder: true,
    overview: 'A futuristic visual identity system capturing the intersection of quantum physics, computational speed, and human ambition.',
    challenge: 'Hyperion possessed revolutionary quantum encryption technology but suffered from an outdated academic logo that failed to attract Silicon Valley venture capital.',
    solution: 'Designed an iconic symbol based on wave-particle duality, paired with a custom geometric display typeface, dark-mode brand collateral, and 3D kinetic renders.',
    process: [
      { phase: '01. Strategic Positioning', description: 'Defined the brand archetype: "The Architect of Quantum Certainty".' },
      { phase: '02. Identity Exploration', description: 'Sketched 60+ conceptual marks exploring laser interference and multidimensional grids.' },
      { phase: '03. Guidelines Delivery', description: 'Produced 55-page brand manual covering typography, spatial grids, 3D assets, and pitch decks.' }
    ],
    technologies: ['Adobe Illustrator', 'Figma', 'Blender', 'After Effects', 'Cinema 4D'],
    mockups: [
      {
        type: 'desktop',
        title: 'Brand Identity Guidelines',
        caption: 'Modular grid specifications, kinetic logo animation rules, and color harmonics.',
        previewAccent: '#00F0FF'
      }
    ],
    results: [
      { metric: '100%', label: 'Bespoke Asset Creation', note: 'Original vector symbols and 3D kinetic loops' },
      { metric: '55 Pages', label: 'Comprehensive Brand Guide', note: 'Full usage standards for digital and physical mediums' },
      { metric: 'Investor Ready', label: 'Pitch Deck & Collateral', note: 'Successfully presented to tier-1 venture funds' }
    ]
  },
  {
    id: 'omnisync-business-automation',
    title: 'OmniSync Enterprise Workflow Hub',
    tagline: 'Custom ERP and automated event-driven logistics dispatch system',
    clientType: 'Logistics & Supply Chain [Sample Project]',
    category: 'Web Development',
    year: '2025',
    featured: false,
    coverImage: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
    accentGradient: 'from-amber-400 via-orange-500 to-red-500',
    isPlaceholder: true,
    overview: 'A tailored internal operations system unifying real-time GPS telemetry, automated driver dispatching, automated customs documentation, and Stripe billing.',
    challenge: 'Operations staff juggled 4 different software suites and WhatsApp groups, causing dispatch delays, lost freight tracking, and manual invoice reconciliation.',
    solution: 'Built a centralized real-time web command center with WebSockets, automated webhook routing, and automatic PDF bill-of-lading generation.',
    process: [
      { phase: '01. Operational Mapping', description: 'Shadowed dispatchers to map critical bottlenecks in the multi-step freight cycle.' },
      { phase: '02. Real-time Backend', description: 'Developed Node.js/PostgreSQL microservices handling 10k event updates per minute.' },
      { phase: '03. Dispatch Dashboard', description: 'Built an interactive map interface with instant routing and automated driver notifications.' }
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'WebSockets', 'Tailwind CSS', 'Mapbox GL'],
    mockups: [
      {
        type: 'dashboard',
        title: 'Real-time Telemetry Dispatch Screen',
        caption: 'Fleet overview with algorithmic route optimization and automated driver alerts.',
        previewAccent: '#FFAE00'
      }
    ],
    results: [
      { metric: '-65%', label: 'Dispatch Latency Reduction', note: 'Orders dispatched in 90 seconds instead of 15 minutes' },
      { metric: '99.9%', label: 'Billing Reconciliation Accuracy', note: 'Zero manual spreadsheet errors recorded' },
      { metric: '100%', label: 'Internal Adoption Rate', note: 'Full transition from legacy tools within 2 weeks' }
    ]
  }
];
