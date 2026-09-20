import React from 'react';

interface GlowingBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
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
  containerClassName = '',
  fullWidth = false,
  rounded = 'full',
  pulse = true,
  glowSpeed = 3,
  onClick,
  disabled = false,
  type = 'button',
  id,
}: GlowingBorderButtonProps) {
  const roundedClass = rounded === 'full' ? 'rounded-full' : rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl';
  
  // Calculate width: only expand full width when explicitly requested or inside fullWidth contexts
  const hasResponsiveAuto = className.includes('sm:w-auto') || className.includes('md:w-auto');
  const isWidthFull = fullWidth || (!hasResponsiveAuto && className.includes('w-full'));
  const widthClass = isWidthFull 
    ? 'w-full flex items-center justify-center' 
    : hasResponsiveAuto 
      ? 'w-full sm:w-auto inline-flex items-center justify-center' 
      : 'inline-flex items-center justify-center';

  return (
    <div
      className={`relative p-[2px] overflow-hidden ${roundedClass} ${widthClass} ${
        pulse && !disabled ? 'animate-subtle-pulse' : ''
      } ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] transform-gpu group select-none ${containerClassName}`}
      style={{ isolation: 'isolate' }}
    >
      {/* High-contrast moving beam of light that wraps exactly around the 2px border frame */}
      <div
        className="absolute inset-[-150%] pointer-events-none -z-10 animate-border-rotate will-change-transform transform-gpu"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, transparent 60deg, #059669 110deg, #10b981 140deg, #6ee7b7 180deg, #34d399 210deg, transparent 270deg, transparent 360deg)',
          animationDuration: `${glowSpeed}s`,
        }}
      />

      {/* Subtle blur right on the border trace - strictly confined within the button's rounded perimeter */}
      <div
        className="absolute inset-[-150%] pointer-events-none blur-[3px] opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-border-rotate will-change-transform transform-gpu"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, transparent 60deg, #059669 110deg, #10b981 140deg, #6ee7b7 180deg, #34d399 210deg, transparent 270deg, transparent 360deg)',
          animationDuration: `${glowSpeed}s`,
        }}
      />

      {/* Base border track so perimeter never drops out or looks broken */}
      <div className={`absolute inset-0 ${roundedClass} border border-emerald-500/25 pointer-events-none`} />

      {/* Actual button element sitting directly inside */}
      <button
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`relative z-10 w-full h-full flex items-center justify-center text-center bg-brand-900 text-white ${roundedClass} transition-colors duration-150 group-hover:bg-brand-800 cursor-pointer ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
