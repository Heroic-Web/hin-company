import React from "react";

export const metadata = {
  title: "Jasa Artificial Intelligence & Machine Learning | HINAI Tech",
  description:
    "Jasa pembuatan sistem AI, Machine Learning, dan mentoring Data Science untuk bisnis dan akademik.",
};

export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white">
      {children}
    </section>
  );
}