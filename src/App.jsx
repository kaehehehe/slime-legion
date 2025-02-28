import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SlimeGrid } from "./components/SlimeGrid";
import { KingSlimeGrid } from "./components/KingSlimeGrid";
import "./styles.css";

const NUMBER_OF_GRIDS = 12;
const SLIME_GRID_SPACING = 1;
const KING_SLIME_GRID_SPACING = -0.01;

const CAMERA_POSITION = [0, 2, 15];
const AMBIENT_LIGHT_INTENSITY = 1.0;

const DIRECTIONAL_LIGHT_POSITION = [0, 10, 5];
const DIRECTIONAL_LIGHT_INTENSITY = 2.0;

const POINT_LIGHT_POSITION = [0, 0, 5];
const POINT_LIGHT_INTENSITY = 1;

const calculateGridPositions = () => {
  return Array.from({ length: NUMBER_OF_GRIDS }, (_, index) => {
    if (index === 5) {
      const positionX = (index - 5.5) * KING_SLIME_GRID_SPACING;
      return [positionX, 0];
    }

    const positionX = (index - 5.5) * SLIME_GRID_SPACING;
    return [positionX, 0];
  });
};

export default function App() {
  const grids = calculateGridPositions();

  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{
          position: CAMERA_POSITION,
          near: 1,
          far: 50,
          fov: 45,
        }}
      >
        <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
        <directionalLight
          position={DIRECTIONAL_LIGHT_POSITION}
          intensity={DIRECTIONAL_LIGHT_INTENSITY}
        />
        <pointLight
          position={POINT_LIGHT_POSITION}
          intensity={POINT_LIGHT_INTENSITY}
        />

        {grids.map((position, index) => {
          if (index === 6) return null;

          if (index === 5) {
            return <KingSlimeGrid key={index} position={position} />;
          } else {
            return <SlimeGrid key={index} position={position} />;
          }
        })}

        <OrbitControls minDistance={4} maxDistance={30} />
      </Canvas>
    </div>
  );
}
