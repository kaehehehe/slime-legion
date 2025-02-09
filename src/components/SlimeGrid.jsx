import React from "react";
import { ColorBox } from "./ColorBox";

const slimePixelGrid = [
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
  [0, 0, 0, , 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
];

const slimeColors = {
  1: "black",
  2: "#075EA1",
  3: "#209FFC",
  4: "#4CCDFB",
  5: "#FA6B70",
  6: "#FFFFFF",
};

const metalSlimeColors = {
  1: "black",
  2: "#777777",
  3: "#999999",
  4: "#BEBEBE",
  5: "#FA6B70",
  6: "#FFFFFF",
};

export const boxSize = 0.03;

const getRandomColorSet = () => {
  return Math.random() < 0.5 ? slimeColors : metalSlimeColors;
};

export function SlimeGrid({ position }) {
  const gridWidth = slimePixelGrid[0].length;
  const gridHeight = slimePixelGrid.length;

  const colors = getRandomColorSet();

  return (
    <>
      {slimePixelGrid.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          if (value in slimeColors) {
            return (
              <ColorBox
                key={`${rowIndex}-${colIndex}`}
                position={[
                  position[0] + (colIndex - gridWidth / 2) * boxSize,
                  position[1] + (gridHeight / 2 - rowIndex) * boxSize,
                  0,
                ]}
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
