import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
  Lock, 
  Pause, 
  Play, 
  Search, 
  Bell, 
  Link2,
  Info,
  Zap
} from 'lucide-react';
import { DASHBOARD_VARIANTS } from '../data/dashboardVariants';
import { ExplanationInfo } from '../types/dashboard';
import { DashboardHoverCard } from './DashboardHoverCard';

function Sparkline({ data, color }: { data: { value: number }[]; color: string }) {
  if (!data || data.length < 2) return null;
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const w = 220;
  const h = 36;
  const pad = 4;
  
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * (w - pad * 2) + pad;
    const y = h - ((v - min) / range) * (h - pad * 2) - pad;
    return { x, y, v };
  });

  const pathD = points.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${h} L ${points[0].x} ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={`sparkGrad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.2} />
          <stop offset="100%" stopColor={color} stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#sparkGrad-${color.replace('#', '')})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle 
          key={i} 
          cx={p.x} 
          cy={p.y} 
          r={i === points.length - 1 ? 2.5 : 1.5} 
          fill={i === points.length - 1 ? color : "#ffffff"} 
          stroke={color} 
          strokeWidth="1.5" 
        />
      ))}
    </svg>
  );
}

function Logo({ className = "h-8", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg viewBox="0 0 250 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <rect x="10" y="15" width="22" height="34" rx="4" />
        <rect x="36" y="15" width="24" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 41 26 L 41 23 Q 41 20 44 20 L 55 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="10" y="53" width="22" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 15 63 L 15 60 Q 15 58 18 58 L 27 58" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="75" y="48" fontFamily="system-ui, -apple-system, sans-serif" fontSize="32" fontWeight="900" fill="currentColor" letterSpacing="-0.5">CoachOS</text>
      </g>
    </svg>
  );
}

export function HeroDashboard() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);
  const [activeExplanation, setActiveExplanation] = useState<ExplanationInfo | null>(null);

  // Auto-cycle between dashboard variants every 5.5 seconds unless paused or hovered
  useEffect(() => {
    if (!isAutoCycling || isHovered || hoveredElementId) return;
    const timer = setInterval(() => {
      setVariantIndex((prev) => (prev + 1) % DASHBOARD_VARIANTS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoCycling, isHovered, hoveredElementId]);

  const handleSelectVariant = (index: number) => {
    setVariantIndex(index);
    setHoveredElementId(null);
    setActiveExplanation(null);
  };

  const handleHoverItem = (id: string, explanation: ExplanationInfo) => {
    setHoveredElementId(id);
    setActiveExplanation(explanation);
  };

  const handleLeaveItem = () => {
    setHoveredElementId(null);
    setActiveExplanation(null);
  };

  const variant = DASHBOARD_VARIANTS[variantIndex];

  return (
    <div 
      className="flex flex-col gap-3.5 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleLeaveItem();
      }}
    >
      {/* Category Tabs & Auto-Cycle Controller */}
      <div className="flex flex-col items-center gap-2.5 z-20 w-full max-w-full">
        <div className="w-full sm:w-auto flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-x-auto scrollbar-none snap-x snap-mandatory">
          {DASHBOARD_VARIANTS.map((v, idx) => {
            const Icon = v.tabIcon;
            const isActive = idx === variantIndex;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleSelectVariant(idx)}
                className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer shrink-0 snap-center overflow-hidden ${
                  isActive ? 'text-brand-950 font-bold bg-neutral-100/90 shadow-2xs' : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? v.theme.primary : 'text-neutral-400'}`} />
                <span>{v.shortName}</span>

                {/* Smooth Animated Auto-Cycle Progress Indicator on Active Tab */}
                {isActive && isAutoCycling && !isHovered && !hoveredElementId && (
                  <motion.div
                    key={`progress-${variantIndex}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5.5, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-600 rounded-full"
                  />
                )}
              </button>
            );
          })}

          {/* Auto-Cycle Pause / Play Toggle Control */}
          <div className="h-6 w-px bg-neutral-200 mx-1 shrink-0"></div>
          <button
            type="button"
            onClick={() => setIsAutoCycling(prev => !prev)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer shrink-0 snap-center ${
              isAutoCycling 
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100/70' 
                : 'bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200/70'
            }`}
            title={isAutoCycling ? "Auto-cycle is active. Click to pause." : "Auto-cycle is paused. Click to resume."}
          >
            {isAutoCycling ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold hidden sm:inline">Auto-Cycle</span>
                <Pause className="w-3 h-3 text-emerald-700 ml-0.5" />
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
                <span className="text-[11px] font-bold hidden sm:inline">Paused</span>
                <Play className="w-3 h-3 text-neutral-700 ml-0.5 fill-neutral-700" />
              </>
            )}
          </button>
        </div>

        {/* Clean Problem-Solution Context Banner */}
        <div className="w-full bg-white rounded-2xl border border-neutral-200/90 p-3.5 sm:p-4 shadow-xs text-left transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 sm:gap-3">
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-950 text-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  What CoachOS Delivers
                </span>
                <span className="text-xs font-bold text-neutral-400">
                  • {variant.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                  <Info className="w-3 h-3 text-neutral-400" />
                  Hover to inspect automation
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-brand-950 tracking-tight">
                {variant.provesTitle}
              </h3>
              <p className="text-xs text-neutral-600 leading-normal">
                {variant.provesOutcome}
              </p>
            </div>

            {/* 3 Concrete Proof Badges */}
            <div className="flex flex-wrap lg:flex-col gap-1.5 shrink-0 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-2 lg:pt-0 lg:pl-4">
              {variant.provesProofBadges.map((badge, bIdx) => (
                <div key={bIdx} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-neutral-700 bg-neutral-50 px-2.5 py-0.8 rounded-lg border border-neutral-200/60">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main OS Mockup Window */}
      <div className="relative">
        <div className="bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-neutral-300/80 overflow-visible flex flex-col relative text-left">
          
          {/* macOS Top Window Bar */}
          <div className="h-9 bg-neutral-950 border-b border-white/10 px-3 sm:px-4 flex items-center justify-between text-neutral-400 select-none z-30 shrink-0 rounded-t-2xl sm:rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-90" />
              </div>
              
              {/* Clean whitelabel URL pill */}
              <span className="inline-flex items-center gap-1.5 ml-2 text-[10.5px] font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10 truncate">
                <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                app.coachos.io/{variant.id}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {hoveredElementId ? (
                <div className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-amber-950/70 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>{activeExplanation?.title || 'Feature'}</span>
                </div>
              ) : (
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                  <RefreshCw className={`w-2.5 h-2.5 ${isAutoCycling && !isHovered ? 'animate-spin text-emerald-400' : 'text-neutral-500'}`} style={{ animationDuration: '6s' }} />
                  <span>Auto-Cycling</span>
                </span>
              )}

              <div className="flex items-center gap-1 text-[10.5px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>0% Fees</span>
              </div>
            </div>
          </div>

          {/* Inner Workspace: Sidebar (Desktop) + Viewport */}
          <div className="flex-1 flex flex-col md:flex-row relative min-h-[460px]">
            
            {/* Desktop Left Sidebar */}
            <div className={`hidden md:flex w-52 flex-col p-3.5 shadow-xl z-10 relative shrink-0 select-none ${variant.theme.sidebar}`}>
              <div className="flex items-center mb-5 mt-1 px-1.5 relative z-10">
                <Logo className="h-5 text-white" inverted />
              </div>

              <div className="space-y-1 flex-1 relative z-10">
                {variant.menu.map((item, i) => {
                  const isSelected = i === 0;
                  return (
                    <div 
                      key={i}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                        isSelected 
                          ? `${variant.theme.activeMenu} ring-1 ring-white/20 shadow-xs font-semibold` 
                          : 'text-neutral-300 opacity-80'
                      }`}
                    >
                      <item.icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'opacity-80'}`} />
                      <span className="text-xs tracking-tight truncate">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-white/20 text-white text-[9px] font-bold px-1.5 py-0.2 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center gap-2 px-1.5">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[9px] font-bold text-white">
                  ME
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-none">Your Coaching OS</p>
                  <p className="text-[9px] text-neutral-400 mt-0.5">Whitelabeled</p>
                </div>
              </div>
            </div>

            {/* Mobile Sub-Navigation Bar */}
            <div className={`flex md:hidden items-center gap-1 p-2 border-b overflow-x-auto scrollbar-none z-10 select-none ${variant.theme.sidebar}`}>
              {variant.menu.map((item, i) => {
                const isSelected = i === 0;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs whitespace-nowrap shrink-0 ${
                      isSelected 
                        ? `${variant.theme.activeMenu} font-bold text-white shadow-xs` 
                        : 'text-neutral-300 opacity-80'
                    }`}
                  >
                    <item.icon className="w-3 h-3" />
                    <span>{item.label.split(' ')[0]}</span>
                  </div>
                );
              })}
            </div>

            {/* Main OS View Area */}
            <div className="flex-1 flex flex-col bg-white text-left relative z-0">
              
              {/* Topbar inside OS View */}
              <div className={`h-11 border-b flex items-center justify-between px-3.5 sm:px-4 sticky top-0 z-20 shrink-0 select-none ${variant.theme.topbarBg}`}>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200/60 truncate">
                    {variant.headerStatus}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 ml-auto shrink-0">
                  <div className="hidden sm:flex items-center gap-1.5 text-neutral-400 bg-neutral-100/90 px-2.5 py-1 rounded-md w-44 border border-neutral-200/60 text-xs">
                    <Search className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate text-[11px]">Search telemetry...</span>
                  </div>
                  <div className="relative p-1 text-neutral-500">
                    <Bell className="w-3.5 h-3.5" />
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={variant.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="p-3 sm:p-4 bg-neutral-50/60 h-full flex-1 space-y-3"
                >
                  
                  {/* 3 Metric Cards with Hover-Only Inspection Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {variant.topCards.map((card, i) => {
                      const cardId = `metric-card-${i}`;
                      const isItemHovered = hoveredElementId === cardId;
                      // Smart horizontal alignment so cards never clip left or right
                      const align = i === 0 ? 'left' : i === 2 ? 'right' : 'center';

                      return (
                        <div 
                          key={i}
                          className="relative"
                          onMouseEnter={() => handleHoverItem(cardId, card.explanation)}
                          onMouseLeave={handleLeaveItem}
                        >
                          <div 
                            className={`p-3 rounded-xl border transition-all duration-150 flex flex-col justify-between bg-white cursor-default group hover:border-neutral-400 hover:shadow-xs ${variant.theme.cardBg} ${isItemHovered ? 'ring-2 ring-brand-500 shadow-xs' : ''}`}
                          >
                            <div className="flex items-start justify-between mb-1">
                              <p className="text-neutral-500 text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1">
                                <span>{card.title}</span>
                                <Info className="w-2.5 h-2.5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </p>
                              <span className={`text-[9.5px] font-bold px-1.5 py-0.2 rounded-full ${variant.theme.badgeBg}`}>
                                {card.badge}
                              </span>
                            </div>

                            <div className="flex items-baseline gap-2 mb-0.5">
                              <span className="text-lg sm:text-xl font-extrabold text-brand-950 tracking-tight">{card.value}</span>
                            </div>
                            <p className="text-[11px] text-neutral-500 font-medium">{card.sub}</p>

                            {/* Progress bar type */}
                            {card.type === 'progress' && card.progress && (
                              <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2 border border-neutral-200/50">
                                <div 
                                  style={{ width: `${card.progress}%` }}
                                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                                />
                              </div>
                            )}

                            {/* Chart preview type with vector Sparkline */}
                            {card.type === 'chart' && card.chartData && (
                              <div className="h-8 w-full mt-1 -ml-1">
                                <Sparkline data={card.chartData} color={variant.theme.chartColor} />
                              </div>
                            )}
                          </div>

                          {/* Hover Explanation Card - Hover only, no click needed */}
                          <AnimatePresence>
                            {isItemHovered && (
                              <DashboardHoverCard
                                info={card.explanation}
                                themeColor={variant.theme.chartColor}
                                placement="bottom"
                                align={align}
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* Clean, Non-intrusive Integrations Row without Popups */}
                  <div className="bg-white rounded-xl border border-neutral-200/80 px-3 py-2 shadow-2xs flex flex-wrap items-center justify-between gap-2 select-none">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-neutral-700">
                      <Link2 className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                      <span>Connected Stack:</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {variant.tools.map((tool, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-neutral-200/60 bg-neutral-50 text-[11px] font-medium text-neutral-600"
                        >
                          <div className="w-3 h-3 rounded flex items-center justify-center text-white shrink-0" style={{ backgroundColor: tool.color }}>
                            <tool.icon className="w-2 h-2" />
                          </div>
                          <span className="truncate">{tool.name}</span>
                        </div>
                      ))}
                      <span className="text-[10px] text-emerald-600 font-semibold ml-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Sync
                      </span>
                    </div>
                  </div>

                  {/* Split Main Content Area */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                    
                    {/* Left Section: Core Deliverables with Hover-Only Inspection */}
                    <div className="lg:col-span-7 bg-white rounded-xl border border-neutral-200/80 p-3 shadow-2xs">
                      <div className="flex items-center justify-between mb-2 select-none">
                        <h4 className="text-[11px] font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                          <variant.leftSectionIcon className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                          {variant.leftSectionTitle}
                        </h4>
                        <span className="text-[9.5px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded-full border border-emerald-200/60">
                          Active
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {variant.leftItems.map((item, i) => {
                          const leftItemId = `left-item-${i}`;
                          const isLeftHovered = hoveredElementId === leftItemId;
                          return (
                            <div 
                              key={i} 
                              className="relative"
                              onMouseEnter={() => handleHoverItem(leftItemId, item.explanation)}
                              onMouseLeave={handleLeaveItem}
                            >
                              <div 
                                className={`p-2 rounded-lg bg-neutral-50/80 border border-neutral-100 hover:border-neutral-300 hover:bg-white transition-all text-left flex items-start justify-between gap-2 cursor-default ${isLeftHovered ? 'ring-2 ring-brand-500 shadow-xs' : ''}`}
                              >
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs font-bold text-brand-950 truncate">{item.title}</p>
                                  <p className="text-[10.5px] text-neutral-500 truncate mt-0.5">{item.meta}</p>
                                </div>
                                <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded shrink-0 ${item.statusColor}`}>
                                  {item.status}
                                </span>
                              </div>

                              {/* Hover Explanation Card - Clean top/left alignment */}
                              <AnimatePresence>
                                {isLeftHovered && (
                                  <DashboardHoverCard
                                    info={item.explanation}
                                    themeColor={variant.theme.chartColor}
                                    placement="top"
                                    align="left"
                                  />
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Section: Real-time Activity Feed with Hover-Only Inspection */}
                    <div className="lg:col-span-5 bg-white rounded-xl border border-neutral-200/80 p-3 shadow-2xs">
                      <div className="flex items-center justify-between mb-2 select-none">
                        <h4 className="text-[11px] font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                          <variant.rightSectionIcon className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                          {variant.rightSectionTitle}
                        </h4>
                        <span className="text-[9.5px] text-emerald-600 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Feed
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {variant.rightItems.map((act, i) => {
                          const rightItemId = `right-item-${i}`;
                          const isRightHovered = hoveredElementId === rightItemId;
                          return (
                            <div 
                              key={i} 
                              className="relative"
                              onMouseEnter={() => handleHoverItem(rightItemId, act.explanation)}
                              onMouseLeave={handleLeaveItem}
                            >
                              <div 
                                className={`p-2 rounded-lg border border-neutral-100 bg-neutral-50/70 hover:bg-white hover:border-neutral-300 transition-all flex items-start gap-2 cursor-default ${isRightHovered ? 'ring-2 ring-brand-500 shadow-xs' : ''}`}
                              >
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${act.iconBg}`}>
                                  <act.icon className="w-2.5 h-2.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <p className="text-xs font-bold text-brand-950 truncate">{act.author}</p>
                                    <span className="text-[9.5px] text-neutral-400 shrink-0">{act.time}</span>
                                  </div>
                                  <p className="text-[10.5px] font-semibold text-neutral-700 truncate">{act.action}</p>
                                </div>
                              </div>

                              {/* Hover Explanation Card - Clean top/right alignment */}
                              <AnimatePresence>
                                {isRightHovered && (
                                  <DashboardHoverCard
                                    info={act.explanation}
                                    themeColor={variant.theme.chartColor}
                                    placement="top"
                                    align="right"
                                  />
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
