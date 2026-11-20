import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Eye, ShieldCheck, Users, Info, ArrowUpRight } from 'lucide-react';
import { agencyStats, agencyValues } from '../data/agencyStats';
import { soundFx } from '../utils/sound';

interface AboutProps {
  onStartProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartProject }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-5 h-5 text-lime" />,
    Sparkles: <Sparkles className="w-5 h-5 text-cyber-cyan" />,
    Eye: <Eye className="w-5 h-5 text-cyber-purple" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyber-emerald" />,
    Users: <Users className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="about" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background cyber accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
          <span>// 01. About Valence</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
        >
          WE ARE MORE THAN JUST <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
            A DEVELOPMENT TEAM.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed pt-2"
        >
          We are a multidisciplinary digital technology startup combining cutting-edge design, resilient software engineering, creative storytelling, and pragmatic business thinking.
        </motion.p>
      </div>

      {/* Narrative Split Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-lime/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Transforming Complex Ideas Into Scalable Reality
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            Too many agencies either build beautiful websites that collapse under traffic or write bulletproof backends that look like they were designed in 2004. We refuse that compromise.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            By uniting seasoned freelance engineers, UI/UX architects, and AI pioneers under one cohesive agency model, we deliver full-cycle digital transformation. We help forward-thinking founders turn abstract napkin sketches into market-dominating software products.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">Headquarters</span>
              <span className="text-xs font-mono text-white px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Remote-First Global Guild
              </span>
            </div>
            <button
              onClick={() => {
                soundFx.playClick();
                onStartProject();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-lime hover:underline focus:outline-none"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Animated Editable Statistics with Transparent Disclaimers */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {agencyStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-card p-6 rounded-2xl border border-white/10 relative group hover:border-lime/40"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                {stat.isPlaceholder && (
                  <span
                    className="flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    title="Editable benchmark placeholder until real verification data is plugged in"
                  >
                    <Info className="w-2.5 h-2.5" /> Placeholder
                  </span>
                )}
              </div>

              <div className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-lime transition-colors">
                {stat.value}
              </div>

              <div className="font-sans text-xs sm:text-sm font-semibold text-zinc-300 mt-2">
                {stat.label}
              </div>

              <p className="text-[11px] text-zinc-500 mt-1.5 leading-snug">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono text-lime uppercase tracking-widest">// The Valence Code</span>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white uppercase mt-1">
              OUR GUIDING VALUES
            </h3>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-sm">
            Five non-negotiable principles embedded in every sprint, repository commit, and client interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {agencyValues.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-lime/50 group relative"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:border-lime/30 group-hover:scale-105 transition-all">
                  {iconMap[value.iconName] || <Sparkles className="w-5 h-5 text-lime" />}
                </div>

                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                  Value 0{idx + 1}
                </div>
                
                <h4 className="font-display text-lg font-bold text-white group-hover:text-lime transition-colors">
                  {value.name}
                </h4>

                <p className="text-xs font-medium text-zinc-400 mt-1 mb-3">
                  {value.headline}
                </p>

                <p className="text-xs text-zinc-500 leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-600 group-hover:text-zinc-400">
                <span>Committed</span>
                <span>100%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
