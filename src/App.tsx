import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { 
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
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
                <p className="text-sm text-neutral-500 font-medium">Built for coaches who want systems, not stress.</p>
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

        {/* 6. Social Proof */}
        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-900 mb-4">
              Join 450+ coaches on the founding waitlist.
            </h2>
            <p className="text-lg text-neutral-600 mb-12">Built with direct input from independent coaches tired of the chaos.</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 text-left">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-brand-800 mb-6 italic leading-relaxed">"Finally, a system that matches how I actually work. I was drowning in Google Sheets and missed IG messages. This changes everything."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">Sarah M.</div>
                    <div className="text-neutral-500 text-sm">Business Coach</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 text-left">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-brand-800 mb-6 italic leading-relaxed">"No more losing leads in DMs. Everything is in one place and my clients think I have an entire team behind me now."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-700 font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">Marcus T.</div>
                    <div className="text-neutral-500 text-sm">Fitness Coach</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Founding Offer */}
        <section id="waitlist" className="py-24 bg-white scroll-mt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-900 rounded-3xl p-8 lg:p-12 text-center text-white border border-brand-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Limited spots for founding coaches
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8">
                  Founding Waitlist Open
                </h2>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-left max-w-lg mx-auto">
                  <ul className="space-y-4 flex-1">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      <span>Early access before public launch</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      <span>Founding-member pricing for life</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      <span>Direct input on features & roadmap</span>
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

function HeroDashboard() {
  return (
    <div className="h-[600px] md:h-auto md:aspect-[16/9] bg-neutral-50 rounded-2xl shadow-[0_20px_50px_rgba(19,78,42,0.15)] border border-neutral-200/60 overflow-hidden flex relative backdrop-blur-sm">
      {/* Sidebar */}
      <div className="w-14 sm:w-16 md:w-64 bg-brand-950 text-brand-200 flex flex-col p-2 sm:p-4 shadow-xl z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
        <div className="hidden md:flex items-center mb-8 mt-2 px-2 relative z-10">
          <Logo className="h-8 text-white" inverted />
        </div>
        <div className="flex md:hidden items-center justify-center mb-8 mt-2 text-white relative z-10">
          <Logo className="h-8 text-white" inverted />
        </div>

        <nav className="space-y-1.5 flex-1 relative z-10">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Users, label: "Clients" },
            { icon: Calendar, label: "Schedule" },
            { icon: Target, label: "Programs" },
            { icon: MessageCircle, label: "Messages", badge: "3" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${item.active ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50' : 'hover:bg-brand-900 hover:text-white'}`}>
              <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-white' : 'text-brand-400'}`} />
              <span className="hidden md:block font-medium text-sm">{item.label}</span>
              {item.badge && <span className="hidden md:flex ml-auto bg-brand-400 text-brand-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">{item.badge}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden text-left relative z-0">
        {/* Topbar */}
        <div className="h-16 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="hidden md:flex items-center gap-2 text-neutral-400 bg-neutral-100/80 px-3 py-1.5 rounded-md w-64 border border-neutral-200/50 transition-colors hover:bg-neutral-100">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search clients...</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="relative cursor-pointer group">
              <Bell className="w-5 h-5 text-neutral-400 group-hover:text-brand-600 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105">
               <span className="text-xs font-bold text-white">ME</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto bg-neutral-50/50 h-full">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-brand-950 tracking-tight">Good morning, Coach</h2>
              <p className="text-neutral-500 text-sm mt-1">Here's what's happening with your business today.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-white border border-neutral-200 text-brand-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm">
              <Calendar className="w-4 h-4" />
              <span>Today</span>
              <ChevronDown className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200/60 flex flex-col group hover:border-brand-200 transition-colors cursor-default relative overflow-hidden">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">Monthly Revenue</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-brand-950">$8,450</p>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">+12%</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 z-10">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="h-12 w-full mt-2 -ml-2 -mb-2 relative z-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10b981" 
                      strokeWidth={2.5} 
                      dot={false}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200/60 flex items-center justify-between group hover:border-brand-200 transition-colors cursor-default">
              <div>
                <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">Active Clients</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-brand-950">32</p>
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded-md">+3</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200/60 flex items-center justify-between group hover:border-brand-200 transition-colors cursor-default">
              <div>
                <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">Pending Leads</p>
                <p className="text-2xl font-bold text-brand-950">4</p>
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
                <Link2 className="w-4 h-4 text-brand-600" />
                Your Connected Tools
              </h3>
              <button className="text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors">Manage Integrations</button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {/* Stripe */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-md bg-[#635BFF] flex items-center justify-center text-white shrink-0">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-700">Stripe</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 shadow-[0_0_4px_rgba(16,185,129,0.8)]" title="Connected"></div>
              </div>

              {/* Calendly */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-md bg-[#006BFF] flex items-center justify-center text-white shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-700">Calendly</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 shadow-[0_0_4px_rgba(16,185,129,0.8)]" title="Connected"></div>
              </div>

              {/* Zoom */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-md bg-[#2D8CFF] flex items-center justify-center text-white shrink-0">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-700">Zoom</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 shadow-[0_0_4px_rgba(16,185,129,0.8)]" title="Connected"></div>
              </div>
              
              {/* MyFitnessPal / Data */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-default">
                <div className="w-6 h-6 rounded-md bg-[#0066EE] flex items-center justify-center text-white shrink-0">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-700">MyFitnessPal</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 shadow-[0_0_4px_rgba(16,185,129,0.8)]" title="Connected"></div>
              </div>
            </div>
          </div>

          {/* Bottom Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Priorities */}
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-brand-950 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-600" />
                  Today's Priorities
                </h3>
                <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded-md">2 remaining</span>
              </div>
              <div className="space-y-2">
                {[
                  { title: "Check-in: Sarah's Week 4 Form Video", time: "10:00 AM", done: false, type: "review" },
                  { title: "Send onboarding packet to Marcus", time: "1:00 PM", done: false, type: "admin" },
                  { title: "Discovery Call with Emma T.", time: "3:30 PM", done: true, type: "call" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer group border border-transparent hover:border-neutral-100">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors flex-shrink-0 ${task.done ? 'bg-brand-500 border-brand-500' : 'border-neutral-300 group-hover:border-brand-500'}`}>
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

            {/* Pipeline preview */}
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-5">
              <h3 className="font-bold text-brand-950 mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-500" />
                Recent Activity
              </h3>
              <div className="space-y-5 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded-lg border border-neutral-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold text-brand-900">Alex M.</p>
                      <span className="text-[10px] text-neutral-400 font-medium">Just now</span>
                    </div>
                    <p className="text-xs text-neutral-600">"Hey coach, do you have spots open for 1:1?"</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-emerald-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded-lg border border-neutral-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold text-brand-900">Jessica L.</p>
                      <span className="text-[10px] text-neutral-400 font-medium">2h ago</span>
                    </div>
                    <p className="text-xs text-neutral-600">Uploaded 3 new form check videos.</p>
                  </div>
                </div>
              </div>
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

function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    niche: '',
    clientCount: '',
    price: '',
    experience: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
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
      <div className="flex items-center justify-center gap-3 mb-8 max-w-xs mx-auto">
        <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step >= 1 ? 'bg-brand-900 shadow-[0_0_8px_rgba(19,78,42,0.4)]' : 'bg-neutral-200'}`}></div>
        <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-brand-900 shadow-[0_0_8px_rgba(19,78,42,0.4)]' : 'bg-neutral-200'}`}></div>
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
                    placeholder="Coach Marcus"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-900 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="marcus@example.com"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950"
                  />
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
                        onChange={(e) => setFormData({...formData, niche: e.target.value})}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your niche...</option>
                        <option value="fitness">Fitness & Health</option>
                        <option value="business">Business & Career</option>
                        <option value="life">Life Coaching</option>
                        <option value="nutrition">Nutrition</option>
                        <option value="sports">Sports Performance</option>
                        <option value="other">Other</option>
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
                        onChange={(e) => setFormData({...formData, clientCount: e.target.value})}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select count...</option>
                        <option value="0-10">0 - 10 clients</option>
                        <option value="11-30">11 - 30 clients</option>
                        <option value="31-50">31 - 50 clients</option>
                        <option value="50+">50+ clients</option>
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
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select pricing...</option>
                        <option value="<500">Under $500</option>
                        <option value="500-999">$500 - $999</option>
                        <option value="1000-2499">$1,000 - $2,499</option>
                        <option value="2500+">$2,500+</option>
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
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all bg-white text-brand-950 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select experience...</option>
                        <option value="starting">Just starting</option>
                        <option value="1-3">1 - 3 years</option>
                        <option value="3-5">3 - 5 years</option>
                        <option value="5+">5+ years</option>
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




function CustomBuiltVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-16 flex items-center justify-center">
      {/* Background connecting lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
           <path d="M 150 100 Q 400 50 400 200" fill="none" stroke="#134e2a" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
           <path d="M 150 300 Q 400 350 400 200" fill="none" stroke="#134e2a" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
           <path d="M 650 100 Q 400 50 400 200" fill="none" stroke="#134e2a" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
           <path d="M 650 300 Q 400 350 400 200" fill="none" stroke="#134e2a" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
           <path d="M 400 50 L 400 200" fill="none" stroke="#134e2a" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
           <path d="M 400 350 L 400 200" fill="none" stroke="#134e2a" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 5s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float 6s ease-in-out infinite 2s; }
      `}} />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Top Tools */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl px-4 md:px-0 mb-8">
           <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 animate-float-1">
             <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
               <Video className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-neutral-500">Video Calls</span>
           </div>
           
           <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 animate-float-2 mt-[-40px]">
             <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
               <CreditCard className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-neutral-500">Payments</span>
           </div>

           <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 animate-float-3">
             <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
               <Calendar className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-neutral-500">Scheduling</span>
           </div>
        </div>

        {/* Center Hub */}
        <div className="relative group cursor-default">
           <div className="absolute inset-0 bg-brand-500 rounded-[2rem] filter blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
           <div className="bg-brand-900 border-4 border-white p-8 rounded-[2rem] shadow-2xl relative z-10 flex flex-col items-center text-center transform group-hover:scale-105 transition-transform duration-500">
             <Settings className="w-8 h-8 text-brand-300 mb-3 animate-spin-slow" />
             <Logo className="h-8 text-white mb-2" inverted={true} />
             <p className="text-brand-100 text-sm font-medium">Your Custom Hub</p>
             <div className="mt-4 bg-brand-800 rounded-lg px-4 py-2 border border-brand-700">
                <p className="text-xs text-brand-200">100% Tailored to you.</p>
             </div>
           </div>
        </div>

        {/* Bottom Tools */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl px-4 md:px-0 mt-8">
           <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 animate-float-3">
             <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
               <Database className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-neutral-500">Client Data</span>
           </div>
           
           <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 animate-float-1 mt-[40px]">
             <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center">
               <Mail className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-neutral-500">Messaging</span>
           </div>

           <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-200/60 flex flex-col items-center gap-2 animate-float-2">
             <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center">
               <Smartphone className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-neutral-500">Custom App</span>
           </div>
        </div>
      </div>
    </div>
  );
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
