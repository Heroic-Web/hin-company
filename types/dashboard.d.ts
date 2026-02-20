// types/dashboard.d.ts

export interface Metric {
  totalRevenue: number;
  totalCustomer: number;
  conversionPercentage: number;
  conversionTrend: Array<{ date: string; value: number }>;
  pendingActions: Array<{ text: string; link: string }>;
  latestUpdates: Array<{ text: string }>;
  campaigns: Array<{ id: number; name: string; service: string }>;
}
