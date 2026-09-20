import React, { useState, useMemo } from 'react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  Users, 
  HelpCircle,
  Clock,
  CheckCircle2,
  Lock,
  Calculator,
  ChevronRight,
  Info,
  ChevronDown
} from 'lucide-react';
import { GlowingBorderButton } from './GlowingBorderButton';

export interface PricingSectionProps {
  onSelectPlan?: (tierId: string, isFounder: boolean) => void;
  onScrollToWaitlist?: () => void;
}

interface Tier {
  id: 'core' | 'growth' | 'scale' | 'custom';
  name: string;
  tagline: string;
  subtitle: string;
  isPopular?: boolean;
  normalPrice: number | 'custom';
  normalDisplay: string;
  founderDiscountDisplay: string;
  founderTotal: number | 'custom';
  founderTotalDisplay: string;
  depositCredit: number;
  founderRemaining: number | 'custom';
  founderRemainingDisplay: string;
  features: string[];
  ctaLabel: string;
  badge?: string;
}

const TIERS: Tier[] = [
  {
    id: 'core',
    name: 'Core OS',
    tagline: 'Independent Coaches',
    subtitle: 'For independent coaches who need a professional system for leads, follow-ups, tasks, and essential client management.',
    normalPrice: 1500,
    normalDisplay: '$1,500',
    founderDiscountDisplay: '-$600 (40% OFF)',
    founderTotal: 900,
    founderTotalDisplay: '$900',
    depositCredit: 250,
    founderRemaining: 650,
    founderRemainingDisplay: '$650',
    features: [
      'Branded CoachOS workspace',
      'Lead pipeline',
      'Daily priorities and follow-up queue',
      'Tasks and booked calls',
      'Basic client list',
      'One lead capture form or source',
      'Basic branding configuration'
    ],
    ctaLabel: 'Select Core OS'
  },
  {
    id: 'growth',
    name: 'Growth OS',
    tagline: 'Established Coaches',
    subtitle: 'For established coaches who need automated client workflows, payment visibility, session operations, and deeper customization.',
    isPopular: true,
    normalPrice: 2500,
    normalDisplay: '$2,500',
    founderDiscountDisplay: '-$1,000 (40% OFF)',
    founderTotal: 1500,
    founderTotalDisplay: '$1,500',
    depositCredit: 250,
    founderRemaining: 1250,
    founderRemainingDisplay: '$1,250',
    features: [
      'Everything in Core',
      'Full client profiles and notes',
      'Client check-in or session workflow',
      'Payments overview',
      'Up to 3 workflow automations',
      'Up to 2 integrations',
      'More tailored dashboard configuration'
    ],
    ctaLabel: 'Select Growth OS',
    badge: 'Most Popular'
  },
  {
    id: 'scale',
    name: 'Scale OS',
    tagline: 'Teams & Multi-Program',
    subtitle: 'For coaches with teams, multiple programs, advanced client experiences, and more complex operating requirements.',
    normalPrice: 4000,
    normalDisplay: '$4,000',
    founderDiscountDisplay: '-$1,600 (40% OFF)',
    founderTotal: 2400,
    founderTotalDisplay: '$2,400',
    depositCredit: 250,
    founderRemaining: 2150,
    founderRemainingDisplay: '$2,150',
    features: [
      'Everything in Growth',
      'Client portal or advanced client experience',
      'Advanced reporting',
      'Team roles and permissions',
      'Up to 5 workflow automations',
      'Up to 5 integrations',
      'Custom workflow architecture call and build'
    ],
    ctaLabel: 'Select Scale OS'
  },
  {
    id: 'custom',
    name: 'Custom OS',
    tagline: 'Multi-Coach & Bespoke Architecture',
    subtitle: 'For multi-coach businesses, complex migrations, specialized portals, and workflows that require a custom architecture.',
    normalPrice: 'custom',
    normalDisplay: 'From $5,000',
    founderDiscountDisplay: '40% off approved quote',
    founderTotal: 'custom',
    founderTotalDisplay: '40% off quote',
    depositCredit: 250,
    founderRemaining: 'custom',
    founderRemainingDisplay: 'Discounted quote - $250',
    features: [
      'A fully scoped custom proposal after an architecture call',
      'Specialized workflows, additional integrations, migrations, custom portals, or team requirements',
      'Dedicated solution architect & priority onboarding',
      'Custom database schema and multi-coach permissions'
    ],
    ctaLabel: 'Request Custom Scope'
  }
];

export function PricingSection({ onScrollToWaitlist }: PricingSectionProps) {
  const [pricingMode, setPricingMode] = useState<'founder' | 'standard'>('founder');
  const [mobileActiveTier, setMobileActiveTier] = useState<'core' | 'growth' | 'scale' | 'custom'>('growth');
  const [mobileViewMode, setMobileViewMode] = useState<'tabs' | 'all'>('tabs');

  // Estimator State
  const [organize, setOrganize] = useState<'Leads' | 'Clients' | 'Both' | 'Team operations'>('Both');
  const [automations, setAutomations] = useState<'0–1' | '2–3' | '4–5' | 'Custom'>('2–3');
  const [integrations, setIntegrations] = useState<'0–1' | '2–3' | '4–5' | 'Custom'>('2–3');
  const [clientPortal, setClientPortal] = useState<'Yes' | 'No'>('No');
  const [teamAccess, setTeamAccess] = useState<'Just me' | 'Small team' | 'Multi-coach'>('Just me');
  const [dataMigration, setDataMigration] = useState<'Yes' | 'No'>('No');
  const [isFounderPaid, setIsFounderPaid] = useState<'Yes' | 'No'>('Yes');

  // Memoized Estimator recommendation logic
  const rec = useMemo(() => {
    if (
      automations === 'Custom' ||
      integrations === 'Custom' ||
      teamAccess === 'Multi-coach' ||
      dataMigration === 'Yes'
    ) {
      return {
        tier: TIERS[3], // Custom
        tag: 'Custom OS Proposal',
        reason: 'Recommended because your operations require custom automations, data migration, or multi-coach system architecture.'
      };
    }
    if (
      automations === '4–5' ||
      integrations === '4–5' ||
      clientPortal === 'Yes' ||
      teamAccess === 'Small team'
    ) {
      return {
        tier: TIERS[2], // Scale
        tag: 'Scale OS Match',
        reason: 'Recommended for client portals, 4–5 automations/integrations, and team permissions.'
      };
    }
    if (
      automations === '2–3' ||
      integrations === '2–3' ||
      organize === 'Both' ||
      organize === 'Clients'
    ) {
      return {
        tier: TIERS[1], // Growth
        tag: 'Growth OS Match (Most Popular)',
        reason: 'Recommended for automated client workflows, payment visibility, session operations, and deeper customization.'
      };
    }
    return {
      tier: TIERS[0], // Core
      tag: 'Core OS Match',
      reason: 'Recommended for independent coaches who need a professional system for leads, follow-ups, tasks, and essential client management.'
    };
  }, [organize, automations, integrations, clientPortal, teamAccess, dataMigration]);

  const handleCardCta = (tierId: string) => {
    if (onScrollToWaitlist) {
      onScrollToWaitlist();
    } else {
      const el = document.getElementById('waitlist');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="pricing" 
      className="py-14 sm:py-20 lg:py-24 bg-neutral-50/70 border-t border-neutral-200/80 scroll-mt-16 text-left relative overflow-hidden"
    >
      {/* Optimized Static Ambient Glows (Zero lag GPU layer) */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-100/20 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/70 border border-brand-300/60 text-brand-900 text-xs font-extrabold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            Custom Implementation Pricing
          </div>
          
          <h2 
            id="pricing-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-950 mb-3 sm:mb-5 leading-tight"
          >
            Private CoachOS Operating-System Implementation.
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Custom implementation pricing based on the depth of your coaching operations.
          </p>

          {/* Pricing Mode Toggle (High-Contrast, Touch-Friendly) */}
          <div className="mt-7 flex flex-col items-center">
            <div className="bg-neutral-200/90 p-1 rounded-2xl border border-neutral-300/80 shadow-inner inline-flex items-center gap-1 max-w-full">
              <button
                type="button"
                onClick={() => setPricingMode('standard')}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer min-h-[42px] touch-manipulation ${
                  pricingMode === 'standard'
                    ? 'bg-white text-brand-950 shadow-sm border border-neutral-300 font-extrabold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Standard pricing
              </button>

              <button
                type="button"
                onClick={() => setPricingMode('founder')}
                className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer min-h-[42px] touch-manipulation flex items-center gap-1.5 ${
                  pricingMode === 'founder'
                    ? 'bg-brand-950 text-white shadow-md border border-brand-800 font-extrabold'
                    : 'text-neutral-700 hover:text-brand-950'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${pricingMode === 'founder' ? 'text-amber-400' : 'text-amber-600'}`} />
                <span>Founder pricing</span>
                <span className="bg-emerald-500 text-brand-950 text-[10px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wide">
                  40% OFF
                </span>
              </button>
            </div>

            {/* Founder Pricing Banner Explainer */}
            {pricingMode === 'founder' ? (
              <div className="mt-3.5 max-w-2xl px-4 py-2.5 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-950 text-xs sm:text-sm font-medium flex items-center gap-2.5 text-left shadow-2xs">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <p className="leading-snug">
                  Founding coaches receive <strong>40% off their selected build</strong>, and their existing <strong>$250 Founding Reservation is credited</strong> toward the discounted total.
                </p>
              </div>
            ) : (
              <div className="mt-3.5 max-w-2xl px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs sm:text-sm font-medium flex items-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0" />
                <p className="leading-snug">
                  Standard one-time implementation prices. Switch to <strong>Founder pricing</strong> to see cohort rates with 40% discount and $250 credit.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile View Toggle & Tier Tabs (Visible only on < lg screens) */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Select Implementation</span>
            <div className="inline-flex rounded-lg bg-neutral-200 p-0.5 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setMobileViewMode('tabs')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  mobileViewMode === 'tabs' ? 'bg-white text-brand-950 shadow-2xs font-bold' : 'text-neutral-600'
                }`}
              >
                Tabs View
              </button>
              <button
                type="button"
                onClick={() => setMobileViewMode('all')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  mobileViewMode === 'all' ? 'bg-white text-brand-950 shadow-2xs font-bold' : 'text-neutral-600'
                }`}
              >
                All 4 Cards
              </button>
            </div>
          </div>

          {/* Quick Segmented Nav */}
          <div className="grid grid-cols-4 gap-1.5 p-1 bg-neutral-200/90 rounded-xl border border-neutral-300">
            {TIERS.map((tier) => {
              const active = mobileActiveTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    setMobileActiveTier(tier.id);
                    if (mobileViewMode === 'all') {
                      const el = document.getElementById(`tier-card-${tier.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                  }}
                  className={`py-2 px-1 rounded-lg text-xs font-bold transition-all text-center flex flex-col items-center justify-center min-h-[44px] cursor-pointer touch-manipulation ${
                    active
                      ? 'bg-brand-950 text-white shadow-sm font-extrabold'
                      : 'text-neutral-700 hover:text-brand-950 hover:bg-neutral-100/60'
                  }`}
                >
                  <span className="truncate w-full text-[11px] leading-none mb-0.5">{tier.name}</span>
                  {tier.isPopular ? (
                    <span className="text-[9px] text-amber-300 font-extrabold uppercase tracking-tight">★ Popular</span>
                  ) : (
                    <span className="text-[9px] opacity-70 leading-none">
                      {pricingMode === 'founder' ? tier.founderRemainingDisplay : tier.normalDisplay}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Pricing Cards Container */}
        <div className="mb-14 sm:mb-20">
          
          {/* DESKTOP (lg:) AND MOBILE ALL-CARDS VIEW */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 items-stretch ${
            mobileViewMode === 'tabs' ? 'hidden lg:grid' : 'grid'
          }`}>
            {TIERS.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                isFounder={pricingMode === 'founder'}
                onCta={() => handleCardCta(tier.id)}
              />
            ))}
          </div>

          {/* MOBILE SINGLE CARD VIEW (tabs mode on < lg) */}
          <div className={`${mobileViewMode === 'tabs' ? 'block lg:hidden' : 'hidden'}`}>
            {(() => {
              const activeTierObj = TIERS.find(t => t.id === mobileActiveTier) || TIERS[1];
              return (
                <div className="max-w-md mx-auto">
                  <PricingCard
                    tier={activeTierObj}
                    isFounder={pricingMode === 'founder'}
                    onCta={() => handleCardCta(activeTierObj.id)}
                    isMobileActive
                  />
                  {/* Quick helper pagination dots */}
                  <div className="flex justify-center items-center gap-2 mt-4">
                    {TIERS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setMobileActiveTier(t.id)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          mobileActiveTier === t.id ? 'w-6 bg-brand-900' : 'w-2 bg-neutral-300'
                        }`}
                        aria-label={`Switch to ${t.name}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

        {/* Keep CoachOS Running at Its Best (Ongoing Support & Care Plans) */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100/70 border border-brand-300/60 text-brand-900 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-700 shrink-0" />
              Ongoing Operations & Support
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-brand-950 mb-3 leading-tight">
              Keep CoachOS running at its best
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Optional plans to host, protect, and continuously evolve your private operating system after handoff. Choose how hands-on you want to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            
            {/* 1. Self-Managed */}
            <div className="rounded-3xl bg-white text-brand-950 p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-extrabold text-neutral-500 uppercase tracking-wider">Independence</span>
                </div>
                <h4 className="text-xl font-extrabold tracking-tight text-brand-950 mb-1">
                  Self-Managed
                </h4>
                <p className="text-xs font-semibold text-brand-700 mb-3">
                  Keep access to your completed CoachOS workspace.
                </p>
                
                <div className="py-3 border-y border-neutral-200 my-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-brand-950">$0</span>
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-tight">/ month</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">Zero recurring CoachOS software fees.</p>
                </div>

                <ul className="space-y-2.5 text-xs mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Full workspace access & private database ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Self-managed hosting and third-party API accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Independent backups and routine data exports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Full architecture and handoff documentation</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={onScrollToWaitlist}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-neutral-100 hover:bg-neutral-200 text-brand-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[42px]"
                >
                  <span>Included with Every Build</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </button>
                <p className="text-center text-[10.5px] text-neutral-400 mt-2">Always available as standard</p>
              </div>
            </div>

            {/* 2. Care Plan (Highlighted) */}
            <div className="rounded-3xl bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white p-6 sm:p-7 border-2 border-amber-400/80 shadow-xl relative flex flex-col justify-between md:-translate-y-1">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-brand-950 px-3.5 py-0.8 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 whitespace-nowrap">
                <Sparkles className="w-3 h-3 fill-brand-950 text-brand-950" />
                Peace of Mind
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">Maintenance</span>
                </div>
                <h4 className="text-xl font-extrabold tracking-tight text-white mb-1">
                  Care Plan
                </h4>
                <p className="text-xs font-semibold text-neutral-200 mb-3">
                  Hosting, monitoring, backups, fixes, support, and small configuration changes.
                </p>

                <div className="py-3 border-y border-white/15 my-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-amber-300">$149</span>
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-tight">/ month</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">Reliable, hands-off infrastructure care.</p>
                </div>

                <ul className="space-y-2.5 text-xs mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-100">Managed cloud hosting & continuous uptime monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-100">Automated daily backups & disaster recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-100">Bug fixes, security updates & technical maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-100">Direct support channel & small configuration changes</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15">
                <GlowingBorderButton
                  onClick={onScrollToWaitlist}
                  rounded="xl"
                  fullWidth
                  containerClassName="w-full flex justify-center items-center"
                  className="w-full py-2.5 px-4 text-xs font-bold flex justify-center items-center gap-1.5 cursor-pointer shadow-md active:scale-98 touch-manipulation text-center"
                  glowSpeed={2.8}
                >
                  <span>Select Care Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                </GlowingBorderButton>
                <p className="text-center text-[10.5px] text-neutral-400 mt-2">Optional monthly add-on • Cancel anytime</p>
              </div>
            </div>

            {/* 3. Growth Partner */}
            <div className="rounded-3xl bg-white text-brand-950 p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-extrabold text-neutral-500 uppercase tracking-wider">Proactive Scale</span>
                </div>
                <h4 className="text-xl font-extrabold tracking-tight text-brand-950 mb-1">
                  Growth Partner
                </h4>
                <p className="text-xs font-semibold text-brand-700 mb-3">
                  Everything in Care, plus continuous optimization and monthly system improvements.
                </p>

                <div className="py-3 border-y border-neutral-200 my-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-brand-950">$349</span>
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-tight">/ month</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">Continuous system evolution and guidance.</p>
                </div>

                <ul className="space-y-2.5 text-xs mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">Everything included in the Care Plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Continuous automation & pipeline optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Monthly system improvements & workflow enhancements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Priority developer access & ongoing architecture advisory</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={onScrollToWaitlist}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-brand-900 hover:bg-brand-950 text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs min-h-[42px]"
                >
                  <span>Select Growth Partner</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-300" />
                </button>
                <p className="text-center text-[10.5px] text-neutral-400 mt-2">Optional monthly add-on • Cancel anytime</p>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive "Build Your CoachOS" Estimator */}
        <div className="bg-neutral-900 text-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl border border-neutral-800 relative overflow-hidden transform-gpu">
          
          {/* Subtle Ambient light (CSS GPU friendly) */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-700/15 rounded-full blur-3xl pointer-events-none transform-gpu"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none transform-gpu"></div>

          <div className="relative z-10">
            
            {/* Estimator Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  Interactive Scope Estimator
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
                  Build Your CoachOS Estimator
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                  Answer 7 quick questions to estimate your implementation scope and calculate your estimated price.
                </p>
              </div>

              <div className="shrink-0 bg-white/5 border border-white/10 rounded-2xl px-3.5 py-2.5 flex items-center gap-3 self-start md:self-auto">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white">Guaranteed Pricing Rule</p>
                  <p className="text-[10px] text-neutral-400">Reservation is 100% credited to build</p>
                </div>
              </div>
            </div>

            {/* Quick Live Preview Bar for Mobile */}
            <div className="lg:hidden mb-6 p-3 bg-brand-950/80 border border-amber-400/40 rounded-xl flex items-center justify-between gap-2 shadow-md">
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-amber-300 block">Recommended Match</span>
                <span className="text-sm font-black text-white">{rec.tier.name}</span>
                <span className="text-xs text-neutral-300 ml-1.5">
                  ({isFounderPaid === 'Yes' ? `${rec.tier.founderRemainingDisplay} balance` : rec.tier.normalDisplay})
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('estimator-result-box');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }}
                className="px-3 py-1.5 bg-amber-400 text-brand-950 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 active:scale-95 transition-transform"
              >
                <span>View Breakdown</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Questions Grid & Result Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left: The 7 Questions */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Cluster A: Core Coaching Scope */}
                <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Part 1: Core Operations Scope
                  </div>

                  {/* Q1: What do you want to organize? */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      1. What do you want to organize in CoachOS?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Leads', 'Clients', 'Both', 'Team operations'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setOrganize(opt)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                            organize === opt
                              ? 'bg-amber-400 text-brand-950 border-amber-300 font-black shadow-sm'
                              : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q2: Automations */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      2. How many workflow automations do you need?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['0–1', '2–3', '4–5', 'Custom'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setAutomations(opt)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                            automations === opt
                              ? 'bg-amber-400 text-brand-950 border-amber-300 font-black shadow-sm'
                              : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q3: Integrations */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      3. How many external integrations (Stripe, Calendly, Typeform, etc.)?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['0–1', '2–3', '4–5', 'Custom'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setIntegrations(opt)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                            integrations === opt
                              ? 'bg-amber-400 text-brand-950 border-amber-300 font-black shadow-sm'
                              : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cluster B: Experience & Architecture */}
                <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Part 2: Client Experience & Scalability
                  </div>

                  {/* Q4 & Q5 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Q4: Client Portal */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-200 mb-2">
                        4. Do you need a client portal?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Yes', 'No'] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setClientPortal(opt)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                              clientPortal === opt
                                ? 'bg-amber-400 text-brand-950 border-amber-300 font-black shadow-sm'
                                : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Q5: Team Access */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-200 mb-2">
                        5. Team access requirement?
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['Just me', 'Small team', 'Multi-coach'] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setTeamAccess(opt)}
                            className={`px-2 py-2.5 rounded-xl text-[11px] font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 leading-tight ${
                              teamAccess === opt
                                ? 'bg-amber-400 text-brand-950 border-amber-300 font-black shadow-sm'
                                : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Q6: Data Migration */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      6. Do you need historical data migration from Notion, Airtable, or Spreadsheets?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['Yes', 'No'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setDataMigration(opt)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                            dataMigration === opt
                              ? 'bg-amber-400 text-brand-950 border-amber-300 font-black shadow-sm'
                              : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cluster C: Cohort Status */}
                <div className="bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Part 3: Cohort & Reservation Rule
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-100 mb-2">
                      7. Are you a Founding Coach who paid the $250 reservation?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['Yes', 'No'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setIsFounderPaid(opt)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                            isFounderPaid === opt
                              ? 'bg-emerald-400 text-brand-950 border-emerald-300 font-black shadow-sm'
                              : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-700/80 hover:text-white'
                          }`}
                        >
                          {opt === 'Yes' ? 'Yes ($250 Credit Applied)' : 'No (Standard Price)'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Right: Recommendation & Estimated Implementation Price Result Box */}
              <div 
                id="estimator-result-box"
                className="lg:col-span-5 bg-neutral-950/90 border border-white/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-xl lg:sticky lg:top-24"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2.5 py-0.8 rounded-full border border-amber-400/30">
                    {rec.tag}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">Estimated Scope</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                  {rec.tier.name}
                </h4>
                <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                  {rec.reason}
                </p>

                {/* Price Breakdown Calculation */}
                <div className="bg-black/50 rounded-xl p-4 border border-white/10 space-y-2.5 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-400">
                      Estimated Build Price
                    </span>
                    <span className="text-[10px] text-neutral-400 font-medium">Implementation Fee</span>
                  </div>

                  {rec.tier.normalPrice === 'custom' ? (
                    <div>
                      <div className="text-2xl font-extrabold text-white mb-2">From $5,000</div>
                      <div className="space-y-2 text-xs pt-2 border-t border-white/10">
                        <div className="flex justify-between text-neutral-400">
                          <span>Estimated standard implementation price:</span>
                          <span className="font-semibold text-white">From $5,000</span>
                        </div>
                        {isFounderPaid === 'Yes' && (
                          <>
                            <div className="flex justify-between text-emerald-400 font-semibold">
                              <span>Founder discount:</span>
                              <span>40% off the approved quote</span>
                            </div>
                            <div className="flex justify-between text-emerald-400 font-semibold">
                              <span>$250 reservation credit:</span>
                              <span>- $250</span>
                            </div>
                            <div className="flex justify-between items-baseline text-xs sm:text-sm font-black text-amber-300 border-t border-white/20 pt-2">
                              <span>Estimated remaining balance:</span>
                              <span className="text-right font-black text-amber-300">
                                Discounted approved quote minus $250
                              </span>
                            </div>
                          </>
                        )}
                        <p className="text-[11px] text-amber-300 font-semibold pt-1">
                          Final scope confirmed after the architecture call.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {isFounderPaid === 'Yes' ? (
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-neutral-400">
                            <span>Estimated standard implementation price:</span>
                            <span className="line-through font-semibold text-neutral-300">{rec.tier.normalDisplay}</span>
                          </div>
                          <div className="flex justify-between text-emerald-400 font-semibold">
                            <span>Founder discount:</span>
                            <span>{rec.tier.founderDiscountDisplay.split(' ')[0]} (40%)</span>
                          </div>
                          <div className="flex justify-between text-emerald-400 font-semibold">
                            <span>$250 reservation credit:</span>
                            <span>- $250</span>
                          </div>
                          <div className="flex justify-between items-baseline text-sm sm:text-base font-black text-amber-300 border-t border-white/20 pt-2">
                            <span>Estimated remaining balance:</span>
                            <span className="text-lg sm:text-xl font-black text-amber-300">
                              {rec.tier.founderRemainingDisplay}
                            </span>
                          </div>
                          <p className="text-[11px] text-amber-300 font-semibold pt-1">
                            Final scope confirmed after the architecture call.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-baseline">
                            <span className="text-neutral-400">Estimated standard implementation price:</span>
                            <span className="text-2xl font-black text-white">{rec.tier.normalDisplay}</span>
                          </div>
                          <p className="text-[11px] text-amber-300 font-semibold pt-1">
                            Final scope confirmed after the architecture call.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Professional Scope Reassurance notes */}
                <div className="space-y-2 mb-5 text-[11px] text-neutral-300 leading-snug">
                  <div className="flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Estimated build price • Complex requests may require a custom scope call. Final scope confirmed after the architecture call.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>One-time implementation fee. Third-party software, hosting, usage fees, and optional ongoing support are quoted separately.</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="space-y-2 w-full flex flex-col items-center justify-center">
                  <GlowingBorderButton
                    onClick={onScrollToWaitlist}
                    rounded="xl"
                    fullWidth
                    containerClassName="w-full flex justify-center items-center"
                    className="w-full py-3 px-4 text-sm font-bold flex justify-center items-center gap-1.5 cursor-pointer shadow-md touch-manipulation active:scale-[0.98] text-center"
                    glowSpeed={2.8}
                  >
                    <span>Reserve in Cohort & Apply</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </GlowingBorderButton>
                  <p className="text-center text-[10.5px] text-neutral-400">
                    Standard Waitlist = $0 • No credit card needed • No payment required
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual card (clean, modular, zero lag)
interface PricingCardProps {
  key?: React.Key;
  tier: Tier;
  isFounder: boolean;
  onCta: () => void;
  isMobileActive?: boolean;
}

function PricingCard({ tier, isFounder, onCta, isMobileActive = false }: PricingCardProps) {
  const isPopular = tier.isPopular;

  return (
    <div
      id={`tier-card-${tier.id}`}
      className={`rounded-3xl flex flex-col justify-between transition-all duration-200 relative ${
        isPopular
          ? 'bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white p-6 sm:p-7 shadow-2xl border-2 border-amber-400/80 lg:-translate-y-2'
          : 'bg-white text-brand-950 p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-neutral-300'
      } ${isMobileActive ? 'ring-2 ring-brand-900 shadow-xl' : ''}`}
    >
      {/* Popular Ribbon */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-brand-950 px-3.5 py-0.8 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 whitespace-nowrap">
          <Sparkles className="w-3 h-3 fill-brand-950 text-brand-950" />
          {tier.badge || 'Most Popular'}
        </div>
      )}

      <div>
        {/* Tier Name & Subtitle */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-1 mb-1">
            <h3 className={`text-xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-brand-950'}`}>
              {tier.name}
            </h3>
          </div>
          <p className={`text-xs font-semibold mb-1 ${isPopular ? 'text-amber-300' : 'text-brand-700'}`}>
            {tier.tagline}
          </p>
          <p className={`text-xs leading-relaxed min-h-[46px] ${isPopular ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {tier.subtitle}
          </p>
        </div>

        {/* Pricing Numbers Display Box */}
        <div className={`py-4 border-y my-4 ${isPopular ? 'border-white/15' : 'border-neutral-200'}`}>
          {isFounder ? (
            <div>
              {/* Crossed out standard price */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-xs font-bold line-through ${isPopular ? 'text-neutral-400' : 'text-neutral-400'}`}>
                  {tier.normalDisplay} standard
                </span>
                <span className="text-[10px] font-extrabold text-amber-400 bg-amber-400/20 border border-amber-400/30 px-1.5 py-0.2 rounded">
                  40% FOUNDER DISCOUNT
                </span>
              </div>

              {/* Founder total after 40% discount */}
              <div className="flex items-baseline gap-1.5">
                <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isPopular ? 'text-white' : 'text-brand-950'}`}>
                  {tier.founderTotalDisplay}
                </span>
                <span className={`text-[11px] font-bold uppercase tracking-tight ${isPopular ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  founder total
                </span>
              </div>

              {/* Exact Founder Math Breakdown */}
              <div className={`mt-3 pt-2.5 border-t text-xs space-y-1.5 ${isPopular ? 'border-white/10 text-neutral-200' : 'border-neutral-100 text-neutral-600'}`}>
                <div className="flex items-center justify-between text-[11px]">
                  <span>{tier.id === 'custom' ? 'Starting price:' : 'Standard price:'}</span>
                  <span className="font-semibold">{tier.id === 'custom' ? '$5,000' : tier.normalDisplay}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>{tier.id === 'custom' ? 'Founder discount:' : '40% founder discount:'}</span>
                  <span className="font-bold text-emerald-400">
                    {tier.id === 'custom' ? '40% off the approved quote' : tier.founderDiscountDisplay.split(' ')[0]}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>Founder total:</span>
                  <span className="font-bold">
                    {tier.id === 'custom' ? '40% off approved quote' : tier.founderTotalDisplay}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>Existing reservation credit:</span>
                  <span className="font-bold text-emerald-400">- $250</span>
                </div>
                <div className="flex items-center justify-between text-xs font-extrabold pt-1.5 border-t border-white/10">
                  <span className={isPopular ? 'text-amber-300' : 'text-brand-950'}>Remaining balance:</span>
                  <span className={`text-sm sm:text-base font-black ${isPopular ? 'text-amber-300' : 'text-brand-950'}`}>
                    {tier.id === 'custom' ? 'discounted approved quote minus $250' : tier.founderRemainingDisplay}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isPopular ? 'text-white' : 'text-brand-950'}`}>
                  {tier.normalDisplay}
                </span>
                <span className={`text-[11px] font-bold uppercase tracking-tight ${isPopular ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  one-time build
                </span>
              </div>
              <p className={`text-xs mt-2 font-medium leading-relaxed ${isPopular ? 'text-neutral-300' : 'text-neutral-500'}`}>
                One-time implementation fee. Third-party software, hosting, usage fees, and optional ongoing support are quoted separately.
              </p>
            </div>
          )}
        </div>

        {/* Feature List */}
        <div className="mb-6">
          <p className={`text-[11px] font-bold uppercase tracking-wider mb-3 ${isPopular ? 'text-neutral-300' : 'text-neutral-400'}`}>
            Included in this implementation:
          </p>
          <ul className="space-y-2.5 text-xs">
            {tier.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-amber-400' : 'text-emerald-600'}`} />
                <span className={`leading-snug ${isPopular ? 'text-neutral-100 font-medium' : 'text-neutral-700'}`}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Button */}
      <div className={`mt-4 pt-4 border-t w-full flex flex-col items-center justify-center ${isPopular ? 'border-white/15' : 'border-neutral-100'}`}>
        {isPopular ? (
          <GlowingBorderButton
            onClick={onCta}
            rounded="xl"
            fullWidth
            containerClassName="w-full flex justify-center items-center"
            className="w-full py-3 px-4 text-sm font-bold flex justify-center items-center gap-1.5 cursor-pointer shadow-lg active:scale-98 touch-manipulation text-center"
            glowSpeed={2.8}
          >
            <span>{tier.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 text-emerald-300" />
          </GlowingBorderButton>
        ) : (
          <button
            type="button"
            onClick={onCta}
            className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-brand-900 hover:bg-brand-950 text-white transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-[0.98] touch-manipulation min-h-[44px]"
          >
            <span>{tier.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 text-neutral-300" />
          </button>
        )}
        <p className={`text-center text-[10px] mt-2.5 font-medium ${isPopular ? 'text-neutral-400' : 'text-neutral-400'}`}>
          Standard Waitlist = $0 • Select in cohort
        </p>
      </div>
    </div>
  );
}
