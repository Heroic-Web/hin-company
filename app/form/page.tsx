"use client";

import { useEffect } from "react";

export default function FormPage() {
  useEffect(() => {
    window.location.replace("https://forms.gle/GyEEePHAXCGvQgYt7");
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial",
      flexDirection: "column",
      gap: "10px"
    }}>
      <h2>HINAI Tech</h2>
      <p>Mengarahkan ke form proyek...</p>
    </div>
  );
}