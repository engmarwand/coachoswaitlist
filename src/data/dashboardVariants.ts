import { 
  Dumbbell, 
  Briefcase, 
  Heart, 
  Trophy, 
  LayoutDashboard, 
  Users, 
  Target, 
  Database, 
  Video, 
  MessageCircle, 
  MessageSquare,
  CreditCard, 
  Activity, 
  Play, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  FileCheck, 
  Sparkles, 
  Smile, 
  Layers,
  Zap,
  TrendingUp,
  ShieldCheck,
  Flame,
  Lock
} from 'lucide-react';
import { DashboardVariant } from '../types/dashboard';

export const revenueData = [
  { name: 'Apr', value: 4200 },
  { name: 'May', value: 5100 },
  { name: 'Jun', value: 4800 },
  { name: 'Jul', value: 6200 },
  { name: 'Aug', value: 7500 },
  { name: 'Sep', value: 8450 },
];

export const executiveRevenueData = [
  { name: 'Q1', value: 11200 },
  { name: 'Q2', value: 14400 },
  { name: 'Q3', value: 16800 },
  { name: 'Q4', value: 18500 },
];

export const wellnessMoodData = [
  { name: 'Mon', value: 7.8 },
  { name: 'Tue', value: 8.2 },
  { name: 'Wed', value: 8.0 },
  { name: 'Thu', value: 8.7 },
  { name: 'Fri', value: 8.9 },
  { name: 'Sat', value: 9.2 },
];

export const sportsLoadData = [
  { name: 'W1', value: 78 },
  { name: 'W2', value: 85 },
  { name: 'W3', value: 91 },
  { name: 'W4', value: 88 },
  { name: 'W5', value: 94 },
];

export const DASHBOARD_VARIANTS: DashboardVariant[] = [
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
      { 
        icon: LayoutDashboard, 
        label: 'Performance Hub', 
        active: true,
        explanation: {
          title: 'Performance Hub Command Center',
          category: 'Central Overview',
          summary: 'High-level command center showing your active athlete roster, daily check-in triage, and pending workouts.',
          howItWorks: 'Aggregates check-ins, macro compliance, and video feedback into one unified live feed.',
          replaces: 'Switching between 4 separate coaching and messaging apps.',
          impact: 'Gives you complete coaching clarity in under 2 minutes every morning.'
        }
      },
      { 
        icon: Users, 
        label: 'Athletes (32)',
        explanation: {
          title: '32 Active Athlete Profiles',
          category: 'Roster Management',
          summary: 'Individual profiles tracking training history, body composition, notes, and custom periodization blocks.',
          howItWorks: 'Each athlete gets their own private portal URL to log workouts, weights, and photos.',
          replaces: 'Scattered client folders across Google Drive and spreadsheets.',
          impact: 'Instant lookup of any client’s training history in one click.'
        }
      },
      { 
        icon: Target, 
        label: 'Workouts & Blocks',
        explanation: {
          title: 'Custom Workout Periodization',
          category: 'Programming Engine',
          summary: 'Build and deploy mesocycles, RPE targets, and supersets directly to client mobile portals.',
          howItWorks: 'Auto-adjusts load prescriptions based on athlete feedback and logged RPE scores.',
          replaces: 'PDF workout programs and shared Google Sheets.',
          impact: 'Saves 6+ hours weekly when building and updating client programs.'
        }
      },
      { 
        icon: Database, 
        label: 'Nutrition & Macros',
        explanation: {
          title: 'Macro & Nutrition Telemetry',
          category: 'Nutrition Sync',
          summary: 'Daily caloric intake, protein adherence, and micronutrient logs synced from athlete devices.',
          howItWorks: 'Direct API integrations pull calorie and macro targets automatically at midnight.',
          replaces: 'Asking athletes for weekly food log screenshots.',
          impact: '100% adherence visibility with zero manual data entry.'
        }
      },
      { 
        icon: Video, 
        label: 'Form Video Queue', 
        badge: '4',
        explanation: {
          title: 'Async Video Review Queue',
          category: 'Biomechanical Analysis',
          summary: 'Central inbox for lifting form checks with integrated telestrator drawing and audio voiceover.',
          howItWorks: 'Athletes record lifts in-app; CoachOS transcodes and queues them for 1-click voice review.',
          replaces: 'Messy WhatsApp video downloads and phone storage overload.',
          impact: 'Cuts video review turnaround from 24 hours to under 15 minutes.'
        }
      },
      { 
        icon: MessageCircle, 
        label: 'Athlete Comms', 
        badge: '2',
        explanation: {
          title: 'Direct Athlete Messenger',
          category: 'Client Comms',
          summary: 'Dedicated 1:1 and cohort communication channel with auto-organized thread tags.',
          howItWorks: 'Keeps all coaching advice, voice notes, and check-ins strictly inside your business domain.',
          replaces: 'Mixing client messages with personal iMessage and Instagram DMs.',
          impact: 'Protects coach work-life boundaries and creates searchable coaching records.'
        }
      },
    ],
    topCards: [
      {
        title: 'Athlete Check-In Rate',
        value: '28 / 32',
        sub: '88% completed today',
        badge: '+6% vs last week',
        badgeType: 'positive',
        type: 'progress',
        progress: 88,
        explanation: {
          title: 'Daily Athlete Check-In Rate',
          category: 'Roster Compliance Automation',
          categoryIcon: CheckCircle2,
          summary: 'Real-time completion tracking for daily morning weigh-ins, sleep scores, and habit logs.',
          howItWorks: 'CoachOS triggers automated SMS/push notifications at athletes’ local morning times, calculates adherence, and highlights missing submissions.',
          replaces: 'Manual WhatsApp/iMessage check-in nagging & spreadsheet formulas.',
          impact: 'Boosts client compliance by 42% and saves 45 mins of daily admin chasing.'
        }
      },
      {
        title: 'Video Form Queue',
        value: '4 Pending',
        sub: 'Avg review time: 14 mins',
        badge: 'Priority reviews',
        badgeType: 'neutral',
        type: 'metric',
        explanation: {
          title: 'Lifting Form Check Queue',
          category: 'Async Video Feedback',
          categoryIcon: Video,
          summary: 'Video clips submitted by athletes during their training sessions awaiting coach breakdown.',
          howItWorks: 'You can scrub frame-by-frame, record voice feedback, and mark biomechanics on screen with 1 click.',
          replaces: 'Losing video clips in WhatsApp chats or downloading massive MP4 files to your phone.',
          impact: 'Delivers rapid coaching feedback that delights clients and drives athletic progress.'
        }
      },
      {
        title: 'Macro Adherence',
        value: '96.2%',
        sub: 'Protein targets hit',
        badge: 'Top compliance',
        badgeType: 'positive',
        type: 'metric',
        explanation: {
          title: 'Macro & Nutrition Adherence',
          category: 'Dietary Telemetry',
          categoryIcon: Database,
          summary: 'Calculates the exact percentage of athletes hitting their personalized daily protein and calorie bands.',
          howItWorks: 'Webhooks continuously sync dietary logs from MyFitnessPal and food trackers into the coach hub.',
          replaces: 'Manual Sunday calorie audits and spreadsheet math.',
          impact: 'Instantly identifies clients struggling with nutrition before they fall off track.'
        }
      }
    ],
    tools: [
      { 
        name: 'Stripe', 
        color: '#635BFF', 
        icon: CreditCard,
        explanation: {
          title: 'Stripe Connect (0% Fee)',
          category: 'Payment Infrastructure',
          categoryIcon: CreditCard,
          summary: 'Direct connection to your own Stripe merchant account with zero platform take-rate.',
          howItWorks: 'Recurring memberships, 1-on-1 packages, and trial deposits deposit 100% directly into your bank.',
          replaces: '15% to 30% marketplace cuts from traditional coaching platforms.',
          impact: 'Keeps thousands of dollars in annual revenue inside your pocket.'
        }
      },
      { 
        name: 'MyFitnessPal', 
        color: '#0066EE', 
        icon: Database,
        explanation: {
          title: 'MyFitnessPal Live Telemetry',
          category: 'Dietary Integration',
          categoryIcon: Database,
          summary: 'Direct food diary ingestion pulling macros, calories, and micronutrient ratios.',
          howItWorks: 'Clients connect their MFP account once; CoachOS syncs nightly without client effort.',
          replaces: 'Asking clients to screenshot their diary every weekend.',
          impact: 'Zero client friction for logging nutrition.'
        }
      },
      { 
        name: 'TrueCoach', 
        color: '#10B981', 
        icon: Activity,
        explanation: {
          title: 'Exercise Library & TrueCoach Importer',
          category: 'Exercise Database',
          categoryIcon: Activity,
          summary: '1-click migration of your existing exercise video libraries, notes, and workouts.',
          howItWorks: 'Imports your historical training data so you never have to retype workout libraries.',
          replaces: 'Manual data re-entry when switching software.',
          impact: 'Zero downtime during your onboarding transition.'
        }
      },
      { 
        name: 'Trainerize', 
        color: '#FF4500', 
        icon: Dumbbell,
        explanation: {
          title: 'Workout Program Bridge',
          category: 'Training System',
          categoryIcon: Dumbbell,
          summary: 'Syncs customized exercise prescriptions, superset blocks, and rest intervals.',
          howItWorks: 'Delivers structured, clean workout flows directly inside your custom-branded portal.',
          replaces: 'Paying for clunky generic apps that confuse clients.',
          impact: 'Gives your athletes a bespoke, premium mobile training experience.'
        }
      },
      { 
        name: 'WHOOP', 
        color: '#000000', 
        icon: Heart,
        explanation: {
          title: 'WHOOP Recovery & HRV Sync',
          category: 'Biometric Telemetry',
          categoryIcon: Heart,
          summary: 'Live ingestion of athlete sleep recovery scores, HRV baseline, and strain metrics.',
          howItWorks: 'Automatically flags when an athlete is in the red zone and suggests auto-regulation deloads.',
          replaces: 'Guessing athlete fatigue levels or relying on subjective feedback alone.',
          impact: 'Prevents athlete overtraining injuries and optimizes peak performance.'
        }
      },
    ],
    leftSectionTitle: 'Active Athlete Training Blocks',
    leftSectionIcon: Dumbbell,
    leftItems: [
      {
        title: "Alex M. — Hypertrophy Phase 2 (Week 4)",
        meta: "Target: Upper Body Hypertrophy • RPE 8.5",
        status: "Active Block",
        statusColor: "bg-emerald-100 text-emerald-800",
        explanation: {
          title: 'Upper Body Hypertrophy Meso (Alex M.)',
          category: 'Active Periodization',
          categoryIcon: Dumbbell,
          summary: '4-week progressive overload block focusing on incline pressing volume and lat width.',
          howItWorks: 'Tracks logged tonnage, estimated 1RM changes, and fatigue markers week-over-week.',
          replaces: 'Scattered workout notebook notes.',
          impact: 'Provides verifiable proof of hypertrophy progression.'
        }
      },
      {
        title: "Sarah K. — Deload & Mobility Protocol",
        meta: "Target: Hip capsule recovery & central fatigue",
        status: "In Progress",
        statusColor: "bg-blue-100 text-blue-800",
        explanation: {
          title: 'Deload & Mobility Protocol (Sarah K.)',
          category: 'Active Periodization',
          categoryIcon: Activity,
          summary: 'Volume reduction week with guided mobility flows for hip impingement management.',
          howItWorks: 'Auto-reduces programmed working sets by 40% while preserving movement tempo.',
          replaces: 'Manually adjusting every single workout day by hand.',
          impact: 'Ensures optimal tissue recovery before next strength phase.'
        }
      },
      {
        title: "Marcus T. — Max Strength Peaking (Squat 425lb)",
        meta: "Target: 1RM Prep & Velocity Tracking",
        status: "Peak Phase",
        statusColor: "bg-purple-100 text-purple-800",
        explanation: {
          title: 'Max Strength Peaking (Marcus T.)',
          category: 'Active Periodization',
          categoryIcon: Target,
          summary: 'High-intensity powerlifting taper preparing for a 425 lb back squat test.',
          howItWorks: 'Monitors barbell concentric velocity and bar path stability via video feedback.',
          replaces: 'Guesswork on competition readiness.',
          impact: 'Maximizes PR success rate on testing day.'
        }
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
        iconBg: 'bg-emerald-100 text-emerald-700',
        explanation: {
          title: 'Squat Form Check Upload',
          category: 'Video Telemetry',
          categoryIcon: Video,
          summary: 'Alex uploaded 3 angles of his 315x5 squat top set for knee path evaluation.',
          howItWorks: 'Ready for 1-click coach telestration, slow-mo review, and voice note response.',
          replaces: 'Receiving uncompressed videos in personal phone messaging apps.',
          impact: 'Turns form review into a high-value 90-second coaching interaction.'
        }
      },
      {
        author: 'Jessica Lee',
        time: '34m ago',
        action: 'Logged Daily Check-in & Weight',
        detail: '138.4 lbs (-0.6 lbs) • Macros 100% compliant today',
        icon: CheckCircle2,
        iconBg: 'bg-blue-100 text-blue-700',
        explanation: {
          title: 'Daily Check-in Logged',
          category: 'Compliance Event',
          categoryIcon: CheckCircle2,
          summary: 'Morning weigh-in recorded with full macro compliance badge.',
          howItWorks: 'Automatically charts 7-day weight moving averages to eliminate scale fluctuation panic.',
          replaces: 'Manual weight tracking spreadsheets.',
          impact: 'Keeps athletes consistent and motivated.'
        }
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
      { 
        icon: LayoutDashboard, 
        label: 'Command Center', 
        active: true,
        explanation: {
          title: 'Executive Advisory Command Hub',
          category: 'Executive Overview',
          summary: 'Centralized high-ticket advisory dashboard showing MRR, retainer statuses, and strategic deliverables.',
          howItWorks: 'Combines billing status, scheduled advisory sessions, and action items into a clean board.',
          replaces: 'Messy Notion workspaces and disparate invoicing apps.',
          impact: 'Provides an executive-grade operating picture of your entire practice.'
        }
      },
      { 
        icon: Users, 
        label: 'Retainers (14)',
        explanation: {
          title: '14 Active Advisory Retainers',
          category: 'Client Portfolio',
          summary: 'Profiles of CEO and founder clients, contract terms, renewal dates, and private vaults.',
          howItWorks: 'Tracks retainer engagement health and auto-notifies on upcoming renewal milestones.',
          replaces: 'Tracking client contracts across multiple email threads.',
          impact: 'Prevents client churn with proactive quarterly milestone check-ins.'
        }
      },
      { 
        icon: FileText, 
        label: 'Strategy Vault',
        explanation: {
          title: 'Bespoke Strategy Vault',
          category: 'Deliverable Library',
          summary: 'Secure client repository for financial models, board decks, hiring scorecards, and strategy memos.',
          howItWorks: 'Whitelabeled portal where founders access your proprietary advisory frameworks.',
          replaces: 'Sending sensitive documents over unorganized Google Drive links.',
          impact: 'Dramatically elevates perceived service value and justified price points.'
        }
      },
      { 
        icon: Calendar, 
        label: 'Advisory Calls',
        explanation: {
          title: 'Executive Advisory Scheduler',
          category: 'Calendar Sync',
          summary: 'Integrated calendar engine managing bi-weekly advisory sprints and board prep sessions.',
          howItWorks: 'Auto-syncs with Google Calendar and Zoom VIP with customized buffer times.',
          replaces: 'Back-and-forth email scheduling and Calendly subscription costs.',
          impact: 'Eliminates scheduling friction for busy C-level founders.'
        }
      },
      { 
        icon: CreditCard, 
        label: 'Billing & Contracts', 
        badge: '$18.5k',
        explanation: {
          title: 'High-Ticket Invoicing & Agreements',
          category: 'Revenue Operations',
          summary: 'Automated recurring ACH and credit card invoicing for $3,000–$10,000/mo retainers.',
          howItWorks: 'Direct Stripe Connect integration with auto-dunning and signed DocuSign contract attachments.',
          replaces: 'Manual PDF invoices and chasing late wire transfers.',
          impact: 'Guarantees 100% on-time retainer collections without awkward billing conversations.'
        }
      },
      { 
        icon: MessageCircle, 
        label: 'Slack Connect', 
        badge: '3',
        explanation: {
          title: 'Slack Connect Channel Sync',
          category: 'Async Communication',
          summary: 'Direct bridge into private Slack Connect channels with your enterprise founder clients.',
          howItWorks: 'Logs strategic decisions and key action items from Slack directly into client milestones.',
          replaces: 'Losing critical client commitments in chat threads.',
          impact: 'Keeps advisory engagements structured and outcome-driven.'
        }
      },
    ],
    topCards: [
      {
        title: 'Monthly Retainer ARR',
        value: '$18,500/mo',
        sub: '+$3,200 vs last quarter',
        badge: '+18.4% YoY',
        badgeType: 'positive',
        type: 'chart',
        chartData: executiveRevenueData,
        explanation: {
          title: 'Monthly Recurring Revenue (ARR/MRR)',
          category: 'Revenue Analytics',
          categoryIcon: TrendingUp,
          summary: 'Predictable recurring retainer income collected from active founder and corporate coaching contracts.',
          howItWorks: 'Aggregates active subscription tiers and multi-month retainer agreements with 0% platform take-rate.',
          replaces: 'Spreadsheet revenue projections and manual bookkeeping reconciliation.',
          impact: 'Gives you clear forecasting for capacity planning and business growth.'
        }
      },
      {
        title: 'Active Retainers',
        value: '14 Founders',
        sub: '8 Advisory / 6 Mastermind',
        badge: 'Zero churn',
        badgeType: 'positive',
        type: 'metric',
        explanation: {
          title: 'Active Founder Retainers',
          category: 'Client Retention',
          categoryIcon: Users,
          summary: '14 active high-ticket clients across 1:1 Executive Advisory and Growth Mastermind tiers.',
          howItWorks: 'Maintains lifetime value telemetry and alerts you 45 days before contract expiration.',
          replaces: 'Spreadsheets that let contract renewals slip through the cracks.',
          impact: 'Maintains 100% client retention and predictable annual cash flow.'
        }
      },
      {
        title: 'Open Proposals',
        value: '$45,000',
        sub: '3 contracts in final review',
        badge: '85% win rate',
        badgeType: 'neutral',
        type: 'metric',
        explanation: {
          title: 'Pipeline Proposal Value',
          category: 'Deal Pipeline',
          categoryIcon: Briefcase,
          summary: 'Total value of pending executive coaching agreements currently in legal review or decision stages.',
          howItWorks: 'Tracks proposal view analytics, contract signature status, and automated follow-up sequences.',
          replaces: 'Manually following up on stalled email proposals.',
          impact: 'Accelerates deal closing cycles from weeks to days.'
        }
      }
    ],
    tools: [
      { 
        name: 'Stripe', 
        color: '#635BFF', 
        icon: CreditCard,
        explanation: {
          title: 'Stripe Corporate Billing',
          category: 'Payment Gateway',
          categoryIcon: CreditCard,
          summary: 'Handles credit card and low-fee ACH payments for high-ticket coaching invoices.',
          howItWorks: '0% CoachOS platform fee—all funds settle directly into your linked bank account.',
          replaces: 'Expensive third-party merchant platforms taking 5%–15% cuts.',
          impact: 'Saves $1,500+ every month on processing take-rates.'
        }
      },
      { 
        name: 'Zoom VIP', 
        color: '#2D8CFF', 
        icon: Video,
        explanation: {
          title: 'Zoom Executive Integration',
          category: 'Video Conferencing',
          categoryIcon: Video,
          summary: 'Automated HD meeting links with cloud recording auto-indexed into client strategy vaults.',
          howItWorks: 'Generates private meeting links and timestamps session transcriptions automatically.',
          replaces: 'Manually copying recording links into client notes.',
          impact: 'Provides founders with an searchable library of every strategy call.'
        }
      },
      { 
        name: 'Slack Connect', 
        color: '#E01E5A', 
        icon: MessageCircle,
        explanation: {
          title: 'Slack Connect Bridge',
          category: 'Enterprise Chat',
          categoryIcon: MessageCircle,
          summary: 'Connects directly with your clients’ internal company Slack workspaces.',
          howItWorks: 'Syncs key action items without needing to switch between 10 different Slack teams.',
          replaces: 'Cluttered WhatsApp threads with founders.',
          impact: 'Maintains an executive presence where your clients already work.'
        }
      },
      { 
        name: 'DocuSign', 
        color: '#002B49', 
        icon: FileCheck,
        explanation: {
          title: 'DocuSign Auto-Execution',
          category: 'Contract Automation',
          categoryIcon: FileCheck,
          summary: 'Legally binding master services agreements (MSAs) and statement of work contracts.',
          howItWorks: 'When signed, automatically activates client onboarding workflows and triggers first invoice.',
          replaces: 'Manual PDF signing, scanning, and emailing.',
          impact: 'Zero friction from verbal agreement to signed retainer.'
        }
      },
      { 
        name: 'Notion', 
        color: '#000000', 
        icon: FileText,
        explanation: {
          title: 'Notion Workspace Importer',
          category: 'Knowledge Base',
          categoryIcon: FileText,
          summary: 'Embeds your proprietary strategy roadmaps, OKR frameworks, and resource databases.',
          howItWorks: 'Live sync keeps frameworks updated across all active client portals instantly.',
          replaces: 'Duplicating templates manually for every new founder.',
          impact: 'Scales your coaching IP effortlessly.'
        }
      },
    ],
    leftSectionTitle: 'Executive Advisory Milestones',
    leftSectionIcon: Target,
    leftItems: [
      {
        title: "TechFlow Inc. — Series B Board Pitch Review",
        meta: "Advisory Deliverable: Financial model audit & GTM slides",
        status: "Due Friday",
        statusColor: "bg-blue-100 text-blue-800",
        explanation: {
          title: 'Series B Pitch Review (TechFlow)',
          category: 'Strategic Deliverable',
          categoryIcon: Target,
          summary: 'Comprehensive review of the founder’s $20M Series B pitch deck and unit economic model.',
          howItWorks: 'Shared workspace with inline annotations and executive summary notes.',
          replaces: 'Fragmented comments across Google Docs and Slack.',
          impact: 'Ensures founder is 100% prepared for venture capital scrutiny.'
        }
      },
      {
        title: "Apex Logistics — Fractional COO Strategy Sprint",
        meta: "Advisory Deliverable: Executive hiring framework",
        status: "In Progress",
        statusColor: "bg-amber-100 text-amber-800",
        explanation: {
          title: 'Executive Hiring Framework (Apex)',
          category: 'Strategic Deliverable',
          categoryIcon: Briefcase,
          summary: 'Design of the executive interview scorecard and VP of Operations compensation plan.',
          howItWorks: 'Interactive scorecard template accessible by both the coach and hiring committee.',
          replaces: 'Ad-hoc hiring advice via phone calls.',
          impact: 'Reduces executive mis-hires and builds durable company leadership.'
        }
      },
      {
        title: "VentureScale — $50k Retainer Renewal",
        meta: "Contract signed for Q4 advisory expansion",
        status: "Completed",
        statusColor: "bg-emerald-100 text-emerald-800",
        explanation: {
          title: '$50,000 Advisory Renewal (VentureScale)',
          category: 'Contract Execution',
          categoryIcon: ShieldCheck,
          summary: 'Quarterly retainer renewal executed with a 25% scope and price expansion.',
          howItWorks: 'Automatically transitioned into Q4 billing schedule in Stripe.',
          replaces: 'Manual renegotiation paperwork.',
          impact: 'Demonstrates compounding customer lifetime value.'
        }
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
        iconBg: 'bg-emerald-100 text-emerald-700',
        explanation: {
          title: 'Master Agreement Executed',
          category: 'Contract Event',
          categoryIcon: FileCheck,
          summary: 'David Reynolds executed the 6-month executive advisory contract.',
          howItWorks: 'Instantly created his private client portal and scheduled kickoff sprint.',
          replaces: 'Manual onboarding delays.',
          impact: 'Locks in $21,000 contract value seamlessly.'
        }
      },
      {
        author: 'Sarah Jenkins (Founder)',
        time: '1h ago',
        action: 'Scheduled Quarterly Strategy Review',
        detail: 'Tuesday at 2:00 PM EST • Zoom link auto-generated',
        icon: Calendar,
        iconBg: 'bg-blue-100 text-blue-700',
        explanation: {
          title: 'Quarterly Strategy Session Booked',
          category: 'Calendar Event',
          categoryIcon: Calendar,
          summary: 'Sarah booked her Q3 executive review call with agenda items pre-populated.',
          howItWorks: 'Auto-generates VIP Zoom link and syncs preparation documents.',
          replaces: 'Email scheduling ping-pong.',
          impact: 'Guarantees structured high-impact advisory calls.'
        }
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
      { 
        icon: LayoutDashboard, 
        label: 'Sanctuary Overview', 
        active: true,
        explanation: {
          title: 'Mindset Sanctuary Overview',
          category: 'Cohort Command',
          summary: 'Holistic dashboard monitoring client emotional states, reflection prompts, and habit streak health.',
          howItWorks: 'Surfaces clients experiencing dips in mood or missing daily mindfulness habits.',
          replaces: 'Sifting through hundreds of scattered voice memos and text messages.',
          impact: 'Enables rapid, compassionate intervention right when a client needs support.'
        }
      },
      { 
        icon: Users, 
        label: 'Client Journeys (21)',
        explanation: {
          title: '21 Transformation Journeys',
          category: 'Client Sanctuary',
          summary: 'Private personal growth files containing life vision maps, breakthrough moments, and session recordings.',
          howItWorks: 'End-to-end encrypted private space where clients share raw, authentic reflections.',
          replaces: 'Unsecured notes and unorganized email threads.',
          impact: 'Deepens client intimacy, trust, and long-term retention.'
        }
      },
      { 
        icon: Heart, 
        label: 'Habit Streaks',
        explanation: {
          title: 'Mindful Habit Streaks',
          category: 'Habit Tracker',
          summary: 'Daily meditation, journaling, gratitude, and boundary-setting habit streaks.',
          howItWorks: 'Gamified streak counters celebrate milestones (7-day, 30-day, 100-day) with celebratory animations.',
          replaces: 'Generic third-party habit apps that don’t connect to the coach.',
          impact: 'Builds daily consistency that turns coaching into long-term behavioral transformation.'
        }
      },
      { 
        icon: Calendar, 
        label: 'Breakthrough Sessions',
        explanation: {
          title: '1:1 Breakthrough Calendar',
          category: 'Session Flow',
          summary: 'Deep-dive session scheduling with pre-session reflection forms and post-session integration homework.',
          howItWorks: 'Clients must complete a 3-question reflection before booking their 1:1 call.',
          replaces: 'Showing up to coaching calls without knowing what the client wants to work on.',
          impact: 'Multiplies breakthrough depth and session efficiency.'
        }
      },
      { 
        icon: MessageSquare, 
        label: 'Reflection Prompts', 
        badge: '5',
        explanation: {
          title: 'Weekly Voice Reflection Prompts',
          category: 'Prompt Engine',
          summary: 'Broadcast guided audio prompts to your cohort with private audio/text submission replies.',
          howItWorks: 'Record a 60-second audio prompt; clients receive it as a peaceful morning reflection task.',
          replaces: 'Typing out weekly emails that clients forget to read.',
          impact: 'Maintains an 85%+ weekly engagement rate.'
        }
      },
      { 
        icon: Sparkles, 
        label: 'Transformation Wins',
        explanation: {
          title: 'Wins & Breakthrough Vault',
          category: 'Success Telemetry',
          summary: 'Celebratory stream of client breakthroughs, emotional milestones, and identity shifts.',
          howItWorks: 'Clients flag meaningful insights during reflections, adding them to their personal win wall.',
          replaces: 'Forgetting client wins when asking for testimonials or renewals.',
          impact: 'Provides undeniable evidence of life-changing value.'
        }
      },
    ],
    topCards: [
      {
        title: 'Cohort Wellness Index',
        value: '8.9 / 10',
        sub: '+0.6 avg boost this week',
        badge: 'High energy',
        badgeType: 'positive',
        type: 'chart',
        chartData: wellnessMoodData,
        explanation: {
          title: 'Cohort Wellness & Mood Index',
          category: 'Emotional Telemetry',
          categoryIcon: Heart,
          summary: 'Aggregated daily self-reported energy, peace, and clarity ratings across all 21 clients.',
          howItWorks: 'Clients rate their alignment on a 1-10 slider during quick evening reflections.',
          replaces: 'Not knowing how your clients are actually feeling between weekly sessions.',
          impact: 'Lets you tailor weekly group call topics directly to the group’s real-time emotional state.'
        }
      },
      {
        title: 'Journals Submitted',
        value: '19 / 21',
        sub: '90% completed reflection prompt',
        badge: 'Engaged',
        badgeType: 'positive',
        type: 'progress',
        progress: 90,
        explanation: {
          title: 'Weekly Journal Prompt Compliance',
          category: 'Engagement Tracking',
          categoryIcon: MessageCircle,
          summary: '19 of 21 active clients submitted their Week 4 audio reflection on overcoming imposter mindset.',
          howItWorks: 'Auto-nudges unsubmitted clients 24 hours before the weekly circle call.',
          replaces: 'Chasing clients individually over Instagram or WhatsApp.',
          impact: 'Achieves a stellar 90% prompt response rate.'
        }
      },
      {
        title: '7+ Day Habit Streaks',
        value: '14 Clients',
        sub: 'Daily meditation & journaling',
        badge: 'Streak record',
        badgeType: 'positive',
        type: 'metric',
        explanation: {
          title: 'Active 7+ Day Habit Streaks',
          category: 'Habit Engine',
          categoryIcon: Flame,
          summary: '14 clients currently maintaining an unbroken week-long streak of morning mindfulness.',
          howItWorks: 'Awards milestone badges and unlocks exclusive bonus guided meditations.',
          replaces: 'Lack of accountability between coaching sessions.',
          impact: 'Solidifies daily client rituals and deepens identity change.'
        }
      }
    ],
    tools: [
      { 
        name: 'Stripe', 
        color: '#635BFF', 
        icon: CreditCard,
        explanation: {
          title: 'Stripe Sanctuary Billing',
          category: 'Payment Flow',
          categoryIcon: CreditCard,
          summary: 'Handles monthly membership dues and retreat deposits with 0% platform cuts.',
          howItWorks: 'Direct deposits straight into your bank account with automatic receipting.',
          replaces: 'Platform commission fees.',
          impact: 'Saves hundreds in fees on every client cohort.'
        }
      },
      { 
        name: 'Calendly', 
        color: '#006BFF', 
        icon: Calendar,
        explanation: {
          title: 'Calendly Breakthrough Integration',
          category: 'Scheduling Engine',
          categoryIcon: Calendar,
          summary: 'Smooth appointment booking with timezone auto-detection and custom intake forms.',
          howItWorks: 'Embedded directly inside the client sanctuary with personalized booking links.',
          replaces: 'Messy manual calendar coordination.',
          impact: 'Friction-free 1:1 session scheduling.'
        }
      },
      { 
        name: 'Notion Sanctuary', 
        color: '#000000', 
        icon: FileText,
        explanation: {
          title: 'Notion Journal Vault',
          category: 'Client Archive',
          categoryIcon: FileText,
          summary: 'Connects your reflection prompt libraries and curated mindfulness reading lists.',
          howItWorks: 'Clients can access your guided journaling prompts in a serene reading environment.',
          replaces: 'Messy PDFs attached to emails.',
          impact: 'Creates an elegant, tranquil sanctuary feel.'
        }
      },
      { 
        name: 'Typeform', 
        color: '#262627', 
        icon: MessageSquare,
        explanation: {
          title: 'Typeform Reflection Forms',
          category: 'Intake & Reflection',
          categoryIcon: MessageSquare,
          summary: 'Beautiful, conversational intake questionnaires and quarterly breakthrough assessments.',
          howItWorks: 'Responses feed straight into the client’s private journey profile.',
          replaces: 'Boring spreadsheets and Google Forms.',
          impact: 'Creates a deeply engaging first impression.'
        }
      },
      { 
        name: 'Loom', 
        color: '#625DF5', 
        icon: Video,
        explanation: {
          title: 'Loom Voice & Video Notes',
          category: 'Async Audio/Video',
          categoryIcon: Video,
          summary: 'Send personalized 60-second video and audio affirmations to celebrate client wins.',
          howItWorks: 'Embeds video responses directly in client journals with one click.',
          replaces: 'Sending long text replies that feel cold.',
          impact: 'Clients feel deeply seen, supported, and connected.'
        }
      },
    ],
    leftSectionTitle: 'Weekly Transformation Prompts',
    leftSectionIcon: Sparkles,
    leftItems: [
      {
        title: "Week 4 Prompt: 'Overcoming Imposter Mindset in High-Stakes Situations'",
        meta: "Delivered to 21 clients • 19 audio reflection submissions",
        status: "Live Prompt",
        statusColor: "bg-purple-100 text-purple-800",
        explanation: {
          title: 'Imposter Mindset Reflection (Week 4)',
          category: 'Guided Prompt',
          categoryIcon: Sparkles,
          summary: 'Current active reflection prompt exploring cognitive reframing around career transitions.',
          howItWorks: 'Athletes and executives record 2-minute voice reflections in their safe mobile portal.',
          replaces: 'Passive reading materials with active audio journaling.',
          impact: 'Drives deep internal self-awareness before the group circle.'
        }
      },
      {
        title: "Anna's Breakthrough Journal: Boundary Setting with Work",
        meta: "Coach review note sent via personalized voice message",
        status: "Reviewed",
        statusColor: "bg-emerald-100 text-emerald-800",
        explanation: {
          title: 'Boundary Setting Journal (Anna)',
          category: 'Client Reflection',
          categoryIcon: Heart,
          summary: 'Anna shared a major breakthrough about saying no to weekend client demands.',
          howItWorks: 'Coach sent a personalized 45-second voice affirmation directly to her sanctuary.',
          replaces: 'Delayed feedback or generic emojis.',
          impact: 'Validates client vulnerability and builds lasting confidence.'
        }
      },
      {
        title: "Group Meditation & Intention Circle",
        meta: "Thursday at 7:00 PM • 16 RSVPs confirmed",
        status: "Upcoming",
        statusColor: "bg-amber-100 text-amber-800",
        explanation: {
          title: 'Bi-Weekly Group Circle Call',
          category: 'Live Cohort Event',
          categoryIcon: Calendar,
          summary: 'Live collective meditation and hot-seat coaching call for the entire cohort.',
          howItWorks: 'Auto-syncs Zoom links and pre-session intention questions.',
          replaces: 'Sending separate email calendar invites.',
          impact: 'Fosters strong peer community and accountability.'
        }
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
        iconBg: 'bg-purple-100 text-purple-700',
        explanation: {
          title: 'Voice Reflection Submitted',
          category: 'Voice Journal',
          categoryIcon: Smile,
          summary: 'Emma recorded a heartfelt audio reflection on releasing anxiety around her new venture.',
          howItWorks: 'Plays with 1 click in the dashboard; coach can reply with an audio note.',
          replaces: 'Cluttered WhatsApp voice note archives.',
          impact: 'Maintains a sacred, organized record of emotional growth.'
        }
      },
      {
        author: 'Michael Torres',
        time: '45m ago',
        action: 'Completed 14-Day Mindfulness Streak',
        detail: 'Logged daily morning gratitude & breathwork habit',
        icon: Trophy,
        iconBg: 'bg-amber-100 text-amber-700',
        explanation: {
          title: '14-Day Streak Milestone Reached',
          category: 'Habit Milestone',
          categoryIcon: Trophy,
          summary: 'Michael achieved his longest unbroken daily meditation and gratitude habit streak.',
          howItWorks: 'Automatically triggered a celebratory milestone badge in his portal.',
          replaces: 'Letting client achievements pass unnoticed.',
          impact: 'Reinforces positive identity transformation.'
        }
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
      { 
        icon: LayoutDashboard, 
        label: 'Locker Room Command', 
        active: true,
        explanation: {
          title: 'Locker Room Command Center',
          category: 'Squad Telemetry',
          summary: 'High-performance command terminal tracking roster readiness, GPS load, and combine metrics.',
          howItWorks: 'Aggregates force plate jump data, sprint velocities, and fatigue scores into one coach view.',
          replaces: 'Clipboards, whiteboards, and loose Excel files.',
          impact: 'Gives coaches instant insight into which athletes are primed to compete.'
        }
      },
      { 
        icon: Users, 
        label: 'Roster (45)',
        explanation: {
          title: '45 Varsity & Pro Athletes',
          category: 'Roster Management',
          summary: 'Biometric and performance profiles for 45 varsity, collegiate, and professional athletes.',
          howItWorks: 'Tracks historical combine testing, injury history, and positional depth charts.',
          replaces: 'Outdated paper binders in the weight room.',
          impact: 'Instant access to athlete stats during scouting calls and recruitment.'
        }
      },
      { 
        icon: Video, 
        label: 'Hudl Film Room', 
        badge: '3',
        explanation: {
          title: 'Tactical Hudl Film Room',
          category: 'Video Analysis',
          summary: 'Interactive film room for tactical breakdown of 4th-quarter defensive series and sprint mechanics.',
          howItWorks: 'Annotate angles, measure ground contact times, and assign targeted film clips to positional units.',
          replaces: 'Sending unorganized YouTube links or massive video files over email.',
          impact: 'Accelerates game IQ and on-field execution.'
        }
      },
      { 
        icon: Activity, 
        label: 'Velocity & Telemetry',
        explanation: {
          title: 'Velocity Based Training (VBT)',
          category: 'Barbell Telemetry',
          summary: 'Real-time barbell velocity (m/s) tracking and power output telemetry from GymAware & ForceDecks.',
          howItWorks: 'Monitors concentric velocity drop-off to auto-regulate daily training loads.',
          replaces: 'Guessing 1RM percentages based on arbitrary formulas.',
          impact: 'Prevents central nervous system burnout while maximizing explosive power.'
        }
      },
      { 
        icon: Trophy, 
        label: 'PR Leaderboard', 
        badge: '7',
        explanation: {
          title: 'Academy Record Leaderboard',
          category: 'Gamified Telemetry',
          summary: 'Live competitive leaderboard tracking 40-yard dash, vertical leap, pro agility, and squat PRs.',
          howItWorks: 'Automatically updates when athletes log verified combine test scores.',
          replaces: 'Dry-erase whiteboard leaderboards.',
          impact: 'Drives intense, healthy competition throughout the academy roster.'
        }
      },
      { 
        icon: MessageCircle, 
        label: 'Squad Comms',
        explanation: {
          title: 'Squad & Positional Comms',
          category: 'Team Communication',
          summary: 'Emergency schedule broadcasts, travel itineraries, and positional group chats.',
          howItWorks: 'Send high-priority SMS alerts to all 45 athletes with guaranteed delivery confirmations.',
          replaces: 'Chaotic GroupMe and WhatsApp team group chats.',
          impact: '100% attendance and schedule compliance for team bus departures and lifts.'
        }
      },
    ],
    topCards: [
      {
        title: 'Squad Load Readiness',
        value: '94% Optimal',
        sub: 'Across 45 active athletes',
        badge: 'Game ready',
        badgeType: 'positive',
        type: 'chart',
        chartData: sportsLoadData,
        explanation: {
          title: 'Squad Load & Central Readiness',
          category: 'Physiological Readiness',
          categoryIcon: Activity,
          summary: 'Composite score evaluating roster central fatigue, soreness, sleep, and GPS player load.',
          howItWorks: 'Calculates rolling acute-to-chronic workload ratios (ACWR) to prevent soft-tissue strains.',
          replaces: 'Guessing if the team is overtrained heading into Friday night games.',
          impact: 'Reduces non-contact soft-tissue injuries by over 50%.'
        }
      },
      {
        title: 'Weekly PRs Broken',
        value: '7 New PRs',
        sub: 'Squat, Vert, 40-yd dash',
        badge: '+3 vs last week',
        badgeType: 'positive',
        type: 'metric',
        explanation: {
          title: 'Combine & Strength PRs',
          category: 'Performance Output',
          categoryIcon: Trophy,
          summary: '7 verified academy personal records broken this week across sprint speed, vertical leap, and squats.',
          howItWorks: 'Logged and verified using velocity sensors and dual force plates.',
          replaces: 'Unverified paper testing cards.',
          impact: 'Provides verifiable combine data for college scouts and recruiters.'
        }
      },
      {
        title: 'Hudl Film Queue',
        value: '3 Clips Pending',
        sub: 'Biomechanical markup needed',
        badge: 'Priority',
        badgeType: 'neutral',
        type: 'metric',
        explanation: {
          title: 'Biomechanical Film Queue',
          category: 'Tactical Analysis',
          categoryIcon: Video,
          summary: '3 sprint mechanic and defensive leverage clips awaiting coach telestration.',
          howItWorks: 'Slow-motion breakdown allows draw-on-screen angles and voiceover notes.',
          replaces: 'Trying to teach biomechanics from a laptop screen on the sideline.',
          impact: 'Gives athletes collegiate-level film review from their phones.'
        }
      }
    ],
    tools: [
      { 
        name: 'Stripe', 
        color: '#635BFF', 
        icon: CreditCard,
        explanation: {
          title: 'Stripe Academy Billing',
          category: 'Billing Infrastructure',
          categoryIcon: CreditCard,
          summary: 'Manages academy team fees, combine testing passes, and monthly training dues.',
          howItWorks: 'Direct deposits with 0% platform take-rate.',
          replaces: 'Paper checks, cash, and Venmo tracking.',
          impact: '100% on-time parent collections.'
        }
      },
      { 
        name: 'Hudl', 
        color: '#FF5A00', 
        icon: Video,
        explanation: {
          title: 'Hudl Video Integration',
          category: 'Game Film Analysis',
          categoryIcon: Video,
          summary: 'Direct sync of game film, positional cutups, and player highlight reels.',
          howItWorks: 'Links high-def game clips directly into individual athlete development plans.',
          replaces: 'Scattered video files and email links.',
          impact: 'Elevates athlete tactical execution.'
        }
      },
      { 
        name: 'TrainHeroic', 
        color: '#2563eb', 
        icon: Target,
        explanation: {
          title: 'TrainHeroic Weight Room Sync',
          category: 'Weight Room Engine',
          categoryIcon: Target,
          summary: 'Syncs programmed weight room sets, reps, and leaderboard tonnage.',
          howItWorks: 'Athletes input weights on rack-mounted tablets; CoachOS ingests data live.',
          replaces: 'Paper workout logs lost on the gym floor.',
          impact: 'Real-time telemetry during live team lifts.'
        }
      },
      { 
        name: 'Catapult GPS', 
        color: '#000000', 
        icon: Activity,
        explanation: {
          title: 'Catapult GPS Player Tracking',
          category: 'On-Field GPS Telemetry',
          categoryIcon: Activity,
          summary: 'Pulls sprint distance, top speed (mph), and high-intensity accelerations.',
          howItWorks: 'Auto-calculates daily practice strain vs game-day volume.',
          replaces: 'Subjective estimates of practice intensity.',
          impact: 'Pins down the exact physical toll of every scrimmage.'
        }
      },
      { 
        name: 'Vald ForceDecks', 
        color: '#10B981', 
        icon: Layers,
        explanation: {
          title: 'Vald ForceDecks Dual Force Plates',
          category: 'Biomechanical Jump Testing',
          categoryIcon: Layers,
          summary: 'Measures jump height, eccentric peak force, and left/right limb asymmetries.',
          howItWorks: 'Detects hidden fatigue and ACL injury risks before symptoms appear.',
          replaces: 'Subjective eye tests.',
          impact: 'Gold-standard sports science in an intuitive dashboard.'
        }
      },
    ],
    leftSectionTitle: 'Tactical Film Room & Combine Telemetry',
    leftSectionIcon: Video,
    leftItems: [
      {
        title: "John Davis — 40-Yard Dash Sprint Mechanics Analysis",
        meta: "Hudl Breakdown: Stride frequency + ground contact angle",
        status: "Clip Ready",
        statusColor: "bg-orange-100 text-orange-800",
        explanation: {
          title: '40-Yard Dash Sprint Analysis (John Davis)',
          category: 'Sprint Mechanics',
          categoryIcon: Video,
          summary: 'Slow-motion breakdown of first 10-yard acceleration drive angle and shin angles.',
          howItWorks: 'Highlights 0.08s ground contact time improvements with telestrator overlays.',
          replaces: 'Vague verbal coaching on the track.',
          impact: 'Shaves 0.15s off 40-yard dash times.'
        }
      },
      {
        title: "Tyler Bennett — 405 lb Back Squat PR (New Academy Record)",
        meta: "Velocity telemetry verified: 0.42 m/s concentric speed",
        status: "Record Broken",
        statusColor: "bg-emerald-100 text-emerald-800",
        explanation: {
          title: '405 lb Back Squat PR (Tyler Bennett)',
          category: 'Academy Record',
          categoryIcon: Trophy,
          summary: 'Safety Tyler Bennett set a new all-time academy record with verified velocity.',
          howItWorks: '0.42 m/s concentric speed verified using barbell encoder telemetry.',
          replaces: 'Unverified gym rumors.',
          impact: 'Inspires the entire locker room.'
        }
      },
      {
        title: "Varsity Travel Squad — Pre-Game Hydration & Nutrition",
        meta: "Collegiate protocol delivered to 24 travel athletes",
        status: "Protocol Active",
        statusColor: "bg-blue-100 text-blue-800",
        explanation: {
          title: 'Travel Game Nutrition Protocol',
          category: 'Nutrition Protocol',
          categoryIcon: ShieldCheck,
          summary: 'Electrolyte, carbohydrate timing, and hydration plan for Friday’s away game.',
          howItWorks: 'Delivered directly to the 24 travel roster athlete mobile apps.',
          replaces: 'Paper handouts left on the team bus.',
          impact: 'Prevents second-half cramping and dehydration.'
        }
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
        iconBg: 'bg-orange-100 text-orange-700',
        explanation: {
          title: 'Defensive Film Uploaded',
          category: 'Film Room Event',
          categoryIcon: Video,
          summary: 'Coach Marcus uploaded 4th quarter red-zone defense footage for unit review.',
          howItWorks: 'Notifies defensive backs and linebackers to complete review before Thursday practice.',
          replaces: 'Wasting 30 minutes of field time explaining basic alignments.',
          impact: 'Makes every live practice rep count.'
        }
      },
      {
        author: 'Tyler Bennett (Safety)',
        time: '18m ago',
        action: 'Logged ForceDeck Jump Telemetry',
        detail: '34.2 inch Vertical Leap (+1.4 in this training cycle)',
        icon: Trophy,
        iconBg: 'bg-emerald-100 text-emerald-700',
        explanation: {
          title: '34.2" Vertical Leap Telemetry',
          category: 'Force Plate Event',
          categoryIcon: Trophy,
          summary: 'Tyler logged a 34.2 inch countermovement jump on the dual force plates.',
          howItWorks: 'Calculates a +1.4 inch gain over the current 6-week explosive block.',
          replaces: 'Manual tape measurements on the wall.',
          impact: 'Concrete athletic data to showcase to college recruiters.'
        }
      }
    ]
  }
];
