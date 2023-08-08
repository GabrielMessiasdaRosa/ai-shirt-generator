import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React, { useRef } from "react";

function Backdrop() {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.2}
      scale={50}
      rotation={[0, 0, 0]}
      position={[0, 5, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.2}
        ambient={0.85}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
