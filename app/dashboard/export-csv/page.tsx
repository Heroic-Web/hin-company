// app/dashboard/export-csv/page.tsx
"use client";
import Link from "next/link";

export default function ExportCsvPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Export Data Affiliate</h1>
      <Link href="/api/dashboard/export-csv" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Download CSV (Template Rapi & Berwarna)
      </Link>
    </div>
  );
}
