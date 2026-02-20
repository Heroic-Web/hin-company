"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Email atau password salah");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Affiliate</h1>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded mb-4" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded mb-4" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submit} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded font-semibold">{loading ? "Loading..." : "Login"}</button>
        <p className="text-center text-sm mt-4">
          Belum punya akun? <Link href="/register" className="text-blue-600 font-semibold">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
}
