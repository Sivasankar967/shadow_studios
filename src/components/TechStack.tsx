import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Smartphone, Database, Cpu, Palette, Terminal, Sparkles } from 'lucide-react';
import { techStackData } from '../data/techStackData';
import { TechItem } from '../types';
import { soundFx } from '../utils/sound';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Frontend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Backend', icon: <Server className="w-3.5 h-3.5" /> },
    { label: 'Mobile', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { label: 'Database', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'AI', icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: 'Design', icon: <Palette className="w-3.5 h-3.5" /> },
    { label: 'DevOps', icon: <Terminal className="w-3.5 h-3.5" /> },
  ];

  const filteredTech = activeCategory === 'All'
    ? techStackData
    : techStackData.filter(t => t.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="tech" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
            <span>// 06. The Technical Arsenal</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            MODERN TECHNOLOGY STACK. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
              ZERO LEGACY BAGGAGE.
            </span>
          </motion.h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We only ship with tools we have rigorously benchmarked. From edge-rendered React applications to resilient Python microservices and vector AI architectures.
          </p>
        </div>

        <div className="text-left md:text-right">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Supported Ecosystem</span>
          <span className="text-2xl font-display font-extrabold text-lime">{techStackData.length} Technologies</span>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/[0.08]">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 focus:outline-none ${
                isSelected
                  ? 'bg-lime text-black font-bold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
              data-interactive="true"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-card p-5 rounded-2xl border border-white/[0.08] hover:border-lime/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    {tech.category}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      tech.highlight
                        ? 'bg-lime/10 border-lime/30 text-lime font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400'
                    }`}
                  >
                    {tech.level}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-lime transition-colors mb-2">
                  {tech.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>Verified Standard</span>
                <span className="text-lime">100% In-House</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
