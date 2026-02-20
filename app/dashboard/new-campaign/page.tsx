"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCampaignPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [service, setService] = useState("Website Services");

  const submit = async () => {
    const res = await fetch("/api/dashboard/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, service }),
    });

    const data = await res.json();
    router.push("/dashboard"); // kembali ke dashboard, DATA SUDAH ADA
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Buat Campaign Baru</h1>

      <input
        placeholder="Nama Campaign"
        className="border p-2 w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-3"
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option>Website Services</option>
        <option>Article SEO</option>
        <option>Design Service</option>
      </select>

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Simpan Campaign
      </button>
    </div>
  );
}
