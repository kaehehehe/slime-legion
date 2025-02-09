import { Box } from "@react-three/drei";
import React from "react";
import { boxSize } from "./SlimeGrid";

export function ColorBox({ position, color }) {
  return (
    <Box position={position} args={[boxSize, boxSize, boxSize]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}
