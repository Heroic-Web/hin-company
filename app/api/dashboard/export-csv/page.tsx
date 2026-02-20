"use client";
import { useState } from "react";

export default function UploadCsvPage() {
  const [file, setFile] = useState<File | null>(null);

  const submit = async () => {
    if (!file) return alert("Pilih file CSV terlebih dahulu");
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/dashboard/upload-csv", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) return alert("Upload gagal");
    alert("Upload berhasil dan siap broadcast");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload CSV Affiliate</h1>
      <input type="file" accept=".csv" onChange={e=>setFile(e.target.files?.[0] || null)} className="mb-2"/>
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
    </div>
  );
}
