"use client";

import React from "react";

const BIRD_COUNT = 14;
const BALL_COUNT = 6;

export default function BirdsAndClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* ================= CLOUDS ================= */}
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
      <div className="cloud cloud-4" />

      {/* ================= BIRDS ================= */}
      {Array.from({ length: BIRD_COUNT }).map((_, i) => (
        <div
          key={`bird-${i}`}
          className="bird"
          style={{
            top: `${Math.random() * 60 + 10}%`,
            animationDuration: `${18 + Math.random() * 25}s`,
            transform: `scale(${0.6 + Math.random() * 0.6})`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* ================= THROWING BALLS ================= */}
      {Array.from({ length: BALL_COUNT }).map((_, i) => (
        <div
          key={`ball-${i}`}
          className={`ball ${i % 2 === 0 ? "earth" : "metal"}`}
          style={{
            left: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
            transform: `scale(${0.6 + Math.random() * 0.6})`,
          }}
        />
      ))}

      {/* ================= LIGHTNING ================= */}
      <div className="lightning" />

      <style jsx>{`
        /* ===== CLOUD ===== */
        .cloud {
          position: absolute;
          width: 220px;
          height: 70px;
          background: white;
          border-radius: 100px;
          opacity: 0.9;
          animation: cloudMove linear infinite;
        }

        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: white;
          width: 90px;
          height: 90px;
          top: -45px;
          border-radius: 50%;
        }

        .cloud::before {
          left: 25px;
        }

        .cloud::after {
          right: 25px;
        }

        .cloud-1 {
          top: 10%;
          animation-duration: 70s;
        }
        .cloud-2 {
          top: 25%;
          transform: scale(0.85);
          animation-duration: 95s;
        }
        .cloud-3 {
          top: 40%;
          transform: scale(0.7);
          animation-duration: 120s;
        }
        .cloud-4 {
          top: 55%;
          transform: scale(0.6);
          animation-duration: 150s;
        }

        @keyframes cloudMove {
          from {
            left: -300px;
          }
          to {
            left: 110%;
          }
        }

        /* ===== BIRD ===== */
        .bird {
          position: absolute;
          left: -60px;
          width: 20px;
          height: 10px;
          border-top: 2px solid #111;
          border-radius: 50%;
          animation: birdFly linear infinite;
        }

        .bird::after {
          content: "";
          position: absolute;
          right: -18px;
          width: 20px;
          height: 10px;
          border-top: 2px solid #111;
          border-radius: 50%;
          transform: rotateY(180deg);
        }

        @keyframes birdFly {
          from {
            left: -60px;
          }
          to {
            left: 110%;
          }
        }

        /* ===== BALLS ===== */
        .ball {
          position: absolute;
          bottom: -80px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          animation: throwBall ease-in-out infinite;
          box-shadow: inset -8px -8px 16px rgba(0, 0, 0, 0.25);
        }

        .ball.metal {
          background: radial-gradient(
            circle at 30% 30%,
            #ffffff,
            #aaa,
            #555
          );
        }

        .ball.earth {
          background: radial-gradient(
            circle at 30% 30%,
            #4fc3f7,
            #1565c0,
            #0d47a1
          );
        }

        @keyframes throwBall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-420px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
            opacity: 0;
          }
        }

        /* ===== LIGHTNING ===== */
        .lightning {
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0;
          animation: lightningFlash 14s infinite;
        }

        @keyframes lightningFlash {
          0%,
          93%,
          100% {
            opacity: 0;
          }
          94% {
            opacity: 0.6;
          }
          95% {
            opacity: 0.1;
          }
          96% {
            opacity: 0.8;
          }
          97% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
