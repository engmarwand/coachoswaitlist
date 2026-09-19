import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSpreadsheet,
  MessageCircle,
  CreditCard,
  Calendar,
  ClipboardCheck,
  Dumbbell,
  ArrowRight
} from 'lucide-react';

interface LoadingIntroProps {
  onComplete: () => void;
}

// 6 pure, harmonious coaching components that fold together
const APPS = [
  {
    id: 'sheets',
    label: 'Spreadsheets',
    sub: 'Client Trackers',
    icon: FileSpreadsheet,
    color: '#10b981',
    angle: 0,
  },
  {
    id: 'messages',
    label: 'Messaging',
    sub: 'WhatsApp & DMs',
    icon: MessageCircle,
    color: '#22c55e',
    angle: 60,
  },
  {
    id: 'billing',
    label: 'Billing',
    sub: 'Stripe & Invoices',
    icon: CreditCard,
    color: '#6366f1',
    angle: 120,
  },
  {
    id: 'schedule',
    label: 'Scheduling',
    sub: 'Calendly & Calls',
    icon: Calendar,
    color: '#3b82f6',
    angle: 180,
  },
  {
    id: 'checkin',
    label: 'Check-ins',
    sub: 'Forms & Updates',
    icon: ClipboardCheck,
    color: '#f59e0b',
    angle: 240,
  },
  {
    id: 'workouts',
    label: 'Programs',
    sub: 'Workouts & PDFs',
    icon: Dumbbell,
    color: '#f43f5e',
    angle: 300,
  },
];

export function LoadingIntro({ onComplete }: LoadingIntroProps) {
  // 3 crisp, satisfying, brain-soothing phases:
  // 1. 'separate': The 6 apps float symmetrically in calm balance (0ms - 900ms)
  // 2. 'merge': The cards smoothly glide inwards and morph into 1 clean card (900ms - 1700ms)
  // 3. 'unified': The final, pristine CoachOS card gently reveals the brand and logo (1700ms - 2700ms)
  // Then effortlessly dissolves into the site (2700ms - 3100ms)
  const [phase, setPhase] = useState<'separate' | 'merge' | 'unified'>('separate');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('merge'), 900);
    const t2 = setTimeout(() => setPhase('unified'), 1600);
    const t3 = setTimeout(() => onComplete(), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Orbit radius
  const orbitRadius = isMobile ? 120 : 160;

  return (
    <motion.div
      key="loading-intro-minimal"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.99,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07130a] text-white select-none overflow-hidden"
    >
      {/* Soft, calm ambient gradient background (easy on the eyes) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,rgba(7,19,10,0.95)_70%)] pointer-events-none" />

      {/* Subtle geometric dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Instant Skip button */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-30">
        <button
          onClick={onComplete}
          className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-200 flex items-center gap-1.5 backdrop-blur-md active:scale-95 cursor-pointer"
        >
          Skip
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      </div>

      {/* Calm Status Label */}
      <div className="absolute top-12 sm:top-16 z-20 h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === 'separate' && (
            <motion.p
              key="txt-separate"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="text-xs sm:text-sm font-medium text-neutral-400 tracking-wide"
            >
              6 different apps to run one coaching business
            </motion.p>
          )}

          {phase === 'merge' && (
            <motion.p
              key="txt-merge"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="text-xs sm:text-sm font-medium text-emerald-300/90 tracking-wide"
            >
              Merging everything into one...
            </motion.p>
          )}

          {phase === 'unified' && (
            <motion.p
              key="txt-unified"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide"
            >
              One unified operating system
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Center Stage Arena */}
      <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
        {/* Soft connecting guide circle */}
        <motion.div
          animate={
            phase === 'separate'
              ? { scale: 1, opacity: 0.2 }
              : phase === 'merge'
              ? { scale: 0.2, opacity: 0.5 }
              : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-dashed border-emerald-500/40 pointer-events-none"
        />

        {/* The 6 App Cards - Smoothly Glide & Snap into the Center */}
        {APPS.map((app, index) => {
          const rad = (app.angle * Math.PI) / 180;
          const targetX = Math.cos(rad) * orbitRadius;
          const targetY = Math.sin(rad) * orbitRadius;
          const Icon = app.icon;

          return (
            <motion.div
              key={app.id}
              className="absolute pointer-events-none"
              style={{ willChange: 'transform, opacity' }}
              initial={{
                x: 0,
                y: 0,
                scale: 0.4,
                opacity: 0,
              }}
              animate={
                phase === 'separate'
                  ? {
                      x: targetX,
                      y: targetY,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 140,
                        damping: 18,
                        mass: 0.8,
                        delay: index * 0.04,
                      },
                    }
                  : {
                      // Smooth magnetic glide into center
                      x: 0,
                      y: 0,
                      scale: 0.2,
                      opacity: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1], // Fluid magnetic curve
                        delay: (index % 3) * 0.02,
                      },
                    }
              }
            >
              <div className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#0d2315]/90 border border-emerald-500/25 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${app.color}18` }}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" style={{ color: app.color }} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-white leading-tight whitespace-nowrap">
                    {app.label}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-normal leading-tight whitespace-nowrap">
                    {app.sub}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Central Unified CoachOS Emblem Card */}
        <AnimatePresence>
          {phase === 'unified' && (
            <motion.div
              key="unified-card"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 22,
                mass: 0.8,
              }}
              className="flex flex-col items-center justify-center text-center z-20"
            >
              {/* Clean glowing frame */}
              <div className="relative mb-4">
                <div className="absolute -inset-1 bg-emerald-500/30 rounded-3xl blur-md"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-b from-[#103e22] to-[#082012] border border-emerald-400/40 flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.25)]">
                  {/* CoachOS Icon */}
                  <svg
                    viewBox="0 0 70 70"
                    className="w-12 h-12 sm:w-14 sm:h-14 text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="10" y="15" width="22" height="34" rx="4" fill="currentColor" />
                    <rect
                      x="36"
                      y="15"
                      width="24"
                      height="14"
                      rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 41 26 L 41 23 Q 41 20 44 20 L 55 20"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <rect
                      x="10"
                      y="53"
                      width="22"
                      height="14"
                      rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 15 63 L 15 60 Q 15 58 18 58 L 27 58"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path d="M 18 56 L 36 38 L 46 48 L 65 24 V 56 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Title & Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center gap-1.5 justify-center mb-1"
              >
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                  Coach<span className="text-emerald-400">OS</span>
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.3 }}
                className="text-xs sm:text-sm font-medium text-emerald-200/80 max-w-[240px] sm:max-w-xs leading-relaxed"
              >
                One system for your clients, programs, and payments.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Clean, subtle progress bar at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-1 bg-white/[0.08] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-400 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}
