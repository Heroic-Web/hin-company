"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// TypeScript interface
interface Metric {
  totalRevenue: number;
  totalCustomer: number;
  conversionPercentage: number;
  conversionTrend: Array<{ date: string; value: number }>;
  pendingActions: Array<{ text: string; link: string }>;
  latestUpdates: Array<{ text: string }>;
  campaigns: Array<{ id: number; name: string; service: string }>;
}

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Metric>({
    totalRevenue: 0,
    totalCustomer: 0,
    conversionPercentage: 0,
    conversionTrend: [],
    pendingActions: [],
    latestUpdates: [],
    campaigns: [],
  });

  // Realtime fetch
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("/api/dashboard/metrics");
        const data = await res.json();
        setMetrics(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Affiliate Dashboard
      </h1>

      {/* Core Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="font-semibold">Total Revenue</h2>
          <p className="text-xl font-bold text-green-600">${metrics.totalRevenue}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="font-semibold">Total Customers</h2>
          <p className="text-xl font-bold text-blue-600">{metrics.totalCustomer}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="font-semibold">Conversion %</h2>
          <p className="text-xl font-bold text-purple-600">{metrics.conversionPercentage}%</p>
        </div>
      </div>

      {/* Quick CTA */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <Link href="/dashboard/new-campaign" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buat Campaign Baru
        </Link>
        <Link href="/dashboard/new-affiliate" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Tambah Affiliate
        </Link>
        <Link href="/dashboard/campaign-picker" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
          Campaign Picker
        </Link>
      </div>

      {/* Conversion Trend Chart */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Conversion Trend</h2>
        <Line
          data={{
            labels: metrics.conversionTrend.map((d) => d.date),
            datasets: [
              {
                label: "Conversions",
                data: metrics.conversionTrend.map((d) => d.value),
                borderColor: "rgba(59, 130, 246, 1)",
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                tension: 0.3,
              },
            ],
          }}
          options={{ responsive: true }}
        />
      </div>

      {/* Pending Actions */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Pending Actions</h2>
        <ul className="list-disc pl-5">
          {metrics.pendingActions.map((p, i) => (
            <li key={i}>
              {p.text} - <Link href={p.link} className="text-blue-600 underline">Lihat</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Updates */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Latest Updates</h2>
        <ul className="list-disc pl-5">
          {metrics.latestUpdates.map((u, i) => (
            <li key={i}>{u.text}</li>
          ))}
        </ul>
      </div>

      {/* Campaign List */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Campaigns</h2>
        <ul className="list-disc pl-5">
          {metrics.campaigns.map((c) => (
            <li key={c.id}>{c.name} - <span className="italic">{c.service}</span></li>
          ))}
        </ul>
      </div>

      {/* Export & Upload CSV */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <Link href="/api/dashboard/export-csv" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Download CSV
        </Link>
        <Link href="/dashboard/upload-csv" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Upload CSV
        </Link>
      </div>
    </div>
  );
}
