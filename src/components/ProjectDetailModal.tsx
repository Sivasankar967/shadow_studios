import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { soundFx } from '../utils/sound';
import { MagneticButton } from './MagneticButton';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#090B10] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="sticky top-0 float-right z-20 p-2.5 rounded-full bg-black/60 border border-white/15 text-zinc-400 hover:text-white hover:border-lime transition-colors backdrop-blur-md"
            aria-label="Close Project Modal"
            data-interactive="true"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="space-y-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-lime/10 text-lime border border-lime/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/10">
                Year: {project.year}
              </span>
              {project.isPlaceholder && (
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
                  Concept Architecture Showcase
                </span>
              )}
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {project.title}
            </h2>

            <p className="text-base sm:text-xl text-zinc-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Hero Banner / Preview Graphic */}
          <div
            className="w-full h-64 sm:h-80 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden border border-white/10 mb-8"
            style={{ background: project.coverImage }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-lime block">Client Engagement</span>
                <span className="text-sm font-mono font-bold text-white">{project.clientType}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-black/60 border border-white/20 text-xs font-mono text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Overview */}
          <div className="space-y-4 mb-8 pb-8 border-b border-white/10">
            <span className="text-xs font-mono text-lime uppercase tracking-widest">// 01. Overview</span>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-white/10">
            {/* The Challenge */}
            <div className="p-6 rounded-2xl bg-red-950/[0.1] border border-red-500/20 space-y-3">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest block">
                The Client Challenge
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Our Solution */}
            <div className="p-6 rounded-2xl bg-lime/[0.04] border border-lime/30 space-y-3">
              <span className="text-xs font-mono text-lime uppercase tracking-widest block">
                Our Engineered Solution
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Design & Dev Process Sprint Breakdown */}
          <div className="space-y-4 mb-8 pb-8 border-b border-white/10">
            <span className="text-xs font-mono text-lime uppercase tracking-widest">// 02. Execution Roadmap</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.process.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <span className="text-xs font-mono font-bold text-white block">{step.phase}</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Fidelity UI Mockups & Visual Artifacts */}
          <div className="space-y-4 mb-8 pb-8 border-b border-white/10">
            <span className="text-xs font-mono text-lime uppercase tracking-widest">// 03. High-Fidelity Interface Mockups</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.mockups.map((mockup, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-[#0e111a] border border-white/10 space-y-3 relative overflow-hidden group"
                >
                  {/* Mockup Top Window Controls */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[180px]">
                      {mockup.title}
                    </span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: mockup.previewAccent }} />
                  </div>

                  {/* Visual Interface Simulation */}
                  <div className="h-36 rounded-xl bg-black/60 p-4 border border-white/5 flex flex-col justify-between font-mono text-xs">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-zinc-400">
                        <span>Component: {mockup.type.toUpperCase()}</span>
                        <span className="text-lime">STATUS: ACTIVE</span>
                      </div>
                      <div className="w-3/4 h-2 rounded bg-white/10" />
                      <div className="w-1/2 h-2 rounded bg-white/5" />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-white/5">
                      <span>Latency: 42ms</span>
                      <span className="text-cyber-cyan">60 FPS Render</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-display font-bold text-white">{mockup.title}</h4>
                    <p className="text-[11px] text-zinc-400 mt-1">{mockup.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Technology Stack */}
          <div className="space-y-3 mb-8 pb-8 border-b border-white/10">
            <span className="text-xs font-mono text-lime uppercase tracking-widest">// 04. Applied Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-white hover:border-lime/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Results & Metric Impact */}
          <div className="space-y-4 mb-8">
            <span className="text-xs font-mono text-lime uppercase tracking-widest">// 05. Benchmark Results & Metric Impact</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-lime mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs font-bold text-white mb-0.5">{res.label}</div>
                  {res.note && <div className="text-[10px] font-mono text-zinc-500">{res.note}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              data-interactive="true"
            >
              ← Back to All Projects
            </button>

            <MagneticButton
              size="md"
              variant="primary"
              onClick={() => {
                onClose();
                onStartSimilarProject(project.title);
              }}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Build Something Like This
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
