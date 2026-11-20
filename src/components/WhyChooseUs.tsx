import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Users2,
  Cpu,
  TrendingUp,
  MessageSquareCode,
  CalendarCheck,
  Headphones,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Sparkles
} from 'lucide-react';
import { soundFx } from '../utils/sound';

interface WhyChooseUsProps {
  onStartProject: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartProject }) => {
  const highlights = [
    {
      id: 'end-to-end',
      colSpan: 'md:col-span-8',
      title: 'End-to-End Digital Solutions',
      tagline: 'From napkin sketch to hyperscale production.',
      description: 'You do not need to hire five fragmented agencies. We handle technical strategy, UI/UX design, frontend, backend APIs, cloud DevOps, AI orchestration, and post-launch SEO under one unified roof.',
      icon: <Layers className="w-6 h-6 text-lime" />,
      accent: '#D4FF00',
      badge: 'Unified Guild',
      stats: '1 Partner, 0 Friction',
    },
    {
      id: 'dedicated-collab',
      colSpan: 'md:col-span-4',
      title: 'Dedicated Direct Collaboration',
      tagline: 'Direct access to senior engineers.',
      description: 'No non-technical account manager intermediaries playing game of telephone. You join a dedicated private Slack or Discord channel directly with our lead architects.',
      icon: <Users2 className="w-6 h-6 text-cyber-cyan" />,
      accent: '#00F0FF',
      badge: 'Zero Bureaucracy',
      stats: 'Direct Slack / Discord',
    },
    {
      id: 'modern-tech',
      colSpan: 'md:col-span-4',
      title: 'Bleeding-Edge Modern Tech',
      tagline: 'Zero legacy frameworks.',
      description: 'We code with Next.js 15, TypeScript, Tailwind, FastAPI, and Gemini AI. Your codebase will be maintainable, ultra-fast, and built on future-proof foundations.',
      icon: <Cpu className="w-6 h-6 text-cyber-purple" />,
      accent: '#9D4EDD',
      badge: 'Future-Proof',
      stats: 'TypeScript & Next.js',
    },
    {
      id: 'scalable-arch',
      colSpan: 'md:col-span-4',
      title: 'Hyperscale Architecture',
      tagline: 'Engineered for viral traffic spikes.',
      description: 'We build stateless edge microservices, optimized database indexes, and automated caching that withstand sudden viral traffic drops without flinching.',
      icon: <TrendingUp className="w-6 h-6 text-cyber-emerald" />,
      accent: '#10F38B',
      badge: '99.9% Uptime',
      stats: '< 300ms Global P99',
    },
    {
      id: 'transparent-comm',
      colSpan: 'md:col-span-4',
      title: 'Radical Transparency',
      tagline: 'Live sprint boards & staging URLs.',
      description: 'Track daily progress on Linear and test live code on preview staging URLs with every GitHub commit. You always know what was shipped and what is next.',
      icon: <MessageSquareCode className="w-6 h-6 text-amber-400" />,
      accent: '#FFAE00',
      badge: 'Live Linear Boards',
      stats: 'Weekly Live Demos',
    },
    {
      id: 'ontime-delivery',
      colSpan: 'md:col-span-6',
      title: 'Guaranteed On-Time Milestone Delivery',
      tagline: 'Agile sprints with strict deliverables.',
      description: 'We despise delayed roadmaps. Every project is segmented into clear two-week sprint milestones backed by contractual delivery guarantees and transparent burndown charts.',
      icon: <CalendarCheck className="w-6 h-6 text-lime" />,
      accent: '#D4FF00',
      badge: 'Milestone SLA',
      stats: '100% Sprint Accountability',
    },
    {
      id: 'ongoing-support',
      colSpan: 'md:col-span-6',
      title: 'Ongoing Technical Care & Evolution',
      tagline: 'We never disappear post-launch.',
      description: 'Launch day is day one of growth. We provide ongoing 24/7 server monitoring, vulnerability patching, database optimization, and continuous feature roadmapping.',
      icon: <Headphones className="w-6 h-6 text-cyber-cyan" />,
      accent: '#00F0FF',
      badge: '24/7 Watchdog',
      stats: 'Continuous Evolution',
    },
  ];

  return (
    <section id="why-us" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-lime/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
          <span>// 07. The Valence Advantage</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
        >
          YOUR VISION. OUR EXPERTISE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
            ONE UNIFIED TEAM.
          </span>
        </motion.h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Why leading startups and ambitious founders choose Valence Studios as their dedicated engineering partner over bloated legacy agencies.
        </p>
      </div>

      {/* Cyber Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            onMouseEnter={() => soundFx.playHover()}
            className={`${item.colSpan} glass-card p-8 rounded-3xl border border-white/10 hover:border-lime/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Ambient hover glow inside card */}
            <div
              className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: item.accent }}
            />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-lime/30 group-hover:scale-105 transition-all">
                  {item.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.03] border border-white/10 text-zinc-300">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white group-hover:text-lime transition-colors mb-2">
                {item.title}
              </h3>

              <div className="text-xs font-mono text-zinc-300 font-semibold mb-3">
                {item.tagline}
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-lime">
                {item.stats}
              </span>
              <CheckCircle2 className="w-4 h-4 text-lime" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Bar */}
      <div className="mt-12 text-center">
        <button
          onClick={() => {
            soundFx.playClick();
            onStartProject();
          }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime hover:underline focus:outline-none"
          data-interactive="true"
        >
          <span>Ready to build with a partner that cares as much as you do?</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
