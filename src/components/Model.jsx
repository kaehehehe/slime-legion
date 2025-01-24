import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Model = ({ index, totalBoxes, radius, spacing }) => {
  const { scene } = useGLTF("slime.glb");
  const ref = useRef();
  const speed = 0.005;
  const jumpHeight = 1;
  let angle = (index / totalBoxes) * (2 * Math.PI);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const jump = Math.sin(time * 5) * jumpHeight;

    angle += speed;
    ref.current.position.x = (radius + spacing) * Math.cos(angle);
    ref.current.position.z = (radius + spacing) * Math.sin(angle);
    ref.current.position.y = jump;
  });

  return (
    <mesh ref={ref}>
      <primitive object={scene.clone()} scale={[5, 5, 5]} />
    </mesh>
  );
};
