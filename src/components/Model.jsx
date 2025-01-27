import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Model = ({ index, slimeCount, radius, spacing }) => {
  const { scene } = useGLTF("slime.glb");
  const texture = useTexture("face.png");
  const ref = useRef();
  const speed = 0.005;
  const jumpHeight = 1;
  let angle = (index / slimeCount) * (2 * Math.PI);

  texture.flipY = false;

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
    }
  });

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
