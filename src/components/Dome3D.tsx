import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const DomeModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Create earthbag dome geometry
  const createDomeGeometry = () => {
    const geometry = new THREE.SphereGeometry(1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6);
    return geometry;
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Main dome structure */}
        <mesh position={[0, -0.3, 0]}>
          <primitive object={createDomeGeometry()} attach="geometry" />
          <meshStandardMaterial
            color="#B77466"
            roughness={0.85}
            metalness={0.05}
            flatShading={false}
          />
        </mesh>

        {/* Dome base ring */}
        <mesh position={[0, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.48, 0.08, 16, 48]} />
          <meshStandardMaterial color="#9A6255" roughness={0.9} />
        </mesh>

        {/* Entry arch */}
        <mesh position={[0, -0.6, 1.4]}>
          <boxGeometry args={[0.6, 0.8, 0.2]} />
          <meshStandardMaterial color="#050505" />
        </mesh>

        {/* Ground plane */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[3, 48]} />
          <meshStandardMaterial color="#1a1a1a" roughness={1} />
        </mesh>

        {/* Decorative rings on dome */}
        {[0.3, 0, -0.3, -0.6].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.2 - i * 0.25, 0.02, 8, 48]} />
            <meshStandardMaterial color="#E2B59A" roughness={0.7} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const DomeFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-24 h-24 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

export const Dome3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <Suspense fallback={<DomeFallback />}>
        <Canvas
          camera={{ position: [0, 0.5, 4], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color="#FFE1AF"
            castShadow
          />
          <directionalLight
            position={[-3, 3, -3]}
            intensity={0.3}
            color="#B77466"
          />
          <pointLight position={[0, 2, 0]} intensity={0.5} color="#FFE1AF" />
          
          <DomeModel />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
          />
          <Environment preset="sunset" />
        </Canvas>
      </Suspense>
    </div>
  );
};
