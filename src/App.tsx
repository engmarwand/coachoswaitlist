import React, { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { 
  Heart,
  CheckCircle2, 
  Loader2,
  Edit3,
  ChevronDown, 
  ChevronUp, 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Zap, 
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Calendar,
  Search,
  Bell,
  Activity,
  CreditCard,
  MessageCircle,
  TrendingUp,
  Dumbbell,
  Target,
  CheckSquare,
  Check,
  Video,
  FileText,
  Clock,
  Database,
  Mail,
  Link2,
  Smartphone,
  Settings,
  Sparkles,
  ShieldCheck,
  Flame,
  Lock,
  Trophy,
  Play,
  Pause,
  Smile,
  Compass,
  Briefcase,
  Layers,
  Award,
  SlidersHorizontal,
  Eye,
  FileCheck,
  BarChart3,
  Command,
  CornerDownLeft,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { loadWhop } from "@whop/elements";
import { Checkout, CheckoutElement, WhopElements } from "@whop/elements-react";
import { LoadingIntro } from './components/LoadingIntro';
import { GlowingBorderButton } from './components/GlowingBorderButton';

const whopElements = loadWhop();

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled past 500px and not at bottom
      const scrolled = window.scrollY > 480;
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
      setShowMobileStickyCta(scrolled && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    setIsMenuOpen(false);
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-brand-900 font-sans selection:bg-brand-900 selection:text-white pb-16 md:pb-0">
      {/* Initial Combining Tools Loading Animation */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <LoadingIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          opacity: showIntro ? 0 : 1,
          scale: showIntro ? 0.985 : 1,
          filter: showIntro ? 'blur(6px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen flex flex-col"
      >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer py-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="h-7 sm:h-8 text-brand-900" />
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('problem')} className="text-sm font-semibold text-neutral-600 hover:text-brand-900 transition-colors">Problem</button>
              <button onClick={() => scrollToSection('solution')} className="text-sm font-semibold text-neutral-600 hover:text-brand-900 transition-colors">Features</button>
              <button onClick={() => scrollToSection('integrations')} className="text-sm font-semibold text-neutral-600 hover:text-brand-900 transition-colors">Integrations</button>
              <button onClick={() => scrollToSection('workflow')} className="text-sm font-semibold text-neutral-600 hover:text-brand-900 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('comparison')} className="text-sm font-semibold text-neutral-600 hover:text-brand-900 transition-colors">Comparison</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-semibold text-neutral-600 hover:text-brand-900 transition-colors">FAQ</button>

              <GlowingBorderButton 
                onClick={scrollToWaitlist}
                className="px-5 py-2.5 font-medium flex items-center gap-2 hover:scale-105 active:scale-95"
                glowSpeed={2.8}
              >
                Join Free Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-emerald-300" />
              </GlowingBorderButton>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={scrollToWaitlist}
                className="px-3 py-1.5 rounded-full bg-brand-900 text-white text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95"
              >
                <span>Free Waitlist</span>
                <ArrowRight className="w-3 h-3 text-emerald-400" />
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-neutral-700 hover:text-brand-900 hover:bg-neutral-100 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-white border-b border-neutral-200 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                <div className="grid grid-cols-2 gap-1 pb-3 border-b border-neutral-100">
                  <button 
                    onClick={() => scrollToSection('problem')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors"
                  >
                    The Problem
                  </button>
                  <button 
                    onClick={() => scrollToSection('solution')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors"
                  >
                    Custom OS
                  </button>
                  <button 
                    onClick={() => scrollToSection('integrations')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors"
                  >
                    Integrations
                  </button>
                  <button 
                    onClick={() => scrollToSection('workflow')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('use-cases')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors"
                  >
                    For Coaches
                  </button>
                  <button 
                    onClick={() => scrollToSection('comparison')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors"
                  >
                    Comparison
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-900 text-left transition-colors col-span-2"
                  >
                    Frequently Asked Questions
                  </button>
                </div>

                <div className="pt-3">
                  <GlowingBorderButton 
                    onClick={scrollToWaitlist}
                    rounded="xl"
                    className="w-full px-5 py-3.5 font-bold flex justify-center items-center gap-2 shadow-md text-base"
                    glowSpeed={2.8}
                  >
                    Join Free Waitlist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-emerald-300" />
                  </GlowingBorderButton>
                  <p className="text-center text-[11px] text-neutral-500 font-medium mt-2">
                    100% Free to apply • Optional founding cohort fast-track
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sticky Floating Quick-Action Bar */}
      <AnimatePresence>
        {showMobileStickyCta && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-3 inset-x-3 z-40 md:hidden"
          >
            <div className="bg-brand-950/95 backdrop-blur-lg border border-brand-800 text-white p-2.5 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
              <div className="min-w-0 pl-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">Free Waitlist Open</span>
                </div>
                <p className="text-xs font-bold text-neutral-200 truncate">Early Access & 40% Off</p>
              </div>

              <button
                onClick={scrollToWaitlist}
                className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-brand-950 px-4 py-2 rounded-xl text-xs font-black shrink-0 flex items-center gap-1.5 shadow-md transition-transform"
              >
                <span>Join Free</span>
                <ArrowRight className="w-3.5 h-3.5 font-bold" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-brand-50/20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-brand-200/50 text-brand-800 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm backdrop-blur-md hover:bg-white/90 transition-colors cursor-default max-w-full">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="truncate">100% Free Waitlist Open • Optional Founding Fast-Track</span>
              </div>
              
              <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-900 leading-[1.15] mb-4 sm:mb-6">
                The All-In-One Operating System for Independent Coaches.
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                For independent fitness, business, executive, and sports coaches. Streamline lead pipelines, active client management, payments, and follow-ups in one custom dashboard.
              </p>
              
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <GlowingBorderButton 
                  onClick={scrollToWaitlist}
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95"
                  glowSpeed={3.2}
                >
                  <span className="relative flex items-center justify-center gap-2.5">
                    Join Free Waitlist
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-emerald-300" />
                  </span>
                </GlowingBorderButton>
                
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-neutral-500 font-medium">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> 100% Free to apply</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> No credit card required</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> 40% Lifetime founding discount</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 sm:mt-16 lg:mt-24 max-w-5xl mx-auto"
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <motion.section 
          id="problem"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-white border-y border-neutral-200 overflow-hidden scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/70 text-red-800 text-xs font-bold mb-4 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  The Problem
                </div>
                <h2 id="problem-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-4 sm:mb-6 leading-tight">
                  The Hidden Admin Chaos of Running an Independent Coaching Business
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                  You're a great coach, but managing the business side feels chaotic. Leads are falling through the cracks and admin is eating your day.
                </p>
                <ul className="space-y-3.5 sm:space-y-4">
                  {[
                    "You're closing DMs manually and leads keep slipping through.",
                    "Your client info lives scattered across WhatsApp, Notes, Calendly, and payment links.",
                    "You don't know exactly who to follow up with today, so you message no one.",
                    "You're spending more time on admin tasks than actual coaching."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5 p-3 sm:p-0 rounded-xl bg-red-50/40 sm:bg-transparent border border-red-100/60 sm:border-0">
                      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 text-red-600 font-bold" />
                      </div>
                      <span className="text-sm sm:text-base lg:text-lg text-neutral-800 font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full"
              >
                <ProblemVisuals />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 3. Solution Section (Interactive) */}
        <motion.section 
          id="solution"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-brand-900 text-white scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/80 border border-brand-700 text-brand-200 text-xs font-bold mb-4 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                Custom Architecture
              </div>
              <h2 id="solution-heading" className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                A Private Coaching Operating System Engineered to Scale
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-neutral-300 leading-relaxed">
                CoachOS feels custom to your business. Everything you need to scale, without needing five different apps holding it together with duct tape.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <InteractiveSolution />
            </motion.div>
          </div>
        </motion.section>

        
        {/* 3.5 Custom Integration Section */}
        <motion.section 
          id="integrations"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-white border-b border-neutral-200 overflow-hidden relative scroll-mt-16"
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="order-2 lg:order-1 w-full"
              >
                <CustomBuiltVisual />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2 text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold mb-4 sm:mb-6 uppercase tracking-wider">
                  <Link2 className="w-3.5 h-3.5" />
                  Bespoke Integrations
                </div>
                <h2 id="integrations-heading" className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-brand-950 mb-4 sm:mb-6 leading-tight">
                  Custom Software Architecture Built Around <span className="text-brand-600 font-extrabold italic">Your Exact</span> Coaching Workflow
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                  Most software forces you to change how you work to fit their templates. CoachOS is different. When you join, we architect a private operating system around <strong>your exact tools, your pricing models, and your coaching style</strong>.
                </p>
                <ul className="space-y-3.5 sm:space-y-4">
                  <li className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl bg-neutral-50/70 sm:bg-transparent border border-neutral-100 sm:border-0">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-brand-950">Bring your own tools</p>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 leading-normal">Stripe, Calendly, Zoom, MyFitnessPal—if you use it, we connect it directly into your hub.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl bg-neutral-50/70 sm:bg-transparent border border-neutral-100 sm:border-0">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-brand-950">100% Whitelabeled for you</p>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 leading-normal">Your clients see your logo, your brand colors, and your custom domain. Never our branding.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl bg-neutral-50/70 sm:bg-transparent border border-neutral-100 sm:border-0">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-brand-950">Custom workflows</p>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 leading-normal">Need a unique check-in form? A specific milestone tracker? We build it into your OS.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 4. How it works */}
        <motion.section 
          id="workflow"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-neutral-50 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-10 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-brand-800 text-xs font-bold mb-4 uppercase tracking-wider shadow-2xs">
                <Layers className="w-3.5 h-3.5" />
                Streamlined Lifecycle
              </div>
              <h2 id="workflow-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-3 sm:mb-4 leading-tight">
                How CoachOS Automates Your Entire Client & Revenue Lifecycle
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">A simple, automated flow to run and scale your coaching operations.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-neutral-200 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Leads auto-capture",
                  desc: "Leads from your IG, site, or forms funnel directly into CoachOS without manual data entry.",
                  icon: <Users className="w-6 h-6 text-brand-900" />
                },
                {
                  step: "02",
                  title: "Organize & Follow up",
                  desc: "CoachOS organizes them in a clear pipeline and tells you exactly who to contact today.",
                  icon: <MessageCircle className="w-6 h-6 text-brand-900" />
                },
                {
                  step: "03",
                  title: "Coach & Scale",
                  desc: "Manage active clients, run sessions, track payments, and deliver programs from one dashboard.",
                  icon: <TrendingUp className="w-6 h-6 text-brand-900" />
                }
              ].map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="relative z-10 flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white md:bg-transparent border md:border-0 border-neutral-200/80 shadow-xs md:shadow-none"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-neutral-50 md:bg-white rounded-2xl shadow-md border border-neutral-200 flex items-center justify-center mb-4 sm:mb-6 relative group cursor-default">
                    <div className="absolute inset-0 bg-brand-900 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                    <div className="relative z-10 text-brand-900 group-hover:text-white transition-colors duration-300 flex flex-col items-center gap-1">
                       {step.icon}
                       <span className="text-xs sm:text-sm font-bold opacity-60 group-hover:opacity-100">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-900 mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <ComparisonTable />

        {/* 5. For who / use cases */}
        <motion.section 
          id="use-cases"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-white border-t border-neutral-200 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold mb-4 sm:mb-6 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  Tailored For You
                </div>
                <h2 id="use-cases-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-4 sm:mb-6 leading-tight">
                  Tailored Operating Systems for Fitness, Business, Life, & Sports Coaches
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                  Whether you coach 1:1, in small groups, or scale online programs, CoachOS adapts to your specific workflow.
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Fitness coaches managing online clients and form checks.",
                    "Business coaches juggling strategy calls and action items.",
                    "Coaches who want a professional system without 10 subscriptions."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-neutral-50 p-3.5 sm:p-4 rounded-xl border border-neutral-100 hover:border-neutral-300 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-900 flex-shrink-0" />
                      <span className="text-brand-800 font-medium text-xs sm:text-sm lg:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-brand-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl transform md:rotate-1 md:hover:rotate-0 transition-transform duration-500 text-left"
              >
                <blockquote className="text-lg sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-6 sm:mb-8">
                  "CoachOS is NOT a marketplace. It is your private operating system. You bring the clients; we make sure none get lost and you close more of them."
                </blockquote>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-800 rounded-full flex items-center justify-center border border-brand-700 shrink-0">
                    <Logo className="h-4 sm:h-5 text-brand-50" inverted />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">The CoachOS Team</div>
                    <div className="text-neutral-400 text-xs sm:text-sm">Founders</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 6. Founding Cohort & Waitlist Section */}
        <motion.section 
          id="waitlist" 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-brand-950 text-white scroll-mt-16 relative overflow-hidden border-t border-brand-900"
        >
          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-brand-700/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Urgency & Clarity Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-[11px] sm:text-xs font-bold mb-4 sm:mb-6 tracking-widest uppercase shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              100% FREE APPLICATION & WAITLIST
            </motion.div>

            {/* Clear Primary Headline */}
            <motion.h2 
              id="waitlist-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight"
            >
              Apply for the Founding Cohort of Independent Coaches
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-sm sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal"
            >
              Join the waitlist for free to get early access and platform updates. Or, choose to fast-track your setup and guarantee your build slot in our founding cohort with 40% off for life.
            </motion.p>

            {/* Reassurance Feature Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 text-xs sm:text-sm font-semibold text-neutral-300"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-emerald-300">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                100% Free Waitlist ($0)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-neutral-200">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                No Credit Card Needed to Apply
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-amber-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Optional Founding Fast-Track
              </span>
            </motion.div>

            {/* Waitlist Multi-step Form */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full"
            >
              <WaitlistForm />
            </motion.div>

            {/* Sub-text note */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                Standard free waitlist & optional founding cohort reservation • Built for independent coaches
              </p>
            </div>
          </div>
        </motion.section>

        {/* 8. FAQ */}
        <motion.section 
          id="faq"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-neutral-50 border-t border-neutral-200 scroll-mt-16"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-8 sm:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-brand-800 text-xs font-bold mb-3 uppercase tracking-wider shadow-2xs">
                Answers & Insights
              </div>
              <h2 
                id="faq-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-900 leading-tight"
              >
                Frequently Asked Questions About CoachOS Coaching Software
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 sm:space-y-4"
            >
              <FAQItem 
                question="Is it completely free to join the waitlist?" 
                answer="Yes! Submitting your application and joining the waitlist is 100% free with zero payment or credit card required. You'll be placed in line for general release updates and standard rolling invites. If you'd like to fast-track your setup and guarantee a slot in our hands-on founding cohort (with a 40% lifetime discount), you have the optional choice to place a $100 reservation deposit that is fully credited toward your final build."
              />
              <FAQItem 
                question="Is CoachOS a marketplace?" 
                answer="No. CoachOS is your private operating system. You bring your clients; we give you the system to manage them. We don't take a cut of your clients or list you on a directory."
              />
              <FAQItem 
                question="What does the founding reservation deposit do?" 
                answer="It guarantees your priority position in the founding review queue and is credited toward your CoachOS build if we agree to move forward after the review call. The reservation deposit is non-refundable."
              />
              <FAQItem 
                question="Do I need to migrate all my data at once?" 
                answer="No. You can start fresh with new leads and clients, and import your historical data or active roster over time as it makes sense for your workflow."
              />
              <FAQItem 
                question="Is this for new or established coaches?" 
                answer="Both. New coaches get a clean, professional system from day one. Established coaches get their clarity and time back by consolidating their tech stack."
              />
              <FAQItem 
                question="What about my existing tools?" 
                answer="CoachOS replaces the need for multiple apps by bringing leads, clients, sessions, payments, and follow-up into one centralized place. You can cancel those extra subscriptions."
              />
              <FAQItem 
                question="When does it launch?" 
                answer="We're onboarding founding coaches first in batches to ensure a great experience. Join the waitlist to secure your spot in line and get early access updates."
              />
            </motion.div>
          </div>
        </motion.section>

        {/* 9. Final CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-14 sm:py-20 lg:py-24 bg-white border-t border-neutral-200 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 via-brand-900 to-neutral-200"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              id="final-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-brand-900 mb-4 sm:mb-6 leading-tight"
            >
              Stop Juggling Disconnected Apps. Run Your Entire Coaching Business from One Private OS.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-6 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4"
            >
              <GlowingBorderButton 
                onClick={scrollToWaitlist}
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-base sm:text-xl font-semibold flex items-center justify-center gap-2.5 hover:-translate-y-1 active:scale-95"
                glowSpeed={3}
              >
                <span className="relative flex items-center justify-center gap-2.5">
                  Join Free Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-emerald-300" />
                </span>
              </GlowingBorderButton>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-neutral-500 font-medium">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> 100% Free application</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> No payment info required</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-600" /> Built for independent coaches</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Logo className="h-8 text-brand-900" />
          </div>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} CoachOS. All rights reserved.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setShowIntro(true);
            }}
            className="mt-3 text-xs text-neutral-400 hover:text-brand-900 transition-colors inline-flex items-center gap-1.5 underline decoration-neutral-300 underline-offset-4"
          >
            <Sparkles className="w-3 h-3 text-brand-600" />
            Replay intro animation
          </button>
        </div>
      </footer>
      </motion.div>
    </div>
  );
}

// Subcomponents


const revenueData = [
  { name: 'Apr', value: 4200 },
  { name: 'May', value: 5100 },
  { name: 'Jun', value: 4800 },
  { name: 'Jul', value: 6200 },
  { name: 'Aug', value: 7500 },
  { name: 'Sep', value: 8450 },
];

const executiveRevenueData = [
  { name: 'Q1', value: 11200 },
  { name: 'Q2', value: 14400 },
  { name: 'Q3', value: 16800 },
  { name: 'Q4', value: 18500 },
];

const wellnessMoodData = [
  { name: 'Mon', value: 7.8 },
  { name: 'Tue', value: 8.2 },
  { name: 'Wed', value: 8.0 },
  { name: 'Thu', value: 8.7 },
  { name: 'Fri', value: 8.9 },
  { name: 'Sat', value: 9.2 },
];

const sportsLoadData = [
  { name: 'W1', value: 78 },
  { name: 'W2', value: 85 },
  { name: 'W3', value: 91 },
  { name: 'W4', value: 88 },
  { name: 'W5', value: 94 },
];

const DASHBOARD_VARIANTS = [
  {
    id: 'fitness',
    name: 'Fitness & Health OS',
    shortName: 'Fitness & Health',
    tabIcon: Dumbbell,
    tagline: 'Athlete Periodization, Macro Compliance & Form Check Video Queue',
    provesTitle: 'Replaces WhatsApp, TrueCoach, and Spreadsheets',
    provesOutcome: 'Automates athlete form check video reviews, macro compliance tracking, and 0% fee Stripe billing in one branded athlete portal.',
    provesProofBadges: [
      '0% Platform Payment Fees',
      '4 Pending Video Form Checks',
      '88% Daily Athlete Check-In Rate'
    ],
    theme: {
      sidebar: 'bg-[#042116] border-r border-emerald-900/40 text-emerald-100',
      activeMenu: 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40',
      primary: 'text-emerald-600',
      accentBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200/60',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      topbarBg: 'bg-white/90 border-emerald-900/10',
      cardBg: 'bg-white border-neutral-200/70',
      chartColor: '#10b981',
      glow: 'shadow-emerald-500/10'
    },
    headerStatus: '⚡ Morning Roster Readiness: 94%',
    menu: [
      { icon: LayoutDashboard, label: 'Performance Hub', active: true },
      { icon: Users, label: 'Athletes (32)' },
      { icon: Target, label: 'Workouts & Blocks' },
      { icon: Database, label: 'Nutrition & Macros' },
      { icon: Video, label: 'Form Video Queue', badge: '4' },
      { icon: MessageCircle, label: 'Athlete Comms', badge: '2' },
    ],
    topCards: [
      {
        title: 'Athlete Check-In Rate',
        value: '28 / 32',
        sub: '88% completed today',
        badge: '+6% vs last week',
        badgeType: 'positive',
        type: 'progress',
        progress: 88
      },
      {
        title: 'Video Form Queue',
        value: '4 Pending',
        sub: 'Avg review time: 14 mins',
        badge: 'Priority reviews',
        badgeType: 'neutral',
        type: 'metric'
      },
      {
        title: 'Macro Adherence',
        value: '96.2%',
        sub: 'Protein targets hit',
        badge: 'Top compliance',
        badgeType: 'positive',
        type: 'metric'
      }
    ],
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'MyFitnessPal', color: '#0066EE', icon: Database },
      { name: 'TrueCoach', color: '#10B981', icon: Activity },
      { name: 'Trainerize', color: '#FF4500', icon: Dumbbell },
      { name: 'WHOOP', color: '#000000', icon: Heart },
    ],
    leftSectionTitle: 'Active Athlete Training Blocks',
    leftSectionIcon: Dumbbell,
    leftItems: [
      {
        title: "Alex M. — Hypertrophy Phase 2 (Week 4)",
        meta: "Target: Upper Body Hypertrophy • RPE 8.5",
        status: "Active Block",
        statusColor: "bg-emerald-100 text-emerald-800"
      },
      {
        title: "Sarah K. — Deload & Mobility Protocol",
        meta: "Target: Hip capsule recovery & central fatigue",
        status: "In Progress",
        statusColor: "bg-blue-100 text-blue-800"
      },
      {
        title: "Marcus T. — Max Strength Peaking (Squat 425lb)",
        meta: "Target: 1RM Prep & Velocity Tracking",
        status: "Peak Phase",
        statusColor: "bg-purple-100 text-purple-800"
      }
    ],
    rightSectionTitle: 'Form Check & Video Queue',
    rightSectionIcon: Video,
    rightItems: [
      {
        author: 'Alex Morgan',
        time: '6m ago',
        action: 'Uploaded 3 Form Check Videos',
        detail: 'Back Squat (315x5) • "Felt slight knee valgus on rep 4"',
        icon: Play,
        iconBg: 'bg-emerald-100 text-emerald-700'
      },
      {
        author: 'Jessica Lee',
        time: '34m ago',
        action: 'Logged Daily Check-in & Weight',
        detail: '138.4 lbs (-0.6 lbs) • Macros 100% compliant today',
        icon: CheckCircle2,
        iconBg: 'bg-blue-100 text-blue-700'
      }
    ]
  },
  {
    id: 'business',
    name: 'Business & Executive OS',
    shortName: 'Business & Exec',
    tabIcon: Briefcase,
    tagline: 'High-Ticket Retainers, Advisory Milestones & ARR Pipeline',
    provesTitle: 'Replaces Scattered DMs, Calendly, and Invoicing Tools',
    provesOutcome: 'Consolidates high-ticket retainer contracts, advisory deliverables, and $18,500/mo ARR tracking with zero manual spreadsheet copying.',
    provesProofBadges: [
      '100% Retainer Retention',
      '$18,500/mo Predictable ARR',
      'DocuSign Contracts Auto-Executed'
    ],
    theme: {
      sidebar: 'bg-[#0b1120] border-r border-slate-800 text-slate-200',
      activeMenu: 'bg-blue-600 text-white shadow-md shadow-blue-950/40',
      primary: 'text-blue-600',
      accentBg: 'bg-blue-500/10 text-blue-700 border-blue-200/60',
      badgeBg: 'bg-blue-100 text-blue-800',
      topbarBg: 'bg-white/90 border-slate-900/10',
      cardBg: 'bg-white border-neutral-200/70',
      chartColor: '#2563eb',
      glow: 'shadow-blue-500/10'
    },
    headerStatus: '💼 Q3 Retainer Retentions: 100% LTV',
    menu: [
      { icon: LayoutDashboard, label: 'Command Center', active: true },
      { icon: Users, label: 'Retainers (14)' },
      { icon: FileText, label: 'Strategy Vault' },
      { icon: Calendar, label: 'Advisory Calls' },
      { icon: CreditCard, label: 'Billing & Contracts', badge: '$18.5k' },
      { icon: MessageCircle, label: 'Slack Connect', badge: '3' },
    ],
    topCards: [
      {
        title: 'Monthly Retainer ARR',
        value: '$18,500/mo',
        sub: '+$3,200 vs last quarter',
        badge: '+18.4% YoY',
        badgeType: 'positive',
        type: 'chart',
        chartData: executiveRevenueData
      },
      {
        title: 'Active Retainers',
        value: '14 Founders',
        sub: '8 Advisory / 6 Mastermind',
        badge: 'Zero churn',
        badgeType: 'positive',
        type: 'metric'
      },
      {
        title: 'Open Proposals',
        value: '$45,000',
        sub: '3 contracts in final review',
        badge: '85% win rate',
        badgeType: 'neutral',
        type: 'metric'
      }
    ],
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'Zoom VIP', color: '#2D8CFF', icon: Video },
      { name: 'Slack Connect', color: '#E01E5A', icon: MessageCircle },
      { name: 'DocuSign', color: '#002B49', icon: FileCheck },
      { name: 'Notion', color: '#000000', icon: FileText },
    ],
    leftSectionTitle: 'Executive Advisory Milestones',
    leftSectionIcon: Target,
    leftItems: [
      {
        title: "TechFlow Inc. — Series B Board Pitch Review",
        meta: "Advisory Deliverable: Financial model audit & GTM slides",
        status: "Due Friday",
        statusColor: "bg-blue-100 text-blue-800"
      },
      {
        title: "Apex Logistics — Fractional COO Strategy Sprint",
        meta: "Advisory Deliverable: Executive hiring framework",
        status: "In Progress",
        statusColor: "bg-amber-100 text-amber-800"
      },
      {
        title: "VentureScale — $50k Retainer Renewal",
        meta: "Contract signed for Q4 advisory expansion",
        status: "Completed",
        statusColor: "bg-emerald-100 text-emerald-800"
      }
    ],
    rightSectionTitle: 'Advisory Deliverables & Signatures',
    rightSectionIcon: FileCheck,
    rightItems: [
      {
        author: 'David Reynolds (CEO, TechFlow)',
        time: '12m ago',
        action: 'Signed Master Coaching Agreement',
        detail: '$3,500/mo 6-Month Retainer executed via DocuSign',
        icon: FileCheck,
        iconBg: 'bg-emerald-100 text-emerald-700'
      },
      {
        author: 'Sarah Jenkins (Founder)',
        time: '1h ago',
        action: 'Scheduled Quarterly Strategy Review',
        detail: 'Tuesday at 2:00 PM EST • Zoom link auto-generated',
        icon: Calendar,
        iconBg: 'bg-blue-100 text-blue-700'
      }
    ]
  },
  {
    id: 'life',
    name: 'Life & Mindset OS',
    shortName: 'Life & Mindset',
    tabIcon: Heart,
    tagline: 'Daily Reflection Journals, Habit Streaks & Breakthrough Sessions',
    provesTitle: 'Replaces Voice Memos, Notion, and Email Threads',
    provesOutcome: 'Delivers a private client sanctuary with weekly guided reflection audio prompts, 14-day habit streaks, and confidential session logs.',
    provesProofBadges: [
      '90% Prompt Compliance',
      '14 Active Habit Streaks',
      'Confidential Voice Vault'
    ],
    theme: {
      sidebar: 'bg-[#180a29] border-r border-purple-950 text-purple-100',
      activeMenu: 'bg-purple-600 text-white shadow-md shadow-purple-950/40',
      primary: 'text-purple-600',
      accentBg: 'bg-purple-500/10 text-purple-700 border-purple-200/60',
      badgeBg: 'bg-purple-100 text-purple-800',
      topbarBg: 'bg-white/90 border-purple-900/10',
      cardBg: 'bg-white border-neutral-200/70',
      chartColor: '#9333ea',
      glow: 'shadow-purple-500/10'
    },
    headerStatus: '🌿 Cohort State: Grounded & Inspired',
    menu: [
      { icon: LayoutDashboard, label: 'Sanctuary Overview', active: true },
      { icon: Users, label: 'Client Journeys (21)' },
      { icon: Heart, label: 'Habit Streaks' },
      { icon: Calendar, label: 'Breakthrough Sessions' },
      { icon: MessageSquare, label: 'Reflection Prompts', badge: '5' },
      { icon: Sparkles, label: 'Transformation Wins' },
    ],
    topCards: [
      {
        title: 'Cohort Wellness Index',
        value: '8.9 / 10',
        sub: '+0.6 avg boost this week',
        badge: 'High energy',
        badgeType: 'positive',
        type: 'chart',
        chartData: wellnessMoodData
      },
      {
        title: 'Journals Submitted',
        value: '19 / 21',
        sub: '90% completed reflection prompt',
        badge: 'Engaged',
        badgeType: 'positive',
        type: 'progress',
        progress: 90
      },
      {
        title: '7+ Day Habit Streaks',
        value: '14 Clients',
        sub: 'Daily meditation & journaling',
        badge: 'Streak record',
        badgeType: 'positive',
        type: 'metric'
      }
    ],
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'Calendly', color: '#006BFF', icon: Calendar },
      { name: 'Notion Sanctuary', color: '#000000', icon: FileText },
      { name: 'Typeform', color: '#262627', icon: MessageSquare },
      { name: 'Loom', color: '#625DF5', icon: Video },
    ],
    leftSectionTitle: 'Weekly Transformation Prompts',
    leftSectionIcon: Sparkles,
    leftItems: [
      {
        title: "Week 4 Prompt: 'Overcoming Imposter Mindset in High-Stakes Situations'",
        meta: "Delivered to 21 clients • 19 audio reflection submissions",
        status: "Live Prompt",
        statusColor: "bg-purple-100 text-purple-800"
      },
      {
        title: "Anna's Breakthrough Journal: Boundary Setting with Work",
        meta: "Coach review note sent via personalized voice message",
        status: "Reviewed",
        statusColor: "bg-emerald-100 text-emerald-800"
      },
      {
        title: "Group Meditation & Intention Circle",
        meta: "Thursday at 7:00 PM • 16 RSVPs confirmed",
        status: "Upcoming",
        statusColor: "bg-amber-100 text-amber-800"
      }
    ],
    rightSectionTitle: 'Live Reflection Stream',
    rightSectionIcon: Heart,
    rightItems: [
      {
        author: 'Emma Watson',
        time: '8m ago',
        action: 'Submitted Weekly Voice Journal',
        detail: '"Today’s breakthrough session gave me so much peace around my career pivot."',
        icon: Smile,
        iconBg: 'bg-purple-100 text-purple-700'
      },
      {
        author: 'Michael Torres',
        time: '45m ago',
        action: 'Completed 14-Day Mindfulness Streak',
        detail: 'Logged daily morning gratitude & breathwork habit',
        icon: Trophy,
        iconBg: 'bg-amber-100 text-amber-700'
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports Performance OS',
    shortName: 'Sports Performance',
    tabIcon: Trophy,
    tagline: 'Biomechanical Film Room, PR Telemetry & Load Readiness',
    provesTitle: 'Replaces Loose Spreadsheets, Clipboards, and Hudl Emails',
    provesOutcome: 'Unifies biomechanical game film review, combine velocity PR telemetry, and roster readiness for 45 collegiate & pro athletes.',
    provesProofBadges: [
      '7 Academy PRs Broken',
      '34.2" Vertical Telemetry',
      '94% Squad Load Readiness'
    ],
    theme: {
      sidebar: 'bg-[#12100e] border-r border-orange-950 text-orange-100',
      activeMenu: 'bg-orange-600 text-white shadow-md shadow-orange-950/40',
      primary: 'text-orange-600',
      accentBg: 'bg-orange-500/10 text-orange-700 border-orange-200/60',
      badgeBg: 'bg-orange-100 text-orange-800',
      topbarBg: 'bg-white/90 border-orange-900/10',
      cardBg: 'bg-white border-neutral-200/70',
      chartColor: '#ea580c',
      glow: 'shadow-orange-500/10'
    },
    headerStatus: '⚡ Game Week 6 • Squad Load: Peak Output',
    menu: [
      { icon: LayoutDashboard, label: 'Locker Room Command', active: true },
      { icon: Users, label: 'Roster (45)' },
      { icon: Video, label: 'Hudl Film Room', badge: '3' },
      { icon: Activity, label: 'Velocity & Telemetry' },
      { icon: Trophy, label: 'PR Leaderboard', badge: '7' },
      { icon: MessageCircle, label: 'Squad Comms' },
    ],
    topCards: [
      {
        title: 'Squad Load Readiness',
        value: '94% Optimal',
        sub: 'Across 45 active athletes',
        badge: 'Game ready',
        badgeType: 'positive',
        type: 'chart',
        chartData: sportsLoadData
      },
      {
        title: 'Weekly PRs Broken',
        value: '7 New PRs',
        sub: 'Squat, Vert, 40-yd dash',
        badge: '+3 vs last week',
        badgeType: 'positive',
        type: 'metric'
      },
      {
        title: 'Hudl Film Queue',
        value: '3 Clips Pending',
        sub: 'Biomechanical markup needed',
        badge: 'Priority',
        badgeType: 'neutral',
        type: 'metric'
      }
    ],
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'Hudl', color: '#FF5A00', icon: Video },
      { name: 'TrainHeroic', color: '#2563eb', icon: Target },
      { name: 'Catapult GPS', color: '#000000', icon: Activity },
      { name: 'Vald ForceDecks', color: '#10B981', icon: Layers },
    ],
    leftSectionTitle: 'Tactical Film Room & Combine Telemetry',
    leftSectionIcon: Video,
    leftItems: [
      {
        title: "John Davis — 40-Yard Dash Sprint Mechanics Analysis",
        meta: "Hudl Breakdown: Stride frequency + ground contact angle",
        status: "Clip Ready",
        statusColor: "bg-orange-100 text-orange-800"
      },
      {
        title: "Tyler Bennett — 405 lb Back Squat PR (New Academy Record)",
        meta: "Velocity telemetry verified: 0.42 m/s concentric speed",
        status: "Record Broken",
        statusColor: "bg-emerald-100 text-emerald-800"
      },
      {
        title: "Varsity Travel Squad — Pre-Game Hydration & Nutrition",
        meta: "Collegiate protocol delivered to 24 travel athletes",
        status: "Protocol Active",
        statusColor: "bg-blue-100 text-blue-800"
      }
    ],
    rightSectionTitle: 'Recent Academy Activity',
    rightSectionIcon: Trophy,
    rightItems: [
      {
        author: 'Coach Marcus Smith',
        time: 'Just now',
        action: 'Added Tactical Game Film',
        detail: 'Uploaded 4th Quarter defensive film to locker room',
        icon: Video,
        iconBg: 'bg-orange-100 text-orange-700'
      },
      {
        author: 'Tyler Bennett (Safety)',
        time: '18m ago',
        action: 'Logged ForceDeck Jump Telemetry',
        detail: '34.2 inch Vertical Leap (+1.4 in this training cycle)',
        icon: Trophy,
        iconBg: 'bg-emerald-100 text-emerald-700'
      }
    ]
  }
];

function Sparkline({ data, color }: { data: { value: number }[]; color: string }) {
  if (!data || data.length < 2) return null;
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const w = 220;
  const h = 40;
  const pad = 4;
  
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * (w - pad * 2) + pad;
    const y = h - ((v - min) / range) * (h - pad * 2) - pad;
    return { x, y, v };
  });

  const polylineStr = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaStr = `${points[0].x},${h} ${polylineStr} ${points[points.length - 1].x},${h}`;
  const lastPoint = points[points.length - 1];
  const gradId = `spark-grad-${color.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className="relative w-full h-10 overflow-hidden">
      <svg 
        viewBox={`0 0 ${w} ${h}`} 
        className="w-full h-full overflow-visible" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <polygon 
          fill={`url(#${gradId})`} 
          points={areaStr} 
        />
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={polylineStr}
        />
        <circle 
          cx={lastPoint.x} 
          cy={lastPoint.y} 
          r="3.5" 
          fill="#ffffff" 
          stroke={color} 
          strokeWidth="2.5" 
        />
      </svg>
    </div>
  );
}

function HeroDashboard() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle between dashboard variants every 5.5 seconds unless paused or hovered
  useEffect(() => {
    if (!isAutoCycling || isHovered) return;
    const timer = setInterval(() => {
      setVariantIndex((prev) => (prev + 1) % DASHBOARD_VARIANTS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoCycling, isHovered]);

  const handleSelectVariant = (index: number) => {
    setVariantIndex(index);
  };

  const variant = DASHBOARD_VARIANTS[variantIndex];

  return (
    <div 
      className="flex flex-col gap-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Tabs & Auto-Cycle Controller */}
      <div className="flex flex-col items-center gap-3 z-20 w-full max-w-full">
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
                {isActive && isAutoCycling && !isHovered && (
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
                <span className="text-[11px] font-bold hidden sm:inline">Auto-Cycle: On</span>
                <span className="text-[11px] font-bold sm:hidden">Auto</span>
                <Pause className="w-3 h-3 text-emerald-700 ml-0.5" />
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
                <span className="text-[11px] font-bold hidden sm:inline">Paused</span>
                <span className="text-[11px] font-bold sm:hidden">Play</span>
                <Play className="w-3 h-3 text-neutral-700 ml-0.5 fill-neutral-700" />
              </>
            )}
          </button>
        </div>

        {/* Prominent "What This Proves & Solves" Clarity Banner */}
        <div className="w-full bg-white rounded-2xl border border-neutral-200/90 p-3.5 sm:p-5 shadow-xs text-left transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-3.5">
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-950 text-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  What CoachOS Proves
                </span>
                <span className="text-xs font-bold text-neutral-400">
                  • {variant.name}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-brand-950 tracking-tight">
                {variant.provesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {variant.provesOutcome}
              </p>
            </div>

            {/* 3 Concrete Proof Badges */}
            <div className="flex flex-wrap lg:flex-col gap-1.5 shrink-0 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-2.5 lg:pt-0 lg:pl-5">
              {variant.provesProofBadges.map((badge, bIdx) => (
                <div key={bIdx} className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-neutral-800 bg-neutral-50 px-2.5 py-1 rounded-lg border border-neutral-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main OS Mockup Window */}
      <div className="relative">
        <div className="bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-neutral-300/80 overflow-hidden flex flex-col relative text-left">
          
          {/* macOS Top Window Bar */}
          <div className="h-10 bg-neutral-950 border-b border-white/10 px-3 sm:px-4 flex items-center justify-between text-neutral-400 select-none z-30 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block opacity-90" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block opacity-90" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block opacity-90" />
              </div>
              <span className="inline-flex items-center gap-1.5 ml-2 sm:ml-3 text-[10px] sm:text-[11px] font-mono text-neutral-300 bg-white/5 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/10 truncate max-w-[170px] sm:max-w-none">
                <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                app.coachos.io/{variant.id}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                <RefreshCw className={`w-3 h-3 ${isAutoCycling && !isHovered ? 'animate-spin text-emerald-400' : 'text-neutral-500'}`} style={{ animationDuration: '6s' }} />
                <span>Auto-Cycling OS</span>
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>0% Fees • Live Sync</span>
              </div>
            </div>
          </div>

          {/* Inner Workspace: Sidebar (Desktop) / Subnav (Mobile) + Viewport */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative min-h-[520px]">
            
            {/* Desktop Left Sidebar (Non-interactive display) */}
            <div className={`hidden md:flex w-56 flex-col p-4 shadow-xl z-10 relative shrink-0 ${variant.theme.sidebar}`}>
              <div className="flex items-center mb-6 mt-1 px-2 relative z-10">
                <Logo className="h-6 text-white" inverted />
              </div>

              <div className="space-y-1 flex-1 relative z-10">
                {variant.menu.map((item, i) => {
                  const isSelected = i === 0;
                  return (
                    <div 
                      key={i}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left ${
                        isSelected 
                          ? `${variant.theme.activeMenu} ring-1 ring-white/25 shadow-xs font-semibold` 
                          : 'text-neutral-300 opacity-80'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'opacity-80'}`} />
                      <span className="text-xs tracking-tight truncate">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.2 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2.5 px-2">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                  ME
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-none">Your Coaching OS</p>
                  <p className="text-[10px] text-neutral-400 mt-0.5">100% Whitelabeled</p>
                </div>
              </div>
            </div>

            {/* Mobile Sub-Navigation Bar */}
            <div className={`flex md:hidden items-center gap-1 p-2 border-b overflow-x-auto scrollbar-none z-10 ${variant.theme.sidebar}`}>
              {variant.menu.map((item, i) => {
                const isSelected = i === 0;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs whitespace-nowrap shrink-0 ${
                      isSelected 
                        ? `${variant.theme.activeMenu} font-bold text-white shadow-xs` 
                        : 'text-neutral-300 opacity-80'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.label.split(' ')[0]}</span>
                    {item.badge && (
                      <span className="bg-white/25 text-white text-[9px] px-1 py-0.2 rounded font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Main OS View Area with Butter-Smooth Variant Transition */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden text-left relative z-0">
              
              {/* Topbar inside OS View */}
              <div className={`h-12 sm:h-13 border-b flex items-center justify-between px-3.5 sm:px-5 sticky top-0 z-20 shrink-0 ${variant.theme.topbarBg}`}>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-neutral-700 bg-neutral-100 px-2.5 py-0.8 rounded-full border border-neutral-200/60 truncate">
                    {variant.headerStatus}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 ml-auto shrink-0">
                  <div className="hidden sm:flex items-center gap-2 text-neutral-400 bg-neutral-100/90 px-2.5 py-1.5 rounded-lg w-52 border border-neutral-200/60 text-xs">
                    <Search className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate">Search client telemetry...</span>
                    <kbd className="ml-auto text-[9px] font-mono bg-white px-1.5 py-0.2 rounded border border-neutral-300 text-neutral-500">⌘K</kbd>
                  </div>
                  <div className="relative p-1.5 text-neutral-500">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 border border-white"></span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content Body with Silky Fade Animation on Auto-Cycle */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={variant.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="p-3.5 sm:p-5 overflow-y-auto bg-neutral-50/60 h-full flex-1 space-y-4"
                >
                  
                  {/* 3 Metric Cards with Pure CSS Hover */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                    {variant.topCards.map((card, i) => (
                      <div 
                        key={i}
                        className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-150 flex flex-col justify-between bg-white hover:border-neutral-300 hover:shadow-xs ${variant.theme.cardBg}`}
                      >
                        <div className="flex items-start justify-between mb-1.5">
                          <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider">{card.title}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${variant.theme.badgeBg}`}>
                            {card.badge}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span className="text-xl sm:text-2xl font-extrabold text-brand-950 tracking-tight">{card.value}</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-medium">{card.sub}</p>

                        {/* Progress bar type */}
                        {card.type === 'progress' && card.progress && (
                          <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2.5 p-0.2 border border-neutral-200/50">
                            <div 
                              style={{ width: `${card.progress}%` }}
                              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                            />
                          </div>
                        )}

                        {/* Chart preview type with vector Sparkline */}
                        {card.type === 'chart' && card.chartData && (
                          <div className="h-9 w-full mt-1.5 -ml-1">
                            <Sparkline data={card.chartData} color={variant.theme.chartColor} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Connected Tools Bar */}
                  <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/80 p-3 sm:p-3.5 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                        <Link2 className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                        Integrated Client Ecosystem
                      </h4>
                      <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Webhooks
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {variant.tools.map((tool, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-neutral-200/70 bg-neutral-50 text-xs"
                        >
                          <div className="w-4 h-4 rounded flex items-center justify-center text-white shrink-0" style={{ backgroundColor: tool.color }}>
                            <tool.icon className="w-2.5 h-2.5" />
                          </div>
                          <span className="font-semibold text-neutral-700">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Split Main Content Area */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
                    
                    {/* Left Section: Core Deliverables */}
                    <div className="lg:col-span-7 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/80 p-3.5 sm:p-4 shadow-2xs">
                      <div className="flex items-center justify-between mb-2.5">
                        <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                          <variant.leftSectionIcon className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                          {variant.leftSectionTitle}
                        </h4>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200/60">
                          Active Sync
                        </span>
                      </div>

                      <div className="space-y-2">
                        {variant.leftItems.map((item, i) => (
                          <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-neutral-50/80 border border-neutral-100 hover:border-neutral-200 transition-colors text-left flex items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-bold text-brand-950">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-neutral-500 mt-0.5 truncate">{item.meta}</p>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 ${item.statusColor}`}>
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Section: Real-time Activity Feed */}
                    <div className="lg:col-span-5 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/80 p-3.5 sm:p-4 shadow-2xs">
                      <div className="flex items-center justify-between mb-2.5">
                        <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                          <variant.rightSectionIcon className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                          {variant.rightSectionTitle}
                        </h4>
                        <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Telemetry
                        </span>
                      </div>

                      <div className="space-y-2">
                        {variant.rightItems.map((act, i) => (
                          <div key={i} className="p-2.5 sm:p-3 rounded-xl border border-neutral-100 bg-neutral-50/70 flex items-start gap-2.5">
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${act.iconBg}`}>
                              <act.icon className="w-3 h-3" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <p className="text-xs font-bold text-brand-950 truncate">{act.author}</p>
                                <span className="text-[10px] text-neutral-400 font-medium shrink-0">{act.time}</span>
                              </div>
                              <p className="text-[11px] font-semibold text-neutral-700 truncate">{act.action}</p>
                              <p className="text-[10px] text-neutral-500 truncate mt-0.5">{act.detail}</p>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 shrink-0 border border-neutral-200/60">
                              Synced
                            </span>
                          </div>
                        ))}
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

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-neutral-300 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-semibold text-brand-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0 ml-4 transition-transform" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 ml-4 transition-transform" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 pt-0 text-neutral-600 leading-relaxed text-left">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


function Logo({ className = "h-8", inverted = false }: { className?: string, inverted?: boolean }) {
  const textColor = inverted ? "#134e2a" : "#ffffff";
  return (
    <svg viewBox="0 0 250 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <rect x="10" y="15" width="22" height="34" rx="4" />
        <rect x="36" y="15" width="24" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 41 26 L 41 23 Q 41 20 44 20 L 55 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="10" y="53" width="22" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 15 63 L 15 60 Q 15 58 18 58 L 27 58" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 18 56 L 36 38 L 46 48 L 65 24 V 56 Z" />
      </g>
      <text x="75" y="52" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">Coach</text>
      <rect x="195" y="28" width="34" height="24" rx="12" fill="currentColor" />
      <text x="200" y="45" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="800" fill={textColor} letterSpacing="0.05em">OS</text>
      <circle cx="236" cy="48" r="3.5" fill="currentColor" />
    </svg>
  );
}


function InteractiveSolution() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "sales",
      title: "Sales Pipeline",
      desc: "Track every lead from first DM to signed client.",
      icon: Target
    },
    {
      id: "priorities",
      title: "Daily Priorities",
      desc: "Know exactly what needs your attention today.",
      icon: CheckSquare
    },
    {
      id: "clients",
      title: "Client View",
      desc: "Everything about a client in one place.",
      icon: Users
    },
    {
      id: "portal",
      title: "Client Experience",
      badge: "100% Whitelabeled",
      desc: "A custom-branded web app your clients actually love using.",
      icon: Smartphone
    }
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(19,78,42,0.15)] border border-neutral-200/60 p-3.5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-12 backdrop-blur-sm">
      <div className="lg:w-1/3 flex flex-col gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 relative overflow-hidden group min-h-[48px] ${activeTab === idx ? 'bg-brand-900 shadow-xl text-white' : 'hover:bg-brand-50 text-brand-950'}`}
          >
            {activeTab === idx && <div className="absolute inset-0 bg-white/10"></div>}
            <div className="relative z-10 flex items-start gap-3.5 sm:gap-4">
              <div className={`mt-0.5 p-2 rounded-lg transition-colors shrink-0 ${activeTab === idx ? 'bg-brand-800 text-white' : 'bg-brand-100 text-brand-900 group-hover:bg-brand-200'}`}>
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <h4 className={`font-bold text-sm sm:text-base ${activeTab === idx ? 'text-white' : 'text-brand-950'}`}>{tab.title}</h4>
                  {tab.badge && (
                    <span className={`text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${activeTab === idx ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-brand-100 text-brand-800 border border-brand-200'}`}>
                      {tab.badge}
                    </span>
                  )}
                </div>
                <p className={`text-xs sm:text-sm leading-snug ${activeTab === idx ? 'text-brand-100' : 'text-neutral-500'}`}>{tab.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="lg:w-2/3 bg-neutral-50 rounded-xl sm:rounded-2xl border border-neutral-200/60 overflow-hidden flex items-center justify-center p-3.5 sm:p-6 lg:p-10 relative min-h-[360px] sm:min-h-[420px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="w-full relative z-10"
          >
            {activeTab === 0 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200/50 p-4 sm:p-6 glass">
                 <div className="flex justify-between items-center mb-4 sm:mb-6">
                   <h3 className="font-bold text-brand-950 text-sm sm:text-base">Active Leads</h3>
                   <span className="bg-brand-100 text-brand-800 px-2.5 py-1 rounded text-xs font-bold">12 Total</span>
                 </div>
                 <div className="space-y-2.5 sm:space-y-3">
                   <div className="flex justify-between items-center p-3 border border-neutral-100 rounded-lg hover:border-brand-200 transition-colors bg-white">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0">M</div>
                        <div>
                          <p className="font-bold text-brand-900 text-xs sm:text-sm">Marcus Johnson</p>
                          <p className="text-[11px] sm:text-xs text-neutral-500">Instagram DM</p>
                        </div>
                      </div>
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[11px] sm:text-xs font-bold shrink-0">Follow up</span>
                   </div>
                   <div className="flex justify-between items-center p-3 border border-neutral-100 rounded-lg hover:border-brand-200 transition-colors bg-white">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0">S</div>
                        <div>
                          <p className="font-bold text-brand-900 text-xs sm:text-sm">Sarah Williams</p>
                          <p className="text-[11px] sm:text-xs text-neutral-500">Website Form</p>
                        </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[11px] sm:text-xs font-bold shrink-0">Call Booked</span>
                   </div>
                 </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200/50 p-4 sm:p-6 glass">
                 <div className="flex justify-between items-center mb-4 sm:mb-6">
                   <h3 className="font-bold text-brand-950 text-sm sm:text-base">Today's Tasks</h3>
                   <span className="text-neutral-500 text-xs sm:text-sm">4 Remaining</span>
                 </div>
                 <div className="space-y-2.5 sm:space-y-3">
                    {[
                      "Review Marcus's form video (Squat)",
                      "Update Sarah's macros for Week 4",
                      "Send onboarding form to David",
                      "Post weekly check-in reminder"
                    ].map((task, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 border border-neutral-100 rounded-lg bg-white">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-neutral-300 shrink-0"></div>
                        <p className="text-xs sm:text-sm text-brand-900 font-medium leading-snug">{task}</p>
                      </div>
                    ))}
                 </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200/50 p-4 sm:p-6 glass">
                 <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shrink-0">E</div>
                    <div>
                      <h3 className="font-bold text-brand-950 text-sm sm:text-base">Emma Thompson</h3>
                      <p className="text-xs sm:text-sm text-emerald-600 font-medium">Active • Pro Plan</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    <div className="bg-neutral-50 p-2.5 sm:p-3 rounded-lg border border-neutral-100">
                      <p className="text-[11px] sm:text-xs text-neutral-500 mb-0.5">Current Phase</p>
                      <p className="font-bold text-brand-900 text-xs sm:text-sm">Hypertrophy (Wk 4/8)</p>
                    </div>
                    <div className="bg-neutral-50 p-2.5 sm:p-3 rounded-lg border border-neutral-100">
                      <p className="text-[11px] sm:text-xs text-neutral-500 mb-0.5">Check-in Day</p>
                      <p className="font-bold text-brand-900 text-xs sm:text-sm">Friday</p>
                    </div>
                 </div>
                 <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-brand-50 border border-brand-100 rounded-lg">
                    <p className="text-[11px] sm:text-xs text-brand-800 font-medium">Coach Notes:</p>
                    <p className="text-xs sm:text-sm text-brand-900 mt-0.5 leading-snug">Crushing the macro targets. Ready to increase calories next week.</p>
                 </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex justify-center w-full py-1">
                 <div className="w-full max-w-sm bg-neutral-950 text-white rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden shadow-2xl relative border-4 sm:border-[6px] border-neutral-800 flex flex-col">
                    {/* Subtle gloss gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none"></div>

                    {/* Phone Dynamic Island & Status Bar */}
                    <div className="px-4 pt-2.5 pb-1.5 flex items-center justify-between text-neutral-400 text-[10px] border-b border-white/5 relative z-10">
                      <span className="font-semibold text-neutral-300">9:41</span>
                      <div className="w-16 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 mr-1.5"></span>
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-300">
                        <span className="text-[8px] font-mono">5G</span>
                        <div className="w-3.5 h-2 rounded-xs border border-neutral-400 p-0.5 flex items-center">
                          <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
                        </div>
                      </div>
                    </div>

                    {/* Whitelabel Custom Domain header */}
                    <div className="bg-brand-900/90 border-b border-brand-700/60 px-3.5 py-1.5 flex items-center justify-between text-[11px] relative z-10">
                      <div className="flex items-center gap-1.5 text-brand-200 min-w-0">
                        <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="font-mono text-[10px] truncate text-neutral-200">portal.yourbrand.com</span>
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 shrink-0">
                        Whitelabeled
                      </span>
                    </div>

                    {/* Main Client Experience Content */}
                    <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between relative z-10 text-left space-y-3">
                       {/* Client Greeting & Brand Header */}
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2.5 min-w-0">
                           <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-brand-400 text-white flex items-center justify-center font-black text-xs shadow-md border border-white/20 shrink-0">
                             M
                           </div>
                           <div className="truncate">
                             <div className="flex items-center gap-1">
                               <p className="font-bold text-xs text-white leading-tight truncate">Hi, Marcus!</p>
                               <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                             </div>
                             <p className="text-[10px] text-neutral-400 truncate">1:1 Performance Plan</p>
                           </div>
                         </div>
                         <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold shrink-0">
                           <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                           <span>14d Streak</span>
                         </div>
                       </div>

                       {/* Daily Workout Plan Card */}
                       <div className="bg-white text-brand-950 rounded-xl p-3 shadow-lg border border-neutral-100">
                         <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-1.5">
                              <Dumbbell className="w-3.5 h-3.5 text-brand-700" />
                              <span className="font-bold text-xs text-brand-950">Today's Workout</span>
                            </div>
                            <span className="text-[10px] font-bold bg-brand-100 text-brand-800 px-2 py-0.5 rounded">
                              Push Hypertrophy
                            </span>
                         </div>
                         <div className="space-y-1.5 text-xs">
                            <div className="flex justify-between items-center border-b border-neutral-100 pb-1.5">
                              <span className="text-neutral-600 font-medium truncate pr-2">Incline DB Press</span>
                              <span className="font-bold text-brand-900 bg-neutral-100 px-1.5 py-0.5 rounded text-[11px] shrink-0">4 × 8-10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-neutral-600 font-medium truncate pr-2">Overhead Press & Flyes</span>
                              <span className="font-bold text-brand-900 bg-neutral-100 px-1.5 py-0.5 rounded text-[11px] shrink-0">3 × 12</span>
                            </div>
                         </div>
                       </div>

                       {/* Nutrition & Check-in Micro Stats */}
                       <div className="grid grid-cols-2 gap-2">
                         <div className="bg-neutral-900/90 border border-white/10 rounded-xl p-2.5">
                           <div className="flex items-center justify-between mb-1">
                             <span className="text-[10px] text-neutral-400 font-semibold">Nutrition</span>
                             <span className="text-[10px] text-emerald-400 font-bold">92%</span>
                           </div>
                           <p className="text-xs font-bold text-white">2,150 / 2,400 kcal</p>
                           <div className="w-full bg-white/10 rounded-full h-1 mt-1.5 overflow-hidden">
                             <div className="bg-emerald-400 h-full rounded-full w-[92%]"></div>
                           </div>
                         </div>
                         <div className="bg-neutral-900/90 border border-white/10 rounded-xl p-2.5">
                           <div className="flex items-center justify-between mb-1">
                             <span className="text-[10px] text-neutral-400 font-semibold">Check-in</span>
                             <span className="text-[9px] bg-brand-800 text-brand-200 px-1.5 py-0.2 rounded font-bold">Fri</span>
                           </div>
                           <p className="text-xs font-bold text-white">Due in 2 days</p>
                           <p className="text-[10px] text-neutral-400 mt-0.5">Form ready</p>
                         </div>
                       </div>

                       {/* Direct Coach Messaging Bar */}
                       <div className="bg-brand-900/40 border border-brand-500/20 rounded-xl px-2.5 py-2 flex items-center justify-between">
                         <div className="flex items-center gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                           <p className="text-[10px] text-neutral-300 font-medium">Coach online • Fast response</p>
                         </div>
                         <span className="text-[10px] font-bold text-brand-300">
                           Open Chat →
                         </span>
                       </div>

                    </div>
                 </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const WAITLIST_STORAGE_KEY = 'coachos_waitlist_draft';
const FOUNDING_DEPOSIT_AMOUNT = 250;
const FOUNDING_DEPOSIT_CURRENCY = 'USD';

export function WaitlistForm() {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(WAITLIST_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.formData === 'object') {
          return {
            name: parsed.formData.name || '',
            email: parsed.formData.email || '',
            niche: parsed.formData.niche || '',
            clientCount: parsed.formData.clientCount || '',
            price: parsed.formData.price || '',
            experience: parsed.formData.experience || '',
            adminWork: Array.isArray(parsed.formData.adminWork) ? parsed.formData.adminWork : [],
            tools: parsed.formData.tools || [],
            valuableImplementation: parsed.formData.valuableImplementation || '',
            investingInSystems: parsed.formData.investingInSystems || '',
            startTimeline: parsed.formData.startTimeline || ''
          };
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    return {
      name: '',
      email: '',
      niche: '',
      clientCount: '',
      price: '',
      experience: '',
      adminWork: [],
      tools: [],
      valuableImplementation: '',
      investingInSystems: '',
      startTimeline: ''
    };
  });

  const [step, setStep] = useState(() => {
    try {
      const saved = localStorage.getItem(WAITLIST_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.step === 'number') {
          return parsed.step;
        }
      }
    } catch {
      // Ignore
    }
    return 1;
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [analyzingStatus, setAnalyzingStatus] = useState('');
  const [showSummaryInCheckout, setShowSummaryInCheckout] = useState(false);

  useEffect(() => {
    if (step === 9) {
      setAnalyzingStatus("Analyzing your workflow...");
      const t1 = setTimeout(() => setAnalyzingStatus("Mapping CoachOS infrastructure fit..."), 1200);
      const t2 = setTimeout(() => setAnalyzingStatus("Checking founding cohort capacity..."), 2400);
      const t3 = setTimeout(() => setStep(10), 3800);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [step]);

  useEffect(() => {
    if (!submitted) {
      try {
        localStorage.setItem(
          WAITLIST_STORAGE_KEY,
          JSON.stringify({ formData, step })
        );
      } catch {
        // Ignore
      }
    }
  }, [formData, step, submitted]);

  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());

  const isStep1Valid = formData.name.trim().length >= 2 && validateEmail(formData.email);
  const isStep2Valid = formData.niche !== '' && formData.clientCount !== '' && formData.price !== '' && formData.experience !== '';

  const getInputStyle = (field: string, isValid: boolean) => {
    if (!touched[field]) return "border-neutral-300 focus:ring-brand-500 focus:border-brand-500 bg-white text-brand-950";
    return isValid 
      ? "border-emerald-500 focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50/30 text-brand-950" 
      : "border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50/50 text-red-900";
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setTouched({ ...touched, name: true, email: true });
      if (isStep1Valid) setStep(2);
    } else if (step === 2) {
      if (isStep2Valid) setStep(3);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e?: React.FormEvent, isReservation: boolean = false) => {
    if (e) e.preventDefault();

    setLoading(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://hook.us2.make.com/say8pq8wovhi7o6i4lrp95y7ch64p89i', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          isReservation,
          submittedAt: new Date().toISOString(),
          source: window.location.href
        }),
      });
      
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Something went wrong. Please try again.');
      }
      
      if (isReservation) {
        setLoading(false);
        setStep(11);
        return;
      }

      try {
        localStorage.removeItem(WAITLIST_STORAGE_KEY);
      } catch {
        // Ignore
      }
      
      setSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#134e2a', '#10b981', '#fbbf24', '#ffffff'],
        disableForReducedMotion: true
      });
      
    } catch (error: any) {
      console.error('Error submitting:', error);
      setSubmitError(error.message || 'Failed to connect. Please check your connection and try again.');
      setLoading(false);
    } finally {
      if (!isReservation) {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-brand-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center max-w-lg mx-auto shadow-2xl relative overflow-hidden"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm border border-emerald-200/60">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/50">
          Free Waitlist Confirmed
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-950 mb-2 sm:mb-3">You're on the list!</h3>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
          Thank you, <strong className="text-brand-950">{formData.name || 'Coach'}</strong>. We've saved your profile and will send early access invitations and platform updates directly to <strong className="text-brand-950">{formData.email}</strong>.
        </p>
        
        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 font-medium space-y-1 text-left">
          <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <Check className="w-4 h-4" /> 100% Free Standard Queue Position
          </div>
          <p className="text-neutral-500 pl-6">
            No payment or card was charged. We'll notify you as soon as your batch opens!
          </p>
        </div>
      </motion.div>
    );
  }

  const renderProgress = () => {
    // Total steps = 11
    const totalSteps = 11;
    const progress = Math.min(((step - 1) / (totalSteps - 1)) * 100, 100);
    
    return (
      <div className="mb-6 sm:mb-8 max-w-md mx-auto">
        <div className="flex justify-between items-center text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
          {step <= 2 ? (
            <>
              <span className={step === 1 ? "text-brand-900 font-extrabold" : "text-neutral-500"}>1. Contact Info</span>
              <span className={step === 2 ? "text-brand-900 font-extrabold" : "text-neutral-400"}>2. Business Profile</span>
            </>
          ) : step === 10 ? (
            <span className="text-brand-900 font-extrabold mx-auto">Choose Your Access Option</span>
          ) : step === 11 ? (
            <span className="text-brand-900 font-extrabold mx-auto">Complete Reservation</span>
          ) : (
             <span className="text-brand-900 font-extrabold mx-auto">Application Questions</span>
          )}
        </div>
        <div className="w-full bg-neutral-200/80 rounded-full h-2 p-0.5 overflow-hidden">
          <motion.div 
            className="h-full bg-brand-900 rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto w-full text-left">
      {renderProgress()}

      <div className="bg-white/95 backdrop-blur-xl border border-neutral-200/80 p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(19,78,42,0.08)] relative overflow-hidden min-h-[380px] sm:min-h-[400px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        {/* Top Reassurance Chip */}
        <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-neutral-100 text-[11px] sm:text-xs text-neutral-500 font-medium">
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free Application
          </span>
          <span className="text-neutral-400">Takes ~2 minutes • No card required</span>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Contact Details */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-brand-950 mb-1.5 sm:mb-2">Let's get you on the list.</h3>
              <p className="text-neutral-500 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                Join the CoachOS waitlist completely free. Tell us where to send your early access invitation.
              </p>
              
              <form onSubmit={handleNext} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-1.5 sm:mb-2 uppercase tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    onBlur={() => setTouched({...touched, name: true})}
                    placeholder="Coach Marcus"
                    required
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 text-base rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${getInputStyle('name', formData.name.trim().length >= 2)}`}
                  />
                  {touched.name && formData.name.trim().length < 2 ? (
                    <p className="text-red-500 text-[11px] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider"><X className="w-3 h-3" /> Name is too short</p>
                  ) : (
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Used to personalize your workspace and invitation.</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-1.5 sm:mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onBlur={() => setTouched({...touched, email: true})}
                    placeholder="marcus@example.com"
                    required
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 text-base rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${getInputStyle('email', validateEmail(formData.email))}`}
                  />
                  {touched.email && !validateEmail(formData.email) ? (
                    <p className="text-red-500 text-[11px] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider"><X className="w-3 h-3" /> Please enter a valid email address</p>
                  ) : (
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Where we'll send your cohort invite and access link. No spam.</p>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="w-full mt-4 bg-brand-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-900/20 active:scale-[0.98] group min-h-[48px]"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 2: Business Profile */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                Back
              </button>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-brand-950 mb-1.5 sm:mb-2">Tell us about your business.</h3>
              <p className="text-neutral-500 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">This helps us tailor CoachOS for you.</p>

              <form onSubmit={handleNext} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-1.5 sm:mb-2 uppercase tracking-wide">Coaching Niche</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.niche}
                        onChange={(e) => { setFormData({...formData, niche: e.target.value}); setTouched({...touched, niche: true}); }}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer min-h-[44px]"
                      >
                        <option value="" disabled>Select your niche...</option>
                        <option value="Fitness & Health">Fitness & Health</option>
                        <option value="Business & Career">Business & Career</option>
                        <option value="Life Coaching">Life Coaching</option>
                        <option value="Nutrition">Nutrition</option>
                        <option value="Sports Performance">Sports Performance</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Configures your default pipeline templates & check-in forms.</p>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-1.5 sm:mb-2 uppercase tracking-wide">Active Clients</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.clientCount}
                        onChange={(e) => { setFormData({...formData, clientCount: e.target.value}); setTouched({...touched, clientCount: true}); }}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer min-h-[44px]"
                      >
                        <option value="" disabled>Select count...</option>
                        <option value="0 - 10 clients">0 - 10 clients</option>
                        <option value="11 - 30 clients">11 - 30 clients</option>
                        <option value="31 - 50 clients">31 - 50 clients</option>
                        <option value="50+ clients">50+ clients</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Sets the right database capacity & automation limits for your roster.</p>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-1.5 sm:mb-2 uppercase tracking-wide">Avg Price / Month</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.price}
                        onChange={(e) => { setFormData({...formData, price: e.target.value}); setTouched({...touched, price: true}); }}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer min-h-[44px]"
                      >
                        <option value="" disabled>Select pricing...</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $999">$500 - $999</option>
                        <option value="$1,000 - $2,499">$1,000 - $2,499</option>
                        <option value="$2,500+">$2,500+</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Calibrates your revenue analytics & payment link presets.</p>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-1.5 sm:mb-2 uppercase tracking-wide">Coaching Experience</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.experience}
                        onChange={(e) => { setFormData({...formData, experience: e.target.value}); setTouched({...touched, experience: true}); }}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer min-h-[44px]"
                      >
                        <option value="" disabled>Select experience...</option>
                        <option value="Just starting">Just starting</option>
                        <option value="1 - 3 years">1 - 3 years</option>
                        <option value="3 - 5 years">3 - 5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Tailors your quickstart onboarding walkthrough to your workflow.</p>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-6 bg-brand-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-900/20 active:scale-[0.98] group relative overflow-hidden min-h-[48px]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Begin Founding Fit Review
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 3: Admin Work */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(2)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-brand-950 mb-1.5 sm:mb-2">See whether CoachOS is a fit for your business.</h3>
              <p className="text-neutral-500 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">Answer a few more questions so we can understand your workflow, identify where CoachOS can create the most leverage, and review whether a founding build slot makes sense.</p>
              
              <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-3 sm:mb-4 uppercase tracking-wide">What currently creates the most admin work in your business? (Select all that apply)</label>
              <div className="space-y-2.5 sm:space-y-3 mb-6">
                {['lead follow-up', 'client check-ins', 'scheduling', 'payments', 'program delivery', 'reporting', 'other'].map(opt => {
                  const isSelected = formData.adminWork.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        const newAdminWork = isSelected 
                          ? formData.adminWork.filter((t: string) => t !== opt) 
                          : [...formData.adminWork, opt];
                        setFormData({...formData, adminWork: newAdminWork});
                      }}
                      className={`w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-xs transition-all min-h-[48px] ${isSelected ? 'border-brand-500 bg-brand-50/50 text-brand-900 ring-2 ring-brand-500 font-bold' : 'border-neutral-200 bg-white hover:border-brand-300 text-brand-950 font-medium'}`}
                    >
                      <span className="capitalize text-sm sm:text-base">{opt.replace('-', ' ')}</span>
                    </button>
                  );
                })}
              </div>
              <button 
                onClick={() => setStep(4)}
                disabled={formData.adminWork.length === 0}
                className="w-full bg-brand-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] disabled:opacity-50 group min-h-[48px]"
              >
                Continue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* STEP 4: Tools */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(3)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-3 sm:mb-4 uppercase tracking-wide">Which tools do you currently use? (Select all that apply)</label>
              
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                {['Instagram DMs', 'WhatsApp', 'Google Sheets', 'Notion', 'Calendly', 'Stripe', 'Trainerize', 'TrueCoach', 'Zoom', 'Typeform', 'Other'].map(opt => {
                  const isSelected = formData.tools.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        const newTools = isSelected ? formData.tools.filter((t: string) => t !== opt) : [...formData.tools, opt];
                        setFormData({...formData, tools: newTools});
                      }}
                      className={`text-left px-3.5 sm:px-4 py-3 rounded-xl border transition-all min-h-[46px] ${isSelected ? 'border-brand-500 bg-brand-50 text-brand-900 font-bold shadow-xs' : 'border-neutral-200 bg-white hover:border-brand-200 font-medium text-neutral-700 text-xs sm:text-sm'}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <button 
                onClick={() => setStep(5)}
                disabled={formData.tools.length === 0}
                className="w-full bg-brand-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] disabled:opacity-50 group min-h-[48px]"
              >
                Continue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* STEP 5: Valuable Implementation */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(4)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-3 sm:mb-4 uppercase tracking-wide">What would make CoachOS valuable enough to implement this quarter?</label>
              
              <textarea
                value={formData.valuableImplementation}
                onChange={(e) => setFormData({...formData, valuableImplementation: e.target.value})}
                placeholder="e.g. Having all my client check-ins and payments in one dashboard without hopping between apps..."
                className="w-full h-36 sm:h-40 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-brand-950 resize-none shadow-sm mb-6 text-sm sm:text-base"
              />
              <button 
                onClick={() => setStep(6)}
                disabled={formData.valuableImplementation.trim().length < 5}
                className="w-full bg-brand-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] disabled:opacity-50 group min-h-[48px]"
              >
                Continue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* STEP 6: Investing */}
          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(5)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-3 sm:mb-4 uppercase tracking-wide">Are you actively investing in systems to grow your coaching business?</label>
              
              <div className="space-y-2.5 sm:space-y-3">
                {['Yes, ready to improve operations', 'Exploring options', 'Not right now'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setFormData({...formData, investingInSystems: opt}); setStep(7); }}
                    className={`w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-xs transition-all min-h-[48px] ${formData.investingInSystems === opt ? 'border-brand-500 bg-brand-50/50 text-brand-900 ring-2 ring-brand-500' : 'border-neutral-200 bg-white hover:border-brand-300 text-brand-950'}`}
                  >
                    <span className="text-sm sm:text-base font-medium">{opt}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 7: Timeline */}
          {step === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(6)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-xs sm:text-sm font-bold text-brand-900 mb-3 sm:mb-4 uppercase tracking-wide">If selected, when would you want to begin?</label>
              
              <div className="space-y-2.5 sm:space-y-3">
                {['This month', 'Next 30–60 days', 'Later this year'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setFormData({...formData, startTimeline: opt}); setStep(8); }}
                    className={`w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-xs transition-all min-h-[48px] ${formData.startTimeline === opt ? 'border-brand-500 bg-brand-50/50 text-brand-900 ring-2 ring-brand-500' : 'border-neutral-200 bg-white hover:border-brand-300 text-brand-950'}`}
                  >
                    <span className="text-sm sm:text-base font-medium">{opt}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 8: Review Application */}
          {step === 8 && (
            <motion.div
              key="step8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(7)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-brand-950 mb-2">Review your application.</h3>
              <p className="text-neutral-500 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Please double-check your responses before choosing your access path (100% Free Waitlist vs. Optional Fast-Track).
              </p>

              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-4 sm:p-6 mb-6 space-y-3 sm:space-y-4">
                {[
                  { label: 'Name', value: formData.name },
                  { label: 'Email', value: formData.email },
                  { label: 'Niche', value: formData.niche },
                  { label: 'Active Clients', value: formData.clientCount },
                  { label: 'Avg Price / Month', value: formData.price },
                  { label: 'Coaching Experience', value: formData.experience },
                  { label: 'Primary Admin Work', value: formData.adminWork.join(', ').replace(/-/g, ' ') || 'None selected' },
                  { label: 'Tools Used', value: formData.tools.join(', ') || 'None selected' },
                  { label: 'Start Timeline', value: formData.startTimeline },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 ${i !== 0 ? 'pt-3 sm:pt-4 border-t border-neutral-100' : ''}`}>
                    <span className="text-xs sm:text-sm font-bold text-neutral-400 uppercase tracking-wide shrink-0">{item.label}</span>
                    <span className="text-xs sm:text-base font-medium text-brand-950 text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              <GlowingBorderButton 
                onClick={() => setStep(9)}
                rounded="xl"
                className="w-full px-5 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 active:scale-[0.98] min-h-[48px]"
                glowSpeed={3.2}
              >
                <span className="relative flex items-center justify-center gap-2">
                  Continue to Choose Options
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-emerald-300" />
                </span>
              </GlowingBorderButton>
            </motion.div>
          )}

          {/* STEP 9: Analyzing */}
          {step === 9 && (
            <motion.div
              key="step9"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center justify-center text-center py-8 sm:py-12"
            >
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-brand-200 rounded-full animate-ping opacity-20"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-50 rounded-full flex items-center justify-center border border-brand-200 relative z-10 shadow-lg">
                  <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-brand-900 animate-spin" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-950 mb-2 sm:mb-3">{analyzingStatus}</h3>
              <p className="text-neutral-500 text-xs sm:text-sm max-w-[280px] mx-auto leading-relaxed">Please wait while we review your profile against our current cohort requirements.</p>
            </motion.div>
          )}

          {/* STEP 10: Access Option Selection (Free vs Fast-Track) */}
          {step === 10 && (
            <motion.div
              key="step10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(8)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-4 sm:mb-5 flex items-center gap-1 transition-colors group min-h-[36px]">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to application
              </button>
              
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3.5 sm:p-4 mb-5 sm:mb-6 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-900 uppercase tracking-widest">Application Approved</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-emerald-950 leading-relaxed">
                  Based on your profile, CoachOS is an ideal fit. Choose how you'd like to join below:
                </p>
              </div>

              <div className="mb-6 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-brand-950 mb-2">
                  Select your waitlist path
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Joining the waitlist is <strong className="text-brand-950 font-bold">100% free</strong>. You can also optionally choose to fast-track your setup and secure guaranteed founding placement.
                </p>
              </div>

              {/* Two Prominent, Balanced Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6">
                
                {/* OPTION 1: Standard Free Waitlist */}
                <div className="bg-white border-2 border-emerald-200/80 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-sm hover:border-emerald-400 hover:shadow-md transition-all relative">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-extrabold uppercase tracking-wide mb-3">
                      <Check className="w-3 h-3 text-emerald-600" />
                      100% Free Option
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-brand-950 mb-1">Standard Waitlist</h4>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl sm:text-3xl font-black text-brand-900">$0</span>
                      <span className="text-xs text-neutral-500 font-semibold uppercase">/ Free Forever</span>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Placed in standard queue for rolling invites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Product updates, launch demos, & walkthroughs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Zero payment or credit card needed</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <button 
                      onClick={(e) => handleSubmit(e, false)}
                      disabled={loading}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white px-4 py-3 sm:py-3.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px] disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                      ) : (
                        <>
                          <span>Join Free Waitlist</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-neutral-400 mt-2 font-medium">Instant submit • No charge</p>
                  </div>
                </div>

                {/* OPTION 2: Founding Cohort Fast-Track */}
                <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-xl border border-brand-700/60 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-wide mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      Fast-Track Cohort
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Founding Reservation</h4>
                    <div className="flex items-baseline gap-1.5 mb-4">
                      <span className="text-2xl sm:text-3xl font-black text-amber-300">${FOUNDING_DEPOSIT_AMOUNT}</span>
                      <span className="text-[11px] text-neutral-300 font-medium">credited to your build</span>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200 mb-5">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Guaranteed build slot</strong> in initial rollout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>1-on-1 private architecture & onboarding call</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Locked-in 40% lifetime discount</strong></span>
                      </li>
                    </ul>

                    <div className="mb-4 flex items-start gap-2.5 p-2.5 bg-white/10 rounded-xl border border-white/10">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-brand-300 text-brand-900 focus:ring-brand-400 cursor-pointer shrink-0"
                      />
                      <label htmlFor="terms" className="text-[11px] sm:text-xs text-neutral-200 leading-snug cursor-pointer select-none">
                        I agree to terms and understand the ${FOUNDING_DEPOSIT_AMOUNT} deposit is non-refundable (credited toward build).
                      </label>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <GlowingBorderButton
                      onClick={(e) => handleSubmit(e, true)}
                      disabled={loading || !termsAccepted}
                      rounded="xl"
                      className="w-full px-4 py-3 sm:py-3.5 text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] overflow-hidden min-h-[46px]"
                      glowSpeed={2.8}
                    >
                      <span className="relative flex items-center justify-center gap-1.5">
                        {loading ? (
                          <Loader2 className="w-4 h-4 animate-spin text-white/80" />
                        ) : (
                          <>
                            <span>Reserve & Fast-Track (${FOUNDING_DEPOSIT_AMOUNT})</span>
                            <ArrowRight className="w-4 h-4 text-emerald-300" />
                          </>
                        )}
                      </span>
                    </GlowingBorderButton>
                    <p className="text-center text-[11px] text-neutral-400 mt-2 font-medium">Secure checkout via Whop</p>
                  </div>
                </div>

              </div>

              {submitError && (
                <p className="text-red-500 text-sm font-medium mt-3 text-center">{submitError}</p>
              )}
            </motion.div>
          )}

          {/* STEP 11: Checkout */}
          {step === 11 && (
            <motion.div
              key="step11"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-5 gap-2">
                <button 
                  onClick={() => setStep(10)} 
                  className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-brand-900 flex items-center gap-1 transition-colors group min-h-[36px]"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to reservation</span><span className="xs:hidden">Back</span>
                </button>
                <button
                  onClick={() => setStep(8)}
                  className="text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors flex items-center gap-1 min-h-[36px]"
                >
                  <Edit3 className="w-3.5 h-3.5" /> Edit application
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-950 mb-1.5 sm:mb-2 text-center">Complete your reservation</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-5 text-center leading-relaxed">Secure your founding cohort build slot (${FOUNDING_DEPOSIT_AMOUNT} deposit applied to your build).</p>

              {/* Review what they did / application summary accordion */}
              <div className="mb-5 sm:mb-6 rounded-xl sm:rounded-2xl border border-neutral-200/80 bg-neutral-50/80 overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setShowSummaryInCheckout(!showSummaryInCheckout)}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 flex items-center justify-between text-left hover:bg-neutral-100/70 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-100/70 text-brand-800 flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-bold text-brand-950 truncate">Review your application details</div>
                      <div className="text-[11px] sm:text-xs text-neutral-500 truncate">{formData.name ? `${formData.name} • ` : ''}{formData.niche || 'Coaching Profile'}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-brand-900 bg-white px-2 sm:px-2.5 py-1 rounded-md border border-neutral-200 shrink-0">
                    <span>{showSummaryInCheckout ? "Hide" : "View"}</span>
                    {showSummaryInCheckout ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {showSummaryInCheckout && (
                  <div className="p-3.5 sm:p-5 border-t border-neutral-200/70 bg-white">
                    <div className="space-y-2 text-xs sm:text-sm">
                      {[
                        { label: 'Name', value: formData.name },
                        { label: 'Email', value: formData.email },
                        { label: 'Niche', value: formData.niche },
                        { label: 'Active Clients', value: formData.clientCount },
                        { label: 'Avg Price / Month', value: formData.price },
                        { label: 'Coaching Experience', value: formData.experience },
                        { label: 'Primary Admin Work', value: formData.adminWork.join(', ').replace(/-/g, ' ') || 'None selected' },
                        { label: 'Tools Used', value: formData.tools.join(', ') || 'None selected' },
                        { label: 'Start Timeline', value: formData.startTimeline },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-start gap-3 py-1.5 border-b border-neutral-100 last:border-0">
                          <span className="font-bold text-neutral-400 uppercase text-[10px] sm:text-[11px] tracking-wide shrink-0">{item.label}</span>
                          <span className="font-medium text-brand-950 text-right text-xs sm:text-sm">{item.value || '—'}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3.5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Need to update answers?</span>
                      <button
                        type="button"
                        onClick={() => setStep(8)}
                        className="text-xs font-bold text-brand-900 hover:text-brand-700 flex items-center gap-1 underline"
                      >
                        Edit application
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm p-2 sm:p-6 mb-5 sm:mb-6 overflow-hidden">
                <WhopElements elements={whopElements}>
                  <Checkout plan="plan_6zWK3keLNhOWg">
                    <CheckoutElement />
                  </Checkout>
                </WhopElements>
              </div>

              <button 
                onClick={(e) => handleSubmit(e, false)}
                disabled={loading}
                className="w-full bg-transparent text-neutral-500 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-medium hover:bg-neutral-100 hover:text-neutral-700 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 min-h-[44px]"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-neutral-400" />
                ) : (
                  "Cancel payment and submit standard application"
                )}
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}




function IntegrationNode({ icon: Icon, name, color, delay, extraClasses = "" }: any) {
  return (
    <div 
      className={`bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 relative group cursor-default transition-all duration-300 hover:border-brand-300 hover:shadow-brand-900/10 hover:-translate-y-1 ${extraClasses}`}
      style={{ animation: `float 4s ease-in-out infinite ${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div 
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white relative z-10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] border border-black/10"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md" />
      </div>
      <span className="text-[10px] md:text-xs font-bold text-neutral-600 relative z-10 group-hover:text-brand-900 transition-colors">{name}</span>
      
      {/* Pulse dot */}
      <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-sm">
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
      </div>
    </div>
  )
}

function CustomBuiltVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-16 flex items-center justify-center min-h-[500px] md:min-h-[600px] bg-neutral-50/50 rounded-3xl border border-neutral-200/50 shadow-inner overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -40; }
        }
      `}} />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#134e2a0a_1px,transparent_1px),linear-gradient(to_bottom,#134e2a0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/15 rounded-full blur-[80px] pointer-events-none"></div>

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
         <defs>
           <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#134e2a" stopOpacity="0.4" />
             <stop offset="50%" stopColor="#134e2a" stopOpacity="0.1" />
             <stop offset="100%" stopColor="#134e2a" stopOpacity="0.4" />
           </linearGradient>
           <radialGradient id="glow" cx="50%" cy="50%" r="50%">
             <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
             <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
           </radialGradient>
         </defs>

         <g stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash-flow_2s_linear_infinite]">
           <line x1="20%" y1="20%" x2="50%" y2="50%" />
           <line x1="80%" y1="20%" x2="50%" y2="50%" />
           <line x1="80%" y1="80%" x2="50%" y2="50%" />
           <line x1="20%" y1="80%" x2="50%" y2="50%" />
           
           {/* Horizontal connections */}
           <line x1="10%" y1="50%" x2="50%" y2="50%" className="hidden md:block" />
           <line x1="90%" y1="50%" x2="50%" y2="50%" className="hidden md:block" />
         </g>
      </svg>

      <div className="relative w-full h-full max-w-2xl min-h-[400px]">
        {/* Center Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative group cursor-default">
            
            {/* Animated Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-400/30 scale-[1.2] group-hover:scale-[1.4] transition-transform duration-700"></div>
            <div className="absolute inset-0 rounded-full border border-brand-300/20 scale-[1.5] group-hover:scale-[1.8] transition-transform duration-700 delay-75"></div>
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-200/30 scale-[1.9] animate-[spin_30s_linear_infinite]"></div>
            
            {/* Radar Pulse */}
            <div className="absolute inset-0 bg-brand-400/20 rounded-full animate-[pulse-ring_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

            {/* Core Box */}
            <div className="bg-white p-2 sm:p-2.5 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_0_40px_rgba(19,78,42,0.2)] border border-brand-100 relative z-10 transition-transform duration-500 group-hover:scale-105">
              <div className="bg-gradient-to-b from-brand-900 to-brand-950 p-4 sm:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] flex flex-col items-center justify-center gap-2 sm:gap-3 w-32 h-32 sm:w-40 sm:h-40 relative overflow-hidden border border-brand-800 shadow-inner">
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/10 to-transparent rounded-b-full opacity-50"></div>
                
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-brand-300 mb-0.5 sm:mb-1 animate-[spin_8s_linear_infinite] drop-shadow-md" />
                <Logo className="h-5 sm:h-7 text-white z-10 drop-shadow-md" inverted />
                
                <div className="mt-1 sm:mt-2 bg-brand-950/80 border border-brand-700/50 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-inner backdrop-blur-sm z-10">
                  <span className="text-brand-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Your OS</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Integration Nodes */}
        <div className="absolute top-[10%] left-[10%] md:left-[15%] z-10">
          <IntegrationNode icon={CreditCard} name="Stripe" color="#635BFF" delay={0} />
        </div>
        
        <div className="absolute top-[10%] right-[10%] md:right-[15%] z-10">
          <IntegrationNode icon={Video} name="Zoom" color="#2D8CFF" delay={1.2} />
        </div>

        <div className="absolute bottom-[10%] right-[10%] md:right-[15%] z-10">
          <IntegrationNode icon={Calendar} name="Calendly" color="#006BFF" delay={0.5} />
        </div>

        <div className="absolute bottom-[10%] left-[10%] md:left-[15%] z-10">
          <IntegrationNode icon={Database} name="MyFitnessPal" color="#0066EE" delay={1.8} />
        </div>

        {/* Middle Nodes (Desktop Only) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-[5%] z-10 hidden md:block">
          <IntegrationNode icon={MessageCircle} name="Slack" color="#E01E5A" delay={0.8} />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[5%] z-10 hidden md:block">
          <IntegrationNode icon={FileText} name="Sheets" color="#0F9D58" delay={1.5} />
        </div>

      </div>
    </div>
  )
}
function ProblemVisuals() {
  return (
    <div className="relative h-[360px] sm:h-[400px] w-full rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200/60 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,78,42,0.05)_0%,transparent_70%)]"></div>
      
      {/* Animated Elements */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 sm:top-8 left-3 sm:left-8 glass p-3.5 sm:p-4 rounded-xl shadow-xl w-56 sm:w-64 max-w-[85vw] z-20"
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-100 text-pink-600 rounded flex items-center justify-center">
            <MessageCircle className="w-3 h-3" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-neutral-400">Instagram DM</span>
        </div>
        <p className="text-xs sm:text-sm font-medium text-neutral-900">"Hey! Do you have any spots left for 1:1 coaching?"</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 sm:bottom-10 right-3 sm:right-6 glass p-3.5 sm:p-4 rounded-xl shadow-xl w-56 sm:w-64 max-w-[85vw] z-30"
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center">
            <CheckSquare className="w-3 h-3" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-neutral-400">WhatsApp</span>
        </div>
        <p className="text-xs sm:text-sm font-medium text-neutral-900">"Did you see my form video? Is my back rounding?"</p>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-50 border border-red-200 p-4 sm:p-5 rounded-2xl shadow-2xl w-60 sm:w-72 max-w-[90vw] z-10"
      >
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <p className="font-bold text-xs sm:text-sm text-red-900">Double Booked!</p>
            <p className="text-[10px] sm:text-xs text-red-600">Calendly conflict detected</p>
          </div>
        </div>
        <div className="flex -space-x-2">
           <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-blue-700">JS</div>
           <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-amber-700">AK</div>
        </div>
      </motion.div>
    </div>
  );
}


function ComparisonTable() {
  const comparisons = [
    {
      feature: "Client Experience",
      standard: "Jumping between 4 different links & apps",
      coachos: "One unified, branded portal"
    },
    {
      feature: "Your Workspace",
      standard: "Forced to adapt to generic templates",
      coachos: "Custom-built for your exact workflow"
    },
    {
      feature: "Data & Admin",
      standard: "Manually copying from Stripe to Sheets",
      coachos: "Seamless syncing across all your tools"
    },
    {
      feature: "Brand Presence",
      standard: "Powered by [App Name] branding",
      coachos: "100% Whitelabeled to your brand"
    },
    {
      feature: "Monthly Costs",
      standard: "$250+/mo across 5 different subscriptions",
      coachos: "One simple, predictable flat rate"
    }
  ];

  return (
    <motion.section 
      id="comparison"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 id="comparison-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-3 sm:mb-4">
            Why 6-Figure Coaches Are Replacing Disconnected SaaS with CoachOS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Stop paying for disconnected tools that create friction for your clients and more admin work for you.
          </p>
        </motion.div>

        {/* Mobile View (Cards) */}
        <div className="block md:hidden space-y-4">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-4 overflow-hidden"
            >
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                {row.feature}
              </div>

              <div className="space-y-2.5">
                {/* CoachOS Solution (Top) */}
                <div className="bg-brand-50/80 border border-brand-200/80 rounded-xl p-3 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[11px] font-black uppercase tracking-wider text-brand-900">CoachOS</span>
                      <span className="text-[9px] font-bold text-brand-600 uppercase tracking-widest">(Your System)</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-brand-950 leading-snug">
                      {row.coachos}
                    </p>
                  </div>
                </div>

                {/* Standard Old Way (Bottom) */}
                <div className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-3 flex items-start gap-2.5">
                  <X className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[11px] font-bold text-neutral-600">Standard Apps</span>
                      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-widest">(Old Way)</span>
                    </div>
                    <p className="text-xs text-neutral-500 leading-snug">
                      {row.standard}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop / Tablet View (Table) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="hidden md:block relative pt-4"
        >
          {/* Main Table Card */}
          <div className="relative rounded-3xl border border-neutral-200 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] group/table">
            
            {/* The CoachOS Column Elevated Lift & Shadow Aura - Pure CSS Smooth Hover */}
            <div 
              className="pointer-events-none absolute -top-3 -bottom-3 right-0 w-1/3 rounded-2xl sm:rounded-3xl border-2 border-brand-200/70 shadow-sm bg-transparent transition-all duration-300 ease-out z-20 group-hover/table:border-brand-600 group-hover/table:bg-brand-50/20 group-hover/table:-translate-y-2 group-hover/table:shadow-[0_24px_50px_-10px_rgba(15,23,42,0.22)] group-hover/table:ring-4 group-hover/table:ring-brand-500/15"
            >
              {/* Premium Floating Badge on the Elevated Column */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap bg-brand-900 text-neutral-200 shadow-sm group-hover/table:bg-brand-950 group-hover/table:text-amber-300 group-hover/table:shadow-lg group-hover/table:scale-105 group-hover/table:ring-2 group-hover/table:ring-amber-400/40">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand-400 transition-colors group-hover/table:text-amber-400" />
                  <span>Your Custom OS</span>
                </span>
              </div>
            </div>

            {/* Content rows with clipped corners matching rounded-3xl */}
            <div className="rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 border-b border-neutral-100 bg-neutral-50/50">
                <div className="p-4 sm:p-8 flex items-end">
                  <span className="text-xs sm:text-sm font-bold text-neutral-500 uppercase tracking-wider">
                    Area of Focus
                  </span>
                </div>
                <div className="p-4 sm:p-8 text-center flex flex-col items-center justify-end border-l border-neutral-100 transition-opacity duration-300 group-hover/table:opacity-50">
                  <span className="text-sm sm:text-base font-bold text-neutral-700 mb-1">Standard Apps</span>
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-widest">(The Old Way)</span>
                </div>
                <div className="p-4 sm:p-8 text-center flex flex-col items-center justify-end relative border-l border-brand-100 bg-brand-50/50 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500 transition-all duration-300 group-hover/table:h-1.5 group-hover/table:bg-brand-600"></div>
                  <span className="text-lg sm:text-2xl font-black text-brand-950 tracking-tight flex items-center justify-center gap-1.5 sm:gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 transition-all duration-300 group-hover/table:scale-110 group-hover/table:text-amber-500" /> CoachOS
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-brand-700 uppercase tracking-widest mt-1">(Your Own System)</span>
                </div>
              </div>
              
              <div className="divide-y divide-neutral-100">
                {comparisons.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 group transition-colors duration-200 hover:bg-neutral-50/60">
                    <div className="p-4 sm:p-6 text-sm sm:text-base font-semibold text-neutral-800 flex items-center">
                      {row.feature}
                    </div>
                    <div className="p-4 sm:p-6 text-sm sm:text-base text-neutral-500 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-l border-neutral-100 transition-opacity duration-300 group-hover/table:opacity-50">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 shrink-0" />
                      <span className="leading-snug">{row.standard}</span>
                    </div>
                    <div className="p-4 sm:p-6 text-sm sm:text-base font-bold text-brand-900 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-l border-brand-100 bg-brand-50/50 transition-all duration-200 relative group-hover:bg-brand-100/60">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span className="leading-snug">{row.coachos}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
