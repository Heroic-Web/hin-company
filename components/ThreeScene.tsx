"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"

export default function ThreeScene() {
  return (
    <Canvas>

      <ambientLight intensity={1} />

      <Environment preset="city"/>


      <OrbitControls />

    </Canvas>
  )
}