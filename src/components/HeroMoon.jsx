import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
function Moon() {

  const moonRef = useRef();
  const orbitRef = useRef();
  const glowRef = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/rt.jpg"
  );

  useFrame((state) => {

    const time = state.clock.elapsedTime;

    if (moonRef.current) {

      moonRef.current.rotation.y += 0.003;
      moonRef.current.rotation.x += 0.0005;

      moonRef.current.position.y =
        Math.sin(time * 0.8) * 0.08;

    }

    if (orbitRef.current) {

      orbitRef.current.rotation.z += 0.002;

    }

    if (glowRef.current) {

      const scale =
        1 + Math.sin(time * 2) * 0.03;

      glowRef.current.scale.set(
        scale,
        scale,
        scale
      );

    }

  });

  return (

    <group>

      {/* القمر */}

      <mesh ref={moonRef}>

        <sphereGeometry
          args={[1, 128, 128]}
        />

        <meshStandardMaterial
          map={texture}
          roughness={0.85}
          metalness={0.05}
        />

      </mesh>

      {/* هالة داخلية */}

      <mesh ref={glowRef}>

        <sphereGeometry
          args={[1.12, 64, 64]}
        />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.12}
        />

      </mesh>

      {/* هالة خارجية */}

      <mesh>

        <sphereGeometry
          args={[1.25, 64, 64]}
        />

        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.04}
        />

      </mesh>

      {/* الحلقة المدارية */}

      <mesh rotation={[1.2, 0, 0]}>

        <torusGeometry
          args={[1.45, 0.015, 32, 200]}
        />

        <meshBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.45}
        />

      </mesh>

      {/* النجوم */}

      <group ref={orbitRef}>

        <mesh position={[1.8, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#fde047" />
        </mesh>

        <mesh position={[-1.8, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#fde047" />
        </mesh>

        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#fde047" />
        </mesh>

        <mesh position={[0, -1.8, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#fde047" />
        </mesh>

      </group>

    </group>

  );
}

export default function HeroMoon() {

  return (

    <div className="hero-moon">

      <Canvas camera={{ position: [0, 0, 4] }}>

        <ambientLight intensity={1.8} />

        <pointLight
          position={[4, 4, 4]}
          intensity={15}
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={6}
          color="#60a5fa"
        />

        <pointLight
          position={[0, 0, 2]}
          intensity={3}
          color="#93c5fd"
        />

        <Moon />

      </Canvas>

    </div>

  );
}