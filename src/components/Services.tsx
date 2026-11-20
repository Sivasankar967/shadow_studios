import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Layers,
  Cpu,
  TrendingUp,
  Search,
  Sparkles,
  Wrench,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  X,
  Code
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { soundFx } from '../utils/sound';
import { MagneticButton } from './MagneticButton';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 transition-transform duration-300 group-hover:scale-110' };
    switch (iconName) {
      case 'Globe': return <Globe {...props} style={{ color: '#D4FF00' }} />;
      case 'Smartphone': return <Smartphone {...props} style={{ color: '#00F0FF' }} />;
      case 'Layers': return <Layers {...props} style={{ color: '#9D4EDD' }} />;
      case 'Cpu': return <Cpu {...props} style={{ color: '#10F38B' }} />;
      case 'TrendingUp': return <TrendingUp {...props} style={{ color: '#FF6B6B' }} />;
      case 'Search': return <Search {...props} style={{ color: '#FFAE00' }} />;
      case 'Sparkles': return <Sparkles {...props} style={{ color: '#F72585' }} />;
      case 'Wrench': return <Wrench {...props} style={{ color: '#00F0FF' }} />;
      default: return <Code {...props} style={{ color: '#D4FF00' }} />;
    }
  };

  const handleOpenDetails = (service: ServiceItem) => {
    soundFx.playClick();
    setActiveServiceModal(service);
  };

  const handleInquire = (serviceTitle: string) => {
    soundFx.playClick();
    setActiveServiceModal(null);
    onSelectServiceForInquiry(serviceTitle);
  };

  return (
    <section id="services" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
            <span>// 02. Capabilities & Craft</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            END-TO-END SERVICES FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
              EXPONENTIAL GROWTH.
            </span>
          </motion.h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From strategic discovery to production launch and beyond. We build bespoke digital systems tailored precisely to your operational and commercial targets.
          </p>
        </div>

        <div className="text-right hidden md:block">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Core Competencies</span>
          <span className="text-2xl font-display font-extrabold text-lime">08 Disciplines</span>
        </div>
      </div>

      {/* Services Grid (8 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            onMouseEnter={() => soundFx.playHover()}
            className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/[0.08] hover:border-lime/40 group relative overflow-hidden"
          >
            {/* Ambient hover glow inside card */}
            <div
              className="absolute -top-24 -right-24 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: service.accentColor }}
            />

            <div>
              {/* Header Icon + Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-lime/40 group-hover:bg-lime/5 transition-all">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-lime transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & Category */}
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase block mb-1">
                {service.category}
              </span>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-lime transition-colors mb-3">
                {service.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                {service.shortDescription}
              </p>

              {/* Sub-capabilities bullet tags */}
              <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                {service.features.slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <span className="w-1 h-1 rounded-full bg-lime" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => handleOpenDetails(service)}
                className="text-xs font-mono font-medium text-white hover:text-lime flex items-center gap-1 transition-colors focus:outline-none"
                data-interactive="true"
              >
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleInquire(service.title)}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-black hover:bg-lime hover:border-lime transition-all focus:outline-none"
                title={`Inquire about ${service.title}`}
                data-interactive="true"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expandable Service Detail Drawer / Modal */}
      <AnimatePresence>
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0E1017] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveServiceModal(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Service Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Meta */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {getServiceIcon(activeServiceModal.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-lime uppercase tracking-widest block">
                    Service {activeServiceModal.number} // {activeServiceModal.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {activeServiceModal.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed my-6 pb-6 border-b border-white/10">
                {activeServiceModal.fullDescription}
              </p>

              {/* Sub-Offerings Scope */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  What's Included In This Discipline:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeServiceModal.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Concrete Agency Deliverables:
                </h4>
                <div className="space-y-2">
                  {activeServiceModal.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-400">
                      <span className="text-lime font-mono">0{i + 1}.</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Applied Frameworks & Tooling:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeServiceModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">Typical Sprint Turnaround</span>
                  <span className="text-sm font-display font-bold text-white">2 to 6 Weeks Depending on Scope</span>
                </div>
                <MagneticButton
                  size="md"
                  variant="primary"
                  onClick={() => handleInquire(activeServiceModal.title)}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Inquire About {activeServiceModal.title}
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
