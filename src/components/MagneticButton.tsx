import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  type = 'button',
  disabled = false,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    soundFx.playClick();
    if (onClick) onClick();
  };

  const handleMouseEnter = () => {
    soundFx.playHover();
  };

  // Variant styles
  const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime/50 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-5 py-2.5 gap-2',
    md: 'text-sm px-7 py-3.5 gap-2.5',
    lg: 'text-base px-9 py-4 gap-3',
  }[size];

  const variantStyles = {
    primary:
      'bg-lime text-black shadow-[0_0_25px_rgba(212,255,0,0.35)] hover:shadow-[0_0_35px_rgba(212,255,0,0.6)] hover:bg-[#e6ff47]',
    secondary:
      'bg-transparent text-white border border-white/20 hover:border-lime hover:text-lime shadow-sm backdrop-blur-md hover:bg-lime/5',
    glass:
      'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:border-white/30 hover:bg-white/10',
  }[variant];

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.1 }}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {/* Glare effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform ease-out" />

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};
