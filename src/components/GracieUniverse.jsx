import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ShootingStar from "./ShootingStar";

import * as THREE from "three";
import { useMemo, useRef } from "react";

function FloatingParticles() {



     

  const positions = useMemo(() => {

    const arr = [];

    for (let i = 0; i < 3000; i++) {

      arr.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );

    }

    return new Float32Array(arr);

  }, []);

  return (
    <points>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />

      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#93c5fd"
        transparent
        opacity={0.8}
      />

    </points>
  );
}
function GracieMoon() {






    
     const texture = useLoader( 
        THREE.TextureLoader, "/textures/rt.jpg" );
      const moonRef = useRef();
       useFrame(() => { 
        if (moonRef.current)
             { moonRef.current.rotation.y += 0.002; }
     }
    );
        return (
             <group>
                 {/* القمر */} 
             <mesh ref={moonRef}>
             <sphereGeometry args={[2, 128, 128]} /> 
             <meshStandardMaterial map={texture} /> 
             </mesh> 
             {/* الهالة الزرقاء */} 
             <mesh> 
                <sphereGeometry args={[2.3, 64, 64]} />
                 <meshBasicMaterial color="#2563eb" transparent opacity={0.08} />
                  </mesh>
                   </group>
                   ); 
                }




export default function GracieUniverse() {


    

  return (


    

    <section
  id="universe"
  className="universe-section"
>

          <ShootingStar />
            <ShootingStar />
            <ShootingStar />
             <ShootingStar />
            <ShootingStar />
            <ShootingStar />

      <Canvas camera={{ position: [0, 0, 8] }}>

        <fog
          attach="fog"
          args={["#020617", 10, 40]}
        />

        <ambientLight intensity={1.8} />

        <pointLight
          position={[5, 5, 5]}
          intensity={25}
        />

        <pointLight
          position={[-5, -5, 5]}
          intensity={10}
        />

        <Stars
          radius={100}
          depth={50}
          count={7000}
          factor={6}
          saturation={0}
          fade
          speed={1}
        />

        <FloatingParticles />

        <GracieMoon />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
        />

      </Canvas>

    </section>

  );
}