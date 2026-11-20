import { BusinessProblem } from '../types';

export const problemsData: BusinessProblem[] = [
  {
    id: 'no-online-presence',
    problemTitle: 'Your business has no online presence.',
    problemDescription: 'Potential clients search for your services, find competitors instead, or question your credibility due to an absent or outdated footprint.',
    symptom: 'Lost deals to smaller competitors, zero inbound organic inquiries, lack of institutional trust.',
    solutionTitle: 'We build professional websites that establish credibility and generate leads.',
    solutionDescription: 'We design bespoke digital flagships featuring conversion-engineered landing pages, automated lead capture, and authoritative brand positioning.',
    impactMetrics: '+340% average boost in qualified inbound consultation requests.',
    iconName: 'Globe',
    category: 'Credibility & Inbound'
  },
  {
    id: 'slow-website',
    problemTitle: 'Your existing website is slow and clunky.',
    problemDescription: 'Users bounce within 3 seconds due to bloated code, unoptimized assets, sluggish mobile responsiveness, and frustrating navigation.',
    symptom: '53% of mobile visitors abandon sites taking >3s; tanking Google rankings and wasted ad spend.',
    solutionTitle: 'We optimize performance, responsiveness, and user experience.',
    solutionDescription: 'We rebuild and refactor frontends with Next.js & modern edge caching, delivering sub-second load times, 99+ Core Web Vitals, and silky 60fps animations.',
    impactMetrics: '< 0.8s First Contentful Paint and 99/100 Lighthouse benchmark.',
    iconName: 'Zap',
    category: 'Speed & Architecture'
  },
  {
    id: 'manual-processes',
    problemTitle: 'Your business processes are repetitive and manual.',
    problemDescription: 'Team members spend dozens of hours every week copy-pasting data, routing emails, manually generating invoices, and maintaining messy spreadsheets.',
    symptom: 'High operational overhead, human data entry errors, employee burnout, delayed fulfillment.',
    solutionTitle: 'We build automation systems and AI-powered workflows.',
    solutionDescription: 'We deploy autonomous event-driven pipelines, bespoke internal CRM tools, and intelligent AI agents that orchestrate end-to-end operations automatically.',
    impactMetrics: 'Save 25+ human hours per week per department with 99.9% data accuracy.',
    iconName: 'Cpu',
    category: 'Operations & AI'
  },
  {
    id: 'losing-customers',
    problemTitle: 'You are losing potential customers in your funnel.',
    problemDescription: 'Traffic lands on your site or app but drops off before checkout or inquiry due to high friction, confusing UX, and weak value proposition.',
    symptom: 'High customer acquisition cost (CAC), stagnant conversion rates (<1%), leaked revenue at checkout.',
    solutionTitle: 'We improve your digital experience, conversion flow, and marketing.',
    solutionDescription: 'Through forensic user journey mapping, frictionless checkout architecture, behavioral heatmaps, and compelling copy, we turn passive visitors into buyers.',
    impactMetrics: '+68% increase in checkout completions and measurable CAC reduction.',
    iconName: 'TrendingUp',
    category: 'Conversion & Growth'
  },
  {
    id: 'need-mobile-app',
    problemTitle: 'You need a mobile application to retain customers.',
    problemDescription: 'Your customers expect an instant mobile app experience with push updates and offline access, but building dual iOS & Android apps seems cost-prohibitive.',
    symptom: 'Customer churn to mobile-first rivals, inability to send push alerts, zero App Store presence.',
    solutionTitle: 'We design and develop scalable mobile applications.',
    solutionDescription: 'Using React Native and modern native bridges, we engineer high-performance cross-platform apps for iOS and Android with a single maintainable codebase.',
    impactMetrics: '4.8+ App Store rating targets with 40% reduction in dual-platform dev costs.',
    iconName: 'Smartphone',
    category: 'Mobile Scale'
  },
  {
    id: 'no-organic-traffic',
    problemTitle: 'Your website is not getting organic search traffic.',
    problemDescription: 'Despite great services, your website is invisible on Google, buried on page 5 behind competitors who capture all high-intent search volume.',
    symptom: 'Expensive over-reliance on paid PPC ads, zero zero-cost inbound traffic, stagnant domain authority.',
    solutionTitle: 'We implement SEO strategies and technical optimization.',
    solutionDescription: 'We deploy programmatic keyword architectures, structured JSON-LD semantic data, crawl-budget optimization, and authoritative content silos.',
    impactMetrics: 'Rank for top 3 commercial buyer keywords within 90 days.',
    iconName: 'Search',
    category: 'Search & Visibility'
  }
];
