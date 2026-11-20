export interface AgencyStat {
  id: string;
  value: string;
  label: string;
  description: string;
  isPlaceholder: boolean;
}

export const agencyStats: AgencyStat[] = [
  {
    id: 'projects-delivered',
    value: '45+',
    label: 'Digital Products Shipped',
    description: 'Web apps, mobile solutions, and enterprise workflows engineered to spec.',
    isPlaceholder: true // Clearly marked as requested until client real numbers are supplied
  },
  {
    id: 'uptime-sla',
    value: '99.8%',
    label: 'Production Architecture SLA',
    description: 'Resilient cloud infrastructure with zero-downtime deployment pipelines.',
    isPlaceholder: false // Technical architecture guarantee
  },
  {
    id: 'response-time',
    value: '< 24h',
    label: 'Discovery & Proposal SLA',
    description: 'Direct communication with lead engineers and rapid technical turnaround.',
    isPlaceholder: false // Agency operational commitment
  },
  {
    id: 'team-specialists',
    value: '14+',
    label: 'Core Specialists & Contributors',
    description: 'Distributed network of senior developers, UI/UX designers, and AI engineers.',
    isPlaceholder: true // Editable placeholder for team size
  }
];

export interface AgencyValue {
  id: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  accent: string;
}

export const agencyValues: AgencyValue[] = [
  {
    id: 'innovation',
    name: 'Innovation',
    headline: 'Frontier Thinking, Not Followership',
    description: 'We do not recycle 5-year-old templates. We continuously adopt bleeding-edge frameworks, generative AI models, and next-gen rendering paradigms to give our clients an unfair competitive advantage.',
    iconName: 'Zap',
    accent: '#D4FF00'
  },
  {
    id: 'creativity',
    name: 'Creativity',
    headline: 'Engineering Meets Visual Art',
    description: 'Technology without beauty is forgettable. We infuse kinetic motion, bespoke typography, and emotional tactile micro-interactions into every digital touchpoint we engineer.',
    iconName: 'Sparkles',
    accent: '#00F0FF'
  },
  {
    id: 'transparency',
    name: 'Transparency',
    headline: 'Radical Honesty & Open Repositories',
    description: 'No black-box mystery pricing or locked codebases. You get direct access to our Linear sprint boards, private GitHub repositories, staging URLs, and daily async updates.',
    iconName: 'Eye',
    accent: '#9D4EDD'
  },
  {
    id: 'quality',
    name: 'Quality',
    headline: 'Zero-Compromise Craftsmanship',
    description: 'We take pride in our craft. Strict TypeScript types, comprehensive unit and E2E test suites, sub-second Core Web Vitals, and pixel-perfect design token execution on every release.',
    iconName: 'ShieldCheck',
    accent: '#10F38B'
  },
  {
    id: 'long-term-partnerships',
    name: 'Long-term Partnerships',
    headline: 'We Scale With You Past Launch',
    description: 'We are not transactional hand-off freelancers. We act as your dedicated technical co-founders, staying by your side through seed rounds, enterprise growth, and continuous feature expansion.',
    iconName: 'Users',
    accent: '#FFAE00'
  }
];
