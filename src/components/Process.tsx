import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Palette, Code, Rocket, Activity, CheckCircle2, Clock } from 'lucide-react';
import { processData } from '../data/processData';
import { soundFx } from '../utils/sound';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-lime" />,
    Cpu: <Cpu className="w-5 h-5 text-cyber-cyan" />,
    Palette: <Palette className="w-5 h-5 text-cyber-purple" />,
    Code: <Code className="w-5 h-5 text-cyber-emerald" />,
    Rocket: <Rocket className="w-5 h-5 text-amber-400" />,
    Activity: <Activity className="w-5 h-5 text-lime" />,
  };

  return (
    <section id="process" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
          <span>// 05. Engineering Methodology</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
        >
          FROM DISCOVERY TO HYPERSCALE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
            OUR 6-PHASE PROCESS.
          </span>
        </motion.h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          No guesswork. We follow an iterative, transparent engineering pipeline that ensures predictability, zero scope creep, and rapid deployment cycles.
        </p>
      </div>

      {/* Connected Visual Timeline */}
      <div className="relative">
        {/* Central glowing vertical timeline connector line (desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-lime via-cyber-cyan to-cyber-purple opacity-30" />

        <div className="space-y-12 lg:space-y-16">
          {processData.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative flex flex-col lg:flex-row items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                } gap-8 lg:gap-16`}
              >
                {/* Center Node Indicator */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-[#07080A] border-2 border-lime items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.4)]">
                  <span className="font-mono text-xs font-bold text-lime">{step.number}</span>
                </div>

                {/* Content Card (Half width on desktop) */}
                <div className="w-full lg:w-1/2">
                  <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-lime/40 transition-all duration-300 relative group">
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-lime/30 group-hover:scale-105 transition-all">
                          {iconMap[step.iconName] || <Compass className="w-5 h-5 text-lime" />}
                        </div>
                        <span className="text-xs font-mono uppercase tracking-widest text-lime">
                          Phase {step.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                        <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-lime transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-300 font-semibold mb-4">
                      {step.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 border-t border-white/[0.06] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                        Phase Deliverables:
                      </span>
                      {step.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty spacer on opposite side for desktop layout */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
