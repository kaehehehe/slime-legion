export function getRandomColorSet(slimeColors, metalSlimeColors) {
  return Math.random() < 0.5 ? slimeColors : metalSlimeColors;
}
