const fs = require('fs');

const content = fs.readFileSync('src/App.tsx', 'utf8');

// Find the boundaries of the HeroDashboard function
const startIndex = content.indexOf('function HeroDashboard() {');
const endIndex = content.indexOf('function FAQItem(', startIndex);

const oldHeroDashboard = content.substring(startIndex, endIndex);

const newHeroDashboard = `
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
              className={\`text-sm font-extrabold \${variant.theme.primary}\`}
            >
              {variant.name}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="h-[600px] md:h-auto md:aspect-[16/9] bg-neutral-50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-neutral-200/60 overflow-hidden flex relative backdrop-blur-sm transition-colors duration-700">
        
        {/* Sidebar */}
        <div className={\`w-14 sm:w-16 md:w-64 text-brand-200 flex flex-col p-2 sm:p-4 shadow-xl z-10 relative transition-colors duration-700 \${variant.theme.sidebar}\`}>
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
                  <div key={i} className={\`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 \${item.active ? \`text-white \${variant.theme.activeMenu}\` : 'hover:bg-white/10 hover:text-white'}\`}>
                    <item.icon className={\`w-5 h-5 flex-shrink-0 \${item.active ? 'text-white' : 'opacity-60'}\`} />
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
                    <div className={\`absolute top-0 right-0 w-2 h-2 rounded-full border-2 border-white \${variant.theme.bg.replace('50', '500')}\`}></div>
                  </div>
                  <div className={\`w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105 \${variant.theme.sidebar}\`}>
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
                      <div className={\`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md \${variant.theme.bg} \${variant.theme.primary}\`}>
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
                        <span className={\`text-xs font-medium px-1.5 py-0.5 rounded-md \${variant.theme.bg} \${variant.theme.primary}\`}>+3</span>
                      </div>
                    </div>
                    <div className={\`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform \${variant.theme.bg} \${variant.theme.primary}\`}>
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
                      <Link2 className={\`w-4 h-4 \${variant.theme.primary}\`} />
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
                        <CheckSquare className={\`w-4 h-4 \${variant.theme.primary}\`} />
                        Today's Priorities
                      </h3>
                      <span className={\`text-xs font-medium px-2 py-1 rounded-md \${variant.theme.bg} \${variant.theme.primary}\`}>2 remaining</span>
                    </div>
                    <div className="space-y-2">
                      {variant.priorities.map((task, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors border border-transparent">
                          <div className={\`w-5 h-5 rounded-md border flex items-center justify-center transition-colors flex-shrink-0 \${task.done ? variant.theme.sidebar + ' border-transparent text-white' : 'border-neutral-300'}\`}>
                            {task.done && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <div className="flex-1">
                            <p className={\`text-sm font-medium \${task.done ? 'text-neutral-400 line-through' : 'text-brand-900'}\`}>{task.title}</p>
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
                      <Activity className={\`w-4 h-4 \${variant.theme.primary}\`} />
                      Recent Activity
                    </h3>
                    <div className="space-y-5 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
                      {variant.activities.map((act, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className={\`flex items-center justify-center w-8 h-8 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 \${act.bg} \${act.color}\`}>
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
`;

content = content.replace(oldHeroDashboard, newHeroDashboard);
fs.writeFileSync('src/App.tsx', content);

