"use client";

import { useEffect, useState } from "react";

export default function CampaignPickerPage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/dashboard/campaigns")
      .then((r) => r.json())
      .then(setCampaigns);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Campaign Picker</h1>

      {campaigns.map((c) => (
        <div
          key={c.id}
          className="border p-3 rounded mb-2 bg-white shadow"
        >
          <div className="font-bold">{c.name}</div>
          <div className="text-sm text-gray-600">{c.service}</div>
        </div>
      ))}
    </div>
  );
}
