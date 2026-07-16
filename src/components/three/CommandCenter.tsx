"use client";

import { Environment, Html, Line, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const modules = [
  { label: "Project Goals", position: [-2.65, 0.75, 0.15], color: "#C8A94C" },
  { label: "Process Flow", position: [-1.25, -1.35, 0.95], color: "#74B7A1" },
  { label: "Digital Tools", position: [1.35, -1.08, -0.62], color: "#9CC6FF" },
  { label: "Stakeholders", position: [2.68, 0.58, 0.52], color: "#F0D886" },
  { label: "Delivery", position: [0.1, 1.55, -0.72], color: "#FFFFFF" },
] as const;

const center = new THREE.Vector3(0, 0, 0);

function ModuleNode({ label, position, color, index }: { label: string; position: readonly number[]; color: string; index: number }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(t * 1.25 + index) * 0.11;
      group.current.position.x = position[0] + pointer.x * (0.07 + index * 0.01);
    }
    if (core.current) {
      core.current.rotation.x = t * (0.55 + index * 0.05);
      core.current.rotation.y = t * (0.72 + index * 0.04);
      const scale = 1 + Math.sin(t * 2.2 + index) * 0.07;
      core.current.scale.setScalar(scale);
    }
    if (halo.current) {
      halo.current.rotation.z = t * (0.75 + index * 0.04);
      halo.current.rotation.x = Math.PI / 2 + Math.sin(t + index) * 0.16;
    }
  });

  return (
    <group ref={group} position={position as [number, number, number]}>
      <mesh ref={halo}>
        <torusGeometry args={[0.43, 0.012, 8, 56]} />
        <meshBasicMaterial color={color} transparent opacity={0.72} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.22, 1]} />
        <meshStandardMaterial color="#f7f4ec" emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.52} />
      </mesh>
      <mesh scale={1.72}>
        <sphereGeometry args={[0.24, 24, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.09} depthWrite={false} />
      </mesh>
      <Html center distanceFactor={6.2} className="scene-label scene-label--active">
        {label}
      </Html>
    </group>
  );
}

function DataPulse({ target, index, color }: { target: readonly number[]; index: number; color: string }) {
  const pulse = useRef<THREE.Mesh>(null);
  const trail = useRef<THREE.Mesh>(null);
  const targetVector = useMemo(() => new THREE.Vector3(...target), [target]);

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * (0.18 + index * 0.018) + index * 0.17) % 1;
    const eased = 0.5 - Math.cos(t * Math.PI) / 2;
    const point = center.clone().lerp(targetVector, eased);
    if (pulse.current) {
      pulse.current.position.copy(point);
      const scale = 0.7 + Math.sin(t * Math.PI) * 0.75;
      pulse.current.scale.setScalar(scale);
    }
    if (trail.current) {
      trail.current.position.copy(point.clone().lerp(center, 0.12));
      trail.current.lookAt(targetVector);
      trail.current.scale.set(0.045, 0.045, 0.38 + Math.sin(t * Math.PI) * 0.18);
    }
  });

  return (
    <>
      <mesh ref={trail}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={color} transparent opacity={0.34} depthWrite={false} />
      </mesh>
      <mesh ref={pulse}>
        <sphereGeometry args={[0.055, 18, 18]} />
        <meshBasicMaterial color={color} transparent opacity={0.95} />
      </mesh>
    </>
  );
}

function Core() {
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const ringC = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.x = t * 0.48 + pointer.y * 0.35;
      core.current.rotation.y = t * 0.72 + pointer.x * 0.55;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.9;
    if (ringB.current) ringB.current.rotation.x = Math.PI / 2 + t * 0.65;
    if (ringC.current) ringC.current.rotation.y = t * 0.55;
  });

  return (
    <group>
      <mesh ref={ringA}>
        <torusGeometry args={[0.86, 0.014, 8, 96]} />
        <meshBasicMaterial color="#C8A94C" transparent opacity={0.8} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.01, 8, 96]} />
        <meshBasicMaterial color="#74B7A1" transparent opacity={0.46} />
      </mesh>
      <mesh ref={ringC} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.22, 0.008, 8, 96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.5, 3]} />
        <MeshDistortMaterial
          color="#0E3B2E"
          emissive="#0E3B2E"
          emissiveIntensity={0.42}
          roughness={0.18}
          metalness={0.5}
          distort={0.22}
          speed={2.2}
        />
      </mesh>
      <pointLight color="#C8A94C" intensity={3.2} distance={5} />
    </group>
  );
}

function DataLayers() {
  const layerA = useRef<THREE.Mesh>(null);
  const layerB = useRef<THREE.Mesh>(null);
  const layerC = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (layerA.current) layerA.current.rotation.z = t * 0.08;
    if (layerB.current) layerB.current.rotation.z = -t * 0.12;
    if (layerC.current) layerC.current.rotation.z = t * 0.17;
  });

  return (
    <>
      <mesh ref={layerA} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.62, 0]}>
        <ringGeometry args={[1.1, 3.75, 96]} />
        <meshBasicMaterial color="#0E3B2E" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={layerB} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.48, 0]}>
        <ringGeometry args={[2.05, 2.12, 128]} />
        <meshBasicMaterial color="#C8A94C" transparent opacity={0.34} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={layerC} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.34, 0]}>
        <circleGeometry args={[0.76, 72]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const stars = useMemo(() => {
    return Array.from({ length: 70 }, (_, index) => {
      const angle = index * 2.399;
      const radius = 1.3 + ((index * 37) % 100) / 42;
      return [Math.cos(angle) * radius, -1.2 + ((index * 19) % 100) / 72, Math.sin(angle) * radius * 0.52] as const;
    });
  }, []);

  useFrame(({ pointer, clock, camera }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = pointer.x * 0.24 + Math.sin(t * 0.18) * 0.12;
      group.current.rotation.x = -pointer.y * 0.11 + Math.cos(t * 0.14) * 0.045;
    }
    camera.position.x = pointer.x * 0.26;
    camera.position.y = 0.72 + pointer.y * 0.16;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.58} />
      <directionalLight position={[2.5, 4.5, 3.2]} intensity={2.8} color="#fff4d0" />
      <pointLight position={[-3.4, 1.5, 2.4]} intensity={2.5} color="#74B7A1" />
      <pointLight position={[3.3, -0.4, 1.5]} intensity={1.8} color="#C8A94C" />
      <group ref={group}>
        <DataLayers />
        {stars.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[index % 5 === 0 ? 0.025 : 0.014, 8, 8]} />
            <meshBasicMaterial color={index % 4 === 0 ? "#C8A94C" : "#0E3B2E"} transparent opacity={0.22} />
          </mesh>
        ))}
        {modules.map((module) => (
          <Line
            key={`${module.label}-line`}
            points={[center, new THREE.Vector3(...module.position)]}
            color={module.color}
            lineWidth={1.6}
            transparent
            opacity={0.72}
          />
        ))}
        {modules.map((module, index) => (
          <DataPulse key={`${module.label}-pulse`} target={module.position} index={index} color={module.color} />
        ))}
        {modules.map((module, index) => (
          <ModuleNode key={module.label} label={module.label} position={module.position} color={module.color} index={index} />
        ))}
        <Core />
      </group>
      <Environment preset="city" />
    </>
  );
}

export function CommandCenter() {
  return (
    <div className="command-center" aria-label="Interactive connected project ecosystem">
      <Canvas
        camera={{ position: [0, 0.72, 6.1], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="webgl-fallback" aria-hidden="true">
        {modules.map((module) => (
          <span key={module.label}>{module.label}</span>
        ))}
      </div>
    </div>
  );
}
