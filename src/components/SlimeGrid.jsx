import React from "react";
import { ColorBox } from "./ColorBox";
import { getRandomColorSet } from "../utils/getRandomColorSet";

const SLIME_PIXEL_GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
  [0, 0, 1, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 0, 0],
  [0, 1, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 1, 3, 3, 4, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0],
  [1, 3, 3, 3, 3, 3, 3, 1, 6, 6, 6, 1, 3, 1, 6, 6, 6, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 3, 3, 3, 3, 3, 3, 1, 6, 1, 6, 1, 3, 1, 6, 1, 6, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 3, 3, 3, 3, 3, 3, 1, 6, 6, 6, 1, 3, 1, 6, 6, 6, 1, 2, 2, 2, 2, 4, 2, 1],
  [1, 3, 3, 3, 3, 3, 1, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 1, 2, 2, 2, 4, 2, 1],
  [1, 3, 3, 2, 3, 1, 5, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 5, 1, 2, 4, 4, 2, 1],
  [0, 1, 3, 2, 2, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 2, 4, 2, 1, 0],
  [0, 0, 1, 3, 2, 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 2, 4, 2, 1, 0, 0],
  [0, 0, 0, 1, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
];

const SLIME_COLORS = {
  1: "black",
  2: "#075EA1",
  3: "#209FFC",
  4: "#4CCDFB",
  5: "#FA6B70",
  6: "#FFFFFF",
};

const METAL_SLIME_COLORS = {
  1: "black",
  2: "#777777",
  3: "#999999",
  4: "#BEBEBE",
  5: "#FA6B70",
  6: "#FFFFFF",
};

export const BOX_SIZE = 0.03;

export function SlimeGrid({ position }) {
  const gridWidth = SLIME_PIXEL_GRID[0].length;
  const gridHeight = SLIME_PIXEL_GRID.length;

  const colors = getRandomColorSet(SLIME_COLORS, METAL_SLIME_COLORS);

  const getColorBoxPosition = ({ colIndex, rowIndex }) => [
    position[0] + (colIndex - gridWidth / 2) * BOX_SIZE,
    position[1] + (gridHeight / 2 - rowIndex) * BOX_SIZE,
    0,
  ];

  return (
    <>
      {SLIME_PIXEL_GRID.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          if (value in colors) {
            return (
              <ColorBox
                key={`${rowIndex}-${colIndex}`}
                position={getColorBoxPosition({ colIndex, rowIndex })}
                color={colors[value]}
              />
            );
          }
          return null;
        })
      )}
    </>
  );
}
