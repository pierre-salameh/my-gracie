import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Moon() {

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/rt.jpg"
    
  );

  const moonRef = useRef();

  useFrame(() => {

    if (moonRef.current) {

      moonRef.current.rotation.y += 0.003;

    }

  });

  return (

    <group>

      {/* القمر */}

      <mesh ref={moonRef}>

        <sphereGeometry
          args={[1, 64, 64]}
        />

        <meshStandardMaterial
          map={texture}
          roughness={0.8}
          metalness={0.05}
        />

      </mesh>

      {/* هالة داخلية */}

      <mesh>

        <sphereGeometry
          args={[1.08, 64, 64]}
        />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.08}
        />

      </mesh>

      {/* هالة خارجية */}

      <mesh>

        <sphereGeometry
          args={[1.18, 64, 64]}
        />

        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.04}
        />

      </mesh>

    </group>

  );
}

function OrbitStars() {

  const groupRef = useRef();

  useFrame(() => {

    if (groupRef.current) {

      groupRef.current.rotation.z += 0.002;

    }

  });

  const stars = useMemo(() => {

    return [
      [1.8, 0, 0],
      [-1.8, 0, 0],
      [0, 1.8, 0],
      [0, -1.8, 0],
      [1.3, 1.3, 0],
      [-1.3, -1.3, 0]
    ];

  }, []);

  return (

    <group ref={groupRef}>

      {stars.map((pos, index) => (

        <mesh
          key={index}
          position={pos}
        >

          <sphereGeometry
            args={[0.05, 16, 16]}
          />

          <meshBasicMaterial
            color="#fde047"
          />

        </mesh>

      ))}

    </group>

  );
}

export default function MiniMoon() {

  return (

    <Canvas camera={{ position: [0, 0, 3] }}>

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

      <Moon />

      <OrbitStars />

    </Canvas>

  );
}