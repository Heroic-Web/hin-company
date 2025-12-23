"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Physics, useSphere, usePlane } from "@react-three/cannon";
import React from "react";

/* ===== BALL ===== */
function Ball({ position }: { position: [number, number, number] }) {
  const [ref, api] = useSphere(() => ({
    mass: 0.4,
    position,
    args: [0.25],
    material: { restitution: 0.95 },
  }));

  React.useEffect(() => {
    api.velocity.set(
      (Math.random() - 0.5) * 4,
      Math.random() * 3 + 2,
      (Math.random() - 0.5) * 4
    );
  }, [api]);

  return (
    <mesh ref={ref as React.Ref<THREE.Mesh>}>
      <sphereGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial
        color="#4fc3f7"
        metalness={0.3}
        roughness={0.6}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

/* ===== GROUND ===== */
function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -6, 0],
  }));
  return <mesh ref={ref as React.Ref<THREE.Mesh>} />;
}

/* ===== SCENE ===== */
export default function ThreeScene() {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 6, 16], fov: 55 }}
      gl={{
        alpha: true,        // 🔥 TRANSPARAN
        antialias: true,
      }}
    >
      {/* ❌ JANGAN set background */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 15, 5]} intensity={1.2} />

      {/* Environment hanya untuk lighting */}
      <Environment preset="sunset" background={false} />

      <Physics gravity={[0, -9.81, 0]}>
        <Ground />

        {Array.from({ length: 14 }).map((_, i) => (
          <Ball
            key={i}
            position={[
              (Math.random() - 0.5) * 6,
              Math.random() * 6 + 8,
              (Math.random() - 0.5) * 4,
            ]}
          />
        ))}
      </Physics>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </Canvas>
  );
}
