import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./components/Model";
import "./styles.css";

const slimeCount = 10;
const radius = 15;
const spacing = 20;

function App() {
  return (
    <Canvas>
      <Environment files="/bg.hdr" background />
      {Array.from({ length: slimeCount }, (_, index) => (
        <Model
          key={index}
          index={index}
          slimeCount={slimeCount}
          radius={radius}
          spacing={spacing}
        />
      ))}
      <OrbitControls minDistance={5} maxDistance={100} />
    </Canvas>
  );
}

export default App;
