"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 50
      }}
    >
      {/* Pencahayaan */}
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-5, 5, 5]}
        intensity={2}
      />

      {/* Objek 3D contoh */}
      <mesh rotation={[0.4, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />

        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}