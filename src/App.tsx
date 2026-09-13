import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { 
  Heart,
  CheckCircle2, 
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
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

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
                  Join the founding waitlist
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <div className="flex flex-col items-center gap-2 mt-1">
                  <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-neutral-200/90 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-bold text-brand-900 tracking-tight">
                      <span className="text-emerald-700 font-extrabold">487 / 500</span> Founding Spots Claimed
                    </span>
                    <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-600 fill-amber-500" />
                      13 Left
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                    Batch 1 founding rate locks in <strong className="text-brand-950 font-bold">lifetime 40% discount</strong> before public rollout.
                  </p>
                </div>
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

        {/* 6. Founding Cohort Momentum (No fake testimonials, real FOMO) */}
        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold mb-4 tracking-wide uppercase">
                <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                Batch 1 Enrollment • 97% Full
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-brand-950 mb-4">
                487 coaches have already secured their founding spots.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To guarantee hands-on dashboard setup and white-glove tool migration for every coach, Batch 1 is strictly capped at 500 members.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Capacity Card */}
              <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Batch 1 Allocation</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200/60">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                      13 Spots Left
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-brand-950 tracking-tight">487</span>
                    <span className="text-xl text-neutral-400 font-semibold">/ 500 claimed</span>
                  </div>
                  <p className="text-sm text-neutral-500 mb-6 font-medium">97.4% of founding spots are taken. Capped strictly at 500.</p>

                  {/* Progress bar */}
                  <div className="w-full bg-neutral-100 rounded-full h-3.5 p-0.5 overflow-hidden mb-6 border border-neutral-200/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '97.4%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-brand-700 via-emerald-600 to-amber-500 h-full rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 animate-pulse rounded-full"></div>
                    </motion.div>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-100/80 text-left mb-4">
                    <p className="text-xs font-bold text-brand-900 uppercase tracking-wide mb-1">What happens when Batch 1 closes?</p>
                    <p className="text-sm text-brand-800 leading-relaxed">
                      Batch 2 will be placed on a delayed general queue at full retail pricing ($199/mo) with standard self-serve onboarding.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1 font-semibold text-emerald-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified waitlist tally
                  </span>
                  <span>Updated live today</span>
                </div>
              </div>

              {/* Founding Privileges */}
              <div className="lg:col-span-6 bg-brand-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    Irreversible Founding Perks
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-6">Why coaches are locking their spot now:</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Lifetime 40% Pricing Lock</p>
                        <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">Grandfathered founding rate locked permanently for the life of your account.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-500/30">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">VIP Priority Queue (Week 1 Access)</p>
                        <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">Skip the public rollout wait and get immediate access when the gates open.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/30">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Bespoke 1-on-1 Dashboard Setup</p>
                        <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">Our engineering team helps configure your workflows, pipelines, and integrations.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                  <button 
                    onClick={scrollToWaitlist}
                    className="w-full bg-white text-brand-950 font-bold py-3.5 px-6 rounded-xl hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 group shadow-lg"
                  >
                    Claim 1 of the 13 Remaining Spots
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Live activity ticker banner */}
            <div className="mt-8 max-w-5xl mx-auto bg-white border border-neutral-200/80 rounded-2xl px-5 py-3.5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-500 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-brand-950">Recent Waitlist Joins:</span>
                <span className="hidden md:inline text-neutral-600">Fitness Coach (Miami, FL) • Business Strategist (London, UK) • Nutrition Coach (Austin, TX)</span>
              </div>
              <span className="font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 whitespace-nowrap">
                ⚡ 23 joined in the last 24h
              </span>
            </div>
          </div>
        </section>

        {/* 7. Founding Offer */}
        <section id="waitlist" className="py-24 bg-white scroll-mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-900 rounded-3xl p-8 lg:p-12 text-center text-white border border-brand-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-6 border border-amber-400/30">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Batch 1 Closing Soon • 13 Spots Remaining
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
                  Claim Your Founding Spot
                </h2>
                <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
                  Join 487 coaches on the founding cohort. Lock in lifetime preferential pricing and skip the public rollout queue.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-left max-w-lg mx-auto">
                  <ul className="space-y-4 flex-1">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-medium">VIP Week 1 access before public launch</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-medium">Founding-member 40% discount locked for life</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-medium">1-on-1 bespoke dashboard setup assistance</span>
                    </li>
                  </ul>
                </div>

                <WaitlistForm />
              </div>
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
                Join the founding waitlist
              </button>
              <p className="text-sm text-neutral-500 font-medium">No spam. Just updates and early access.</p>
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


import { useEffect } from 'react';

const DASHBOARD_VARIANTS = [
  {
    id: 'fitness',
    name: 'Fitness & Health OS',
    theme: {
      sidebar: 'bg-emerald-950',
      primary: 'text-emerald-600',
      bg: 'bg-emerald-50',
      chart: '#10b981',
      activeMenu: 'bg-emerald-600 shadow-emerald-900/50'
    },
    menu: [
      { icon: LayoutDashboard, label: "Dashboard", active: true },
      { icon: Users, label: "Athletes" },
      { icon: Target, label: "Workouts" },
      { icon: Database, label: "Nutrition" },
      { icon: MessageCircle, label: "Messages", badge: "3" },
    ],
    metrics: { clients: '32', leads: '4' },
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'MyFitnessPal', color: '#0066EE', icon: Database },
      { name: 'TrueCoach', color: '#10B981', icon: Activity },
    ],
    priorities: [
      { title: "Check-in: Sarah's Week 4 Form Video", time: "10:00 AM", done: false },
      { title: "Update Marcus's Macro Plan", time: "1:00 PM", done: false },
      { title: "Onboarding Call with Emma", time: "3:30 PM", done: true },
    ],
    activities: [
      { name: 'Alex M.', time: 'Just now', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-100', text: '"Hey coach, macro question!"' },
      { name: 'Jessica L.', time: '2h ago', icon: Video, color: 'text-emerald-600', bg: 'bg-emerald-100', text: 'Uploaded 3 new form check videos.' },
    ]
  },
  {
    id: 'business',
    name: 'Business Coaching OS',
    theme: {
      sidebar: 'bg-slate-950',
      primary: 'text-blue-600',
      bg: 'bg-blue-50',
      chart: '#2563eb',
      activeMenu: 'bg-blue-600 shadow-blue-900/50'
    },
    menu: [
      { icon: LayoutDashboard, label: "Command Center", active: true },
      { icon: Users, label: "Clients" },
      { icon: FileText, label: "Strategy Docs" },
      { icon: Calendar, label: "Sessions" },
      { icon: MessageCircle, label: "Slack", badge: "1" },
    ],
    metrics: { clients: '14', leads: '9' },
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'Zoom', color: '#2D8CFF', icon: Video },
      { name: 'Slack', color: '#E01E5A', icon: MessageCircle },
    ],
    priorities: [
      { title: "Review Q3 Strategy for TechFlow", time: "09:00 AM", done: false },
      { title: "Send Proposal to StartupX", time: "11:30 AM", done: false },
      { title: "Mastermind Group Call", time: "2:00 PM", done: true },
    ],
    activities: [
      { name: 'David R.', time: '10m ago', icon: FileText, color: 'text-orange-600', bg: 'bg-orange-100', text: 'Signed the coaching agreement.' },
      { name: 'Sarah K.', time: '1h ago', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100', text: 'Scheduled Strategy Session for Tuesday.' },
    ]
  },
  {
    id: 'life',
    name: 'Life & Mindset OS',
    theme: {
      sidebar: 'bg-purple-950',
      primary: 'text-purple-600',
      bg: 'bg-purple-50',
      chart: '#9333ea',
      activeMenu: 'bg-purple-600 shadow-purple-900/50'
    },
    menu: [
      { icon: LayoutDashboard, label: "Overview", active: true },
      { icon: Users, label: "Journeys" },
      { icon: Heart, label: "Milestones" },
      { icon: Calendar, label: "Sessions" },
      { icon: MessageCircle, label: "Check-ins", badge: "5" },
    ],
    metrics: { clients: '21', leads: '2' },
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'Calendly', color: '#006BFF', icon: Calendar },
      { name: 'Notion', color: '#000000', icon: FileText },
    ],
    priorities: [
      { title: "Review Anna's Gratitude Journal", time: "10:30 AM", done: false },
      { title: "Prep for Group Meditation", time: "1:00 PM", done: false },
      { title: "Send Weekly Reflection Prompts", time: "4:00 PM", done: true },
    ],
    activities: [
      { name: 'Michael T.', time: '5m ago', icon: CheckSquare, color: 'text-purple-600', bg: 'bg-purple-100', text: 'Completed habit tracker for today.' },
      { name: 'Emma W.', time: '3h ago', icon: MessageCircle, color: 'text-pink-600', bg: 'bg-pink-100', text: '"The session today was eye-opening!"' },
    ]
  },
  {
    id: 'sports',
    name: 'Sports Performance OS',
    theme: {
      sidebar: 'bg-orange-950',
      primary: 'text-orange-600',
      bg: 'bg-orange-50',
      chart: '#ea580c',
      activeMenu: 'bg-orange-600 shadow-orange-900/50'
    },
    menu: [
      { icon: LayoutDashboard, label: "Locker Room", active: true },
      { icon: Users, label: "Roster" },
      { icon: Video, label: "Film Room" },
      { icon: Activity, label: "Analytics" },
      { icon: MessageCircle, label: "Comms", badge: "12" },
    ],
    metrics: { clients: '45', leads: '8' },
    tools: [
      { name: 'Stripe', color: '#635BFF', icon: CreditCard },
      { name: 'Hudl', color: '#FF5A00', icon: Video },
      { name: 'TrainHeroic', color: '#2563eb', icon: Target },
    ],
    priorities: [
      { title: "Analyze John's Sprint Mechanics", time: "08:00 AM", done: false },
      { title: "Upload Game Day Nutrition Plan", time: "11:00 AM", done: false },
      { title: "Team Zoom Call", time: "5:00 PM", done: true },
    ],
    activities: [
      { name: 'Coach Smith', time: 'Just now', icon: Video, color: 'text-orange-600', bg: 'bg-orange-100', text: 'Added new game film to folder.' },
      { name: 'Tyler B.', time: '1h ago', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-100', text: 'Logged new PR on Back Squat.' },
    ]
  }
];

function HeroDashboard() {
  const [variantIndex, setVariantIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVariantIndex((prev) => (prev + 1) % DASHBOARD_VARIANTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const variant = DASHBOARD_VARIANTS[variantIndex];

  return (
    <div className="flex flex-col gap-3 relative">
      <div className="flex justify-center mb-2 z-20">
        <div className="bg-white/80 backdrop-blur border border-neutral-200 shadow-sm rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Viewing:</span>
          <AnimatePresence mode="wait">
            <motion.span 
              key={variant.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className={`text-sm font-extrabold ${variant.theme.primary}`}
            >
              {variant.name}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="h-[600px] md:h-auto md:aspect-[16/9] bg-neutral-50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-neutral-200/60 overflow-hidden flex relative backdrop-blur-sm transition-colors duration-700">
        
        {/* Sidebar */}
        <div className={`w-14 sm:w-16 md:w-64 text-brand-200 flex flex-col p-2 sm:p-4 shadow-xl z-10 relative transition-colors duration-700 ${variant.theme.sidebar}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
          <div className="hidden md:flex items-center mb-8 mt-2 px-2 relative z-10">
            <Logo className="h-8 text-white" inverted />
          </div>
          <div className="flex md:hidden items-center justify-center mb-8 mt-2 text-white relative z-10">
            <Logo className="h-8 text-white" inverted />
          </div>

          <nav className="space-y-1.5 flex-1 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={variant.id + '-menu'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-1.5"
              >
                {variant.menu.map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${item.active ? `text-white ${variant.theme.activeMenu}` : 'hover:bg-white/10 hover:text-white'}`}>
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-white' : 'opacity-60'}`} />
                    <span className="hidden md:block font-medium text-sm">{item.label}</span>
                    {item.badge && <span className="hidden md:flex ml-auto bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">{item.badge}</span>}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </nav>
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden text-left relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={variant.id + '-content'}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col overflow-hidden"
            >
              {/* Topbar */}
              <div className="h-16 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
                <div className="hidden md:flex items-center gap-2 text-neutral-400 bg-neutral-100/80 px-3 py-1.5 rounded-md w-64 border border-neutral-200/50 transition-colors hover:bg-neutral-100">
                  <Search className="w-4 h-4" />
                  <span className="text-sm">Search clients...</span>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <div className="relative cursor-pointer group">
                    <Bell className="w-5 h-5 text-neutral-400 group-hover:text-brand-600 transition-colors" />
                    <div className={`absolute top-0 right-0 w-2 h-2 rounded-full border-2 border-white ${variant.theme.bg.replace('50', '500')}`}></div>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105 ${variant.theme.sidebar}`}>
                     <span className="text-xs font-bold text-white">ME</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto bg-neutral-50/50 h-full flex-1">
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                  <div className="sm:col-span-1 bg-white p-5 rounded-xl shadow-sm border border-neutral-200/60 flex flex-col justify-between group hover:border-brand-200 transition-colors relative overflow-hidden">
                    <div className="flex items-start justify-between relative z-10">
                      <div>
                        <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">MRR (Mockup)</p>
                        <p className="text-2xl font-bold text-brand-950">$8,450</p>
                      </div>
                      <div className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${variant.theme.bg} ${variant.theme.primary}`}>
                        <TrendingUp className="w-3 h-3" />
                        +12%
                      </div>
                    </div>
                    <div className="h-12 w-full mt-2 -ml-2 -mb-2 relative z-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke={variant.theme.chart}
                            strokeWidth={2.5} 
                            dot={false}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200/60 flex items-center justify-between group hover:border-brand-200 transition-colors">
                    <div>
                      <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">Active Clients</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold text-brand-950">{variant.metrics.clients}</p>
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${variant.theme.bg} ${variant.theme.primary}`}>+3</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${variant.theme.bg} ${variant.theme.primary}`}>
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200/60 flex items-center justify-between group hover:border-brand-200 transition-colors">
                    <div>
                      <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">Pending Leads</p>
                      <p className="text-2xl font-bold text-brand-950">{variant.metrics.leads}</p>
                    </div>
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Connected Tools */}
                <div className="mb-6 bg-white rounded-xl shadow-sm border border-neutral-200/60 p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-brand-950 flex items-center gap-2">
                      <Link2 className={`w-4 h-4 ${variant.theme.primary}`} />
                      Your Connected Tools
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {variant.tools.map((tool, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center text-white shrink-0" style={{ backgroundColor: tool.color }}>
                          <tool.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-neutral-700">{tool.name}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 shadow-[0_0_4px_rgba(16,185,129,0.8)]"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Priorities */}
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-brand-950 flex items-center gap-2">
                        <CheckSquare className={`w-4 h-4 ${variant.theme.primary}`} />
                        Today's Priorities
                      </h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-md ${variant.theme.bg} ${variant.theme.primary}`}>2 remaining</span>
                    </div>
                    <div className="space-y-2">
                      {variant.priorities.map((task, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors border border-transparent">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors flex-shrink-0 ${task.done ? variant.theme.sidebar + ' border-transparent text-white' : 'border-neutral-300'}`}>
                            {task.done && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${task.done ? 'text-neutral-400 line-through' : 'text-brand-900'}`}>{task.title}</p>
                            <p className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3" />
                              {task.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-5">
                    <h3 className="font-bold text-brand-950 mb-4 flex items-center gap-2">
                      <Activity className={`w-4 h-4 ${variant.theme.primary}`} />
                      Recent Activity
                    </h3>
                    <div className="space-y-5 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
                      {variant.activities.map((act, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${act.bg} ${act.color}`}>
                            <act.icon className="w-4 h-4" />
                          </div>
                          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded-lg border border-neutral-100 bg-white shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-bold text-brand-900">{act.name}</p>
                              <span className="text-[10px] text-neutral-400 font-medium">{act.time}</span>
                            </div>
                            <p className="text-xs text-neutral-600">{act.text}</p>
                          </div>
                        </div>
                      ))}
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

function WaitlistForm() {
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
            experience: parsed.formData.experience || ''
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
      experience: ''
    };
  });

  const [step, setStep] = useState(() => {
    try {
      const saved = localStorage.getItem(WAITLIST_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.step === 'number') {
          return parsed.step === 2 ? 2 : 1;
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    return 1;
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!submitted) {
      try {
        localStorage.setItem(
          WAITLIST_STORAGE_KEY,
          JSON.stringify({ formData, step })
        );
      } catch {
        // Ignore storage errors
      }
    }
  }, [formData, step, submitted]);

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
  };

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
    setTouched({ ...touched, name: true, email: true });
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://hook.us2.make.com/say8pq8wovhi7o6i4lrp95y7ch64p89i', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: window.location.href
        }),
      });
      
      if (!response.ok) {
        // Specifically catch Make.com's "scenario off" error or other server errors
        const text = await response.text();
        throw new Error(text || 'Something went wrong. Please try again.');
      }
      
      setSubmitted(true);
      try {
        localStorage.removeItem(WAITLIST_STORAGE_KEY);
      } catch {
        // Ignore
      }
      
      // Trigger confetti animation
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#134e2a', '#10b981', '#fbbf24', '#ffffff'],
        disableForReducedMotion: true
      });
      
    } catch (error: any) {
      console.error('Error submitting to waitlist:', error);
      setSubmitError(error.message || 'Failed to connect. Please check your connection and try again.');
    } finally {
      setLoading(false);
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
        <h3 className="text-3xl font-extrabold tracking-tight text-brand-950 mb-3">You're on the list.</h3>
        <p className="text-brand-800 text-lg">We'll be in touch soon with early access details for {formData.name || 'you'}.</p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full text-left">
      {/* Progress Header */}
      <div className="mb-6 max-w-sm mx-auto">
        <div className="flex justify-between items-center text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
          <span className={step === 1 ? "text-brand-900 font-extrabold" : "text-neutral-500"}>1. Contact Info</span>
          <span className={step === 2 ? "text-brand-900 font-extrabold" : "text-neutral-400"}>2. Business Profile</span>
        </div>
        <div className="w-full bg-neutral-200/80 rounded-full h-2 p-0.5 overflow-hidden">
          <motion.div 
            className="h-full bg-brand-900 rounded-full"
            initial={false}
            animate={{ width: step === 1 ? '50%' : '100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-xl border border-neutral-200/60 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(19,78,42,0.08)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <AnimatePresence mode="wait">
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
                  {touched.name && formData.name.trim().length < 2 && (
                    <p className="text-red-500 text-[11px] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider"><X className="w-3 h-3" /> Name is too short</p>
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
                  {touched.email && !validateEmail(formData.email) && (
                    <p className="text-red-500 text-[11px] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider"><X className="w-3 h-3" /> Please enter a valid email address</p>
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

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full mt-6 bg-brand-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-900/20 active:scale-[0.98] disabled:opacity-80 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
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

        <div className="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-neutral-100 border-b border-neutral-200">
            <div className="p-4 sm:p-6 font-bold text-neutral-900 flex items-center">Feature</div>
            <div className="p-4 sm:p-6 font-bold text-neutral-500 text-center border-l border-neutral-200">Standard Apps</div>
            <div className="p-4 sm:p-6 font-extrabold text-brand-900 text-center border-l border-neutral-200 bg-brand-50/50">CoachOS</div>
          </div>
          
          <div className="divide-y divide-neutral-100">
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 transition-colors hover:bg-neutral-50/50">
                <div className="p-4 sm:p-6 text-sm sm:text-base font-semibold text-neutral-900 flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-6 text-sm sm:text-base text-neutral-500 text-center border-l border-neutral-200 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <X className="w-5 h-5 text-neutral-400 shrink-0 hidden sm:block" />
                  <span>{row.standard}</span>
                </div>
                <div className="p-4 sm:p-6 text-sm sm:text-base font-medium text-brand-900 text-center border-l border-neutral-200 bg-brand-50/30 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 hidden sm:block" />
                  <span>{row.coachos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
