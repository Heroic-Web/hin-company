"use client";

import { useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 text-white">

      {/* Glow Effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[150px] opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[150px] opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Jasa Artificial Intelligence <br />
          & Machine Learning Solution
        </h1>

        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
          Pengembangan Sistem AI, Program Machine Learning,
          serta Mentoring Proyek Data Science untuk kebutuhan
          bisnis, startup, dan akademik.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <a
            href="/contact"
            className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Mulai Konsultasi
          </a>

          <a
            href="#paket"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-indigo-700 transition"
          >
            Eksplor Solusi
          </a>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="relative">

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-indigo-700 w-10 h-10 rounded-full shadow-md z-10"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-indigo-700 w-10 h-10 rounded-full shadow-md z-10"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
          >
            {[
              "Machine Learning Model",
              "AI Deployment",
              "Computer Vision",
              "Natural Language Processing",
              "Predictive Analytics",
              "AI for Business",
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-sm opacity-80 mt-3">
                  Solusi AI scalable dan siap implementasi.
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}