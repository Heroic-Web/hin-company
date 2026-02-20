// app/api/dashboard/metrics/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalRevenue: 12500,
    totalCustomer: 320,
    conversionPercentage: 28,

    conversionTrend: [
      { date: "2025-12-01", value: 5 },
      { date: "2025-12-02", value: 8 },
      { date: "2025-12-03", value: 12 },
    ],

    pendingActions: [
      { text: "Payout Affiliate #1", link: "/dashboard/payout/1" },
    ],

    latestUpdates: [
      { text: "Affiliate baru mendaftar: john@gmail.com" },
      { text: "Komisi disetujui untuk Affiliate #2" },
    ],

    campaigns: [
      { id: 1, name: "Website Services", service: "Website Development" },
      { id: 2, name: "SEO Articles", service: "Article SEO" },
      { id: 3, name: "Graphic Design", service: "Design Service" },
    ],
  });
}
