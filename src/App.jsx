import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./components/Model";
import "./styles.css";

function App() {
  const totalBoxes = 20;
  const radius = 10;
  const spacing = 30;

  return (
    <Canvas>
      <Environment files="/bg.hdr" background />
      {Array.from({ length: totalBoxes }, (_, index) => (
        <Model
          key={index}
          index={index}
          totalBoxes={totalBoxes}
          radius={radius}
          spacing={spacing}
        />
      ))}
      <OrbitControls />
    </Canvas>
  );
}

export default App;
