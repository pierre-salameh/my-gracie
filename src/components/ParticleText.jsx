import { useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";
import { useMemo } from "react";

export default function ParticleText() {

  const font = useLoader(
    FontLoader,
    "/fonts/helvetiker_regular.typeface.json"
  );
  const ref = useRef();


  useFrame(() => {

  if(ref.current){

    ref.current.rotation.y += 0.002;

  }

});

<points
  ref={ref}
  geometry={geometry}
></points>

  const geometry = useMemo(() => {

    const textGeo = new TextGeometry(
      "GRACIE",
      {
        font,
        size: 1,
        depth: 0.1,
      }
    );

    textGeo.center();

    return textGeo;

  }, [font]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#fde047"
      />
    </points>
  );
}