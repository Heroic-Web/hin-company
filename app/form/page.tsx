"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const REDIRECT_URL = "https://forms.gle/GyEEePHAXCGvQgYt7";
const REDIRECT_SECONDS = 10;

export default function FormPage() {
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.replace(REDIRECT_URL);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progress =
    ((REDIRECT_SECONDS - countdown) / REDIRECT_SECONDS) * 100;

  return (
  <>
    <div className="background">
      <span className="orb orb1" />
      <span className="orb orb2" />
      <span className="orb orb3" />
    </div>

    <main className="container">
      <div className="card">
        <div className="logoWrapper">
          <div className="logoContainer">
            <Image
              src="/HINAI_Tech_Logo.png"
              alt="HINAI Tech"
              width={120}
              height={120}
              priority
              className="logoImage"
            />
          </div>
        </div>

        <span className="badge">Project Onboarding</span>

        <h1>Selangkah Lagi Menuju Proyek Anda 🚀</h1>

        <p className="description">
          Tim HINAI Tech siap membantu mengubah ide Anda menjadi solusi
          digital yang profesional, cepat, dan berdampak bagi bisnis Anda.
        </p>

        <div className="quote">
          "Proyek hebat tidak dimulai dari kode, tetapi dari brief yang
          jelas."
        </div>

        <div className="loader3d">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>
        </div>

        <div className="progressContainer">
          <div
            className="progressBar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="redirectText">
          Mengarahkan ke formulir dalam{" "}
          <strong>{countdown} detik</strong>
        </p>

        <button
          className="button"
          onClick={() => window.location.replace(REDIRECT_URL)}
        >
          Isi Form Sekarang
        </button>
      </div>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px;
        position: relative;
        overflow: hidden;
        background: #020617;
      }

      .background {
        position: fixed;
        inset: 0;
        overflow: hidden;
        z-index: 0;
      }

      .orb {
        position: absolute;
        border-radius: 9999px;
        filter: blur(80px);
        opacity: 0.25;
        animation: float 12s ease-in-out infinite;
      }

      .orb1 {
        width: 300px;
        height: 300px;
        background: #2563eb;
        top: -100px;
        left: -100px;
      }

      .orb2 {
        width: 400px;
        height: 400px;
        background: #7c3aed;
        bottom: -120px;
        right: -120px;
        animation-delay: 2s;
      }

      .orb3 {
        width: 250px;
        height: 250px;
        background: #06b6d4;
        top: 50%;
        left: 60%;
        animation-delay: 4s;
      }

      .card {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 680px;
        padding: 40px;
        border-radius: 32px;
        color: white;
        text-align: center;

        background: rgba(15, 23, 42, 0.72);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);

        border: 1px solid rgba(255, 255, 255, 0.08);

        box-shadow:
          0 30px 80px rgba(0, 0, 0, 0.45),
          inset 0 1px 0 rgba(255, 255, 255, 0.08);

        transform-style: preserve-3d;
        transform: perspective(1200px) rotateX(8deg);

        animation: cardFloat 6s ease-in-out infinite;
      }

      .logoWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
      }

      .logoContainer {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 150px;
        height: 150px;
        padding: 14px;

        border-radius: 32px;

        background: rgba(255, 255, 255, 0.08);

        border: 1px solid rgba(255, 255, 255, 0.18);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        overflow: hidden;

        box-shadow:
          0 12px 40px rgba(0, 0, 0, 0.25),
          0 0 30px rgba(255, 255, 255, 0.08),
          inset 0 1px 1px rgba(255, 255, 255, 0.15);

        animation: pulse 2.5s infinite;
      }

      .logoContainer::before {
        content: "";
        position: absolute;
        inset: 0;

        border-radius: inherit;

        background-image:
          linear-gradient(
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
          );

        background-size: 18px 18px;

        pointer-events: none;
      }

      .logoImage {
        width: 100%;
        height: 100%;

        object-fit: contain;

        border-radius: 20px;

        position: relative;
        z-index: 1;

        filter:
          drop-shadow(0 20px 40px rgba(37, 99, 235, 0.35))
          drop-shadow(0 0 30px rgba(124, 58, 237, 0.3));

        animation: pulse 2.5s infinite;
      }

      .badge {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.12);
        border: 1px solid rgba(96, 165, 250, 0.3);
        color: #bfdbfe;
        margin-bottom: 18px;
      }

      h1 {
        font-size: 34px;
        line-height: 1.3;
        margin-bottom: 18px;
      }

      .description {
        color: #cbd5e1;
        line-height: 1.8;
        margin-bottom: 24px;
      }

      .quote {
        padding: 18px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.05);
        color: #e2e8f0;
        font-style: italic;
        margin-bottom: 24px;
      }

      .tips {
        text-align: left;
        padding: 20px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.04);
        margin-bottom: 28px;
      }

      .tips h3 {
        margin-top: 0;
      }

      .tips ul {
        margin: 12px 0 0;
        padding-left: 20px;
        color: #cbd5e1;
        line-height: 1.9;
      }

      .loader3d {
        position: relative;
        width: 90px;
        height: 90px;
        margin: 0 auto 32px;
        transform-style: preserve-3d;
        animation: rotate3d 6s linear infinite;
      }

      .ring {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 4px solid transparent;
      }

      .ring1 {
        border-top-color: #60a5fa;
        transform: rotateX(70deg);
      }

      .ring2 {
        border-top-color: #a855f7;
        transform: rotateY(70deg);
      }

      .ring3 {
        border-top-color: #06b6d4;
        transform: rotateZ(70deg);
      }

      .progressContainer {
        width: 100%;
        height: 12px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.08);
        margin-bottom: 20px;
      }

      .progressBar {
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(
          90deg,
          #2563eb,
          #7c3aed,
          #06b6d4
        );
        transition: width 1s linear;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      }

      .redirectText {
        color: #cbd5e1;
        margin-bottom: 28px;
      }

      .button {
        border: none;
        cursor: pointer;
        padding: 16px 32px;
        border-radius: 16px;

        color: white;
        font-size: 16px;
        font-weight: 700;

        background: linear-gradient(135deg, #2563eb, #7c3aed);

        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.35);

        transition: all 0.3s ease;
      }

      .button:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(124, 58, 237, 0.45);
      }

      @keyframes rotate3d {
        from {
          transform: rotateX(0deg) rotateY(0deg);
        }
        to {
          transform: rotateX(360deg) rotateY(360deg);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.06);
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-30px);
        }
      }

      @keyframes cardFloat {
        0%,
        100% {
          transform: perspective(1200px) rotateX(8deg)
            translateY(0);
        }

        50% {
          transform: perspective(1200px) rotateX(8deg)
            translateY(-10px);
        }
      }

      @media (max-width: 768px) {
        .card {
          padding: 28px;
          transform: none;
          animation: none;
        }

        h1 {
          font-size: 28px;
        }

        .logoContainer {
          width: 120px;
          height: 120px;
          padding: 12px;
          border-radius: 24px;
        }
      }
    `}</style>
  </>
);
}