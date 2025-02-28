import { Box } from "@react-three/drei";
import React from "react";
import { BOX_SIZE } from "./SlimeGrid";

export function ColorBox({ position, color }) {
  return (
    <Box position={position} args={[BOX_SIZE, BOX_SIZE, BOX_SIZE]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}
