import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code2, Cpu, Smartphone, Layers, CheckCircle2, ChevronDown } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { MagneticButton } from './MagneticButton';
import { soundFx } from '../utils/sound';

interface HeroProps {
  onOpenContactModal: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal, onExploreWork }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const marqueeItems = [
    'WEB DEVELOPMENT',
    'AI & LLM INTEGRATIONS',
    'MOBILE APP ENGINEERING',
    'UI/UX STRATEGY',
    'BUSINESS AUTOMATION',
    'SEO DOMINANCE',
    'BRAND IDENTITY',
    'CUSTOM SAAS PLATFORMS',
  ];

  const floatingBadges = [
    { label: 'Next.js 15 & React', icon: <Code2 className="w-3.5 h-3.5 text-lime" />, position: 'top-16 left-6 lg:left-12' },
    { label: 'Gemini AI & RAG', icon: <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />, position: 'top-32 right-6 lg:right-16' },
    { label: 'React Native & iOS', icon: <Smartphone className="w-3.5 h-3.5 text-cyber-emerald" />, position: 'bottom-36 left-8 lg:left-24' },
    { label: 'Design Tokens & Motion', icon: <Layers className="w-3.5 h-3.5 text-cyber-purple" />, position: 'bottom-28 right-8 lg:right-28' },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden cyber-grid"
    >
      {/* Interactive Mouse-Following Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-[100px] opacity-40 transition-opacity duration-700 ease-out z-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x * 100}% ${
            mousePos.y * 100
          }%, rgba(212, 255, 0, 0.12), rgba(0, 240, 255, 0.05), transparent 70%)`,
        }}
      />

      {/* Ambient background blur blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-cyber-purple/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left / Center Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-lime/30 backdrop-blur-md shadow-[0_0_20px_rgba(212,255,0,0.1)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-lime uppercase">
                Available for New Projects
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-[11px] font-mono text-zinc-400">Q1 & Q2 Sprint Bookings</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]"
            >
              WE TURN IDEAS <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-lime to-cyber-cyan">
                INTO DIGITAL
              </span>{' '}
              <br />
              <span className="relative text-white underline decoration-lime/60 decoration-wavy decoration-2">
                REALITY.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="max-w-xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
            >
              We design, develop, and scale digital experiences that help businesses move forward. 
              From websites and mobile applications to AI-powered solutions, we build technology that makes a difference.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={onOpenContactModal}
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="shadow-lime-glow"
              >
                Let's Build Something
              </MagneticButton>

              <MagneticButton
                size="lg"
                variant="secondary"
                onClick={onExploreWork}
              >
                Explore Our Work
              </MagneticButton>
            </motion.div>

            {/* Small Quick Metric Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400 border-t border-white/[0.08]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime" />
                <span>Zero Outsourcing, Direct Senior Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
                <span>Modern Tech Stack & Clean Architecture</span>
              </div>
            </motion.div>
          </div>

          {/* Right Centerpiece: 3D WebGL Canvas + Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] xl:h-[520px] w-full flex items-center justify-center">
            {/* The 3D Canvas */}
            <Hero3DCanvas className="w-full h-full" />

            {/* Floating Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + idx * 0.15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 3 + idx,
                }}
                className={`absolute ${badge.position} hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E1017]/90 border border-white/10 backdrop-blur-md shadow-xl text-xs font-mono text-zinc-300 pointer-events-auto hover:border-lime/50 transition-colors cursor-default`}
              >
                {badge.icon}
                <span className="font-semibold">{badge.label}</span>
              </motion.div>
            ))}

            {/* Center Core HUD Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-500 uppercase tracking-widest backdrop-blur-sm pointer-events-none">
              Interactive WebGL Core // Drag To Orbit
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative z-10 w-full mt-12 py-3.5 bg-black/50 border-y border-white/[0.08] backdrop-blur-md overflow-hidden select-none">
        <div className="flex w-[200%] animate-marquee">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <div key={index} className="flex items-center mx-6 gap-3 whitespace-nowrap">
              <span className="text-lime text-xs">✦</span>
              <span className="font-display text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-lime transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            soundFx.playClick();
            const nextSec = document.querySelector('#about');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-lime transition-colors group focus:outline-none"
          aria-label="Scroll down to About section"
          data-interactive="true"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase group-hover:text-lime">Discover More</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-lime" />
        </button>
      </div>
    </section>
  );
};
