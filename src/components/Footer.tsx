import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Globe,
  Shield,
  FileText,
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { soundFx } from '../utils/sound';

export const Footer: React.FC = () => {
  const [currentUtcTime, setCurrentUtcTime] = useState<string>('');
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Problems Solved', href: '#problems' },
    { label: 'Selected Works', href: '#work' },
    { label: 'Methodology', href: '#process' },
    { label: 'Technology Stack', href: '#tech' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Start Project', href: '#contact' },
  ];

  const servicesList = [
    'Web Development',
    'Mobile App Engineering',
    'UI/UX & Product Design',
    'Generative AI & LLMs',
    'Digital Marketing & Growth',
    'Technical SEO Audits',
    'Brand & Visual Identity',
    'Enterprise Automation',
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-lime/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Agency Big Callout */}
        <div className="pb-16 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-lime uppercase tracking-widest block mb-2">
              Next-Gen Creative Technology
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
              READY TO SHIFT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
                INTO THE FUTURE?
              </span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end p-4 rounded-full bg-white/[0.04] border border-white/10 text-white hover:text-black hover:bg-lime hover:border-lime transition-all duration-300 group shadow-lg"
            title="Return to top"
            aria-label="Back to top"
            data-interactive="true"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Multi-Column Links Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/[0.08]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 font-display text-2xl font-black tracking-tight text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-lime shadow-[0_0_8px_#D4FF00]" />
              <span>VALENCE<span className="text-lime">//</span>STUDIOS</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              We design, build, and scale digital experiences that move businesses forward. From web platforms and mobile apps to frontier AI solutions, we build technology that makes a difference.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-lime transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-lime transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-lime transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-lime transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-bold">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-lime transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-bold">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              {servicesList.map((srv) => (
                <li key={srv}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations & Live Status (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-bold">
              Network Telemetry
            </span>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400">
                <span>Distributed Guild:</span>
                <span className="text-white">Global Remote</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Master Clock:</span>
                <span className="text-lime">{currentUtcTime || '12:00:00 UTC'}</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>System Status:</span>
                <span className="text-cyber-emerald flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse" />
                  Operational
                </span>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] font-mono text-zinc-400">
              <div>Email: <a href="mailto:matheshwaranrx7@gmail.com" className="text-white hover:text-lime">matheshwaranrx7@gmail.com</a></div>
              <div className="flex items-center justify-between">
                <span>Line 1: <a href="tel:+916379424084" className="text-lime hover:underline">+91 63794 24084</a></span>
                <a href="https://wa.me/916379424084" target="_blank" rel="noreferrer" className="text-[10px] text-emerald-400 hover:underline">WhatsApp</a>
              </div>
              <div className="flex items-center justify-between">
                <span>Line 2: <a href="tel:+916369455056" className="text-cyber-cyan hover:underline">+91 63694 55056</a></span>
                <a href="https://wa.me/916369455056" target="_blank" rel="noreferrer" className="text-[10px] text-emerald-400 hover:underline">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Valence Digital Technology Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                soundFx.playClick();
                setShowPrivacyModal(true);
              }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => {
                soundFx.playClick();
                setShowTermsModal(true);
              }}
              className="hover:text-white transition-colors"
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#090B10] border border-white/15 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Privacy Policy & Client Data Protection
              </h3>

              <div className="space-y-4 text-xs text-zinc-300 leading-relaxed font-sans">
                <p>
                  At Valence Digital Studios, we treat our clients' intellectual property, technical roadmaps, proprietary codebase, and customer data with military-grade confidentiality.
                </p>
                <h4 className="font-bold text-white text-sm">1. Data Ownership</h4>
                <p>
                  100% of the software, designs, architectures, and assets developed during our client engagements belong exclusively to the client upon milestone payment settlement. We never claim ownership or resale rights.
                </p>
                <h4 className="font-bold text-white text-sm">2. Non-Disclosure Protection</h4>
                <p>
                  All consultations, project scope definitions, and technical audits are protected under unilateral or bilateral NDAs. We never expose client repo code to third-party public AI training sets.
                </p>
                <h4 className="font-bold text-white text-sm">3. Analytics & Contact Form Data</h4>
                <p>
                  Contact information collected via our website forms is strictly utilized for direct project scoping and communication. We do not sell or share leads with marketing brokers.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms of Engagement Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#090B10] border border-white/15 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowTermsModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Terms of Engagement & Service SLA
              </h3>

              <div className="space-y-4 text-xs text-zinc-300 leading-relaxed font-sans">
                <p>
                  Our client relationships are governed by explicit Statements of Work (SOW), transparent milestone deliverables, and agreed-upon sprint roadmaps.
                </p>
                <h4 className="font-bold text-white text-sm">1. Agile Sprint Deliverables</h4>
                <p>
                  Engagements operate in two-week agile sprint cadences. Each sprint begins with agreed-upon ticket scopes on Linear and concludes with live demonstration staging builds and code commits.
                </p>
                <h4 className="font-bold text-white text-sm">2. Post-Launch Warranty</h4>
                <p>
                  All production releases include a 30-day comprehensive technical warranty covering any bug fixes, browser inconsistencies, or regression rectifications at zero additional cost.
                </p>
                <h4 className="font-bold text-white text-sm">3. Payment & Milestone Schedules</h4>
                <p>
                  Payments are distributed across verified milestones (Deposit, Prototype Approval, Beta Staging, Production Go-Live). Wire transfers, Stripe, and cryptocurrency settlement supported.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
