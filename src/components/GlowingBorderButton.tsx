import React from 'react';
import { motion } from 'motion/react';

interface GlowingBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  rounded?: 'full' | 'xl' | '2xl';
  pulse?: boolean;
  glowSpeed?: number; // seconds for full orbit rotation
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

export function GlowingBorderButton({
  children,
  className = '',
  rounded = 'full',
  pulse = true,
  glowSpeed = 3,
  onClick,
  disabled = false,
  type = 'button',
  id,
}: GlowingBorderButtonProps) {
  const roundedClass = rounded === 'full' ? 'rounded-full' : rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl';

  return (
    <div
      className={`relative inline-flex p-[2px] overflow-hidden ${roundedClass} group ${
        pulse && !disabled ? 'animate-subtle-pulse' : ''
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ isolation: 'isolate' }}
    >
      {/* High-contrast moving beam of light that rotates continuously 360 around the border */}
      <motion.div
        animate={disabled ? {} : { rotate: 360 }}
        transition={{ duration: glowSpeed, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-150%] pointer-events-none -z-10"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, transparent 60deg, #10b981 120deg, #6ee7b7 180deg, #34d399 210deg, transparent 270deg, transparent 360deg)',
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      />

      {/* Blurred glow halo cast outward that rotates in sync with the border beam */}
      <motion.div
        animate={disabled ? {} : { rotate: 360 }}
        transition={{ duration: glowSpeed, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-150%] pointer-events-none blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, transparent 60deg, #10b981 120deg, #6ee7b7 180deg, #34d399 210deg, transparent 270deg, transparent 360deg)',
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      />

      {/* Actual button element sitting on top */}
      <button
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`relative z-10 w-full h-full bg-brand-900 text-white ${roundedClass} transition-colors duration-200 group-hover:bg-brand-800 ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
