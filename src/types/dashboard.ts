import { LucideIcon } from 'lucide-react';

export interface ExplanationInfo {
  title: string;
  category: string;
  categoryIcon?: LucideIcon;
  badge?: string;
  summary: string;
  howItWorks: string;
  replaces?: string;
  impact?: string;
}

export interface MetricCard {
  title: string;
  value: string;
  sub: string;
  badge: string;
  badgeType: 'positive' | 'neutral' | 'accent';
  type: 'metric' | 'progress' | 'chart';
  progress?: number;
  chartData?: { name?: string; value: number }[];
  explanation: ExplanationInfo;
}

export interface IntegratedTool {
  name: string;
  color: string;
  icon: LucideIcon;
  explanation: ExplanationInfo;
}

export interface DeliverableItem {
  title: string;
  meta: string;
  status: string;
  statusColor: string;
  explanation: ExplanationInfo;
}

export interface ActivityItem {
  author: string;
  time: string;
  action: string;
  detail: string;
  icon: LucideIcon;
  iconBg: string;
  explanation: ExplanationInfo;
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  badge?: string;
  active?: boolean;
  explanation: ExplanationInfo;
}

export interface DashboardVariant {
  id: string;
  name: string;
  shortName: string;
  tabIcon: LucideIcon;
  tagline: string;
  provesTitle: string;
  provesOutcome: string;
  provesProofBadges: string[];
  theme: {
    sidebar: string;
    activeMenu: string;
    primary: string;
    accentBg: string;
    badgeBg: string;
    topbarBg: string;
    cardBg: string;
    chartColor: string;
    glow: string;
  };
  headerStatus: string;
  menu: MenuItem[];
  topCards: MetricCard[];
  tools: IntegratedTool[];
  leftSectionTitle: string;
  leftSectionIcon: LucideIcon;
  leftItems: DeliverableItem[];
  rightSectionTitle: string;
  rightSectionIcon: LucideIcon;
  rightItems: ActivityItem[];
}
