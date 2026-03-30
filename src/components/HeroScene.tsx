import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, RoundedBox, Sparkles } from '@react-three/drei';
import type { Group, Mesh } from 'three';
import type { Flavor } from '../data/content';

interface HeroSceneProps {
  flavors: Flavor[];
}

export function HeroScene({ flavors }: HeroSceneProps) {
  const [primary, left, right] = flavors;

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.2, 8.5], fov: 30 }}
      >
        <Suspense fallback={null}>
          <SceneRig>
            <ambientLight intensity={1.6} />
            <directionalLight position={[4, 6, 6]} intensity={2.4} color="#ffffff" />
            <pointLight position={[-4, 2, 4]} intensity={26} color="#ff7a1a" />
            <pointLight position={[4, 2, 3]} intensity={22} color="#ff3bb8" />
            <pointLight position={[0, -1, 4]} intensity={12} color="#30c9ff" />

            <Sparkles
              count={18}
              scale={[8, 5, 6]}
              size={2.2}
              speed={0.35}
              color="#d4ff39"
              opacity={0.45}
            />
            <Sparkles
              count={14}
              scale={[8, 5, 6]}
              size={2.4}
              speed={0.25}
              color="#ff3bb8"
              opacity={0.22}
            />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
              <circleGeometry args={[3.8, 64]} />
              <meshBasicMaterial color="#11111a" transparent opacity={0.82} />
            </mesh>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.18, 0]}>
              <ringGeometry args={[2.2, 3.3, 64]} />
              <meshBasicMaterial color="#d4ff39" transparent opacity={0.16} />
            </mesh>

            <Float speed={2} rotationIntensity={0.18} floatIntensity={0.22}>
              <CanModel
                flavor={primary}
                position={[0, 0.15, 0.8]}
                rotation={[0, -0.04, -0.08]}
                scale={1.22}
              />
            </Float>

            <Float speed={1.8} rotationIntensity={0.16} floatIntensity={0.18}>
              <CanModel
                flavor={left}
                position={[-2.1, -0.35, -0.8]}
                rotation={[0.1, 0.3, -0.45]}
                scale={0.96}
              />
            </Float>

            <Float speed={1.9} rotationIntensity={0.16} floatIntensity={0.18}>
              <CanModel
                flavor={right}
                position={[2.1, -0.3, -0.85]}
                rotation={[0.06, -0.28, 0.34]}
                scale={0.94}
              />
            </Float>

            <ContactShadows
              position={[0, -2.18, 0]}
              opacity={0.52}
              scale={10}
              blur={2.6}
              far={4.2}
              color="#000000"
            />
          </SceneRig>
        </Suspense>
      </Canvas>
    </div>
  );
}

function SceneRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const targetY = state.pointer.x * 0.28;
    const targetX = state.pointer.y * 0.12;

    group.rotation.y += (targetY - group.rotation.y) * 0.06;
    group.rotation.x += (targetX - group.rotation.x) * 0.05;
    group.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
  });

  return <group ref={groupRef}>{children}</group>;
}

function CanModel({
  flavor,
  position,
  rotation,
  scale,
}: {
  flavor: Flavor;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  const groupRef = useRef<Group>(null);
  const topRef = useRef<Mesh>(null);

  useFrame((state) => {
    const group = groupRef.current;
    const top = topRef.current;

    if (group) {
      group.rotation.z += Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.0009;
    }

    if (top) {
      top.rotation.z = Math.sin(state.clock.elapsedTime * 0.7 + position[2]) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <mesh position={[0, 0, -0.03]}>
        <cylinderGeometry args={[0.95, 0.95, 3.35, 96]} />
        <meshPhysicalMaterial
          color="#d8d9de"
          metalness={0.96}
          roughness={0.24}
          clearcoat={1}
          clearcoatRoughness={0.18}
          envMapIntensity={1.6}
        />
      </mesh>

      <mesh position={[0, 1.71, 0]} ref={topRef}>
        <cylinderGeometry args={[0.98, 0.98, 0.12, 96]} />
        <meshStandardMaterial color="#c7c9d0" metalness={0.92} roughness={0.22} />
      </mesh>

      <mesh position={[0, -1.71, 0]}>
        <cylinderGeometry args={[0.98, 0.98, 0.12, 96]} />
        <meshStandardMaterial color="#a7a9b3" metalness={0.92} roughness={0.28} />
      </mesh>

      <mesh position={[0, 0.05, 0.94]}>
        <RoundedBox args={[1.34, 2.05, 0.09]} radius={0.16} smoothness={6}>
          <meshStandardMaterial
            color={flavor.accent}
            emissive={flavor.accent}
            emissiveIntensity={0.14}
            roughness={0.42}
            metalness={0.1}
          />
        </RoundedBox>
      </mesh>

      <mesh position={[0, 0.05, 0.88]}>
        <RoundedBox args={[1.54, 2.28, 0.02]} radius={0.22} smoothness={4}>
          <meshBasicMaterial color={flavor.accent} transparent opacity={0.08} />
        </RoundedBox>
      </mesh>

      <mesh position={[0, 1.25, 0.88]}>
        <planeGeometry args={[0.9, 0.18]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
      </mesh>

      <mesh position={[0, 0.82, 0.99]}>
        <planeGeometry args={[0.84, 0.12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.42} />
      </mesh>

      <mesh position={[0, -0.02, 0.99]}>
        <planeGeometry args={[0.94, 0.26]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.88} />
      </mesh>

      <mesh position={[0, -0.42, 0.995]}>
        <planeGeometry args={[0.84, 0.04]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      <mesh position={[0, -0.82, 0.99]}>
        <planeGeometry args={[0.82, 0.12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.34} />
      </mesh>

      <mesh position={[0.72, 0.03, 1.0]} rotation={[0, 0, -Math.PI / 2]}>
        <planeGeometry args={[0.78, 0.05]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.48} />
      </mesh>
    </group>
  );
}
