import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function FloatingShape() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} />
      <FloatingShape />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}