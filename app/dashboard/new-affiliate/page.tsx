// app/dashboard/new-affiliate/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewAffiliatePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async () => {
    const res = await fetch("/api/dashboard/affiliates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Gagal menambahkan affiliate");
      return;
    }

    setSuccess(`Affiliate ${name} berhasil ditambahkan!`);
    setName(""); setEmail(""); setPassword("");

    // redirect ke halaman kelola DollarSign
    router.push(`/dashboard/affiliates/${data.id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Affiliate Baru</h1>
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <input placeholder="Nama" className="border p-2 rounded w-full mb-2" value={name} onChange={e=>setName(e.target.value)}/>
      <input placeholder="Email" className="border p-2 rounded w-full mb-2" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-2" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button onClick={submit} className="bg-green-600 text-white px-4 py-2 rounded">Tambah Affiliate</button>
    </div>
  );
}
