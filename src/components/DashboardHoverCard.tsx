import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap } from 'lucide-react';
import { ExplanationInfo } from '../types/dashboard';

interface DashboardHoverCardProps {
  info: ExplanationInfo;
  themeColor?: string;
  className?: string;
  placement?: 'top' | 'bottom';
  align?: 'left' | 'center' | 'right';
}

export function DashboardHoverCard({
  info,
  themeColor = '#10b981',
  className = '',
  placement = 'bottom',
  align = 'center'
}: DashboardHoverCardProps) {
  const IconComponent = info.categoryIcon || Sparkles;

  // Vertical placement
  const verticalClass = placement === 'top' 
    ? 'bottom-full mb-2' 
    : 'top-full mt-2';

  // Horizontal alignment to prevent clipping on dashboard edges
  let alignClass = 'left-1/2 -translate-x-1/2';
  if (align === 'left') {
    alignClass = 'left-0';
  } else if (align === 'right') {
    alignClass = 'right-0';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: placement === 'bottom' ? -4 : 4, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: placement === 'bottom' ? -3 : 3, scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`absolute z-50 w-64 sm:w-72 pointer-events-none select-none ${verticalClass} ${alignClass} ${className}`}
    >
      <div className="bg-neutral-950/95 backdrop-blur-md text-white rounded-xl border border-white/15 p-3 shadow-xl relative overflow-hidden text-left pointer-events-none">
        {/* Subtle accent hairline */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] opacity-90"
          style={{ backgroundColor: themeColor }}
        />

        {/* Compact Header: Category + Tag */}
        <div className="flex items-center justify-between gap-1.5 mb-1.5">
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/10 text-[9.5px] font-bold uppercase tracking-wider text-neutral-300">
            <IconComponent className="w-2.5 h-2.5 text-amber-400" />
            <span className="truncate">{info.category}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Automated
          </span>
        </div>

        {/* Title */}
        <h5 className="font-bold text-white text-xs tracking-tight mb-1 leading-snug">
          {info.title}
        </h5>

        {/* Crisp 1-sentence summary */}
        <p className="text-[11px] text-neutral-300 leading-snug mb-2">
          {info.summary}
        </p>

        {/* Automation Highlight */}
        <div className="bg-white/5 rounded-lg px-2 py-1.5 mb-1.5 border border-white/5">
          <div className="flex items-start gap-1 text-[10px] text-neutral-200 leading-tight">
            <Zap className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
            <span>{info.howItWorks}</span>
          </div>
        </div>

        {/* High-value Impact / Result */}
        {info.impact && (
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
            <Sparkles className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">{info.impact}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
