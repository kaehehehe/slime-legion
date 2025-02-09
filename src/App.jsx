import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SlimeGrid } from "./components/SlimeGrid";
import "./styles.css";

export default function App() {
  const numberOfGrids = 10;
  const gridSpacing = 1;

  // Calculate the positions for each grid
  const grids = Array.from({ length: numberOfGrids }, (_, index) => {
    // Adjust to center between the 5th and 6th grids
    const positionX = (index - 4.5) * gridSpacing; // Subtract 4.5 to center the 5th and 6th grids at 0
    const positionY = 0;
    return [positionX, positionY];
  });

  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{
          position: [0, 2, 15],
          near: 1,
          far: 50,
          fov: 45,
        }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[0, 10, 5]} intensity={2.0} />
        <pointLight position={[0, 0, 5]} intensity={1} />

        {grids.map((position, index) => (
          <SlimeGrid key={index} position={position} />
        ))}

        <OrbitControls minDistance={4} maxDistance={30} />
      </Canvas>
    </div>
  );
}
