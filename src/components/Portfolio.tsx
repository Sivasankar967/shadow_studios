import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter, ExternalLink, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectCaseStudy } from '../types';
import { soundFx } from '../utils/sound';
import { ProjectDetailModal } from './ProjectDetailModal';
import { MagneticButton } from './MagneticButton';

interface PortfolioProps {
  onStartProject: (projectTitle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    'All Projects',
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'AI Projects',
    'Branding',
  ];

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleFilterClick = (cat: string) => {
    soundFx.playClick();
    setSelectedCategory(cat);
  };

  const handleOpenProject = (project: ProjectCaseStudy) => {
    soundFx.playClick();
    setActiveModalProject(project);
  };

  return (
    <section id="work" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-lime uppercase tracking-widest">
            <span>// 04. Selected Works</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            ENGINEERED FOR IMPACT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-cyber-cyan">
              EXPLORE OUR PORTFOLIO.
            </span>
          </motion.h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A curated showcase of scalable software architectures, cross-platform apps, and AI systems. 
            All projects are structured with production-tested engineering patterns and data-driven specifications.
          </p>
        </div>

        {/* Disclaimer Tag for Sample Content */}
        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-xs text-left self-start md:self-end">
          <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Transparent Agency Standards</span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-snug">
            All showcase projects below feature clearly labeled architectural prototypes & sample designs until client NDA-cleared metrics are populated.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/[0.08] overflow-x-auto">
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mr-2">
          <Filter className="w-3.5 h-3.5 text-lime" />
          <span>FILTER:</span>
        </div>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 focus:outline-none ${
                isSelected
                  ? 'bg-lime text-black font-bold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
              data-interactive="true"
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Editorial Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout span: alternate large (7 cols) and medium (5 cols)
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={`${colSpan} glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-lime/50 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Visual Cover Graphic with Tech Grid Backdrop */}
                <div
                  onClick={() => handleOpenProject(project)}
                  className="w-full h-56 sm:h-72 rounded-2xl relative overflow-hidden mb-6 cursor-pointer border border-white/10 group-hover:border-lime/30 transition-all"
                  style={{ background: project.coverImage }}
                  data-interactive="true"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Subtle noise and inner lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent opacity-90" />

                  {/* Top Tags inside visual */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-lime border border-lime/30">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-400 bg-black/70 backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Center Reveal Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="px-5 py-2.5 rounded-full bg-lime text-black font-display text-xs font-bold uppercase tracking-wider shadow-lime-glow flex items-center gap-1.5">
                      View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Client Type watermark */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[11px] font-mono text-zinc-400 block font-semibold">
                      {project.clientType}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3
                    onClick={() => handleOpenProject(project)}
                    className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-lime transition-colors cursor-pointer mb-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.tagline}
                  </p>

                  {/* Technologies Used Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom View Button */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-white group-hover:text-lime transition-colors focus:outline-none"
                    data-interactive="true"
                  >
                    <span>Inspect Architecture & Results</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-zinc-600">
                    Case Study 0{idx + 1}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onStartSimilarProject={(title) => {
          onStartProject(`Similar to: ${title}`);
        }}
      />
    </section>
  );
};
