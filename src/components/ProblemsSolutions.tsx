import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Globe,
  Cpu,
  Smartphone,
  Search,
  RefreshCw,
  ArrowUpRight
} from 'lucide-react';
import { problemsData } from '../data/problemsData';
import { soundFx } from '../utils/sound';
import { MagneticButton } from './MagneticButton';

interface ProblemsSolutionsProps {
  onResolveProblem: (problemTitle: string) => void;
}

export const ProblemsSolutions: React.FC<ProblemsSolutionsProps> = ({ onResolveProblem }) => {
  // Global toggle state: 'split' | 'solutions' | 'problems'
  const [viewMode, setViewMode] = useState<'interactive' | 'all-solutions'>('interactive');
  
  // Track individual card transformation states: record of problemId -> boolean (true = solution revealed)
  const [cardStates, setCardStates] = useState<Record<string, boolean>>({
    'no-online-presence': true,
    'slow-website': true,
    'manual-processes': true,
    'losing-customers': true,
    'need-mobile-app': true,
    'no-organic-traffic': true,
  });

  const toggleSingleCard = (id: string) => {
    soundFx.playClick();
    setCardStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getProblemIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Globe': return <Globe {...props} className="text-lime" />;
      case 'Zap': return <Zap {...props} className="text-amber-400" />;
      case 'Cpu': return <Cpu {...props} className="text-cyber-cyan" />;
      case 'TrendingUp': return <TrendingUp {...props} className="text-cyber-emerald" />;
      case 'Smartphone': return <Smartphone {...props} className="text-cyber-purple" />;
      case 'Search': return <Search {...props} className="text-orange-400" />;
      default: return <Sparkles {...props} className="text-lime" />;
    }
  };

  return (
    <section id="problems" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Glow accent */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
            <span>// 03. Strategic Value Engine</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            WE DON'T JUST WRITE CODE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
              WE SOLVE CORE BUSINESS PROBLEMS.
            </span>
          </motion.h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every feature we construct must drive measurable revenue, protect margin, or automate operational friction. 
            Click any card to trigger the transformation from traditional business bottleneck to engineered technological solution.
          </p>
        </div>

        {/* Global Transformation Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start lg:self-end">
          <button
            onClick={() => {
              soundFx.playClick();
              // Flip all to problem
              const allProblems: Record<string, boolean> = {};
              problemsData.forEach(p => allProblems[p.id] = false);
              setCardStates(allProblems);
            }}
            className="px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            data-interactive="true"
          >
            Show Bottlenecks
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              // Flip all to solutions
              const allSolutions: Record<string, boolean> = {};
              problemsData.forEach(p => allSolutions[p.id] = true);
              setCardStates(allSolutions);
            }}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-lime text-black shadow-[0_0_15px_rgba(212,255,0,0.3)] transition-all"
            data-interactive="true"
          >
            Show All Solutions
          </button>
        </div>
      </div>

      {/* 6 Problem / Solution Transformation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problemsData.map((item, idx) => {
          const isTransformed = cardStates[item.id] !== false; // default true

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-card rounded-2xl p-7 border transition-all duration-500 relative flex flex-col justify-between overflow-hidden ${
                isTransformed
                  ? 'border-lime/30 bg-gradient-to-b from-white/[0.04] to-lime/[0.02]'
                  : 'border-red-500/20 bg-gradient-to-b from-white/[0.02] to-red-950/[0.08]'
              }`}
            >
              <div>
                {/* Top Badge & Interactive Flip Trigger */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {getProblemIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      0{idx + 1} // {item.category}
                    </span>
                  </div>

                  {/* Quick Toggle Button */}
                  <button
                    onClick={() => toggleSingleCard(item.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border transition-all ${
                      isTransformed
                        ? 'border-lime/40 text-lime bg-lime/10'
                        : 'border-red-400/30 text-red-400 bg-red-400/10'
                    }`}
                    title="Click to toggle between Problem and Solution"
                    data-interactive="true"
                  >
                    <RefreshCw className="w-2.5 h-2.5 animate-spin-slow" />
                    <span>{isTransformed ? 'Solution' : 'Problem'}</span>
                  </button>
                </div>

                {/* Animated Morphing Body */}
                <AnimatePresence mode="wait">
                  {!isTransformed ? (
                    // Problem View (Red / Warning Vibe)
                    <motion.div
                      key="problem-view"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-red-400">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>The Commercial Bottleneck</span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.problemTitle}
                      </h3>

                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.problemDescription}
                      </p>

                      <div className="p-3 rounded-xl bg-red-500/[0.06] border border-red-500/20 text-red-300 text-[11px] leading-relaxed">
                        <span className="font-mono font-bold block mb-0.5">Symptom & Cost:</span>
                        {item.symptom}
                      </div>
                    </motion.div>
                  ) : (
                    // Solution View (Lime / Cyan Success Vibe)
                    <motion.div
                      key="solution-view"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-lime">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Engineered Solution</span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.solutionTitle}
                      </h3>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {item.solutionDescription}
                      </p>

                      <div className="p-3 rounded-xl bg-lime/[0.06] border border-lime/25 text-lime text-[11px] leading-relaxed flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-medium">{item.impactMetrics}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Transformation CTA */}
              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => toggleSingleCard(item.id)}
                  className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
                  data-interactive="true"
                >
                  <span>{isTransformed ? 'Inspect Problem' : 'Transform Solution'}</span>
                  <ArrowRight className="w-3 h-3 text-lime" />
                </button>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    onResolveProblem(item.problemTitle);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-mono text-lime hover:underline focus:outline-none"
                  title="Let's solve this for your business"
                  data-interactive="true"
                >
                  <span>Fix This</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Strategic Callout Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-lime uppercase tracking-widest">// Custom Diagnostics</span>
          <h3 className="font-display text-2xl font-bold text-white">
            Facing a Unique Operational or Technological Bottleneck?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            We offer a zero-cost 30-minute architectural audit where our lead engineers diagnose your tech stack, conversion bottlenecks, and automation opportunities.
          </p>
        </div>

        <MagneticButton
          size="md"
          variant="primary"
          onClick={() => onResolveProblem('Custom Architectural Audit')}
          icon={<ArrowUpRight className="w-4 h-4" />}
          className="shrink-0"
        >
          Book 30-Min Audit
        </MagneticButton>
      </motion.div>
    </section>
  );
};
