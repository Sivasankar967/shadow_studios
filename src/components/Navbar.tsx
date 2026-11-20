import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenContactModal: (servicePrefill?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Problems Solved', href: '#problems' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Why Us', href: '#why-us' },
  ];

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#07080A]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Agency Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 font-display text-xl sm:text-2xl font-black tracking-tight text-white focus:outline-none"
            data-interactive="true"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime shadow-[0_0_10px_#D4FF00]" />
            </span>
            <span className="tracking-tighter">
              VALENCE<span className="text-lime group-hover:text-cyber-cyan transition-colors duration-300">//</span>STUDIOS
            </span>
            <span className="hidden xl:inline-block text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border border-lime/30 text-lime bg-lime/5">
              EST. 2025
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  data-interactive="true"
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-lime shadow-[0_0_15px_rgba(212,255,0,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-full border transition-all duration-300 focus:outline-none ${
                soundEnabled
                  ? 'border-lime/50 bg-lime/10 text-lime shadow-[0_0_12px_rgba(212,255,0,0.3)]'
                  : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20'
              }`}
              title={soundEnabled ? 'Mute Interaction Sound' : 'Enable Interaction Sound'}
              aria-label="Toggle Interactive Sound"
              data-interactive="true"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Desktop Start Project CTA */}
            <div className="hidden sm:block">
              <MagneticButton
                size="sm"
                variant="primary"
                onClick={() => onOpenContactModal()}
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Let's Build
              </MagneticButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:text-lime focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[65px] z-40 bg-[#07080A]/98 backdrop-blur-2xl border-b border-white/10 lg:hidden px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Navigation Menu</span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-lime">
                  <Sparkles className="w-3.5 h-3.5" /> Ready for Q1/Q2 Sprints
                </span>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between py-3 text-left font-display text-2xl font-bold tracking-tight text-white hover:text-lime transition-colors group"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-lime">0{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <MagneticButton
                size="lg"
                variant="primary"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Let's Build Something
              </MagneticButton>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>matheshwaranrx7@gmail.com</span>
                <span>Response in &lt;24h</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
