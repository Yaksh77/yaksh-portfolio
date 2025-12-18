"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
type ThreeMesh = any;

function AnimatedOrb() {
  const meshRef = useRef<ThreeMesh | null>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.35;
    meshRef.current.rotation.x = (state.pointer.y * Math.PI) / 6;
    meshRef.current.rotation.z = (state.pointer.x * Math.PI) / 12;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={1.3}
        color="#38bdf8"
        castShadow
      />
      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.8}
        color="#a855f7"
      />
      <AnimatedOrb />
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-[260px] w-full md:h-[340px]">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        shadows
        dpr={[1, 1.8]}
      >
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-border-glass/70 bg-bg-glass/80 px-3 py-1 text-[11px] text-text-main">
                Loading 3D scene…
              </div>
            </Html>
          }
        >
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
