"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true); setError(""); setSuccess("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) { setError(data.error || "Gagal mendaftar"); return; }
    setSuccess("Pendaftaran berhasil! Silakan cek email.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register Affiliate</h2>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">{success}</div>}
        <input placeholder="Nama" className="w-full border px-4 py-2 rounded mb-3" onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email" className="w-full border px-4 py-2 rounded mb-3" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded mb-3" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button onClick={submit} disabled={loading} className="bg-blue-600 text-white w-full py-2 mt-2 rounded">{loading?"Loading...":"Daftar"}</button>
        <p className="text-center text-sm mt-4">Sudah punya akun? <Link href="/login" className="text-blue-600 font-semibold">Login</Link></p>
      </div>
    </div>
  );
}

