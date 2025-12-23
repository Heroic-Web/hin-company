"use client";

import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
});

export default function Cinematic3DBackground() {
  return (
    <div
      className="
        pointer-events-none 
        absolute inset-0 
        z-0
      "
    >
      <ThreeScene />
    </div>
  );
}
