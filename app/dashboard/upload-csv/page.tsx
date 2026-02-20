"use client";

import { useState } from "react";

export default function UploadCsvPage() {
  const [file, setFile] = useState<File | null>(null);

  const upload = async () => {
    if (!file) return alert("Pilih file dulu");

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/dashboard/upload-csv", {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      alert("Upload gagal");
      return;
    }

    alert("Upload berhasil & siap broadcast");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Affiliate File</h1>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={upload}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Upload & Broadcast
      </button>
    </div>
  );
}
