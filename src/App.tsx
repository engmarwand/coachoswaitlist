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
  Smile,
  Compass,
  Briefcase,
  Layers,
  Award,
  SlidersHorizontal,
  Eye,
  FileCheck,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { loadWhop } from "@whop/elements";
import { Checkout, CheckoutElement, WhopElements } from "@whop/elements-react";

const whopElements = loadWhop();

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-brand-900 font-sans selection:bg-brand-900 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="h-8 text-brand-900" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={scrollToWaitlist}
                className="bg-brand-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-800 transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                Join the waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-brand-900 focus:outline-none"
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
              className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToWaitlist();
                  }}
                  className="w-full bg-brand-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-brand-800 transition-colors mt-4 flex justify-center items-center gap-2"
                >
                  Join the waitlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-brand-200/50 text-brand-800 text-sm font-medium mb-8 shadow-sm backdrop-blur-md hover:bg-white/90 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Founding waitlist open — early access & pricing
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-brand-900 leading-[1.1] mb-6">
                One system to run your coaching business.
              </h1>
              
              <p className="text-lg lg:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                For independent fitness and business coaches. Leads, clients, sessions, payments, and follow-up all in one beautiful dashboard.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={scrollToWaitlist}
                  className="group relative bg-brand-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-800 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-brand-900/20 hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    Apply for founding access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2">
                  Limited first cohort • Built for independent coaches
                </p>
              </div>
            </motion.div>

            {/* Interactive Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16 lg:mt-24 max-w-5xl mx-auto"
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <section className="py-24 bg-white border-y border-neutral-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-6">
                  Sound familiar?
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  You're a great coach, but managing the business side feels chaotic. Leads are falling through the cracks and admin is eating your day.
                </p>
                <ul className="space-y-6">
                  {[
                    "You're closing DMs manually and leads keep slipping through.",
                    "Your client info lives scattered across WhatsApp, Notes, Calendly, and payment links.",
                    "You don't know exactly who to follow up with today, so you message no one.",
                    "You're spending more time on admin tasks than actual coaching."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-lg text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <ProblemVisuals />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solution Section (Interactive) */}
        <section className="py-24 bg-brand-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
                Your private operating system.
              </h2>
              <p className="text-lg lg:text-xl text-neutral-400">
                CoachOS feels custom to your business. Everything you need to scale, without needing five different apps holding it together with duct tape.
              </p>
            </div>
            
            <InteractiveSolution />
          </div>
        </section>

        
        {/* 3.5 Custom Integration Section */}
        <section className="py-24 bg-white border-b border-neutral-200 overflow-hidden relative">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <CustomBuiltVisual />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold mb-6 uppercase tracking-wider">
                  <Link2 className="w-3.5 h-3.5" />
                  Bespoke Integrations
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-brand-950 mb-6">
                  We don't just give you a login. We build <span className="text-brand-600 font-extrabold italic">your</span> dashboard.
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Most software forces you to change how you work to fit their templates. CoachOS is different. When you join, we architect a private operating system around <strong>your exact tools, your pricing models, and your coaching style</strong>.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-950">Bring your own tools</p>
                      <p className="text-sm text-neutral-500">Stripe, Calendly, Zoom, MyFitnessPal—if you use it, we connect it directly into your hub.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-950">100% Whitelabeled for you</p>
                      <p className="text-sm text-neutral-500">Your clients see your logo, your brand colors, and your custom domain. Never our branding.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-950">Custom workflows</p>
                      <p className="text-sm text-neutral-500">Need a unique check-in form? A specific milestone tracker? We build it into your OS.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-4">
                How CoachOS works
              </h2>
              <p className="text-lg text-neutral-600">A simple flow to run your entire coaching business.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-neutral-200 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Leads auto-capture",
                  desc: "Leads from your IG, site, or forms funnel directly into CoachOS.",
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
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-neutral-200 flex items-center justify-center mb-6 relative group cursor-default">
                    <div className="absolute inset-0 bg-brand-900 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                    <div className="relative z-10 text-brand-900 group-hover:text-white transition-colors duration-300 flex flex-col items-center gap-1">
                       {step.icon}
                       <span className="text-sm font-bold opacity-50 group-hover:opacity-100">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 max-w-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable />

        {/* 5. For who / use cases */}
        <section className="py-24 bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-6">
                  Built for independent fitness and business coaches.
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Whether you coach 1:1, in small groups, or scale online programs, CoachOS adapts to your specific workflow.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fitness coaches managing online clients and form checks.",
                    "Business coaches juggling strategy calls and action items.",
                    "Coaches who want a professional system without 10 subscriptions."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100 hover:border-neutral-300 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-900 flex-shrink-0" />
                      <span className="text-brand-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl transform md:rotate-1 md:hover:rotate-0 transition-transform duration-500">
                <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  "CoachOS is NOT a marketplace. It is your private operating system. You bring the clients; we make sure none get lost and you close more of them."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center border border-brand-700">
                    <Logo className="h-5 text-brand-50" inverted />
                  </div>
                  <div>
                    <div className="font-bold">The CoachOS Team</div>
                    <div className="text-neutral-400 text-sm">Founders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Founding Cohort & Waitlist Section */}
        <section id="waitlist" className="py-24 bg-brand-950 text-white scroll-mt-16 relative overflow-hidden border-t border-brand-900">
          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-brand-700/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              FOUNDING COHORT OPEN
            </div>

            {/* Clear Primary Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Join before CoachOS opens publicly.
            </h2>
            
            <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              The first group of coaches will get early access and 40% off for life. Once founding access closes, that rate is gone.
            </p>

            {/* Waitlist Multi-step Form */}
            <div className="relative">
              <WaitlistForm />
            </div>

            {/* Sub-text note */}
            <div className="mt-8 text-center">
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                Limited first cohort — Built for independent coaches
              </p>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-brand-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="Is CoachOS a marketplace?" 
                answer="No. CoachOS is your private operating system. You bring your clients; we give you the system to manage them. We don't take a cut of your clients or list you on a directory."
              />
              <FAQItem 
                question="What does the founding reservation deposit do?" 
                answer="It reserves your place in the founding review queue and is credited toward your CoachOS build if we agree to move forward after the review call. The reservation deposit is non-refundable."
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
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <section className="py-24 bg-white border-t border-neutral-200 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 via-brand-900 to-neutral-200"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-brand-900 mb-6">
              Stop juggling tools. Start running your coaching business from one system.
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <button 
                onClick={scrollToWaitlist}
                className="bg-brand-900 text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-brand-800 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Apply for founding access
              </button>
              <p className="text-sm text-neutral-500 font-medium">Limited first cohort • Built for independent coaches</p>
            </div>
          </div>
        </section>
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
        </div>
      </footer>
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

function HeroDashboard() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setVariantIndex((prev) => (prev + 1) % DASHBOARD_VARIANTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSelectVariant = (index: number) => {
    setVariantIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 15 seconds of user inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 15000);
  };

  const variant = DASHBOARD_VARIANTS[variantIndex];
  const TabIcon = variant.tabIcon;

  return (
    <div className="flex flex-col gap-4 relative">
      {/* Interactive OS Selector Tabs */}
      <div className="flex flex-col items-center gap-2 z-20">
        <div className="flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/90 shadow-sm max-w-full overflow-x-auto">
          {DASHBOARD_VARIANTS.map((v, idx) => {
            const Icon = v.tabIcon;
            const isActive = idx === variantIndex;
            return (
              <button
                key={v.id}
                onClick={() => handleSelectVariant(idx)}
                className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-brand-950 shadow-sm' : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeHeroTabPill"
                    className="absolute inset-0 bg-neutral-100 border border-neutral-200/80 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? v.theme.primary : 'text-neutral-400'}`} />
                  <span>{v.shortName}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tagline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={variant.id + '-tagline'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-xs sm:text-sm text-neutral-500 font-medium text-center"
          >
            Custom Architecture: <strong className="text-brand-950 font-bold">{variant.tagline}</strong>
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Main OS Mockup Container */}
      <div className="h-[640px] md:h-auto md:min-h-[560px] md:aspect-[16/9.4] bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-neutral-300/80 overflow-hidden flex relative backdrop-blur-sm">
        
        {/* Animated Sidebar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={variant.id + '-sidebar'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`w-14 sm:w-16 md:w-60 flex flex-col p-2 sm:p-4 shadow-2xl z-10 relative shrink-0 ${variant.theme.sidebar}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-40 pointer-events-none"></div>
            
            <div className="hidden md:flex items-center mb-7 mt-1 px-2 relative z-10">
              <Logo className="h-7 text-white" inverted />
            </div>
            <div className="flex md:hidden items-center justify-center mb-6 mt-1 text-white relative z-10">
              <Logo className="h-7 text-white" inverted />
            </div>

            <nav className="space-y-1.5 flex-1 relative z-10">
              {variant.menu.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 cursor-default ${
                    item.active 
                      ? `${variant.theme.activeMenu}` 
                      : 'hover:bg-white/10 text-neutral-300 hover:text-white'
                  }`}
                >
                  <item.icon className={`w-4 h-4 flex-shrink-0 ${item.active ? 'text-white' : 'opacity-70'}`} />
                  <span className="hidden md:block font-medium text-xs tracking-tight">{item.label}</span>
                  {item.badge && (
                    <span className="hidden md:flex ml-auto bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            <div className="relative z-10 pt-4 border-t border-white/10 hidden md:flex items-center gap-2.5 px-2">
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                ME
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white leading-none">Your OS</p>
                <p className="text-[10px] text-neutral-400 mt-0.5">Whitelabeled</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Main OS View Area */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden text-left relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={variant.id + '-view'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col overflow-hidden"
            >
              {/* Topbar */}
              <div className={`h-14 border-b flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20 shrink-0 ${variant.theme.topbarBg}`}>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                    {variant.headerStatus}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 ml-auto">
                  <div className="hidden sm:flex items-center gap-2 text-neutral-400 bg-neutral-100/90 px-3 py-1 rounded-lg w-48 border border-neutral-200/60 text-xs">
                    <Search className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Search data...</span>
                  </div>
                  <div className="relative cursor-pointer">
                    <Bell className="w-4 h-4 text-neutral-500 hover:text-brand-900 transition-colors" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white"></span>
                  </div>
                </div>
              </div>

              {/* Scrollable Dashboard Body */}
              <div className="p-4 sm:p-6 overflow-y-auto bg-neutral-50/70 h-full flex-1 space-y-5">
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {variant.topCards.map((card, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-2xl shadow-sm border transition-all duration-200 flex flex-col justify-between relative overflow-hidden bg-white ${variant.theme.cardBg}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider">{card.title}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${variant.theme.badgeBg}`}>
                          {card.badge}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-extrabold text-brand-950 tracking-tight">{card.value}</span>
                      </div>
                      <p className="text-xs text-neutral-500 font-medium">{card.sub}</p>

                      {/* Progress bar type */}
                      {card.type === 'progress' && card.progress && (
                        <div className="w-full bg-neutral-100 rounded-full h-2 mt-3 p-0.5 border border-neutral-200/50">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${card.progress}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-emerald-500"
                          />
                        </div>
                      )}

                      {/* Chart preview type */}
                      {card.type === 'chart' && card.chartData && (
                        <div className="h-10 w-full mt-2 -ml-2 -mb-2">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={card.chartData}>
                              <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke={variant.theme.chartColor} 
                                strokeWidth={2.5} 
                                dot={false} 
                                isAnimationActive={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Connected Tools Bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/70 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                      <Link2 className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                      Bespoke Tool Stack (Zero Data Loss)
                    </h4>
                    <span className="text-[10px] text-neutral-400 font-medium">100% Whitelabeled</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {variant.tools.map((tool, i) => (
                      <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-neutral-200/80 bg-neutral-50/80 hover:bg-neutral-100 transition-colors">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center text-white shrink-0 shadow-sm" style={{ backgroundColor: tool.color }}>
                          <tool.icon className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-bold text-neutral-700">{tool.name}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5 shadow-[0_0_4px_rgba(16,185,129,0.8)]"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Split Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Left Section: OS-Specific Core Feature */}
                  <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-neutral-200/70 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                          <variant.leftSectionIcon className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                          {variant.leftSectionTitle}
                        </h4>
                        <span className="text-[10px] bg-neutral-100 text-neutral-600 font-bold px-2 py-0.5 rounded-full">
                          Live System
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {variant.leftItems.map((item, i) => (
                          <div key={i} className="p-3 rounded-xl bg-neutral-50/80 border border-neutral-100 hover:border-neutral-200 transition-colors text-left">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <p className="text-xs font-bold text-brand-950">{item.title}</p>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${item.statusColor}`}>
                                {item.status}
                              </span>
                            </div>
                            <p className="text-[11px] text-neutral-500">{item.meta}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Real-time Activity / Queue */}
                  <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-neutral-200/70 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider flex items-center gap-1.5">
                          <variant.rightSectionIcon className={`w-3.5 h-3.5 ${variant.theme.primary}`} />
                          {variant.rightSectionTitle}
                        </h4>
                        <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Live
                        </span>
                      </div>

                      <div className="space-y-3">
                        {variant.rightItems.map((act, i) => (
                          <div key={i} className="p-3 rounded-xl border border-neutral-100 bg-neutral-50/60 flex items-start gap-2.5">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${act.iconBg}`}>
                              <act.icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1 mb-0.5">
                                <p className="text-xs font-bold text-brand-950 truncate">{act.author}</p>
                                <span className="text-[10px] text-neutral-400 font-medium">{act.time}</span>
                              </div>
                              <p className="text-[11px] font-semibold text-neutral-700">{act.action}</p>
                              <p className="text-[10px] text-neutral-500 truncate mt-0.5">{act.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
      desc: "A branded portal for your clients to log in.",
      icon: LayoutDashboard
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(19,78,42,0.15)] border border-neutral-200/60 p-4 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 backdrop-blur-sm">
      <div className="lg:w-1/3 flex flex-col gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden group ${activeTab === idx ? 'bg-brand-900 shadow-xl' : 'hover:bg-brand-50'}`}
          >
            {activeTab === idx && <div className="absolute inset-0 bg-white/10"></div>}
            <div className="relative z-10 flex items-start gap-4">
              <div className={`mt-1 p-2 rounded-lg transition-colors ${activeTab === idx ? 'bg-brand-800 text-white' : 'bg-brand-100 text-brand-900 group-hover:bg-brand-200'}`}>
                <tab.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`font-bold mb-1 ${activeTab === idx ? 'text-white' : 'text-brand-950'}`}>{tab.title}</h4>
                <p className={`text-sm ${activeTab === idx ? 'text-brand-100' : 'text-neutral-500'}`}>{tab.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="lg:w-2/3 bg-neutral-50 rounded-2xl border border-neutral-200/60 overflow-hidden flex items-center justify-center p-6 lg:p-12 relative min-h-[400px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full relative z-10"
          >
            {activeTab === 0 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200/50 p-6 glass">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-brand-950">Active Leads</h3>
                   <span className="bg-brand-100 text-brand-800 px-2 py-1 rounded text-xs font-bold">12 Total</span>
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 border border-neutral-100 rounded-lg hover:border-brand-200 transition-colors bg-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">M</div>
                        <div>
                          <p className="font-bold text-brand-900 text-sm">Marcus Johnson</p>
                          <p className="text-xs text-neutral-500">Instagram DM</p>
                        </div>
                      </div>
                      <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">Follow up</span>
                   </div>
                   <div className="flex justify-between items-center p-3 border border-neutral-100 rounded-lg hover:border-brand-200 transition-colors bg-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-xs">S</div>
                        <div>
                          <p className="font-bold text-brand-900 text-sm">Sarah Williams</p>
                          <p className="text-xs text-neutral-500">Website Form</p>
                        </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Call Booked</span>
                   </div>
                 </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200/50 p-6 glass">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-brand-950">Today's Tasks</h3>
                   <span className="text-neutral-500 text-sm">4 Remaining</span>
                 </div>
                 <div className="space-y-3">
                    {[
                      "Review Marcus's form video (Squat)",
                      "Update Sarah's macros for Week 4",
                      "Send onboarding form to David",
                      "Post weekly check-in reminder"
                    ].map((task, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 border border-neutral-100 rounded-lg bg-white">
                        <div className="w-5 h-5 rounded border border-neutral-300"></div>
                        <p className="text-sm text-brand-900 font-medium">{task}</p>
                      </div>
                    ))}
                 </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200/50 p-6 glass">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-lg">E</div>
                    <div>
                      <h3 className="font-bold text-brand-950">Emma Thompson</h3>
                      <p className="text-sm text-emerald-600 font-medium">Active • Pro Plan</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      <p className="text-xs text-neutral-500 mb-1">Current Phase</p>
                      <p className="font-bold text-brand-900 text-sm">Hypertrophy (Wk 4/8)</p>
                    </div>
                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      <p className="text-xs text-neutral-500 mb-1">Check-in Day</p>
                      <p className="font-bold text-brand-900 text-sm">Friday</p>
                    </div>
                 </div>
                 <div className="mt-4 p-3 bg-brand-50 border border-brand-100 rounded-lg">
                    <p className="text-xs text-brand-800 font-medium">Coach Notes:</p>
                    <p className="text-sm text-brand-900 mt-1">Crushing the macro targets. Ready to increase calories next week.</p>
                 </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex justify-center">
                 <div className="w-full max-w-sm bg-brand-950 text-white rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-brand-900 h-[380px] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                    <div className="p-5 flex-1 flex flex-col justify-center relative z-10">
                       <div className="flex justify-between items-center mb-8">
                         <Logo className="h-6 text-white" inverted />
                         <div className="w-8 h-8 rounded-full bg-brand-800 border-2 border-brand-700 flex items-center justify-center text-xs font-bold text-white shadow-sm">M</div>
                       </div>
                       <h3 className="text-2xl font-bold mb-1">Hi, Marcus!</h3>
                       <p className="text-brand-200 text-sm mb-8">Here is your plan for today.</p>
                       
                       <div className="bg-white text-brand-950 rounded-xl p-4 mb-4 shadow-xl">
                         <div className="flex justify-between items-center mb-3">
                            <span className="font-bold">Workout</span>
                            <span className="text-xs font-bold bg-brand-100 text-brand-800 px-2 py-1 rounded">Push Day</span>
                         </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm border-b border-neutral-100 pb-2">
                              <span className="text-neutral-600">Incline DB Press</span>
                              <span className="font-bold">4 x 8-10</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-neutral-600">Overhead Press</span>
                              <span className="font-bold">3 x 10-12</span>
                            </div>
                         </div>
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
      
      try {
        localStorage.removeItem(WAITLIST_STORAGE_KEY);
      } catch {
        // Ignore
      }

      if (isReservation) {
        setLoading(false);
        setStep(11);
        return;
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
        className="bg-brand-50 border border-brand-200 rounded-3xl p-10 text-center max-w-md mx-auto shadow-xl"
      >
        <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-200/50">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-extrabold tracking-tight text-brand-950 mb-3">Application Saved.</h3>
        <p className="text-brand-800 text-lg">We'll review it in the standard order for {formData.name || 'you'}.</p>
      </motion.div>
    );
  }

  const renderProgress = () => {
    // Total steps = 10
    const totalSteps = 10;
    const progress = Math.min(((step - 1) / (totalSteps - 1)) * 100, 100);
    
    return (
      <div className="mb-8 max-w-sm mx-auto">
        <div className="flex justify-between items-center text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
          {step <= 2 ? (
            <>
              <span className={step === 1 ? "text-brand-900 font-extrabold" : "text-neutral-500"}>1. Contact Info</span>
              <span className={step === 2 ? "text-brand-900 font-extrabold" : "text-neutral-400"}>2. Business Profile</span>
            </>
          ) : (
             <span className="text-brand-900 font-extrabold mx-auto">Founding Fit Review</span>
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
    <div className="max-w-2xl mx-auto w-full text-left">
      {renderProgress()}

      <div className="bg-white/90 backdrop-blur-xl border border-neutral-200/60 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(19,78,42,0.08)] relative overflow-hidden min-h-[400px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
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
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-950 mb-2">Let's get you on the list.</h3>
              <p className="text-neutral-500 mb-8 text-lg">First, where should we send your invite?</p>
              
              <form onSubmit={handleNext} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    onBlur={() => setTouched({...touched, name: true})}
                    placeholder="Coach Marcus"
                    required
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${getInputStyle('name', formData.name.trim().length >= 2)}`}
                  />
                  {touched.name && formData.name.trim().length < 2 ? (
                    <p className="text-red-500 text-[11px] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider"><X className="w-3 h-3" /> Name is too short</p>
                  ) : (
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Used to personalize your workspace and invitation.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onBlur={() => setTouched({...touched, email: true})}
                    placeholder="marcus@example.com"
                    required
                    className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${getInputStyle('email', validateEmail(formData.email))}`}
                  />
                  {touched.email && !validateEmail(formData.email) ? (
                    <p className="text-red-500 text-[11px] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider"><X className="w-3 h-3" /> Please enter a valid email address</p>
                  ) : (
                    <p className="text-neutral-400 text-xs mt-1.5 font-medium">Where we'll send your cohort invite and access link. No spam.</p>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="w-full mt-4 bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-900/20 active:scale-[0.98] group"
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
                className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                Back
              </button>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-950 mb-2">Tell us about your business.</h3>
              <p className="text-neutral-500 mb-8 text-lg">This helps us tailor CoachOS for you.</p>

              <form onSubmit={handleNext} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                  <div>
                    <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Coaching Niche</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.niche}
                        onChange={(e) => { setFormData({...formData, niche: e.target.value}); setTouched({...touched, niche: true}); }}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
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
                    <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Active Clients</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.clientCount}
                        onChange={(e) => { setFormData({...formData, clientCount: e.target.value}); setTouched({...touched, clientCount: true}); }}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
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
                    <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Avg Price / Month</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.price}
                        onChange={(e) => { setFormData({...formData, price: e.target.value}); setTouched({...touched, price: true}); }}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
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
                    <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Coaching Experience</label>
                    <div className="relative">
                      <select 
                        required 
                        value={formData.experience}
                        onChange={(e) => { setFormData({...formData, experience: e.target.value}); setTouched({...touched, experience: true}); }}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
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
                  className="w-full mt-6 bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-900/20 active:scale-[0.98] group relative overflow-hidden"
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
              <button onClick={() => setStep(2)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-950 mb-2">See whether CoachOS is a fit for your business.</h3>
              <p className="text-neutral-500 mb-8 text-lg">Answer a few more questions so we can understand your workflow, identify where CoachOS can create the most leverage, and review whether a founding build slot makes sense.</p>
              
              <label className="block text-sm font-bold text-brand-900 mb-4 uppercase tracking-wide">What currently creates the most admin work in your business? (Select all that apply)</label>
              <div className="space-y-3 mb-6">
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
                      className={`w-full text-left px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${isSelected ? 'border-brand-500 bg-brand-50/50 text-brand-900 ring-2 ring-brand-500 font-bold' : 'border-neutral-200 bg-white hover:border-brand-300 text-brand-950 font-medium'}`}
                    >
                      <span className="capitalize text-base">{opt.replace('-', ' ')}</span>
                    </button>
                  );
                })}
              </div>
              <button 
                onClick={() => setStep(4)}
                disabled={formData.adminWork.length === 0}
                className="w-full bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] disabled:opacity-50 group"
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
              <button onClick={() => setStep(3)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-sm font-bold text-brand-900 mb-4 uppercase tracking-wide">Which tools do you currently use? (Select all that apply)</label>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Instagram DMs', 'WhatsApp', 'Google Sheets', 'Notion', 'Calendly', 'Stripe', 'Trainerize', 'TrueCoach', 'Zoom', 'Typeform', 'Other'].map(opt => {
                  const isSelected = formData.tools.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        const newTools = isSelected ? formData.tools.filter((t: string) => t !== opt) : [...formData.tools, opt];
                        setFormData({...formData, tools: newTools});
                      }}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${isSelected ? 'border-brand-500 bg-brand-50 text-brand-900 font-bold shadow-sm' : 'border-neutral-200 bg-white hover:border-brand-200 font-medium text-neutral-700'}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <button 
                onClick={() => setStep(5)}
                disabled={formData.tools.length === 0}
                className="w-full bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] disabled:opacity-50 group"
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
              <button onClick={() => setStep(4)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-sm font-bold text-brand-900 mb-4 uppercase tracking-wide">What would make CoachOS valuable enough to implement this quarter?</label>
              
              <textarea
                value={formData.valuableImplementation}
                onChange={(e) => setFormData({...formData, valuableImplementation: e.target.value})}
                placeholder="e.g. Having all my client check-ins and payments in one dashboard without hopping between apps..."
                className="w-full h-40 px-5 py-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-brand-950 resize-none shadow-sm mb-6"
              />
              <button 
                onClick={() => setStep(6)}
                disabled={formData.valuableImplementation.trim().length < 5}
                className="w-full bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] disabled:opacity-50 group"
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
              <button onClick={() => setStep(5)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-sm font-bold text-brand-900 mb-4 uppercase tracking-wide">Are you actively investing in systems to grow your coaching business?</label>
              
              <div className="space-y-3">
                {['Yes, ready to improve operations', 'Exploring options', 'Not right now'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setFormData({...formData, investingInSystems: opt}); setStep(7); }}
                    className={`w-full text-left px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${formData.investingInSystems === opt ? 'border-brand-500 bg-brand-50/50 text-brand-900 ring-2 ring-brand-500' : 'border-neutral-200 bg-white hover:border-brand-300 text-brand-950'}`}
                  >
                    <span className="text-base font-medium">{opt}</span>
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
              <button onClick={() => setStep(6)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <label className="block text-sm font-bold text-brand-900 mb-4 uppercase tracking-wide">If selected, when would you want to begin?</label>
              
              <div className="space-y-3">
                {['This month', 'Next 30–60 days', 'Later this year'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setFormData({...formData, startTimeline: opt}); setStep(8); }}
                    className={`w-full text-left px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 shadow-sm transition-all ${formData.startTimeline === opt ? 'border-brand-500 bg-brand-50/50 text-brand-900 ring-2 ring-brand-500' : 'border-neutral-200 bg-white hover:border-brand-300 text-brand-950'}`}
                  >
                    <span className="text-base font-medium">{opt}</span>
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
              <button onClick={() => setStep(7)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-950 mb-3">Review your application.</h3>
              <p className="text-neutral-500 mb-6 text-sm sm:text-base leading-relaxed">
                Please double-check your responses before proceeding to the founding reservation.
              </p>

              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-6 mb-6 space-y-4">
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
                  <div key={i} className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 ${i !== 0 ? 'pt-4 border-t border-neutral-100' : ''}`}>
                    <span className="text-sm font-bold text-neutral-400 uppercase tracking-wide shrink-0">{item.label}</span>
                    <span className="text-sm sm:text-base font-medium text-brand-950 text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setStep(9)}
                className="w-full bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] group"
              >
                Submit for Founding Fit Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
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
              className="relative z-10 flex flex-col items-center justify-center text-center py-12"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-brand-200 rounded-full animate-ping opacity-20"></div>
                <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center border border-brand-200 relative z-10 shadow-lg">
                  <Loader2 className="w-10 h-10 text-brand-900 animate-spin" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-brand-950 mb-3">{analyzingStatus}</h3>
              <p className="text-neutral-500 text-sm max-w-[250px] mx-auto">Please wait while we review your profile against our current cohort requirements.</p>
            </motion.div>
          )}

          {/* STEP 10: Reservation */}
          {step === 10 && (
            <motion.div
              key="step10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <button onClick={() => setStep(8)} className="text-sm font-semibold text-neutral-400 hover:text-brand-900 mb-5 flex items-center gap-1 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/50 rounded-full mix-blend-multiply blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Founding Fit Approved</span>
                </div>
                <p className="text-sm font-medium text-emerald-900 leading-relaxed relative z-10">
                  Based on your use of {formData.tools.slice(0, 2).join(' & ')} and your focus on {formData.adminWork.slice(0, 2).join(' & ').replace(/-/g, ' ')}, CoachOS will significantly streamline your operations.
                </p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-950">Secure your position.</h3>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>
                  Capacity Limited
                </span>
              </div>
              
              <p className="text-neutral-500 mb-6 text-sm sm:text-base leading-relaxed">
                Due to the hands-on nature of our founding builds, capacity is strictly capped. We are currently reviewing a high volume of applications. Reserving your spot now is the only way to guarantee placement in the current cohort and lock in the 40% lifetime discount.
              </p>

              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-900 shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-950 text-lg leading-tight mb-0.5">Founding Reservation</h4>
                    <p className="text-sm text-neutral-500">Secure your position in the build queue</p>
                  </div>
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-neutral-700">Reservation Deposit</span>
                  <span className="text-xl font-black text-brand-900">${FOUNDING_DEPOSIT_AMOUNT} {FOUNDING_DEPOSIT_CURRENCY}</span>
                </div>
                
                <ul className="space-y-3 px-1 text-sm text-neutral-600 mb-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="leading-snug font-medium text-neutral-700">Fully credited toward your final CoachOS build</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="leading-snug text-neutral-600">Final scope and timeline agreed after review call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                    <span className="leading-snug text-neutral-500">No obligation to proceed if not a suitable fit</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6 flex items-start gap-3 p-4 bg-brand-50/50 rounded-xl border border-brand-100 transition-colors hover:bg-brand-50">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-brand-300 text-brand-900 focus:ring-brand-500 cursor-pointer shrink-0"
                />
                <label htmlFor="terms" className="text-sm text-brand-900 leading-snug cursor-pointer select-none">
                  I agree to the <a href="#privacy" className="font-bold underline hover:text-brand-700 transition-colors" onClick={(e) => e.stopPropagation()}>Privacy Policy</a> and <a href="#terms" className="font-bold underline hover:text-brand-700 transition-colors" onClick={(e) => e.stopPropagation()}>Terms of Service</a>, and understand the ${FOUNDING_DEPOSIT_AMOUNT} reservation deposit is <strong className="font-extrabold">non-refundable</strong>.
                </label>
              </div>

              <div className="space-y-4">
                <motion.button 
                  onClick={(e) => handleSubmit(e, true)}
                  disabled={loading || !termsAccepted}
                  animate={{
                    boxShadow: (loading || !termsAccepted) ? "none" : [
                      "0 0 0px 0px rgba(20, 83, 45, 0.2)",
                      "0 0 30px 5px rgba(20, 83, 45, 0.5)",
                      "0 0 0px 0px rgba(20, 83, 45, 0.2)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin text-white/80" />
                    ) : (
                      <>
                        Continue to Checkout
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
                <button 
                  onClick={(e) => handleSubmit(e, false)}
                  disabled={loading}
                  className="w-full bg-white text-neutral-600 px-8 py-4 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-all border border-neutral-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-neutral-400" />
                  ) : (
                    "Submit application without reserving"
                  )}
                </button>
              </div>

              {submitError && (
                <p className="text-red-500 text-sm font-medium mt-4 text-center">{submitError}</p>
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
              <h3 className="text-2xl font-extrabold tracking-tight text-brand-950 mb-6 text-center">Complete your reservation</h3>
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-2 sm:p-6 mb-6">
                <WhopElements elements={whopElements}>
                  <Checkout plan="plan_6zWK3keLNhOWg">
                    <CheckoutElement />
                  </Checkout>
                </WhopElements>
              </div>

              <button 
                onClick={(e) => handleSubmit(e, false)}
                disabled={loading}
                className="w-full bg-transparent text-neutral-500 px-8 py-4 rounded-xl text-sm font-medium hover:bg-neutral-100 hover:text-neutral-700 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-neutral-400" />
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
            <div className="bg-white p-2.5 rounded-[2rem] shadow-[0_0_40px_rgba(19,78,42,0.2)] border border-brand-100 relative z-10 transition-transform duration-500 group-hover:scale-105">
              <div className="bg-gradient-to-b from-brand-900 to-brand-950 p-6 rounded-[1.5rem] flex flex-col items-center justify-center gap-3 w-40 h-40 relative overflow-hidden border border-brand-800 shadow-inner">
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/10 to-transparent rounded-b-full opacity-50"></div>
                
                <Settings className="w-8 h-8 text-brand-300 mb-1 animate-[spin_8s_linear_infinite] drop-shadow-md" />
                <Logo className="h-7 text-white z-10 drop-shadow-md" inverted />
                
                <div className="mt-2 bg-brand-950/80 border border-brand-700/50 rounded-full px-3 py-1 shadow-inner backdrop-blur-sm z-10">
                  <span className="text-brand-200 text-[10px] font-bold uppercase tracking-wider">Your OS</span>
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
    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200/60 flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,78,42,0.05)_0%,transparent_70%)]"></div>
      
      {/* Animated Elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 glass p-4 rounded-xl shadow-xl w-64 z-20"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 bg-pink-100 text-pink-600 rounded flex items-center justify-center">
            <MessageCircle className="w-3 h-3" />
          </div>
          <span className="text-xs font-bold text-neutral-400">Instagram DM</span>
        </div>
        <p className="text-sm font-medium text-neutral-900">"Hey! Do you have any spots left for 1:1 coaching?"</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-6 glass p-4 rounded-xl shadow-xl w-64 z-30"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center">
            <CheckSquare className="w-3 h-3" />
          </div>
          <span className="text-xs font-bold text-neutral-400">WhatsApp</span>
        </div>
        <p className="text-sm font-medium text-neutral-900">"Did you see my form video? Is my back rounding?"</p>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-50 border border-red-200 p-5 rounded-2xl shadow-2xl w-72 z-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-red-900">Double Booked!</p>
            <p className="text-xs text-red-600">Calendly conflict detected</p>
          </div>
        </div>
        <div className="flex -space-x-2">
           <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">JS</div>
           <div className="w-6 h-6 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700">AK</div>
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
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-brand-900 mb-4">
            Why coaches are switching
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stop paying for disconnected tools that create friction for your clients and more admin work for you.
          </p>
        </div>

        <div className="relative rounded-3xl border border-neutral-200 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
          
          <div className="grid grid-cols-3 border-b border-neutral-100 bg-neutral-50/50">
            <div className="p-4 sm:p-8 flex items-end">
              <span className="text-xs sm:text-sm font-bold text-neutral-500 uppercase tracking-wider">
                Area of Focus
              </span>
            </div>
            <div className="p-4 sm:p-8 text-center flex flex-col items-center justify-end border-l border-neutral-100">
              <span className="text-sm sm:text-base font-bold text-neutral-700 mb-1">Standard Apps</span>
              <span className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-widest">(The Old Way)</span>
            </div>
            <div className="p-4 sm:p-8 text-center flex flex-col items-center justify-end relative border-l border-brand-100 bg-brand-50/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500"></div>
              <span className="text-lg sm:text-2xl font-black text-brand-950 tracking-tight flex items-center justify-center gap-1.5 sm:gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" /> CoachOS
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-brand-700 uppercase tracking-widest mt-1">(Your Own System)</span>
            </div>
          </div>
          
          <div className="divide-y divide-neutral-100">
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 group transition-colors duration-300 hover:bg-neutral-50/50">
                <div className="p-4 sm:p-6 text-sm sm:text-base font-semibold text-neutral-800 flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-6 text-sm sm:text-base text-neutral-500 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-l border-neutral-100 group-hover:opacity-50 transition-opacity duration-300">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 shrink-0" />
                  <span className="leading-snug">{row.standard}</span>
                </div>
                <div className="p-4 sm:p-6 text-sm sm:text-base font-bold text-brand-900 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-l border-brand-100 bg-brand-50/50 group-hover:bg-brand-100/50 transition-colors duration-300 relative">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="leading-snug">{row.coachos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
